export const profile = {
  name: "Chester Clenn Minoza",
  title: "Software Developer",
  focus: "React · Node.js · Accounting & Inventory Systems",
  phone: "0923 976 5114",
  email: "chsdcode@gmail.com",
  summary:
    "Software developer with years of experience building, deploying, and supporting production accounting and inventory systems. Strong background in React.js, Node.js, Express, and MySQL, with direct client-facing experience and leadership of small development teams. I translate accounting and operational requirements into reliable software that runs in live environments.",
};

export const ledgerStats = [
  { label: "Developer Intern", value: "3", unit: "months" },
  { label: "Software Developer", value: "2", unit: "months" },
  { label: "Software Developer (Project Lead)", value: "3", unit: "years" },
];

export const experience = [
  {
    company: "ELI IT & Business Solution",
    role: "Software Developer",
    period: "June 2023 — Present",
    points: [
      "Design, develop, and maintain full-stack web applications using React.js, Node.js, Express, and MySQL.",
      "Lead and contribute to client-facing projects, coordinating directly with stakeholders to gather requirements and deliver production-ready features.",
      "Deploy and manage applications on cloud environments with secure HTTPS configuration and reverse proxy setup.",
    ],
    awards: [
      { year: "2025", title: "Most Improved Award" },
      { year: "2025", title: "Best in Team Spirit Award" },
    ],
  },
  {
    company: "Just Hired Philippines",
    role: "Backend Developer (Freelance)",
    period: "Freelance",
    points: [
      "Developed and maintained backend services enabling clients to add, update, and manage company and job listings.",
      "Implemented a real-time active-user tracking system using WebSockets to monitor concurrent activity.",
      "Secured access with JWT-based authentication.",
    ],
  },
];

export type Project = {
  code: string;
  name: string;
  role: string;
  description: string;
  points: string[];
  screenshots: { src: string; caption: string }[];
};

export const projects: Project[] = [
  {
    code: "SYS-01",
    name: "Accounting System",
    role: "Project Lead / Full-Stack Developer",
    description:
      "An in-production accounting platform covering journals, payables and receivables, and financial reporting — built with a real accounting consultant to get the cutoffs and financial logic right.",
    points: [
      "Led a 3-member development team from architecture through live deployment.",
      "Worked closely with an accounting consultant to correctly implement journals, cutoffs, and financial logic.",
      "Built core modules: accounting journals, payables & receivables tracking, and financial report data preparation.",
      "Supported live deployments and handled post-release fixes and enhancements.",
      "Partnered with UI/UX and business teams throughout development to ensure a user-friendly experience.",
      "Implemented secure authentication and authorization, including role-based access control and JWT-based session management.",
      "Implement Microservices architecture for scalability and maintainability, separating core accounting functions into distinct services.",
    ],
    screenshots: [
      {
        src: "balance-sheet",
        caption:
          "Final Balance Sheet — fixed assets, current assets & reporting cutoffs",
      },
      {
        src: "ops-dashboard",
        caption:
          "Operations dashboard — sales, receivables & purchase tracking at a glance",
      },
    ],
  },
  {
    code: "SYS-02",
    name: "Stock Management System",
    role: "Project Lead / Full-Stack Developer",
    description:
      "An inventory and material-control system for tracking stock movement in and out, built directly with a client's Material Control Manager to match real operational workflows.",
    points: [
      "Coordinated directly with the client's Material Control Manager to align system outputs with operations.",
      "Developed inbound and outbound material tracking, including movement frequency monitoring.",
      "Ensured accurate inventory data handling for reporting and operational decision-making.",
      "Partnered with UI/UX and business teams throughout development.",
    ],
    screenshots: [
      {
        src: "product-ledger",
        caption:
          "Per-product ledger — running in/out quantity and debit/credit balance",
      },
      {
        src: "inventory-dashboard",
        caption:
          "Inventory dashboard — stock levels, counts and delivery estimates",
      },
    ],
  },
];

export const skills = [
  {
    group: "Frontend",
    items: [
      "React.js",
      "HTML",
      "CSS",
      "TypeScript",
      "Vite",
      "Vue.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "PHP",
      "VB.net",
      "JWT Authentication",
      "WebSockets (real-time)",
      "Redis (caching & pub/sub)",
      "REST APIs",
    ],
  },
  { group: "Database", items: ["MySQL", "Sequelize ORM"] },
  {
    group: "Infrastructure & DevOps",
    items: [
      "GCP Compute Engine",
      "Contabo VPS",
      "Bash Scripting",
      "IIS Reverse Proxy",
      "SSL / HTTPS (Certify The Web)",
      "Nginx Reverse Proxy",
    ],
  },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "Laragon", "XAMPP"] },
];

export const education = {
  school: "Global Reciprocal Colleges",
  degree: "Bachelor of Science — Information Technology",
  period: "2019 — 2023",
};

// export const awards = [
//   { year: "2025", title: "Most Improved Award" },
//   { year: "2025", title: "Best in Team Spirit Award" },
// ];
