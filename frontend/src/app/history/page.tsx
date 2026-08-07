"use client";

import AppLayout from "@/src/layouts/AppLayout";
import { useEffect, useState } from "react";
import {
  clearReviewHistory,
  deleteReviewById,
  getReviewHistory,
  ReviewHistoryEntry,
} from "@/src/utils/reviewHistory";
import HistoryList from "@/src/modules/History/components/HistoryList";
import HistoryHeader from "@/src/modules/History/components/HistoryHeader";
import { useRouter } from "next/navigation";
import EmptyHistory from "@/src/modules/History/components/EmptyHistory";

export default function HistoryPage() {
  const [history, setHistory] = useState<ReviewHistoryEntry[]>([]);
  const router = useRouter();

  useEffect(() => {
    setHistory(getReviewHistory());
  }, []);

  const handleClear = () => {
    clearReviewHistory();
    setHistory([]);
  };

  const handleOpen = (id: string) => {
    router.push(`/review?id=${id}`);
  };

  const handleDelete = (id: string) => {
    deleteReviewById(id);
    setHistory(getReviewHistory());
  };

  return (
    <AppLayout>
      <div className="mx-auto w-full max-w-7xl space-y-8">
        <HistoryHeader onClear={handleClear} />

        {history.length === 0 ? (
          <EmptyHistory />
        ) : (
          <HistoryList
            history={history}
            onOpen={handleOpen}
            onDelete={handleDelete}
          />
        )}
      </div>
    </AppLayout>
  );
}
