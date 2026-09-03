"use client";

import { getEmailMailtoUrl, profile, social } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import { EmailIcon, GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/SocialIcons";

export function Contact() {
  const { t, locale } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="card p-6 sm:p-10">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{t.contactTitle}</h2>
          <p className="mt-3 max-w-[65ch] text-muted">{t.contactText}</p>
          <p className="mt-4 text-sm text-faint">
            {t.locationLabel}: {locale === "ar" ? profile.locationAr : profile.locationEn}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            <a href={getEmailMailtoUrl(locale)} className="btn btn-primary">
              <EmailIcon className="size-4" />
              {t.contactEmail}
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
            {social.linkedin ? (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <LinkedinIcon className="size-4" />
                LinkedIn
              </a>
            ) : null}
            <a
              href={social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <WhatsAppIcon className="size-4" />
              {t.contactWhatsapp}
            </a>
          </div>

          <a
            href={getEmailMailtoUrl(locale)}
            className="mt-6 inline-block text-sm text-muted hover:text-accent"
          >
            {social.email}
          </a>
        </div>
      </div>
    </section>
  );
}
