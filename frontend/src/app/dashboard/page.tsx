"use client";
import AppLayout from "@/src/layouts/AppLayout";
import DashboardHeader from "@/src/modules/Dashboard/components/DashboardHeader/DashboardHeader";
import QuickActions from "@/src/modules/Dashboard/components/QuickActions/QuckActions";
import RecentReviews from "@/src/modules/Dashboard/components/RecentReviews";
import StatsGrid from "@/src/modules/Dashboard/components/StatsGrid";
import { QUICK_ACTIONS } from "@/src/modules/Dashboard/constants/dashboard";
import { getUserSession } from "@/src/utils/auth";
import {
  getReviewHistory,
  ReviewHistoryEntry,
} from "@/src/utils/reviewHistory";
import { getReviewStats, ReviewStats } from "@/src/utils/reviewStats";
import { FileCode, Files, Languages, CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const username = getUserSession()?.username ?? "Guest";
  const [stats, setStats] = useState<ReviewStats>();
  const [reviewStats, setReviewStats] = useState<ReviewHistoryEntry[]>();

  useEffect(() => {
    setStats(getReviewStats());
    setReviewStats(getReviewHistory());
  }, []);

  const DASHBOARD_STATS = [
    {
      title: "Total Reviews",
      value: stats?.totalReviews ?? 0,
      icon: FileCode,
    },
    {
      title: "Files Reviewed",
      value: stats?.filesReviewed ?? 0,
      icon: Files,
    },
    {
      title: "Languages",
      value: stats?.language ?? 0,
      icon: Languages,
    },
    {
      title: "Today",
      value: stats?.todaysCount ?? 0,
      icon: CalendarDays,
    },
  ];

  const reviews = [
    {
      id: reviewStats?.[0]?.id ?? "1",
      filename: reviewStats?.[0]?.filename ?? "",
      language: reviewStats?.[0]?.language ?? "",
      lines: Number(reviewStats?.[0]?.lines ?? 0),
      timestamp: reviewStats?.[0]?.timestamp ?? "",
    },
    {
      id: reviewStats?.[1]?.id ?? "2",
      filename: reviewStats?.[1]?.filename ?? "",
      language: reviewStats?.[1]?.language ?? "",
      lines: Number(reviewStats?.[1]?.lines ?? 0),
      timestamp: reviewStats?.[1]?.timestamp ?? "",
    },
    {
      id: reviewStats?.[2]?.id ?? "3",
      filename: reviewStats?.[2]?.filename ?? "",
      language: reviewStats?.[2]?.language ?? "",
      lines: Number(reviewStats?.[2]?.lines ?? 0),
      timestamp: reviewStats?.[2]?.timestamp ?? "",
    },
  ];

  return (
    <AppLayout>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <DashboardHeader username={username} />
        <StatsGrid stats={DASHBOARD_STATS} />
        <QuickActions actions={QUICK_ACTIONS} />
        <RecentReviews reviews={reviews} />
      </div>
    </AppLayout>
  );
}
