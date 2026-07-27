"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Circle, ExternalLink, GitBranch, Link2, Play } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-30 border-b border-zinc-800/90 bg-zinc-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 rounded-md border border-zinc-800 px-2.5 py-1.5 text-sm font-medium text-zinc-100">
            <span className="font-mono text-base">A_</span>
          </Link>
          <div className="hidden items-center gap-5 text-sm text-zinc-400 md:flex">
            <Link href="/problems" className="transition hover:text-zinc-100">Problems</Link>
            <Link href="/solutions" className="transition hover:text-zinc-100">Solutions</Link>
            <Link href="/career" className="transition hover:text-zinc-100">Career</Link>
            <Link href="/profile" className="transition hover:text-zinc-100">Profile</Link>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href="https://github.com/artham" target="_blank" rel="noreferrer" className="rounded-md border border-zinc-800 p-2 text-zinc-400 transition hover:border-zinc-700 hover:text-zinc-100">
            <GitBranch size={16} />
          </a>
          <a href="https://www.linkedin.com/in/artham-bhardwaj" target="_blank" rel="noreferrer" className="rounded-md border border-zinc-800 p-2 text-zinc-400 transition hover:border-zinc-700 hover:text-zinc-100">
            <Link2 size={16} />
          </a>
          <a href="/resume.pdf" className="hidden rounded-md border border-zinc-800 px-3 py-2 text-sm text-zinc-300 transition hover:border-zinc-700 hover:text-zinc-100 sm:inline-flex">
            resume.pdf
          </a>
          <div className="hidden items-center gap-2 rounded-full border border-zinc-800 px-2.5 py-1 text-xs text-zinc-400 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> Available
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-sm font-semibold text-zinc-100">
            AB
          </div>
        </div>
      </div>
    </nav>
  );
}

export function ProfileHeader({
  name,
  title,
  summary,
  tags,
}: {
  name: string;
  title: string;
  summary: string;
  tags: string[];
}) {
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-zinc-500">Software Engineer</p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">{name}</h1>
          <p className="mt-3 text-base leading-7 text-zinc-400">{summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-zinc-800 bg-zinc-950/70 px-3 py-1 text-xs text-zinc-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/problems" className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200">
            View Problems <ArrowRight size={16} />
          </Link>
          <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-zinc-600 hover:text-zinc-100">
            Resume <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function StatsCard() {
  return (
    <section className="grid gap-3 rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 sm:grid-cols-3 sm:p-5">
      <div className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-4">
        <div className="text-2xl font-semibold text-zinc-100">1000+</div>
        <div className="mt-1 text-sm text-zinc-500">DSA Problems Solved</div>
      </div>
      <div className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-4">
        <div className="text-2xl font-semibold text-zinc-100">2</div>
        <div className="mt-1 text-sm text-zinc-500">Featured Projects</div>
      </div>
      <div className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-4">
        <div className="text-2xl font-semibold text-zinc-100">System Engineer</div>
        <div className="mt-1 text-sm text-zinc-500">Current Role</div>
      </div>
    </section>
  );
}

export function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const tone =
    difficulty === "Hard"
      ? "border-amber-800/40 bg-amber-500/10 text-amber-300"
      : difficulty === "Medium"
        ? "border-sky-800/40 bg-sky-500/10 text-sky-300"
        : difficulty === "Easy"
          ? "border-emerald-800/40 bg-emerald-500/10 text-emerald-300"
          : "border-zinc-700 bg-zinc-900 text-zinc-300";

  return <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${tone}`}>{difficulty}</span>;
}

export function StatusBadge({ status }: { status: string }) {
  const isAccepted = status === "Accepted";
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium ${isAccepted ? "border-emerald-800/40 bg-emerald-500/10 text-emerald-300" : "border-zinc-700 bg-zinc-900 text-zinc-300"}`}>
      {isAccepted ? <CheckCircle2 size={12} /> : <Circle size={12} />}
      {status}
    </span>
  );
}

