import Image from "next/image";
import Link from "next/link";
import CounterApresiasi from "@/component/CounterApresiasi";
import Footer from "@/component/Footer";

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen px-5 py-24 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">

          {/* ================= HEADER ================= */}
          <section className="mb-16 md:mb-20">
            <div className="grid items-center gap-10 md:grid-cols-[1fr_0.9fr]">

              {/* TEXT */}
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-0.5 w-10 bg-blue-600 sm:w-12" />

                  <span className="text-sm font-bold tracking-[0.2em] text-blue-600">
                    ABOUT ME
                  </span>
                </div>

                <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
                  More About
                  <br />
                  <span className="text-blue-600">Me.</span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
                  Get to know more about my learning journey, interests, and
                  experiences as I continue exploring the world of technology.
                </p>
              </div>

              {/* IMAGE */}
              <div className="relative mx-auto h-64 w-full max-w-xl md:h-80">
                <Image
                  src="/about_illustration.png"
                  alt="Learning web development illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

            </div>
          </section>

          {/* ================= INTRODUCTION ================= */}
          <section className="mb-14">
            <div className="rounded-3xl border border-blue-100 bg-white/80 p-7 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-[#111217]/90 sm:p-9">

              <div className="mb-6 flex items-center gap-3">
                <span className="h-0.5 w-8 bg-blue-600" />

                <span className="text-sm font-bold tracking-[0.15em] text-blue-600">
                  INTRODUCTION
                </span>
              </div>

              <div className="max-w-5xl space-y-5 text-base leading-relaxed text-gray-500 dark:text-gray-300 sm:text-lg">

                <p>
                  I am a{" "}
                  <strong className="text-gray-900 dark:text-white">
                    Software Engineering student at SMKN 1 Pasuruan
                  </strong>{" "}
                  who is currently learning and exploring the world of
                  programming. I am interested in web development and enjoy
                  learning about new technologies.
                </p>

                <p>
                  I am continuously developing my skills through practice and
                  personal projects. I believe that every project is an
                  opportunity to learn, improve, and grow.
                </p>

                <p>
                  My current focus is on{" "}
                  <strong className="text-gray-900 dark:text-white">
                    web development
                  </strong>
                  , programming fundamentals, and exploring modern
                  technologies as I continue my journey in software engineering.
                </p>

              </div>
            </div>
          </section>

          {/* ================= HOBBIES ================= */}
          <section className="mb-14">

            <div className="mb-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-0.5 w-8 bg-blue-600" />

                <span className="text-sm font-bold tracking-[0.15em] text-blue-600">
                  HOBBIES & ACTIVITIES
                </span>
              </div>

              <h2 className="text-3xl font-black text-gray-900 dark:text-white sm:text-4xl">
                Things I Enjoy.
              </h2>

              <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Outside of programming, I enjoy spending my free time doing
                simple activities that help me relax and stay inspired.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {/* MUSIC */}
              <div className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-[#111217]/90">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl dark:bg-blue-950/50">
                  🎧
                </div>

                <h3 className="font-bold text-gray-900 dark:text-white">
                  Listening to Music
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  Listening to music helps me relax and is one of my companions while studying. Music makes me feel more comfortable and focused when I am doing something.
                </p>
              </div>

              {/* MOVIES */}
              <div className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-[#111217]/90">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl dark:bg-blue-950/50">
                  🎬
                </div>

                <h3 className="font-bold text-gray-900 dark:text-white">
                  Watching Movies
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  I like watching Korean dramas, and sometimes I also watch anime. Watching Korean dramas is one of my favorite ways to spend my free time.
                </p>
              </div>

              {/* READING */}
              <div className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-[#111217]/90">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl dark:bg-blue-950/50">
                  📖
                </div>

                <h3 className="font-bold text-gray-900 dark:text-white">
                  Reading
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  I like reading AU (Alternate Universe) because the stories are interesting and entertaining. Reading AU is also one of the ways I enjoy spending my free time.
                </p>
              </div>

              {/* PHOTOGRAPHY */}
              <div className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-[#111217]/90">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl dark:bg-blue-950/50">
                  📸
                </div>

                <h3 className="font-bold text-gray-900 dark:text-white">
                  Photography
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  I like taking pictures of food because I enjoy capturing food in an attractive way. Taking pictures of food is also something I enjoy when I am eating or trying new food.
                </p>
              </div>

            </div>
          </section>

          {/* ================= QUOTE ================= */}
          <section className="mb-14">
            <div className="rounded-3xl border border-blue-200 bg-blue-50/60 p-7 dark:border-blue-900 dark:bg-blue-950/20 sm:p-9">

              <div className="flex items-start gap-5">
                <span className="text-5xl font-black leading-none text-blue-600">
                  “
                </span>

                <div>
                  <p className="max-w-4xl text-lg font-medium leading-relaxed text-blue-900 dark:text-blue-200 sm:text-xl">
                    Every project is an opportunity to learn, improve, and
                    become a better version of myself.
                  </p>

                  <p className="mt-4 text-sm font-semibold text-blue-600">
                    Keep Learning. Keep Growing.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* ================= APPRECIATION ================= */}
          <section className="mb-8">
            <CounterApresiasi />
          </section>

          {/* ================= BACK ================= */}
          <div className="mb-16">
            <Link
              href="/#about"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 dark:border-blue-900 dark:bg-[#111217] dark:text-blue-400"
            >
              ← Back to About
            </Link>
          </div>

        </div>
      </main>

      
      {/* ABOUT FOOTER */}
        <footer className="border-t border-blue-100 bg-white/70 dark:border-gray-800 dark:bg-[#090d14]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:px-12 lg:px-16">

            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            {/* BRAND */}
            <div>
                <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500 text-lg font-black text-white shadow-lg shadow-blue-500/20">
                    RIS
                </div>

                <div>
                    <h2 className="text-lg font-black text-gray-900 dark:text-white">
                    My Portfolio
                    </h2>

                    <p className="text-sm text-gray-400">
                    Learning, creating, and growing.
                    </p>
                </div>
                </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex flex-wrap items-center gap-3">

                <a
                href="https://www.instagram.com/xyriss.13?utm_source=qr&stkn=MWpxZXA0bmdzeDY1OA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-white text-sm font-bold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/20 dark:border-gray-800 dark:bg-[#111217] dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white"
                >
                IG
                </a>

                <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=riskaaoktafiani@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-white text-sm font-bold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/20 dark:border-gray-800 dark:bg-[#111217] dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white"
                >
                @
                </a>

                <a
                href="https://t.me/yxrizs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-white text-sm font-bold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/20 dark:border-gray-800 dark:bg-[#111217] dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white"
                >
                TG
                </a>

                <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-white text-sm font-bold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/20 dark:border-gray-800 dark:bg-[#111217] dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white"
                >
                YT
                </a>

            </div>
            </div>

            {/* BOTTOM */}
            <div className="mt-0.5 flex flex-col gap-3 border-t border-blue-100 pt-6 text-xs text-gray-400 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between">

            <p>
                © {new Date().getFullYear()} RIS. All rights reserved.
            </p>

            <p>
                Built with Next.js & Tailwind CSS.
            </p>

            </div>
        </div>
        </footer>
    </>
  );
}