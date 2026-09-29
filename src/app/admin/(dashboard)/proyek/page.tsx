import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { createSupabaseServerClient } from "../../../../../lib/supabase-server";

import ProjectHeader from "../../../../component/admin/proyek/ProjectHeader";
import ProjectForm from "../../../../component/admin/proyek/ProjectForm";
import ProjectTable from "../../../../component/admin/proyek/ProjectTable";

export default async function AdminProyekPage() {
  const supabase = await createSupabaseServerClient();

  // =========================
  // AMBIL DATA PROYEK
  // =========================
  const { data: proyek, error } = await supabase
    .from("proyek")
    .select("*")
    .order("created_at", { ascending: false });

  // =========================
  // SERVER ACTION TAMBAH
  // =========================
  async function tambahProyek(formData: FormData) {
    "use server";

    const supabase = await createSupabaseServerClient();

    // Cek user yang sedang login
    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log("USER SAAT TAMBAH:", user?.email);

    if (!user) {
      redirect("/admin/login");
    }

    // Ambil data dari form
    const judul = formData.get("judul")?.toString() || "";
    const deskripsi = formData.get("deskripsi")?.toString() || "";
    const teknologi = formData.get("teknologi")?.toString() || "";
    const link = formData.get("link")?.toString() || "";
    const category = formData.get("category")?.toString() || "";
    const image = formData.get("image")?.toString() || "";
    const featured = formData.get("featured") === "on";

    // Validasi sederhana
    if (!judul || !deskripsi) {
      redirect("/admin/proyek");
    }

    // Insert ke Supabase
    const { error } = await supabase.from("proyek").insert({
      judul,
      deskripsi,
      teknologi,
      link,
      category,
      image,
      featured,
    });

    if (error) {
      console.error("Gagal menambahkan proyek:", error);
      redirect("/admin/proyek");
    }

    // Refresh halaman setelah data berhasil ditambahkan
    revalidatePath("/admin/proyek");
    revalidatePath("/proyek");

    redirect("/admin/proyek");
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-8">

      {/* HEADER */}
      <ProjectHeader />

      {/* FORM TAMBAH PROYEK */}
      <ProjectForm tambahProyek={tambahProyek} />

      {/* TABEL PROYEK */}
      <ProjectTable
        proyek={proyek}
        hasError={!!error}
      />

    </div>
  );
}