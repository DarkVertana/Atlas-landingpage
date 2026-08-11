import Link from "next/link";
import { createSupabaseServerClient } from "../../lib/supabase/server";
import { PageHeader, StatCard, Card, PrimaryLink, Badge, formatDate } from "../_components/ui";

export const dynamic = "force-dynamic";

type RecentPost = { id: string; title: string; published: boolean; published_at: string };

export default async function AdminDashboard() {
  const supabase = await createSupabaseServerClient();

  const [postsRes, publishedRes, leadsRes, newLeadsRes, subsRes, recentRes] = await Promise.all([
    supabase.from("posts").select("id", { count: "exact", head: true }),
    supabase.from("posts").select("id", { count: "exact", head: true }).eq("published", true),
    supabase.from("contact_submissions").select("id", { count: "exact", head: true }),
    supabase.from("contact_submissions").select("id", { count: "exact", head: true }).eq("status", "new"),
    supabase.from("newsletter_signups").select("id", { count: "exact", head: true }),
    supabase.from("posts").select("id, title, published, published_at").order("published_at", { ascending: false }).limit(5),
  ]);

  const totalPosts = postsRes.count ?? 0;
  const published = publishedRes.count ?? 0;
  const leads = leadsRes.count ?? 0;
  const newLeads = newLeadsRes.count ?? 0;
  const subs = subsRes.count ?? 0;
  const recent = (recentRes.data as RecentPost[] | null) ?? [];

  const quickLinks = [
    { href: "/admin/posts", label: "Blog posts" },
    { href: "/admin/leads", label: "Contact leads" },
    { href: "/admin/subscribers", label: "Subscribers" },
  ];

  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Everything running on the Atlas site, at a glance."
        action={<PrimaryLink href="/admin/posts/new">+ New post</PrimaryLink>}
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Blog posts" value={totalPosts} hint={`${published} published`} icon={<IconDoc />} />
        <StatCard label="Drafts" value={totalPosts - published} hint="unpublished" icon={<IconEdit />} />
        <StatCard label="Contact leads" value={leads} hint={`${newLeads} new`} icon={<IconInbox />} />
        <StatCard label="Subscribers" value={subs} hint="newsletter" icon={<IconMail />} />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-sm font-semibold text-[#0E1A16]">Manage content</h2>
          <p className="mt-1 text-sm text-[#61706A]">Jump straight to what you need.</p>
          <div className="mt-4 flex flex-col divide-y divide-[#EEF3F1] border-t border-[#EEF3F1]">
            {quickLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-center justify-between py-3 text-sm font-medium text-[#0E1A16] transition hover:text-[#058B74]"
              >
                {l.label}
                <span className="text-[#CBD5D0] transition group-hover:translate-x-0.5 group-hover:text-[#058B74]">→</span>
              </Link>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-[#0E1A16]">Recent posts</h2>
            <Link href="/admin/posts" className="text-xs font-medium text-[#058B74] hover:underline">View all</Link>
          </div>
          {recent.length === 0 ? (
            <p className="mt-4 text-sm text-[#61706A]">
              No posts yet. <Link href="/admin/posts/new" className="font-medium text-[#058B74] hover:underline">Write your first →</Link>
            </p>
          ) : (
            <div className="mt-4 flex flex-col divide-y divide-[#EEF3F1] border-t border-[#EEF3F1]">
              {recent.map((p) => (
                <Link
                  key={p.id}
                  href={`/admin/posts/${p.id}`}
                  className="group flex items-center justify-between gap-3 py-2.5"
                >
                  <span className="line-clamp-1 text-sm font-medium text-[#0E1A16] transition group-hover:text-[#058B74]">
                    {p.title}
                  </span>
                  <span className="flex shrink-0 items-center gap-3">
                    <span className="text-xs text-[#94A19B]">{formatDate(p.published_at)}</span>
                    <Badge status={p.published ? "published" : "draft"} />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </Card>
      </div>
    </>
  );
}

function IconDoc() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
    </svg>
  );
}
function IconEdit() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  );
}
function IconInbox() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" />
    </svg>
  );
}
