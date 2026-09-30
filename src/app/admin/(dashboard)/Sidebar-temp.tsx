"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type SidebarProps = {
  logout: () => void;
};

export default function Sidebar({ logout }: SidebarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isDashboard = pathname === "/admin/dashboard";
  const isProyek = pathname.startsWith("/admin/proyek");

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* =====================================================
          MOBILE HEADER
      ===================================================== */}
      <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between bg-blue-600 px-4 text-white shadow-md md:hidden">
        {/* LOGO + NAMA */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-extrabold text-blue-600">
            RIS
          </div>

          <div>
            <p className="text-sm font-bold leading-tight">
              Admin Panel
            </p>

            <p className="text-[11px] text-blue-100">
              Portfolio Riska
            </p>
          </div>
        </div>

        {/* HAMBURGER / CLOSE */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg transition hover:bg-blue-500"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            /* X ICON */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* HAMBURGER ICON */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={closeMenu}
        >
          {/* DRAWER */}
          <div
            className="mt-16 flex h-[calc(100vh-4rem)] w-[72%] flex-col bg-blue-600 p-4 text-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MENU UTAMA */}
            <nav>
              <p className="mb-3 px-3 pt-2 text-[11px] font-bold uppercase tracking-wider text-blue-200">
                Menu Utama
              </p>

              <div className="space-y-2">
                {/* DASHBOARD */}
                <Link
                  href="/admin/dashboard"
                  onClick={closeMenu}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                    isDashboard
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-blue-50 hover:bg-blue-500"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5 shrink-0"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="7"
                      height="7"
                      rx="1"
                    />
                    <rect
                      x="14"
                      y="3"
                      width="7"
                      height="7"
                      rx="1"
                    />
                    <rect
                      x="3"
                      y="14"
                      width="7"
                      height="7"
                      rx="1"
                    />
                    <rect
                      x="14"
                      y="14"
                      width="7"
                      height="7"
                      rx="1"
                    />
                  </svg>

                  <span>Dashboard</span>
                </Link>

                {/* KELOLA PROYEK */}
                <Link
                  href="/admin/proyek"
                  onClick={closeMenu}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                    isProyek
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-blue-50 hover:bg-blue-500"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>

                  <span>Kelola Proyek</span>
                </Link>
              </div>
            </nav>

            {/* =================================================
                BAGIAN BAWAH MOBILE
            ================================================= */}
            <div className="mt-auto border-t border-blue-500/60 pt-4">
              {/* ADMIN INFO */}
              <div className="mb-3 flex items-center gap-3 rounded-xl bg-blue-500/50 p-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-600">
                  R
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">
                    Admin
                  </p>

                  <p className="truncate text-xs text-blue-100">
                    Portfolio Riska
                  </p>
                </div>
              </div>

              {/* LOGOUT */}
              <form action={logout}>
                <button
                  type="submit"
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-blue-50 transition-all hover:bg-red-500 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 17l5-5-5-5"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12H9"
                    />
                  </svg>

                  <span>Logout</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          DESKTOP SIDEBAR
      ===================================================== */}
      <aside className="fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col bg-blue-600 text-white shadow-xl md:flex">
        {/* HEADER / LOGO */}
        <div className="border-b border-blue-500/60 px-5 py-6">
          <div className="flex items-center gap-3">
            {/* LOGO */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-lg font-extrabold text-blue-600 shadow-sm">
              RIS
            </div>

            {/* NAMA */}
            <div>
              <h1 className="text-lg font-bold leading-tight">
                Admin Panel
              </h1>

              <p className="mt-1 text-xs text-blue-100">
                Portfolio Riska
              </p>
            </div>
          </div>
        </div>

        {/* MENU */}
        <nav className="flex-1 px-4 py-7">
          <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-wider text-blue-200">
            Menu Utama
          </p>

          <div className="space-y-2">
            {/* DASHBOARD */}
            <Link
              href="/admin/dashboard"
              className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                isDashboard
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-blue-50 hover:bg-blue-500"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5 shrink-0"
              >
                <rect
                  x="3"
                  y="3"
                  width="7"
                  height="7"
                  rx="1"
                />

                <rect
                  x="14"
                  y="3"
                  width="7"
                  height="7"
                  rx="1"
                />

                <rect
                  x="3"
                  y="14"
                  width="7"
                  height="7"
                  rx="1"
                />

                <rect
                  x="14"
                  y="14"
                  width="7"
                  height="7"
                  rx="1"
                />
              </svg>

              <span>Dashboard</span>
            </Link>

            {/* KELOLA PROYEK */}
            <Link
              href="/admin/proyek"
              className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                isProyek
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-blue-50 hover:bg-blue-500"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <span>Kelola Proyek</span>
            </Link>
          </div>
        </nav>

        {/* =================================================
            BAGIAN BAWAH DESKTOP
        ================================================= */}
        <div className="border-t border-blue-500/60 p-4">
          {/* ADMIN INFO */}
          <div className="mb-4 flex items-center gap-3 rounded-xl bg-blue-500/50 p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-600">
              R
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">
                Admin
              </p>

              <p className="truncate text-xs text-blue-100">
                Portfolio Riska
              </p>
            </div>
          </div>

          {/* LOGOUT */}
          <form action={logout}>
            <button
              type="submit"
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-blue-50 transition-all hover:bg-red-500 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 17l5-5-5-5"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12H9"
                />
              </svg>

              <span>Logout</span>
            </button>
          </form>
        </div>
      </aside>
    </>
  );
}