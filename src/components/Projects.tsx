"use client";

import Image from "next/image";
import { projects } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Projects() {
  const { t, locale } = useLanguage();

  return (
    <section id="projects" className="scroll-mt-20 border-b border-[var(--line)] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{t.projectsTitle}</h2>
        <p className="mt-3 max-w-[65ch] text-muted">{t.projectsIntro}</p>

        <div className="mt-10 flex flex-col gap-10">
          {projects.map((project) => {
            const copy = project[locale];
            const isMobile = project.imageKind === "mobile";

            return (
              <article key={project.id} className="card overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block bg-bg-elevated"
                  >
                    <div className={`relative ${isMobile ? "mx-auto max-w-[220px] py-8" : "aspect-[16/10]"}`}>
                      <div className={isMobile ? "relative aspect-[2/3]" : "absolute inset-0"}>
                        <Image
                          src={project.image}
                          alt={`${copy.name} screenshot`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className={isMobile ? "object-contain" : "object-cover object-top"}
                        />
                      </div>
                    </div>
                  </a>

                  <div className="flex flex-col p-6 sm:p-8">
                    <p className="text-xs font-medium text-accent">{copy.tagline}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-ink">{copy.name}</h3>

                    <dl className="mt-5 space-y-3 text-sm leading-6">
                      <div>
                        <dt className="font-semibold text-ink">{t.problem}</dt>
                        <dd className="text-muted">{copy.problem}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-ink">{t.solution}</dt>
                        <dd className="text-muted">{copy.solution}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-ink">{t.myRole}</dt>
                        <dd className="text-muted">{copy.role}</dd>
                      </div>
                    </dl>

                    <p className="mt-4 font-mono text-xs text-faint">{project.stack.join(" · ")}</p>

                    <ul className="mt-4 list-disc space-y-1 ps-5 text-sm text-muted">
                      {copy.features.slice(0, 4).map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary !py-2"
                      >
                        {t.liveDemo}
                      </a>
                      <a href={`/projects/${project.id}`} className="btn btn-ghost !py-2">
                        {t.caseStudy}
                      </a>
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-ghost !py-2"
                        >
                          {t.github}
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
