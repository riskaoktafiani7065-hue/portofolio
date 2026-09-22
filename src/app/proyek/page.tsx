import CardProyek from "@/component/CardProyek";
import Link from "next/link"
import { supabase } from "@/../lib/supabase";

interface Project {
  id: number;
  created_at: string;
  judul: string;
  deskripsi: string;
  teknologi: string | null;
  link: string | null;
  category: string | null;
  image: string | null;
  featured: boolean | null;
}

export default async function ProyekPage() {
  const { data: daftarProyek, error } = await supabase
    .from("proyek")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    return (
      <main className="py-6">
        <p className="text-red-600">
          Gagal memuat data: {error.message}
        </p>
      </main>
    );
  }

  return (
    <main className="py-6 space-y-6">

    <div className="flex flex-col gap-4 md:relative md:flex-row md:items-center md:justify-center">
  <Link
    href="/"
    className="inline-flex w-fit items-center gap-4 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 md:absolute md:left-3"
  >
    ← Back to Home
  </Link>

      <h1 className="text-center text-3xl font-extrabold text-slate-900 dark:text-white">
        Daftar Karya & Proyek Siswa
      </h1>
    </div>
    
      <div className="grid grid-cols-1 gap-6 pt-2 md:grid-cols-2 lg:grid-cols-3">

        {daftarProyek?.map((item: Project) => (
          <CardProyek
            key={item.id}
            id={item.judul
              .toLowerCase()
              .trim()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "")}
            title={item.judul}
            category={item.category || "Project"}
            description={item.deskripsi}
            image={item.image || ""}
            tech={
              item.teknologi
                ?.split(",")
                .map((tech) => tech.trim())
                .filter(Boolean) ?? []
            }
            featured={item.featured ?? false}
          />
        ))}

      </div>

    </main>
  );
}