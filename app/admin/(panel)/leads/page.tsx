import { createSupabaseServerClient } from "../../../lib/supabase/server";
import { PageHeader, EmptyState, TableCard, Th } from "../../_components/ui";
import LeadRow, { type Lead } from "../../_components/LeadRow";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("contact_submissions")
    .select("id, name, email, company, message, status, created_at")
    .order("created_at", { ascending: false });

  const leads = (data as Lead[] | null) ?? [];
  const newCount = leads.filter((l) => l.status === "new").length;

  return (
    <>
      <PageHeader
        title="Contact leads"
        subtitle={`${leads.length} total · ${newCount} new`}
      />

      {leads.length === 0 ? (
        <EmptyState
          title="No leads yet"
          hint="Submissions from the contact form will appear here."
        />
      ) : (
        <TableCard>
          <thead className="border-b border-[#EEF3F1] bg-[#FBFDFC]">
            <tr>
              <Th>From</Th>
              <Th>Email</Th>
              <Th>Status</Th>
              <Th>Received</Th>
              <Th className="text-right" />
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EEF3F1]">
            {leads.map((lead) => (
              <LeadRow key={lead.id} lead={lead} />
            ))}
          </tbody>
        </TableCard>
      )}
    </>
  );
}
