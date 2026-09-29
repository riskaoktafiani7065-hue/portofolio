import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "../../../../lib/supabase-server";
import Sidebar from "./Sidebar-temp";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createSupabaseServerClient();

  // Cek apakah user sudah login
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Kalau belum login, langsung ke halaman login
  if (!user) {
    redirect("/admin/login");
  }

  async function logout() {
    "use server";

    const supabase = await createSupabaseServerClient();

    await supabase.auth.signOut();

    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-slate-100">

      {/* SIDEBAR */}
      <Sidebar logout={logout} />

      {/* CONTENT */}
      <main className="ml-64 min-h-screen">
        {children}
      </main>

    </div>
  );
}