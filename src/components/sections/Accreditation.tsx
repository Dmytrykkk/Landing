"use client";

import Link from "next/link";

export default function Accreditation() {
  return (
    <section
      id="licenses"
      className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900"
      aria-labelledby="licenses-heading"
      suppressHydrationWarning
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            id="licenses-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6"
          >
            Ліцензії та офіційні відомості
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-center" suppressHydrationWarning>
            Офіційна інформація про ліцензії та акредитації Херсонського державного університету.
            Детальна інформація про освітні програми, ліцензовані обсяги та акредитації доступна в
            {" "}
            <Link
              href="https://registry.edbo.gov.ua/university/48/specialities/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e40af] dark:text-[#3b82f6] hover:text-[#1e3a8a] dark:hover:text-[#60a5fa] font-semibold underline underline-offset-4"
            >
              офіційному реєстрі ЄДЕБО
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

