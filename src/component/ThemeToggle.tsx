"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;

    setDark(newDark);

    if (newDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className=" relative flex h-12 w-32 items-center rounded-full border border-blue-100 bg-blue-100 p-1 shadow-sm transition-all duration-300 dark:border-blue-900 dark:bg-blue-950"
    >
      {/* ICON MATAHARI */}
      <div
        className={`absolute flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 shadow-md transition-all duration-300 ${dark ? "translate-x-20" : "translate-x-0"}`}
      >
        {dark ? (
          <span className="text-xl">☾</span>
        ) : (
          <span className="text-xl">☼</span>
        )}
      </div>

      {/* ICON DI BELAKANG */}
      <div className="flex w-full items-center justify-between px-2 text-lg">
        <span
          className={`transition-colors ${
            dark ? "text-blue-400" : "text-blue-600"
          }`}
        >
          ☼
        </span>

        <span className="text-blue-600 dark:text-blue-400">
          ☾
        </span>
      </div>
    </button>
  );
}