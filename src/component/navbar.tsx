"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["home", "skills", "about", "projects", "contact"];

  // ================================
  // DETEKSI SECTION SAAT SCROLL
  // ================================
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      let currentSection = "home";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) return;

        const sectionTop = section.offsetTop;

        if (scrollPosition >= sectionTop) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ================================
  // SMOOTH SCROLL
  // ================================
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    setActiveSection(sectionId);
    setMenuOpen(false);

    const navbarHeight = 80;

    const position =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  // ================================
  // MENU STYLE
  // ================================
  const menuClass = (section: string) => {
    return activeSection === section
      ? "relative pb-2 font-semibold text-blue-600 transition-colors"
      : "relative pb-2 font-semibold text-gray-500 transition-colors hover:text-blue-600";
  };

  // ================================
  // UNDERLINE
  // ================================
  const ActiveLine = ({
    section,
  }: {
    section: string;
  }) => {
    if (activeSection !== section) return null;

    return (
      <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600" />
    );
  };

  return (
    <header className="fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between border-b border-gray-200/50 bg-white/90 px-5 backdrop-blur-md sm:px-8 md:h-24 md:px-10 dark:border-gray-800/50 dark:bg-[#080b12]/90">

      {/* ================================
          LOGO
      ================================= */}
      <button
        type="button"
        onClick={() => scrollToSection("home")}
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-base font-black text-white shadow-lg shadow-blue-200 transition-transform hover:scale-105 sm:h-12 sm:w-12 sm:text-lg md:h-14 md:w-14 md:text-xl dark:shadow-blue-900/30"
      >
        RIS
      </button>


      {/* ================================
          DESKTOP MENU
      ================================= */}
      <nav className="hidden items-center gap-7 md:flex lg:gap-12">

        {/* HOME */}
        <button
          type="button"
          className={menuClass("home")}
          onClick={() => scrollToSection("home")}
        >
          Home
          <ActiveLine section="home" />
        </button>

        {/* SKILLS */}
        <button
          type="button"
          className={menuClass("skills")}
          onClick={() => scrollToSection("skills")}
        >
          Skills
          <ActiveLine section="skills" />
        </button>

        {/* ABOUT */}
        <button
          type="button"
          className={menuClass("about")}
          onClick={() => scrollToSection("about")}
        >
          About
          <ActiveLine section="about" />
        </button>

        {/* PROJECTS */}
        <button
          type="button"
          className={menuClass("projects")}
          onClick={() => scrollToSection("projects")}
        >
          Projects
          <ActiveLine section="projects" />
        </button>

        {/* CONTACT */}
        <button
          type="button"
          className={menuClass("contact")}
          onClick={() => scrollToSection("contact")}
        >
          Contact
          <ActiveLine section="contact" />
        </button>

      </nav>


      {/* ================================
          RIGHT DESKTOP
      ================================= */}
      <div className="hidden items-center gap-4 md:flex">

        <ThemeToggle />

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=riskaaoktafiani@gmail.com"
          className="flex h-11 items-center gap-3 rounded-full bg-[#17181b] px-6 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-600 hover:shadow-blue-200 lg:h-12 lg:gap-4 lg:px-7 lg:text-base dark:bg-white dark:text-gray-900 dark:hover:bg-blue-600 dark:hover:text-white"
        >
          Let's Talk
          <span className="text-xl">↗</span>
        </a>

      </div>


      {/* ================================
          MOBILE RIGHT
      ================================= */}
      <div className="flex items-center gap-3 md:hidden">

        <ThemeToggle />

        {/* HAMBURGER */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition hover:border-blue-400 hover:text-blue-600 dark:border-gray-700 dark:bg-[#111827] dark:text-white"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-5 bg-current transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>

      </div>


      {/* ================================
          MOBILE MENU
      ================================= */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-20 border-b border-gray-200 bg-white px-5 py-5 shadow-lg md:hidden dark:border-gray-800 dark:bg-[#080b12]">

          <nav className="flex flex-col gap-2">

            {/* HOME */}
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className={`rounded-lg px-4 py-3 text-left font-semibold transition ${
                activeSection === "home"
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
            >
              Home
            </button>

            {/* SKILLS */}
            <button
              type="button"
              onClick={() => scrollToSection("skills")}
              className={`rounded-lg px-4 py-3 text-left font-semibold transition ${
                activeSection === "skills"
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
            >
              Skills
            </button>

            {/* ABOUT */}
            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className={`rounded-lg px-4 py-3 text-left font-semibold transition ${
                activeSection === "about"
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
            >
              About
            </button>

            {/* PROJECTS */}
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className={`rounded-lg px-4 py-3 text-left font-semibold transition ${
                activeSection === "projects"
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
            >
              Projects
            </button>

            {/* CONTACT */}
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className={`rounded-lg px-4 py-3 text-left font-semibold transition ${
                activeSection === "contact"
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
            >
              Contact
            </button>

            {/* LET'S TALK */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=riskaaoktafiani@gmail.com"
              className="mt-2 flex h-11 items-center justify-center gap-3 rounded-full bg-[#17181b] px-6 text-sm font-semibold text-white transition hover:bg-blue-600 dark:bg-white dark:text-gray-900"
            >
              Let's Talk
              <span className="text-xl">↗</span>
            </a>

          </nav>

        </div>
      )}

    </header>
  );
}