\"use client\";

import { useMemo } from \"react\";
import Link from \"next/link\";
import type { StudyLevel } from \"@/types/official-data\";
import { useOfficialData } from \"@/hooks/useOfficialData\";

const LEVEL_LABEL: Record<StudyLevel, string> = {
  bachelor: \"Bachelor\",
  master: \"Master\",
  phd: \"PhD\",
};

export default function Programs() {
  const { programs } = useOfficialData();

  const grouped = useMemo(() => {
    const byLevel: Record<StudyLevel, typeof programs> = {
      bachelor: [],
      master: [],
      phd: [],
    };
    for (const p of programs) byLevel[p.level].push(p);
    for (const level of Object.keys(byLevel) as StudyLevel[]) {
      byLevel[level].sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999));
    }
    return byLevel;
  }, [programs]);

  return (
    <section
      id="programs"
      className="py-12 sm:py-16 lg:py-20 bg-gray-50"
      aria-labelledby="programs-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="programs-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-12"
        >
          Навчальні програми
        </h2>
        <div className="space-y-10">
          {(Object.keys(grouped) as StudyLevel[]).map((level) => (
            <section key={level} aria-label={`${LEVEL_LABEL[level]} programs`}>
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {LEVEL_LABEL[level]}
                </h3>
                <p className="text-sm text-gray-600">
                  Дані будуть оновлені офіційною інформацією від професора.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8" role="list">
                {grouped[level].map((program) => (
                  <article
                    key={program.id}
                    className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                    role="listitem"
                  >
                    <header className="mb-4">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        {program.code ? (
                          <span
                            className="inline-block px-3 py-1 bg-[#eff6ff] text-[#1e40af] rounded-full text-xs sm:text-sm font-semibold"
                            aria-label={`Код програми ${program.code}`}
                          >
                            {program.code}
                          </span>
                        ) : null}
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-semibold">
                          {LEVEL_LABEL[program.level]}
                        </span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                        {program.name}
                      </h4>
                    </header>

                    <p className="text-sm sm:text-base text-gray-700 mb-6 flex-grow">
                      {program.description}
                    </p>

                    <div className="space-y-4">
                      <section>
                        <h5 className="text-sm font-semibold text-gray-900 mb-2">
                          Кар&apos;єрні можливості:
                        </h5>
                        <ul className="space-y-1" role="list">
                          {program.careers.map((career) => (
                            <li
                              key={career}
                              className="text-xs sm:text-sm text-gray-700 flex items-start"
                              role="listitem"
                            >
                              <span className="mr-2 text-[#1e40af] mt-1" aria-hidden="true">
                                •
                              </span>
                              {career}
                            </li>
                          ))}
                        </ul>
                      </section>

                      <section>
                        <h5 className="text-sm font-semibold text-gray-900 mb-2">
                          Технологічний стек:
                        </h5>
                        <ul className="flex flex-wrap gap-2" role="list">
                          {program.techStack.map((tech) => (
                            <li
                              key={tech}
                              className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs font-medium"
                              role="listitem"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </section>

                      <section className="pt-2 flex flex-wrap gap-2">
                        {program.programUrl ? (
                          <Link
                            href={program.programUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 bg-[#1e40af] text-white rounded-lg font-semibold hover:bg-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 transition-colors text-sm"
                          >
                            Переглянути програму
                          </Link>
                        ) : (
                          <span className="text-sm text-gray-500">
                            Посилання на програму буде додано.
                          </span>
                        )}
                        {program.catalogUrl ? (
                          <Link
                            href={program.catalogUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 bg-white text-[#1e40af] border border-[#1e40af] rounded-lg font-semibold hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 transition-colors text-sm"
                          >
                            Каталог / PDF
                          </Link>
                        ) : null}
                      </section>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
