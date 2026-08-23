import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Chrome from "./components/Chrome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Signature display face — used only for headings to give the site a memorable,
// non-default voice while Geist keeps body copy clean and readable.
const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atlasscreening.com"),
  title: {
    default: "Atlas Screening — Trust Fast. Hire to Last.",
    // Pages that set their own title keep it verbatim; the template only
    // applies to pages that set a bare title string via `title`.
    template: "%s",
  },
  description:
    "Atlas Screening is a Consumer Reporting Agency providing FCRA-compliant employment background checks — criminal records, identity verification (SSN trace), employment verification, and tenant screening.",
  applicationName: "Atlas Screening",
  icons: {
    icon: "/assets/atlas-favicon.svg",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Atlas Screening",
    title: "Atlas Screening — Trust Fast. Hire to Last.",
    description:
      "FCRA-compliant employment background checks — criminal records, identity verification, employment verification, and tenant screening.",
    url: "https://atlasscreening.com",
    images: [
      {
        url: "/assets/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Atlas Screening — Trust Fast. Hire to Last.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas Screening — Trust Fast. Hire to Last.",
    description:
      "FCRA-compliant employment background checks — criminal records, identity verification, employment verification, and tenant screening.",
    images: ["/assets/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

// Structured data: Organization + WebSite. The FCRA-safe company description
// mirrors the footer's CRA positioning and avoids absolute claims.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Atlas Screening",
  url: "https://atlasscreening.com",
  logo: "https://atlasscreening.com/assets/atlas-logo.webp",
  description:
    "Atlas Screening is a Consumer Reporting Agency (CRA) providing background screening services in accordance with the Fair Credit Reporting Act (FCRA) and applicable state laws.",
  email: "contact@atlasscreening.com",
  telephone: "+1-917-275-7712",
  sameAs: [
    "https://www.linkedin.com/company/atlas-screening",
    "https://www.facebook.com/atlasscreening",
    "https://www.instagram.com/atlasscreening",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "contact@atlasscreening.com",
      telephone: "+1-917-275-7712",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "compliance@atlasscreening.com",
      availableLanguage: "English",
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Atlas Screening",
  url: "https://atlasscreening.com",
  description:
    "FCRA-compliant employment background checks — criminal records, identity verification, employment verification, and tenant screening.",
  publisher: {
    "@type": "Organization",
    name: "Atlas Screening",
    logo: "https://atlasscreening.com/assets/atlas-logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Chrome>{children}</Chrome>
      </body>
    </html>
  );
}
