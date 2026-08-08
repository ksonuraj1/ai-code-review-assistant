import { ArrowRight } from "lucide-react";
import { NextStepItemProps } from "./NextSteps.types";

export default function NextStepItem({ index, step }: NextStepItemProps) {
  return (
    <div
      className="
        flex
        items-start
        gap-4
        border-b
        border-slate-700/60
        py-5
        last:border-none
      "
    >
      {/* Number */}

      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-amber-500/15
          font-semibold
          text-amber-400
        "
      >
        {index + 1}
      </div>

      {/* Content */}

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <ArrowRight size={18} className="text-amber-400" />

          <p className="text-base text-slate-200">{step}</p>
        </div>
      </div>
    </div>
  );
}
