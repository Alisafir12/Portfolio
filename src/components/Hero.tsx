"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function Hero() {
  const { t, name } = useLanguage();

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-10 pt-28 sm:pb-12 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="clay-blob start-[6%] top-[16%] h-40 w-40 bg-[#b8ebe3] sm:h-56 sm:w-56" />
        <div
          className="clay-blob end-[8%] top-[22%] h-32 w-32 bg-[#f3c4ba] sm:h-44 sm:w-44"
          style={{ animationDelay: "-3.5s" }}
        />
        <div
          className="clay-blob bottom-[18%] start-[35%] h-24 w-24 bg-[#c9daf0] sm:h-32 sm:w-32"
          style={{ animationDelay: "-7s" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="clay animate-rise mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-fog">
          <span className="status-dot size-2.5 rounded-full bg-teal-bright" />
          {t.available}
        </div>

        <p className="animate-rise font-display text-[clamp(2.6rem,8vw,5.5rem)] leading-[1.05] font-extrabold tracking-[-0.02em] text-ink">
          {name}
        </p>

        <div className="clay-inset mt-5 h-3 w-28 rounded-full sm:w-36" />

        <h1 className="animate-rise-delay-1 mt-8 max-w-2xl font-display text-2xl leading-relaxed font-bold text-ink-soft sm:text-3xl md:text-4xl">
          {t.title}
        </h1>

        <p className="animate-rise-delay-2 mt-5 max-w-[42rem] text-base leading-8 text-fog sm:text-lg">
          {t.bio}
        </p>

        <div className="animate-rise-delay-3 mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="cta-primary inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold"
          >
            {t.ctaProjects}
          </a>
          <a
            href="#contact"
            className="cta-ghost inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium"
          >
            {t.ctaContact}
          </a>
        </div>
      </div>
    </section>
  );
}
