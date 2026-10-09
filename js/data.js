// ============================================================
// Central data source (single source of truth)
// ============================================================
export const profile = {
  name: "Cucu Rusdiana, S.Kom.",
  firstName: "Cucu",
  lastName: "Rusdiana",
  initials: "CR",
  role: "Full Stack AI Engineer",
  tagline:
    "Membangun pengalaman digital cerdas dengan AI dan teknologi web modern.",
  location: "Garut, Indonesia",
  email: "cucurusdiana10@gmail.com",
  phone: "082295144776",
  phoneHref: "+6282295144776",
  github: "https://github.com/cucurusdiana-tech",
  githubHandle: "cucurusdiana-tech",
  instagram: "https://instagram.com/cucurusdiana10",
  instagramHandle: "cucurusdiana10",
  // typewriter rotating roles
  roles: [
    "Full Stack AI Engineer",
    "Frontend Developer",
    "Backend Systems Builder",
    "Cloud Deployment Specialist",
    "AI Application Developer",
  ],
};

export const bio = [
  "Cucu Rusdiana adalah seorang Full Stack AI Engineer yang penuh semangat dengan keahlian dalam pengembangan frontend, sistem backend, cloud deployment, dan aplikasi berbasis AI.",
  "Ia berfokus pada pembangunan platform web yang scalable, perangkat otomasi cerdas, dan pengalaman pengguna modern. Ia senang menyelesaikan masalah dunia nyata melalui arsitektur yang bersih dan teknologi inovatif.",
];

export const highlights = [
  { title: "Frontend Modern", desc: "UI responsif, interaktif, dan accessible." },
  { title: "Backend & Sistem", desc: "Arsitektur bersih dan scalable." },
  { title: "AI-Powered Apps", desc: "Otomasi cerdas dan integrasi AI." },
  { title: "Cloud Deployment", desc: "Rilis cepat dan andal ke production." },
];

export const stats = [
  { num: 30, suffix: "+", label: "Project Selesai" },
  { num: 3, suffix: "+", label: "Tahun Pengalaman" },
  { num: 15, suffix: "+", label: "Teknologi Dikuasai" },
  { num: 100, suffix: "%", label: "Dedikasi" },
];

// Skills grouped by category, each with a proficiency level (for progress bars)
export const skills = [
  {
    icon: "🎨",
    title: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    icon: "⚙️",
    title: "Backend",
    items: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 90 },
      { name: "Python", level: 88 },
      { name: "FastAPI", level: 84 },
    ],
  },
  {
    icon: "🗄️",
    title: "Database",
    items: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 90 },
      { name: "Firebase", level: 82 },
    ],
  },
  {
    icon: "🤖",
    title: "AI & Cloud",
    items: [
      { name: "OpenAI API", level: 93 },
      { name: "LangChain", level: 86 },
      { name: "Docker", level: 84 },
      { name: "AWS", level: 80 },
      { name: "Vercel", level: 94 },
    ],
  },
];

export const projects = [
  {
    icon: "✅",
    title: "AI Task Manager",
    desc: "Aplikasi produktivitas cerdas dengan bantuan AI untuk melakukan prioritas dan penjadwalan tugas.",
    tags: ["React", "Node.js", "OpenAI API", "MongoDB"],
    github: "https://github.com/cucurusdiana-tech",
    demo: "#",
    gradient: "linear-gradient(135deg, #7c5cff, #22d3ee)",
  },
  {
    icon: "💬",
    title: "Smart Chat Assistant",
    desc: "Chatbot AI real-time dengan conversational memory dan context management.",
    tags: ["Next.js", "FastAPI", "PostgreSQL"],
    github: "https://github.com/cucurusdiana-tech",
    demo: "#",
    gradient: "linear-gradient(135deg, #22d3ee, #f472b6)",
  },
  {
    icon: "📊",
    title: "DevOps Monitoring Dashboard",
    desc: "Dashboard monitoring server dan analitik secara real-time dengan grafik interaktif.",
    tags: ["React", "Express.js", "Docker", "Chart.js"],
    github: "https://github.com/cucurusdiana-tech",
    demo: "#",
    gradient: "linear-gradient(135deg, #f472b6, #7c5cff)",
  },
];

// Professional experience timeline (newest first)
export const experience = [
  {
    company: "Novatech Solutions",
    role: "Senior Full Stack Engineer",
    duration: "2023 - Sekarang",
    desc: "Memimpin pengembangan platform AI full-stack, merancang arsitektur scalable, dan membimbing tim engineer.",
    current: true,
  },
  {
    company: "PixelForge Labs",
    role: "Frontend Developer",
    duration: "2021 - 2023",
    desc: "Membangun antarmuka modern yang responsif dan interaktif dengan fokus pada performa dan pengalaman pengguna.",
    current: false,
  },
  {
    company: "CloudNest AI",
    role: "Junior Software Engineer",
    duration: "2019 - 2021",
    desc: "Mengembangkan fitur aplikasi web dan mendukung integrasi layanan cloud serta otomasi.",
    current: false,
  },
];

export const testimonials = [
  {
    name: "Ahmad Fauzi",
    title: "CTO, Prestasi Junior Indonesia",
    initials: "AF",
    quote:
      "Cucu is an exceptional engineer who consistently delivers beyond expectations. Her ability to bridge AI capabilities with practical user needs is remarkable. She transformed our platform's intelligence layer in a way that measurably improved user engagement.",
  },
  {
    name: "Siti Rahayu",
    title: "Product Manager, PT Indo",
    initials: "SR",
    quote:
      "Working with Cucu was a pleasure. She has a rare talent for turning complex data into clear, actionable insights. Her dashboards became the go-to tool for our entire leadership team, and she always brought ideas that went far beyond the initial brief.",
  },
  {
    name: "Budi Santoso",
    title: "Lead Engineer, PT. Technesia",
    initials: "BS",
    quote:
      "Her technical depth combined with a strong product mindset makes her stand out. She delivered a full-stack AI feature in record time without compromising code quality. I'd recommend her without hesitation to any team looking for a high-impact engineer.",
  },
];
