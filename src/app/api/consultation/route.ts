import { NextRequest, NextResponse } from "next/server";

interface ConsultationRequestBody {
  name: string;
  email: string;
  phone: string;
  program: string;
}

interface ValidationError {
  field: string;
  message: string;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\+\-\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 10;
}

function validateName(name: string): boolean {
  return typeof name === "string" && name.trim().length >= 2 && name.trim().length <= 100;
}

function validateProgram(program: string): boolean {
  const validPrograms = ["121", "122", "014.08"];
  return validPrograms.includes(program);
}

function validateRequestBody(body: unknown): {
  isValid: boolean;
  errors: ValidationError[];
  data?: ConsultationRequestBody;
} {
  const errors: ValidationError[] = [];

  if (!body || typeof body !== "object") {
    return {
      isValid: false,
      errors: [{ field: "body", message: "Request body is required" }],
    };
  }

  const { name, email, phone, program } = body as Partial<ConsultationRequestBody>;

  if (!name || !validateName(name)) {
    errors.push({
      field: "name",
      message: "Name must be between 2 and 100 characters",
    });
  }

  if (!email || !validateEmail(email)) {
    errors.push({
      field: "email",
      message: "Valid email address is required",
    });
  }

  if (!phone || !validatePhone(phone)) {
    errors.push({
      field: "phone",
      message: "Valid phone number is required (minimum 10 digits)",
    });
  }

  if (!program || !validateProgram(program)) {
    errors.push({
      field: "program",
      message: "Valid program selection is required",
    });
  }

  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  return {
    isValid: true,
    errors: [],
    data: {
      name: name!.trim(),
      email: email!.toLowerCase().trim(),
      phone: phone!.trim(),
      program: program!,
    },
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validation = validateRequestBody(body);

    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const { data: validatedData } = validation;

    const webhookUrl = process.env.CONSULTATION_WEBHOOK_URL;
    if (webhookUrl && webhookUrl.startsWith("https://")) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(validatedData),
        });
      } catch {
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Consultation request received successfully",
        data: {
          id: `consultation-${Date.now()}`,
          submittedAt: new Date().toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid JSON in request body",
        },
        { status: 400 }
      );
    }

    console.error("Consultation API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      message: "Consultation API endpoint",
      method: "POST",
    },
    { status: 200 }
  );
}
