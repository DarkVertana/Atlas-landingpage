import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Certification & User Agreement | Atlas Screening",
  description:
    "Client certification and permissible use agreement for Atlas Screening background screening services, including FCRA compliance and adverse action requirements.",
};

export default function ClientCertificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}