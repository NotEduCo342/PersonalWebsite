export default function ProjectSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border border-slate-800 p-4 bg-slate-900/40 space-y-4">
      <div className="h-40 w-full rounded-lg bg-slate-800" />
      <div className="h-4 w-3/4 bg-slate-800 rounded" />
      <div className="h-3 w-full bg-slate-800 rounded" />
      <div className="h-3 w-5/6 bg-slate-800 rounded" />
      <div className="flex gap-2 pt-2">
        <div className="h-5 w-14 bg-slate-800 rounded" />
        <div className="h-5 w-10 bg-slate-800 rounded" />
        <div className="h-5 w-16 bg-slate-800 rounded" />
      </div>
    </div>
  );
}
