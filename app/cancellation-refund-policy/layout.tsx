import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation, Refund & Account Credit Policy | Atlas Screening",
  description:
    "How Atlas Screening handles order cancellations, refunds, account credits, third-party pass-through fees, and billing-review requests for consumer screening services.",
};

export default function CancellationRefundPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
