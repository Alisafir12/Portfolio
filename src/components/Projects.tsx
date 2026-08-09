"use client";

import Image from "next/image";
import { projects } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Projects() {
  const { t, locale } = useLanguage();

  return (
    <section id="projects" className="relative scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mb-12 max-w-2xl sm:mb-16">
          <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
            {t.projectsTitle}
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-8 text-fog sm:text-lg">
            {t.projectsIntro}
          </p>
        </div>

        <div className="flex flex-col gap-12 sm:gap-16">
          {projects.map((project, index) => {
            const copy = project[locale];
            const reversed = index % 2 === 1;
            const isMobile = project.imageKind === "mobile";

            return (
              <article
                key={project.id}
                className={`clay grid items-center gap-8 rounded-[1.75rem] p-5 sm:gap-10 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-shot clay-inset group relative block overflow-hidden rounded-[1.35rem]"
                >
                  {isMobile ? (
                    <div className="flex min-h-[320px] items-center justify-center px-6 py-10 sm:min-h-[380px] sm:px-10 sm:py-12">
                      <div className="clay relative w-[min(100%,270px)] overflow-hidden rounded-[1.7rem] bg-white">
                        <div className="relative aspect-[2/3] w-full">
                          <Image
                            src={project.image}
                            alt={`${t.preview} ${copy.name}`}
                            fill
                            sizes="270px"
                            className="object-contain object-top transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex min-h-[280px] items-center justify-center px-5 py-8 sm:min-h-[340px] sm:px-8 sm:py-10">
                      <div className="clay w-full max-w-[520px] overflow-hidden rounded-[1.35rem] bg-white">
                        <div className="flex items-center gap-1.5 border-b border-black/5 bg-[#f7fafc] px-4 py-3">
                          <span className="size-2.5 rounded-full bg-[#ff7b72]" />
                          <span className="size-2.5 rounded-full bg-[#ffd074]" />
                          <span className="size-2.5 rounded-full bg-[#5dca88]" />
                          <span className="ms-3 truncate text-[11px] text-fog">
                            {project.url.replace(/^https?:\/\//, "")}
                          </span>
                        </div>
                        <div className="relative aspect-[16/10] w-full bg-[#eef3f7]">
                          <Image
                            src={project.image}
                            alt={`${t.preview} ${copy.name}`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 520px"
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                            priority={index < 2}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </a>

                <div className="px-1 sm:px-2">
                  <span className="clay-soft inline-flex rounded-full px-3.5 py-1.5 text-xs font-semibold text-teal">
                    {copy.tagline}
                  </span>

                  <h3 className="mt-4 font-display text-2xl font-extrabold text-ink sm:text-3xl">
                    {copy.name}
                  </h3>

                  <p className="mt-4 max-w-[60ch] text-base leading-8 text-paper-muted">
                    {copy.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {copy.tags.map((tag) => (
                      <li
                        key={tag}
                        className="skill-chip rounded-full px-3 py-1.5 text-xs text-ink-soft"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-xs tracking-wide text-fog">
                    {project.stack.join("  ·  ")}
                  </p>

                  <div className="mt-7">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                    >
                      {t.preview} {copy.name}
                      <span aria-hidden>{locale === "ar" ? "←" : "→"}</span>
                    </a>
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
