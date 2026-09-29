import Link from "next/link";

export default function ProjectHeader() {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <p className="text-sm font-medium text-blue-600">
          Admin Panel
        </p>

        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
          Kelola Proyek
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Tambahkan, edit, dan hapus proyek portfolio kamu.
        </p>
      </div>

      <Link
        href="/admin/dashboard"
        className="w-fit rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
      >
        ← Dashboard
      </Link>
    </div>
  );
}