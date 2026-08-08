import { Lightbulb } from "lucide-react";

interface ImprovementItemProps {
  text: string;
  index: number;
  isLast?: boolean;
}

export default function ImprovementItem({
  text,
  index,
  isLast = false,
}: ImprovementItemProps) {
  return (
    <div
      className={`
        flex
        items-start
        gap-4
        py-4
        ${!isLast ? "border-b border-slate-700" : ""}
      `}
    >
      <div
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-amber-500/10
          text-sm
          font-semibold
          text-amber-400
        "
      >
        {index + 1}
      </div>

      <div className="flex gap-3">
        <Lightbulb
          className="
            mt-0.5
            h-5
            w-5
            text-amber-400
          "
        />

        <p className="leading-6 text-slate-300">{text}</p>
      </div>
    </div>
  );
}
