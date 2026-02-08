"use client";

import { useLocale } from "@/contexts/LocaleContext";

const PLATFORM_LINKS = [
  {
    id: "ksuonline",
    url: "https://ksuonline.kspu.edu",
    icon: "📚",
    nameKey: "ksuOnline" as const,
    descKey: "ksuOnlineDesc" as const,
  },
  {
    id: "ksu24",
    url: "https://ksu24.kspu.edu",
    icon: "🎓",
    nameKey: "ksu24" as const,
    descKey: "ksu24Desc" as const,
  },
  {
    id: "zoom",
    url: "#",
    icon: "📹",
    nameKey: "zoom" as const,
    descKey: "zoomDesc" as const,
  },
] as const;

export default function LearningFormat() {
  const { t } = useLocale();

  return (
    <section
      id="learning-format"
      className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900"
      aria-labelledby="learning-format-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="learning-format-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12"
        >
          {t.learningFormat.heading}
        </h2>

        <section className="mb-12 sm:mb-16" aria-labelledby="platforms-heading">
          <h3
            id="platforms-heading"
            className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center"
          >
            {t.learningFormat.platformsHeading}
          </h3>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            role="list"
          >
            {PLATFORM_LINKS.map((platform) => (
              <a
                key={platform.id}
                href={platform.url}
                target={platform.url.startsWith("http") ? "_blank" : undefined}
                rel={platform.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col gap-4 group"
              >
                <article
                  className="bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] dark:from-gray-800 dark:to-gray-700 p-6 sm:p-8 rounded-lg border-2 border-[#bfdbfe] dark:border-gray-600 text-center hover:shadow-lg hover:border-[#3b82f6] dark:hover:border-blue-500 transition-all focus-within:ring-2 focus-within:ring-[#3b82f6] focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-900"
                  role="listitem"
                >
                  <div
                    className="text-4xl sm:text-5xl mb-4"
                    role="img"
                    aria-hidden
                  >
                    {platform.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#1e40af] dark:group-hover:text-blue-400">
                    {t.learningFormat[platform.nameKey]}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {t.learningFormat[platform.descKey]}
                  </p>
                  {platform.url.startsWith("http") && (
                    <span className="mt-2 inline-block text-sm font-medium text-[#1e40af] dark:text-blue-400">
                      {platform.id === "ksuonline" ? "ksuonline.kspu.edu" : "ksu24.kspu.edu"} →
                    </span>
                  )}
                </article>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12 sm:mb-16" aria-labelledby="onsite-heading">
          <h3
            id="onsite-heading"
            className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center"
          >
            {t.learningFormat.onSiteHeading}
          </h3>
          <div className="max-w-2xl mx-auto p-6 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 text-center">
              {t.learningFormat.onSiteDesc}
            </p>
          </div>
        </section>

        <section aria-labelledby="internship-heading">
          <h3
            id="internship-heading"
            className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center"
          >
            {t.learningFormat.internshipHeading}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <article className="p-6 sm:p-8 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 border-2 border-blue-100 dark:border-gray-600">
              <div className="text-3xl mb-4" aria-hidden>
                🏛️
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {t.learningFormat.internalTitle}
              </h4>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                {t.learningFormat.internalDesc}
              </p>
            </article>
            <article className="p-6 sm:p-8 rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-800 border-2 border-emerald-100 dark:border-gray-600">
              <div className="text-3xl mb-4" aria-hidden>
                🏢
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {t.learningFormat.externalTitle}
              </h4>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                {t.learningFormat.externalDesc}
              </p>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}
