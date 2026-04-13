import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Atlas Screening",
  description:
    "Transparent pay-as-you-go pricing for background checks. Three tiers and a full suite of add-ons — no contracts, no setup fees, billed only when applicants complete a check.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
