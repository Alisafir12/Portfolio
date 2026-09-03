"use client";

import { profile, projects, skillGroups, social } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ResumePage() {
  const { t, name, locale } = useLanguage();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl flex-1 px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-semibold text-ink">{t.cvTitle}</h1>
        <p className="mt-4 text-sm leading-6 text-muted">{t.cvMissing}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a href={social.cvPath} className="btn btn-primary" download>
            {t.downloadCv} (PDF)
          </a>
          <button type="button" className="btn btn-ghost" onClick={() => window.print()}>
            {t.cvPrint}
          </button>
        </div>

        <section className="mt-10 border-t border-[var(--line)] pt-8">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="mt-1 text-muted">{t.title}</p>
          <p className="mt-2 text-sm text-faint">
            {locale === "ar" ? profile.locationAr : profile.locationEn} · {social.email} ·{" "}
            <a href={social.github} className="text-accent">
              GitHub
            </a>
          </p>
          <p className="mt-4 max-w-[65ch] text-sm leading-6 text-muted">{t.aboutLead}</p>
        </section>

        <section className="mt-8">
          <h3 className="text-sm font-semibold tracking-wide text-accent uppercase">
            {t.skillsTitle}
          </h3>
          {skillGroups.map((g) => (
            <p key={g.id} className="mt-2 text-sm text-muted">
              <span className="text-ink">{locale === "ar" ? g.ar : g.en}:</span>{" "}
              {g.items.join(", ")}
            </p>
          ))}
        </section>

        <section className="mt-8">
          <h3 className="text-sm font-semibold tracking-wide text-accent uppercase">
            {t.projectsTitle}
          </h3>
          <ul className="mt-3 space-y-4">
            {projects.map((p) => {
              const copy = p[locale];
              return (
                <li key={p.id}>
                  <p className="font-medium text-ink">
                    {copy.name} — {copy.tagline}
                  </p>
                  <p className="text-sm text-muted">{copy.role}</p>
                  <p className="font-mono text-xs text-faint">{p.stack.join(" · ")}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
