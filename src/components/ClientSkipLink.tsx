"use client";

import { useLocale } from "@/contexts/LocaleContext";

export default function ClientSkipLink() {
  const { t } = useLocale();
  return (
    <a href="#main-content" className="skip-link" id="skip-link">
      {t.skipLink}
    </a>
  );
}
