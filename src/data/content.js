// All editable portfolio content lives here — change copy without touching components.

export const profile = {
  name: "Nishank Verma",
  email: "nishankverma24@gmail.com",
  phone: "+91 96915 56076",
  phoneHref: "+919691556076",
  linkedin: "https://www.linkedin.com/in/nishank-verma/",      // TODO: replace with your real LinkedIn URL
  github: "https://github.com/shankkyy",              // TODO: replace with your real GitHub URL
  linkedinLabel: "/nishank-verma",
  githubLabel: "/nishank-verma",
};

export const heroStats = [
  { n: "10k+", l: "concurrent queries served" },
  { n: "99.9%", l: "production uptime" },
  { n: "500+", l: "LeetCode problems solved" },
];

export const buzzwords = [
  "LLMs", "RAG", "Agentic AI", "Amazon Bedrock", "LangChain", "Vector Search",
  "Prompt Engineering", "Hugging Face", "NLP Pipelines", "FastAPI", "asyncio",
  "Microservices", "Event-Driven", "gRPC", "Kafka", "Distributed Systems",
  "Kubernetes", "Docker", "AWS", "Redis Caching", "Circuit Breaker",
  "Scalability", "CI/CD", "SOLID",
];

export const aboutFacts = [
  ["Role", "AI Engineer @ Trianz"],
  ["Focus", "LLMs · RAG · Agents"],
  ["Education", "B.Tech CSE, NIT Bhopal"],
  ["Core stack", "Python · FastAPI · React"],
  ["Cloud", "AWS · Docker · K8s"],
  ["Location", "India · Hybrid"],
];

export const skills = [
  {
    icon: "🧠",
    title: "AI / LLM Engineering",
    tags: ["LLM Integration", "RAG Pipelines", "Agentic Workflows", "Amazon Bedrock",
      "LangChain", "Hugging Face", "Vector Search", "Prompt Engineering", "spaCy NLP",
      "scikit-learn", "DAG Orchestration"],
  },
  {
    icon: "⚙️",
    title: "Backend & Systems",
    tags: ["Python", "FastAPI", "Node.js", "asyncio", "gRPC", "REST APIs",
      "Microservices", "Event-Driven", "WebSockets", "Kafka", "Circuit Breaker"],
  },
  {
    icon: "☁️",
    title: "Cloud, Data & DevOps",
    tags: ["AWS Lambda", "EC2 · S3", "API Gateway", "Cognito", "PostgreSQL",
      "DynamoDB · DAX", "Redis", "Docker", "Kubernetes", "CI/CD", "React"],
  },
];

export const projects = [
  {
    num: "01 / AI Agent",
    title: "AI-Powered Cloud Deployment Agent",
    desc: "An end-to-end deployment agent pairing an LLM (Amazon Bedrock) with a deterministic YAML DAG playbook engine — modular orchestrator, dependency-graph resolution, and a boto3 tool layer automating VPC → subnet → EC2 → CloudFormation flows.",
    stats: [
      { n: "35–50%", l: "lower deploy latency" },
      { n: "~40%", l: "less manual intervention" },
    ],
    stack: ["FastAPI", "asyncio", "Bedrock LLM", "WebSockets", "boto3"],
  },
  {
    num: "02 / Hybrid Cloud + ML",
    title: "Cloud Migration Intelligence Platform",
    desc: "Backend orchestrating VM workload migration across on-prem VMware and AWS/GCP via REST + gRPC, with an ML model predicting migration risk and downtime windows, plus NLP log analysis for failure detection.",
    stats: [
      { n: "65%", l: "less manual assessment" },
      { n: "30→4 min", l: "mean time-to-detect" },
    ],
    stack: ["Python", "scikit-learn", "Hugging Face", "Kafka", "Kubernetes", "spaCy"],
  },
  {
    num: "03 / Full-Stack",
    title: "Distributed E-Commerce + AI Recommendations",
    desc: "React + Node.js microservices platform for inventory, orders, payments and AI recommendations — a collaborative-filtering engine boosting engagement, on fault-tolerant AWS infrastructure.",
    stats: [
      { n: "50k+", l: "concurrent users" },
      { n: "+30%", l: "session engagement" },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker"],
  },
  {
    num: "04 / Data Layer",
    title: "High-Throughput Caching & Payments",
    desc: "DynamoDB partition-key schema with a DAX caching layer and a fault-tolerant payment pipeline — engineered for sub-200ms P99 latency under heavy concurrent load with zero data loss.",
    stats: [
      { n: "+75%", l: "search throughput" },
      { n: "10k+/day", l: "transactions, zero loss" },
    ],
    stack: ["DynamoDB · DAX", "Redis", "Lambda", "CDN", "P99 <200ms"],
  },
];

export const experience = [
  {
    when: "Aug 2025 — Present",
    role: "AI Engineer",
    org: "Trianz · Hybrid",
    points: [
      "Architected an end-to-end AI deployment agent integrating Amazon Bedrock LLM assistance with a deterministic YAML DAG playbook engine.",
      "Built concurrent asyncio step execution and real-time WebSocket observability with approval-gated, fault-tolerant control.",
      "Delivered full-stack feature ownership: API design, business logic, cloud integration, and production reliability.",
    ],
  },
  {
    when: "May 2024 — Jul 2024",
    role: "Software Developer Intern",
    org: "AZ Tax Solutions (NIT Raipur)",
    points: [
      "Designed RESTful microservices on AWS Lambda, DynamoDB and S3, improving operational efficiency by 60%.",
      "Engineered DynamoDB + DAX caching for 75% higher throughput at sub-200ms P99 latency.",
      "Integrated AWS Cognito with Lambda authorizers for secure multi-tenant identity management.",
    ],
  },
  {
    when: "2021 — 2025",
    role: "B.Tech, Computer Science",
    org: "Maulana Azad National Institute of Technology, Bhopal",
    points: [
      "Solved 500+ LeetCode problems across DSA, system design and algorithmic optimization.",
      "Active contributor to code-review culture — readability, test coverage, and SOLID design.",
    ],
  },
];
