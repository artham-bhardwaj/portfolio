import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-4 py-20 text-zinc-100">
      <div className="w-full max-w-xl rounded-xl border border-zinc-800 bg-zinc-900/80 p-8 sm:p-10">
        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">404. Page Not Found</p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Given a URL that does not exist, return the user to a valid route.</h1>
        <p className="mt-4 text-sm leading-7 text-zinc-400">
          Input: <span className="font-mono text-zinc-200">currentPath = unknown</span>
        </p>
        <p className="mt-2 text-sm leading-7 text-zinc-400">
          Expected Output: <span className="font-mono text-zinc-200">&quot;/&quot;</span>
        </p>
        <p className="mt-4 text-sm text-zinc-500">Constraints: recruiterCuriosity ≥ 0</p>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200">
          Return Home <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}
