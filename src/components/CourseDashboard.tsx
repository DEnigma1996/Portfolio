import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PHASES, SESSIONS, WEEK_DATA, type PhaseFilter } from '../data/courseData';
import './CourseDashboard.css';

export type Tab = 'overview' | 'sessions' | 'planner' | 'blog';

interface Props {
  initialTab?: Tab;
  onTabChange?: (tab: Tab) => void;
}

const STORAGE_KEY = 'jf_done';

function loadDone(): number[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveDone(done: number[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
}

function levelClass(l: string) {
  if (l === 'Beginner') return 'beginner';
  if (l === 'Advanced') return 'advanced';
  return 'intermediate';
}

function toTabLabel(tab: Tab) {
  if (tab === 'overview') return 'Overview';
  if (tab === 'sessions') return 'All Sessions';
  if (tab === 'planner') return 'Study Planner';
  return 'Blog & Social';
}

export default function CourseDashboard({ initialTab = 'overview', onTabChange }: Props) {
  const [tab, setTab] = useState<Tab>(initialTab);
  const [done, setDone] = useState<number[]>(loadDone);
  const [filter, setFilter] = useState<PhaseFilter>('all');
  const [openSessions, setOpenSessions] = useState<Set<number>>(new Set());

  useEffect(() => {
    setTab(initialTab);
  }, [initialTab]);

  const doneSet = new Set(done);
  const doneCount = done.length;
  const pct = Math.round((doneCount / SESSIONS.length) * 100);

  const changeTab = useCallback(
    (nextTab: Tab) => {
      setTab(nextTab);
      onTabChange?.(nextTab);
    },
    [onTabChange]
  );

  const toggleDone = useCallback((n: number) => {
    setDone((prev) => {
      const next = prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n];
      saveDone(next);
      return next;
    });
  }, []);

  const toggleOpen = useCallback((n: number) => {
    setOpenSessions((prev) => {
      const next = new Set(prev);
      if (next.has(n)) {
        next.delete(n);
      } else {
        next.add(n);
      }
      return next;
    });
  }, []);

  const goToPhase = (phaseId: string) => {
    setFilter(phaseId as PhaseFilter);
    changeTab('sessions');
  };

  const filteredSessions =
    filter === 'all' ? SESSIONS : SESSIONS.filter((s) => s.ph === filter);

  return (
    <div className="course-dashboard">
      <div className="dash-header-top">
        <Link className="dash-back-btn" to="/">
          ← Back to Portfolio
        </Link>
      </div>

      <div className="dash-header">
        <div className="dash-header-text">
          <h1>Java Fullstack Development</h1>
          <p>G4G Curriculum + roadmap.sh · 30 Sessions · 20 Weeks</p>
        </div>
        <div className="dash-stats">
          <div className="dash-stat">
            <span className="dash-stat-num">{doneCount}</span>
            <span className="dash-stat-lbl">Sessions Done</span>
          </div>
          <div className="dash-stat">
            <span className="dash-stat-num">{SESSIONS.length}</span>
            <span className="dash-stat-lbl">Total Sessions</span>
          </div>
          <div className="dash-stat">
            <span className="dash-stat-num">120</span>
            <span className="dash-stat-lbl">Exercises</span>
          </div>
          <div className="dash-stat">
            <span className="dash-stat-num">100+</span>
            <span className="dash-stat-lbl">HackerRank</span>
          </div>
        </div>
      </div>

      <nav className="dash-nav" aria-label="Learning dashboard tabs">
        {(['overview', 'sessions', 'planner', 'blog'] as Tab[]).map((nextTab) => (
          <button
            key={nextTab}
            className={`dash-nav-btn ${tab === nextTab ? 'active' : ''}`}
            onClick={() => changeTab(nextTab)}
            aria-current={tab === nextTab ? 'page' : undefined}
          >
            {toTabLabel(nextTab)}
          </button>
        ))}
      </nav>

      <div className="dash-main">
        {tab === 'overview' && (
          <>
            <div className="prog-block">
              <div className="prog-label-row">
                <span>Overall Course Progress</span>
              </div>
              <div className="prog-bar-track">
                <div className="prog-bar-fill" style={{ width: `${pct}%` }} />
              </div>
              <div className="prog-nums">
                <span>
                  {doneCount} / {SESSIONS.length} sessions completed
                </span>
                <span>{pct}%</span>
              </div>
            </div>

            <div className="phase-grid">
              {PHASES.map((ph) => {
                const total = ph.sessions.length;
                const cnt = ph.sessions.filter((s) => doneSet.has(s)).length;
                return (
                  <button
                    key={ph.id}
                    type="button"
                    className="phase-card"
                    onClick={() => goToPhase(ph.id)}
                  >
                    <div className="phase-card-hdr" style={{ background: ph.color }}>
                      <div>
                        <div className="phase-card-name">{ph.id}</div>
                        <div className="phase-card-range">
                          S{ph.sessions[0]}–S{ph.sessions[ph.sessions.length - 1]} · {total} sessions
                        </div>
                      </div>
                      <div className="phase-card-count">
                        {cnt}/{total}
                      </div>
                    </div>
                    <div className="phase-card-body">
                      <div className="phase-mini-bar">
                        <div
                          className="phase-mini-fill"
                          style={{ width: `${(cnt / total) * 100}%`, background: ph.color }}
                        />
                      </div>
                      <div className="phase-topics">{ph.topics}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        )}

        {tab === 'sessions' && (
          <>
            <div className="filter-bar">
              {(
                ['all', 'Core Java', 'Spring Boot', 'Data Layer', 'Security', 'Distributed', 'Roadmap.sh'] as PhaseFilter[]
              ).map((f) => (
                <button
                  key={f}
                  className={`filter-chip ${filter === f ? 'active' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f === 'all' ? 'All' : f}
                </button>
              ))}
            </div>

            <div className="sessions-list">
              {filteredSessions.map((s) => {
                const phase = PHASES.find((p) => p.id === s.ph) ?? { color: '#5F5E5A' };
                const isOpen = openSessions.has(s.n);
                const isDone = doneSet.has(s.n);
                return (
                  <div key={s.n} className="session-card">
                    <div
                      className="session-header"
                      role="button"
                      tabIndex={0}
                      aria-expanded={isOpen}
                      onClick={() => toggleOpen(s.n)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleOpen(s.n);
                        }
                      }}
                    >
                      <div className="session-num" style={{ background: phase.color }}>
                        S{s.n}
                      </div>
                      <div className="session-info">
                        <div className="session-title">{s.t}</div>
                        <div className="session-meta">
                          {s.w} · {s.ph} · {s.ex} exercises · {s.hr} HackerRank
                        </div>
                      </div>
                      <div className="session-actions" onClick={(e) => e.stopPropagation()}>
                        <button
                          className={`session-check ${isDone ? 'done' : ''}`}
                          onClick={() => toggleDone(s.n)}
                          aria-label="Toggle complete"
                          aria-pressed={isDone}
                        >
                          {isDone ? '✓' : ''}
                        </button>
                        <button
                          className="session-toggle"
                          onClick={() => toggleOpen(s.n)}
                          aria-expanded={isOpen}
                          aria-controls={`session-body-${s.n}`}
                        >
                          {isOpen ? 'Close' : 'Details'}
                        </button>
                      </div>
                    </div>

                    <div id={`session-body-${s.n}`} className={`session-body ${isOpen ? 'open' : ''}`}>
                      <div className="session-section">
                        <div className="session-section-title">Topics</div>
                        <div className="session-topics-text">{s.topics}</div>
                      </div>

                      <div className="session-section">
                        <div className="session-section-title">Exercises & Knowledge Checks</div>
                        <div className="q-list">
                          {s.qs.map((q, i) => (
                            <div key={i} className="q-item">
                              <span className={`q-badge ${levelClass(q.l)}`}>{q.l}</span>
                              {q.q}
                            </div>
                          ))}
                        </div>
                      </div>

                      {s.hrlinks.length > 0 && (
                        <div className="session-section">
                          <div className="session-section-title">HackerRank Challenges</div>
                          <div className="hr-chips">
                            {s.hrlinks.map((h, i) => (
                              <span key={i} className="hr-chip">
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {tab === 'planner' && (
          <div className="planner-grid">
            {WEEK_DATA.map((wk) => (
              <div key={wk.w} className="week-card">
                <div className="week-card-hdr" style={{ background: wk.color }}>
                  <span className="week-num">{wk.w}</span>
                  <span className="week-theme">{wk.theme}</span>
                </div>
                <div className="week-card-body">
                  {wk.sessions.map((sn) => {
                    const session = SESSIONS.find((x) => x.n === sn);
                    const isDone = doneSet.has(sn);
                    return (
                      <div key={sn} className="week-session-row">
                        <div className="week-snum" style={{ background: wk.color }}>
                          S{sn}
                        </div>
                        <div className="week-sname">{session?.t ?? ''}</div>
                        <button
                          type="button"
                          className={`week-check ${isDone ? 'done' : ''}`}
                          onClick={() => toggleDone(sn)}
                          aria-label={`Toggle completion for session ${sn}`}
                          aria-pressed={isDone}
                        >
                          {isDone ? '✓' : ''}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'blog' && (
          <>
            <div className="blog-section">
              <h3>SEO-Optimized Blog Titles</h3>
              <div className="blog-title-item">Java Fullstack Development Roadmap 2025: Complete 30-Session Course from OOP to Microservices</div>
              <div className="blog-title-item">Java Spring Boot Complete Guide 2025: REST APIs, JPA, Security, Kafka &amp; Microservices</div>
              <div className="blog-title-item">Java Interview Preparation 2025: 120 Exercises from OOP to System Design (with Answers)</div>

              <div style={{ marginTop: '1rem' }}>
                <div className="kw-label">Meta Description</div>
                <div className="meta-desc-box">
                  Master Java fullstack development in 30 structured sessions — Java Core, Spring Boot, JPA, Redis, Spring Security, Kafka, Microservices, Docker, and system design. 120 exercises + 100+ HackerRank challenges. Free curriculum based on G4G + roadmap.sh.
                </div>
              </div>

              <div>
                <div className="kw-label">Target Keywords</div>
                <div className="kw-pills">
                  {['java fullstack tutorial 2025','spring boot complete guide','java backend developer roadmap','java interview preparation','microservices java spring','kafka spring boot tutorial','spring security jwt tutorial','java jpa hibernate tutorial','docker java spring boot','java design patterns gof'].map(kw => (
                    <span key={kw} className="kw-pill">{kw}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="blog-section">
              <h3>LinkedIn Post</h3>
              <div className="social-post-card" style={{ borderLeftColor: '#0A66C2' }}>
                <div className="social-platform-label" style={{ color: '#0A66C2' }}>LinkedIn</div>
                <div className="social-post-body">{`Java developers — here's the most complete free roadmap I've seen for going from OOP basics to production-grade microservices. 🚀

30 structured sessions. 120 exercises. 100+ HackerRank challenges. Every topic covered:

𝗖𝗼𝗿𝗲 𝗝𝗮𝘃𝗮 (S1–S4)
→ OOP, Java 8 Streams, Virtual Threads (Java 21), Maven/Gradle

𝗦𝗽𝗿𝗶𝗻𝗴 𝗕𝗼𝗼𝘁 (S5–S8)
→ REST APIs, IoC/DI, JDBC, structured logging, AOP

𝗗𝗮𝘁𝗮 𝗟𝗮𝘆𝗲𝗿 (S9–S12)
→ JPA, Hibernate, N+1 problem, JUnit 5, Mockito, TDD

𝗦𝗲𝗰𝘂𝗿𝗶𝘁𝘆 (S13–S16)
→ Redis caching, Spring Security, JWT, OAuth 2.0, GitHub Login

𝗗𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲𝗱 (S17–S20)
→ Microservices, Kafka, Spring Cloud, E-Wallet major project

𝗥𝗼𝗮𝗱𝗺𝗮𝗽.𝘀𝗵 𝗘𝘅𝘁 (S21–S30)
→ Docker/CI-CD, GOF Patterns, GraphQL, gRPC, Observability, System Design at Scale

📌 Full curriculum guide + exercises in comments 👇

What's the hardest Java topic you've tackled? Drop it below ⬇️`}</div>
                <div className="social-post-tags">#JavaDeveloper #SpringBoot #Microservices #BackendDevelopment #JavaFullstack #100DaysOfCode #SoftwareEngineering</div>
                <div className="social-post-meta">~1,100 chars · 7 hashtags · Optimal LinkedIn length</div>
              </div>
            </div>

            <div className="blog-section">
              <h3>Twitter / X Thread (10 tweets)</h3>

              <div className="social-post-card" style={{ borderLeftColor: '#1DA1F2' }}>
                <div className="social-platform-label" style={{ color: '#1DA1F2' }}>Tweet 1/10 — Hook</div>
                <div className="social-post-body">{`Java fullstack from OOP to Microservices — a complete free 30-session roadmap.

Video scripts. 120 exercises. 100+ HackerRank links.

Here's every topic broken down 🧵👇`}</div>
                <div className="social-post-meta">185 chars ✓</div>
              </div>

              <div className="social-post-card" style={{ borderLeftColor: '#1DA1F2' }}>
                <div className="social-platform-label" style={{ color: '#1DA1F2' }}>Tweets 2–5 — Core Phases</div>
                <div className="social-post-body">{`Phase 1 — Core Java (S1–S4):
→ OOP: 4 pillars, pass-by-value, Singleton
→ Java 8: Streams, Optionals, Functional Interfaces
→ Virtual Threads (Java 21) — 1M threads, no crash
→ Maven + Gradle: POM, scopes, incremental builds

---
Phase 2 — Spring Boot (S5–S8):
→ @SpringBootApplication, embedded servers
→ REST API: OpenAPI, ProblemDetail (RFC 7807)
→ IoC + DI: constructor injection, @ConditionalOnProperty
→ JDBC, java.time, Regex, File I/O

---
Phase 3 — Data Layer (S9–S12):
→ JPA/Hibernate: N+1 fix, @EntityGraph
→ JPQL: constructor expressions, JOIN FETCH
→ Digital Library project: borrow/return, optimistic locking
→ JUnit 5 + Mockito: TDD, @ParameterizedTest, MockMvc

---
Phase 4 — Security (S13–S16):
→ Redis: 5 data structures, cache stampede prevention
→ Spring Security: filter chain, JWT, @PreAuthorize
→ Integration testing: @SpringBootTest, @DataJpaTest
→ OAuth 2.0: GitHub login, OIDC, success handler`}</div>
              </div>

              <div className="social-post-card" style={{ borderLeftColor: '#1DA1F2' }}>
                <div className="social-platform-label" style={{ color: '#1DA1F2' }}>Tweets 6–9 — Advanced Phases</div>
                <div className="social-post-body">{`Phase 5 — Distributed Systems (S17–S20):
→ Microservices, Eureka, Feign, Circuit Breaker
→ Kafka: topics, partitions, consumer groups, outbox pattern
→ E-Wallet project: transfer atomicity, Redis rate limiting
→ Career guidance + system design at 10k TPS

---
Phase 6 — Roadmap.sh Extensions (S21–S30):
→ Git: rebase, hooks, bisect
→ HTTP/2 vs HTTP/3, TLS handshake
→ Docker multi-stage, GitHub Actions CI/CD
→ GOF Patterns: Strategy, Observer, Chain of Responsibility

---
S28–S30 are where it gets serious:
→ GraphQL + gRPC streaming
→ Micrometer + Prometheus + Grafana + Zipkin
→ Circuit breakers (Resilience4j)
→ CAP theorem, event sourcing, DB sharding

---
Every session has:
✅ Video script with live demo cues
✅ 4 exercises: Beginner → Intermediate → Advanced
✅ HackerRank challenge links
✅ Interview-ready Q&A`}</div>
              </div>

              <div className="social-post-card" style={{ borderLeftColor: '#1DA1F2' }}>
                <div className="social-platform-label" style={{ color: '#1DA1F2' }}>Tweet 10/10 — CTA</div>
                <div className="social-post-body">{`Full 30-session curriculum:
→ PDF course guide
→ Interactive study tracker
→ Week-by-week planner
→ Exercise bank (120 Q&A)

→ [your blog link]

Bookmark this if you're learning Java in 2025 🙏

#Java #SpringBoot #Microservices #100DaysOfCode`}</div>
                <div className="social-post-meta">231 chars ✓</div>
              </div>
            </div>

            <div className="blog-section">
              <h3>TikTok / YouTube Short Script</h3>
              <div className="tiktok-card">
                <div className="social-platform-label" style={{ color: '#FE2C55' }}>TikTok Script — 60 seconds</div>
                {[
                  { label: '🎬 Hook (0–3s)', text: '"The most complete free Java roadmap on the internet — and it\'s 30 sessions covering everything from OOP to Kafka."' },
                  { label: '📹 Scene 1 (3–18s) — Screen: session list', text: '"30 sessions. 6 phases. Weeks 1–10 cover Java Core, Spring Boot, JPA, Security, Microservices, and a real E-Wallet project."' },
                  { label: '📹 Scene 2 (18–35s) — Screen: exercise Q&A', text: '"Every session has exercises at 3 levels — Beginner, Intermediate, Advanced — with full answers. Plus HackerRank links."' },
                  { label: '📹 Scene 3 (35–50s) — Screen: advanced sessions', text: '"Weeks R1–R10 add Docker, CI/CD, GraphQL, gRPC, Observability with Prometheus and Grafana, and building for scale."' },
                  { label: '🎤 Outro (50–60s)', text: '"Full PDF guide, interactive tracker, and week-by-week planner — link in bio. What Java topic are you working on right now? Comment below."' },
                ].map((scene, i) => (
                  <div key={i} className="tiktok-scene">
                    <div className="tiktok-scene-label">{scene.label}</div>
                    <div className="tiktok-scene-text">{scene.text}</div>
                  </div>
                ))}
                <div className="tiktok-hashtags">#java #springboot #coding #learntocode #microservices #javadeveloper #techtok</div>
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
