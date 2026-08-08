"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Database, FileText, Rocket, Sparkles, Workflow } from "lucide-react";
import { useState } from "react";
import { Footer, Navbar } from "@/components/ui";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { capabilityGroups, problemSolvingCategories, technologyExplorer } from "@/data/skills";

const questionCards = [
  { label: "What can I build?", href: "#capabilities" },
  { label: "What technologies do I use?", href: "#technology" },
  { label: "What have I built?", href: "#projects" },
  { label: "How do I solve problems?", href: "#problem-solving" },
  { label: "What am I working on?", href: "#current" },
  { label: "Why should you hire me?", href: "#why-hire-me" },
];

export default function Home() {
  const [selectedTech, setSelectedTech] = useState(technologyExplorer[0]);
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="min-h-screen bg-[#0b0d12] text-zinc-100">
      <Navbar />

      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <section className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8 lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">ARTHAM BHARDWAJ</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">Software Engineer</h1>
              <p className="mt-4 text-base tracking-[0.16em] text-zinc-400 sm:text-lg">Java • Spring Boot • Backend • System Design</p>
              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">{profile.summary}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={profile.resume} className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-white">
                  Resume <ArrowUpRight size={16} />
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-zinc-200 transition hover:border-white/20 hover:bg-white/10">
                  GitHub <ArrowUpRight size={16} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-zinc-200 transition hover:border-white/20 hover:bg-white/10">
                  LinkedIn <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-[#10141d] p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.32em] text-zinc-500">WHAT WOULD YOU LIKE TO KNOW?</p>
              <div className="mt-5 grid gap-3">
                {questionCards.map((card) => (
                  <Link
                    key={card.label}
                    href={card.href}
                    className="group rounded-xl border border-white/10 bg-zinc-900/80 p-4 text-left transition hover:border-zinc-600 hover:bg-zinc-900"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-zinc-200">{card.label}</span>
                      <ArrowRight size={16} className="text-zinc-500 transition group-hover:translate-x-1 group-hover:text-zinc-100" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="scroll-mt-24 rounded-[24px] border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">What can I build?</p>
              <h2 className="mt-3 text-2xl font-semibold text-zinc-100 sm:text-3xl">Engineering capabilities</h2>
            </div>
            <div className="hidden text-sm text-zinc-500 sm:block">Built around problem solving and backend delivery</div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {capabilityGroups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-white/10 bg-[#0f141b] p-5 transition hover:border-zinc-600 hover:bg-[#111924]">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-zinc-900 text-zinc-200">
                  {group.title.includes("Backend") ? <Workflow size={18} /> : group.title.includes("Data") ? <Database size={18} /> : group.title.includes("Observ") ? <Sparkles size={18} /> : <Rocket size={18} />}
                </div>
                <h3 className="text-lg font-semibold text-zinc-100">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{group.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-300">
                      {technology}
                    </span>
                  ))}
                </div>
                <Link href={group.projectHref} className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-100 hover:text-zinc-300">
                  See {group.project} <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="technology" className="scroll-mt-24 rounded-[24px] border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">What technologies do I use?</p>
            <h2 className="mt-3 text-2xl font-semibold text-zinc-100 sm:text-3xl">Technology explorer</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-2">
              {technologyExplorer.map((tech) => (
                <button
                  key={tech.name}
                  type="button"
                  onClick={() => setSelectedTech(tech)}
                  className={`rounded-xl border px-4 py-3 text-left transition ${selectedTech.name === tech.name ? "border-zinc-500 bg-zinc-900 text-zinc-100" : "border-white/10 bg-[#0f141b] text-zinc-300 hover:border-zinc-600 hover:bg-zinc-900"}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-medium">{tech.name}</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">{tech.category}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="rounded-[24px] border border-white/10 bg-[#10141d] p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">{selectedTech.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-zinc-100">{selectedTech.name}</h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-300">{selectedTech.project}</span>
              </div>

              <div className="mt-6 space-y-5 text-sm leading-7 text-zinc-300">
                <div>
                  <h4 className="text-xs uppercase tracking-[0.25em] text-zinc-500">Where I use it</h4>
                  <p className="mt-2">{selectedTech.where}</p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-[0.25em] text-zinc-500">Related knowledge</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedTech.related.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-zinc-950/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-[0.25em] text-zinc-500">Evidence</h4>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <Link href={selectedTech.projectHref} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:border-white/20 hover:bg-white/10">
                      View {selectedTech.project}
                    </Link>
                    <a href={selectedTech.githubHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:border-white/20 hover:bg-white/10">
                      GitHub <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 rounded-[24px] border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">What have I built?</p>
            <h2 className="mt-3 text-2xl font-semibold text-zinc-100 sm:text-3xl">Project case studies</h2>
          </div>

          <div className="grid gap-5">
            {featuredProjects.map((project) => (
              <article key={project.slug} className="rounded-[24px] border border-white/10 bg-[#10141d] p-6">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl font-semibold text-zinc-100">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-300">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:border-white/20 hover:bg-white/10">
                        GitHub <ArrowUpRight size={14} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <Link href={project.demoUrl} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:border-white/20 hover:bg-white/10">
                        Case Study <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <div className="space-y-5 rounded-2xl border border-white/10 bg-zinc-950/70 p-5">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">The problem</p>
                      <p className="mt-2 text-sm leading-7 text-zinc-300">{project.problemStatement}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">The solution</p>
                      <p className="mt-2 text-sm leading-7 text-zinc-300">{project.mySolution}</p>
                    </div>
                  </div>

                  <div className="space-y-5 rounded-2xl border border-white/10 bg-zinc-950/70 p-5">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">Technologies</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.topics.map((topic) => (
                          <span key={topic} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-300">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">Architecture</p>
                      <div className="mt-4 space-y-3">
                        {project.architecture.map((step, index) => (
                          <div key={step} className="flex items-center gap-3 text-sm text-zinc-300">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-[10px] text-zinc-400">
                              {index + 1}
                            </span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="problem-solving" className="scroll-mt-24 rounded-[24px] border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">How do I solve problems?</p>
              <h2 className="mt-3 text-2xl font-semibold text-zinc-100 sm:text-3xl">Problem solving workflow</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/70 px-3 py-2 text-sm text-zinc-300">
              <span className="text-xl font-semibold text-zinc-100">1000+</span>
              <span>DSA Problems</span>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[#10141d] p-6">
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-zinc-300">
              {[
                "Problem",
                "Understand Constraints",
                "Identify Pattern",
                "Choose Approach",
                "Analyze Complexity",
                "Implement",
                "Validate",
              ].map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">{step}</span>
                  {index < 6 && <ArrowRight size={14} className="text-zinc-500" />}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Major DSA categories</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {problemSolvingCategories.map((category) => (
                  <span key={category} className="rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-zinc-300">
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://leetcode.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:border-white/20 hover:bg-white/10">
                LeetCode <ArrowUpRight size={14} />
              </a>
              <a href="https://www.geeksforgeeks.org" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:border-white/20 hover:bg-white/10">
                GeeksforGeeks <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

        <section id="current" className="scroll-mt-24 rounded-[24px] border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">What am I working on?</p>
            <h2 className="mt-3 text-2xl font-semibold text-zinc-100 sm:text-3xl">Current focus</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-[#10141d] p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Currently</p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-zinc-300">
                {profile.currentFocus.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-zinc-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-[#10141d] p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Recently completed</p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-zinc-300">
                {profile.recentWork.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-zinc-400">Last updated: {profile.lastUpdated}</p>
            </div>
          </div>
        </section>

        <section id="why-hire-me" className="scroll-mt-24 rounded-[24px] border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Why should you hire me?</p>
            <h2 className="mt-3 text-2xl font-semibold text-zinc-100 sm:text-3xl">Evidence-based strengths</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-[#10141d] p-5">
              <BriefcaseBusiness className="mb-4 text-zinc-100" size={18} />
              <h3 className="text-lg font-semibold text-zinc-100">Backend focus</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">Java + Spring Boot + REST APIs + SQL</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#10141d] p-5">
              <FileText className="mb-4 text-zinc-100" size={18} />
              <h3 className="text-lg font-semibold text-zinc-100">Problem solving</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">1000+ DSA problems across fundamental patterns</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#10141d] p-5">
              <Rocket className="mb-4 text-zinc-100" size={18} />
              <h3 className="text-lg font-semibold text-zinc-100">Building</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">Real projects in observability and data-driven backend systems</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#10141d] p-5">
              <Workflow className="mb-4 text-zinc-100" size={18} />
              <h3 className="text-lg font-semibold text-zinc-100">Experience</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">System Engineer at Tata Consultancy Services</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.resume} className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-white">
              Download Resume <ArrowUpRight size={14} />
            </a>
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 rounded-[24px] border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Experience</p>
            <h2 className="mt-3 text-2xl font-semibold text-zinc-100 sm:text-3xl">Current role</h2>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[#10141d] p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-zinc-100">{experience.currentRole}</h3>
                <p className="mt-2 text-base text-zinc-300">{experience.company}</p>
              </div>
              <p className="text-sm text-zinc-400">{experience.dates}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {experience.highlights.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-zinc-950/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
