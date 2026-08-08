import { AlertCircle } from "lucide-react";

interface FindingCardProps {
  title: string;
  description: string;
  severity: "Low" | "Medium" | "High";
}

const severityStyles = {
  Low: {
    badge: "bg-green-500/10 text-green-400 border-green-500/20",
    icon: "text-green-400",
  },
  Medium: {
    badge: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    icon: "text-yellow-400",
  },
  High: {
    badge: "bg-red-500/10 text-red-400 border-red-500/20",
    icon: "text-red-400",
  },
};

export default function FindingCard({
  title,
  description,
  severity,
}: FindingCardProps) {
  const style = severityStyles[severity];

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-3">
          <AlertCircle className={`mt-1 h-5 w-5 ${style.icon}`} />

          <div>
            <h4 className="font-semibold text-white">{title}</h4>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              {description}
            </p>
          </div>
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium ${style.badge}`}
        >
          {severity}
        </span>
      </div>
    </div>
  );
}
