"use client";

/**
 * Reusable alumni / success story card.
 * Content sources: university site (About/Graduates), faculty pages, LinkedIn-style profiles.
 * @see lib/content-sources.ts
 */
export type AlumniCardProps = {
  fullName: string;
  role: string;
  company: string;
  graduationYear: string;
  program?: string;
  quote?: string;
  achievements?: string[];
  photoUrl?: string | null;
  linkedInUrl?: string | null;
  /** Optional source for verification (e.g. "Official university website") */
  source?: string;
};

export default function AlumniCard({
  fullName,
  role,
  company,
  graduationYear,
  program,
  quote,
  achievements,
  photoUrl,
  linkedInUrl,
}: AlumniCardProps) {
  return (
    <article
      className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-800"
      role="listitem"
    >
      <header className="mb-4">
        <div className="flex items-start gap-4">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt=""
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover flex-shrink-0 bg-gray-200 dark:bg-gray-700"
            />
          ) : (
            <div
              className="w-16 h-16 bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0"
              role="img"
              aria-label={`Avatar ${fullName}`}
            >
              {fullName.charAt(0)}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
              {fullName}
            </h3>
            {program && (
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-2">
                {program}
              </p>
            )}
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
              {graduationYear}
            </p>
            <p className="text-sm font-semibold text-[#1e40af] dark:text-[#3b82f6]">
              {role}
            </p>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mt-1">
              {company}
            </p>
            {linkedInUrl && (
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-2 text-sm text-[#0a66c2] hover:underline focus:outline-none focus:ring-2 focus:ring-[#0a66c2] focus:ring-offset-2 rounded"
                aria-label="LinkedIn profile"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </header>
      {quote && (
        <blockquote className="text-sm sm:text-base text-gray-800 dark:text-gray-200 italic mb-4 flex-grow">
          <p>&ldquo;{quote}&rdquo;</p>
        </blockquote>
      )}
      {achievements && achievements.length > 0 && (
        <section className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <ul className="space-y-1" role="list">
            {achievements.map((achievement, i) => (
              <li
                key={i}
                className="text-xs text-gray-700 dark:text-gray-300 flex items-start"
                role="listitem"
              >
                <span className="mr-2 text-[#1e40af] dark:text-[#3b82f6] mt-1" aria-hidden>
                  ✓
                </span>
                {achievement}
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
