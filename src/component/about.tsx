"use client";

import CounterApresiasi from "./CounterApresiasi";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full px-5 py-20 sm:px-8 sm:py-24 md:px-12 md:py-32 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">

        {/* KIRI */}
        <div>
          {/* LABEL */}
          <div className="mb-8 flex items-center gap-3 sm:mb-10 md:mb-12">
            <span className="h-0.5 w-8 bg-blue-600 sm:w-10 md:w-12"></span>

            <span className="text-sm font-bold tracking-widest text-blue-600 sm:text-base">
              ABOUT ME
            </span>
          </div>

          {/* JUDUL */}
          <h2 className="max-w-lg text-4xl font-black leading-tight sm:text-5xl md:text-5xl lg:text-6xl">
            LEARN,
            <br />
            CREATE,
            <br />
            AND GROW
            <br />
            WITH{" "}
            <span className="text-blue-400">
              CODE and AI.
            </span>
          </h2>
        </div>

        {/* KANAN */}
        <div className="max-w-4xl">

          {/* DESKRIPSI SINGKAT */}
          <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-300 sm:text-xl md:text-2xl">
            I am a{" "}
            <strong className="text-gray-900 dark:text-white">
              student at SMKN 1 Pasuruan majoring in Software Engineering
            </strong>{" "}
            who is currently learning and exploring the world of programming.
            I am interested in web development and enjoy learning about new
            technologies.
          </p>

          <p className="mt-6 text-base leading-relaxed text-gray-500 dark:text-gray-300 sm:mt-8 sm:text-lg md:text-xl">
            I am continuously developing my skills through practice and
            personal projects, while exploring different technologies and
            improving my understanding of software development.
          </p>

          {/* BUTTON */}
          <div className="mt-8">
            <a
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Selengkapnya Tentang Saya
              <span>→</span>
            </a>
          </div>

          {/* INTERAKTIVITAS APRESIASI */}
          <div className="mt-8 sm:mt-10">
            <CounterApresiasi />
          </div>

        </div>
      </div>
    </section>
  );
}

          