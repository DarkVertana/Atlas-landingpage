import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust & Compliance | Atlas Screening",
  description:
    "How Atlas Screening protects your data and stays compliant — FCRA, SOC 2 Type II, EEOC, PBSA, encryption, audit logging, and applicant rights built in by default.",
};

export default function TrustLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
