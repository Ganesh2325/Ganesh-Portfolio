// All site content lives here.
// Sources: resume (public/resume.pdf, wins on conflicts), GitHub (Ganesh2325), LeetCode public GraphQL API.

export const profile = {
  name: "Maheshwaram Ganesh",
  role: "Full-Stack & AI Developer",
  headline: "Full-Stack & AI Developer | Building RAG Apps & AI Agents",
  pitch:
    "Engineering is not just about writing code — it is about solving the right problems with precision, integrity, and the discipline to do the work that matters.",
  siteUrl: "https://ganesh-portfolio.example.com",
  email: "ganeshmaheshwaram2005@gmail.com",
  resume: "/resume.pdf",
  photo: "/profile.jpg",
  github: "https://github.com/Ganesh2325",
  linkedin: "https://www.linkedin.com/in/maheshwaram-ganesh-182a84325/",
  leetcode: "https://leetcode.com/u/Ganesh2307/",
  summaryLead:
    "Full-Stack & AI Developer pursuing B.Tech Computer Science & Engineering, building production-grade web platforms and governed AI systems.",
  summary: [
    "Specialised in React, Next.js, TypeScript, Spring Boot, Node.js, and Django on the full-stack side — with strong foundations in data structures, algorithms, and system design.",
    "On the AI side: RAG pipelines with pgvector and Qdrant, LLM integration via Gemini and Groq, prompt engineering, AI agents with human-in-the-loop approval, and MCP.",
    "Built and shipped AegisTrace — an AI agent governance platform with 4-role RBAC, deterministic policy enforcement, OpenTelemetry distributed tracing, and 401ms p95 retrieval latency using 384-dimensional embeddings.",
    "Contributed merged pull requests to upstream open-source projects including Hugging Face's huggingface.js and huggingface_hub.",
    "Certified by Oracle (AI Foundation Associate), NPTEL IIT Delhi (Introduction to LLMs), and HackerRank (React). Solved 200+ algorithmic problems with a 100 Days Badge on LeetCode and a 5-star C++ rating on HackerRank.",
  ],
};

export const summaryPoints = [
  "RAG pipelines, AI agents & LLM integration",
  "Full-stack platforms with Spring Boot, Node.js & Django",
  "Governance, observability & secure RBAC by design",
  "Merged open-source contributions to Hugging Face",
];

/** Real LeetCode stats fetched from leetcode.com/graphql on 20 Oct 2026 (user Ganesh2307). */
export const leetcode = {
  fetched: "20 Oct 2026",
  totalSolved: 194,
  easy: 119,
  medium: 70,
  hard: 5,
  ranking: 902533,
  activeDays: 114,
  badges: ["100 Days Badge 2026", "50 Days Badge 2026"],
  contestRating: null as number | null, // no contest participation on record
};

export const experience = [
  {
    role: "AI Engineer Intern (Virtual)",
    org: "Infosys Springboard",
    period: "Feb 2026 – Apr 2026",
    points: [
      "Developed an AI-Driven Oil Spill Identification and Monitoring System using Artificial Intelligence, Machine Learning, and Computer Vision concepts for automated environmental monitoring.",
      "Applied image preprocessing, feature extraction, image classification, and model evaluation techniques to improve oil spill detection accuracy from visual data.",
      "Gained hands-on experience in Python, Deep Learning, Computer Vision, Image Processing, AI model development, and Agile-based project workflows while successfully completing the industry internship.",
    ],
    tags: ["Python", "AI", "Machine Learning", "Deep Learning", "Computer Vision", "Image Processing"],
    link: "https://github.com/Ganesh2325/Oil-Spill-Detection-",
  },
];

export type Project = {
  name: string;
  category: string;
  tagline: string;
  period?: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  bullets: string[];
  tags: string[];
  github: string;
  live?: string;
};

