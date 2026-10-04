export type Project = {
  id: string;
  title: string;
  slug: string;
  difficulty: "Easy" | "Medium" | "Hard" | "∞";
  status: "Accepted" | "Running" | "In Progress";
  topics: string[];
  description: string;
  mySolution: string;
  architecture: string[];
  githubUrl?: string;
  demoUrl?: string;
  problemStatement: string;
  requirements: string[];
};

export const projects: Project[] = [
  {
    id: "001",
    title: "SentinelX — Self-Healing Observability Platform",
    slug: "sentinelx",
    difficulty: "Hard",
    status: "Accepted",
    topics: ["Java", "Spring Boot", "Docker", "Prometheus", "Grafana", "Micrometer"],
    description:
      "Modern applications need continuous health monitoring, fault detection, diagnostics, and operational visibility. This challenge focused on building a system that surfaces health signals clearly and supports recovery workflows without slowing delivery.",
    mySolution:
      "SentinelX is a self-healing observability platform built with Java and Spring Boot. Micrometer provides health signals and metrics, Prometheus collects them, Grafana adds operational visibility, and Docker keeps deployment straightforward.",
    architecture: [
      "Application services emit health and application metrics",
      "Spring Boot exposes metrics and health endpoints",
      "Micrometer captures telemetry for instrumentation",
      "Prometheus scrapes and stores time-series data",
      "Grafana surfaces dashboards and operational context",
    ],
    githubUrl: "https://github.com/artham-bhardwaj/self-healing-platform",
    demoUrl: "/problems/sentinelx",
    problemStatement:
      "Design a platform that can monitor application health, surface diagnostics, and support automated recovery operations.",
    requirements: [
      "monitor application health",
      "expose health information",
      "collect metrics",
      "detect failures",
      "support automated diagnostics",
      "provide operational visibility",
    ],
  },
  {
    id: "002",
    title: "ChangeGuard — Evidence-Backed PR Investigation Agent",
    slug: "changeguard",
    difficulty: "Hard",
    status: "Accepted",
    topics: ["Python", "MCP", "SQLite", "Ollama", "Gemini API", "Static Analysis"],
    description:
      "A pull-request diff alone rarely explains what could break. This project turns code changes, dependency signals, historical evidence, and verification gaps into a reviewable engineering investigation.",
    mySolution:
      "ChangeGuard is a local-first Python agent for GitHub PR analysis. It combines deterministic Java and API-impact analysis, SQLite-backed evidence retrieval, explainable risk scoring, bounded MCP tool use, and optional Ollama or Gemini report generation.",
    architecture: [
      "Pinned Git revisions supply the change under investigation",
      "Code intelligence maps Java symbols, calls, Spring endpoints, and frontend consumers",
      "SQLite retrieval surfaces relevant engineering evidence with provenance",
      "A deterministic risk engine and bounded AI report explain impact and checks",
    ],
    githubUrl: "https://github.com/artham-bhardwaj/changeguard",
    demoUrl: "/problems/changeguard",
    problemStatement:
      "Investigate a proposed software change and show what it could affect, what evidence supports that conclusion, and what an engineer should verify before merge.",
    requirements: [
      "immutable Git revision analysis",
      "read-only MCP tools",
      "evidence retrieval with provenance",
      "explainable deterministic risk scoring",
      "cross-language API impact analysis",
      "bounded optional LLM investigation",
    ],
  },
  {
    id: "003",
    title: "Build a Developer Portfolio",
    slug: "portfolio",
    difficulty: "Medium",
    status: "Running",
    topics: ["Next.js", "TypeScript", "UI"],
    description:
      "The goal was to create a portfolio experience that feels like a coding platform while remaining clear for recruiters and collaborators.",
    mySolution:
      "This portfolio explores a coding-platform-inspired interaction model without copying the visual patterns of a single platform. The result is a polished, lightweight experience rooted in engineering storytelling.",
    architecture: [
      "Next.js delivers fast, componentized pages",
      "TypeScript keeps data and UI decoupled",
      "Tailwind enables restrained, maintainable styling",
    ],
    githubUrl: "https://github.com/artham-bhardwaj/portfolio",
    demoUrl: "/",
    problemStatement:
      "Design a developer portfolio that communicates technical depth and creative direction with clarity.",
    requirements: [
      "showcase engineering work",
      "keep navigation simple",
      "support recruiter-friendly discovery",
      "maintain a polished product feel",
    ],
  },
  {
    id: "004",
    title: "Software Engineering Career",
    slug: "career",
    difficulty: "∞",
    status: "Running",
    topics: ["Backend", "Problem Solving", "Learning"],
    description:
      "This is an ongoing challenge: building reliable systems, solving harder problems, and continuously improving as an engineer.",
    mySolution:
      "The career path is being shaped through hands-on delivery, strong fundamentals, and steady growth across backend engineering and modern infrastructure.",
    architecture: [
      "Experience builds through delivery and collaboration",
      "Learning compounds through problem-solving and systems work",
      "Every project contributes to the next challenge",
    ],
    githubUrl: "#",
    demoUrl: "/career",
    problemStatement:
      "Continue growing as a software engineer by solving hard problems and delivering dependable systems.",
    requirements: [
      "build reliable systems",
      "solve difficult problems",
      "learn continuously",
      "improve as an engineer",
    ],
  },
];
