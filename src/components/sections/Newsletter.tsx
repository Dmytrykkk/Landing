"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent, company: "" }),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(json.error || "Не вдалося підписатися. Спробуйте ще раз.");
        return;
      }
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setError("Не вдалося підписатися. Перевірте інтернет-з'єднання.");
    }
  }

  return (
    <section
      id="newsletter"
      className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800"
      aria-labelledby="newsletter-heading"
      suppressHydrationWarning
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 sm:p-12 lg:p-14 shadow-sm" suppressHydrationWarning>
          <h2 id="newsletter-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Підписка на новини
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Отримуйте анонси подій, дедлайни вступу та оновлення програм.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4" aria-label="Форма підписки">
            <div className="flex flex-col sm:flex-row gap-4">
              <label className="flex-grow">
                <span className="sr-only">Email</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                />
              </label>
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-8 py-3.5 rounded-lg bg-[#1e40af] dark:bg-[#3b82f6] text-white font-semibold hover:bg-[#1e3a8a] dark:hover:bg-[#2563eb] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Підписка…" : "Підписатися"}
              </button>
            </div>

            <label className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1"
                required
              />
              <span>
                Я погоджуюсь отримувати інформаційні листи від університету 
              </span>
            </label>

            {status === "success" ? (
              <div className="text-sm text-green-700 dark:text-green-200 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                Дякуємо! Ви підписані.
              </div>
            ) : null}
            {status === "error" ? (
              <div className="text-sm text-red-700 dark:text-red-200 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                {error}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}

