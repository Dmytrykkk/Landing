"use client";

import { useLocale } from "@/contexts/LocaleContext";

export default function WhyFKNFM() {
  const { t } = useLocale();
  const w = t.whyFKNFM;
  const points = [
    { title: w.point1Title, description: w.point1Desc, link: "https://ksu24.kspu.edu" },
    { title: w.point2Title, description: w.point2Desc, link: null },
    { title: w.point3Title, description: w.point3Desc, link: null },
    { title: w.point4Title, description: w.point4Desc, link: null },
  ];

  return (
    <section
      id="why-fknfm"
      className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900"
      aria-labelledby="why-fknfm-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="why-fknfm-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12"
        >
          {w.heading}
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          role="list"
        >
          {points.map((point, index) => (
            <article
              key={index}
              className="p-5 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-900"
              role="listitem"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {point.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3">
                {point.description}
              </p>
              {point.link && (
                <a
                  href={point.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded font-medium"
                  aria-label={`${w.learnMore} — ${w.openInNewTab}`}
                >
                  {w.learnMore}
                  <span aria-hidden="true"> →</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
