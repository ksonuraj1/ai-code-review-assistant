import Card from "@/src/components/Card/Card";
import NextStepItem from "./NextStepItem";
import { NextStepsProps } from "./NextSteps.types";

export default function NextSteps({ steps }: NextStepsProps) {
  if (!steps?.length) return null;

  return (
    <Card className="mt-8">
      <div className="mb-6">
        <h2 className="text-4xl font-bold text-white">Next Steps</h2>

        <p className="mt-2 text-slate-400">
          Recommended actions before merging or deploying your code.
        </p>
      </div>

      <div>
        {steps.map((step, index) => (
          <NextStepItem key={index} index={index} step={step} />
        ))}
      </div>
    </Card>
  );
}