export const featuredProjects: Project[] = [
  {
    name: "AegisTrace",
    category: "AI Agent Governance",
    tagline: "AI Agent Governance, Safety & Observability Platform",
    period: "Oct 2026",
    image: "/projects/aegistrace.jpg",
    imageAlt: "AegisTrace Operations dashboard screenshot from the project repository",
    imageCredit: "Screenshot from the AegisTrace repo (docs/evidence)",
    bullets: [
      "Developed an AI agent governance platform with human-in-the-loop approval, deterministic policy enforcement, and end-to-end traceability to ensure controlled, auditable execution of sensitive AI-driven actions.",
      "Engineered a Retrieval-Augmented Generation (RAG) pipeline using PostgreSQL, pgvector, 384-dimensional embeddings, and hybrid vector–lexical search, enabling versioned knowledge retrieval, grounded citations, and evidence-based abstention with 401 ms p95 retrieval latency.",
      "Implemented a secure agent control plane with 4-role RBAC, workspace isolation, immutable agent and knowledge versioning, approval workflows, idempotent tool execution, and asynchronous job processing; achieved 533 ms p95 queue pickup and integrated OpenTelemetry distributed tracing, Prometheus, and Jaeger.",
    ],
    tags: ["Spring Boot", "Python", "Next.js", "TypeScript", "PostgreSQL", "pgvector", "Redis", "Docker", "OpenTelemetry", "Prometheus", "Jaeger"],
    github: "https://github.com/Ganesh2325/AegisTrace",
  },
  {
    name: "Virtuara AI",
    category: "AI-Powered Learning",
    tagline: "AI-Powered Learning Platform",
    period: "Oct 2026",
    image: "/projects/virtuara.svg",
    imageAlt: "Illustration of an AI mentor with an open book, quiz checklist and voice waveform",
    imageCredit: "Custom illustration",
    bullets: [
      "Developed a full-stack AI learning platform using Next.js, React, and Django, enabling multi-subject learning through a unified AI mentor with personalized explanations, adaptive assessments, and persistent learning progress.",
      "Implemented a shared voice interaction system using browser-based speech recognition, text-to-speech, and REST APIs, integrating conversational learning, interactive quizzes, and interview sessions.",
      "Built a resume-based mock interview system with secure file uploads, automated resume parsing, contextual follow-up questions, server-side session management, and persistent interview reports using PostgreSQL, Redis, and Celery. Validated learning and interview functionality with 19 passing automated tests.",
    ],
    tags: ["Python", "Django", "Next.js", "React", "PostgreSQL", "Redis", "Celery", "Speech Recognition", "Text-to-Speech", "Docker"],
    github: "https://github.com/Ganesh2325/Virtuara-AI",
  },
  {
    // Not on the resume; description from the repo README (via content.md).
    name: "VoiceOS",
    category: "Voice AI",
    tagline: "Multi-Agent Voice AI Operations Platform",
    image: "/projects/voiceos.svg",
    imageAlt: "Illustration of a voice orchestrator connected to AI agents, an approval shield and a vector database",
    imageCredit: "Custom illustration",
    bullets: [
      "Orchestrator that hands tasks to specialised agents, with an agent registry (12 agents) and a tool registry with risk classification.",
      "RAG pipeline and semantic memory on Qdrant; PostgreSQL and Redis for storage; live execution timeline over WebSockets.",
      "Spring AI with Gemini Flash as the main model and Groq Llama 3.3 as fallback; Vapi for voice; human approval before risky actions.",
    ],
    tags: ["Java 21", "Spring Boot", "Spring AI", "Qdrant", "PostgreSQL", "Redis", "Vapi", "React", "Vite"],
    github: "https://github.com/Ganesh2325/VapiVoiceAgent",
  },
];

export const moreProjects: { name: string; description: string; github: string; live?: string }[] = [
  {
    name: "Mini ERP + CRM Operations Portal",
    description: "RBAC, customer CRM, multi-warehouse inventory and atomic sales challans (React, Express, Prisma).",
    github: "https://github.com/Ganesh2325/Mini-ERP-CRM-Operations-Portal",
    live: "https://mini-erp-crm-operations-portal-three.vercel.app",
  },
  {
    name: "Subject Material Management",
    description: "Faculty upload PDF/PPT/DOCX materials; students preview and download (React, Express).",
    github: "https://github.com/Ganesh2325/Subject-Material-Management",
  },
  {
    name: "Kochi Metro AI Scheduling",
    description: "MERN decision-support system with genetic-algorithm train scheduling and load analytics.",
    github: "https://github.com/Ganesh2325/Kochi-Metro-Railway-Limited-AI-Scheduling",
  },
  {
    name: "Document Intelligence Service",
    description: "Question-extraction service for documents (TypeScript).",
    github: "https://github.com/Ganesh2325/Document-Intelligence-Question-Extraction-Service",
  },
  {
    name: "Meal Planner App",
    description: "Meal planning web app hosted on Firebase.",
    github: "https://github.com/Ganesh2325/Meal-Planner-App",
    live: "https://mealplanner-2bd6b.web.app",
  },
];

