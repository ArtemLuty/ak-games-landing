import type { Metadata } from "next";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://ak-games.vercel.app"),
  title: "AK Games — Indie Mobile Apps & Games",
  description:
    "AK Games is an indie mobile development brand creating games, utility apps, and experimental products with Flutter.",
  keywords: [
    "Flutter developer",
    "indie games",
    "mobile apps",
    "AK Games",
    "mobile development",
    "App Store games",
  ],
  openGraph: {
    title: "AK Games — Indie Mobile Apps & Games",
    description:
      "AK Games creates polished mobile games, utility apps, and experimental products with Flutter.",
    siteName: "AK Games",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AK Games — Indie Mobile Apps & Games",
    description:
      "AK Games creates polished mobile games, utility apps, and experimental products with Flutter.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
