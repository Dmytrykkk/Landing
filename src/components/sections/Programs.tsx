"use client";

import Link from "next/link";
import { useState } from "react";
import { programs } from "@/lib/programs-data";
import type { StudyLevel } from "@/lib/programs-data";

const LEVEL_LABELS: Record<StudyLevel, string> = {
  bachelor: "Бакалаврат",
  master: "Магістратура",
  phd: "Аспірантура",
};

export default function Programs() {
  const [activeLevel, setActiveLevel] = useState<StudyLevel>("bachelor");
  const filteredPrograms = programs.filter((p) => p.level === activeLevel);

  return (
    <section
      id="programs"
      className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800"
      aria-labelledby="programs-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="programs-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12"
        >
          Навчальні програми
        </h2>

        <div
          className="flex flex-wrap justify-center gap-1 sm:gap-0 border-b border-gray-200 dark:border-gray-700 mb-8 sm:mb-10"
          role="tablist"
          aria-label="Освітні рівні"
        >
          {(["bachelor", "master", "phd"] as const).map((level) => (
            <button
              key={level}
              type="button"
              role="tab"
              aria-selected={activeLevel === level}
              aria-controls={`programs-panel-${level}`}
              id={`tab-${level}`}
              onClick={() => setActiveLevel(level)}
              className={`
                px-4 sm:px-6 py-3 text-sm font-semibold transition-all duration-200
                border-b-2 -mb-px
                focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800
                ${
                  activeLevel === level
                    ? "text-[#1e40af] dark:text-[#93c5fd] border-[#1e40af] dark:border-[#3b82f6]"
                    : "text-gray-600 dark:text-gray-400 border-transparent hover:text-gray-900 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600"
                }
              `}
            >
              {LEVEL_LABELS[level]}
            </button>
          ))}
        </div>

        <div
          id={`programs-panel-${activeLevel}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeLevel}`}
          className="transition-opacity duration-200"
        >
          {filteredPrograms.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-400 py-12">
              Програм цього рівня поки немає.
            </p>
          ) : (
            <div
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
              role="list"
            >
              {filteredPrograms.map((program) => (
                <Link
                  key={program.id}
                  href={`/programs/${program.slug}`}
                  className="block group"
                  role="listitem"
                >
                  <article
                    className="h-full bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-lg shadow-md transition-all duration-300 flex flex-col focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-800 group-hover:shadow-xl group-hover:-translate-y-1"
                    aria-label={`Перейти до програми ${program.name}`}
                  >
                    <header className="mb-4">
                      <span
                        className="inline-block px-3 py-1 bg-[#eff6ff] dark:bg-[#1e3a8a] text-[#1e40af] dark:text-[#93c5fd] rounded-full text-xs sm:text-sm font-semibold mb-3"
                        aria-label={`Код програми ${program.code}`}
                      >
                        {program.code}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#1e40af] dark:group-hover:text-[#93c5fd] transition-colors">
                        {program.name}
                      </h3>
                    </header>

                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                      {program.description}
                    </p>

                    <div className="space-y-4">
                      <section>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Кар&apos;єрні можливості:
                        </h4>
                        <ul className="space-y-1" role="list">
                          {program.careers.map((career, careerIndex) => (
                            <li
                              key={careerIndex}
                              className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 flex items-start"
                              role="listitem"
                            >
                              <span
                                className="mr-2 text-[#1e40af] dark:text-[#3b82f6] mt-1"
                                aria-hidden="true"
                              >
                                •
                              </span>
                              {career}
                            </li>
                          ))}
                        </ul>
                      </section>

                      <section>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Технологічний стек:
                        </h4>
                        <ul className="flex flex-wrap gap-2" role="list">
                          {program.technologies.map((tech, techIndex) => (
                            <li
                              key={techIndex}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs font-medium"
                              role="listitem"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </section>

                      <a
                        href={program.universityPageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-4 inline-flex items-center text-sm font-medium text-[#1e40af] dark:text-[#93c5fd] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
                        aria-label={`Відкрити опис програми на сайті ХДУ (нова вкладка)`}
                      >
                        Детальніше на сайті ХДУ →
                      </a>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
