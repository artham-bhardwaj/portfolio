"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { technologyExplorer } from "@/data/skills";
import { Tag } from "@/components/badges";

export function TechExplorer() {
  const [selected, setSelected] = useState(technologyExplorer[0]);

  return (
    <div className="grid overflow-hidden rounded-2xl border border-border bg-surface shadow-card lg:grid-cols-[280px_1fr]">
      <div role="tablist" aria-label="Technologies" className="flex gap-1 overflow-x-auto border-b border-border p-2 lg:flex-col lg:overflow-visible lg:border-b-0 lg:border-r">
        {technologyExplorer.map((tech) => {
          const isActive = selected.name === tech.name;
          return (
            <button
              key={tech.name}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelected(tech)}
              className={`flex shrink-0 items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm transition ${
                isActive ? "bg-surface-2 font-medium text-fg" : "text-muted hover:bg-surface-2/60 hover:text-fg"
              }`}
            >
              <span className="whitespace-nowrap">{tech.name}</span>
              <span className={`hidden h-1.5 w-1.5 rounded-full lg:block ${isActive ? "bg-accent" : "bg-transparent"}`} />
            </button>
          );
        })}
      </div>

      <div role="tabpanel" className="p-6 sm:p-8" key={selected.name}>
        <div className="fade-up">
          <p className="font-mono text-xs text-subtle">{selected.category}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">{selected.name}</h3>

          <p className="mt-5 text-xs font-medium uppercase tracking-wider text-subtle">Where I use it</p>
          <p className="mt-2 max-w-xl text-[15px] leading-7 text-muted">{selected.where}</p>

          <p className="mt-6 text-xs font-medium uppercase tracking-wider text-subtle">Related</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {selected.related.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <Link
              href={selected.projectHref}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-sm transition hover:border-border-strong"
            >
              See it in {selected.project} <ArrowRight size={14} />
            </Link>
            <a
              href={selected.githubHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm text-muted transition hover:text-fg"
            >
              Source <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
