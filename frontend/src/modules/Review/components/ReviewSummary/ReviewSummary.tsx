import Card from "@/src/components/CoreComponent/Card";
import { ReviewSummaryProps } from "./ReviewSummary.types";

export default function ReviewSummary({
  overallScore,
  overallComment,
  riskLevel,
}: ReviewSummaryProps) {
  const riskColor = {
    Low: "bg-green-500/10 text-green-400 border-green-500/20",
    Medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    High: "bg-red-500/10 text-red-400 border-red-500/20",
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-xl font-semibold text-white">Overall Review</h2>

          <p className="mt-1 text-sm text-slate-400">
            AI generated summary of your source code.
          </p>
        </div>

        {/* Score & Risk */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Overall Score</p>

            <h3 className="mt-2 text-5xl font-bold text-white">
              {overallScore}
              <span className="text-2xl text-slate-400">/10</span>
            </h3>
          </div>

          <div
            className={`rounded-full border px-4 py-2 text-sm font-medium ${riskColor[riskLevel]}`}
          >
            {riskLevel} Risk
          </div>
        </div>

        {/* Comment */}
        <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-4">
          <p className="leading-7 text-slate-300">{overallComment}</p>
        </div>
      </div>
    </Card>
  );
}
