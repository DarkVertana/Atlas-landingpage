import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Atlas Screening",
  description:
    "Compliance updates, hiring guides, and industry insights from the Atlas Screening team — for employers, property managers, and organizations.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
