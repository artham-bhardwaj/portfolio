"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Footer, Navbar, ProblemHeader, ProjectTabs } from "@/components/ui";
import { projects } from "@/data/projects";
import { notFound, useParams } from "next/navigation";

export default function ProblemDetailPage() {
  const params = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState("Description");

  const project = useMemo(() => projects.find((item) => item.slug === params.slug), [params.slug]);

  if (!project) {
    notFound();
  }

  const renderContent = () => {
    switch (activeTab) {
      case "My Solution":
        return (
          <div className="space-y-4 text-sm leading-7 text-zinc-400">
            <p>{project.mySolution}</p>
            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-3 py-2 text-sm text-zinc-200 transition hover:border-zinc-600">
                  View GitHub <ExternalLink size={15} />
                </a>
              )}
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-3 py-2 text-sm text-zinc-200 transition hover:border-zinc-600">
                  Live Demo <ArrowRight size={15} />
                </a>
              )}
            </div>
          </div>
        );
      case "Architecture":
        return (
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-6">
            <div className="flex flex-col gap-4 text-sm text-zinc-300">
              {project.architecture.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                  <span>{step}</span>
                  {index < project.architecture.length - 1 && <span className="text-zinc-600">↓</span>}
                </div>
              ))}
            </div>
          </div>
        );
      case "Demo":
        return (
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-6 text-sm leading-7 text-zinc-400">
            <p>This project is presented as a case study. The experience and implementation details can be updated through the portfolio data model.</p>
          </div>
        );
      default:
        return (
          <div className="space-y-4 text-sm leading-7 text-zinc-400">
            <p>{project.description}</p>
            <div>
              <h2 className="text-base font-semibold text-zinc-100">Requirements</h2>
              <ul className="mt-3 space-y-2">
                {project.requirements.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <ProblemHeader project={project} />
        <ProjectTabs activeTab={activeTab} onChange={setActiveTab} />
        <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-8">{renderContent()}</section>
      </main>
      <Footer />
    </div>
  );
}
