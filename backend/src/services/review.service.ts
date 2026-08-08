import crypto from "crypto";

import groq from "../providers/groq.provider";

import {
  ReviewAIResponse,
  ReviewRequest,
  ReviewResponse,
} from "../types/review.types";
import { promptToReview } from "../constants/weview.constants";

const calculateReadingTime = (text: string): string => {
  const words = text.trim().split(/\s+/).length;

  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min`;
};

export const reviewCodeService = async ({
  language,
  code,
}: ReviewRequest): Promise<ReviewResponse> => {
  const prompt = promptToReview(language, code);

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content:
          "You are an experienced software engineer performing professional code reviews.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.3,
  });

  const response = completion.choices[0]?.message?.content;

  if (!response) {
    throw new Error("No review generated.");
  }

  let parsedReview: ReviewAIResponse;

  try {
    parsedReview = JSON.parse(response);
  } catch (error) {
    console.error("Failed to parse AI response:", response);
    throw new Error("AI returned an invalid JSON response.");
  }

  return {
    metadata: {
      reviewId: crypto.randomUUID(),
      language,
      reviewedAt: new Date().toISOString(),
      reviewVersion: "1.0.0",
      estimatedReadingTime: calculateReadingTime(parsedReview.detailedReport),
      model: "llama-3.3-70b-versatile",
    },

    review: parsedReview,
  };
};
