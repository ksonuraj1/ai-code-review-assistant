export default function ReviewSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-6 w-2/5 rounded bg-slate-700" />

      <div className="h-4 w-full rounded bg-slate-800" />
      <div className="h-4 w-5/6 rounded bg-slate-800" />
      <div className="h-4 w-3/4 rounded bg-slate-800" />

      <div className="pt-4">
        <div className="h-40 rounded-xl bg-slate-900" />
      </div>
    </div>
  );
}
