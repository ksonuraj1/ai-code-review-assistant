"use client";

import Button from "@/src/components/Button/Button";
import CodeEditor from "@/src/components/Editor/CodeEditor";
import AppLayout from "@/src/layouts/AppLayout";
import { useState } from "react";

export default function ReviewPage() {
  const [language] = useState("JavaScript");
  const [code, setCode] = useState("");

  const handleReview = () => {
    if (!code.trim()) {
      alert("Please enter some code to review.");
      return;
    }

    console.log({
      language,
      code,
    });
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
        <CodeEditor code={code} language={language} onChange={setCode} />
        <div className="flex justify-end">
          <Button onClick={handleReview}>Review Code</Button>
        </div>
      </div>
    </AppLayout>
  );
}
