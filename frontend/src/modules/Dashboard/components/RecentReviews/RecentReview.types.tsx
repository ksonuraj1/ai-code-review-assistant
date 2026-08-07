export interface RecentReview {
  id: string;
  filename: string;
  language: string;
  lines: number;
  timestamp: string;
}

export interface RecentReviewsProps {
  reviews: RecentReview[];
}
