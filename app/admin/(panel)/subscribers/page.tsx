import { createSupabaseServerClient } from "../../../lib/supabase/server";
import { PageHeader, EmptyState, TableCard, Th, formatDateTime } from "../../_components/ui";
import { CopyEmailsButton, DeleteSubscriberButton } from "../../_components/SubscribersTools";

export const dynamic = "force-dynamic";

type Sub = { id: string; email: string; source: string; created_at: string };

export default async function SubscribersPage() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("newsletter_signups")
    .select("id, email, source, created_at")
    .order("created_at", { ascending: false });

  const subs = (data as Sub[] | null) ?? [];

  return (
    <>
      <PageHeader
        title="Subscribers"
        subtitle={`${subs.length} newsletter ${subs.length === 1 ? "signup" : "signups"}`}
        action={<CopyEmailsButton emails={subs.map((s) => s.email)} />}
      />

      {subs.length === 0 ? (
        <EmptyState
          title="No subscribers yet"
          hint="Emails from the blog newsletter form will appear here."
        />
      ) : (
        <TableCard>
          <thead className="border-b border-[#EEF3F1] bg-[#FBFDFC]">
            <tr>
              <Th>Email</Th>
              <Th>Source</Th>
              <Th>Subscribed</Th>
              <Th className="text-right" />
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EEF3F1]">
            {subs.map((s) => (
              <tr key={s.id} className="transition hover:bg-[#FBFDFC]">
                <td className="px-5 py-3.5">
                  <a href={`mailto:${s.email}`} className="font-medium text-[#0E1A16] hover:text-[#058B74]">
                    {s.email}
                  </a>
                </td>
                <td className="px-5 py-3.5 text-[#61706A] capitalize">{s.source}</td>
                <td className="whitespace-nowrap px-5 py-3.5 text-[#61706A]">{formatDateTime(s.created_at)}</td>
                <td className="px-5 py-3.5 text-right"><DeleteSubscriberButton id={s.id} /></td>
              </tr>
            ))}
          </tbody>
        </TableCard>
      )}
    </>
  );
}
