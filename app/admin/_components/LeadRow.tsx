"use client";

import { useState, useTransition } from "react";
import { updateLeadStatus, deleteLead } from "../actions";
import { Badge, formatDateTime } from "./ui";

export type Lead = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  status: string;
  created_at: string;
};

const STATUSES = ["new", "read", "archived"];

export default function LeadRow({ lead }: { lead: Lead }) {
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();

  return (
    <>
      <tr className="cursor-pointer align-top transition hover:bg-[#FBFDFC]" onClick={() => setOpen((o) => !o)}>
        <td className="px-5 py-3.5">
          <p className="font-medium text-[#0F1D19]">{lead.name}</p>
          <p className="text-xs text-[#8A968F]">{lead.company || "—"}</p>
        </td>
        <td className="px-5 py-3.5">
          <a
            href={`mailto:${lead.email}`}
            onClick={(e) => e.stopPropagation()}
            className="text-sm text-[#058B74] hover:underline"
          >
            {lead.email}
          </a>
        </td>
        <td className="px-5 py-3.5"><Badge status={lead.status} /></td>
        <td className="whitespace-nowrap px-5 py-3.5 text-sm text-[#5B6B64]">
          {formatDateTime(lead.created_at)}
        </td>
        <td className="px-5 py-3.5 text-right text-xs text-[#8A968F]">{open ? "Hide ▲" : "View ▼"}</td>
      </tr>
      {open && (
        <tr className="bg-[#FBFDFC]">
          <td colSpan={5} className="px-5 pb-5 pt-1">
            <p className="whitespace-pre-wrap rounded-lg border border-[#E3EAE7] bg-white p-4 text-sm leading-relaxed text-[#3A463F]">
              {lead.message}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <label className="text-xs font-medium text-[#5B6B64]">
                Status
                <select
                  defaultValue={lead.status}
                  disabled={pending}
                  onChange={(e) => startTransition(() => updateLeadStatus(lead.id, e.target.value))}
                  className="ml-2 rounded-md border border-[#E3EAE7] bg-white px-2 py-1 text-xs text-[#0F1D19]"
                >
                  {STATUSES.map((s) => (
                    <option key={s} value={s} className="capitalize">{s}</option>
                  ))}
                </select>
              </label>
              <a
                href={`mailto:${lead.email}?subject=${encodeURIComponent("Re: your message to Atlas Screening")}`}
                className="rounded-md border border-[#E3EAE7] px-3 py-1.5 text-xs font-medium text-[#0F1D19] transition hover:border-[#058B74]/40 hover:bg-[#058B74]/5"
              >
                Reply by email
              </a>
              <button
                type="button"
                disabled={pending}
                onClick={() => {
                  if (confirm("Delete this lead?")) startTransition(() => deleteLead(lead.id));
                }}
                className="rounded-md px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-50 disabled:opacity-50"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