export type PR = { repo: string; title: string; url: string; merged: string };

/** Merged PRs to upstream repositories only (checked with `gh search prs --merged`, 20 Oct 2026). */
export const openSource: PR[] = [
  { repo: "huggingface/huggingface.js", title: "Fix Transformers snippets for timm image models", url: "https://github.com/huggingface/huggingface.js/pull/2605", merged: "Oct 2026" },
  { repo: "morluto/rea", title: "fix(javascript): keep logical assignment results uncertain for unknown values", url: "https://github.com/morluto/rea/pull/2788", merged: "Oct 2026" },
  { repo: "huggingface/huggingface_hub", title: "[CLI] Upload existing paths with glob characters as-is in hf upload", url: "https://github.com/huggingface/huggingface_hub/pull/5059", merged: "Oct 2026" },
];

/**
 * Skills (resume first, plus GitHub-evidenced items). `icon` is either "dv:<devicon class>"
 * for an official logo or a name from components/Icon.tsx for concepts without a logo.
 */
export type Skill = { name: string; icon: string };
export const skills: Record<string, Skill[]> = {
  Languages: [
    { name: "C/C++", icon: "dv:devicon-cplusplus-plain colored" },
    { name: "Java", icon: "dv:devicon-java-plain colored" },
    { name: "JavaScript (ES6+)", icon: "dv:devicon-javascript-plain colored" },
    { name: "TypeScript", icon: "dv:devicon-typescript-plain colored" },
    { name: "Python", icon: "dv:devicon-python-plain colored" },
  ],
  Frontend: [
    { name: "React.js", icon: "dv:devicon-react-original colored" },
    { name: "Next.js", icon: "dv:devicon-nextjs-plain" },
    { name: "HTML5", icon: "dv:devicon-html5-plain colored" },
    { name: "CSS3", icon: "dv:devicon-css3-plain colored" },
    { name: "Tailwind CSS", icon: "dv:devicon-tailwindcss-original colored" },
    { name: "Responsive Design", icon: "smartphone" },
  ],
  Backend: [
    { name: "Spring Boot", icon: "dv:devicon-spring-original colored" },
    { name: "Node.js", icon: "dv:devicon-nodejs-plain colored" },
    { name: "Express.js", icon: "dv:devicon-express-original" },
    { name: "Django", icon: "dv:devicon-django-plain" },
    { name: "REST APIs", icon: "plug" },
    { name: "WebSocket", icon: "zap" },
    { name: "Socket.IO", icon: "dv:devicon-socketio-original" },
    { name: "JWT Authentication", icon: "key" },
  ],
  Databases: [
    { name: "MongoDB", icon: "dv:devicon-mongodb-plain colored" },
    { name: "MySQL", icon: "dv:devicon-mysql-original colored" },
    { name: "PostgreSQL", icon: "dv:devicon-postgresql-plain colored" },
    { name: "Redis", icon: "dv:devicon-redis-plain colored" },
    { name: "Firebase Realtime Database", icon: "dv:devicon-firebase-plain colored" },
    { name: "Supabase", icon: "dv:devicon-supabase-plain colored" },
    { name: "pgvector", icon: "database" },
    { name: "Qdrant", icon: "database" },
  ],
  "Artificial Intelligence": [
    { name: "Generative AI", icon: "dv:devicon-googlecloud-plain colored" },
    { name: "LLM Integration", icon: "brain" },
    { name: "Prompt Engineering", icon: "message" },
    { name: "RAG", icon: "search" },
    { name: "AI Agents", icon: "bot" },
    { name: "MCP", icon: "link" },
    { name: "Hugging Face", icon: "dv:devicon-huggingface-plain colored" },
    { name: "Gemini", icon: "sparkles" },
    { name: "Groq", icon: "zap" },
    { name: "Spring AI", icon: "dv:devicon-spring-original colored" },
    { name: "Speech Recognition", icon: "mic" },
  ],
  "Cloud & DevOps": [
    { name: "AWS EC2", icon: "dv:devicon-amazonwebservices-plain-wordmark colored" },
    { name: "AWS Elastic Beanstalk", icon: "dv:devicon-amazonwebservices-plain-wordmark colored" },
    { name: "AWS Lambda", icon: "dv:devicon-amazonwebservices-plain-wordmark colored" },
    { name: "DynamoDB", icon: "dv:devicon-dynamodb-plain colored" },
    { name: "AWS S3", icon: "dv:devicon-amazonwebservices-plain-wordmark colored" },
    { name: "AWS VPC", icon: "dv:devicon-amazonwebservices-plain-wordmark colored" },
    { name: "Docker", icon: "dv:devicon-docker-plain colored" },
    { name: "CI/CD", icon: "workflow" },
    { name: "OpenTelemetry", icon: "dv:devicon-opentelemetry-plain colored" },
    { name: "Prometheus", icon: "dv:devicon-prometheus-original colored" },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: "dv:devicon-git-plain colored" },
    { name: "GitHub", icon: "dv:devicon-github-original" },
    { name: "Postman", icon: "dv:devicon-postman-plain colored" },
    { name: "VS Code", icon: "dv:devicon-vscode-plain colored" },
    { name: "Android Studio", icon: "dv:devicon-androidstudio-plain colored" },
    { name: "Vite", icon: "dv:devicon-vitejs-plain colored" },
    { name: "Jaeger", icon: "workflow" },
  ],

  "Soft Skills": [
    { name: "Time Management", icon: "clock" },
    { name: "Problem-Solving", icon: "puzzle" },
    { name: "Adaptability", icon: "refresh" },
    { name: "Quick Learner", icon: "rocket" },
    { name: "Communication", icon: "users" },
  ],
};

