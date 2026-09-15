"use client";

import {
  FaInstagram,
  FaTelegramPlane,
  FaYoutube
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const contacts = [
  {
    name: "Instagram",
    description: "See the latest work and activities.",
    href: "https://www.instagram.com/xyriss.13?utm_source=qr&stkn=MWpxZXA0bmdzeDY1OA==",
    icon: <FaInstagram />,
  },
  {
    name: "Email",
    description: "Send a message via email.",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=riskaaoktafiani@gmail.com",
    icon: <MdEmail />,
  },
  {
    name: "Telegram",
    description: "Chat directly via Telegram.",
    href: "https://t.me/yxrizs",
    icon: <FaTelegramPlane />,
  },
  {
    name: "YouTube",
    description: "Watch my videos and projects.",
    href: "https://youtube.com/@xyriss13?si=XHdKKQV9zd4vEWJ-",
    icon: <FaYoutube />,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f4f8fc] px-5 py-16 dark:bg-[#090d14] md:px-12 md:py-20 lg:px-16"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -right-10 -top-20 h-40 w-40 rounded-full bg-blue-100/70 sm:h-52 sm:w-52 dark:bg-blue-500/10" />

      <div className="pointer-events-none absolute -bottom-24 -left-16 h-44 w-44 rounded-full bg-blue-100/50 sm:h-56 sm:w-56 dark:bg-blue-500/10" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-12">

        {/* LEFT CONTENT */}
        <div>
          {/* SMALL TITLE */}
          <div className="mb-5 flex items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500 sm:text-sm">
              Say Hello
            </p>

            <span className="h-0.5 w-6 bg-blue-500 sm:w-8" />
          </div>

          {/* MAIN TITLE */}
          <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-[#0f172a] sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
            Have an idea?
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-md text-sm leading-6 text-gray-500 sm:text-base sm:leading-7 dark:text-gray-400">
            I'm always open to discussing new projects, creative ideas,
            or opportunities.
          </p>

          {/* LET'S CONNECT */}
          <div className="mt-7 flex items-center gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-500 sm:text-xs">
              Let's Connect
            </span>

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-sm text-white">
              →
            </span>
          </div>
        </div>

        {/* RIGHT CONTACT CARDS */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-32.5 items-center justify-between rounded-2xl border border-white bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100 sm:min-h-35 sm:p-5 dark:border-gray-800 dark:bg-[#111827] dark:hover:shadow-blue-950/30"
            >
              {/* ICON + TEXT */}
              <div className="flex min-w-0 items-start gap-3 sm:gap-4">

                {/* ICON */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg text-blue-500 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white sm:h-11 sm:w-11 sm:text-xl dark:bg-blue-500/10 dark:text-blue-400 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
                  {contact.icon}
                </div>

                {/* TEXT */}
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-[#101828] sm:text-base dark:text-white">
                    {contact.name}
                  </h3>

                  <p className="mt-1 max-w-37.5 text-[11px] leading-5 text-gray-400 sm:mt-2 sm:text-xs dark:text-gray-500">
                    {contact.description}
                  </p>
                </div>
              </div>

              {/* ARROW */}
              <span className="ml-2 shrink-0 text-lg text-blue-500 transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}