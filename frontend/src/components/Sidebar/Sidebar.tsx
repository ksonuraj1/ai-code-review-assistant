"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserSession } from "@/src/utils/auth";

const menuItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Review", href: "/review" },
  { label: "History", href: "/history" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const session = getUserSession();
    setUsername(session?.username || "Guest");
  }, []);

  return (
    <div className="flex h-full flex-col p-1 w-60 shrink-0 border-r border-slate-200 bg-white/95 shadow-sm shadow-slate-200/40 md:block">
      <div className="mb-8 mx-5">
        <h2 className="mt-3 text-lg font-semibold text-slate-900">
          Work Space
        </h2>
      </div>
      <nav className="flex flex-col gap-3 p-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                isActive
                  ? "bg-slate-900 text-white shadow"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto border-t border-slate-200 p-4">
        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
          Logged in as
        </p>
        <p className="mt-2 text-sm font-semibold text-slate-900">
          {username || "Guest"}
        </p>
      </div>
    </div>
  );
}
