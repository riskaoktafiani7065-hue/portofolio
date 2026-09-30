import Link from "next/link";

type Project = {
  id: number;
  judul: string | null;
  category: string | null;
  teknologi: string | null;
  featured: boolean | null;
  link: string | null;
};

type ProjectTableProps = {
  proyek: Project[] | null;
  hasError: boolean;
};

export default function ProjectTable({
  proyek,
  hasError,
}: ProjectTableProps) {
  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm sm:p-6">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <div>
          <h3 className="text-xl font-bold text-slate-800">
            Daftar Proyek
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Semua proyek yang tersimpan di database.
          </p>
        </div>

        <div className="w-fit rounded-lg bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
          Total: {proyek?.length ?? 0} proyek
        </div>
      </div>

      {/* =====================================================
          ERROR
      ===================================================== */}

      {hasError ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="font-semibold text-red-600">
            Gagal mengambil data proyek.
          </p>

          <p className="mt-1 text-sm text-red-500">
            Silakan refresh halaman atau periksa koneksi ke Supabase.
          </p>
        </div>
      ) : proyek && proyek.length > 0 ? (
        <>
          {/* =================================================
              MOBILE — CARD
          ================================================= */}

          <div className="space-y-4 md:hidden">
            {proyek.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                {/* JUDUL */}
                <div className="mb-4">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                    Judul Proyek
                  </p>

                  <p className="wrap-break-word font-semibold text-slate-800">
                    {item.judul || "Tanpa judul"}
                  </p>
                </div>

                {/* CATEGORY */}
                <div className="mb-4">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                    Category
                  </p>

                  <span className="inline-block max-w-full wrap-break-word rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {item.category || "Tanpa kategori"}
                  </span>
                </div>

                {/* TEKNOLOGI */}
                <div className="mb-4">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                    Teknologi
                  </p>

                  <p className="wrap-break-word text-sm text-slate-500">
                    {item.teknologi || "-"}
                  </p>
                </div>

                {/* FEATURED */}
                <div className="mb-4">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                    Featured
                  </p>

                  {item.featured ? (
                    <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                      Featured
                    </span>
                  ) : (
                    <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                      Tidak
                    </span>
                  )}
                </div>

                {/* LINK */}
                <div className="mb-5">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                    Link
                  </p>

                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all text-sm font-semibold text-blue-600 hover:text-blue-800"
                    >
                      Lihat Proyek
                    </a>
                  ) : (
                    <span className="text-sm text-slate-400">
                      Tidak ada link
                    </span>
                  )}
                </div>

                {/* AKSI */}
                <div className="border-t border-slate-100 pt-4">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                    Aksi
                  </p>

                  <div className="flex gap-2">
                    <Link
                      href={`/admin/proyek/edit/${item.id}`}
                      className="flex-1 rounded-lg bg-blue-50 px-3 py-2.5 text-center text-sm font-semibold text-blue-600 transition hover:bg-blue-100"
                    >
                      Edit
                    </Link>

                    <Link
                      href={`/admin/proyek/hapus/${item.id}`}
                      className="flex-1 rounded-lg bg-red-50 px-3 py-2.5 text-center text-sm font-semibold text-red-600 transition hover:bg-red-100"
                    >
                      Hapus
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* =================================================
              DESKTOP — TABLE
          ================================================= */}

          <div className="hidden overflow-hidden rounded-xl border border-slate-200 md:block">
            <table className="w-full text-left text-sm">

              {/* TABLE HEADER */}
              <thead className="bg-slate-50">
                <tr className="border-b border-slate-200">

                  <th className="px-5 py-4 font-semibold text-slate-600">
                    Judul
                  </th>

                  <th className="px-5 py-4 font-semibold text-slate-600">
                    Category
                  </th>

                  <th className="px-5 py-4 font-semibold text-slate-600">
                    Teknologi
                  </th>

                  <th className="px-5 py-4 text-center font-semibold text-slate-600">
                    Featured
                  </th>

                  <th className="px-5 py-4 text-center font-semibold text-slate-600">
                    Link
                  </th>

                  <th className="px-5 py-4 text-center font-semibold text-slate-600">
                    Aksi
                  </th>

                </tr>
              </thead>

              {/* TABLE BODY */}
              <tbody className="divide-y divide-slate-100">

                {proyek.map((item) => (
                  <tr
                    key={item.id}
                    className="transition hover:bg-slate-50"
                  >

                    {/* JUDUL */}
                    <td className="px-5 py-4">
                      <p className="font-semibold text-slate-800">
                        {item.judul || "Tanpa judul"}
                      </p>
                    </td>

                    {/* CATEGORY */}
                    <td className="px-5 py-4">
                      <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        {item.category || "Tanpa kategori"}
                      </span>
                    </td>

                    {/* TEKNOLOGI */}
                    <td className="px-5 py-4">
                      <p className="max-w-xs wrap-break-word text-slate-500">
                        {item.teknologi || "-"}
                      </p>
                    </td>

                    {/* FEATURED */}
                    <td className="px-5 py-4 text-center">
                      {item.featured ? (
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                          Featured
                        </span>
                      ) : (
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                          Tidak
                        </span>
                      )}
                    </td>

                    {/* LINK */}
                    <td className="px-5 py-4 text-center">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-blue-600 transition hover:text-blue-800"
                        >
                          Lihat
                        </a>
                      ) : (
                        <span className="text-slate-400">
                          -
                        </span>
                      )}
                    </td>

                    {/* AKSI */}
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-center gap-2">

                        <Link
                          href={`/admin/proyek/edit/${item.id}`}
                          className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-100"
                        >
                          Edit
                        </Link>

                        <Link
                          href={`/admin/proyek/hapus/${item.id}`}
                          className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                        >
                          Hapus
                        </Link>

                      </div>
                    </td>

                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </>
      ) : (
        /* =================================================
           DATA KOSONG
        ================================================= */

        <div className="flex min-h-48 items-center justify-center rounded-xl bg-slate-50">
          <div className="text-center">

            <p className="font-semibold text-slate-600">
              Belum ada proyek
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Tambahkan proyek melalui form di atas.
            </p>

          </div>
        </div>
      )}
    </section>
  );
}