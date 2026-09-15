import Image from "next/image";
import { FaTelegram } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-0 overflow-hidden scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 md:min-h-screen md:px-12 lg:px-16"
    >

      {/* ================= HERO GRID ================= */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">

        {/* ================= LEFT CONTENT ================= */}
        <div className="relative">

          {/* SOCIAL ICON */}
          <div className="absolute -left-1 top-52 z-20 hidden flex-col items-center gap-6 sm:flex md:top-60 lg:top-62.5">

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com/xyriss.13"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 transition hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            {/* TELEGRAM */}
            <a
              href="https://t.me/yxrizs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="text-gray-400 transition hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400"
            >
              <FaTelegram size={24} />
            </a>

            {/* EMAIL */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=riskaaoktafiani@gmail.com"
              aria-label="Email"
              className="text-gray-400 transition hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m3 6 9 7 9-7" />
              </svg>
            </a>

          </div>


          {/* TEXT AREA */}
          <div className="ml-0 sm:ml-12">

            {/* GREETING */}
            <div className="flex items-center gap-3 sm:gap-4">

              <span className="h-0.5 w-8 bg-blue-600 sm:w-12"></span>

              <p className="text-base font-medium text-gray-500 sm:text-xl dark:text-gray-300">
                Hi, I&apos;m{" "}
                <span className="font-bold text-blue-400 dark:text-white">
                  Riskaa Oktafiani.
                </span>
              </p>

            </div>


            {/* TITLE */}
            <h1 className="mt-8 text-4xl font-black uppercase leading-[0.9] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:mt-10 lg:text-[76px] dark:text-white">

              <span className="block">
                FULL STACK
              </span>

              <span className="block text-blue-400 dark:text-gray-400">
                WEB DEVELOPER
              </span>

            </h1>


            {/* DESCRIPTION */}
            <div className="mt-8 sm:mt-10 lg:mt-12">

              <p className="max-w-3xl border-l-2 border-blue-300 pl-4 text-base leading-7 text-gray-600 sm:pl-6 sm:text-xl sm:leading-8 md:pl-8 md:text-2xl md:leading-9 dark:border-blue-500 dark:text-gray-300">

                Software Engineering student who is still learning and
                exploring the world of coding. I&apos;m interested in web
                development, exploring new technologies, and continuously
                improving my coding skills.

              </p>

            </div>


            {/* BUTTON */}
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">

              {/* VIEW WORK */}
              <a
                href="#projects"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700 sm:px-8 sm:py-4 sm:text-base"
              >
                View Work →
              </a>


              {/* CONTACT */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=riskaaoktafiani@gmail.com"
                className="rounded-full border-2 border-blue-200 bg-transparent px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 sm:px-8 sm:py-4 sm:text-base dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950"
              >
                Contact ↗
              </a>

            </div>

          </div>

        </div>


        {/* ================= RIGHT PHOTO ================= */}
        <div className="relative flex items-center justify-center">

          {/* BLUE GLOW */}
          <div className="absolute h-80 w-64 rounded-full bg-blue-500/20 blur-3xl sm:h-96 sm:w-80 lg:h-125 lg:w-112.5"></div>

          {/* PHOTO CARD */}
          <div className="relative rotate-2 rounded-3xl bg-[#17181b] p-2.5 shadow-2xl sm:rounded-[28px] sm:p-3">

            {/* PHOTO */}
            <div className="relative h-95 w-71.25 overflow-hidden rounded-[20px] sm:h-125 sm:w-97.5 sm:rounded-[22px] lg:h-135 lg:w-105">

              <Image
                src="/fotokuu.jpeg"
                alt="Foto profil Riskaa Oktafiani"
                fill
                priority
                className="object-cover"
              />

            </div>

            {/* LOCATION CARD */}
            <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white p-4 shadow-xl sm:bottom-7 sm:left-7 sm:right-7 sm:p-5">

              <p className="text-xs font-semibold text-gray-400 sm:text-sm">
                BASED IN
              </p>

              <div className="mt-1 flex items-center justify-between gap-2">

                <p className="text-sm font-bold text-gray-900 sm:text-xl">
                  Pasuruan, Indonesia
                </p>

                <span className="text-xl text-blue-600 sm:text-2xl">
                  ↗
                </span>

              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}