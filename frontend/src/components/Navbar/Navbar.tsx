"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Review", href: "/review" },
  { label: "History", href: "/history" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 p-1 shadow-sm shadow-slate-200/40 backdrop-blur-xl sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
            AI Code Review
          </p>
        </div>

        <nav className="flex items-center gap-0">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-900 text-white shadow"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button className="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
