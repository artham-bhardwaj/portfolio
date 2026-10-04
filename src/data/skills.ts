export const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "Python", "C++", "SQL"],
  },
  {
    title: "Backend",
    items: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "REST APIs", "Microservices", "Django", "Flask"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    title: "Infrastructure & Tools",
    items: ["Git", "Maven", "Docker", "Kubernetes", "Prometheus", "Grafana", "Micrometer"],
  },
  {
    title: "Fundamentals",
    items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "SDLC", "Design Patterns"],
  },
];

export const capabilityGroups = [
  {
    title: "Backend Systems",
    description: "API-first services, business logic, data-backed workflows, and deployable backend applications.",
    technologies: ["Java", "Spring Boot", "REST APIs", "Spring Data JPA", "Hibernate"],
    project: "SentinelX",
    projectHref: "/problems/sentinelx",
  },
  {
    title: "Engineering Intelligence",
    description: "Evidence retrieval, static analysis, and explainable change-risk workflows for software reviews.",
    technologies: ["Python", "SQLite", "MCP", "Static Analysis", "Git"],
    project: "ChangeGuard",
    projectHref: "/problems/changeguard",
  },
  {
    title: "Observability",
    description: "Metrics, monitoring, service health visibility, and operational diagnostics that support reliable systems.",
    technologies: ["Prometheus", "Grafana", "Micrometer", "Docker", "Monitoring"],
    project: "SentinelX",
    projectHref: "/problems/sentinelx",
  },
  {
    title: "AI-Assisted Engineering",
    description: "Bounded local and API-assisted investigation grounded in collected repository evidence.",
    technologies: ["Ollama", "Gemini API", "MCP", "RAG", "Python"],
    project: "ChangeGuard",
    projectHref: "/problems/changeguard",
  },
];

export const technologyExplorer = [
  {
    name: "Java",
    category: "Languages",
    where: "Used for backend service logic, application structure, and system design work in SentinelX and related backend development.",
    related: ["Spring Boot", "REST APIs", "Spring Data JPA"],
    project: "SentinelX",
    projectHref: "/problems/sentinelx",
    githubHref: "https://github.com/artham-bhardwaj/self-healing-platform",
  },
  {
    name: "Spring Boot",
    category: "Backend",
    where: "Used in SentinelX to build the application layer and expose service endpoints, telemetry, and health data.",
    related: ["REST APIs", "Spring MVC", "Spring Data JPA"],
    project: "SentinelX",
    projectHref: "/problems/sentinelx",
    githubHref: "https://github.com/artham-bhardwaj/self-healing-platform",
  },
  {
    name: "Python",
    category: "Languages",
    where: "Used in ChangeGuard for Git inspection, evidence retrieval, SQLite persistence, deterministic risk analysis, and optional LLM orchestration.",
    related: ["SQLite", "MCP", "Ollama"],
    project: "ChangeGuard",
    projectHref: "/problems/changeguard",
    githubHref: "https://github.com/artham-bhardwaj/changeguard",
  },
  {
    name: "Django",
    category: "Backend",
    where: "Part of broader backend experience; ChangeGuard itself exposes an explicit CLI and MCP tool boundary instead of a web framework.",
    related: ["Python", "MCP", "REST APIs"],
    project: "ChangeGuard",
    projectHref: "/problems/changeguard",
    githubHref: "https://github.com/artham-bhardwaj/changeguard",
  },
  {
    name: "PostgreSQL",
    category: "Databases",
    where: "Used alongside SQLite in backend development; ChangeGuard uses SQLite locally to persist analysis and evidence records.",
    related: ["SQLite", "DBMS", "Python"],
    project: "ChangeGuard",
    projectHref: "/problems/changeguard",
    githubHref: "https://github.com/artham-bhardwaj/changeguard",
  },
  {
    name: "Prometheus",
    category: "Tools / Infrastructure",
    where: "Used in SentinelX for telemetry collection and monitoring flows that expose service health and performance signals.",
    related: ["Grafana", "Micrometer", "Observability"],
    project: "SentinelX",
    projectHref: "/problems/sentinelx",
    githubHref: "https://github.com/artham-bhardwaj/self-healing-platform",
  },
  {
    name: "Grafana",
    category: "Tools / Infrastructure",
    where: "Used in SentinelX to create visibility around operational health and system signals.",
    related: ["Prometheus", "Micrometer", "Observability"],
    project: "SentinelX",
    projectHref: "/problems/sentinelx",
    githubHref: "https://github.com/artham-bhardwaj/self-healing-platform",
  },
  {
    name: "Data Structures & Algorithms",
    category: "Core",
    where: "Applied through problem solving and structured algorithmic practice, with 750+ problems completed.",
    related: ["Arrays", "Strings", "Hashing", "Binary Search", "Dynamic Programming"],
    project: "Problem Solving",
    projectHref: "/#problem-solving",
    githubHref: "https://github.com/artham-bhardwaj",
  },
];

export const problemSolvingCategories = [
  "Arrays",
  "Strings",
  "Hashing",
  "Binary Search",
  "Sliding Window",
  "Trees",
  "Graphs",
  "Dynamic Programming",
];

export const achievements = [
  {
    title: "750+ DSA Problems",
    description: "Solved across competitive programming and interview preparation practice with a focus on fundamentals and patterns.",
  },
];

export const certifications: string[] = [];
