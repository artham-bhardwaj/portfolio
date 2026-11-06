// Renders a project's architecture steps as a vertical pipeline in a window frame.
export function ArchitectureFlow({ steps, label = "architecture.flow" }: { steps: string[]; label?: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-bg">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="ml-2 font-mono text-[11px] text-subtle">{label}</span>
      </div>
      <ol className="relative p-5">
        {steps.map((step, i) => (
          <li key={step} className="relative flex gap-4 pb-5 last:pb-0">
            {i < steps.length - 1 && <span className="absolute left-[13px] top-7 bottom-0 w-px bg-gradient-to-b from-accent/50 to-border" aria-hidden="true" />}
            <span className="relative z-10 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-accent/30 bg-accent-soft font-mono text-[11px] font-medium text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="pt-1 text-sm leading-6 text-muted">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
