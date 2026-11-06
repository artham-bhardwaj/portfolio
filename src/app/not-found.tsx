import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden px-5 py-20">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative w-full max-w-lg text-center">
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Page not found</h1>
        <div className="mx-auto mt-8 max-w-sm rounded-xl border border-border bg-surface p-4 text-left font-mono text-xs leading-6 text-muted">
          <p><span className="text-subtle">input:</span> currentPath = <span className="text-fg">unknown</span></p>
          <p><span className="text-subtle">expected:</span> <span className="text-fg">&quot;/&quot;</span></p>
          <p><span className="text-subtle">constraints:</span> recruiterCuriosity ≥ 0</p>
        </div>
        <Link href="/" className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-fg px-5 text-sm font-medium text-bg transition hover:opacity-85">
          <ArrowLeft size={16} /> Back home
        </Link>
      </div>
    </main>
  );
}
