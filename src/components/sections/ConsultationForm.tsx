"use client";

import { useState, FormEvent } from "react";
import { useLocale } from "@/contexts/LocaleContext";

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
  const { t } = useLocale();
  const c = t.consultationForm;
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
      newErrors.name = c.errorName;
    }

    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = c.errorEmail;
    }

    if (!formData.phone || !validatePhone(formData.phone)) {
      newErrors.phone = c.errorPhone;
    }

    if (!formData.program) {
      newErrors.program = c.errorProgram;
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
          {c.heading}
        </h2>
        <p className="text-center text-blue-100 dark:text-gray-300 mb-8">
          {c.subtitle}
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl"
          noValidate
          aria-label={c.formAria}
        >
          <fieldset className="space-y-5 sm:space-y-6 border-0 p-0 m-0">
            <legend className="sr-only">{c.legend}</legend>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                {c.nameLabel} <span className="text-red-600 dark:text-red-400" aria-label={c.requiredAria}>*</span>
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
                placeholder={c.namePlaceholder}
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
                {c.emailLabel} <span className="text-red-600 dark:text-red-400" aria-label={c.requiredAria}>*</span>
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
                {c.phoneLabel} <span className="text-red-600 dark:text-red-400" aria-label={c.requiredAria}>*</span>
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
                placeholder={c.phonePlaceholder}
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
                {c.programLabel} <span className="text-red-600 dark:text-red-400" aria-label={c.requiredAria}>*</span>
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
                <option value="">{c.chooseProgram}</option>
                <option value="121">{c.option121}</option>
                <option value="122">{c.option122}</option>
                <option value="014.08">{c.option01408}</option>
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
                  {c.successMsg}
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
                  {c.errorMsg}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-[#1e40af] text-white rounded-lg font-semibold hover:bg-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-busy={isSubmitting}
            >
              {isSubmitting ? c.submitting : c.submit}
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
