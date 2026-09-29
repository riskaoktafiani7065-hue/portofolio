type DashboardSummaryProps = {
  totalProyek: number;
  totalFeatured: number;
  jumlahKategori: number;
};

export default function DashboardSummary({
  totalProyek,
  totalFeatured,
  jumlahKategori,
}: DashboardSummaryProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div>
        <h2 className="text-xl font-bold text-slate-900">
          Ringkasan
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Kondisi portofolio saat ini.
        </p>
      </div>

      <div className="mt-7 space-y-5">

        <div className="flex items-center justify-between border-b border-slate-100 pb-5">
          <span className="text-sm text-slate-500">
            Total proyek
          </span>

          <span className="font-bold text-slate-900">
            {totalProyek}
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-slate-100 pb-5">
          <span className="text-sm text-slate-500">
            Proyek featured
          </span>

          <span className="font-bold text-slate-900">
            {totalFeatured}
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-slate-100 pb-5">
          <span className="text-sm text-slate-500">
            Kategori
          </span>

          <span className="font-bold text-slate-900">
            {jumlahKategori}
          </span>
        </div>

        <div className="rounded-xl bg-blue-50 p-4">
          <p className="text-xs font-medium text-blue-600">
            Status
          </p>

          <p className="mt-1 text-sm font-semibold text-blue-900">
            Portfolio aktif dan terhubung ke database.
          </p>
        </div>

      </div>

    </div>
  );
}