"use client";

import { useState } from "react";
import { faqItems } from "@/lib/faq-data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = faqItems;

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
        >
          Часті запитання
        </h2>
        <div className="space-y-2" role="region" aria-labelledby="faq-heading">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const questionId = `faq-question-${index}`;
            const answerId = `faq-answer-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-colors aria-expanded:bg-gray-50 dark:aria-expanded:bg-gray-800"
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
                  <div className="px-4 sm:px-6 py-4 sm:py-5 bg-gray-50 dark:bg-gray-800">
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
