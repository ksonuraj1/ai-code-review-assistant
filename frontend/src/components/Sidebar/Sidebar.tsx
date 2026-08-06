"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserSession } from "@/src/utils/auth";
import { LayoutDashboard, Code2, History } from "lucide-react";

const menuItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Review", href: "/review", icon: Code2 },
  { label: "History", href: "/history", icon: History },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const session = getUserSession();
    setUsername(session?.username || "Guest");
  }, []);

  return (
    <div className="flex h-full flex-col p-1 w-52  shrink-0 border-r border-slate-800 bg-slate-900 shadow-sm shadow-slate-200/40 md:block">
      <div className="mb-8 mx-5">
        <h2 className="text-3xl font-bold text-white">Workspace</h2>
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
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto border-t border-slate-800 pt-6">
        <div className="flex items-center gap-3">
          <div
            className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        bg-blue-600
        font-semibold
      "
          >
            K
          </div>

          <div>
            <p className="font-medium text-white">{username || "Guest"}</p>

            <p className="text-sm text-slate-400">Frontend Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
