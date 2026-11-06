import type { Metadata } from "next";
import { Briefcase, GraduationCap } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Tag } from "@/components/badges";
import { experience } from "@/data/experience";

export const metadata: Metadata = { title: "Career" };

export default function CareerPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <header className="fade-up">
          <p className="font-mono text-xs text-accent">Career</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Current role and trajectory</h1>
        </header>

        <div className="mt-12 grid gap-4">
          <section className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 text-accent">
                <Briefcase size={18} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h2 className="text-xl font-semibold">{experience.currentRole}</h2>
                  <p className="font-mono text-xs text-subtle">{experience.dates}</p>
                </div>
                <p className="mt-1 text-muted">{experience.company}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {experience.highlights.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 text-accent">
                <GraduationCap size={18} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h2 className="text-xl font-semibold">{experience.education.degree}</h2>
                  <p className="font-mono text-xs text-subtle">{experience.education.dates}</p>
                </div>
                <p className="mt-1 text-muted">{experience.education.school}</p>
                <p className="mt-4 text-sm text-muted">
                  CGPA <span className="font-semibold text-fg">{experience.education.cgpa}</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