export const training = [
  {
    year: "Jun 2025 – Jul 2025",
    title: "Data Structures and Algorithms",
    org: "LPU",
    points: [
      "Built strong fundamentals in Data Structures and Algorithms (DSA), focusing on improving coding logic, problem-solving abilities, and algorithmic thinking.",
      "Practiced core data structures including arrays, linked lists, stacks, and queues, along with key algorithmic techniques for developing efficient and optimized solutions.",
      "Analyzed time and space complexity of different approaches and practiced optimizing solutions to improve performance, efficiency, and overall code quality.",
    ],
    certificate: "https://drive.google.com/file/d/1R85t27_2jnoRflWUwv0DoIC7d3Qk9VVo/view?usp=sharing",
  },
];

export const certificates: { title: string; issuer: string; date: string; url?: string }[] = [
  { title: "AI Foundation Associate", issuer: "Oracle", date: "Mar 2026" },
  { title: "React (Basic) Certification", issuer: "HackerRank", date: "Jan 2026", url: "https://www.hackerrank.com/certificates/iframe/7216e2582994" },
  { title: "Introduction to Large Language Model (LLMs)", issuer: "NPTEL IIT Delhi", date: "Oct 2025", url: "https://drive.google.com/file/d/1Yw3XrnlCPlNI4ueOsGwRMYZCxXuouJol/view?usp=sharing" },
];

export const achievements = [
  { icon: "trophy", title: "200+ Problems", text: "Solved 200+ algorithmic problems across LeetCode and HackerRank." },
  { icon: "award", title: "100 Days Badge", text: "Earned the 100 Days Badge on LeetCode." },
  { icon: "star", title: "5-Star in C++", text: "5-star rating in C++ on HackerRank." },
];

export const education = [
  { icon: "award", degree: "Bachelor of Technology — Computer Science and Engineering", school: "Lovely Professional University", place: "Phagwara, Punjab", period: "Aug 2024 – Present", note: "CGPA: 7.05" },
  { icon: "book", degree: "Diploma — Computer Science", school: "Sree Datta Engineering and Science College", place: "Hyderabad, Telangana", period: "Aug 2021 – Apr 2024", note: "Percentage: 77%" },
  { icon: "star", degree: "Matriculation", school: "Telangana State Model School", place: "Jangaon, Telangana", period: "Jun 2020 – May 2021", note: "CGPA: 9.5" },
];
