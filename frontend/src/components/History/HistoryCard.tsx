import Button from "../Button/Button";
import Card from "../Card/Card";
import { ReviewHistoryEntry } from "@/src/utils/reviewHistory";

interface HistoryCardProps {
  entry: ReviewHistoryEntry;
  onOpen: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function HistoryCard({
  entry,
  onOpen,
  onDelete,
}: HistoryCardProps) {
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
      <div className="mt-6 flex items-center gap-3 border-t border-slate-700 pt-4">
        <Button onClick={() => onOpen(entry.id)}>Open</Button>

        <Button onClick={() => navigator.clipboard.writeText(entry.review)}>
          Copy
        </Button>

        <Button onClick={() => onDelete(entry.id)}>Delete</Button>
      </div>
    </Card>
  );
}
