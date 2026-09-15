"use client";

import { useState } from "react";
import { proyek } from "../data/proyek";
import CardProyek from "./CardProyek";

export default function Project() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProjects = proyek.filter((project) => {
    const matchSearch = project.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All"
        ? true
        : category === "Featured"
          ? project.featured
          : project.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <section
      id="project"
      className="relative min-h-screen overflow-hidden scroll-mt-24 px-8 py-5 md:px-12 lg:px-16"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-1/4 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-5 flex items-center gap-4">
          <span className="h-0.5 w-16 bg-blue-600" />

          <span className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600">
            My Projects
          </span>
        </div>

        <h2 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-gray-900 dark:text-white md:text-6xl">
          Some of My
          <br />
          <span className="text-blue-600">Recent Projects.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-500 dark:text-gray-400">
          Here are some projects I&apos;ve worked on while learning and
          exploring web development, UI/UX design, and modern technologies.
        </p>

        {/* SEARCH & FILTER */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* SEARCH INPUT */}
          <div className="relative w-full md:max-w-md">
            <input
              type="text"
              placeholder="Search project title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-5 py-3 pr-12 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-800 dark:bg-[#111217] dark:text-white"
            />

            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap gap-2">
            {["All", "Web Development", "UI/UX", "Featured"].map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  category === item
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-blue-950/50 dark:hover:text-blue-400"
                }`}
              >
                {item === "Featured" ? "⭐ Featured" : item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* TOTAL / RESULT */}
      <div className="relative mx-auto mt-5 flex max-w-7xl items-center">
        <div className="ml-auto flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <span>Showing</span>

          <span className="font-bold text-blue-600">
            {filteredProjects.length}
          </span>

          <span>Projects</span>
        </div>
      </div>

      {/* PROJECT CARDS */}
      <div className="relative mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <CardProyek
            key={project.id}
            id={project.id}
            title={project.title}
            category={project.category}
            description={project.description}
            image={project.image}
            tech={project.tech}
            featured={project.featured}
          />
        ))}
      </div>

      {/* EMPTY RESULT */}
      {filteredProjects.length === 0 && (
        <div className="relative mx-auto mt-12 max-w-7xl rounded-2xl border border-dashed border-gray-300 py-16 text-center dark:border-gray-700">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Project not found.
          </p>

          <p className="mt-2 text-sm text-gray-400">
            Try using other keywords or categories.
          </p>
        </div>
      )}
    </section>
  );
}