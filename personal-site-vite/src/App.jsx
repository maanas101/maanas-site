import React, { useState } from "react";
import { Github, Linkedin, Mail, Briefcase, Rocket, Cpu, GraduationCap, Star, ChevronDown, BrainCircuit, CircleDot } from "lucide-react";

const DATA = {
  name: "Maanas Baraya",
  tagline: "I build systems for machine learning — low‑latency, reliable, and useful",
  blurb:
    "I love designing the plumbing that makes ML feel instant: retrieval, ranking, and the real‑time glue between them. I grew up on competitive programming, still unwind with math problems, and I’m happiest when an idea ships and users feel it.",
  links: {
    email: "maanas.baraya@gmail.com",
    linkedin: "https://linkedin.com/in/maanas-baraya",
    github: "https://github.com/maanasbaraya",
  },
  highlights: [
    { label: "Systems", detail: "caches, queues, and clean interfaces" },
    { label: "Recs/IR", detail: "signals, retrieval, and feedback loops" },
    { label: "Math", detail: "probability, optimization, graph theory" },
  ],
  experience: [
    {
      company: "Optiver",
      role: "Software Engineering Intern — Delta One Futures (Incoming)",
      time: "June 2026 – Aug 2026 · Austin, TX",
      summary:
        "Joining a team where correctness under time pressure matters. I’m excited to deepen low‑latency engineering habits: careful APIs, data structures that fit the cache, and observability that earns trust.",
      skills: ["C++", "Python", "Systems"],
    },
    {
      company: "Meta (Instagram Reels)",
      role: "Software Engineering Intern — Recommendations",
      time: "May 2025 – Aug 2025 · Menlo Park, CA",
      summary:
        "Our team identified and delivered trends. A daily‑normalized trend score was great within a day but hard to compare across months, so we introduced a tiering score to track trend quality over time. That let us split high scores into two useful buckets: head trends (broad, hot‑now) and interest‑based highs (niche but sticky), improving how we route and rank content.",
      skills: ["ML", "Recommenders", "Signals", "Python", "SQL"],
    },
    {
      company: "CACI International",
      role: "AI/ML Engineer",
      time: "May 2024 – Oct 2024 · Reston, VA",
      summary:
        "I built semantic filters to route government opportunities into our lines of work. Contracts were embedded, matched, and labeled so the proposals team could focus and submit faster—turning search haze into organized queues.",
      skills: ["LLMs", "NLP", "AWS", "Retrieval"],
    },
    {
      company: "George Mason University",
      role: "NLP Research Intern",
      time: "Jun 2022 – Aug 2022 · Fairfax, VA",
      summary:
        "Explored policymaker communications by building topic+sentiment pipelines over large tweet corpora. It taught me to respect data janitorial work and measure drift before drawing conclusions.",
      skills: ["BERT", "ETL", "Analytics"],
    },
  ],
  projects: [
    {
      name: "GENetf",
      tagline: "Real‑time ETF generation via clustering + constrained optimization",
      points: [
        "Hierarchical clustering for 5K+ stocks using company embeddings (PCA 1024→349).",
        "Optimized portfolio weights with SLSQP to maximize risk‑adjusted return; fast refresh cycle.",
      ],
      links: [],
      stack: ["Python", "SciPy", "Pandas", "PCA"],
      icon: "📈",
    },
    {
      name: "Trading Competition Servers",
      tagline: "Low‑latency price‑time priority order matching with live websockets",
      points: [
        "Execution engine with price‑time priority; websocket feeds for participants.",
        "Focus on determinism, fairness, and transparent state updates.",
      ],
      links: [],
      stack: ["Django", "WebSockets", "Postgres"],
      icon: "⚡",
    },
    {
      name: "GT RAG Chatbot",
      tagline: "Campus knowledge assistant with FAISS + cosine reranking",
      points: [
        "ETL for campus docs; MiniLM embeddings + FAISS index and light reranking.",
        "Observability first: query traces and fallbacks made iteration painless.",
      ],
      links: [],
      stack: ["Python", "FAISS", "MiniLM", "Grafana"],
      icon: "🔎",
    },
    {
      name: "Spotify Wrapped",
      tagline: "Android app for personalized wraps with live playback",
      points: [
        "OAuth2 + Firebase auth; persistent wraps in Firestore.",
      ],
      links: [],
      stack: ["Android", "Java", "Firebase", "Spotify API"],
      icon: "🎧",
    },
  ],
  interests: [
    "Low‑latency systems",
    "Recommenders & IR",
    "Mathematics (probability, optimization)",
    "Competitive programming",
    "Soccer & fitness",
  ],
};

