"use client";

import { skillGroups } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Skills() {
  const { t, locale } = useLanguage();

  return (
    <section id="skills" className="scroll-mt-20 border-b border-[var(--line)] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{t.skillsTitle}</h2>
        <p className="mt-3 max-w-[65ch] text-muted">{t.skillsIntro}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.id} className="card p-5">
              <h3 className="text-sm font-semibold text-accent">
                {locale === "ar" ? group.ar : group.en}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-[var(--line)] bg-bg-elevated px-2.5 py-1 font-mono text-xs text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
