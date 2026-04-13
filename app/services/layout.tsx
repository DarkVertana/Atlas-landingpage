import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Atlas Screening",
  description:
    "Every background-check service on one platform — criminal, identity, employment, tenant, credit, MVR, watchlist, and more. FCRA-compliant and built to scale.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
