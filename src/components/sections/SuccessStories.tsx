"use client";

import { useLocale } from "@/contexts/LocaleContext";
import AlumniCard from "@/components/AlumniCard";
import { alumniStories } from "@/lib/alumni-data";

export default function SuccessStories() {
  const { t, locale } = useLocale();
  const isEn = locale === "en";

  return (
    <section
      id="success-stories"
      className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800"
      aria-labelledby="success-stories-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="success-stories-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12"
        >
          {t.successStories.heading}
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          role="list"
        >
          {alumniStories.map((graduate, index) => (
            <AlumniCard
              key={index}
              fullName={graduate.fullName}
              role={isEn && graduate.roleEn ? graduate.roleEn : graduate.role}
              company={isEn && graduate.companyEn ? graduate.companyEn : graduate.company}
              graduationYear={graduate.graduationYear}
              program={isEn && graduate.programEn ? graduate.programEn : graduate.program}
              quote={isEn && graduate.quoteEn ? graduate.quoteEn : graduate.quote}
              achievements={isEn && graduate.achievementsEn ? graduate.achievementsEn : graduate.achievements}
              photoUrl={graduate.photoUrl}
              linkedInUrl={graduate.linkedInUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
