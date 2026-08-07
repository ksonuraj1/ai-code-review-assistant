import { Code2, History, LayoutDashboard, LucideIcon } from "lucide-react";

export interface SidebarItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Review",
    href: "/review",
    icon: Code2,
  },
  {
    label: "History",
    href: "/history",
    icon: History,
  },
];
