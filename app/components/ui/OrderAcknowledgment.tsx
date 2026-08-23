"use client";

import { useId } from "react";

type OrderAcknowledgmentProps = {
  /** Controlled checked state. */
  checked: boolean;
  /** Fires with the new checked value on toggle. */
  onCheckedChange: (checked: boolean) => void;
  /** Show a required-field hint when unchecked (e.g. after a submit attempt). */
  showError?: boolean;
  /** Disable interaction (e.g. while the order is submitting). */
  disabled?: boolean;
  className?: string;
};

/**
 * FCRA + Stripe checkout acknowledgment.
 *
 * Gate the pay / place-order button on `checked === true`. The acknowledgment
 * text mirrors the Cancellation, Refund & Account Credit Policy so the client
 * affirmatively consents that processing begins on submission and that orders
 * are final except as required by law — this both satisfies the policy's
 * recommended checkout acknowledgment and reduces payment disputes.
 */
export default function OrderAcknowledgment({
  checked,
  onCheckedChange,
  showError = false,
  disabled = false,
  className = "",
}: OrderAcknowledgmentProps) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors ${
          showError && !checked
            ? "border-red-400 bg-red-50/60"
            : "border-gray-200 bg-white hover:border-gray-300"
        } ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
      >
        <input
          id={id}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onCheckedChange(e.target.checked)}
          aria-invalid={showError && !checked}
          aria-describedby={showError && !checked ? errorId : undefined}
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-gray-300 text-[#058B74] accent-[#058B74] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#058B74] focus-visible:ring-offset-2 disabled:cursor-not-allowed"
        />
        <span className="text-[13px] leading-relaxed text-gray-700">
          I acknowledge that processing begins after submission and that submitted
          orders are final, non-cancellable, and non-refundable, except as required
          by law. I confirm I have a permissible purpose and the required
          disclosures and authorizations, and I agree to the{" "}
          <a
            href="/cancellation-refund-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#058B74] underline underline-offset-2 hover:text-[#01463A]"
          >
            Cancellation, Refund &amp; Account Credit Policy
          </a>{" "}
          and{" "}
          <a
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#058B74] underline underline-offset-2 hover:text-[#01463A]"
          >
            Terms of Service
          </a>
          .
        </span>
      </label>

      {showError && !checked && (
        <p id={errorId} className="mt-2 text-[13px] text-red-600">
          Please acknowledge the policy to continue.
        </p>
      )}
    </div>
  );
}
