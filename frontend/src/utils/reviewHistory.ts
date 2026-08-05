export interface ReviewHistoryEntry {
  id: string;
  timestamp: string;
  filename: string;
  language: string;
  lines: number;
  review: string;
}

const STORAGE_KEY = "ai-code-review-history";
const MAX_ENTRIES = 50;

export function getReviewHistory(): ReviewHistoryEntry[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    return JSON.parse(raw) as ReviewHistoryEntry[];
  } catch {
    return [];
  }
}

export function saveReviewHistory(entries: ReviewHistoryEntry[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function addReviewHistory(
  entry: ReviewHistoryEntry,
): ReviewHistoryEntry[] {
  const current = getReviewHistory();
  const next = [entry, ...current].slice(0, MAX_ENTRIES);
  saveReviewHistory(next);
  return next;
}

export function clearReviewHistory() {
  saveReviewHistory([]);
}
