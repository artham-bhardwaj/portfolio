import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StatusBadge } from "@/components/badges";
import { projects, splitTitle } from "@/data/projects";

export const metadata: Metadata = { title: "Solutions" };

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <header className="fade-up">
          <p className="font-mono text-xs text-accent">Solutions</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Submission history</h1>
        </header>
        <ul className="mt-12 divide-y divide-border rounded-2xl border border-border bg-surface">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link href={`/problems/${project.slug}`} className="group flex items-center justify-between gap-4 p-5 transition hover:bg-surface-2/60 sm:p-6">
                <div className="min-w-0">
                  <p className="font-medium">{splitTitle(project.title).name}</p>
                  <p className="mt-1 truncate font-mono text-xs text-subtle">
                    #{project.id} · {project.topics.slice(0, 3).join(" · ")}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <StatusBadge status={project.status} />
                  <ArrowRight size={16} className="text-subtle transition group-hover:translate-x-0.5 group-hover:text-fg" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
