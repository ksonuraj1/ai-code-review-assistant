"use client";

import Button from "@/src/components/Button/Button";
import CodeEditor from "@/src/components/Editor/CodeEditor";
import AIReview from "@/src/components/Review/AIReview";
import AppLayout from "@/src/layouts/AppLayout";
import { reviewCode } from "@/src/services/review.services";
import { useState } from "react";

export default function ReviewPage() {
  const [language] = useState("JavaScript");
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
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Review Code</h1>

          <p className="mt-2 text-gray-600">
            Paste your code below and let AI review it.
          </p>
        </div>

        {/* Editor */}

        <div>
          <CodeEditor code={code} language={language} onChange={setCode} />
        </div>
        <div className="flex flex-col justify-end w-0 flex-1 space-y-4">
          <Button onClick={handleReview} disabled={loading}>
            {loading ? "Reviewing..." : "Review Code"}
          </Button>

          {error && <p className="text-red-600">{error}</p>}

          <AIReview review={review} />
        </div>
      </div>
    </AppLayout>
  );
}
