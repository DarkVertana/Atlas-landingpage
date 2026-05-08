import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dispute Resolution Policy | Atlas Screening",
  description:
    "Learn how Atlas Screening handles consumer disputes and reinvestigations in compliance with the Fair Credit Reporting Act (FCRA).",
};

export default function DisputeResolutionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}