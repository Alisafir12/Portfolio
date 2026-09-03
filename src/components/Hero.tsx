"use client";

import { profile, social } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import { CvLink } from "@/components/CvLink";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export function Hero() {
  const { t, name, locale } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden border-b border-[var(--line)]">
      <div className="site-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-accent-dim px-3 py-1 text-xs font-medium text-accent">
          <span className="size-1.5 rounded-full bg-ok" aria-hidden />
          {t.badge}
        </p>

        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {name}
        </h1>
        <p className="mt-3 max-w-2xl text-lg font-medium text-muted sm:text-xl">{t.title}</p>
        <p className="mt-5 max-w-[65ch] text-base leading-7 text-muted">{t.bio}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {t.roles.map((role) => (
            <li
              key={role}
              className="rounded-md border border-[var(--line)] px-2.5 py-1 text-xs text-muted"
            >
              {role}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-2">
          <a href="#projects" className="btn btn-primary">
            {t.ctaProjects}
          </a>
          <CvLink className="btn btn-accent">{t.ctaCv}</CvLink>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <GithubIcon className="size-4" />
            {t.ctaGithub}
          </a>
          {social.linkedin ? (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <LinkedinIcon className="size-4" />
              {t.ctaLinkedin}
            </a>
          ) : null}
          <a href="#contact" className="btn btn-ghost">
            {t.ctaContact}
          </a>
        </div>

        <p className="mt-6 text-sm text-faint">
          {t.basedIn}: {locale === "ar" ? profile.locationAr : profile.locationEn}
        </p>
      </div>
    </section>
  );
}
