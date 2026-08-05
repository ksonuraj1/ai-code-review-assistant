import ReactMarkdown from "react-markdown";

interface AIReviewProps {
  review: string;
}

export default function AIReview({ review }: AIReviewProps) {
  if (!review) return null;

  return (
    <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold">AI Review</h2>

      <article className="prose prose-slate max-w-none">
        <ReactMarkdown>{review}</ReactMarkdown>
      </article>
    </div>
  );
}
