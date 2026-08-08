import { CheckCircle2 } from "lucide-react";

interface GoodPracticeItemProps {
  text: string;
  isLast?: boolean;
}

export default function GoodPracticeItem({
  text,
  isLast = false,
}: GoodPracticeItemProps) {
  return (
    <div
      className={`
        flex
        items-start
        gap-3
        py-4
        ${!isLast ? "border-b border-slate-700" : ""}
      `}
    >
      <CheckCircle2
        className="
          mt-0.5
          h-5
          w-5
          shrink-0
          text-green-400
        "
      />

      <p className="leading-6 text-slate-300">{text}</p>
    </div>
  );
}
