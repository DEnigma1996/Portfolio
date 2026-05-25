export type Level = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Question {
  l: Level;
  q: string;
}

export interface Session {
  n: number;
  t: string;
  w: string;
  ph: string;
  ex: number;
  hr: number;
  topics: string;
  qs: Question[];
  hrlinks: string[];
}

export interface Phase {
  id: string;
  color: string;
  lite: string;
  sessions: number[];
  topics: string;
}

export interface WeekData {
  w: string;
  theme: string;
  color: string;
  sessions: number[];
}

export const SESSIONS: Session[] = [
  {n:1,t:"Java OOP Fundamentals",w:"Week 1",ph:"Core Java",ex:4,hr:5,topics:"OOP pillars, Pass-by-Value, Singleton, Annotations, Exceptions",qs:[{l:"Beginner",q:"Explain Java's pass-by-value for primitives vs objects"},{l:"Intermediate",q:"Checked vs unchecked exceptions"},{l:"Intermediate",q:"Create a custom @NotEmpty annotation"},{l:"Advanced",q:"Shape hierarchy with Resizable interface"}],hrlinks:["Java Inheritance I","Java Inheritance II","Java Abstract Class","Java Interface","Java Exception Handling"]},
  {n:2,t:"Java 8: Functional, Collections & Optionals",w:"Week 1",ph:"Core Java",ex:4,hr:5,topics:"Streams, Lambdas, Optional, Collections, Iterator",qs:[{l:"Beginner",q:"Array vs ArrayList vs LinkedList vs ArrayDeque complexities"},{l:"Intermediate",q:"Safe element removal with Iterator"},{l:"Intermediate",q:"wordFrequency() top 3 with Streams + Optional"},{l:"Advanced",q:"Generic PriorityTaskQueue"}],hrlinks:["Java List","Java Map","Java Stack","Java Iterator","Java Lambda Expressions"]},
  {n:3,t:"Multithreading, Virtual Threads & JMM",w:"Week 2",ph:"Core Java",ex:4,hr:4,topics:"volatile, JMM, Virtual Threads (Java 21), ExecutorService",qs:[{l:"Beginner",q:"Java Memory Model and volatile guarantees"},{l:"Intermediate",q:"5 threads summing array with join() + Virtual Threads"},{l:"Intermediate",q:"What are Virtual Threads? What problem do they solve?"},{l:"Advanced",q:"Thread-safe BoundedBlockingQueue + 1000 virtual thread benchmark"}],hrlinks:["Java Thread","Java Synchronized Methods","Java Atomics","Data Structures"]},
  {n:4,t:"Maven, Gradle & Build Tools",w:"Week 2",ph:"Core Java",ex:4,hr:2,topics:"POM.xml, Lifecycle, Scopes, Gradle DSL, Multi-module",qs:[{l:"Beginner",q:"Maven dependency scopes: compile, test, provided, runtime"},{l:"Intermediate",q:"Gradle build.gradle for Spring Boot 3.x"},{l:"Intermediate",q:"Why is Gradle faster than Maven?"},{l:"Advanced",q:"Multi-module Gradle with custom task"}],hrlinks:["Java Projects (Basic)","Java Projects (Intermediate)"]},
  {n:5,t:"Spring Boot Basics",w:"Week 3",ph:"Spring Boot",ex:4,hr:2,topics:"@SpringBootApplication, SLF4J/Logback, Profiles, AOP",qs:[{l:"Beginner",q:"SLF4J + Logback relationship"},{l:"Intermediate",q:"Production logback-spring.xml with MDC tracing"},{l:"Intermediate",q:"What is structured logging?"},{l:"Advanced",q:"@Around AOP aspect logging @Service methods"}],hrlinks:["REST API Intro","Java Basic Skills"]},
  {n:6,t:"REST API & Spring MVC",w:"Week 3",ph:"Spring Boot",ex:4,hr:2,topics:"OpenAPI, ProblemDetail, Lombok, @ControllerAdvice, Versioning",qs:[{l:"Beginner",q:"OpenAPI Spec vs Swagger — API-first design benefits"},{l:"Intermediate",q:"RFC 7807 ProblemDetail responses"},{l:"Intermediate",q:"Lombok @Builder with defaults + toBuilder()"},{l:"Advanced",q:"Versioned API: URL path AND Accept header"}],hrlinks:["REST API Weather","REST API Practice"]},
  {n:7,t:"Spring IOC & Dependency Injection",w:"Week 4",ph:"Spring Boot",ex:4,hr:2,topics:"IoC Container, Constructor DI, Bean Scopes, @ConditionalOnProperty",qs:[{l:"Beginner",q:"Constructor injection vs field injection"},{l:"Intermediate",q:"NotificationService unit test without Spring context"},{l:"Intermediate",q:"@ConfigurationProperties with enum and Duration"},{l:"Advanced",q:"Plugin system via ApplicationContext.getBeansOfType()"}],hrlinks:["Java Factory Pattern","Java Design Patterns"]},
  {n:8,t:"JDBC, Advanced Java I/O & Date/Time API",w:"Week 4",ph:"Spring Boot",ex:4,hr:3,topics:"JdbcTemplate, java.time, File I/O, Regex, BufferedReader",qs:[{l:"Beginner",q:"Why avoid java.util.Date? Key java.time classes"},{l:"Intermediate",q:"DateUtils: parseDate, businessDaysBetween, formatForTimezone"},{l:"Intermediate",q:"parseCSV returning List<Map<String,String>>"},{l:"Advanced",q:"DataMasker: credit cards, emails, phone numbers"}],hrlinks:["SQL Basic Select","Java Regex","Java Regex II"]},
  {n:9,t:"JPA & Hibernate",w:"Week 5",ph:"Data Layer",ex:4,hr:2,topics:"@Entity, N+1, @EntityGraph, @Transactional, Optimistic Locking",qs:[{l:"Beginner",q:"The N+1 problem — two fixes"},{l:"Intermediate",q:"@Entity Product with @Version, timestamps"},{l:"Intermediate",q:"ProductRepository: method naming + @Query"},{l:"Advanced",q:"ProductService with readOnly transactions + 409 for optimistic lock"}],hrlinks:["SQL Advanced Select","SQL Joins"]},
  {n:10,t:"JPQL, JPA Relationships & Digital Library",w:"Week 5",ph:"Data Layer",ex:4,hr:2,topics:"@OneToMany, @ManyToOne, @ManyToMany, JPQL constructor expressions",qs:[{l:"Beginner",q:"Owning side vs inverse side in bidirectional JPA"},{l:"Intermediate",q:"Library borrow/return with @Transactional"},{l:"Intermediate",q:"JPQL: overdue loans, author summary, top borrowed"},{l:"Advanced",q:"@ManyToMany + bulk borrow atomicity"}],hrlinks:["SQL Advanced Joins","SQL Top Earners"]},
  {n:11,t:"Digital Library — Final Phase & Data Modelling",w:"Week 6",ph:"Data Layer",ex:4,hr:2,topics:"@Scheduled, Specification, Pagination, OpenAPI, Integration",qs:[{l:"Beginner",q:"@Scheduled daily overdue loan job"},{l:"Intermediate",q:"Specification dynamic filter for books"},{l:"Intermediate",q:"OpenAPI @Tag, @Operation + JWT SecurityScheme"},{l:"Advanced",q:"Optimistic locking + concurrent borrow integration test"}],hrlinks:["SQL Challenges","Java Intermediate"]},
  {n:12,t:"Unit Testing with JUnit 5 & Mockito",w:"Week 6",ph:"Data Layer",ex:4,hr:2,topics:"@ExtendWith, @Mock, @InjectMocks, TDD, @ParameterizedTest, MockMvc",qs:[{l:"Beginner",q:"Mock vs Stub vs Spy"},{l:"Intermediate",q:"LoanService tests: happy path, limit, unavailable"},{l:"Intermediate",q:"@ParameterizedTest for PasswordValidator"},{l:"Advanced",q:"MockMvc: 200 list, 400 validation, 404 ProblemDetail"}],hrlinks:["Java Testing","Problem Solving"]},
  {n:13,t:"Redis & Caching",w:"Week 7",ph:"Security",ex:4,hr:2,topics:"5 Data Structures, @Cacheable, TTL, Rate Limiting, SETNX",qs:[{l:"Beginner",q:"5 Redis data structures with use cases"},{l:"Intermediate",q:"Spring Boot Redis caching 10min TTL"},{l:"Intermediate",q:"Redis rate limiter 100 req/min per IP"},{l:"Advanced",q:"Distributed lock with SETNX (cache stampede)"}],hrlinks:["Data Structures","Java Advanced"]},
  {n:14,t:"Spring Security & Authentication",w:"Week 7",ph:"Security",ex:4,hr:2,topics:"Filter Chain, UserDetailsService, JWT, @PreAuthorize, STATELESS",qs:[{l:"Beginner",q:"Spring Security filter chain — 3 key filters"},{l:"Intermediate",q:"UserDetailsService loading from DB"},{l:"Intermediate",q:"SecurityConfig: STATELESS, JWT filter, role-based access"},{l:"Advanced",q:"Full JWT auth: login, register BCrypt, refresh token rotation"}],hrlinks:["REST API Auth","Java Security"]},
  {n:15,t:"Digital Library — Final Features & Testing",w:"Week 8",ph:"Security",ex:4,hr:2,topics:"@SpringBootTest, @WebMvcTest, @DataJpaTest, Spring Cloud Contract",qs:[{l:"Intermediate",q:"@SpringBootTest: login → borrow → duplicate 409"},{l:"Intermediate",q:"@WebMvcTest vs @SpringBootTest — when to use"},{l:"Intermediate",q:"@DataJpaTest for BookRepository"},{l:"Advanced",q:"Spring Cloud Contract stub for producer verification"}],hrlinks:["Java Testing","Problem Solving"]},
  {n:16,t:"OAuth 2.0 & GitHub Integration",w:"Week 8",ph:"Security",ex:4,hr:2,topics:"Authorization Code Flow, Scopes, OIDC, GitHub OAuth, Success Handler",qs:[{l:"Beginner",q:"OAuth 2.0 Authorization Code flow — step by step"},{l:"Intermediate",q:"GitHub OAuth2 in Spring Boot config + controller"},{l:"Intermediate",q:"OAuth2AuthenticationSuccessHandler with JWT redirect"},{l:"Advanced",q:"OAuth 2.0 vs OpenID Connect (OIDC)"}],hrlinks:["REST API Security","Java Advanced"]},
  {n:17,t:"Microservices Architecture",w:"Week 9",ph:"Distributed",ex:4,hr:2,topics:"Eureka, Feign, Load Balancing, Circuit Breaker, Saga Pattern",qs:[{l:"Beginner",q:"4 advantages and 4 disadvantages of microservices"},{l:"Intermediate",q:"Eureka + Feign client with circuit breaker fallback"},{l:"Intermediate",q:"Load balancing: Round Robin vs Least Connections vs Weighted"},{l:"Advanced",q:"Saga: choreography vs orchestration"}],hrlinks:["System Design","Java Advanced"]},
  {n:18,t:"Kafka & Spring Cloud",w:"Week 9",ph:"Distributed",ex:4,hr:2,topics:"Topics, Partitions, Consumer Groups, @KafkaListener, Outbox Pattern",qs:[{l:"Beginner",q:"Kafka: Topic, Partition, Consumer Group, Offset"},{l:"Intermediate",q:"@KafkaListener with dead-letter topic"},{l:"Intermediate",q:"Spring Cloud Config Server"},{l:"Advanced",q:"Transactional outbox pattern for guaranteed delivery"}],hrlinks:["System Design","Java Advanced"]},
  {n:19,t:"E-Wallet Major Project — Part 1",w:"Week 10",ph:"Distributed",ex:4,hr:2,topics:"Entities, Deposit/Withdraw, Transfer Atomicity, Redis Rate Limiting",qs:[{l:"Beginner",q:"E-Wallet entity design: User, Wallet, Transaction"},{l:"Intermediate",q:"Deposit + withdraw with @Transactional + optimistic lock"},{l:"Intermediate",q:"Transfer atomicity + idempotency key"},{l:"Advanced",q:"Redis Lua script rate limiting per user"}],hrlinks:["System Design","Problem Solving"]},
  {n:20,t:"E-Wallet Part 2 & Career Guidance",w:"Week 10",ph:"Distributed",ex:4,hr:5,topics:"Pagination, REST Design, Interview Topics, 10k TPS System Design",qs:[{l:"Intermediate",q:"Paginated transaction history with Specification"},{l:"Intermediate",q:"Idiomatic REST API design for E-Wallet"},{l:"Intermediate",q:"Java interview: HashMap internals, String pool, GC"},{l:"Advanced",q:"System design: E-Wallet at 10k TPS"}],hrlinks:["System Design","Java Advanced","Problem Solving","SQL","Algorithms"]},
  {n:21,t:"Git & Version Control",w:"Week R1",ph:"Roadmap.sh",ex:4,hr:2,topics:"merge vs rebase, hooks, bisect, conventional commits, stash",qs:[{l:"Beginner",q:"git merge vs rebase — when to use. Detached HEAD?"},{l:"Intermediate",q:"Feature branch workflow + squash + interactive rebase"},{l:"Intermediate",q:"Resolving merge conflicts + git bisect"},{l:"Advanced",q:"Git hooks: pre-commit + commit-msg validation"}],hrlinks:["Git Basics","Version Control"]},
  {n:22,t:"Internet Fundamentals & HTTP Deep Dive",w:"Week R2",ph:"Roadmap.sh",ex:4,hr:2,topics:"HTTP/1.1 vs 2 vs 3, TLS handshake, Caching headers, CDN",qs:[{l:"Beginner",q:"HTTP/1.1 vs HTTP/2 vs HTTP/3 key improvements"},{l:"Intermediate",q:"TCP 3-way handshake + TLS handshake"},{l:"Intermediate",q:"Cache-Control, ETag, Last-Modified — HTTP vs Spring caching"},{l:"Advanced",q:"CDN strategy for global Java API"}],hrlinks:["REST API","Problem Solving"]},
  {n:23,t:"Advanced Java: Records, Modules & Functional",w:"Week R3",ph:"Roadmap.sh",ex:4,hr:3,topics:"Records, Sealed Classes, JPMS, CompletableFuture, Retry with backoff",qs:[{l:"Beginner",q:"Java Records vs Lombok @Value vs regular class"},{l:"Intermediate",q:"Java modules: module-info.java, exports, opens"},{l:"Intermediate",q:"CompletableFuture: thenApply, thenCompose, allOf"},{l:"Advanced",q:"Retry utility: CompletableFuture + exponential backoff"}],hrlinks:["Java Advanced","Problem Solving","Algorithms"]},
  {n:24,t:"Database Deep Dive: ACID, Normalization, Indexes",w:"Week R4",ph:"Roadmap.sh",ex:4,hr:5,topics:"ACID, B-tree indexes, Optimistic vs Pessimistic, Sharding",qs:[{l:"Beginner",q:"ACID properties with banking transaction example"},{l:"Intermediate",q:"B-tree index internals — when NOT to add an index"},{l:"Intermediate",q:"Optimistic vs pessimistic locking"},{l:"Advanced",q:"Sharding strategies: range, hash, directory"}],hrlinks:["SQL Advanced","SQL Joins","SQL Aggregation","SQL Performance","Database Design"]},
  {n:25,t:"Web Security Deep Dive",w:"Week R5",ph:"Roadmap.sh",ex:4,hr:2,topics:"OWASP Top 10, CSRF, JWT pitfalls, HMAC-SHA256 webhook signing",qs:[{l:"Beginner",q:"OWASP Top 5 with mitigations"},{l:"Intermediate",q:"CSRF protection — when to disable in Spring"},{l:"Intermediate",q:"JWT security: what to verify, pitfalls"},{l:"Advanced",q:"HMAC-SHA256 webhook request signing"}],hrlinks:["Security Challenges","Java Advanced"]},
  {n:26,t:"Docker, Containerisation & CI/CD",w:"Week R6",ph:"Roadmap.sh",ex:4,hr:2,topics:"Dockerfile multi-stage, Docker Compose, GitHub Actions, Zero-downtime",qs:[{l:"Beginner",q:"Docker image vs container. Spring Boot Dockerfile"},{l:"Intermediate",q:"Docker Compose: Spring Boot + MySQL + Redis"},{l:"Intermediate",q:"GitHub Actions: test → build → push ECR → deploy ECS"},{l:"Advanced",q:"Zero-downtime: blue-green vs rolling vs canary"}],hrlinks:["Docker Challenges","DevOps"]},
  {n:27,t:"GOF Design Patterns",w:"Week R7",ph:"Roadmap.sh",ex:4,hr:2,topics:"Creational, Strategy, Template Method, Observer, Chain of Responsibility",qs:[{l:"Beginner",q:"Creational patterns: Factory, Builder, Singleton"},{l:"Intermediate",q:"Strategy vs Template Method"},{l:"Intermediate",q:"Observer with ApplicationEventPublisher"},{l:"Advanced",q:"Chain of Responsibility for HTTP validation pipeline"}],hrlinks:["Java Design Patterns","Problem Solving"]},
  {n:28,t:"GraphQL & gRPC",w:"Week R8",ph:"Roadmap.sh",ex:4,hr:2,topics:"GraphQL schema, Spring for GraphQL, Protobuf, Streaming, Performance",qs:[{l:"Beginner",q:"GraphQL vs REST — when to use each"},{l:"Intermediate",q:"Spring for GraphQL: @QueryMapping, @MutationMapping"},{l:"Intermediate",q:"gRPC vs REST performance — why gRPC is faster"},{l:"Advanced",q:"gRPC server streaming for real-time order updates"}],hrlinks:["API Design","Java Advanced"]},
  {n:29,t:"Observability: Logging, Monitoring & Tracing",w:"Week R9",ph:"Roadmap.sh",ex:4,hr:2,topics:"3 Pillars, Micrometer, Prometheus, Grafana, Zipkin, SLO alerting",qs:[{l:"Beginner",q:"3 pillars of observability: logs, metrics, traces"},{l:"Intermediate",q:"Micrometer + Prometheus + Grafana for Spring Boot"},{l:"Intermediate",q:"Distributed tracing with Micrometer Tracing (SB3)"},{l:"Advanced",q:"SLO-based alerting: 99.9% availability + p99 < 500ms"}],hrlinks:["Monitoring","Problem Solving"]},
  {n:30,t:"Building for Scale: Circuit Breakers & Patterns",w:"Week R10",ph:"Roadmap.sh",ex:4,hr:5,topics:"CAP theorem, Resilience4j, HikariCP sizing, Event Sourcing, CQRS",qs:[{l:"Beginner",q:"CAP theorem — real system examples"},{l:"Intermediate",q:"Resilience4j: CLOSED→OPEN→HALF-OPEN states"},{l:"Intermediate",q:"HikariCP pool sizing formula"},{l:"Advanced",q:"Event sourcing vs CRUD — trade-offs"}],hrlinks:["System Design","Algorithms","Java Advanced","Problem Solving","Scalability"]},
];

