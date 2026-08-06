import Button from "../Button/Button";

interface HistoryHeaderProps {
  onClear: () => void;
}

export default function HistoryHeader({ onClear }: HistoryHeaderProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white">Review History</h1>

        <p className="mt-2 text-sm text-slate-400">
          View your previous review sessions and inspect AI feedback.
        </p>
      </div>

      <Button onClick={onClear}>Clear History</Button>
    </div>
  );
}
