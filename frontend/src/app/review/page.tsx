"use client";

import Button from "@/src/components/Button/Button";
import CodeEditor from "@/src/components/Editor/CodeEditor";
import AIReview from "@/src/components/Review/AIReview";
import AppLayout from "@/src/layouts/AppLayout";
import { reviewCode } from "@/src/services/review.services";
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

          {/* <aside className="space-y-6">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/10">
                <h3 className="text-lg font-semibold text-slate-900">
                  How it works
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  The assistant scans your code and highlights style issues,
                  logic problems, and readability improvements.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600">
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-900" />
                    Style and convention suggestions
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-900" />
                    Cleaner structure and simplified logic
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-900" />
                    Advice for maintainable code
                  </li>
                </ul>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm shadow-slate-900/10">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
                  Pro tip
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
                  <li>Review one function or component at a time.</li>
                  <li>Give AI extra context for better suggestions.</li>
                  <li>Use this before final code checks.</li>
                </ul>
              </div>
            </div>
          </aside> */}
        </div>
      </div>
    </AppLayout>
  );
}
