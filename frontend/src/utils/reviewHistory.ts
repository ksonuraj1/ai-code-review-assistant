const STORAGE_KEY = "review-history";

export interface ReviewHistoryEntry {
  id: string;
  filename: string;
  language: string;
  code: string;
  review: string;
  lines: number;
  timestamp: string;
}

export function getReviewHistory(): ReviewHistoryEntry[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(STORAGE_KEY);

  return data ? JSON.parse(data) : [];
}

export function saveReviewHistory(entry: ReviewHistoryEntry) {
  const history = getReviewHistory();

  history.unshift(entry);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export function clearReviewHistory() {
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Get a single review by id
 */
export function getReviewById(id: string): ReviewHistoryEntry | undefined {
  const history = getReviewHistory();

  return history.find((entry) => entry.id === id);
}

export function deleteReviewById(id: string) {
  const history = getReviewHistory();

  const updatedHistory = history.filter((entry) => entry.id !== id);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
}