export function TopicTag({ label }: { label: string }) {
  return <span className="rounded-full border border-zinc-800 bg-zinc-950/70 px-2.5 py-1 text-[11px] uppercase tracking-[0.2em] text-zinc-400">{label}</span>;
}

export function ProblemHeader({ project }: { project: { id: string; title: string; difficulty: string; status: string; topics: string[] } }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">{project.id}. Engineering Challenge</p>
          <h1 className="mt-2 text-2xl font-semibold text-zinc-100 sm:text-3xl">{project.title}</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <DifficultyBadge difficulty={project.difficulty} />
          <StatusBadge status={project.status} />
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.topics.map((topic) => (
          <TopicTag key={topic} label={topic} />
        ))}
      </div>
    </div>
  );
}

export function ProjectTabs({ activeTab, onChange }: { activeTab: string; onChange: (tab: string) => void }) {
  const tabs = ["Description", "My Solution", "Architecture", "Demo"];
  return (
    <div className="flex flex-wrap gap-2 rounded-lg border border-zinc-800 bg-zinc-950/70 p-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`rounded-md px-3 py-2 text-sm transition ${activeTab === tab ? "bg-zinc-100 text-zinc-950" : "text-zinc-400 hover:text-zinc-100"}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export function Terminal({ lines }: { lines: string[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/90 font-mono">
      <div className="border-b border-zinc-800 px-4 py-3 text-xs uppercase tracking-[0.3em] text-zinc-500">Terminal</div>
      <div className="space-y-2 p-4 text-sm text-zinc-300">
        {lines.map((line, index) => (
          <motion.div
            key={`${line}-${index}`}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.08 }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function DailyChallenge() {
  const [isRunning, setIsRunning] = useState(false);
  const [lines, setLines] = useState<string[]>([]);

  const handleRun = () => {
    setIsRunning(true);
    setLines([]);

    const sequence = [
      "> Compiling candidate...",
      "> Loading experience...",
      "> Inspecting projects...",
      "✓ Backend Engineering",
      "✓ Problem Solving",
      "✓ SentinelX",
      "✓ Wise Trade",
      "✓ Education",
      "4/4 checks passed",
      "Verdict: INTERVIEW ✓",
    ];

    let index = 0;
    const timer = window.setInterval(() => {
      setLines((prev) => [...prev, sequence[index]]);
      index += 1;
      if (index >= sequence.length) {
        window.clearInterval(timer);
        setIsRunning(false);
      }
    }, 220);
  };

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Daily Challenge</p>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">Hire Artham Bhardwaj</h2>
          <p className="mt-2 text-sm leading-7 text-zinc-400">Given a software engineer with backend engineering experience, problem-solving experience and production-oriented projects, determine whether the candidate should proceed to an engineering conversation.</p>
        </div>
        <button onClick={handleRun} className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition hover:border-zinc-600 hover:text-zinc-100">
          {isRunning ? "Running" : "Run"} <Play size={15} />
        </button>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-4 text-sm text-zinc-400">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-500">Editor</div>
          <pre className="whitespace-pre-wrap font-mono text-sm text-zinc-300">
{`class Recruiter {
    public boolean shouldInterview(Candidate candidate) {
        return candidate.hasBackendExperience()
            && candidate.hasStrongProjects()
            && candidate.canSolveProblems();
    }
}`}
          </pre>
        </div>
        <div>
          <Terminal lines={lines.length > 0 ? lines : ["> Ready to run the candidate check."]} />
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <span>main</span>
          <span>UTF-8</span>
          <span>Java</span>
          <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Available for opportunities</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href="https://github.com/artham" className="transition hover:text-zinc-100">GitHub</a>
          <a href="https://www.linkedin.com/in/artham-bhardwaj" className="transition hover:text-zinc-100">LinkedIn</a>
          <a href="/resume.pdf" className="transition hover:text-zinc-100">Resume</a>
          <a href="mailto:contact@artham.dev" className="transition hover:text-zinc-100">Contact</a>
        </div>
      </div>
    </footer>
  );
}
