import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";

interface CardProyekProps {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  featured?: boolean;
}

export default function CardProyek({
  id,
  title,
  category,
  description,
  image,
  tech,
  featured = false,
}: CardProyekProps) {
  return (
    <Link href={`/proyek/${id}`} className="group block">
      <article className="overflow-hidden rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-[#111217]/90 dark:hover:border-blue-800">

        {/* IMAGE */}
        <div className="relative mb-5 h-48 overflow-hidden rounded-xl bg-blue-50 dark:bg-[#181a21]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-blue-600/0 transition group-hover:bg-blue-600/10" />

          {/* FEATURED BADGE */}
          {featured && (
            <div className="absolute left-3 top-3">
              <Badge text="⭐ Featured" />
            </div>
          )}
        </div>

        {/* CATEGORY BADGE */}
        <Badge text={category} />

        {/* TITLE */}
        <h3 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-2 min-h-18 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          {description}
        </p>

        {/* TECHNOLOGIES + ARROW */}
        <div className="mt-5 flex items-end justify-between gap-3">

          {/* TECHNOLOGIES */}
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>

          {/* ARROW */}
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-lg text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950/50 dark:text-blue-400">
            →
          </span>

        </div>
      </article>
    </Link>
  );
}