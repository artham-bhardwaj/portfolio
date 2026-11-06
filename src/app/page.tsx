import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bot, CheckCircle2, Brain, Download, Mail, Server, Activity, ScanSearch, GraduationCap, Briefcase, Workflow } from "lucide-react";
import portrait from "../../public/assets/images/potfolioselfimage.jpeg";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Reveal, SectionHeader } from "@/components/section";
import { Tag } from "@/components/badges";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { BrowserFrame, ResponsePanel, swingExample } from "@/components/project-media";
import { TechExplorer } from "@/components/home/tech-explorer";
import { CopyEmail } from "@/components/home/copy-email";
import { ThemeOnly, ThemeText } from "@/components/theme-variants";
import { ThemedHome } from "@/components/themed-home";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { featuredProjects, flowzen, otherProjects, splitTitle, totalTests } from "@/data/projects";
import { capabilityGroups, problemSolvingCategories, skillGroups } from "@/data/skills";

const stats = [
  { value: `${featuredProjects.length}`, label: "Flagship projects shipped" },
  { value: `${(Math.floor(totalTests / 100) * 100).toLocaleString("en-US")}+`, label: "Automated tests written" },
  { value: "750+", label: "DSA problems solved" },
  { value: experience.education.cgpa.split("/")[0], label: "B.Tech CGPA (of 10)" },
];

const capabilityIcons = [Server, ScanSearch, Activity, Workflow, Bot, Brain];

