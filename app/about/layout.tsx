import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Atlas Screening | Our Mission, Story, and Values",
  description:
    "Atlas Screening is building the modern background-check platform — FCRA-compliant, AI-assisted, and built for employers, property managers, and organizations that need accurate decisions fast.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
