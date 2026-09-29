import { createSupabaseServerClient } from "../../../../lib/supabase-server";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";

export default function AdminLoginPage() {
  async function login(
    _previousState: { error: string } | null,
    formData: FormData
  ) {
    "use server";

    const email = formData.get("email")?.toString().trim() || "";
    const password = formData.get("password")?.toString() || "";

    const supabase = await createSupabaseServerClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("LOGIN ERROR:", error.message);

      return {
        error: "Email atau password salah. Silakan coba lagi.",
      };
    }

    redirect("/admin/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        {/* HEADER */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-600">
            Admin Login
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Login untuk mengelola proyek
          </p>
        </div>

        <LoginForm login={login} />
      </div>
    </main>
  );
}