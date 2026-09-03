import type { Metadata } from "next";
import { Geist, IBM_Plex_Sans_Arabic } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { SITE_URL } from "@/data/content";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const plex = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-ar",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

const title = "Ali Safir | Software Engineer & Full-Stack Developer";
const description =
  "Software engineer building web applications, Flutter mobile apps, and business management systems. Open to software engineering roles in Saudi Arabia and internationally.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | Ali Safir",
  },
  description,
  keywords: [
    "Ali Safir",
    "Software Engineer",
    "Full-Stack Developer",
    "Flutter Developer",
    "Next.js",
    "React",
    "Node.js",
    "Saudi Arabia",
  ],
  authors: [{ name: "Ali Safir", url: SITE_URL }],
  creator: "Ali Safir",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "Ali Safir",
    locale: "en_US",
    alternateLocale: ["ar"],
    type: "website",
    images: [{ url: "/logo.png", alt: "Ali Safir" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/logo.png"],
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geist.variable} ${plex.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-bg font-sans text-ink antialiased">
        <JsonLd />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
