"use client";

import Button from "@/src/components/Button/Button";
import CodeEditor from "@/src/components/Editor/CodeEditor";
import AIReview from "@/src/components/Review/AIReview";
import AppLayout from "@/src/layouts/AppLayout";
import { reviewCode } from "@/src/services/review.services";
import { addReviewHistory } from "@/src/utils/reviewHistory";
import { incrementReviewStats } from "@/src/utils/reviewStats";
import { useState, type ChangeEvent } from "react";

type FileLanguageMap = Record<string, string>;

const fileLanguageMap: FileLanguageMap = {
  js: "JavaScript",
  ts: "TypeScript",
  py: "Python",
  java: "Java",
  cs: "C#",
  go: "Go",
  rb: "Ruby",
  php: "PHP",
  swift: "Swift",
  kt: "Kotlin",
  kts: "Kotlin",
};

function getLanguageFromFilename(filename: string) {
  const ext = filename.split(".").pop()?.toLowerCase() || "";
  return fileLanguageMap[ext] || "JavaScript";
}

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
  const [filename, setFilename] = useState("");

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
        filename: filename || undefined,
      });

      const reviewText = response.data.review;
      setReview(reviewText);

      const filesReviewed = code.split(/\r?\n/).filter(Boolean).length;
      incrementReviewStats(filesReviewed);
      addReviewHistory({
        id: crypto.randomUUID(),
        timestamp: new Date().toLocaleString(),
        filename: filename || "Pasted code",
        language,
        lines: filesReviewed,
        review: reviewText,
      });
    } catch (err) {
      setError("Failed to generate AI review.");
    } finally {
      setLoading(false);
    }
  };

  const loadFile = async (file: File) => {
    setFilename(file.name);
    setLanguage(getLanguageFromFilename(file.name));

    try {
      const text = await file.text();
      setCode(text);
      setError("");
    } catch (err) {
      setError("Unable to read uploaded file.");
    }
  };

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    await loadFile(file);
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
                    Upload a file or paste code to review
                  </h2>
                </div>
                <div className="mt-2 flex flex-col gap-3 sm:mt-0 sm:flex-row sm:items-center">
                  <label className="flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                    <span>Upload</span>
                    <input
                      type="file"
                      accept=".js,.ts,.py,.java,.cs,.go,.rb,.php,.swift,.kt,.kts"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                  <span className="text-sm text-slate-500">
                    {filename || "No file loaded"}
                  </span>
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
                  <Button
                    onClick={handleReview}
                    disabled={loading || !code.trim()}
                  >
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
