"use client";

import { profile } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageProvider";

export function About() {
  const { t, locale } = useLanguage();

  return (
    <section id="about" className="scroll-mt-20 border-b border-[var(--line)] py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.4fr_0.6fr]">
        <div>
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{t.aboutTitle}</h2>
        </div>
        <div>
          <p className="max-w-[65ch] text-base leading-7 text-ink">{t.aboutLead}</p>
          {t.aboutBody.map((p) => (
            <p key={p} className="mt-4 max-w-[65ch] text-base leading-7 text-muted">
              {p}
            </p>
          ))}
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="card p-4">
              <dt className="text-xs uppercase tracking-wide text-faint">{t.basedIn}</dt>
              <dd className="mt-1 text-sm font-medium text-ink">
                {locale === "ar" ? profile.locationAr : profile.locationEn}
              </dd>
            </div>
            <div className="card p-4">
              <dt className="text-xs uppercase tracking-wide text-faint">{t.available}</dt>
              <dd className="mt-1 text-sm font-medium text-accent">{t.badge}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
