import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgramPageContent from "@/components/ProgramPageContent";
import { getProgramBySlug, getProgramSlugs } from "@/lib/programs-data";

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

  return <ProgramPageContent program={program} />;
}