const SKILLS_ICONS = [
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C++", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "SQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Django", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PyTorch", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "TensorFlow", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "FAISS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg" },
  { name: "Firebase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
];

export default function App() {
  const [open, setOpen] = useState({});
  const toggle = (k) => setOpen((s) => ({ ...s, [k]: !s[k] }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 scroll-smooth selection:bg-cyan-500/30">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-slate-950/60">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold tracking-tight flex items-center gap-2"><CircleDot size={16}/>{DATA.name}</div>
          <div className="flex gap-4 text-sm">
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#experience" className="hover:opacity-80">Experience</a>
            <a href="#projects" className="hover:opacity-80">Projects</a>
            <a href="#skills" className="hover:opacity-80">Skills</a>
            <a href="#interests" className="hover:opacity-80">Interests</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-300 bg-clip-text text-transparent">
              {DATA.name}
            </h1>
            <p className="mt-3 text-lg text-slate-300">{DATA.tagline}</p>
            <p className="mt-4 text-slate-300">{DATA.blurb}</p>
            <div className="mt-6 flex gap-3">
              <a href={`mailto:${DATA.links.email}`} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-white text-slate-900 shadow hover:shadow-lg transition active:scale-[0.98] ring-1 ring-white/60"><Mail size={18}/>Email</a>
              <a href={DATA.links.linkedin} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-slate-800 hover:bg-slate-700 transition active:scale-[0.98] ring-1 ring-white/10"><Linkedin size={18}/>LinkedIn</a>
              <a href={DATA.links.github} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-slate-800 hover:bg-slate-700 transition active:scale-[0.98] ring-1 ring-white/10"><Github size={18}/>GitHub</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {DATA.highlights.map((h, i) => (
                <span key={i} className="text-xs rounded-full bg-slate-800/80 border border-white/10 px-3 py-1 shadow-sm">
                  <span className="font-semibold">{h.label}</span> · {h.detail}
                </span>
              ))}
            </div>
          </div>
          <div className="md:justify-self-end">
            <div className="aspect-square max-w-sm rounded-3xl bg-gradient-to-br from-purple-600/40 to-cyan-500/40 p-[2px]">
              <div className="w-full h-full rounded-[22px] bg-slate-900/60 backdrop-blur flex items-center justify-center">
                <div className="text-center p-6">
                  <Rocket className="mx-auto"/>
                  <p className="mt-3 text-sm text-slate-300">Build for speed. Measure everything.</p>
                  <p className="text-xs text-slate-400">Systems • ML • Product</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2"><GraduationCap/> About</h2>
          </div>
          <div className="md:col-span-2 text-slate-300 space-y-3">
            <p>
              I’m a Georgia Tech CS student (BS/MS) who likes building <strong>systems for machine learning</strong>—
              the queues, caches, indices, and signals that make ranking and retrieval feel instant.
            </p>
            <p>
              I have a background in <strong>competitive programming</strong> and still enjoy thinking in terms of
              invariants, amortized analysis, and neat data‑structure tricks.
            </p>
            <p>
              Outside CS, I’m into <strong>mathematics</strong>—especially probability, optimization, and graph theory—
              and I like applying those ideas to real products.
            </p>
            <p>
              I’m especially drawn to <strong>startups</strong> — I enjoy building and shipping fast, iterating quickly,
              and seeing ideas turn into something users can feel almost immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight mb-6 flex items-center gap-2"><Briefcase/> Experience</h2>
        <div className="grid gap-4">
          {DATA.experience.map((job, idx) => (
            <div key={idx} className="rounded-2xl bg-slate-900/60 border border-white/10 p-5 hover:-translate-y-0.5 hover:shadow-lg/20 transition-transform">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h3 className="font-semibold">{job.role}</h3>
                  <p className="text-slate-300">{job.company}</p>
                </div>
                <p className="text-xs text-slate-400">{job.time}</p>
              </div>
              <p className="mt-3 text-slate-300">{job.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {job.skills.map((s, i) => (
                  <span key={i} className="text-[11px] rounded-full bg-slate-800/80 border border-white/10 px-2 py-1">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight mb-6 flex items-center gap-2"><Cpu/> Projects</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {DATA.projects.map((p, idx) => (
            <div key={idx} className="rounded-2xl bg-slate-900/60 border border-white/10 p-5 hover:-translate-y-0.5 hover:shadow-lg/20 transition-transform">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl" aria-hidden>{p.icon || "🛠️"}</span>
                  <div>
                    <h3 className="font-semibold">{p.name}</h3>
                    <p className="text-sm text-slate-300">{p.tagline}</p>
                  </div>
                </div>
                <button onClick={() => toggle(`proj-${idx}`)} className="text-xs inline-flex items-center gap-1 hover:opacity-80">
                  Details <ChevronDown size={14} className={`transition ${open[`proj-${idx}`] ? "rotate-180" : "rotate-0"}`}/>
                </button>
              </div>
              {open[`proj-${idx}`] && (
                <>
                  <ul className="mt-3 list-disc pl-5 text-slate-300 space-y-1">
                    {p.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.stack.map((s, i) => (
                      <span key={i} className="text-[11px] rounded-full bg-slate-800/80 border border-white/10 px-2 py-1">{s}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight mb-6 flex items-center gap-2"><Star/> Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {SKILLS_ICONS.map((s, i) => (
            <div key={i} className="rounded-2xl bg-slate-900/60 border border-white/10 p-4 flex flex-col items-center justify-center gap-2 hover:bg-slate-800/60 hover:-translate-y-0.5 transition">
              <img src={s.url} alt={s.name} className="w-9 h-9" />
              <span className="text-xs text-slate-300">{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section id="interests" className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Interests</h2>
        <div className="flex flex-wrap gap-2">
          {DATA.interests.map((it, i) => (
            <span key={i} className="text-sm rounded-full bg-slate-900/60 border border-white/10 px-3 py-1 flex items-center gap-2 hover:bg-slate-800/60 transition">
              <BrainCircuit size={14}/>{it}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="rounded-3xl bg-gradient-to-br from-cyan-500/25 to-purple-600/25 p-[2px] shadow-sm">
          <div className="rounded-[22px] bg-slate-950/60 border border-white/10 p-10 text-center">
            <h2 className="text-2xl font-bold">Let’s build something great</h2>
            <p className="mt-2 text-slate-300">Open to internships, research, and startup collabs.</p>
            <div className="mt-5 flex justify-center gap-3">
              <a href={`mailto:${DATA.links.email}`} className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-white text-slate-900 shadow hover:shadow-lg transition"><Mail size={18}/>Email</a>
              <a href={DATA.links.linkedin} className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-slate-800 hover:bg-slate-700 transition"><Linkedin size={18}/>LinkedIn</a>
              <a href={DATA.links.github} className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-slate-800 hover:bg-slate-700 transition"><Github size={18}/>GitHub</a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} {DATA.name} • Built with Vite + React + Tailwind CDN</p>
      </section>
    </div>
  );
}