const workflow = ["Understand constraints", "Identify the pattern", "Choose an approach", "Analyze complexity", "Implement", "Validate"];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="classic-home">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="bg-glow pointer-events-none absolute inset-0" aria-hidden="true" />

          <ThemeOnly theme="arcade">
            <div className="relative mx-auto max-w-6xl px-5 pt-8 sm:px-8">
              <div className="arcade-hud">
                <div><b>1UP</b>ARTHAM</div>
                <div><b>HI-SCORE</b>750+ DSA</div>
                <div><b>LIVES</b><span className="arcade-hearts">♥♥♥</span></div>
                <div><b>STATUS</b>FOR HIRE</div>
              </div>
            </div>
          </ThemeOnly>
          <ThemeOnly theme="vhs">
            <div className="relative mx-auto max-w-6xl px-5 pt-8 sm:px-8">
              <div className="vhs-label">
                <span className="vhs-label-stripe" aria-hidden="true" />
                <span className="vhs-label-title">TAPE 01 · {profile.name}</span>
                <span className="vhs-label-meta">Backend Engineer · SP · 2026</span>
              </div>
            </div>
          </ThemeOnly>

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 sm:pt-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:pb-24">
            <div className="fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted shadow-card">
                <span className="relative flex h-2 w-2">
                  <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-success" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                <ThemeText
                  base="Open to backend engineering roles"
                  os98="Status: Available for hire"
                  arcade="PLAYER 1 READY · OPEN TO BACKEND ROLES"
                  vhs="REC · Open to backend roles"
                  groovy="Open to backend roles ✌"
                />
              </span>

              <ThemeOnly theme={["os98", "arcade", "vhs", "groovy"]}>
                <p className="theme-kicker mt-6">
                  <ThemeText
                    base=""
                    os98="Welcome to ArthamOS 98. Double-click anything."
                    arcade="STAGE 1 · START!"
                    vhs="▶ NOW PLAYING"
                    groovy="Hey there, I'm Artham ✿"
                  />
                </p>
              </ThemeOnly>

              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-6xl">
                Software engineer building{" "}
                <span className="bg-gradient-to-r from-accent to-violet-500 bg-clip-text text-transparent">reliable backend systems.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                I&apos;m {profile.name}, a {experience.currentRole} at {experience.company.replace(" (TCS)", "")}. I work in Java and Spring
                Boot, and build tested, end-to-end tools for observability, code review and system design.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="#work" className="inline-flex h-11 items-center gap-2 rounded-full bg-fg px-5 text-sm font-medium text-bg transition hover:opacity-85">
                  View my work <ArrowRight size={16} />
                </Link>
                <a href={profile.resume} className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-surface px-5 text-sm font-medium transition hover:border-border-strong">
                  <Download size={15} /> Résumé
                </a>
                <div className="ml-1 flex items-center gap-1">
                  <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-fg">
                    <GitHubIcon size={18} />
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-fg">
                    <LinkedInIcon size={18} />
                  </a>
                  <a href={`mailto:${profile.email}`} aria-label="Email" className="grid h-11 w-11 place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-fg">
                    <Mail size={18} />
                  </a>
                </div>
              </div>

              <ThemeOnly theme="os98">
                <nav className="os-icons" aria-label="Desktop shortcuts">
                  <a href="#work"><i aria-hidden="true">📁</i>My Projects</a>
                  <a href={profile.resume}><i aria-hidden="true">📄</i>Resume.pdf</a>
                  {flowzen?.liveUrl && (
                    <a href={flowzen.liveUrl} target="_blank" rel="noreferrer"><i aria-hidden="true">🧩</i>Flowzen.exe</a>
                  )}
                  <a href={profile.github} target="_blank" rel="noreferrer"><i aria-hidden="true">💾</i>GitHub</a>
                  <a href={`mailto:${profile.email}`}><i aria-hidden="true">✉️</i>Email</a>
                </nav>
              </ThemeOnly>
            </div>

            <div className="fade-up relative mx-auto w-full max-w-sm [animation-delay:120ms] lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-violet-500/20 blur-2xl" aria-hidden="true" />
              <ThemeOnly theme="groovy">
                <svg className="groovy-badge" viewBox="0 0 200 200" role="img" aria-label="Available for opportunities">
                  <defs>
                    <path id="groovy-circle" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
                  </defs>
                  <circle cx="100" cy="100" r="96" fill="#eab308" />
                  <circle cx="100" cy="100" r="56" fill="#c2410c" />
                  <text className="groovy-badge-ring">
                    <textPath href="#groovy-circle">AVAILABLE FOR OPPORTUNITIES ✿ OPEN TO WORK ✿</textPath>
                  </text>
                  <text x="100" y="112" textAnchor="middle" className="groovy-badge-hi">hire!</text>
                </svg>
              </ThemeOnly>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-2 shadow-card">
                <Image
                  src={portrait}
                  alt={`Portrait of ${profile.name}`}
                  priority
                  placeholder="blur"
                  sizes="(min-width: 1024px) 380px, 90vw"
                  className="aspect-[4/5] w-full rounded-2xl object-cover object-[50%_30%]"
                />
                <div className="absolute inset-x-5 bottom-5 flex items-center gap-3 rounded-xl border border-white/10 bg-black/55 px-4 py-3 text-white backdrop-blur-md">
                  <Briefcase size={16} className="shrink-0 opacity-80" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{experience.currentRole} · TCS</p>
                    <p className="truncate text-xs text-white/70">{profile.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="relative mx-auto max-w-6xl px-5 pb-4 sm:px-8 sm:pb-8">
            <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-border gap-px md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-surface p-5 sm:p-6">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">{stat.value}</dd>
                  <dd className="mt-1 text-sm text-subtle">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Free tool: Flowzen */}
        {flowzen?.liveUrl && <FlowzenCallout />}

        {/* Work */}
        <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeader
            index="01"
            eyebrow="Selected work"
            title="Projects I've built end to end"
            description="Each one starts from a real engineering problem. Every screenshot comes from the running project, and the source is on GitHub."
            action={
              <Link href="/problems" className="inline-flex shrink-0 items-center gap-1.5 text-sm text-muted transition hover:text-fg">
                All projects <ArrowRight size={14} />
              </Link>
            }
          />

          <div className="grid gap-6">
            {featuredProjects.map((project, i) => {
              const { name, tagline } = splitTitle(project.title);
              const cover = project.images?.[0];
              const flip = i % 2 === 1;
              return (
                <Reveal key={project.slug}>
                  <article className="group relative overflow-hidden rounded-3xl border border-border bg-surface shadow-card transition hover:border-border-strong">
                    <ThemeOnly theme="os98">
                      <div className="os-titlebar">
                        <span>{name}.exe</span>
                        <span aria-hidden="true">_ □ ✕</span>
                      </div>
                    </ThemeOnly>
                    <div className={`grid lg:grid-cols-2 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
                      {/* Evidence */}
                      {cover && (
                        <Link
                          href={`/problems/${project.slug}`}
                          aria-label={`${name} case study`}
                          className="relative flex flex-col justify-center overflow-hidden bg-surface-2 p-5 sm:p-8 lg:p-10"
                        >
                          <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:none] opacity-70" aria-hidden="true" />
                          <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-3/4 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
                          <BrowserFrame
                            image={cover}
                            label={project.githubUrl?.replace("https://github.com/", "github.com/")}
                            priority={i === 0}
                            className="relative transition duration-500 group-hover:-translate-y-1 group-hover:scale-[1.01]"
                          />
                          <p className="relative mt-3 text-xs text-subtle">{cover.caption}</p>
                        </Link>
                      )}

                      {/* Story */}
                      <div className="flex flex-col p-6 sm:p-8 lg:p-10">
                        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-subtle">
                          <ThemeText
                            base={<span className="text-accent">{String(i + 1).padStart(2, "0")}</span>}
                            os98={<span className="text-accent">File {String(i + 1).padStart(2, "0")}</span>}
                            arcade={<span className="text-accent">LEVEL {String(i + 1).padStart(2, "0")} ★★★ CLEARED</span>}
                            vhs={<span className="text-accent">CH {String(i + 1).padStart(2, "0")} · 00:{String((i + 1) * 12).padStart(2, "0")}:00</span>}
                            groovy={<span className="text-accent">✿ Side {i % 2 === 0 ? "A" : "B"}, track {i + 1}</span>}
                          />
                          <span>·</span>
                          <span>{project.kind}</span>
                          <span>·</span>
                          <span>{project.year}</span>
                        </div>
                        <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{name}</h3>
                        <p className="mt-1 text-base text-accent">{tagline}</p>
                        <p className="mt-5 text-[15px] leading-7 text-muted">{project.mySolution}</p>

                        {project.highlights && (
                          <dl className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border">
                            {project.highlights.map((h) => (
                              <div key={h.label} className="bg-surface px-3 py-3">
                                <dd className="text-lg font-semibold tracking-tight">{h.value}</dd>
                                <dt className="mt-0.5 text-[11px] leading-4 text-subtle">{h.label}</dt>
                              </div>
                            ))}
                          </dl>
                        )}

                        <div className="mt-6 flex flex-wrap gap-1.5">
                          {project.topics.map((topic) => (
                            <Tag key={topic}>{topic}</Tag>
                          ))}
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2 lg:mt-auto lg:pt-8">
                          {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center gap-2 rounded-full bg-accent px-4 text-sm font-medium text-bg transition hover:opacity-85">
                              Try it free <ArrowUpRight size={14} />
                            </a>
                          )}
                          <Link href={`/problems/${project.slug}`} className="inline-flex h-10 items-center gap-2 rounded-full bg-fg px-4 text-sm font-medium text-bg transition hover:opacity-85">
                            <ThemeText base="Read case study" os98="Open case study" arcade="ENTER LEVEL" vhs="▶ Play case study" groovy="Read the story" /> <ArrowRight size={15} />
                          </Link>
                          {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-sm transition hover:border-border-strong">
                              <GitHubIcon size={15} /> Source <ArrowUpRight size={14} className="text-subtle" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* More projects */}
          <Reveal className="mt-16">
            <h3 className="text-sm font-medium text-subtle">More projects</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {otherProjects.map((project) => {
                const { name, tagline } = splitTitle(project.title);
                const cover = project.images?.[0];
                return (
                  <Link
                    key={project.slug}
                    href={`/problems/${project.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card"
                  >
                    <div className="border-b border-border bg-surface-2 p-4">
                      {cover ? (
                        <BrowserFrame image={cover} sizes="(min-width: 768px) 520px, 100vw" />
                      ) : (
                        <ResponsePanel title={`GET /analyze/RELIANCE.NS`} body={swingExample} />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="font-mono text-xs text-subtle">
                        {project.kind} · {project.year}
                      </p>
                      <h4 className="mt-2 text-lg font-semibold">
                        {name} <span className="font-normal text-muted">— {tagline}</span>
                      </h4>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{project.mySolution}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.topics.slice(0, 4).map((topic) => (
                          <Tag key={topic}>{topic}</Tag>
                        ))}
                      </div>
                      <span className="mt-5 inline-flex items-center gap-1.5 pt-1 text-sm text-muted transition group-hover:text-fg">
                        Read case study <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </section>

        <ThemeOnly theme={["groovy", "arcade"]}>
          <div className="theme-ticker" aria-hidden="true">
            <div>
              {[0, 1].map((k) => (
                <span key={k}>
                  {["Java", "Spring Boot", "System Design", "SQL", "Python", "Observability", "Backend"].map((t) => (
                    <span key={t}>
                      {t}
                      <b> ✿ </b>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </ThemeOnly>

        {/* Capabilities */}
        <section id="capabilities" className="border-y border-border bg-surface/50">
          <div className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
            <SectionHeader
              index="02"
              eyebrow="Capabilities"
              title="What I can build for your team"
              description="Areas where I've shipped working software, each backed by a project you can inspect."
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {capabilityGroups.map((group, i) => {
                const Icon = capabilityIcons[i % capabilityIcons.length];
                return (
                  <Reveal key={group.title} delay={i * 0.05}>
                    <Link
                      href={group.projectHref}
                      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card sm:p-7"
                    >
                      <div className="flex items-start justify-between">
                        <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface-2 text-accent">
                          <Icon size={18} />
                        </span>
                        <ArrowUpRight size={18} className="text-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold">{group.title}</h3>
                      <p className="mt-2 text-[15px] leading-7 text-muted">{group.description}</p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {group.technologies.map((tech) => (
                          <Tag key={tech}>{tech}</Tag>
                        ))}
                      </div>
                      <p className="mt-6 pt-1 text-sm text-subtle">
                        Evidence: <span className="text-fg">{group.project}</span>
                      </p>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeader
            index="03"
            eyebrow="Tech stack"
            title="Tools I use, and where"
            description="Pick a technology to see where I've used it and the project that proves it."
          />
          <Reveal>
            <TechExplorer />
          </Reveal>

          <Reveal className="mt-12">
            <h3 className="text-sm font-medium text-subtle">Full toolkit</h3>
            <dl className="mt-4 divide-y divide-border border-y border-border">
              {skillGroups.map((group) => (
                <div key={group.title} className="grid gap-3 py-4 sm:grid-cols-[200px_1fr] sm:items-center">
                  <dt className="text-sm font-medium">{group.title}</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        {/* Experience */}
        <section id="experience" className="border-y border-border bg-surface/50">
          <div className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
            <SectionHeader index="04" eyebrow="Experience" title="Where I've worked and studied" />

            <ol className="relative grid gap-6 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-border">
              <Reveal>
                <li className="relative grid gap-4 pl-14">
                  <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-accent">
                    <Briefcase size={17} />
                  </span>
                  <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-lg font-semibold">{experience.currentRole}</h3>
                      <p className="font-mono text-xs text-subtle">{experience.dates}</p>
                    </div>
                    <p className="mt-1 text-muted">{experience.company}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {experience.highlights.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </div>
                </li>
              </Reveal>
              <Reveal delay={0.05}>
                <li className="relative grid gap-4 pl-14">
                  <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-accent">
                    <GraduationCap size={17} />
                  </span>
                  <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-lg font-semibold">{experience.education.degree}</h3>
                      <p className="font-mono text-xs text-subtle">{experience.education.dates}</p>
                    </div>
                    <p className="mt-1 text-muted">{experience.education.school}</p>
                    <p className="mt-4 text-sm text-muted">
                      CGPA <span className="font-semibold text-fg">{experience.education.cgpa}</span>
                    </p>
                  </div>
                </li>
              </Reveal>
            </ol>
          </div>
        </section>

        {/* Problem solving + Now */}
        <section id="problem-solving" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeader
            index="05"
            eyebrow="Problem solving"
            title="How I approach hard problems"
            description="750+ data structures and algorithms problems taught me a repeatable way to break problems down."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <div className="h-full rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <h3 className="text-sm font-medium text-subtle">My workflow</h3>
                <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {workflow.map((step, i) => (
                    <li key={step} className="rounded-xl border border-border bg-bg p-4">
                      <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                      <p className="mt-2 text-sm font-medium">{step}</p>
                    </li>
                  ))}
                </ol>
                <h3 className="mt-8 text-sm font-medium text-subtle">Strongest patterns</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {problemSolvingCategories.map((category) => (
                    <Tag key={category}>{category}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <p className="text-6xl font-semibold tracking-tight">750<span className="text-accent">+</span></p>
                <p className="mt-2 text-muted">problems solved across LeetCode and GeeksforGeeks</p>
                <div className="mt-8 grid gap-2 lg:mt-auto">
                  <a href={profile.leetcode} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm transition hover:border-border-strong">
                    LeetCode profile <ArrowUpRight size={15} className="text-subtle" />
                  </a>
                  <a href={profile.gfg} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm transition hover:border-border-strong">
                    GeeksforGeeks profile <ArrowUpRight size={15} className="text-subtle" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Now */}
          <Reveal className="mt-4">
            <div className="grid gap-6 rounded-2xl border border-border bg-surface p-6 sm:p-8 md:grid-cols-2">
              <div>
                <h3 className="flex items-center gap-2 text-sm font-medium text-subtle">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Currently focused on
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {profile.currentFocus.map((item) => (
                    <li key={item} className="text-[15px] text-fg">{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-sm font-medium text-subtle">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" /> Recently completed
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {profile.recentWork.map((item) => (
                    <li key={item} className="text-[15px] text-fg">{item}</li>
                  ))}
                </ul>
                <p className="mt-6 font-mono text-xs text-subtle">Updated {profile.lastUpdated}</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-24 sm:px-8 sm:pb-32">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 text-center shadow-card sm:px-12 sm:py-20">
              <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_100%,#000_30%,transparent_100%)]" aria-hidden="true" />
              <div className="relative">
                <p className="font-mono text-xs text-accent">
                  <ThemeText
                    base="06 — Contact"
                    os98="Hire_Me.exe"
                    arcade="CONTINUE? 10… 9… 8…"
                    vhs="▶ FINAL SCENE"
                    groovy="✿ Let's hang out"
                  />
                </p>
                <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
                  Let&apos;s build something reliable together.
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-muted">
                  I&apos;m open to backend and software engineering roles. The fastest way to reach me is email.
                </p>
                <div className="mt-8 flex flex-col items-center gap-4">
                  <CopyEmail email={profile.email} />
                  <div className="flex flex-wrap justify-center gap-2">
                    <a href={`mailto:${profile.email}`} className="inline-flex h-11 items-center gap-2 rounded-full bg-fg px-5 text-sm font-medium text-bg transition hover:opacity-85">
                      <Mail size={15} /> <ThemeText base="Send an email" os98="OK, send email" arcade="PRESS START: EMAIL" vhs="▶ Send an email" groovy="Drop me a line" />
                    </a>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-bg px-5 text-sm font-medium transition hover:border-border-strong">
                      <LinkedInIcon size={15} /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <ThemedHome />

      <Footer />
    </>
  );
}

const flowzenPoints = [
  "Build an architecture from 25 components and run it under real traffic",
  "Watch every request on a timeline: where queues back up and what fails first",
  "Lessons, graded challenges and an interview simulator",
  "Runs in your browser. No sign-up, no API keys",
];

function FlowzenCallout() {
  if (!flowzen?.liveUrl) return null;
  const cover = flowzen.images?.[0];
  const host = flowzen.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <section aria-labelledby="flowzen-free" className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-card">
          <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:none] opacity-60" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
          <div className="relative grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-medium text-success">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                <ThemeText
                  base="Free to use · Built and hosted by me"
                  os98="Freeware · Built and hosted by me"
                  arcade="FREE PLAY · Built and hosted by me"
                  vhs="FREE RENTAL · Built and hosted by me"
                  groovy="Far out, it's free ✌ Built and hosted by me"
                />
              </span>
              <h2 id="flowzen-free" className="mt-5 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                Preparing for system design interviews? Practice on Flowzen.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted">
                I built Flowzen because system design is hard to learn from static diagrams. It turns your design into a live simulation,
                and I host it so anyone can use it for free.
              </p>
              <ul className="mt-6 grid gap-2.5">
                {flowzenPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[15px] text-fg">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href={flowzen.liveUrl} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center gap-2 rounded-full bg-fg px-5 text-sm font-medium text-bg transition hover:opacity-85">
                  <ThemeText
                    base={<>Start practicing, it&apos;s free</>}
                    os98="Run Flowzen.exe (free)"
                    arcade="PRESS START: PRACTICE FREE"
                    vhs="▶ Play it free"
                    groovy={<>Dig in, it&apos;s free</>}
                  />{" "}
                  <ArrowUpRight size={15} />
                </a>
                <Link href="/problems/flowzen" className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-surface px-5 text-sm font-medium transition hover:border-border-strong">
                  How I built it <ArrowRight size={15} />
                </Link>
              </div>
            </div>
            {cover && (
              <a href={flowzen.liveUrl} target="_blank" rel="noreferrer" aria-label="Open Flowzen" className="group block">
                <BrowserFrame image={cover} label={host} sizes="(min-width: 1024px) 520px, 100vw" className="transition duration-500 group-hover:-translate-y-1" />
                <p className="mt-3 text-xs text-subtle">{cover.caption}</p>
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
