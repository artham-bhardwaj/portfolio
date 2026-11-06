import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DifficultyBadge, StatusBadge, Tag } from "@/components/badges";
import { ArchitectureFlow } from "@/components/architecture-flow";
import { Gallery } from "@/components/gallery";
import { ResponsePanel, swingExample } from "@/components/project-media";
import { GitHubIcon } from "@/components/icons";
import { projects, splitTitle } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/problems/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: splitTitle(project.title).name, description: project.problemStatement };
}

export default async function CaseStudyPage({ params }: PageProps<"/problems/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const { name, tagline } = splitTitle(project.title);
  // Skip links that point back at this page or the home page.
  const showDemo = project.demoUrl && project.demoUrl !== `/problems/${project.slug}` && project.demoUrl !== "/";

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <Link href="/problems" className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-fg">
          <ArrowLeft size={14} /> All projects
        </Link>

        <header className="fade-up mt-8 border-b border-border pb-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-subtle">#{project.id}</span>
            <StatusBadge status={project.status} />
            <DifficultyBadge difficulty={project.difficulty} />
            <span className="font-mono text-xs text-subtle">
              {project.kind} · {project.year}
            </span>
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">{name}</h1>
          {tagline && <p className="mt-2 text-xl text-accent">{tagline}</p>}
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{project.problemStatement}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center gap-2 rounded-full bg-fg px-4 text-sm font-medium text-bg transition hover:opacity-85">
                Try it live, free <ArrowUpRight size={14} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm transition ${
                  project.liveUrl ? "border border-border hover:border-border-strong" : "bg-fg font-medium text-bg hover:opacity-85"
                }`}
              >
                <GitHubIcon size={15} /> View source
              </a>
            )}
            {showDemo && (
              <Link href={project.demoUrl!} className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-sm transition hover:border-border-strong">
                Open <ArrowRight size={14} />
              </Link>
            )}
          </div>

          {project.highlights && (
            <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {project.highlights.map((h) => (
                <div key={h.label} className="bg-surface p-4 sm:p-5">
                  <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">{h.value}</dd>
                  <dt className="mt-1 text-xs text-subtle sm:text-sm">{h.label}</dt>
                </div>
              ))}
            </dl>
          )}
        </header>

        {project.images && project.images.length > 0 && (
          <section className="mt-12" aria-labelledby="evidence-heading">
            <h2 id="evidence-heading" className="font-mono text-xs uppercase tracking-wider text-subtle">
              Evidence · from the running project
            </h2>
            <div className="mt-4">
              <Gallery images={project.images} />
            </div>
          </section>
        )}

        {project.slug === "swing-trading-assistant" && (
          <section className="mt-12 max-w-2xl">
            <h2 className="font-mono text-xs uppercase tracking-wider text-subtle">Example response</h2>
            <div className="mt-4">
              <ResponsePanel title="GET /analyze/RELIANCE.NS" body={swingExample} />
            </div>
          </section>
        )}

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_280px]">
          <article className="min-w-0 space-y-12">
            <section>
              <h2 className="font-mono text-xs uppercase tracking-wider text-subtle">The problem</h2>
              <p className="mt-3 text-[17px] leading-8">{project.description}</p>
            </section>

            <section>
              <h2 className="font-mono text-xs uppercase tracking-wider text-subtle">Requirements</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {project.requirements.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm">
                    <Check size={16} className="mt-0.5 shrink-0 text-success" />
                    <span className="first-letter:uppercase">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-mono text-xs uppercase tracking-wider text-subtle">The solution</h2>
              <p className="mt-3 text-[17px] leading-8">{project.mySolution}</p>
            </section>

            <section>
              <h2 className="font-mono text-xs uppercase tracking-wider text-subtle">Architecture</h2>
              <div className="mt-4">
                <ArchitectureFlow steps={project.architecture} label={`${project.slug}/architecture`} />
              </div>
            </section>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-sm font-medium text-subtle">Tech stack</h2>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.topics.map((topic) => (
                  <Tag key={topic}>{topic}</Tag>
                ))}
              </div>
              {project.githubUrl && (
                <>
                  <h2 className="mt-6 text-sm font-medium text-subtle">Repository</h2>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="mt-2 flex items-center justify-between gap-2 break-all text-sm transition hover:text-accent">
                    {project.githubUrl.replace("https://github.com/", "")} <ArrowUpRight size={14} className="shrink-0" />
                  </a>
                </>
              )}
            </div>
          </aside>
        </div>

        {next.slug !== project.slug && (
          <Link
            href={`/problems/${next.slug}`}
            className="group mt-16 flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-6 transition hover:border-border-strong sm:p-8"
          >
            <div>
              <p className="font-mono text-xs text-subtle">Next project</p>
              <p className="mt-1 text-lg font-semibold sm:text-xl">{splitTitle(next.title).name}</p>
            </div>
            <ArrowRight size={20} className="shrink-0 text-subtle transition group-hover:translate-x-1 group-hover:text-fg" />
          </Link>
        )}
      </main>
      <Footer />
    </>
  );
}
