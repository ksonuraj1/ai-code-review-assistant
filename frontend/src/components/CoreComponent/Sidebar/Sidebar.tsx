"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getUserSession } from "@/src/utils/auth";
import { SIDEBAR_ITEMS } from "@/src/constants/sidebar";

export default function Sidebar() {
  const pathname = usePathname();
  const username = getUserSession()?.username ?? "Guest";

  return (
    <aside className="flex h-full w-60 shrink-0 flex-col border-r border-slate-800 bg-slate-900 px-4 py-6">
      {/* Brand */}
      <div className="mb-8 px-2">
        <h2 className="text-3xl font-bold text-white">Workspace</h2>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {SIDEBAR_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium
                ${active ? "bg-blue-600 text-white" : "text-slate-300"}
              `}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="mt-auto border-t border-slate-800 pt-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
            {username.charAt(0).toUpperCase()}
          </div>

          <div>
            <p className="font-medium text-white">{username}</p>

            <p className="text-sm text-slate-400">Frontend Engineer</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
