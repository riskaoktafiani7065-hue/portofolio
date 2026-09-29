"use client";

import { useActionState } from "react";

type LoginState = {
  error: string;
} | null;

type LoginFormProps = {
  login: (
    previousState: LoginState,
    formData: FormData
  ) => Promise<LoginState>;
};

export default function LoginForm({ login }: LoginFormProps) {
  const [state, formAction, isPending] = useActionState<LoginState, FormData>(
    login,
    null
  );

  return (
    <form action={formAction} className="space-y-5">
      {/* EMAIL */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="off"
          placeholder="Masukkan email"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* PASSWORD */}
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="Masukkan password"
          required
          className={`w-full rounded-lg border px-4 py-3 outline-none transition focus:ring-2 ${
            state?.error
              ? "border-red-300 focus:border-red-500 focus:ring-red-100"
              : "border-gray-300 focus:border-blue-500 focus:ring-blue-100"
          }`}
        />

        {/* ERROR */}
        {state?.error && (
          <p className="mt-2 text-sm font-medium text-red-600">
            {state.error}
          </p>
        )}
      </div>

      {/* LOGIN BUTTON */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? "Login..." : "Login"}
      </button>
    </form>
  );
}