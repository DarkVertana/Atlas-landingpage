import type { Metadata } from "next";

// The admin panel is a private tool — never index it or pass link equity.
export const metadata: Metadata = {
  title: "Admin | Atlas Screening",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
