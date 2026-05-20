"use client";

import { useState, useEffect, useMemo } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { defaultLocale, translations } from "@/lib/i18n/translations";
import { faqItems } from "@/lib/faq-data";

export default function FAQ() {
  const { locale } = useLocale();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Use defaultLocale until mounted to avoid server/client hydration mismatch (stored locale is client-only)
  const t = mounted ? translations[locale] : translations[defaultLocale];
  const isEn = mounted && locale === "en";
  const faqs = useMemo(
    () =>
      faqItems.map((item) => ({
        question: isEn ? item.questionEn : item.question,
        answer: isEn ? item.answerEn : item.answer,
      })),
    [isEn]
  );

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleItem(index);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      const nextIndex = index < faqs.length - 1 ? index + 1 : 0;
      const nextButton = document.getElementById(`faq-button-${nextIndex}`);
      nextButton?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      const prevIndex = index > 0 ? index - 1 : faqs.length - 1;
      const prevButton = document.getElementById(`faq-button-${prevIndex}`);
      prevButton?.focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      const firstButton = document.getElementById("faq-button-0");
      firstButton?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      const lastButton = document.getElementById(`faq-button-${faqs.length - 1}`);
      lastButton?.focus();
    }
  };

  return (
    <section
      id="faq"
      className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2
          id="faq-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12"
          suppressHydrationWarning
        >
          {t.faq.heading}
        </h2>
        <div className="space-y-2" role="region" aria-labelledby="faq-heading" suppressHydrationWarning>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const questionId = `faq-question-${index}`;
            const answerId = `faq-answer-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] dark:from-gray-800 dark:to-gray-700 border-2 border-[#bfdbfe] dark:border-gray-600 rounded-lg overflow-hidden hover:border-[#3b82f6] dark:hover:border-blue-500 hover:shadow-lg transition-all"
             >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleItem(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  >
                    <span
                      id={questionId}
                      className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white pr-4"
                    >
                      {faq.question}
                    </span>
                    <span
                      className="flex-shrink-0 text-[#1e40af] dark:text-[#3b82f6]"
                      aria-hidden="true"
                    >
                      <svg
                        className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 sm:px-6 py-4 sm:py-5 bg-white/60 dark:bg-gray-900/40">
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
