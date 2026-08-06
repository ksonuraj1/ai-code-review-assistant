"use client";

import { useEffect, useState } from "react";

import ReviewHeader from "@/src/components/Review/ReviewHeader";
import ReviewPanel from "@/src/components/Review/ReviewPanel";
import AppLayout from "@/src/layouts/AppLayout";
import { reviewCode } from "@/src/services/review.services";
import EditorPanel from "@/src/components/Review/EditorialPanel";
import { useSearchParams } from "next/navigation";
import { getReviewById, saveReviewHistory } from "@/src/utils/reviewHistory";

export default function ReviewPage() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");

  const [review, setReview] = useState("");
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
    setReview(history.review);
  }, [reviewId]);

  const handleReviewClick = async () => {
    if (!code.trim()) {
      setError("Please paste some code before reviewing.");
      return;
    }

    setLoading(true);
    setError("");
    setReview("");

    try {
      const { data } = await reviewCode({
        language,
        code,
      });

      setReview(data.review);
      saveReviewHistory({
        id: crypto.randomUUID(),
        filename: "Untitled",
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

  return (
    <AppLayout>
      <div className="mx-auto max-w-7xl space-y-8">
        <ReviewHeader />

        <div className="flex flex-col gap-2 xl:flex-row">
          <div className="flex flex-1">
            <EditorPanel
              language={language}
              code={code}
              loading={loading}
              onLanguageChange={setLanguage}
              onCodeChange={setCode}
              onReview={handleReviewClick}
            />
          </div>

          {/* AI Review */}
          <div className="flex w-full xl:max-w-[420px]">
            <ReviewPanel review={review} loading={loading} error={error} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
