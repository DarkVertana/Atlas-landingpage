import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Atlas Screening | Join the Team",
  description:
    "Help build the modern, FCRA-compliant background-screening platform. See how we work, what we value, and how to get in touch about roles at Atlas Screening.",
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
