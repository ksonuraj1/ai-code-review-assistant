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
        <h3 className="text-sm text-gray-500">Total Reviews</h3>
        <p className="mt-2 text-3xl font-bold">{stats.totalReviews}</p>
      </Card>

      <Card>
        <h3 className="text-sm text-gray-500">Files Reviewed</h3>
        <p className="mt-2 text-3xl font-bold">{stats.filesReviewed}</p>
      </Card>

      <Card>
        <h3 className="text-sm text-gray-500">Last Review</h3>
        <p className="mt-2 text-3xl font-bold">{stats.lastReview}</p>
      </Card>

      <Card>
        <h3 className="text-sm text-gray-500">AI Provider</h3>
        <p className="mt-2 text-3xl font-bold">{stats.aiProvider}</p>
      </Card>
    </div>
  );
}
