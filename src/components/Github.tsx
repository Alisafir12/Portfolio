"use client";

import { githubRepos, social } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import { GithubIcon } from "@/components/SocialIcons";

export function Github() {
  const { t, locale } = useLanguage();

  return (
    <section id="github" className="scroll-mt-20 border-b border-[var(--line)] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{t.githubTitle}</h2>
        <p className="mt-3 max-w-[65ch] text-muted">{t.githubIntro}</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {githubRepos.map((repo) => (
            <li key={repo.url}>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card block p-4 hover:border-accent/40"
              >
                <p className="font-mono text-sm font-semibold text-ink">{repo.name}</p>
                <p className="mt-1 text-xs text-accent">{repo.language}</p>
                <p className="mt-2 text-sm text-muted">
                  {locale === "ar" ? repo.noteAr : repo.noteEn}
                </p>
              </a>
            </li>
          ))}
        </ul>
        <a
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost mt-8"
        >
          <GithubIcon className="size-4" />
          {t.viewGithub}
        </a>
      </div>
    </section>
  );
}
