import type { MetadataRoute } from "next";
import { supabase } from "@/../lib/supabase";

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: projects } = await supabase
    .from("proyek")
    .select("judul, created_at")
    .order("id", { ascending: true });

  const baseUrl = "https://riska-oktafiani.my.id";

  const projectUrls =
    projects?.map((project) => ({
      url: `${baseUrl}/proyek/${slugify(project.judul)}`,
      lastModified: project.created_at
        ? new Date(project.created_at)
        : new Date(),
    })) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/proyek`,
      lastModified: new Date(),
    },
    ...projectUrls,
  ];
}