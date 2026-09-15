export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#dce9f1] px-5 py-8 dark:border-gray-800 dark:bg-[#090d14] md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-xs font-black text-white shadow-md sm:h-10 sm:w-10 sm:text-sm">
            RIS
          </div>

          <p className="text-xs text-gray-500 sm:text-sm dark:text-gray-400">
            © 2026 Portofolio Riska Oktafiani
          </p>
        </div>

        {/* NAVIGATION */}
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-gray-600 sm:gap-6 sm:text-sm dark:text-gray-300">
          <a
            href="#home"
            className="transition hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </a>

          <a
            href="#skills"
            className="transition hover:text-blue-600 dark:hover:text-blue-400"
          >
            Skills
          </a>

          <a
            href="#about"
            className="transition hover:text-blue-600 dark:hover:text-blue-400"
          >
            About
          </a>

          <a
            href="#projects"
            className="transition hover:text-blue-600 dark:hover:text-blue-400"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="transition hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contact
          </a>
        </nav>

        {/* BACK TO TOP */}
        <a
          href="#home"
          className="flex items-center gap-2 text-xs font-semibold text-blue-600 transition hover:text-blue-700 sm:text-sm dark:text-blue-400 dark:hover:text-blue-300"
        >
          Back to top
          <span className="text-lg">↑</span>
        </a>

      </div>
    </footer>
  );
}