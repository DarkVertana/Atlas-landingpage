import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Atlas Screening",
  description:
    "Answers to common questions about Atlas Screening — turnaround times, FCRA compliance, applicant experience, pricing, integrations, and data security.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
