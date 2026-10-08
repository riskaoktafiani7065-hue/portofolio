
"use client";

import Image from "next/image";
import { useState } from "react";
import { FaTelegram } from "react-icons/fa";

const photos = [
  {
    src: "/fotokuu.jpeg",
    alt: "Foto profil Riskaa",
    label: "MY PROFILE",
  },
  {
    src: "/fotoku2.jpeg",
    alt: "Foto Riskaa kedua",
    label: "ANOTHER MOMENT",
  },
  {
    src: "/fotoku3.jpeg",
    alt: "Foto Riskaa ketiga",
    label: "MY JOURNEY",
  },
];

export default function Hero() {
  const [activePhoto, setActivePhoto] = useState(0);
  const currentPhoto = photos[activePhoto];

  function handlePhotoClick() {
    setActivePhoto((current) => (current + 1) % photos.length);
  }

  function handlePhotoKeyDown(
    event: React.KeyboardEvent<HTMLDivElement>
  ) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handlePhotoClick();
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-0 scroll-mt-24 overflow-hidden px-5 py-20 sm:px-8 sm:py-24 md:min-h-screen md:px-12 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="relative z-10 min-w-0">
          {/* SOCIAL ICONS */}
          <div className="absolute -left-1 top-52 z-20 hidden flex-col items-center gap-6 sm:flex md:top-60 lg:top-62.5">
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

            <a
              href="https://t.me/yxrizs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="text-gray-400 transition hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400"
            >
              <FaTelegram size={24} />
            </a>

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

          {/* TEXT */}
          <div className="ml-0 sm:ml-12">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="h-0.5 w-8 bg-blue-600 sm:w-12" />

              <p className="text-base font-medium text-gray-500 sm:text-xl dark:text-gray-300">
                Hi, I&apos;m{" "}
                <span className="font-bold text-blue-400 dark:text-white">
                  Riskaa Oktafiani.
                </span>
              </p>
            </div>

            <h1 className="mt-8 text-4xl font-black uppercase leading-[0.9] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:mt-10 lg:text-[76px] dark:text-white">
              <span className="block">FULL STACK</span>
              <span className="block text-blue-400 dark:text-gray-400">
                WEB DEVELOPER
              </span>
            </h1>

            <div className="mt-8 sm:mt-10 lg:mt-12">
              <p className="max-w-3xl border-l-2 border-blue-300 pl-4 text-base leading-7 text-gray-600 sm:pl-6 sm:text-xl sm:leading-8 md:pl-8 md:text-2xl md:leading-9 dark:border-blue-500 dark:text-gray-300">
                Software Engineering student who is still learning and
                exploring the world of coding. I&apos;m interested in web
                development, exploring new technologies, and continuously
                improving my coding skills.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
              <a
                href="#projects"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700 sm:px-8 sm:py-4 sm:text-base"
              >
                View Work →
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=riskaaoktafiani@gmail.com"
                className="rounded-full border-2 border-blue-200 bg-transparent px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 sm:px-8 sm:py-4 sm:text-base dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950"
              >
                Contact ↗
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: CLICKABLE PHOTO */}
        <div className="relative z-10 flex min-w-0 items-center justify-center py-5 sm:py-8">
          {/* BLUE BACKLIGHT */}
          <div className="pointer-events-none absolute h-80 w-64 rounded-full bg-cyan-400/30 blur-3xl sm:h-96 sm:w-80 lg:h-135 lg:w-110" />

          {/* OUTER NEON FRAME */}
          <div className="photo-carousel-float relative w-full max-w-110">
            <div className="absolute -inset-0.75 rounded-4xl bg-linear-to-br from-cyan-300 via-blue-500 to-sky-200 opacity-90 blur-[2px]" />

            <div className="relative rounded-[30px] border border-cyan-200/80 bg-linear-to-br from-sky-300 via-blue-500 to-cyan-200 p-1.25 shadow-[0_0_30px_rgba(56,189,248,0.55),0_0_75px_rgba(37,99,235,0.3)]">
              {/* PHOTO: CLICK TO CHANGE */}
              <div
                onClick={handlePhotoClick}
                onKeyDown={handlePhotoKeyDown}
                role="button"
                tabIndex={0}
                aria-label="Klik untuk melihat foto berikutnya"
                className="relative h-97.5 w-full cursor-pointer overflow-hidden rounded-[25px] bg-slate-900 outline-none focus-visible:ring-4 focus-visible:ring-cyan-300 sm:h-127.5 lg:h-137.5"
              >
                <Image
                  key={currentPhoto.src}
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 60vw, 440px"
                  priority={activePhoto === 0}
                  className="carousel-photo-image object-cover"
                />

                {/* DARK GRADIENT */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/65 via-transparent to-slate-950/10" />

                {/* PHOTO LABEL */}
                <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/40 bg-blue-950/35 px-4 py-2 text-[10px] font-bold tracking-[0.22em] text-white shadow-lg backdrop-blur-md sm:left-6 sm:top-6">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]" />
                  {currentPhoto.label}
                </div>

                {/* BOTTOM PHOTO INFO */}
                <div className="pointer-events-none absolute bottom-4 left-4 right-4 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-2xl backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
                  <p className="text-xs font-semibold tracking-widest text-slate-400">
                    BASED IN
                  </p>

                  <div className="mt-1 flex items-center justify-between gap-3">
                    <p className="text-lg font-extrabold text-slate-900 sm:text-xl">
                      Pasuruan, Indonesia
                    </p>
                    <span className="text-2xl text-blue-600">↗</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING AI DECORATION */}
            <div className="pointer-events-none absolute -right-3 top-12 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/70 bg-blue-500/80 text-xl font-black text-white shadow-[0_0_25px_rgba(56,189,248,0.7)] backdrop-blur-md sm:-right-5 sm:h-16 sm:w-16">
              AI
            </div>

            <div className="pointer-events-none absolute -bottom-4 -left-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/90 text-2xl font-bold text-blue-600 shadow-[0_0_25px_rgba(56,189,248,0.5)] sm:-left-5 sm:h-14 sm:w-14">
              +
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
