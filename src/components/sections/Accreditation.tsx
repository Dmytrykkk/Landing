"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useOfficialData } from "@/hooks/useOfficialData";

export default function Accreditation() {
  const { licenses } = useOfficialData();

  const items = useMemo(() => {
    return [...licenses].sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999));
  }, [licenses]);

  return (
    <section
      id="licenses"
      className="py-12 sm:py-16 lg:py-20 bg-white"
      aria-labelledby="licenses-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            id="licenses-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6"
          >
            Ліцензії та офіційні відомості
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-center mb-10">
            Нижче — місце для офіційних ліцензій/акредитацій, наданих університетом. Зараз
            відображаються плейсхолдери; замініть їх даними від професора.
          </p>

          <div className="space-y-4" role="list" aria-label="Ліцензії та акредитації">
            {items.map((lic) => (
              <article
                key={lic.id}
                className="border border-gray-200 rounded-lg p-5 sm:p-6 bg-gray-50"
                role="listitem"
              >
                <header className="mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{lic.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {lic.issuedBy ? <span>Видав: {lic.issuedBy}</span> : null}
                    {lic.issuedBy && lic.licenseNumber ? <span> • </span> : null}
                    {lic.licenseNumber ? <span>Номер: {lic.licenseNumber}</span> : null}
                  </p>
                  {(lic.validFrom || lic.validTo) && (
                    <p className="text-xs text-gray-600 mt-1">
                      {lic.validFrom ? <span>Діє з {lic.validFrom}</span> : null}
                      {lic.validFrom && lic.validTo ? <span> — </span> : null}
                      {lic.validTo ? <span>до {lic.validTo}</span> : null}
                    </p>
                  )}
                </header>
                {lic.details ? (
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{lic.details}</p>
                ) : null}
                {lic.sourceUrl ? (
                  <div className="mt-4">
                    <Link
                      href={lic.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-[#1e40af] hover:text-[#1e3a8a] underline underline-offset-4"
                    >
                      Джерело / документ
                    </Link>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

