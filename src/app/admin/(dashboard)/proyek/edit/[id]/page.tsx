import { createSupabaseServerClient } from "../../../../../../../lib/supabase-server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditProyekPage({
  params,
}: PageProps) {
  const { id } = await params;

  const supabase = await createSupabaseServerClient();

  // Ambil data proyek dari Supabase berdasarkan ID
  const { data: proyek, error: getError } = await supabase
    .from("proyek")
    .select("*")
    .eq("id", id)
    .single();

  // Kalau proyek tidak ditemukan
  if (getError || !proyek) {
    return (
      <div className="mx-auto max-w-3xl p-6">
        <div className="rounded-xl bg-red-50 p-6 text-red-600">
          <h1 className="text-xl font-bold">
            Proyek tidak ditemukan
          </h1>

          <p className="mt-2">
            ID proyek: {id}
          </p>
        </div>
      </div>
    );
  }

  // Server Action untuk update proyek
  async function updateProyek(formData: FormData) {
  "use server";

  const supabase = await createSupabaseServerClient();

  // Cek apakah user benar-benar terbaca oleh Supabase
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("USER UPDATE:", user?.email ?? "TIDAK ADA USER");
  console.log("ID YANG DIUPDATE:", id);

  // Kalau session tidak terbaca
  if (!user) {
    throw new Error("User belum login atau session Supabase tidak terbaca.");
  }

  const judul = String(formData.get("judul") ?? "");
  const deskripsi = String(formData.get("deskripsi") ?? "");
  const teknologi = String(formData.get("teknologi") ?? "");
  const link = String(formData.get("link") ?? "");
  const category = String(formData.get("category") ?? "");
  const image = String(formData.get("image") ?? "");
  const featured = formData.get("featured") === "true";

  const { error } = await supabase
    .from("proyek")
    .update({
      judul,
      deskripsi,
      teknologi,
      link: link || null,
      category,
      image: image || null,
      featured,
    })
    .eq("id", id);

  if (error) {
    console.error("UPDATE ERROR:", error.message);
    throw new Error(`Gagal mengupdate proyek: ${error.message}`);
  }

  console.log("USER SAAT UPDATE:", user?.email ?? "TIDAK ADA USER");

  revalidatePath("/admin/proyek");
  revalidatePath("/proyek");

  redirect("/admin/proyek");
}

  return (
    <div className="mx-auto max-w-3xl p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Edit Proyek
        </h1>

        <p className="mt-2 text-slate-500">
          Ubah informasi proyek portfolio kamu.
        </p>
      </div>

      {/* Form */}
      <form
        action={updateProyek}
        className="space-y-6 rounded-2xl bg-white p-6 shadow-sm"
      >
        {/* Judul */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Judul Proyek
          </label>

          <input
            type="text"
            name="judul"
            defaultValue={proyek.judul ?? ""}
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Deskripsi */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Deskripsi
          </label>

          <textarea
            name="deskripsi"
            defaultValue={proyek.deskripsi ?? ""}
            rows={5}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Teknologi */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Teknologi
          </label>

          <input
            type="text"
            name="teknologi"
            defaultValue={proyek.teknologi ?? ""}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Link */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Link Proyek
          </label>

          <input
            type="url"
            name="link"
            defaultValue={proyek.link ?? ""}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Category
          </label>

          <input
            type="text"
            name="category"
            defaultValue={proyek.category ?? ""}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Image */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Image
          </label>

          <input
            type="text"
            name="image"
            defaultValue={proyek.image ?? ""}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Featured */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Featured
          </label>

          <select
            name="featured"
            defaultValue={proyek.featured ? "true" : "false"}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="false">Tidak</option>
            <option value="true">Ya</option>
          </select>
        </div>

        {/* Tombol */}
        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Simpan Perubahan
          </button>

          <a
            href="/admin/proyek"
            className="rounded-lg bg-slate-200 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-300"
          >
            Batal
          </a>
        </div>
      </form>
    </div>
  );
}