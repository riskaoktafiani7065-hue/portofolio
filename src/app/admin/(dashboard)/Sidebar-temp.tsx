"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarProps = {
  logout: () => void;
};

export default function Sidebar({ logout }: SidebarProps) {
  const pathname = usePathname();

  const isDashboard = pathname === "/admin/dashboard";
  const isProyek = pathname.startsWith("/admin/proyek");

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-64 flex-col bg-blue-600 text-white shadow-xl">

      {/* HEADER / LOGO */}
      <div className="border-b border-blue-500/60 px-5 py-6">
        <div className="flex items-center gap-3">

          {/* Logo */}
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg font-extrabold text-blue-600 shadow-sm">
            RIS
          </div>

          {/* Nama */}
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
              className="h-5 w-5"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
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
              className="h-5 w-5"
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

      {/* BAGIAN BAWAH */}
      <div className="border-t border-blue-500/60 p-4">

        {/* ADMIN INFO */}
        <div className="mb-4 flex items-center gap-3 rounded-xl bg-blue-500/50 p-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-600">
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
              className="h-5 w-5"
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
  );
}