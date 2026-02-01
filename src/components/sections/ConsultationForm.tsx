"use client";

import { useState, FormEvent } from "react";

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, string | number | boolean | undefined>
    ) => void;
  }
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  program?: string;
}

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 10;
  };

  const validateName = (name: string): boolean => {
    return name.trim().length >= 2 && name.trim().length <= 100;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!validateName(formData.name)) {
      newErrors.name = "Введіть коректне ім'я (від 2 до 100 символів)";
    }

    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Введіть коректну email адресу";
    }

    if (!formData.phone || !validatePhone(formData.phone)) {
      newErrors.phone = "Введіть коректний номер телефону (мінімум 10 цифр)";
    }

    if (!formData.program) {
      newErrors.program = "Оберіть програму навчання";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("idle");

    if (!validateForm()) {
      const firstErrorField = document.querySelector(
        '[aria-invalid="true"]'
      ) as HTMLElement;
      firstErrorField?.focus();
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors && Array.isArray(data.errors)) {
          const serverErrors: FormErrors = {};
          data.errors.forEach((error: { field: string; message: string }) => {
            serverErrors[error.field as keyof FormErrors] = error.message;
          });
          setErrors(serverErrors);
          const firstErrorField = document.querySelector(
            '[aria-invalid="true"]'
          ) as HTMLElement;
          firstErrorField?.focus();
          return;
        }
        throw new Error(data.error || "Failed to submit form");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", program: "" });

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "form_submit", {
          event_category: "engagement",
          event_label: "consultation_form",
          form_name: "consultation",
          program: formData.program,
        });
      }
      
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="consultation-form"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#1e40af] via-[#1e3a8a] to-[#1e40af] dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
      aria-labelledby="consultation-form-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <h2
          id="consultation-form-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4"
        >
          Запишіться на консультацію
        </h2>
        <p className="text-center text-blue-100 dark:text-gray-300 mb-8">
          Залиште свої контактні дані, і наші консультанти зв&apos;яжуться з вами
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl"
          noValidate
          aria-label="Форма консультації"
        >
          <fieldset className="space-y-5 sm:space-y-6 border-0 p-0 m-0">
            <legend className="sr-only">Контактна інформація</legend>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                ПІБ <span className="text-red-600 dark:text-red-400" aria-label="обов&apos;язкове поле">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors ${
                  errors.name
                    ? "border-red-500 dark:border-red-400"
                    : "border-gray-300 dark:border-gray-600"
                }`}
                placeholder="Введіть ваше повне ім'я"
              />
              {errors.name && (
                <p
                  id="name-error"
                  role="alert"
                  className="mt-2 text-sm text-red-600 dark:text-red-400"
                  aria-live="polite"
                >
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                Email <span className="text-red-600 dark:text-red-400" aria-label="обов&apos;язкове поле">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors ${
                  errors.email
                    ? "border-red-500 dark:border-red-400"
                    : "border-gray-300 dark:border-gray-600"
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p
                  id="email-error"
                  role="alert"
                  className="mt-2 text-sm text-red-600 dark:text-red-400"
                  aria-live="polite"
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                Телефон <span className="text-red-600 dark:text-red-400" aria-label="обов&apos;язкове поле">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors ${
                  errors.phone
                    ? "border-red-500 dark:border-red-400"
                    : "border-gray-300 dark:border-gray-600"
                }`}
                placeholder="+380 XX XXX XX XX"
              />
              {errors.phone && (
                <p
                  id="phone-error"
                  role="alert"
                  className="mt-2 text-sm text-red-600 dark:text-red-400"
                  aria-live="polite"
                >
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="program"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                Програма, що цікавить <span className="text-red-600 dark:text-red-400" aria-label="обов&apos;язкове поле">*</span>
              </label>
              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={!!errors.program}
                aria-describedby={errors.program ? "program-error" : undefined}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors ${
                  errors.program
                    ? "border-red-500 dark:border-red-400"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              >
                <option value="">Оберіть програму</option>
                <option value="121">121 Інженерія програмного забезпечення</option>
                <option value="122">122 Комп&apos;ютерні науки</option>
                <option value="014.08">014.08 Середня освіта (Інформатика)</option>
              </select>
              {errors.program && (
                <p
                  id="program-error"
                  role="alert"
                  className="mt-2 text-sm text-red-600 dark:text-red-400"
                  aria-live="polite"
                >
                  {errors.program}
                </p>
              )}
            </div>

            {submitStatus === "success" && (
              <div
                role="alert"
                className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                aria-live="polite"
              >
                <p className="text-sm font-medium text-green-800 dark:text-green-200">
                  Дякуємо! Ваша заявка відправлена. Ми зв&apos;яжемося з вами найближчим часом.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div
                role="alert"
                className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                aria-live="assertive"
              >
                <p className="text-sm font-medium text-red-800 dark:text-red-200">
                  Помилка при відправці форми. Спробуйте ще раз.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-[#1e40af] text-white rounded-lg font-semibold hover:bg-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-busy={isSubmitting}
            >
              {isSubmitting ? "Відправка..." : "Відправити заявку"}
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
