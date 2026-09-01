import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlas Tenant: Smarter Tenant Screening for Landlords",
  description:
    "Atlas Tenant: FCRA-compliant tenant screening for landlords and property managers. Criminal, credit & ResidentScore, eviction, identity, and income in one applicant-guided report. Pay as you go from $24.99.",
  alternates: { canonical: "/tenant" },
  openGraph: {
    title: "Atlas Tenant: Smarter Tenant Screening for Landlords",
    description:
      "FCRA-compliant tenant screening: criminal, credit, eviction, identity, and income in one applicant-guided report. From $24.99, pay as you go.",
    url: "https://atlasscreening.com/tenant",
    type: "website",
  },
};

export default function TenantLayout({ children }: { children: React.ReactNode }) {
  return children;
}
