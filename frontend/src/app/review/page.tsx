"use client";

import Button from "@/src/components/Button/Button";
import CodeEditor from "@/src/components/Editor/CodeEditor";
import AIReview from "@/src/components/Review/AIReview";
import AppLayout from "@/src/layouts/AppLayout";
import { reviewCode } from "@/src/services/review.services";
import { incrementReviewStats } from "@/src/utils/reviewStats";
import { useState } from "react";

const languageOptions = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C#",
  "Go",
  "Ruby",
  "PHP",
  "Swift",
  "Kotlin",
];

export default function ReviewPage() {
  const [language, setLanguage] = useState(languageOptions[0]);
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleReview = async () => {
    if (!code.trim()) {
      alert("Please enter some code");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await reviewCode({
        language,
        code,
      });

      setReview(response.data.review);
      const filesReviewed = code.split(/\r?\n/).filter(Boolean).length;
      const stats = incrementReviewStats(filesReviewed);
      // setDashboardStats(stats);
    } catch (err) {
      setError("Failed to generate AI review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout>
      <div className="mx-auto w-full max-w-7xl sm:px-6 lg:px-2">
        <div className="gap-8 lg:grid-cols-[2.1fr_0.9fr] items-start">
          <div className="space-y-8">
            <section className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/10">
              <div className="mb-6 rounded-[1.75rem] bg-slate-50 p-5 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Code Editor
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                    Paste your code here
                  </h2>
                </div>
                <div className="mt-2 flex flex-col gap-3 sm:mt-0 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-2 py-1 shadow-sm">
                    <label
                      htmlFor="language"
                      className="text-sm font-medium text-slate-600"
                    >
                      Language
                    </label>
                    <select
                      id="language"
                      value={language}
                      onChange={(event) => setLanguage(event.target.value)}
                      className="rounded-full border-none bg-transparent px-2 py-1 text-sm font-semibold text-slate-900 outline-none focus:ring-0"
                    >
                      {languageOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Button onClick={handleReview} disabled={loading}>
                    {loading ? "Reviewing..." : "Review Code"}
                  </Button>
                </div>
              </div>

              <CodeEditor code={code} language={language} onChange={setCode} />

              {error && (
                <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  {error}
                </div>
              )}
            </section>

            <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">
                    AI Review
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Review results appear here after analysis completes.
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                  {review ? "Ready" : "Waiting"}
                </span>
              </div>

              <AIReview review={review} />
            </section>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
