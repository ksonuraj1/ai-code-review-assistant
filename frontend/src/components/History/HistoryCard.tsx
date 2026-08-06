import Card from "../Card/Card";
import { ReviewHistoryEntry } from "@/src/utils/reviewHistory";

interface HistoryCardProps {
  entry: ReviewHistoryEntry;
}

export default function HistoryCard({ entry }: HistoryCardProps) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800 px-6 py-4">
        <div>
          <h3 className="font-semibold text-white">{entry.filename}</h3>

          <p className="mt-1 text-sm text-slate-400">
            {entry.language} • {entry.lines} lines
          </p>
        </div>

        <span className="text-sm text-slate-500">{entry.timestamp}</span>
      </div>

      <div className="p-6">
        <h4 className="mb-3 text-lg font-semibold text-white">AI Review</h4>

        <p className="whitespace-pre-line text-sm leading-7 text-slate-300">
          {entry.review}
        </p>
      </div>
    </Card>
  );
}
