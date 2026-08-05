export interface ReviewStats {
  totalReviews: number;
  filesReviewed: number;
  lastReview: string;
  aiProvider: string;
}

const STORAGE_KEY = "ai-code-review-stats";

export const defaultReviewStats: ReviewStats = {
  totalReviews: 0,
  filesReviewed: 0,
  lastReview: "Never",
  aiProvider: "Gemini",
};

export function getReviewStats(): ReviewStats {
  if (typeof window === "undefined") {
    return defaultReviewStats;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return defaultReviewStats;
    }

    return JSON.parse(raw) as ReviewStats;
  } catch {
    return defaultReviewStats;
  }
}

export function saveReviewStats(stats: ReviewStats) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

export function incrementReviewStats(filesReviewed = 1): ReviewStats {
  const current = getReviewStats();
  const next: ReviewStats = {
    ...current,
    totalReviews: current.totalReviews + 1,
    filesReviewed: current.filesReviewed + filesReviewed,
    lastReview: new Date().toLocaleString(),
  };

  saveReviewStats(next);
  return next;
}
