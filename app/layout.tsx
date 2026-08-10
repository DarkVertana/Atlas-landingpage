import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import ChatWidget from "./components/ChatWidget";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
  title: "Atlas Screening — Trust Fast. Hire to Last.",
  description:
    "Atlas Screening provides fast, accurate employment background checks including criminal records, employment verification, education verification, drug testing, and more.",
  icons: {
    icon: "/assets/atlas-favicon.svg",
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
        <Header />
        {children}
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
