export interface Proyek {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  featured: boolean;
}

export const proyek: Proyek[] = [
  {
    id: "my-app",
    title: "My App",
    category: "Web Development",
    description:
      "My App is a practice project created to explore modern web development using Next.js, Supabase, authentication, and databases.",
    image: "/My App.png",
    tech: ["Next.js", "JavaScript", "Supabase"],
    featured: true,
  },

  {
    id: "jadwal-saya",
    title: "Jadwal Saya",
    category: "UI/UX",
    description:
      "Design a schedule management application to help users organize their activities and manage their time more systematically.",
    image: "/logo jadwal.png",
    tech: ["Figma"],
    featured: true,
  },

  {
    id: "management-siswa",
    title: "Management Siswa",
    category: "Web Development",
    description:
      "A web application for managing student data using Next.js and Supabase.",
    image: "/management siswa.png",
    tech: ["Next.js", "JavaScript", "Supabase"],
    featured: true,
  },
];