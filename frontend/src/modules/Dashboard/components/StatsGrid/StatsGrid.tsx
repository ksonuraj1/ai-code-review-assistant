import StatsCard from "../StatsCard";
import { LucideIcon } from "lucide-react";

interface Stat {
  title: string;
  value: number | string;
  icon: LucideIcon;
}

interface StatsGridProps {
  stats: Stat[];
}

export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatsCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
        />
      ))}
    </section>
  );
}
