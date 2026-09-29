import Link from "next/link";

export default function DashboardHeader() {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <p className="text-sm font-medium text-blue-600">
          Admin Panel
        </p>

        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Ringkasan portofolio dan aktivitas proyek kamu.
        </p>
      </div>

      <Link
        href="/admin/proyek"
        className="w-fit rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
      >
        Kelola Proyek →
      </Link>
    </div>
  );
}