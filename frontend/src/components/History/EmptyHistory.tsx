import { History } from "lucide-react";
import Button from "../Button/Button";

interface EmptyHistoryProps {
  onStartReview?: () => void;
}

export default function EmptyHistory({ onStartReview }: EmptyHistoryProps) {
  return (
    <div className="flex min-h-[450px] flex-col items-center justify-center rounded-2xl border border-slate-700 bg-slate-800/50 p-10 text-center">
      <History size={60} className="mb-6 text-slate-500" />

      <h2 className="text-2xl font-semibold text-white">No Review History</h2>

      <p className="mt-3 max-w-md text-slate-400">
        Start reviewing your code to build a history of AI suggestions. Your
        previous reviews will appear here.
      </p>

      {onStartReview && (
        <Button className="mt-8" onClick={onStartReview}>
          Start Review
        </Button>
      )}
    </div>
  );
}
