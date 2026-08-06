import { ReviewHistoryEntry } from "@/src/utils/reviewHistory";
import HistoryCard from "./HistoryCard";

interface HistoryListProps {
  history: ReviewHistoryEntry[];
  onOpen: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function HistoryList({
  history,
  onOpen,
  onDelete,
}: HistoryListProps) {
  return (
    <div className="space-y-6">
      {history.map((entry) => (
        <HistoryCard
          key={entry.id}
          entry={entry}
          onOpen={onOpen}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
