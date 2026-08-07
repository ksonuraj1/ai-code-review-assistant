import { LucideIcon, BookOpen, Settings } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: BookOpen,
    external: true,
  },
  {
    label: "Docs",
    href: "/docs",
    icon: BookOpen,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];
