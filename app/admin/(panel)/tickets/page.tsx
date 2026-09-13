import { createSupabaseServerClient } from "../../../lib/supabase/server";
import { PageHeader, EmptyState, TableCard, Th } from "../../_components/ui";
import TicketRow, { type Ticket } from "../../_components/TicketRow";

export const dynamic = "force-dynamic";

export default async function TicketsPage() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("support_tickets")
    .select("id, ticket_number, category, name, email, reference, message, status, created_at")
    .order("created_at", { ascending: false });

  const tickets = (data as Ticket[] | null) ?? [];
  const newCount = tickets.filter((t) => t.status === "new").length;

  return (
    <>
      <PageHeader
        title="Support & disputes"
        subtitle={`${tickets.length} total · ${newCount} new`}
      />

      {tickets.length === 0 ? (
        <EmptyState
          title="No tickets yet"
          hint="Submissions from the Support & Dispute portal will appear here."
        />
      ) : (
        <TableCard>
          <thead className="border-b border-[#EEF3F1] bg-[#FBFDFC]">
            <tr>
              <Th>Ticket</Th>
              <Th>Type</Th>
              <Th>Email</Th>
              <Th>Status</Th>
              <Th>Received</Th>
              <Th className="text-right" />
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EEF3F1]">
            {tickets.map((ticket) => (
              <TicketRow key={ticket.id} ticket={ticket} />
            ))}
          </tbody>
        </TableCard>
      )}
    </>
  );
}
