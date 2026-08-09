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
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`clay-nav mx-auto flex w-full max-w-6xl items-center justify-between rounded-[1.35rem] px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-ink sm:text-xl"
        >
          <img
            src="/logo.png"
            alt=""
            width={36}
            height={36}
            className="size-9 rounded-full object-cover shadow-[4px_4px_10px_rgba(140,165,185,0.35),-3px_-3px_8px_rgba(255,255,255,0.8)]"
          />
          <span>{name}</span>
        </a>

        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-fog transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleLocale}
            className="clay-soft ms-1 rounded-full px-3.5 py-2 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            aria-label={t.langLabel}
          >
            {t.langSwitch}
          </button>
        </nav>
      </div>
    </header>
  );
}
