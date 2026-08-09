"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function Footer() {
  const year = new Date().getFullYear();
  const { t, name } = useLanguage();

  return (
    <footer className="pb-10">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="clay-soft flex flex-col gap-3 rounded-[1.35rem] px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg font-bold text-ink">{name}</p>
          <p className="text-sm text-fog">
            © {year} {t.footerRights}
          </p>
        </div>
      </div>
    </footer>
  );
}
