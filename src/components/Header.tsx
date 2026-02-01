"use client";

import { useState, useEffect, useCallback } from "react";
import { useTheme } from "@/contexts/ThemeContext";

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, string | number | boolean | undefined>
    ) => void;
  }
}

const NAV_LINKS = [
  { href: "#why-fknfm", label: "Чому ми" },
  { href: "#programs", label: "Програми" },
  { href: "#learning-format", label: "Формат навчання" },
  { href: "#faq", label: "FAQ" },
] as const;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

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
          : "bg-transparent"
      }`}
      role="banner"
      aria-label="Головна навігація"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <a
              href="#main-content"
              className="text-xl sm:text-2xl font-bold text-[#1e40af] dark:text-[#3b82f6] hover:text-[#1e3a8a] dark:hover:text-[#60a5fa] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded transition-colors"
              aria-label="Перейти на початок сторінки"
            >
              ФКНФМ ХДУ
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-gray-700 dark:text-gray-300 hover:text-[#1e40af] dark:hover:text-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 rounded transition-colors text-sm lg:text-base"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 transition-colors"
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

            <button
              onClick={handleCTAClick}
              className="hidden md:inline-flex px-4 sm:px-6 py-2 sm:py-2.5 bg-[#1e40af] text-white rounded-lg font-semibold hover:bg-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-colors text-sm sm:text-base whitespace-nowrap"
              aria-label="Вступити до університету"
            >
              Вступ
            </button>

            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 aria-expanded={menuOpen}"
              aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
              aria-controls="mobile-menu"
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
        className={`md:hidden fixed inset-0 top-16 sm:top-20 z-40 transition-opacity duration-300 ${
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
              {NAV_LINKS.map(({ href, label }) => (
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
                  Вступ
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
