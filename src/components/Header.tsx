"use client";

import { useEffect, useState } from "react";
import { social } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import { CvLink } from "@/components/CvLink";

export function Header() {
  const { t, name, toggleLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#about", label: t.navAbout },
    { href: "/#skills", label: t.navSkills },
    { href: "/#projects", label: t.navProjects },
    { href: "/#experience", label: t.navExperience },
    { href: "/#contact", label: t.navContact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <a href="/#top" className="shrink-0 text-sm font-semibold tracking-tight text-ink">
          {name}
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-2.5 py-1.5 text-sm text-muted hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CvLink className="btn btn-ghost hidden sm:inline-flex !py-1.5 !px-3 text-xs">
            {t.downloadCv}
          </CvLink>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm text-muted hover:text-ink md:inline"
          >
            GitHub
          </a>
          {social.linkedin ? (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm text-muted hover:text-ink md:inline"
            >
              LinkedIn
            </a>
          ) : null}
          <button
            type="button"
            onClick={toggleLocale}
            className="rounded-md border border-[var(--line)] px-2 py-1 text-xs font-semibold text-ink"
            aria-label={t.langLabel}
          >
            {t.langOther}
          </button>
          <button
            type="button"
            className="rounded-md border border-[var(--line)] px-2 py-1 text-xs lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? t.close : t.menu}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-[var(--line)] bg-bg px-4 py-3 lg:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2 text-sm text-muted hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <CvLink className="btn btn-ghost mt-2 !justify-start">{t.downloadCv}</CvLink>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
