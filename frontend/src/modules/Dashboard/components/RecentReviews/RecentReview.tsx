import Link from "next/link";
import RecentReviewCard from "./RecentReviewCard";
import { RecentReviewsProps } from "./RecentReview.types";
import Card from "@/src/components/CoreComponent/Card/Card";

export default function RecentReviews({ reviews }: RecentReviewsProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Recent Reviews</h2>

          <p className="mt-1 text-slate-400">Your latest AI code reviews.</p>
        </div>

        <Link href="/history" className="text-sm font-medium text-blue-500">
          View All →
        </Link>
      </div>

      {reviews.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-slate-400">No reviews found.</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <RecentReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </section>
  );
}
