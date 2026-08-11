import { redirect } from "next/navigation";
import Link from "next/link";
import Sidebar from "../_components/Sidebar";
import Topbar from "../_components/Topbar";
import { createSupabaseServerClient } from "../../lib/supabase/server";
import { isSupabaseConfigured } from "../../lib/supabase/config";

export const metadata = { title: "Atlas Admin" };
export const dynamic = "force-dynamic";

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  // Before Supabase is wired up, show a friendly setup screen instead of a crash.
  if (!isSupabaseConfigured()) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#F6F8F7] px-6">
        <div className="max-w-md rounded-2xl border border-[#E3EAE7] bg-white p-8 text-center shadow-sm">
          <h1 className="text-lg font-semibold text-[#0F1D19]">Admin not configured yet</h1>
          <p className="mt-2 text-sm text-[#5B6B64]">
            Add your Supabase URL and anon key to <code className="rounded bg-[#EEF3F1] px-1.5 py-0.5">.env.local</code>,
            run the SQL migration, then restart the dev server. See{" "}
            <code className="rounded bg-[#EEF3F1] px-1.5 py-0.5">SETUP_ADMIN.md</code>.
          </p>
          <Link href="/" className="mt-6 inline-block text-sm font-semibold text-[#058B74] hover:underline">
            ← Back to site
          </Link>
        </div>
      </main>
    );
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Middleware already guards this, but double-check on the server.
  if (!user) redirect("/admin/login");

  return (
    <div className="flex min-h-screen bg-[#F7F9F8] text-[#0E1A16]">
      <Sidebar email={user.email ?? "admin"} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-8 py-9">{children}</main>
      </div>
    </div>
  );
}
