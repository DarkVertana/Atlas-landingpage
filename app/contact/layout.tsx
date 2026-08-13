import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Atlas Screening | Sales, Support & Applicant Inquiries",
  description:
    "Reach the Atlas Screening team — sales, client support, and applicant dispute paths. We respond to every inquiry.",
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
