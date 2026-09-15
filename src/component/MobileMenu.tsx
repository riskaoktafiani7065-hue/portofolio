"use client";

interface MobileMenuProps {
  menuOpen: boolean;
  activeSection: string;
  sections: string[];
  onNavigate: (section: string) => void;
}

export default function MobileMenu({
  menuOpen,
  activeSection,
  sections,
  onNavigate,
}: MobileMenuProps) {
  if (!menuOpen) return null;

  return (
    <div className="absolute left-0 top-full w-full border-t border-gray-200 bg-white px-5 py-5 shadow-lg dark:border-gray-800 dark:bg-[#080b12] md:hidden">
      <nav className="flex flex-col gap-2">
        {sections.map((section) => {
          const isActive = activeSection === section;

          return (
            <button
              key={section}
              type="button"
              onClick={() => onNavigate(section)}
              className={`rounded-xl px-4 py-3 text-left text-sm font-semibold capitalize transition ${
                isActive
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
                  : "text-gray-500 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-blue-950/40 dark:hover:text-blue-400"
              }`}
            >
              {section}
            </button>
          );
        })}
      </nav>
    </div>
  );
}