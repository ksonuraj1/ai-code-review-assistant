import Link from "next/link";
import Card from "@/src/components/CoreComponent/Card";
import { QuickAction } from "./QuickActions.types";

interface QuickActionCardProps {
  action: QuickAction;
}

export default function QuickActionCard({ action }: QuickActionCardProps) {
  const Icon = action.icon;

  return (
    <Link href={action.href}>
      <Card className="flex items-center gap-5 p-6  bg-amber-50 dark:bg-slate-800 border border-slate-700 rounded-2xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
          <Icon className="h-6 w-6 text-blue-500" />
        </div>

        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-white">{action.title}</h3>

          <p className="text-sm text-slate-400">{action.description}</p>
        </div>
      </Card>
    </Link>
  );
}
