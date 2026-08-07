import Link from "next/link";

import Card from "@/src/components/CoreComponent/Card";
import { RecentReview } from "./RecentReview.types";

interface RecentReviewCardProps {
  review: RecentReview;
}

export default function RecentReviewCard({ review }: RecentReviewCardProps) {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">
            {review.filename}
          </h3>

          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span>{review.language}</span>

            <span>{review.lines} lines</span>

            <span>{review.timestamp}</span>
          </div>
        </div>

        <Link
          href={`/history/${review.id}`}
          className="text-sm font-medium text-blue-500"
        >
          Open →
        </Link>
      </div>
    </Card>
  );
}
