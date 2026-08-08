import Card from "@/src/components/CoreComponent/Card";
import ImprovementItem from "./ImprovementItem";
import { ReviewImprovementsProps } from "./ReviewImprovements.types";

export default function ReviewImprovements({
  improvements,
}: ReviewImprovementsProps) {
  if (!improvements.length) {
    return null;
  }

  return (
    <Card className="mt-6 p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Recommended Improvements
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Suggested actions to improve code quality.
            </p>
          </div>

          <span
            className="
              rounded-full
              bg-amber-500/10
              px-3
              py-1
              text-sm
              font-medium
              text-amber-400
            "
          >
            {improvements.length} Suggestions
          </span>
        </div>

        <div>
          {improvements.map((item, index) => (
            <ImprovementItem
              key={item}
              index={index}
              text={item}
              isLast={index === improvements.length - 1}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