export const PHASES: Phase[] = [
  {id:"Core Java",color:"#185FA5",lite:"#E6F1FB",sessions:[1,2,3,4],topics:"OOP · Java 8 · Virtual Threads · Maven/Gradle"},
  {id:"Spring Boot",color:"#1D9E75",lite:"#E1F5EE",sessions:[5,6,7,8],topics:"Boot · REST API · IoC · JDBC · Logging"},
  {id:"Data Layer",color:"#534AB7",lite:"#EEEDFE",sessions:[9,10,11,12],topics:"JPA · Hibernate · JPQL · JUnit 5 · Mockito"},
  {id:"Security",color:"#854F0B",lite:"#FAEEDA",sessions:[13,14,15,16],topics:"Redis · Spring Security · JWT · OAuth 2.0"},
  {id:"Distributed",color:"#993C1D",lite:"#FAECE7",sessions:[17,18,19,20],topics:"Microservices · Kafka · Spring Cloud · E-Wallet"},
  {id:"Roadmap.sh",color:"#3B6D11",lite:"#EAF3DE",sessions:[21,22,23,24,25,26,27,28,29,30],topics:"Git · HTTP · Docker · Patterns · GraphQL · Scale"},
];

export const WEEK_DATA: WeekData[] = [
  {w:"Week 1",theme:"Core Java I",color:"#185FA5",sessions:[1,2]},
  {w:"Week 2",theme:"Core Java II",color:"#185FA5",sessions:[3,4]},
  {w:"Week 3",theme:"Spring Boot",color:"#1D9E75",sessions:[5,6]},
  {w:"Week 4",theme:"Spring Boot II",color:"#1D9E75",sessions:[7,8]},
  {w:"Week 5",theme:"JPA & Data",color:"#534AB7",sessions:[9,10]},
  {w:"Week 6",theme:"Testing",color:"#534AB7",sessions:[11,12]},
  {w:"Week 7",theme:"Redis & Security",color:"#854F0B",sessions:[13,14]},
  {w:"Week 8",theme:"OAuth & Testing",color:"#854F0B",sessions:[15,16]},
  {w:"Week 9",theme:"Microservices",color:"#993C1D",sessions:[17,18]},
  {w:"Week 10",theme:"E-Wallet Project",color:"#993C1D",sessions:[19,20]},
  {w:"Week R1",theme:"Git",color:"#3B6D11",sessions:[21]},
  {w:"Week R2",theme:"HTTP Deep Dive",color:"#3B6D11",sessions:[22]},
  {w:"Week R3",theme:"Advanced Java",color:"#3B6D11",sessions:[23]},
  {w:"Week R4",theme:"Database Deep Dive",color:"#3B6D11",sessions:[24]},
  {w:"Week R5",theme:"Web Security",color:"#3B6D11",sessions:[25]},
  {w:"Week R6",theme:"Docker & CI/CD",color:"#3B6D11",sessions:[26]},
  {w:"Week R7",theme:"GOF Patterns",color:"#3B6D11",sessions:[27]},
  {w:"Week R8",theme:"GraphQL & gRPC",color:"#3B6D11",sessions:[28]},
  {w:"Week R9",theme:"Observability",color:"#3B6D11",sessions:[29]},
  {w:"Week R10",theme:"Scale & Architecture",color:"#3B6D11",sessions:[30]},
];

export const PHASE_FILTERS = ['all', 'Core Java', 'Spring Boot', 'Data Layer', 'Security', 'Distributed', 'Roadmap.sh'] as const;
export type PhaseFilter = typeof PHASE_FILTERS[number];
