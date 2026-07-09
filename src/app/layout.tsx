import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { SITE_URL, BUSINESS } from "@/lib/constants";
import {
  getLocalBusinessSchema,
  getServiceSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const TITLE = "Fence Contractor Shreveport, LA | Southern Home Improvements";
const DESCRIPTION =
  "Southern Home Improvements (Straight Line Fencing of Louisiana) is a licensed, insured fence contractor in Shreveport, LA. Wood, vinyl, chain link & aluminum fencing, custom gates, decks and pergolas. Free estimates.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${BUSINESS.name}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Fence Contractor Shreveport LA",
    "Fence Company Shreveport Louisiana",
    "Wood Privacy Fence Shreveport",
    "Vinyl Fence Installation Shreveport LA",
    "Chain Link Fence Shreveport",
    "Aluminum Fence Shreveport LA",
    "Custom Gates Shreveport",
    "Deck and Pergola Builder Shreveport",
    "Straight Line Fencing of Louisiana",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/hero/wood-privacy-fence-line-blue-sky-shreveport.jpg",
        width: 1536,
        height: 2048,
        alt: `${BUSINESS.name} — Fence Contractor in Shreveport, Louisiana`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/hero/wood-privacy-fence-line-blue-sky-shreveport.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#f6f1e6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} h-full`}
    >
      <head>
        <JsonLd data={getLocalBusinessSchema()} />
        <JsonLd data={getServiceSchema()} />
        <JsonLd data={getBreadcrumbSchema()} />
      </head>
      <body className="min-h-full bg-cream font-body text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
