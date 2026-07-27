import Link from "next/link";
import { Footer, Navbar, StatusBadge } from "@/components/ui";
import { projects } from "@/data/projects";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Solutions</p>
          <h1 className="mt-2 text-2xl font-semibold text-zinc-100 sm:text-3xl">Submission history.</h1>
          <div className="mt-6 space-y-3">
            {projects.map((project) => (
              <Link key={project.slug} href={`/problems/${project.slug}`} className="flex flex-col gap-3 rounded-lg border border-zinc-800 bg-zinc-950/70 p-4 transition hover:border-zinc-700 hover:bg-zinc-900 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-medium text-zinc-100">Accepted {project.title}</div>
                  <div className="mt-1 text-sm text-zinc-500">{project.id} • {project.topics.slice(0, 3).join(" • ")}</div>
                </div>
                <StatusBadge status={project.status} />
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
