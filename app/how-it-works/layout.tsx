import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Atlas Screening",
  description:
    "Walk through the Atlas Screening workflow — from applicant invite to verified report. Compliant, fast, and built around real humans on both sides of the check.",
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
