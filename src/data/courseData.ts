export type PhaseName =
  | 'Core Java'
  | 'Spring Boot'
  | 'Data Layer'
  | 'Security'
  | 'Distributed'
  | 'Roadmap.sh';

export type PhaseFilter = 'all' | PhaseName;

export interface Question {
  l: 'Beginner' | 'Intermediate' | 'Advanced';
  q: string;
}

export interface Session {
  n: number;
  t: string;
  w: string;
  ph: PhaseName;
  ex: number;
  hr: number;
  topics: string;
  qs: Question[];
  hrlinks: string[];
}

export interface Phase {
  id: PhaseName;
  color: string;
  topics: string;
  sessions: number[];
}

export interface WeekPlan {
  w: string;
  theme: string;
  color: string;
  sessions: number[];
}

const PHASE_COLORS: Record<PhaseName, string> = {
  'Core Java': '#2563EB',
  'Spring Boot': '#1D9E75',
  'Data Layer': '#7C3AED',
  Security: '#DC2626',
  Distributed: '#EA580C',
  'Roadmap.sh': '#0F766E',
};

const SESSION_TITLES = [
  'Java OOP Fundamentals',
  'Java 8 Streams and Optionals',
  'Modern Java Concurrency',
  'Build Tools: Maven and Gradle',
  'Spring Boot Foundations',
  'REST API Design and Validation',
  'Dependency Injection Patterns',
  'Logging, Exceptions, and AOP',
  'JPA Entities and Relationships',
  'Hibernate Query Optimization',
  'Transactional Service Patterns',
  'Testing with JUnit and Mockito',
  'Redis and Caching Patterns',
  'Spring Security Fundamentals',
  'JWT Authentication Flow',
  'OAuth2 and Social Login',
  'Microservices Architecture',
  'Service Discovery and Gateway',
  'Event-Driven with Kafka',
  'E-Wallet Capstone Integration',
  'Git and Team Workflow',
  'HTTP Internals and Networking',
  'Docker and CI/CD Basics',
  'Design Patterns in Java',
  'System Design Foundations',
  'GraphQL for Java APIs',
  'gRPC and Async Communication',
  'Observability and Monitoring',
  'Resilience and Fault Tolerance',
  'Scaling Data and Architecture',
] as const;

function phaseForSession(n: number): PhaseName {
  if (n <= 4) return 'Core Java';
  if (n <= 8) return 'Spring Boot';
  if (n <= 12) return 'Data Layer';
  if (n <= 16) return 'Security';
  if (n <= 20) return 'Distributed';
  return 'Roadmap.sh';
}

function weekForSession(n: number): string {
  return `Week ${Math.ceil(n / 3)}`;
}

export const SESSIONS: Session[] = SESSION_TITLES.map((title, index) => {
  const n = index + 1;
  const ph = phaseForSession(n);
  return {
    n,
    t: title,
    w: weekForSession(n),
    ph,
    ex: 4,
    hr: 3,
    topics: `${title} with guided exercises, implementation walkthroughs, and interview-style recap questions.`,
    qs: [
      { l: 'Beginner', q: `Explain the core idea of ${title.toLowerCase()}.` },
      { l: 'Intermediate', q: `Implement a practical feature using ${title.toLowerCase()}.` },
      { l: 'Advanced', q: `Discuss trade-offs and production concerns for ${title.toLowerCase()}.` },
    ],
    hrlinks: ['Warm-up challenge', 'Applied coding challenge'],
  };
});

export const PHASES: Phase[] = [
  {
    id: 'Core Java',
    color: PHASE_COLORS['Core Java'],
    topics: 'OOP, Java 8+, concurrency, tooling',
    sessions: [1, 2, 3, 4],
  },
  {
    id: 'Spring Boot',
    color: PHASE_COLORS['Spring Boot'],
    topics: 'Boot apps, APIs, validation, DI',
    sessions: [5, 6, 7, 8],
  },
  {
    id: 'Data Layer',
    color: PHASE_COLORS['Data Layer'],
    topics: 'JPA/Hibernate, transactions, testing',
    sessions: [9, 10, 11, 12],
  },
  {
    id: 'Security',
    color: PHASE_COLORS.Security,
    topics: 'Redis, Spring Security, JWT, OAuth2',
    sessions: [13, 14, 15, 16],
  },
  {
    id: 'Distributed',
    color: PHASE_COLORS.Distributed,
    topics: 'Microservices, discovery, Kafka, capstone',
    sessions: [17, 18, 19, 20],
  },
  {
    id: 'Roadmap.sh',
    color: PHASE_COLORS['Roadmap.sh'],
    topics: 'DevOps, architecture, observability, scale',
    sessions: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  },
];

export const WEEK_DATA: WeekPlan[] = [
  { w: 'W1', theme: 'Core Java Kickoff', color: '#2563EB', sessions: [1, 2, 3] },
  { w: 'W2', theme: 'Java + Spring Intro', color: '#1D9E75', sessions: [4, 5, 6] },
  { w: 'W3', theme: 'Spring Foundations', color: '#1D9E75', sessions: [7, 8, 9] },
  { w: 'W4', theme: 'Data Layer Focus', color: '#7C3AED', sessions: [10, 11, 12] },
  { w: 'W5', theme: 'Security Patterns', color: '#DC2626', sessions: [13, 14, 15] },
  { w: 'W6', theme: 'Auth and Security', color: '#DC2626', sessions: [16, 17, 18] },
  { w: 'W7', theme: 'Distributed Systems', color: '#EA580C', sessions: [19, 20, 21] },
  { w: 'W8', theme: 'Roadmap Extensions I', color: '#0F766E', sessions: [22, 23, 24] },
  { w: 'W9', theme: 'Roadmap Extensions II', color: '#0F766E', sessions: [25, 26, 27] },
  { w: 'W10', theme: 'Scale and Reliability', color: '#0F766E', sessions: [28, 29, 30] },
];
