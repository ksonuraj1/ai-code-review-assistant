interface DashboardHeaderProps {
  username: string;
}

export default function DashboardHeader({ username }: DashboardHeaderProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white">
        Welcome back, {username} 👋
      </h1>

      <p className="mt-2 text-slate-400">
        Review, analyze and improve your code using AI.
      </p>
    </div>
  );
}
