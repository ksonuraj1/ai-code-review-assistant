import Card from "@/src/components/CoreComponent/Card";
import GoodPracticeItem from "./GoodPracticeItem";
import { ReviewGoodPracticesProps } from "./ReviewGoodPractices.types";

export default function ReviewGoodPractices({
  goodPractices,
}: ReviewGoodPracticesProps) {
  if (!goodPractices.length) {
    return null;
  }

  return (
    <Card className="mt-6 p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">Good Practices</h2>

          <p className="mt-1 text-sm text-slate-400">
            Positive patterns identified by AI.
          </p>
        </div>

        <div>
          {goodPractices.map((practice, index) => (
            <GoodPracticeItem
              key={practice}
              text={practice}
              isLast={index === goodPractices.length - 1}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
