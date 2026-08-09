"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Header() {
  const { t, name, toggleLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.navAbout },
    { href: "#projects", label: t.navProjects },
    { href: "#contact", label: t.navContact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`clay-nav mx-auto flex w-full max-w-6xl items-center justify-between gap-2 rounded-[1.35rem] px-3 transition-all duration-300 sm:px-6 ${
          scrolled ? "py-2.5 sm:py-3" : "py-3 sm:py-4"
        }`}
      >
        <a
          href="#top"
          className="shrink-0 whitespace-nowrap font-display text-base font-bold tracking-tight text-ink sm:text-xl"
        >
          {name}
        </a>

        <nav className="flex min-w-0 items-center gap-0.5 sm:gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-2 py-1.5 text-xs text-fog transition-colors hover:text-ink sm:px-3 sm:py-2 sm:text-sm"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleLocale}
            className="clay-soft ms-0.5 shrink-0 rounded-full px-2.5 py-1.5 text-xs font-semibold text-ink transition-transform hover:-translate-y-0.5 sm:ms-1 sm:px-3.5 sm:py-2 sm:text-sm"
            aria-label={t.langLabel}
          >
            {t.langSwitch}
          </button>
        </nav>
      </div>
    </header>
  );
}
