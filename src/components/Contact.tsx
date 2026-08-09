"use client";

import {
  contactLinks,
  getEmailComposeUrl,
  getEmailMailtoUrl,
} from "@/data/content";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/SocialIcons";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Contact() {
  const { t, locale } = useLanguage();
  const emailComposeUrl = getEmailComposeUrl(locale);
  const emailMailtoUrl = getEmailMailtoUrl(locale);

  const channels = [
    {
      href: contactLinks.whatsapp,
      label: t.contactWhatsapp,
      external: true,
      icon: WhatsAppIcon,
    },
    {
      href: emailComposeUrl,
      label: t.contactEmail,
      external: true,
      icon: EmailIcon,
    },
    {
      href: contactLinks.instagram,
      label: t.contactInstagram,
      external: true,
      icon: InstagramIcon,
    },
    {
      href: contactLinks.facebook,
      label: t.contactFacebook,
      external: true,
      icon: FacebookIcon,
    },
  ];

  return (
    <section id="contact" className="relative scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="clay relative overflow-hidden rounded-[1.75rem] px-7 py-12 sm:px-12 sm:py-16">
          <div
            className="clay-blob pointer-events-none -end-8 -top-10 h-36 w-36 bg-[#b8ebe3]"
            aria-hidden
          />
          <div
            className="clay-blob pointer-events-none -start-6 -bottom-10 h-28 w-28 bg-[#f3c4ba]"
            style={{ animationDelay: "-4s" }}
            aria-hidden
          />

          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
              {t.contactTitle}
            </h2>
            <p className="mt-4 max-w-[60ch] text-base leading-8 text-fog sm:text-lg">
              {t.contactText}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-ghost inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold"
                  >
                    <Icon className="size-5 shrink-0" />
                    {channel.label}
                  </a>
                );
              })}
            </div>

            <a
              href={emailMailtoUrl}
              className="mt-5 inline-flex items-center gap-2 text-sm text-fog transition-colors hover:text-teal"
            >
              <EmailIcon className="size-4" />
              {contactLinks.emailLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
