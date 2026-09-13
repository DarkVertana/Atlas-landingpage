"use client";

import { useState, useTransition } from "react";
import { updateTicketStatus, deleteTicket } from "../actions";
import { Badge, formatDateTime } from "./ui";

export type Ticket = {
  id: string;
  ticket_number: string;
  category: string;
  name: string;
  email: string;
  reference: string | null;
  message: string;
  status: string;
  created_at: string;
};

const STATUSES = ["new", "in_review", "resolved", "archived"];

export default function TicketRow({ ticket }: { ticket: Ticket }) {
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();

  const isDispute = ticket.category === "dispute";

  return (
    <>
      <tr className="cursor-pointer align-top transition hover:bg-[#FBFDFC]" onClick={() => setOpen((o) => !o)}>
        <td className="px-5 py-3.5">
          <p className="font-mono text-xs font-semibold text-[#0F1D19]">{ticket.ticket_number}</p>
          <p className="mt-0.5 text-xs text-[#8A968F]">{ticket.name}</p>
        </td>
        <td className="px-5 py-3.5">
          <span
            className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset capitalize ${
              isDispute
                ? "bg-rose-50 text-rose-700 ring-rose-600/20"
                : "bg-[#058B74]/8 text-[#058B74] ring-[#058B74]/20"
            }`}
          >
            {ticket.category}
          </span>
        </td>
        <td className="px-5 py-3.5">
          <a
            href={`mailto:${ticket.email}`}
            onClick={(e) => e.stopPropagation()}
            className="text-sm text-[#058B74] hover:underline"
          >
            {ticket.email}
          </a>
        </td>
        <td className="px-5 py-3.5"><Badge status={ticket.status} /></td>
        <td className="whitespace-nowrap px-5 py-3.5 text-sm text-[#5B6B64]">
          {formatDateTime(ticket.created_at)}
        </td>
        <td className="px-5 py-3.5 text-right text-xs text-[#8A968F]">{open ? "Hide ▲" : "View ▼"}</td>
      </tr>
      {open && (
        <tr className="bg-[#FBFDFC]">
          <td colSpan={6} className="px-5 pb-5 pt-1">
            {ticket.reference && (
              <p className="mb-2 text-xs text-[#5B6B64]">
                <span className="font-medium">Reference:</span> {ticket.reference}
              </p>
            )}
            <p className="whitespace-pre-wrap rounded-lg border border-[#E3EAE7] bg-white p-4 text-sm leading-relaxed text-[#3A463F]">
              {ticket.message}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <label className="text-xs font-medium text-[#5B6B64]">
                Status
                <select
                  defaultValue={ticket.status}
                  disabled={pending}
                  onChange={(e) => startTransition(() => updateTicketStatus(ticket.id, e.target.value))}
                  className="ml-2 rounded-md border border-[#E3EAE7] bg-white px-2 py-1 text-xs capitalize text-[#0F1D19]"
                >
                  {STATUSES.map((s) => (
                    <option key={s} value={s} className="capitalize">{s.replace(/_/g, " ")}</option>
                  ))}
                </select>
              </label>
              <a
                href={`mailto:${ticket.email}?subject=${encodeURIComponent(`Re: ${ticket.ticket_number}`)}`}
                className="rounded-md border border-[#E3EAE7] px-3 py-1.5 text-xs font-medium text-[#0F1D19] transition hover:border-[#058B74]/40 hover:bg-[#058B74]/5"
              >
                Reply by email
              </a>
              <button
                type="button"
                disabled={pending}
                onClick={() => {
                  if (confirm("Delete this ticket?")) startTransition(() => deleteTicket(ticket.id));
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
