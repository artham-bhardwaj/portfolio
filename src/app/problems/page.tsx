"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Footer, Navbar, DifficultyBadge, StatusBadge, TopicTag } from "@/components/ui";
import { projects } from "@/data/projects";

export default function ProblemsPage() {
  const [query, setQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All");

  const topics = useMemo(() => ["All", ...Array.from(new Set(projects.flatMap((project) => project.topics)))], [query]);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesQuery = `${project.title} ${project.topics.join(" ")}`.toLowerCase().includes(query.toLowerCase());
      const matchesTopic = selectedTopic === "All" || project.topics.includes(selectedTopic);
      return matchesQuery && matchesTopic;
    });
  }, [query, selectedTopic]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Problems</p>
              <h1 className="mt-2 text-2xl font-semibold text-zinc-100 sm:text-3xl">Engineering problems and solutions.</h1>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-950/70 px-3 py-2 text-sm text-zinc-400">
                <Search size={15} />
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search problems" className="w-full bg-transparent outline-none placeholder:text-zinc-600" />
              </label>
              <select value={selectedTopic} onChange={(e) => setSelectedTopic(e.target.value)} className="rounded-md border border-zinc-800 bg-zinc-950/70 px-3 py-2 text-sm text-zinc-300 outline-none">
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 hidden rounded-lg border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-sm text-zinc-500 md:grid md:grid-cols-[0.8fr_1.4fr_0.8fr_1.2fr_0.9fr]">
            <div>Status</div>
            <div>ID</div>
            <div>Problem</div>
            <div>Difficulty</div>
            <div>Topics</div>
          </div>

          <div className="mt-4 space-y-3">
            {filtered.length === 0 ? (
              <div className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-6 text-sm text-zinc-400">No problems found.</div>
            ) : (
              filtered.map((project) => (
                <Link key={project.slug} href={`/problems/${project.slug}`} className="block rounded-lg border border-zinc-800 bg-zinc-950/70 p-4 transition hover:border-zinc-700 hover:bg-zinc-900/80 md:grid md:grid-cols-[0.8fr_1.4fr_0.8fr_1.2fr_0.9fr] md:items-center md:gap-3">
                  <div><StatusBadge status={project.status} /></div>
                  <div className="text-sm font-medium text-zinc-100">{project.id}. {project.title}</div>
                  <div><DifficultyBadge difficulty={project.difficulty} /></div>
                  <div className="mt-2 flex flex-wrap gap-2 md:mt-0">
                    {project.topics.slice(0, 3).map((topic) => <TopicTag key={topic} label={topic} />)}
                  </div>
                  <div className="mt-2 text-sm text-zinc-500 md:mt-0">Solution</div>
                </Link>
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
