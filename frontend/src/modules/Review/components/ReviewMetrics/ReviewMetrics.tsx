import Card from "@/src/components/CoreComponent/Card";
import { ReviewMetricsProps } from "./ReviewMetrics.types";
import MetricRow from "./MterixRow";

export default function ReviewMetrics({ metrics }: ReviewMetricsProps) {
  const metricItems = [
    { label: "Correctness", value: metrics.correctness },
    { label: "Performance", value: metrics.performance },
    { label: "Readability", value: metrics.readability },
    { label: "Maintainability", value: metrics.maintainability },
    { label: "Security", value: metrics.security },
    { label: "Best Practices", value: metrics.bestPractices },
    { label: "Scalability", value: metrics.scalability },
  ];
  return (
    <Card className="mt-6 p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Code Quality Metrics
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            AI evaluation across different quality dimensions.
          </p>
        </div>

        <div className="space-y-5">
          {metricItems.map((metric) => (
            <MetricRow
              key={metric.label}
              label={metric.label}
              value={metric.value}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
