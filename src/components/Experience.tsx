"use client";

import { projects } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Experience() {
  const { t, locale } = useLanguage();

  return (
    <section id="experience" className="scroll-mt-20 border-b border-[var(--line)] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{t.experienceTitle}</h2>
        <p className="mt-3 max-w-[65ch] text-muted">{t.experienceIntro}</p>
        <p className="mt-6 text-xs font-semibold tracking-wide text-accent uppercase">
          {t.experienceKind}
        </p>
        <ul className="mt-4 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {projects.map((project) => {
            const copy = project[locale];
            return (
              <li key={project.id} className="grid gap-2 py-5 sm:grid-cols-[1fr_2fr]">
                <div>
                  <p className="font-semibold text-ink">{copy.name}</p>
                  <p className="mt-1 font-mono text-xs text-faint">{project.stack.join(" · ")}</p>
                </div>
                <p className="text-sm leading-6 text-muted">{copy.role}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
