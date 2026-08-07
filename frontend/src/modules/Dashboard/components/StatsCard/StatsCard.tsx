import Card from "@/src/components/CoreComponent/Card";
import { StatsCardProps } from "./StatsCard.types";

export default function StatsCard({
  title,
  value,
  icon: Icon,
}: StatsCardProps) {
  return (
    <Card className="flex items-center justify-between p-6 bg-amber-50 dark:bg-slate-800 border border-slate-700 rounded-2xl">
      <div className="space-y-2">
        <p className="text-sm text-slate-400">{title}</p>
        <h3 className="text-3xl font-bold text-white">{value}</h3>
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
        <Icon className="h-6 w-6 text-blue-500" />
      </div>
    </Card>
  );
}
