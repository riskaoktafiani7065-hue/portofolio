"use client";

const skills = [
  "TAILWIND CSS",
  "MYSQL",
  "PYTHON",
  "FIGMA",
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "REACT",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-gray-200 bg-[#dce9f1] px-5 py-0 text-white dark:border-gray-800 dark:bg-[#090d14] sm:px-8 md:px-12 lg:px-16"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-1/3 top-0 h-20 w-20 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* TOP INFO */}
        <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-gray-300 pb-8 dark:border-gray-700 md:grid-cols-3 md:gap-12 md:pb-16">

          {/* BASED IN */}
          <div className="pt-7 md:pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
              Based In
            </p>

            <p className="mt-2 text-base font-medium text-blue-400 sm:text-lg">
              Indonesia
            </p>
          </div>

          {/* SPACE */}
          <div className="hidden md:block" />

          {/* STATISTICS */}
          <div className="flex items-start gap-6 pt-7 md:justify-end md:gap-8 md:pt-10">

            {/* YEARS */}
            <div>
              <p className="text-3xl font-bold text-blue-400 sm:text-4xl">
                01<span className="text-blue-500">+</span>
              </p>

              <p className="mt-1 whitespace-nowrap text-[10px] uppercase tracking-[0.15em] text-gray-500 sm:text-xs sm:tracking-[0.2em] dark:text-gray-400">
                Years Learning
              </p>
            </div>

            {/* PROJECTS */}
            <div>
              <p className="text-3xl font-bold text-blue-400 sm:text-4xl">
                05<span className="text-blue-500">+</span>
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-gray-500 sm:text-xs sm:tracking-[0.2em] dark:text-gray-400">
                Projects
              </p>
            </div>

          </div>
        </div>


        {/* SKILLS MARQUEE */}
        <div className="overflow-hidden py-6 sm:py-8">

          <div className="skills-marquee flex w-max">

            {/* GROUP 1 */}
            <div className="flex items-center gap-8 pr-8 sm:gap-12 sm:pr-12">

              {skills.map((skill) => (
                <div
                  key={`first-${skill}`}
                  className="flex items-center gap-8 sm:gap-12"
                >
                  <span className="whitespace-nowrap text-sm font-semibold tracking-[0.12em] text-gray-800 sm:text-lg sm:tracking-[0.15em] dark:text-gray-200">
                    {skill}
                  </span>

                  <span className="text-xl text-blue-500 sm:text-2xl">
                    •
                  </span>
                </div>
              ))}

            </div>


            {/* GROUP 2 */}
            <div className="flex items-center gap-8 pr-8 sm:gap-12 sm:pr-12">

              {skills.map((skill) => (
                <div
                  key={`second-${skill}`}
                  className="flex items-center gap-8 sm:gap-12"
                >
                  <span className="whitespace-nowrap text-sm font-semibold tracking-[0.12em] text-gray-800 sm:text-lg sm:tracking-[0.15em] dark:text-gray-200">
                    {skill}
                  </span>

                  <span className="text-xl text-blue-500 sm:text-2xl">
                    •
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}