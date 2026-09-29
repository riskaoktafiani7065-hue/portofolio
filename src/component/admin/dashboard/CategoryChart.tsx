type CategoryItem = {
  nama: string;
  jumlah: number;
};

type CategoryChartProps = {
  dataKategori: CategoryItem[];
  nilaiMaksimal: number;
};

export default function CategoryChart({
  dataKategori,
  nilaiMaksimal,
}: CategoryChartProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">

      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-900">
          Proyek Berdasarkan Kategori
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Jumlah proyek pada setiap kategori.
        </p>
      </div>

      {dataKategori.length > 0 ? (
        <div className="space-y-6">

          {dataKategori.map((item) => {
            const tinggi = Math.max(
              (item.jumlah / nilaiMaksimal) * 100,
              8
            );

            return (
              <div key={item.nama}>

                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">
                    {item.nama}
                  </span>

                  <span className="text-sm font-semibold text-slate-900">
                    {item.jumlah}
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-blue-600 transition-all"
                    style={{
                      width: `${tinggi}%`,
                    }}
                  />
                </div>

              </div>
            );
          })}

        </div>
      ) : (
        <div className="flex min-h-48 items-center justify-center rounded-xl bg-slate-50">
          <p className="text-sm text-slate-400">
            Belum ada data kategori.
          </p>
        </div>
      )}

    </div>
  );
}
