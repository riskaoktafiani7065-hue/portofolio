import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value);
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // Cek user yang sedang login
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // Cek apakah Middleware berjalan
  console.log("=== MIDDLEWARE JALAN ===");
  console.log("PATH:", pathname);
  console.log("USER:", user?.email ?? "TIDAK ADA USER");

  // Semua halaman yang diawali /admin
  const isAdminPage = pathname.startsWith("/admin");

  // Halaman login admin
  const isLoginPage = pathname === "/admin/login";

  // Jika belum login dan mencoba membuka halaman admin,
  // arahkan ke halaman login
  if (isAdminPage && !isLoginPage && !user) {
    console.log("BELUM LOGIN → REDIRECT KE LOGIN");

    return NextResponse.redirect(
      new URL("/admin/login", request.url)
    );
  }

  // Jika sudah login dan membuka halaman login,
  // arahkan langsung ke halaman proyek
  if (isLoginPage && user) {
    console.log("SUDAH LOGIN → REDIRECT KE PROYEK");

    return NextResponse.redirect(
      new URL("/admin/proyek", request.url)
    );
  }

  // Jika kondisi aman, lanjutkan ke halaman yang diminta
  return response;
}

// Middleware hanya dijalankan untuk halaman /admin/*
export const config = {
  matcher: ["/admin/:path*"],
};