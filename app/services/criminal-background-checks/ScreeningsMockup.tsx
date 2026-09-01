/* Static, in-product mockup of the Atlas Screening "Background Checks" orders
   table. Markup and tokens mirror the real business dashboard
   (BusinessDashboardClient.tsx → Order Background Checks) so the marketing
   preview matches the actual UI. Non-interactive; more rows than the old
   screenshot so the panel reads at a fuller height. */

type Status = "completed" | "in-progress" | "pending";

type Row = {
  id: string;
  name: string;
  email: string;
  pkg: string;
  date: string;
  status: Status;
  eta?: string;
};

const ROWS: Row[] = [
  { id: "SOC-2026-4042", name: "Alex Morgan", email: "alex.morgan@northstar.co", pkg: "Standard", date: "Jul 21, 2026", status: "in-progress", eta: "2d" },
  { id: "SOC-2026-4041", name: "Taylor Brooks", email: "taylor.brooks@northstar.co", pkg: "Standard", date: "Jul 21, 2026", status: "completed" },
  { id: "SOC-2026-4040", name: "Sam Rivera", email: "sam.rivera@brightpath.io", pkg: "Premium", date: "Jul 20, 2026", status: "completed" },
  { id: "SOC-2026-4039", name: "Jordan Lee", email: "jordan.lee@harbor.com", pkg: "Standard", date: "Jul 18, 2026", status: "pending" },
];

const badge: Record<Status, { wrap: string; dot: string; label: string }> = {
  completed: { wrap: "bg-[#E7F0ED] text-[#0E7C5A]", dot: "bg-[#0E7C5A]", label: "Completed" },
  "in-progress": { wrap: "bg-[#EAF2EE] text-[#01463A]", dot: "bg-[#01463A]", label: "In Progress" },
  pending: { wrap: "bg-[#F6EFDD] text-[#9A6B15]", dot: "bg-[#C79020]", label: "Pending" },
};

const th = "text-left text-[9px] font-medium text-[#7C8C86] uppercase tracking-wider px-3.5 py-2";

export default function ScreeningsMockup() {
  return (
    <div className="bg-white text-[#0F2A24]">
      {/* App top bar */}
      <div className="flex items-center gap-3 border-b border-[#ECEDE6] px-3.5 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E4E7E1]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E4E7E1]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E4E7E1]" />
        </div>
        <div className="ml-3 flex items-center gap-4 text-[10px]">
          <span className="font-medium text-[#01463A]">Orders</span>
          <span className="text-[#7C8C86]">Packages</span>
          <span className="text-[#7C8C86]">Support</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="hidden sm:flex h-6 w-36 items-center rounded-md border border-[#C4CFC9] px-2 text-[10px] text-[#7C8C86]">
            Search
          </span>
          <span className="h-6 w-6 rounded-full bg-[#EAF2EE]" />
        </div>
      </div>

      {/* Content */}
      <div className="p-3.5 sm:p-4">
        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-[13px] font-semibold tracking-tight text-[#0F2A24]">Background Checks</h4>
            <p className="mt-0.5 text-[10px] text-[#7C8C86]">Manage and track your background check requests</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-md bg-[#01463A] px-3 py-1.5 text-[10px] font-medium text-white">
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            New Order
          </span>
        </div>

        {/* Filters */}
        <div className="mt-4 flex gap-2">
          <span className="flex h-8 flex-1 max-w-[220px] items-center gap-2 rounded-md border border-[#C4CFC9] px-2.5 text-[10px] text-[#7C8C86]">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            Search orders...
          </span>
          <span className="flex h-8 items-center gap-1.5 rounded-md border border-[#C4CFC9] px-2.5 text-[10px] font-medium text-[#3C4C47]">
            All Status
            <svg className="h-3 w-3 text-[#5B6B66]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </span>
          <span className="hidden sm:flex h-8 items-center gap-1.5 rounded-md border border-[#C4CFC9] px-2.5 text-[10px] font-medium text-[#3C4C47]">
            All Time
            <svg className="h-3 w-3 text-[#5B6B66]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </span>
        </div>

        {/* Table */}
        <div className="mt-4 overflow-hidden rounded-lg border border-[#ECEDE6]">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#F0F2ED] bg-[#F5F8F6]">
                <th className={th}>Order ID</th>
                <th className={th}>Subject</th>
                <th className={`${th} hidden sm:table-cell`}>Package</th>
                <th className={`${th} hidden xl:table-cell`}>Date</th>
                <th className={`${th} text-right`}>Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0F2ED]">
              {ROWS.map((r) => {
                const b = badge[r.status];
                return (
                  <tr key={r.id} className="transition-colors hover:bg-[#F5F8F6]">
                    <td className="whitespace-nowrap px-3.5 py-2">
                      <span className="text-[11px] font-medium text-[#0F2A24] tabular-nums">{r.id}</span>
                    </td>
                    <td className="max-w-[160px] px-3.5 py-2">
                      <p className="truncate text-[11px] font-medium text-[#0F2A24]">{r.name}</p>
                      <p className="truncate text-[10px] text-[#7C8C86]">{r.email}</p>
                    </td>
                    <td className="hidden whitespace-nowrap px-3.5 py-2 sm:table-cell">
                      <span className="text-[11px] text-[#5B6B66]">{r.pkg}</span>
                    </td>
                    <td className="hidden whitespace-nowrap px-3.5 py-2 xl:table-cell">
                      <span className="text-[11px] text-[#5B6B66]">{r.date}</span>
                    </td>
                    <td className="whitespace-nowrap px-3.5 py-2 text-right">
                      <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${b.wrap}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${b.dot}`} />
                        {b.label}
                        {r.eta && <span className="ml-1 text-[#01463A]">• {r.eta}</span>}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between text-[10px] text-[#7C8C86]">
          <span>Showing {ROWS.length} orders</span>
          <span className="flex items-center gap-1.5">
            <span>Previous</span>
            <span className="rounded bg-[#01463A] px-1.5 py-0.5 text-white">1</span>
            <span>2</span>
            <span>Next</span>
          </span>
        </div>
      </div>
    </div>
  );
}
