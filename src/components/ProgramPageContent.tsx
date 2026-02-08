"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import type { Program } from "@/lib/programs-data";

export default function ProgramPageContent({ program }: { program: Program }) {
  const { t, locale } = useLocale();
  const p = t.programs;
  const isEn = locale === "en";
  const name = isEn ? program.nameEn : program.name;
  const description = isEn ? program.descriptionEn : program.description;
  const careers = isEn && program.careersEn ? program.careersEn : program.careers;

  return (
    <main id="main-content" className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Link
          href="/#programs"
          className="inline-flex items-center text-sm font-medium text-[#1e40af] dark:text-[#93c5fd] hover:underline mb-8"
        >
          {p.backToPrograms}
        </Link>

        <article className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 sm:p-8 lg:p-10">
          <header className="mb-6">
            <span
              className="inline-block px-3 py-1 bg-[#eff6ff] dark:bg-[#1e3a8a] text-[#1e40af] dark:text-[#93c5fd] rounded-full text-sm font-semibold mb-4"
              aria-label={`${p.programCodeAria} ${program.code}`}
            >
              {program.code}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              {name}
            </h1>
          </header>

          <p className="text-base text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            {description}
          </p>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              {p.careersHeading.replace(":", "")}
            </h2>
            <ul className="space-y-2" role="list">
              {careers.map((career, i) => (
                <li
                  key={i}
                  className="text-gray-700 dark:text-gray-300 flex items-start"
                >
                  <span className="mr-2 text-[#1e40af] dark:text-[#3b82f6] mt-1" aria-hidden>
                    •
                  </span>
                  {career}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              {p.techStackHeading.replace(":", "")}
            </h2>
            <ul className="flex flex-wrap gap-2" role="list">
              {program.technologies.map((tech, i) => (
                <li
                  key={i}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md text-sm font-medium"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          <p className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <a
              href={program.universityPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#1e40af] dark:text-[#93c5fd] font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
              aria-label={p.moreOnSitePageAria}
            >
              {p.moreOnSitePage}
            </a>
          </p>
        </article>
      </div>
    </main>
  );
}
