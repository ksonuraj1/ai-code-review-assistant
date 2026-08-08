"use client";

import { Suspense, useEffect, useState } from "react";

import ReviewHeader from "@/src/modules/Review/components/Review/ReviewHeader";
import ReviewPanel from "@/src/modules/Review/components/Review/ReviewPanel";
import AppLayout from "@/src/layouts/AppLayout";
import { reviewCode } from "@/src/services/review.services";
import EditorPanel from "@/src/modules/Review/components/Review/EditorialPanel";
import { useSearchParams } from "next/navigation";
import { getReviewById, saveReviewHistory } from "@/src/utils/reviewHistory";
import { detectLanguage } from "@/src/utils/languageDetector";
import { incrementReviewStats } from "@/src/utils/reviewStats";
import { ReviewAIResponse } from "@/src/modules/Review/types/review.types";

function ReviewPageContent() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [filename, setFilename] = useState("No file selected");
  const [review, setReview] = useState<ReviewAIResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();

  const reviewId = searchParams.get("id");

  useEffect(() => {
    if (!reviewId) return;
    const history = getReviewById(reviewId);
    if (!history) return;
    setLanguage(history.language);
    setCode(history.code);
    setReview(null);
  }, [reviewId]);

  const handleReviewClick = async () => {
    if (!code.trim()) {
      setError("Please paste some code before reviewing.");
      return;
    }

    setLoading(true);
    setError("");
    setReview(null);

    try {
      const { data } = await reviewCode({
        language,
        code,
      });

      setReview(data.review);
      incrementReviewStats(filename ? 1 : 0, language);
      saveReviewHistory({
        id: crypto.randomUUID(),
        filename: filename ? filename : "custom review",
        language,
        code,
        review: data.review,
        lines: code.split("\n").length,
        timestamp: new Date().toLocaleString(),
      });
    } catch (err) {
      console.error(err);

      setError("Unable to review your code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content !== "string") return;
      setFilename(file.name);
      setLanguage(detectLanguage(file.name));
      setCode(content);
    };

    reader.readAsText(file);
  };

  const handleClearEditorCode = () => {
    setCode("");
  };
  return (
    <AppLayout>
      <div className="mx-auto max-w-7xl space-y-8">
        <ReviewHeader />

        <div className="flex gap-1">
          <div className="flex-1/2 min-w-0">
            <EditorPanel
              language={language}
              code={code}
              loading={loading}
              filename={filename}
              onLanguageChange={setLanguage}
              onCodeChange={setCode}
              onReview={handleReviewClick}
              onFilenameChange={setFilename}
              onFileSelect={handleFileUpload}
              onClear={handleClearEditorCode}
            />
          </div>

          {/* AI Review */}
          <div className="flex-1/2 min-w-0">
            {/* <pre>{JSON.stringify(review, null, 2)}</pre> */}
            <ReviewPanel review={review} loading={loading} error={error} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default function ReviewPage() {
  return (
    <Suspense
      fallback={<div className="p-6 text-slate-400">Loading review...</div>}
    >
      <ReviewPageContent />
    </Suspense>
  );
}
