"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Circle, ExternalLink, GitBranch, Link2, Moon, Play, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const shouldUseLightTheme = savedTheme === "light" || (!savedTheme && window.matchMedia("(prefers-color-scheme: light)").matches);
    document.documentElement.dataset.theme = shouldUseLightTheme ? "light" : "dark";
    const frame = window.requestAnimationFrame(() => setIsLightTheme(shouldUseLightTheme));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = () => {
    const nextIsLightTheme = !isLightTheme;
    setIsLightTheme(nextIsLightTheme);
    document.documentElement.dataset.theme = nextIsLightTheme ? "light" : "dark";
    window.localStorage.setItem("portfolio-theme", nextIsLightTheme ? "light" : "dark");
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Capabilities", href: "/#capabilities" },
    { label: "Technology", href: "/#technology" },
    { label: "Projects", href: "/#projects" },
    { label: "Problem Solving", href: "/#problem-solving" },
    { label: "Experience", href: "/#experience" },
    { label: "Current", href: "/#current" },
    { label: "Resume", href: "/resume.pdf" },
  ];

  return (
    <nav className="theme-nav sticky top-0 z-30 border-b border-white/10 bg-[#0b0d12]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-sm font-medium text-zinc-100 transition hover:border-white/20">
            <span className="font-mono text-base">A_</span>
          </Link>
          <div className="hidden items-center gap-5 text-sm text-zinc-400 md:flex">
            {navItems.slice(1).map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-zinc-100">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${isLightTheme ? "dark" : "light"} theme`}
            title={`Switch to ${isLightTheme ? "dark" : "light"} theme`}
          >
            <Sun size={13} strokeWidth={2.25} className="theme-toggle__sun" aria-hidden="true" />
            <Moon size={12} strokeWidth={2.25} className="theme-toggle__moon" aria-hidden="true" />
            <span className="theme-toggle__orb" aria-hidden="true">
              {isLightTheme ? <Sun size={13} strokeWidth={2.5} /> : <Moon size={12} strokeWidth={2.5} />}
            </span>
          </button>
          <a href="https://github.com/artham" target="_blank" rel="noreferrer" className="rounded-md border border-white/10 bg-white/5 p-2 text-zinc-400 transition hover:border-white/20 hover:text-zinc-100" aria-label="GitHub profile">
            <GitBranch size={16} />
          </a>
          <a href="https://www.linkedin.com/in/artham-bhardwaj" target="_blank" rel="noreferrer" className="rounded-md border border-white/10 bg-white/5 p-2 text-zinc-400 transition hover:border-white/20 hover:text-zinc-100" aria-label="LinkedIn profile">
            <Link2 size={16} />
          </a>
          <a href="/resume.pdf" className="hidden rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-300 transition hover:border-white/20 hover:text-zinc-100 sm:inline-flex">
            Resume
          </a>
          <div className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] text-emerald-300 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Available
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-sm font-semibold text-zinc-100">
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
    <section className="rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-zinc-500">Software Engineer</p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">{name}</h1>
          <p className="mt-3 text-base leading-7 text-zinc-400">{summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1 text-xs text-zinc-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/#projects" className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200">
            View Projects <ArrowRight size={16} />
          </Link>
          <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:border-white/20 hover:text-zinc-100">
            Resume <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function StatsCard() {
  return (
    <section className="grid gap-3 rounded-xl border border-white/10 bg-white/5 p-4 sm:grid-cols-3 sm:p-5">
      <div className="rounded-lg border border-white/10 bg-zinc-950/70 p-4">
        <div className="text-2xl font-semibold text-zinc-100">1000+</div>
        <div className="mt-1 text-sm text-zinc-500">DSA Problems Solved</div>
      </div>
      <div className="rounded-lg border border-white/10 bg-zinc-950/70 p-4">
        <div className="text-2xl font-semibold text-zinc-100">2</div>
        <div className="mt-1 text-sm text-zinc-500">Featured Projects</div>
      </div>
      <div className="rounded-lg border border-white/10 bg-zinc-950/70 p-4">
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
  return <span className="rounded-full border border-white/10 bg-zinc-950/70 px-2.5 py-1 text-[11px] uppercase tracking-[0.2em] text-zinc-400">{label}</span>;
}

export function ProblemHeader({ project }: { project: { id: string; title: string; difficulty: string; status: string; topics: string[] } }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8">
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
    <div className="flex flex-wrap gap-2 rounded-lg border border-white/10 bg-zinc-950/70 p-2">
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
    <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-950/90 font-mono">
      <div className="border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.3em] text-zinc-500">Terminal</div>
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
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8">
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
        <div className="rounded-lg border border-white/10 bg-zinc-950/70 p-4 text-sm text-zinc-400">
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
    <footer className="border-t border-white/10 bg-[#0b0d12]/90">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <span>Artham Bhardwaj</span>
          <span>Software Engineer</span>
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
