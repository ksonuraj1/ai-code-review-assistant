import { QuickAction } from "./QuickActions.types";
import QuickActionCard from "./QuickActionsCard";

interface QuickActionsProps {
  actions: QuickAction[];
}

export default function QuickActions({ actions }: QuickActionsProps) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-white">Quick Actions</h2>
        <p className="mt-1 text-slate-400">Jump to the most common tasks.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {actions.map((action) => (
          <QuickActionCard key={action.title} action={action} />
        ))}
      </div>
    </section>
  );
}
