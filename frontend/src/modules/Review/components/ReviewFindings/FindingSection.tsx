import FindingCard from "./FindingCard";
import { Finding } from "./ReviewFindings.types";

interface FindingSectionProps {
  title: string;
  findings: Finding[];
}

export default function FindingSection({
  title,
  findings,
}: FindingSectionProps) {
  if (findings.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>

        <span className="rounded-full bg-slate-700 px-3 py-1 text-xs text-slate-300">
          {findings.length}
        </span>
      </div>

      <div className="space-y-3">
        {findings.map((finding, index) => (
          <FindingCard key={`${title}-${index}`} {...finding} />
        ))}
      </div>
    </div>
  );
}
