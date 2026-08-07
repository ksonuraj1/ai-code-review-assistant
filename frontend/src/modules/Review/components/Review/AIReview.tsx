import ReactMarkdown from "react-markdown";

interface AIReviewProps {
  review: string;
}

export default function AIReview({ review }: AIReviewProps) {
  if (!review) {
    return (
      <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-10 text-center shadow-sm shadow-slate-200/10">
        <p className="text-base font-medium text-slate-500">
          Submit your code to see the AI review rendered in a clean, readable
          format.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/10">
      <article className="prose prose-slate max-w-none text-slate-700">
        <ReactMarkdown>{review}</ReactMarkdown>
      </article>
    </div>
  );
}
