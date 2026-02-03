import { NextResponse } from "next/server";

type NewsletterRequestBody = {
  email?: unknown;
  consent?: unknown;
  company?: unknown; // honeypot
};

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const b = (body ?? {}) as NewsletterRequestBody;
  const email = typeof b.email === "string" ? b.email : "";
  const consent = b.consent === true;
  const hp = typeof b.company === "string" ? b.company : "";

  // Honeypot: bots will often fill hidden fields.
  if (hp) return NextResponse.json({ ok: true });

  if (!email || !email.includes("@")) {
    return NextResponse.json({ ok: false, error: "Email is required" }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ ok: false, error: "Consent is required" }, { status: 400 });
  }

  // Placeholder: integrate Mailchimp/Brevo/ConvertKit or DB storage later.
  // For now we just log to server output.
  console.log("[newsletter] subscription", { email, consent, at: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}

