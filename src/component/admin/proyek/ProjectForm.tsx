type ProjectFormProps = {
  tambahProyek: (formData: FormData) => void | Promise<void>;
};

export default function ProjectForm({
  tambahProyek,
}: ProjectFormProps) {
  return (
    <section className="mb-10 rounded-2xl bg-white p-6 shadow-sm">
      <h3 className="mb-6 text-xl font-bold text-blue-600">
        Tambah Proyek
      </h3>

      <form action={tambahProyek} className="space-y-5">

        {/* Judul */}
        <div>
          <label
            htmlFor="judul"
            className="mb-2 block font-medium text-slate-700"
          >
            Judul Proyek
          </label>

          <input
            id="judul"
            name="judul"
            type="text"
            placeholder="Contoh: My App"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Deskripsi */}
        <div>
          <label
            htmlFor="deskripsi"
            className="mb-2 block font-medium text-slate-700"
          >
            Deskripsi
          </label>

          <textarea
            id="deskripsi"
            name="deskripsi"
            rows={4}
            placeholder="Masukkan deskripsi proyek..."
            required
            className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Teknologi */}
        <div>
          <label
            htmlFor="teknologi"
            className="mb-2 block font-medium text-slate-700"
          >
            Teknologi
          </label>

          <input
            id="teknologi"
            name="teknologi"
            type="text"
            placeholder="Contoh: Next.js, Supabase, TypeScript"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Link */}
        <div>
          <label
            htmlFor="link"
            className="mb-2 block font-medium text-slate-700"
          >
            Link Proyek
          </label>

          <input
            id="link"
            name="link"
            type="url"
            placeholder="https://..."
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="mb-2 block font-medium text-slate-700"
          >
            Category
          </label>

          <input
            id="category"
            name="category"
            type="text"
            placeholder="Contoh: Web Development"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Image */}
        <div>
          <label
            htmlFor="image"
            className="mb-2 block font-medium text-slate-700"
          >
            Image URL
          </label>

          <input
            id="image"
            name="image"
            type="text"
            placeholder="Contoh: /project-web.png"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />

          <p className="mt-1 text-sm text-slate-400">
            Untuk sementara masukkan URL atau path gambar.
          </p>
        </div>

        {/* Featured */}
        <div className="flex items-center gap-3">
          <input
            id="featured"
            name="featured"
            type="checkbox"
            className="h-4 w-4 rounded border-slate-300"
          />

          <label
            htmlFor="featured"
            className="font-medium text-slate-700"
          >
            Jadikan proyek unggulan
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          + Tambah Proyek
        </button>

      </form>
    </section>
  );
}
