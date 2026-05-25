export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'java-fullstack-roadmap-2026',
    title: 'Java Fullstack Roadmap 2026: From Core Java to Production Microservices',
    description: 'A practical 30-session roadmap for learning Java backend and fullstack engineering.',
    date: '2026-05-20',
    tags: ['Java', 'Spring Boot', 'Roadmap'],
    excerpt: 'A structured learning path that moves from Java fundamentals to scalable distributed systems.',
    content: [
      'This roadmap is designed for developers who want a repeatable path into professional Java backend development.',
      'Start with Java and language fundamentals, then layer in Spring Boot, data access patterns, and security.',
      'Finish with distributed systems, observability, and scalability so your portfolio reflects production-ready skills.',
    ],
  },
  {
    slug: 'spring-boot-api-checklist',
    title: 'Spring Boot API Checklist for Portfolio Projects',
    description: 'A concise checklist for building clean and interview-ready Spring Boot APIs.',
    date: '2026-05-12',
    tags: ['Spring Boot', 'REST', 'Backend'],
    excerpt: 'Use this checklist to tighten API design, error handling, validation, and deployment readiness.',
    content: [
      'Define clear resource boundaries and naming conventions for your API before implementation starts.',
      'Use validation and consistent error responses to improve client reliability and debugging speed.',
      'Include tests, logging, and performance baselines so your API demonstrates operational maturity.',
    ],
  },
  {
    slug: 'learning-in-public-for-developers',
    title: 'Learning in Public as a Developer: A Minimal System That Works',
    description: 'How to publish learning notes and project updates consistently without burnout.',
    date: '2026-05-05',
    tags: ['Career', 'Learning', 'Productivity'],
    excerpt: 'A lightweight content loop for sharing what you build, what you learn, and what you improve next.',
    content: [
      'Pick one channel for short updates and one channel for deeper write-ups to keep effort sustainable.',
      'Document decisions, trade-offs, and retrospectives from projects to create useful long-form posts.',
      'Consistency beats volume: one useful post per week is enough to compound your public profile.',
    ],
  },
];

export const BLOG_POSTS_BY_SLUG = new Map(BLOG_POSTS.map((post) => [post.slug, post]));
