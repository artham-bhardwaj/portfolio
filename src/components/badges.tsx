import { CheckCircle2, CircleDashed } from "lucide-react";

export function DifficultyBadge({ difficulty }: { difficulty: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs font-medium text-muted">
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          difficulty === "Hard" ? "bg-amber-500" : difficulty === "Medium" ? "bg-sky-500" : difficulty === "Easy" ? "bg-emerald-500" : "bg-violet-500"
        }`}
      />
      {difficulty === "∞" ? "Ongoing" : difficulty}
    </span>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const done = status === "Accepted";
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${
        done ? "border-success/25 bg-success/10 text-success" : "border-border bg-surface-2 text-muted"
      }`}
    >
      {done ? <CheckCircle2 size={12} /> : <CircleDashed size={12} />}
      {done ? "Shipped" : status}
    </span>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}
