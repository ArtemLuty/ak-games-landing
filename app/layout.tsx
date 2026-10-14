import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { asset, siteUrl } from "@/data/site";
export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: {
    default: "AK Games — Thoughtful apps. Memorable play.",
    template: "%s — AK Games",
  },
  description:
    "Independent developer Artem Kolesnikov creates thoughtful mobile apps, original games and practical digital products. Explore the work and start a collaboration.",
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    title: "AK Games — Thoughtful apps. Memorable play.",
    description:
      "Mobile apps, original games and product development by Artem Kolesnikov.",
    siteName: "AK Games",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/projects/hollow-cover.jpg`,
        width: 1800,
        height: 581,
        alt: "HOLLOW, an original game by AK Games",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AK Games — Thoughtful apps. Memorable play.",
  },
  icons: { icon: asset("/favicon.svg") },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
