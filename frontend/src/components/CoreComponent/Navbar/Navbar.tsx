"use client";
import { NAV_ITEMS } from "@/src/constants/navbar";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900 px-6">
      <Link href="/dashboard">
        <h1 className="text-xl font-semibold text-white">AI Code Review</h1>
      </Link>
      <nav className="flex items-center gap-6">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              className="flex items-center gap-2 text-sm text-slate-300"
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
