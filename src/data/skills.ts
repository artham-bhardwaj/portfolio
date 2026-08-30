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
    title: "Data-Driven Applications",
    description: "Structured data processing, database design, and application integrations for backend-heavy products.",
    technologies: ["Python", "Django", "PostgreSQL", "MySQL", "External APIs"],
    project: "Wise Trade",
    projectHref: "/problems/wise-trade",
  },
  {
    title: "Observability",
    description: "Metrics, monitoring, service health visibility, and operational diagnostics that support reliable systems.",
    technologies: ["Prometheus", "Grafana", "Micrometer", "Docker", "Monitoring"],
    project: "SentinelX",
    projectHref: "/problems/sentinelx",
  },
  {
    title: "AI / Data Applications",
    description: "Backend integrations and data workflows that connect application logic with analytical or external systems.",
    technologies: ["Python", "Django", "REST APIs", "PostgreSQL", "Machine Learning"],
    project: "Wise Trade",
    projectHref: "/problems/wise-trade",
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
    githubHref: "https://github.com/artham/sentinelx",
  },
  {
    name: "Spring Boot",
    category: "Backend",
    where: "Used in SentinelX to build the application layer and expose service endpoints, telemetry, and health data.",
    related: ["REST APIs", "Spring MVC", "Spring Data JPA"],
    project: "SentinelX",
    projectHref: "/problems/sentinelx",
    githubHref: "https://github.com/artham/sentinelx",
  },
  {
    name: "Python",
    category: "Languages",
    where: "Used in Wise Trade for backend processing, API-driven workflows, and data-oriented application development.",
    related: ["Django", "Flask", "REST APIs"],
    project: "Wise Trade",
    projectHref: "/problems/wise-trade",
    githubHref: "https://github.com/artham/wise-trade",
  },
  {
    name: "Django",
    category: "Backend",
    where: "The primary framework for Wise Trade, supporting application logic, API exposure, and structured backend data flows.",
    related: ["Python", "PostgreSQL", "REST APIs"],
    project: "Wise Trade",
    projectHref: "/problems/wise-trade",
    githubHref: "https://github.com/artham/wise-trade",
  },
  {
    name: "PostgreSQL",
    category: "Databases",
    where: "Used in Wise Trade to store analysis data and structured records for backend-driven workflows.",
    related: ["MySQL", "SQLite", "DBMS"],
    project: "Wise Trade",
    projectHref: "/problems/wise-trade",
    githubHref: "https://github.com/artham/wise-trade",
  },
  {
    name: "Prometheus",
    category: "Tools / Infrastructure",
    where: "Used in SentinelX for telemetry collection and monitoring flows that expose service health and performance signals.",
    related: ["Grafana", "Micrometer", "Observability"],
    project: "SentinelX",
    projectHref: "/problems/sentinelx",
    githubHref: "https://github.com/artham/sentinelx",
  },
  {
    name: "Grafana",
    category: "Tools / Infrastructure",
    where: "Used in SentinelX to create visibility around operational health and system signals.",
    related: ["Prometheus", "Micrometer", "Observability"],
    project: "SentinelX",
    projectHref: "/problems/sentinelx",
    githubHref: "https://github.com/artham/sentinelx",
  },
  {
    name: "Data Structures & Algorithms",
    category: "Core",
    where: "Applied through problem solving and structured algorithmic practice, with 750+ problems completed.",
    related: ["Arrays", "Strings", "Hashing", "Binary Search", "Dynamic Programming"],
    project: "Problem Solving",
    projectHref: "/#problem-solving",
    githubHref: "https://github.com/artham",
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
