import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Atlas Screening",
  description:
    "The terms governing your use of Atlas Screening's background-check services — including account responsibilities, acceptable use, and legal disclosures.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
