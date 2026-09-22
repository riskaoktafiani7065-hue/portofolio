import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Ambil semua proyek dari Supabase
  const { data: projects, error } = await supabase
    .from("proyek")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    return (
      <main className="min-h-screen bg-[#f4f8fc] px-6 py-16 dark:bg-[#090d14] md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-600">
            <h1 className="text-xl font-bold">
              Gagal memuat data proyek
            </h1>

            <p className="mt-2">
              {error.message}
            </p>
          </div>
        </div>
      </main>
    );
  }

  // Cari proyek berdasarkan slug dari judul
  const project = (projects as Project[] | null)?.find(
    (item) => slugify(item.judul) === id
  );

  // Kalau proyek tidak ditemukan
  if (!project) {
    notFound();
  }

  // Teknologi dari Supabase
  const technologies =
    project.teknologi
      ?.split(",")
      .map((item) => item.trim())
      .filter(Boolean) ?? [];

  return (
    <main className="min-h-screen bg-[#f4f8fc] px-6 py-16 dark:bg-[#090d14] md:px-12 lg:px-20">

      <div className="mx-auto max-w-6xl">

        {/* BACK TO PROJECTS */}
        <Link
          href="/proyek"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
        >
          ← Back to Projects
        </Link>

        {/* HEADER */}
        <div className="mb-10">

          {/* CATEGORY + FEATURED */}
          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
              {project.category || "Project"}
            </span>

            {project.featured && (
              <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                ⭐ Featured
              </span>
            )}

          </div>

          {/* TITLE */}
          <h1 className="mt-5 text-5xl font-black text-gray-900 dark:text-white md:text-6xl">
            {project.judul}
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-500 dark:text-gray-400">
            {project.deskripsi}
          </p>

        </div>

        {/* PROJECT IMAGE */}
        <div className="relative h-80 overflow-hidden rounded-3xl bg-white shadow-lg dark:bg-[#111217] md:h-125">

          {project.image?.trim() ? (
            <Image
              src={project.image}
              alt={project.judul}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-gray-400">
              No Image Available
            </div>
          )}

        </div>

        {/* PROJECT INFORMATION */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {/* ABOUT PROJECT */}
          <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-[#111217]">

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              About Project
            </h2>

            <p className="mt-3 leading-7 text-gray-500 dark:text-gray-400">
              {project.deskripsi}
            </p>

          </div>

          {/* TECHNOLOGIES */}
          <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-[#111217]">

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Technologies
            </h2>

            {technologies.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">

                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {technology}
                  </span>
                ))}

              </div>
            ) : (
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                No technologies listed.
              </p>
            )}

          </div>

        </div>

        {/* PROJECT LINK */}
        {project.link?.trim() && (
          <div className="mt-10">

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              View Project
              <span>↗</span>
            </a>

          </div>
        )}

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">

          {/* BACK TO HOME */}
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600 dark:border-gray-700 dark:bg-[#111217] dark:text-gray-300 dark:hover:border-blue-700 dark:hover:text-blue-400"
          >
            Back to Home
          </Link>

        </div>

      </div>

    </main>
  );
}