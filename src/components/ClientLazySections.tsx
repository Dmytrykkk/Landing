"use client";

import dynamic from "next/dynamic";

function SectionSkeleton({ className = "" }: { className?: string }) {
  return (
    <section
      className={`py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 ${className}`}
      aria-hidden
    >
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

export const Programs = dynamic(() => import("@/components/sections/Programs"), {
  loading: () => <SectionSkeleton className="bg-gray-50 dark:bg-gray-800/50" />,
  ssr: false,
});

export const EventsCalendar = dynamic(
  () => import("@/components/sections/EventsCalendarWrapper"),
  {
    loading: () => <SectionSkeleton className="bg-gray-900" />,
    ssr: false,
  }
);

export const Footer = dynamic(() => import("@/components/sections/footer"), {
  loading: () => (
    <footer className="py-8 bg-gray-100 dark:bg-gray-800" aria-hidden>
      <div className="container mx-auto px-4">
        <div className="animate-pulse h-24 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    </footer>
  ),
  ssr: false,
});
