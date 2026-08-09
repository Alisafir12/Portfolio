"use client";

import { skillGroups } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageProvider";

function SkillList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="pt-2">
      <p className="mb-3 text-sm font-medium text-fog">{title}</p>
      <ul className="flex flex-wrap gap-2.5">
        {items.map((skill) => (
          <li
            key={skill}
            className="skill-chip rounded-full px-4 py-2 text-sm text-ink-soft"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function About() {
  const { t, name } = useLanguage();

  return (
    <section id="about" className="relative scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="clay grid gap-10 rounded-[1.75rem] p-7 sm:gap-12 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:p-12">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
              {t.aboutTitle}
            </h2>
            <p className="mt-3 text-fog">{name}</p>
            <div className="clay-inset mt-6 h-3 w-20 rounded-full" />
          </div>

          <div className="space-y-5">
            {t.about.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-[65ch] text-base leading-9 text-paper-muted sm:text-lg sm:leading-9"
              >
                {paragraph}
              </p>
            ))}

            <div className="space-y-5 pt-3">
              <SkillList
                title={t.skillsLanguages}
                items={skillGroups.languages}
              />
              <SkillList
                title={t.skillsDatabases}
                items={skillGroups.databases}
              />
              <SkillList title={t.skillsTools} items={skillGroups.tools} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
