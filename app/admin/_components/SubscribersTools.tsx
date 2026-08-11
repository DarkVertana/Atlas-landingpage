"use client";

import { useState, useTransition } from "react";
import { deleteSubscriber } from "../actions";

export function CopyEmailsButton({ emails }: { emails: string[] }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(emails.join(", "));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={copy}
      disabled={emails.length === 0}
      className="rounded-lg border border-[#E3EAE7] px-4 py-2.5 text-sm font-medium text-[#0F1D19] transition hover:border-[#058B74]/40 hover:bg-[#058B74]/5 disabled:opacity-50"
    >
      {copied ? "Copied ✓" : "Copy all emails"}
    </button>
  );
}

export function DeleteSubscriberButton({ id }: { id: string }) {
  const [pending, startTransition] = useTransition();
  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        if (confirm("Remove this subscriber?")) startTransition(() => deleteSubscriber(id));
      }}
      className="text-sm font-medium text-red-600 hover:underline disabled:opacity-50"
    >
      {pending ? "…" : "Remove"}
    </button>
  );
}
