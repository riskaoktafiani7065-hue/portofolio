"use client";

import Image from "next/image";
import Link from "next/link";

export default function MyAppProject() {
  return (
    <main className="min-h-screen bg-[#f4f8fc] px-6 py-16 dark:bg-[#090d14] md:px-12 lg:px-20">

      <div className="mx-auto max-w-6xl">

        {/* BACK */}
        <Link
          href="/#project"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          ← Back to Projects
        </Link>

        {/* HEADER */}
        <div className="mb-10">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
            Web Development
          </span>

          <h1 className="mt-5 text-5xl font-black text-gray-900 dark:text-white md:text-6xl">
            My App
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-500 dark:text-gray-400">
            My App is a practice project created to explore modern web
            development using Next.js, Supabase, authentication, and databases.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-80 overflow-hidden rounded-3xl bg-white shadow-lg md:h-125 dark:bg-[#111217]">
          <Image
            src="/My App.png"
            alt="My App"
            fill
            className="object-cover"
          />
        </div>

        {/* INFORMATION */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-[#111217]">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              About Project
            </h2>

            <p className="mt-3 leading-7 text-gray-500 dark:text-gray-400">
              This project was created as a learning project to understand how
              a modern web application works, including authentication,
              database management, and responsive interfaces.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-[#111217]">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Technologies
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                Next.js
              </span>

              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                JavaScript
              </span>

              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                Supabase
              </span>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}