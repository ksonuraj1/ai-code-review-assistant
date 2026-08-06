"use client";

import AppLayout from "@/src/layouts/AppLayout";
import { useEffect, useState } from "react";
import {
  clearReviewHistory,
  getReviewHistory,
  ReviewHistoryEntry,
} from "@/src/utils/reviewHistory";
import HistoryList from "@/src/components/History/HistoryList";
import EmptyHistory from "@/src/components/History/EmptyHistory";
import HistoryHeader from "@/src/components/History/HistoryHeader";

export default function HistoryPage() {
  const [history, setHistory] = useState<ReviewHistoryEntry[]>([]);

  useEffect(() => {
    setHistory(getReviewHistory());
  }, []);

  const handleClear = () => {
    clearReviewHistory();
    setHistory([]);
  };

  return (
    <AppLayout>
      <div className="mx-auto w-full max-w-7xl space-y-8">
        <HistoryHeader onClear={handleClear} />

        {history.length === 0 ? (
          <EmptyHistory />
        ) : (
          <HistoryList history={history} />
        )}
      </div>
    </AppLayout>
  );
}
