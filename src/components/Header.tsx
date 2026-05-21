"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLocale } from "@/contexts/LocaleContext";
import type { Locale } from "@/lib/i18n/translations";

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, string | number | boolean | undefined>
    ) => void;
  }
}

const NAV_IDS = [
  { href: "#why-fknfm", key: "why" as const },
  { href: "#programs", key: "programs" as const },
  { href: "#learning-format", key: "learningFormat" as const },
  { href: "#events", key: "events" as const },
  { href: "#faq", key: "faq" as const },
  { href: "#licenses", key: "licenses" as const },
  { href: "#partners", key: "partners" as const },
  { href: "#newsletter", key: "newsletter" as const },
] as const;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const { locale, setLocale, t } = useLocale();
  const navLinks = useMemo(
    () => NAV_IDS.map(({ href, key }) => ({ href, label: t.nav[key] })),
    [t]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [menuOpen]);

  const handleCTAClick = useCallback(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "cta_click", {
        event_category: "engagement",
        event_label: "header_vstup",
        location: "header",
      });
    }
    setMenuOpen(false);
    document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleNavClick = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-gray-900 shadow-md"
          : "bg-gray-900/80 backdrop-blur-sm"
      }`}
      role="banner"
      aria-label="Головна навігація"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <a
              href="#main-content"
              className={`text-xl sm:text-2xl font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded transition-colors ${
                isScrolled
                  ? "text-[#1e40af] dark:text-[#3b82f6] hover:text-[#1e3a8a] dark:hover:text-[#60a5fa]"
                  : "text-white hover:text-blue-200"
              }`}
              aria-label="Перейти на початок сторінки"
            >
              ФКНФМ ХДУ
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`focus:outline-none focus:ring-2 focus:ring-[#60a5fa] focus:ring-offset-2 focus:ring-offset-gray-900 rounded transition-colors text-sm lg:text-base ${
                  isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-[#1e40af] dark:hover:text-[#3b82f6]"
                    : "text-white/95 hover:text-white"
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className={`p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 transition-colors ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-white/95 hover:bg-white/10"
              }`}
              aria-label={mounted ? (theme === "dark" ? "Увімкнути світлу тему" : "Увімкнути темну тему") : "Перемкнути тему"}
              title={mounted ? (theme === "dark" ? "Світла тема" : "Темна тема") : "Тема"}
            >
              <span className="sr-only">
                {mounted ? (theme === "dark" ? "Увімкнути світлу тему" : "Увімкнути темну тему") : "Тема"}
              </span>
              {!mounted ? (
                <span className="w-5 h-5 block rounded-full border-2 border-current opacity-60" aria-hidden />
              ) : theme === "dark" ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <div className="flex items-center gap-1 mr-2" role="group" aria-label="Мова">
              {(["uk", "en"] as Locale[]).map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => setLocale(loc)}
                  className={`px-2 py-1 rounded text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#60a5fa] focus:ring-offset-2 transition-colors ${
                    isScrolled
                      ? locale === loc
                        ? "text-[#1e40af] dark:text-[#3b82f6] bg-blue-50 dark:bg-gray-800"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                      : locale === loc
                        ? "bg-white/20 text-white"
                        : "text-white/80 hover:text-white"
                  }`}
                  aria-label={loc === "uk" ? t.langUk : t.langEn}
                  aria-current={locale === loc ? "true" : undefined}
                >
                  {loc === "uk" ? "UA" : "EN"}
                </button>
              ))}
            </div>
            <button
              onClick={handleCTAClick}
              className="hidden lg:inline-flex px-4 sm:px-6 py-2 sm:py-2.5 bg-[#2563eb] text-white rounded-lg font-semibold hover:bg-[#1d4ed8] focus:outline-none focus:ring-2 focus:ring-[#60a5fa] focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors text-sm sm:text-base whitespace-nowrap"
              aria-label={t.nav.admission}
            >
              {t.nav.admission}
            </button>

            <button
              type="button"
              className={`lg:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#60a5fa] focus:ring-offset-2 ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-white/95 hover:bg-white/10"
              }`}
              aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">{menuOpen ? "Закрити меню" : "Відкрити меню"}</span>
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-16 sm:top-20 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/50 focus:outline-none"
          aria-label="Закрити меню"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute left-0 right-0 top-0 bg-white dark:bg-gray-900 shadow-xl rounded-b-xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <nav aria-label="Мобільна навігація" className="py-4 px-4">
            <ul className="space-y-1">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={handleNavClick}
                    className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#1e40af] dark:hover:text-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-inset transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={handleCTAClick}
                  className="w-full text-left px-4 py-3 rounded-lg bg-[#1e40af] text-white font-semibold hover:bg-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-inset transition-colors"
                >
                  {t.nav.admission}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
