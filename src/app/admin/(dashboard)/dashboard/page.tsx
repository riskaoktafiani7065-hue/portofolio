import Link from "next/link";
import { createSupabaseServerClient } from "../../../../../lib/supabase-server";

import StatCard from "../../../../component/admin/dashboard/StatCard";
import DashboardHeader from "../../../../component/admin/dashboard/DashboardHeader";
import CategoryChart from "../../../../component/admin/dashboard/CategoryChart";
import DashboardSummary from "@/component/admin/dashboard/DashboardSummary";
import RecentProjects from "@/component/admin/dashboard/RecentProjects";

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();

  // =========================
  // DATA STATISTIK
  // =========================

  const { count: totalProyek } = await supabase
    .from("proyek")
    .select("id", { count: "exact", head: true });

  const { count: totalFeatured } = await supabase
    .from("proyek")
    .select("id", { count: "exact", head: true })
    .eq("featured", true);

  // =========================
  // DATA KATEGORI UNTUK GRAFIK
  // =========================

  const { data: semuaProyek } = await supabase
    .from("proyek")
    .select("category");

  const kategoriMap: Record<string, number> = {};

  semuaProyek?.forEach((proyek) => {
    const kategori = proyek.category || "Lainnya";

    kategoriMap[kategori] = (kategoriMap[kategori] || 0) + 1;
  });

  const dataKategori = Object.entries(kategoriMap)
    .map(([nama, jumlah]) => ({
      nama,
      jumlah,
    }))
    .sort((a, b) => b.jumlah - a.jumlah);

  const jumlahKategori = dataKategori.length;

  const nilaiMaksimal =
    dataKategori.length > 0
      ? Math.max(...dataKategori.map((item) => item.jumlah))
      : 1;

  // =========================
  // PROYEK TERBARU
  // =========================

  const { data: proyekTerbaru } = await supabase
    .from("proyek")
    .select("id, judul, teknologi, category, featured")
    .order("created_at", { ascending: false })
    .limit(4);

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-8">

      {/* =========================
          HEADER
      ========================= */}

      <DashboardHeader />

      {/* =========================
          STATISTIK
      ========================= */}

      <div className="grid gap-4 md:grid-cols-3">

        <StatCard
          title="Total Proyek"
          value={totalProyek ?? 0}
          label="Portfolio"
          labelClassName="bg-blue-50 text-blue-600"
        />

        <StatCard
          title="Proyek Featured"
          value={totalFeatured ?? 0}
          label="Unggulan"
          labelClassName="bg-amber-50 text-amber-600"
        />

        <StatCard
          title="Kategori"
          value={jumlahKategori}
          label="Digunakan"
          labelClassName="bg-slate-100 text-slate-600"
        />

      </div>

      {/* =========================
          GRAFIK + RINGKASAN
      ========================= */}

      <div className="mt-6 grid gap-6 lg:grid-cols-3">

        {/* =========================
            GRAFIK KATEGORI
        ========================= */}

        <CategoryChart
          dataKategori={dataKategori}
          nilaiMaksimal={nilaiMaksimal}
        />

        {/* =========================
            RINGKASAN
        ========================= */}

        <DashboardSummary
        totalProyek={totalProyek ?? 0}
        totalFeatured={totalFeatured ?? 0}
        jumlahKategori={jumlahKategori}
        />

      </div>

      {/* =========================
          PROYEK TERBARU
      ========================= */}

      <RecentProjects
        proyekTerbaru={proyekTerbaru}
      />

    </div>
  );
}