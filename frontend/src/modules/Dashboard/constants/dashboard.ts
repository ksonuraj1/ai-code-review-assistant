export const DASHBOARD_TABS = {
  overview: "overview",
  reviews: "reviews",
} as const;

import { Code2, History } from "lucide-react";

export const QUICK_ACTIONS = [
  {
    title: "Review Code",
    description: "Start a new AI code review.",
    href: "/review",
    icon: Code2,
  },
  {
    title: "Review History",
    description: "Browse your previous reviews.",
    href: "/history",
    icon: History,
  },
];
