export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  /** Short category line shown on cards, e.g. "Backend · Observability". */
  kind: string;
  year: string;
  /** Featured projects get the large treatment on the home page. */
  featured?: boolean;
  difficulty: "Easy" | "Medium" | "Hard" | "∞";
  status: "Accepted" | "Running" | "In Progress";
  topics: string[];
  description: string;
  mySolution: string;
  architecture: string[];
  /** Verifiable facts from the repository (test counts, scope). */
  highlights?: { value: string; label: string }[];
  /** Screenshots and outputs that show the project working. The first one is the cover. */
  images?: ProjectImage[];
  githubUrl?: string;
  demoUrl?: string;
  /** Public, hosted version anyone can use. Shows "Try it live" buttons. */
  liveUrl?: string;
  problemStatement: string;
  requirements: string[];
};

const img = (slug: string, name: string, width: number, height: number, alt: string, caption: string): ProjectImage => ({
  src: `/assets/projects/${slug}/${name}.webp`,
  alt,
  caption,
  width,
  height,
});

export const projects: Project[] = [
  {
    id: "001",
    title: "SentinelX — Self-Healing Observability Platform",
    slug: "sentinelx",
    kind: "Backend · Observability",
    year: "2026",
    featured: true,
    difficulty: "Hard",
    status: "Accepted",
    topics: ["Java 21", "Spring Boot 3.5", "Docker", "Prometheus", "Grafana", "Micrometer"],
    description:
      "Modern applications need continuous health monitoring, fault detection, diagnostics, and operational visibility. This challenge focused on building a system that surfaces health signals clearly and supports recovery workflows without slowing delivery.",
    mySolution:
      "SentinelX is a self-healing observability platform built with Java and Spring Boot. It detects degradation, opens and deduplicates incidents, applies strategy-based recovery, verifies the outcome, and exposes everything through Actuator health, Prometheus metrics, REST APIs and a live operations console. Docker Compose brings up the app with Prometheus and Grafana.",
    architecture: [
      "Application services emit health and application metrics",
      "Spring Boot exposes metrics and health endpoints",
      "Micrometer captures telemetry for instrumentation",
      "Prometheus scrapes and stores time-series data",
      "Grafana surfaces dashboards and operational context",
    ],
    highlights: [
      { value: "5-stage", label: "Incident lifecycle" },
      { value: "4", label: "Failure simulations" },
      { value: "3", label: "Services in Docker stack" },
    ],
    images: [
      img("sentinelx", "grafana-recovery", 1600, 900, "Grafana dashboard showing current state, degradation count and recovery count", "Grafana: two degradations detected and two automatic recoveries"),
      img("sentinelx", "grafana-dashboard", 1600, 900, "Grafana self-healing dashboard during a degradation", "Live state during a simulated degradation"),
      img("sentinelx", "history-api", 500, 903, "JSON response from the health history API listing HEALTHY to DEGRADED transitions", "History API recording each health transition and its cause"),
      img("sentinelx", "docker-stack", 658, 203, "Terminal showing the Docker Compose stack running", "App, Prometheus and Grafana running in Docker Compose"),
      img("sentinelx", "render-deployment", 1303, 190, "Render dashboard showing the self-healing-platform service deployed", "Deployed on Render as a Docker service"),
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
    kind: "Developer tools · AI",
    year: "2026",
    featured: true,
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
    highlights: [
      { value: "142", label: "Automated tests" },
      { value: "5", label: "Weighted risk factors" },
      { value: "0", label: "Required cloud services" },
    ],
    images: [
      img("changeguard", "dashboard", 1600, 900, "ChangeGuard analysis overview for a pull request", "PR overview: changed files, changed Java symbols and impacted API consumers"),
      img("changeguard", "risk", 1566, 880, "ChangeGuard risk analysis with weighted factors", "Explainable risk score with weighted factors and stated uncertainties"),
      img("changeguard", "api-impact", 1600, 1009, "ChangeGuard API impact view", "API impact: 14 Spring endpoints mapped to 13 frontend call sites"),
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
    title: "Flowzen — System Design Simulator",
    slug: "flowzen",
    kind: "Frontend · Simulation",
    year: "2026",
    featured: true,
    difficulty: "Hard",
    status: "Accepted",
    topics: ["TypeScript", "React", "React Flow", "Vite", "Vitest", "Puppeteer"],
    description:
      "System design is usually learned from static diagrams, so it's hard to see how a design behaves under load: where queues back up, when a cache helps, what fails first. Flowzen makes designs runnable.",
    mySolution:
      "Flowzen is a browser-only system design studio. You build an architecture on a React Flow canvas from 25 components, validate it, and run a deterministic discrete-event simulation that replays every request through the design with a timeline, request log and metrics. It also includes lessons, graded challenges and an interview simulator with rule-based adaptive follow-ups. No backend or API keys.",
    architecture: [
      "Canvas model: components, connections and per-component configuration",
      "Validation flags missing links, overloaded paths and design issues",
      "Deterministic discrete-event engine simulates every request",
      "Playback timeline, request log and metrics replay the run",
      "Challenges and interview flows grade designs against defined rules",
    ],
    highlights: [
      { value: "287", label: "Unit tests" },
      { value: "25", label: "Simulated components" },
      { value: "123", label: "Lessons" },
    ],
    images: [
      img("flowzen", "playground", 1440, 900, "Flowzen canvas running a simulation of a checkout platform", "A checkout architecture under 400 rps, with every request logged on the timeline"),
      img("flowzen", "home", 1600, 1000, "Flowzen home screen with lessons, questions and challenges", "Home: lessons, interview questions, challenges and experiments"),
    ],
    githubUrl: "https://github.com/artham-bhardwaj/flowzen",
    // Hosted free for anyone preparing for system design interviews.
    liveUrl: "https://flowzen-alm.pages.dev/",
    problemStatement:
      "Build a tool that lets engineers design a distributed system and watch how it behaves under traffic, entirely in the browser.",
    requirements: [
      "drag-and-drop architecture canvas",
      "deterministic, repeatable simulation",
      "request-level observability and playback",
      "architecture validation",
      "graded challenges and interview practice",
      "no backend or paid services",
    ],
  },
  {
    id: "004",
    title: "JobPilot — Local-First Job Search Manager",
    slug: "jobpilot",
    kind: "Backend · Automation",
    year: "2026",
    featured: true,
    difficulty: "Hard",
    status: "Accepted",
    topics: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "SQLite", "Playwright"],
    description:
      "Job searching is spread across job boards, spreadsheets and inboxes, and automation tools tend to invent details or apply without asking. I wanted one place to manage the whole search that only uses facts I've confirmed.",
    mySolution:
      "JobPilot is a FastAPI modular monolith with a server-rendered dashboard and a CLI that share one service layer and a local SQLite database. It collects jobs from Greenhouse, Lever, Ashby and JSON-LD sources through a polite HTTP client, scores them against a verified profile, picks the right approved resume, and tracks applications, outreach and interviews. Every consequential step waits for approval.",
    architecture: [
      "Web routes and CLI are thin layers over a shared service layer",
      "Source adapters fetch jobs with timeouts, retries, rate limits and robots.txt",
      "Services hold all business rules: matching, resumes, applications, interviews",
      "SQLAlchemy models on SQLite (WAL) with Alembic migrations and pre-migration backups",
      "Optional Gmail and Telegram integrations, disabled by default",
    ],
    highlights: [
      { value: "582", label: "Automated tests" },
      { value: "18", label: "Schema migrations" },
      { value: "4", label: "Job source adapters" },
    ],
    images: [
      img("jobpilot", "overview", 1440, 900, "JobPilot overview dashboard", "Overview: what needs attention, with every number linked to its records"),
      img("jobpilot", "jobs", 1440, 900, "JobPilot jobs search page with filters", "Jobs: region tabs, query syntax and match-score filters"),
    ],
    githubUrl: "https://github.com/artham-bhardwaj/jobpilot",
    problemStatement:
      "Build a job search manager that collects and ranks jobs, prepares applications, and never acts or invents facts without the user's approval.",
    requirements: [
      "runs entirely on the local machine",
      "only uses confirmed profile facts",
      "polite, rate-limited job collection",
      "explainable job matching",
      "human approval before any submission",
      "safe migrations with automatic backups",
    ],
  },
  {
    id: "005",
    title: "Swing Trading Assistant — Signal & Alert Service",
    slug: "swing-trading-assistant",
    kind: "Backend · Data",
    year: "2026",
    difficulty: "Medium",
    status: "Accepted",
    topics: ["Python", "FastAPI", "pandas", "APScheduler", "Telegram API", "Docker"],
    description:
      "Checking charts by hand for swing-trade setups is slow and inconsistent. This service applies the same technical rules to every stock on a schedule and sends an alert when a signal fires.",
    mySolution:
      "A FastAPI service that pulls market data, computes RSI, MACD and EMA indicators, and generates BUY / SELL / HOLD signals with the reason behind each one. APScheduler runs the analysis hourly, Telegram delivers alerts, and a backtester checks the strategy against historical data. Packaged with Docker and health checks.",
    architecture: [
      "Market data is fetched per symbol",
      "Strategy computes RSI, MACD and EMA indicators",
      "Rules produce a BUY / SELL / HOLD signal with its reasoning",
      "Scheduler runs analysis hourly and Telegram sends alerts",
      "Backtester replays the strategy on historical data",
    ],
    githubUrl: "https://github.com/artham-bhardwaj/swing-trading-bot",
    problemStatement: "Turn a swing-trading strategy into a scheduled service that explains its signals and alerts you in real time.",
    requirements: ["REST API for on-demand analysis", "technical indicators", "explained signals", "scheduled runs", "Telegram alerts", "backtesting"],
  },
  {
    id: "006",
    title: "Medical Image Fusion — CT & MRI",
    slug: "medical-image-fusion",
    kind: "Computer vision",
    year: "2023",
    difficulty: "Medium",
    status: "Accepted",
    topics: ["Python", "OpenCV", "NumPy", "PyWavelets"],
    description:
      "CT scans show bone clearly and MRI shows soft tissue, but doctors have to compare them side by side. Fusing them into one image puts both kinds of detail in a single view.",
    mySolution:
      "The MRI is registered onto the CT using Procrustes analysis on matched landmarks, then the two are fused in two ways: pixel-level averaging, and a discrete wavelet transform (DWT) that merges frequency bands so structure from both scans is kept.",
    architecture: [
      "Load CT and MRI slices",
      "Register MRI to CT with Procrustes alignment",
      "Pixel-based fusion as a baseline",
      "DWT decomposition, coefficient fusion and reconstruction",
    ],
    images: [
      img("image-fusion", "ct-mri-fused", 1244, 360, "Three brain scans: CT, registered MRI, and the DWT-fused result", "Left to right: CT, registered MRI, and the DWT-fused result"),
    ],
    githubUrl: "https://github.com/artham-bhardwaj/Multimodality-medical-Image-Fusion",
    problemStatement: "Combine CT and MRI scans of the same patient into one image that keeps the useful detail from both.",
    requirements: ["image registration", "pixel-level fusion", "wavelet-based fusion", "visual comparison of results"],
  },
  {
    id: "007",
    title: "Build a Developer Portfolio",
    slug: "portfolio",
    kind: "Frontend",
    year: "2026",
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
    id: "008",
    title: "Software Engineering Career",
    slug: "career",
    kind: "Ongoing",
    year: "Now",
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

/** Flowzen is hosted for public use, so the home page promotes it separately. */
export const flowzen = projects.find((p) => p.slug === "flowzen");

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured && p.slug !== "portfolio" && p.slug !== "career");

/** Total automated tests across projects, from each repo's test suite. */
export const totalTests = projects.reduce((sum, p) => {
  const tests = p.highlights?.find((h) => /tests/i.test(h.label));
  return sum + (tests ? Number(tests.value) : 0);
}, 0);

/** "SentinelX — Self-Healing Observability Platform" → { name, tagline } */
export function splitTitle(title: string) {
  const [name, ...rest] = title.split(" — ");
  return { name, tagline: rest.join(" — ") };
}
