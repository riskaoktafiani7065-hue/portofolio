import Link from "next/link";

type Project = {
  id: number;
  judul: string | null;
  teknologi: string | null;
  category: string | null;
  featured: boolean | null;
};

type RecentProjectsProps = {
  proyekTerbaru: Project[] | null;
};

export default function RecentProjects({
  proyekTerbaru,
}: RecentProjectsProps) {
  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Proyek Terbaru
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Proyek yang terakhir ditambahkan ke database.
          </p>
        </div>

        <Link
          href="/admin/proyek"
          className="text-sm font-semibold text-blue-600 transition hover:text-blue-800"
        >
          Lihat semua →
        </Link>

      </div>

      <div className="divide-y divide-slate-100">

        {proyekTerbaru && proyekTerbaru.length > 0 ? (
          proyekTerbaru.map((proyek) => (
            <div
              key={proyek.id}
              className="flex flex-col gap-3 py-4 first:pt-0 last:pb-0 md:flex-row md:items-center md:justify-between"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                  {proyek.judul?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">
                    {proyek.judul}
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    {proyek.category || "Tanpa kategori"}
                    {" • "}
                    {proyek.teknologi || "Teknologi belum diisi"}
                  </p>
                </div>

              </div>

              {proyek.featured && (
                <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                  Featured
                </span>
              )}

            </div>
          ))
        ) : (
          <p className="py-8 text-center text-sm text-slate-400">
            Belum ada proyek.
          </p>
        )}

      </div>

    </div>
  );
}
