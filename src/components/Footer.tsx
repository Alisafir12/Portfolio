"use client";

import { social } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Footer() {
  const year = new Date().getFullYear();
  const { t, name } = useLanguage();

  return (
    <footer className="border-t border-[var(--line)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm font-medium text-ink">{name}</p>
        <div className="flex flex-wrap gap-4 text-sm text-muted">
          <a href={social.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            GitHub
          </a>
          {social.linkedin ? (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              LinkedIn
            </a>
          ) : null}
          <a href={`mailto:${social.email}`} className="hover:text-ink">
            {social.email}
          </a>
        </div>
        <p className="text-xs text-faint">
          © {year} {t.footerRights}
        </p>
      </div>
    </footer>
  );
}
