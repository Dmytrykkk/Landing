"use client";

import dynamic from "next/dynamic";

function SectionSkeleton({ className = "" }: { className?: string }) {
  return (
    <section className={`py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 ${className}`} aria-hidden>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-8" />
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-6" />
            <div className="grid grid-cols-7 gap-2 mb-4">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2 mb-10">
              {[...Array(42)].map((_, i) => (
                <div key={i} className="h-20 bg-gray-100 dark:bg-gray-800 rounded" />
              ))}
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 bg-gray-100 dark:bg-gray-800 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const EventsCalendar = dynamic(() => import("./EventsCalendar"), {
  loading: () => <SectionSkeleton className="bg-white dark:bg-gray-900" />,
  ssr: true,
});

export default EventsCalendar;
