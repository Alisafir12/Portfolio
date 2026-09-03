import { SITE_URL, social, profile } from "@/data/content";

export function JsonLd() {
  const sameAs = [social.github, social.whatsapp].filter(Boolean);
  if (social.linkedin) sameAs.push(social.linkedin);

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.nameEn,
    alternateName: profile.nameAr,
    jobTitle: "Software Engineer",
    url: SITE_URL,
    email: social.email,
    image: `${SITE_URL}/logo.png`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
    },
    knowsAbout: [
      "Software Engineering",
      "Full-Stack Development",
      "Flutter",
      "React",
      "Next.js",
      "Node.js",
      "REST APIs",
    ],
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
