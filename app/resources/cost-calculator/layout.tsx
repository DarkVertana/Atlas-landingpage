import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Screening Cost Calculator | Atlas Screening",
  description:
    "Estimate your annual background-check spend in seconds. Pick a tier, add-ons, and volume — see monthly and annual totals at a glance.",
};

export default function CostCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
