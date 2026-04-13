import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Package Recommender | Atlas Screening",
  description:
    "Find the right Atlas screening package for your industry and roles. Tell us a bit about your team and get a tailored recommendation in seconds.",
};

export default function PackageRecommenderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
