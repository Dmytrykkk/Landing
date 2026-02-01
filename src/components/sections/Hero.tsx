"use client";

import Image from "next/image";

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, string | number | boolean | undefined>
    ) => void;
  }
}

const HERO_IMAGE_SRC = "/images/hero.webp";

export default function Hero() {
  const handleCTAClick = (label: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "cta_click", {
        event_category: "engagement",
        event_label: label,
        location: "hero",
      });
    }
  };

  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0047AB]/5 via-slate-50 to-blue-50/80 dark:from-gray-900 dark:via-gray-900 dark:to-[#0047AB]/10"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE_SRC}
          alt="Students collaborating in a modern IT environment"
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px"
          priority
          fetchPriority="high"
          quality={80}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0047AB]/20 via-transparent to-[#0047AB]/30 dark:from-gray-900/80 dark:via-gray-900/50 dark:to-gray-900/90"
          aria-hidden
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight"
        >
          Твій код до майбутнього в ІТ — ФКНФМ ХДУ
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
          Онлайн та змішане навчання. Диплом державного зразка. Практика з IT-кластерами.
        </p>

        <nav aria-label="Головні дії">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="#consultation-form"
              onClick={() => handleCTAClick("hero_diznatysia_bilshe")}
              className="inline-flex items-center justify-center w-full sm:w-auto min-w-[200px] px-6 sm:px-8 py-3.5 sm:py-4 bg-[#0047AB] text-white rounded-lg font-semibold shadow-md hover:bg-[#003380] hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0047AB] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 transition-all duration-200 text-base sm:text-lg"
              aria-label="Дізнатися більше про навчання та залишити заявку"
              role="button"
            >
              Дізнатися більше
            </a>
            <a
              href="https://t.me/fknfm_ksu"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCTAClick("hero_telegram")}
              className="inline-flex items-center justify-center w-full sm:w-auto min-w-[200px] px-6 sm:px-8 py-3.5 sm:py-4 bg-white dark:bg-gray-800 text-[#0047AB] dark:text-blue-300 border-2 border-[#0047AB] dark:border-blue-500 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 hover:border-[#003380] hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0047AB] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 transition-all duration-200 text-base sm:text-lg"
              aria-label="Вступити до Telegram-каналу ФКНФМ (відкривається в новій вкладці)"
              role="button"
            >
              Telegram-канал
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
}
