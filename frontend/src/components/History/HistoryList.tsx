import { ReviewHistoryEntry } from "@/src/utils/reviewHistory";
import HistoryCard from "./HistoryCard";

interface HistoryListProps {
  history: ReviewHistoryEntry[];
}

export default function HistoryList({ history }: HistoryListProps) {
  return (
    <div className="space-y-6">
      {history.map((entry) => (
        <HistoryCard key={entry.id} entry={entry} />
      ))}
    </div>
  );
}
