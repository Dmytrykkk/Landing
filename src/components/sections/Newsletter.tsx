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
      className="py-12 sm:py-16 lg:py-20 bg-gray-50"
      aria-labelledby="newsletter-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-sm">
          <h2 id="newsletter-heading" className="text-2xl sm:text-3xl font-bold text-gray-900">
            Підписка на новини
          </h2>
          <p className="text-gray-700 mt-2">
            Отримуйте анонси подій, дедлайни вступу та оновлення програм. (Плейсхолдер: підключіть
            офіційний сервіс розсилок, коли будуть готові дані.)
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-3" aria-label="Форма підписки">
            <div className="flex flex-col sm:flex-row gap-3">
              <label className="flex-grow">
                <span className="sr-only">Email</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2"
                />
              </label>
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 rounded-lg bg-[#1e40af] text-white font-semibold hover:bg-[#1e3a8a] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Підписка…" : "Підписатися"}
              </button>
            </div>

            <label className="flex items-start gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1"
                required
              />
              <span>
                Я погоджуюсь отримувати інформаційні листи від університету (плейсхолдер тексту
                згоди).
              </span>
            </label>

            {status === "success" ? (
              <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg p-3">
                Дякуємо! Ви підписані.
              </div>
            ) : null}
            {status === "error" ? (
              <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
                {error}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}

