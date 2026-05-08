import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance & Consumer Protection | Atlas Screening",
  description:
    "Learn how Atlas Screening maintains FCRA compliance, consumer protection, and audit-ready documentation across all screening services.",
};

export default function ComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}