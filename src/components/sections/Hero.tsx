"use client";

import Image from "next/image";
import { useLocale } from "@/contexts/LocaleContext";

const HERO_IMAGE_SRC = "/images/hero.webp";

export default function Hero() {
  const { t } = useLocale();
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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0047AB]/5 via-slate-50 to-blue-50/80 dark:from-gray-900 dark:via-gray-900 dark:to-[#0047AB]/10"
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
          quality={90}
          suppressHydrationWarning
        />
        {/* WCAG AA: dark overlay ensures 4.5:1+ contrast for white text on any screen */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-gray-900/85 via-gray-900/70 to-gray-900/90"
          aria-hidden
        />
      </div>

      <div className=className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center mt-16 sm:mt-20">
        <h1
          id="hero-heading"
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        >
          {t.hero.title.map((line, i) => (
            <span key={i}>{line}{i < t.hero.title.length - 1 && <br />}</span>
          ))}
        </h1>
        <div className="mb-6 sm:mb-8 max-w-3xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-semibold leading-relaxed px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-gray-900/90 backdrop-blur-md shadow-xl border border-white/20 [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]">
            {t.hero.subtitle}
          </p>
        </div>

        <nav aria-label="Головні дії">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="#consultation-form"
              onClick={() => handleCTAClick("hero_diznatysia_bilshe")}
              className="inline-flex items-center justify-center w-full sm:w-auto min-w-[200px] px-6 sm:px-8 py-3.5 sm:py-4 bg-[#2563eb] text-white rounded-lg font-semibold shadow-md hover:bg-[#1d4ed8] hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 transition-all duration-200 text-base sm:text-lg"
              aria-label={t.hero.ctaLearn}
              role="button"
            >
              {t.hero.ctaLearn}
            </a>
            <a
              href="https://t.me/kipiek"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCTAClick("hero_telegram")}
              className="inline-flex items-center justify-center w-full sm:w-auto min-w-[200px] px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#1e40af] border-2 border-white rounded-lg font-semibold hover:bg-blue-50 hover:border-blue-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 transition-all duration-200 text-base sm:text-lg"
              aria-label={t.hero.ctaTelegram}
              role="button"
            >
              {t.hero.ctaTelegram}
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
}
