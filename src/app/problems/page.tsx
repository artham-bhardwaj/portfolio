"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DifficultyBadge, StatusBadge, Tag } from "@/components/badges";
import { projects, splitTitle } from "@/data/projects";

// Most-used technologies first, capped so the filter row stays short.
const topicCounts = projects.flatMap((p) => p.topics).reduce<Record<string, number>>((acc, t) => ({ ...acc, [t]: (acc[t] ?? 0) + 1 }), {});
const topics = ["All", ...Object.keys(topicCounts).sort((a, b) => topicCounts[b] - topicCounts[a]).slice(0, 12)];

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesQuery = `${project.title} ${project.topics.join(" ")}`.toLowerCase().includes(q);
      const matchesTopic = selectedTopic === "All" || project.topics.includes(selectedTopic);
      return matchesQuery && matchesTopic;
    });
  }, [query, selectedTopic]);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <header className="fade-up">
          <p className="font-mono text-xs text-accent">Projects</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Engineering problems I&apos;ve worked on</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">Each entry is framed as a problem: what needed solving, how I solved it, and the architecture behind it.</p>
        </header>

        <div className="mt-10 flex flex-col gap-4">
          <label className="flex h-11 items-center gap-2.5 rounded-xl border border-border bg-surface px-4 text-sm text-subtle focus-within:border-border-strong sm:max-w-sm">
            <Search size={16} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tech…"
              aria-label="Search projects"
              className="w-full bg-transparent text-fg outline-none placeholder:text-subtle"
            />
          </label>
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by technology">
            {topics.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => setSelectedTopic(topic)}
                aria-pressed={selectedTopic === topic}
                className={`rounded-full border px-3 py-1 text-xs transition ${
                  selectedTopic === topic ? "border-fg bg-fg text-bg" : "border-border text-muted hover:border-border-strong hover:text-fg"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-3">
          {filtered.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted">No projects match that search.</p>
          ) : (
            filtered.map((project) => {
              const { name, tagline } = splitTitle(project.title);
              return (
                <Link
                  key={project.slug}
                  href={`/problems/${project.slug}`}
                  className="group grid gap-4 rounded-2xl border border-border bg-surface p-5 transition hover:border-border-strong hover:shadow-card sm:p-6 md:grid-cols-[1fr_240px] md:items-center"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs text-subtle">#{project.id}</span>
                      <StatusBadge status={project.status} />
                      <DifficultyBadge difficulty={project.difficulty} />
                    </div>
                    <h2 className="mt-3 text-lg font-semibold">
                      {name}
                      {tagline && <span className="font-normal text-muted"> — {tagline}</span>}
                    </h2>
                    <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-muted">{project.problemStatement}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.topics.map((topic) => (
                        <Tag key={topic}>{topic}</Tag>
                      ))}
                    </div>
                  </div>
                  {project.images?.[0] ? (
                    <div className="overflow-hidden rounded-lg border border-border bg-surface-2">
                      <Image
                        src={project.images[0].src}
                        alt=""
                        width={project.images[0].width}
                        height={project.images[0].height}
                        sizes="(min-width: 768px) 240px, 100vw"
                        className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm text-muted transition group-hover:text-fg md:justify-self-end">
                      View <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
                    </span>
                  )}
                </Link>
              );
            })
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
