"use client";

import AppLayout from "@/src/layouts/AppLayout";
import { useEffect, useState } from "react";
import {
  clearReviewHistory,
  getReviewHistory,
  ReviewHistoryEntry,
} from "@/src/utils/reviewHistory";

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
      <div className="mx-auto w-full max-w-7xl sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold">Review History</h1>
              <p className="text-sm text-slate-500">
                View your previous review sessions and inspect AI feedback.
              </p>
            </div>

            <button
              type="button"
              onClick={handleClear}
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              Clear history
            </button>
          </div>

          {history.length === 0 ? (
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-10 text-center shadow-sm shadow-slate-200/10">
              <p className="text-base font-medium text-slate-500">
                No review history yet. Start a code review to save your first
                entry.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {history.map((entry) => (
                <div
                  key={entry.id}
                  className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/10"
                >
                  <div className="flex flex-col gap-3 border-b border-slate-100 bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-600">
                        {entry.filename}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        {entry.language} · {entry.lines} lines
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                      <span>{entry.timestamp}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-lg font-semibold text-slate-900">
                      AI Review
                    </h2>
                    <p className="mt-3 whitespace-pre-line text-sm leading-6 text-slate-700">
                      {entry.review}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
