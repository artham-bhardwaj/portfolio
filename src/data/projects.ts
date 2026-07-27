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
    title: "Build a Self-Healing Observability Platform",
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
    githubUrl: "https://github.com/artham/sentinelx",
    demoUrl: "https://example.com/sentinelx",
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
    title: "Build an Intelligent Market Analysis Platform",
    slug: "wise-trade",
    difficulty: "Hard",
    status: "Accepted",
    topics: ["Python", "Django", "PostgreSQL", "REST APIs", "Machine Learning"],
    description:
      "The challenge centered on ingesting market signals, processing financial news, and exposing useful analytical views through a dependable backend API.",
    mySolution:
      "Wise Trade uses Python and Django to process external financial data, store structured insights in PostgreSQL, and provide REST APIs for analysis workflows and reporting.",
    architecture: [
      "External financial APIs supply market and news data",
      "Data processing pipelines normalize and enrich incoming signals",
      "PostgreSQL stores analytical snapshots and structured records",
      "REST APIs expose analysis results to downstream services",
    ],
    githubUrl: "https://github.com/artham/wise-trade",
    demoUrl: "https://example.com/wise-trade",
    problemStatement:
      "Create a backend platform for financial market analysis that combines external data sources with useful analytical outputs.",
    requirements: [
      "financial market analysis",
      "news aggregation",
      "external financial APIs",
      "data-processing pipelines",
      "PostgreSQL storage",
      "backend REST APIs",
      "predictive or analytical capabilities",
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
    githubUrl: "https://github.com/artham/portfolio",
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
