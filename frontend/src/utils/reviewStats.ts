export interface ReviewStats {
  totalReviews: number;
  filesReviewed: number;
  language: string;
  todaysCount: number;
}

const STORAGE_KEY = "ai-code-review-stats";

export const defaultReviewStats: ReviewStats = {
  totalReviews: 0,
  filesReviewed: 0,
  language: "Javascript",
  todaysCount: 1,
};

export function getReviewStats(): ReviewStats {
  if (typeof window === "undefined") {
    return defaultReviewStats;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
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
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

const todayCount = (dataToCheck: number): number => {
  let count = 0;
  let today = new Date().getDate();
  if (today === dataToCheck) {
    count++;
  }
  return count;
};

export function incrementReviewStats(
  filesReviewed = 0,
  language: string,
): ReviewStats {
  const current = getReviewStats();
  const next: ReviewStats = {
    ...current,
    totalReviews: current.totalReviews + 1,
    filesReviewed: current.filesReviewed + filesReviewed,
    language: language,
    todaysCount: todayCount(new Date().getDate()),
  };

  saveReviewStats(next);
  return next;
}
