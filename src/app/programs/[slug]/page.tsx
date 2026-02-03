import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProgramBySlug,
  getProgramSlugs,
} from "@/lib/programs-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getProgramSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return { title: "Програма не знайдена" };
  return {
    title: `${program.name} (${program.code})`,
    description: program.description,
  };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  return (
    <main id="main-content" className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Link
          href="/#programs"
          className="inline-flex items-center text-sm font-medium text-[#1e40af] dark:text-[#93c5fd] hover:underline mb-8"
        >
          ← Назад до програм
        </Link>

        <article className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 sm:p-8 lg:p-10">
          <header className="mb-6">
            <span
              className="inline-block px-3 py-1 bg-[#eff6ff] dark:bg-[#1e3a8a] text-[#1e40af] dark:text-[#93c5fd] rounded-full text-sm font-semibold mb-4"
              aria-label={`Код програми ${program.code}`}
            >
              {program.code}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              {program.name}
            </h1>
          </header>

          <p className="text-base text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            {program.description}
          </p>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Кар&apos;єрні можливості
            </h2>
            <ul className="space-y-2" role="list">
              {program.careers.map((career, i) => (
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
              Технологічний стек
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
              aria-label="Відкрити опис на сайті ХДУ (нова вкладка)"
            >
              Детальніше на сайті ХДУ (абітурієнту) →
            </a>
          </p>
        </article>
      </div>
    </main>
  );
}
