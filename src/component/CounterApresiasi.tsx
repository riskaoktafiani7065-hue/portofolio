"use client";

import { useState } from "react";

export default function CounterApresiasi() {
  const [count, setCount] = useState(0);

  return (
    <div className="rounded-2xl border border-blue-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-[#111217]/90">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-blue-600">
            Apresiasi
          </p>

          <h3 className="mt-1 text-xl font-bold text-gray-900 dark:text-white">
            Do you like my project?
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            Show your appreciation by pressing the button below.
          </p>
        </div>

        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-2xl dark:bg-blue-950/50">
          ❤️
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <span className="text-2xl font-black text-blue-600">
          {count}
        </span>

        <button
          type="button"
          onClick={() => setCount(count + 1)}
          className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700"
        >
          Show appreciation ❤️
        </button>
      </div>
    </div>
  );
}