import { createSupabaseServerClient } from "../../../../../../../lib/supabase-server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function HapusProyekPage({
  params,
}: PageProps) {
  const { id } = await params;

  async function hapusProyek() {
    "use server";

    const supabase = await createSupabaseServerClient();

    // Cek apakah user sudah login
    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log(
      "USER SAAT HAPUS:",
      user?.email ?? "TIDAK ADA USER"
    );

    // Jika belum login, kembali ke halaman login
    if (!user) {
      redirect("/admin/login");
    }

    // Hapus proyek berdasarkan ID
    const { error } = await supabase
      .from("proyek")
      .delete()
      .eq("id", id);

    // Cek apakah proses hapus gagal
    if (error) {
      console.error("DELETE ERROR:", error.message);

      throw new Error(
        `Gagal menghapus proyek: ${error.message}`
      );
    }

    // Perbarui halaman setelah data berhasil dihapus
    revalidatePath("/admin/proyek");
    revalidatePath("/proyek");

    // Kembali ke dashboard setelah berhasil menghapus
    redirect("/admin/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-10">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:p-10">

        {/* ICON WARNING */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-10 w-10 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m0 3h.008M10.29 3.86l-7.2 12.48A1.75 1.75 0 004.6 19h14.8a1.75 1.75 0 001.51-2.66l-7.2-12.48a1.75 1.75 0 00-3.02 0z"
              />
            </svg>
          </div>
        </div>

        {/* JUDUL */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Hapus Proyek
          </h1>

          <p className="mt-3 text-base text-slate-500">
            Apakah kamu yakin ingin menghapus proyek ini?
          </p>
        </div>

        {/* WARNING */}
        <div className="mt-7 flex items-center gap-3 rounded-2xl border border-red-100 bg-red-50 px-5 py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6 shrink-0 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m0 3h.008M10.29 3.86l-7.2 12.48A1.75 1.75 0 004.6 19h14.8a1.75 1.75 0 001.51-2.66l-7.2-12.48a1.75 1.75 0 00-3.02 0z"
            />
          </svg>

          <p className="text-sm font-medium text-red-600">
            Data yang sudah dihapus tidak dapat dikembalikan.
          </p>
        </div>

        {/* BUTTON */}
        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">

          {/* BATAL */}
          <a
            href="/admin/proyek"
            className="rounded-xl border border-slate-200 bg-white px-7 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Batal
          </a>

          {/* HAPUS */}
          <form action={hapusProyek}>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-3 font-semibold text-white shadow-sm transition hover:bg-red-700 hover:shadow-md sm:w-auto"
            >
              {/* TRASH ICON */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 11v6M14 11v6"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 7l1 13h10l1-13"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 7V4h6v3"
                />
              </svg>

              Hapus Proyek
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}