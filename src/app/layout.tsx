import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Tajawal } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import "./globals.css";

const display = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["500", "700", "800"],
});

const body = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-ar",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "م/ علي سفير | Eng/Ali Safir — Software Engineer",
  description:
    "Portfolio of Eng/Ali Safir — web & mobile apps with Flutter, React, Node.js, and databases like SQL Server, MySQL, and Firebase.",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
  openGraph: {
    title: "م/ علي سفير | Eng/Ali Safir — Software Engineer",
    description:
      "Web and mobile applications, business systems, and digital products.",
    locale: "ar",
    alternateLocale: ["en"],
    type: "website",
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${display.variable} ${body.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="atmosphere min-h-full font-sans text-paper antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
