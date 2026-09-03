"use client";

import Image from "next/image";
import type { Project } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageProvider";

export function ProjectCaseStudy({ project }: { project: Project }) {
  const { t, locale } = useLanguage();
  const copy = project[locale];
  const isMobile = project.imageKind === "mobile";

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <a href="/#projects" className="text-sm text-muted hover:text-accent">
        ← {t.back}
      </a>
      <p className="mt-6 text-xs font-medium text-accent">{copy.tagline}</p>
      <h1 className="mt-2 text-3xl font-semibold text-ink sm:text-4xl">{copy.name}</h1>
      <p className="mt-4 font-mono text-sm text-faint">{project.stack.join(" · ")}</p>

      <div className="card mt-8 overflow-hidden bg-bg-elevated">
        <div className={`relative ${isMobile ? "mx-auto max-w-[240px] py-8" : "aspect-[16/10]"}`}>
          <div className={isMobile ? "relative aspect-[2/3]" : "absolute inset-0"}>
            <Image
              src={project.image}
              alt={`${copy.name} screenshot`}
              fill
              sizes="800px"
              className={isMobile ? "object-contain" : "object-cover object-top"}
              priority
            />
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-ink">{t.overview}</h2>
        <p className="mt-2 leading-7 text-muted">{copy.overview}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-ink">{t.problem}</h2>
        <p className="mt-2 leading-7 text-muted">{copy.problem}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-ink">{t.solution}</h2>
        <p className="mt-2 leading-7 text-muted">{copy.solution}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-ink">{t.architecture}</h2>
        <p className="mt-2 leading-7 text-muted">{copy.architecture}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-ink">{t.responsibilities}</h2>
        <ul className="mt-2 list-disc space-y-1 ps-5 text-muted">
          {copy.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-ink">{t.technologies}</h2>
        <p className="mt-2 font-mono text-sm text-muted">{project.stack.join(" · ")}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-ink">{t.keyFeatures}</h2>
        <ul className="mt-2 list-disc space-y-1 ps-5 text-muted">
          {copy.features.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-ink">{t.screenshots}</h2>
        <p className="mt-2 text-sm text-faint">{copy.name}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-ink">{t.challenges}</h2>
        <ul className="mt-3 space-y-4">
          {copy.challenges.map((item) => (
            <li key={item.challenge} className="card p-4">
              <p className="text-sm font-medium text-ink">{item.challenge}</p>
              <p className="mt-1 text-sm text-muted">{item.approach}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-ink">{t.results}</h2>
        <p className="mt-2 leading-7 text-muted">{copy.results}</p>
      </section>

      <div className="mt-10 flex flex-wrap gap-2">
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          {t.liveDemo}
        </a>
        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            {t.github}
          </a>
        ) : null}
      </div>
    </article>
  );
}
