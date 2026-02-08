"use client";

import { useLocale } from "@/contexts/LocaleContext";
import { partners } from "@/lib/partners-data";

function PartnerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2 20h20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2Z" />
      <circle cx="12" cy="8" r="4" />
    </svg>
  );
}

export default function Partners() {
  const { t } = useLocale();

  return (
    <section
      id="partners"
      className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900"
      aria-labelledby="partners-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="partners-heading"
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12"
        >
          {t.partners.heading}
        </h2>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          role="list"
          aria-label={t.partners.ariaLabel}
        >
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-3 p-4 sm:p-6 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 min-h-[100px] sm:min-h-[120px] hover:border-[#3b82f6] dark:hover:border-blue-500 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              role="listitem"
            >
              {partner.logoUrl ? (
                <img
                  src={partner.logoUrl}
                  alt=""
                  className="max-h-12 sm:max-h-14 w-auto object-contain"
                  width={120}
                  height={56}
                />
              ) : (
                <PartnerIcon className="w-10 h-10 sm:w-12 sm:h-12 text-[#1e40af] dark:text-blue-400 shrink-0" />
              )}
              <span className="text-center text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 line-clamp-3">
                {partner.name}
              </span>
            </a>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          <a
            href="https://www.kspu.edu/Legislation/memorandums.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1e40af] dark:hover:text-blue-400 underline"
          >
            {t.partners.memorandumsLink}
          </a>
        </p>
      </div>
    </section>
  );
}
