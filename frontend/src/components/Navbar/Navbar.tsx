"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// github, docs, settings icon from lucide-react
import { BookOpen, Settings } from "lucide-react";

const navLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Other Section", href: "/other" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className="
    h-16
    border-b
    border-slate-800
    bg-slate-900
    px-8
    flex
    items-center
    justify-between
  "
    >
      <div className="text-lg font-semibold tracking-wide">AI Code Review</div>

      <nav className="flex items-center gap-4 text-slate-400">
        <a href="#">GitHub</a>

        <BookOpen className="h-5 w-5" />
        <a href="#">Docs</a>

        <Settings className="h-5 w-5" />
        <button>Settings</button>
      </nav>
    </header>
  );
}
