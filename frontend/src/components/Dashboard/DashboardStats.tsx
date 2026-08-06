"use client";

import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { getReviewStats, ReviewStats } from "@/src/utils/reviewStats";

export default function DashboardStats() {
  const [stats, setStats] = useState<ReviewStats | null>(null);

  useEffect(() => {
    setStats(getReviewStats());
  }, []);

  if (!stats) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 gap-8 p-1">
      <Card>
        <h3 className="text-slate-400 text-sm uppercase tracking-wide">
          Total Reviews
        </h3>

        <p className="mt-4 text-5xl font-bold text-white">
          {stats.totalReviews}
        </p>
      </Card>

      <Card>
        <h3 className="text-slate-400 text-sm uppercase tracking-wide">
          Files Reviewed
        </h3>
        <p className="mt-4 text-5xl font-bold text-white">
          {stats.filesReviewed}
        </p>
      </Card>

      <Card>
        <h3 className="text-slate-400 text-sm uppercase tracking-wide">
          Last Review
        </h3>
        <p className="mt-4 text-2xl font-bold text-white">{stats.lastReview}</p>
      </Card>

      <Card>
        <h3 className="text-slate-400 text-sm uppercase tracking-wide">
          AI Model
        </h3>
        <p className="mt-4 text-2xl font-bold text-white">Llama 3.3 70B</p>
      </Card>
    </div>
  );
}
