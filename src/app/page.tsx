import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import ScrollTracker from "@/components/ScrollTracker";
import SectionReveal from "@/components/SectionReveal";
import { faqItems } from "@/lib/faq-data";

function SectionSkeleton({ className = "" }: { className?: string }) {
  return (
    <section className={`py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 ${className}`} aria-hidden>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-8" />
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-gray-100 dark:bg-gray-800 rounded" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const WhyFKNFM = dynamic(() => import("@/components/sections/WhyFKNFM"), {
  loading: () => <SectionSkeleton />,
  ssr: true,
});

const Programs = dynamic(() => import("@/components/sections/Programs"), {
  loading: () => <SectionSkeleton className="bg-gray-50 dark:bg-gray-800/50" />,
  ssr: true,
});

const LearningFormat = dynamic(() => import("@/components/sections/LearningFormat"), {
  loading: () => <SectionSkeleton />,
  ssr: true,
});

const SuccessStories = dynamic(() => import("@/components/sections/SuccessStories"), {
  loading: () => <SectionSkeleton />,
  ssr: true,
});

const EventsCalendar = dynamic(() => import("@/components/sections/EventsCalendarWrapper"), {
  loading: () => <SectionSkeleton className="bg-white" />,
  ssr: true,
});

const Accreditation = dynamic(() => import("@/components/sections/Accreditation"), {
  loading: () => <SectionSkeleton className="bg-white" />,
  ssr: true,
});

const Newsletter = dynamic(() => import("@/components/sections/Newsletter"), {
  loading: () => <SectionSkeleton className="bg-gray-50" />,
  ssr: true,
});

const Footer = dynamic(() => import("@/components/sections/footer"), {
  loading: () => (
    <footer className="py-8 bg-gray-100 dark:bg-gray-800" aria-hidden>
      <div className="container mx-auto px-4">
        <div className="animate-pulse h-24 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    </footer>
  ),
  ssr: true,
});

const FAQ = dynamic(() => import("@/components/sections/FAQ"), {
  loading: () => (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="animate-pulse">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto mb-12"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-24 bg-gray-100 dark:bg-gray-800 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  ),
  ssr: true,
});

const ConsultationForm = dynamic(
  () => import("@/components/sections/ConsultationForm"),
  {
    loading: () => (
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="animate-pulse">
            <div className="h-12 bg-blue-500/20 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-6 bg-blue-500/20 rounded w-1/2 mx-auto mb-8"></div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
                ))}
                <div className="h-12 bg-blue-200 dark:bg-blue-900 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
    ssr: true,
  }
);

export const metadata: Metadata = {
  title: "Головна",
  description:
    "Факультет комп'ютерних наук та фізико-математичний факультет Херсонського державного університету. Онлайн та змішане навчання з дипломом державного зразка. Програми: 121 Інженерія програмного забезпечення, 122 Комп'ютерні науки, 014.08 Середня освіта (Інформатика).",
  openGraph: {
    title: "ФКНФМ ХДУ - Твій код до майбутнього в ІТ",
    description:
      "Онлайн та змішане навчання. Диплом державного зразка. Програми: Інженерія програмного забезпечення, Комп'ютерні науки, Середня освіта (Інформатика).",
    type: "website",
    url: "/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ФКНФМ ХДУ - Факультет комп'ютерних наук та фізико-математичний факультет",
      },
    ],
  },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://fknfm.kspu.edu.ua/#organization",
  name: "Херсонський державний університет",
  alternateName: ["ХДУ", "Kherson State University", "KSU"],
  url: "https://kspu.edu.ua",
  logo: "https://fknfm.kspu.edu.ua/logo.png",
  address: {
    "@type": "PostalAddress",
    addressCountry: "UA",
    addressLocality: "Івано-Франківськ",
    addressRegion: "Івано-Франківська область",
    streetAddress: "вул. Шевченка, 57",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Приймальна комісія",
    email: "priyom@kspu.edu.ua",
    telephone: "+380552423456",
  },
  department: {
    "@type": "CollegeOrUniversity",
    name: "Факультет комп'ютерних наук та фізико-математичний факультет",
    alternateName: "ФКНФМ",
    url: "https://fknfm.kspu.edu.ua",
  },
  offers: {
    "@type": "Offer",
    itemOffered: [
      {
        "@type": "Course",
        name: "Інженерія програмного забезпечення",
        courseCode: "121",
        educationalCredentialAwarded: "Бакалавр",
      },
      {
        "@type": "Course",
        name: "Комп'ютерні науки",
        courseCode: "122",
        educationalCredentialAwarded: "Бакалавр",
      },
      {
        "@type": "Course",
        name: "Середня освіта (Інформатика)",
        courseCode: "014.08",
        educationalCredentialAwarded: "Бакалавр",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <main id="main-content" tabIndex={-1} className="pt-16 sm:pt-20 lg:pt-24">
        <ScrollTracker />
        <Hero />
        <SectionReveal>
          <WhyFKNFM />
        </SectionReveal>
        <SectionReveal>
          <Programs />
        </SectionReveal>
        <SectionReveal>
          <LearningFormat />
        </SectionReveal>
        <SectionReveal>
          <SuccessStories />
        </SectionReveal>
        <SectionReveal>
          <EventsCalendar />
        </SectionReveal>
        <SectionReveal>
          <Accreditation />
        </SectionReveal>
        <SectionReveal>
          <FAQ />
        </SectionReveal>
        <SectionReveal>
          <ConsultationForm />
        </SectionReveal>
        <SectionReveal>
          <Newsletter />
        </SectionReveal>
        <Footer />
      </main>
    </>
  );
}
