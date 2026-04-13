import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Atlas Screening",
  description:
    "How Atlas Screening collects, uses, and protects personal information — including applicant data, consumer rights, and data retention practices.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
