import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Calendar,
  Camera,
  Check,
  Code2,
  Edit3,
  ExternalLink,
  Film,
  Github,
  Globe2,
  GripVertical,
  Image,
  Laptop,
  Linkedin,
  LogOut,
  Mail,
  Menu,
  MonitorSmartphone,
  Phone,
  Plus,
  Radar,
  Save,
  Shield,
  Sparkles,
  Trash2,
  Upload,
  User,
  X,
} from "lucide-react";
import "./styles.css";

const STORAGE_KEY = "smdr_portfolio_content_v2";
const AUTH_KEY = "smdr_admin_authenticated";
const ADMIN_USERNAME = "sean";
const ADMIN_PASSWORD = "2468";

const iconOptions = [
  "Code2",
  "BriefcaseBusiness",
  "BarChart3",
  "Camera",
  "Film",
  "Radar",
  "Laptop",
  "MonitorSmartphone",
  "Globe2",
  "Sparkles",
];

const iconMap = {
  Code2,
  BriefcaseBusiness,
  BarChart3,
  Camera,
  Film,
  Radar,
  Laptop,
  MonitorSmartphone,
  Globe2,
  Sparkles,
};

const defaultPortfolio = {
  profile: {
    eyebrow: "BSU Lipa - IT Student / Business Analytics",
    name: "Sean Martin Del Rosario",
    headline: "Developer focused on useful software, clear data, and dependable digital products.",
    summary:
      "I build practical web, desktop, and hardware-integrated systems with a strong eye for clean interfaces and business value.",
    portrait: "/portrait.png",
    resumeUrl: "",
    contactCopy: "Available for internships, freelance projects, collaborations, and entry-level developer opportunities.",
    email: "seanmdelrosraio@gmail.com",
    phone: "09764362928",
    linkedin: "https://linkedin.com/in/seandelrosario/",
    github: "https://github.com/seandelrosario",
  },
  highlights: [
    { id: "hl-1", value: "Full-stack", label: "Web and desktop development" },
    { id: "hl-2", value: "Analytics", label: "Business-focused reporting" },
    { id: "hl-3", value: "Hardware", label: "Arduino and device workflows" },
  ],
  about: {
    title: "A developer who connects product thinking with implementation.",
    paragraphs: [
      {
        id: "about-1",
        text:
          "I am a 4th-year Information Technology student at Batangas State University - Lipa Campus, majoring in Business Analytics. My work sits between software development, data analysis, and user-centered design.",
      },
      {
        id: "about-2",
        text:
          "I enjoy building tools that make daily operations easier: dashboards, management systems, automation workflows, and hardware-connected applications that solve specific problems.",
      },
      {
        id: "about-3",
        text:
          "For teams looking for a developer, I bring curiosity, reliability, and the ability to communicate technical decisions in a practical business context.",
      },
    ],
  },
  skills: [
    "React",
    "JavaScript",
    "Node.js",
    "Tailwind CSS",
    "Business Analytics",
    "Supabase",
    "Arduino",
    "Electron",
    "UI/UX Design",
    "Data Visualization",
  ],
  experience: [
    {
      id: "exp-1",
      period: "Jul 2026 - Present",
      title: "Software Developer",
      company: "SCRATCH SOLUTIONS INC",
      description:
        "Developing a full-stack desktop application using Electron, Node.js, and JavaScript to centralize live-event operations while integrating cameras, micro-controllers, and physical workflows.",
    },
    {
      id: "exp-2",
      period: "Aug 2025",
      title: "Admin Employee (SPES)",
      company: "Lipa City Government",
      description:
        "Provided administrative support to the Admin Office and Public Employment Service Office through document processing, records management, and client service coordination.",
    },
  ],
  projects: [
    {
      id: "shervice",
      type: "it",
      title: "Shervice",
      role: "FrontEnd UI/UX",
      date: "Dec 2026",
      category: "Web / Mobile",
      excerpt:
        "Transport management system for GT Lantin Car Rentals with attendance tracking, punctuality monitoring, and operational analytics.",
      details:
        "Shervice was designed to help a rental business coordinate fleet operations and driver accountability from one interface.\n\nThe project focused on clear task flows, concise data presentation, and practical analytics that help owners see patterns in attendance, punctuality, and service performance.",
      tags: ["Flutter", "Node.js", "Python", "Supabase"],
      link: "https://github.com/Seanski29/Shervice",
      mediaUrl: "",
      gallery: [],
      icon: "MonitorSmartphone",
      featured: true,
    },
    {
      id: "flik-70s",
      type: "it",
      title: "Flik-70s",
      role: "Lead Developer",
      date: "Jul 2026",
      category: "Hardware / Desktop",
      excerpt:
        "Vintage photobooth software with Arduino controls, camera automation, and an Electron-based operator dashboard.",
      details:
        "Flik-70s combines a themed event experience with reliable operator controls. The system connects software actions with hardware triggers so photo sessions feel seamless during live events.\n\nThe dashboard was built around speed: operators can manage captures, preview sessions, and export photos without fighting the interface.",
      tags: ["Arduino", "Electron", "JavaScript", "HTML/CSS"],
      link: "https://github.com/Seanski29/Flik-70sPhotobooth",
      mediaUrl: "",
      gallery: [],
      icon: "Camera",
      featured: true,
    },
    {
      id: "clearair-lidar",
      type: "it",
      title: "ClearAir LIDAR",
      role: "Sole Programmer",
      date: "May 2026",
      category: "Hardware / Data",
      excerpt:
        "Arduino Mega prototype using simulated LIDAR readings and K-Nearest Neighbors classification for turbulence detection.",
      details:
        "ClearAir LIDAR explores how atmospheric readings can be classified into turbulence states through a compact hardware-software prototype.\n\nThe technical focus was translating sensor-oriented inputs into usable classifications with C++ logic suitable for micro-controller constraints.",
      tags: ["C++", "Arduino Mega", "KNN"],
      link: "https://github.com/Seanski29/ClearAirTurblence-LIDAR",
      mediaUrl: "",
      gallery: [],
      icon: "Radar",
      featured: true,
    },
    {
      id: "unitly",
      type: "it",
      title: "Unitly",
      role: "FrontEnd UI/UX",
      date: "Dec 2025",
      category: "Web App",
      excerpt:
        "Multi-property management interface for billing workflows, unit tracking, and landlord-tenant communication.",
      details:
        "Unitly was planned as a property operations platform for people managing multiple units.\n\nThe interface prioritizes readable billing states, organized property records, and simple navigation between tenant concerns and owner tasks.",
      tags: ["PHP", "Tailwind", "JavaScript"],
      link: "",
      mediaUrl: "",
      gallery: [],
      icon: "BriefcaseBusiness",
      featured: false,
    },
    {
      id: "sentry-360",
      type: "it",
      title: "Sentry-360 Radar Tower",
      role: "Sole Programmer",
      date: "Dec 2025",
      category: "Hardware",
      excerpt:
        "360-degree radar tower using Arduino C++ and Processing 4 to visualize physical sensor readings in real time.",
      details:
        "Sentry-360 translated ultrasonic sensor movement into a real-time visual radar display.\n\nThe project strengthened my experience with hardware constraints, serial communication, and visual feedback loops.",
      tags: ["C", "Arduino Uno", "Processing 4"],
      link: "https://github.com/Seanski29/Sentry-360-Arduino-Radar-Sentry-Tower",
      mediaUrl: "",
      gallery: [],
      icon: "Radar",
      featured: true,
    },
    {
      id: "sinaya-y2k",
      type: "media",
      title: "Sinaya Y2K | Reloaded 2025",
      role: "Video Editor",
      date: "2025",
      category: "Event Video",
      excerpt:
        "Homecoming event video with dynamic transitions, color treatment, and audio synchronization for a Y2K-inspired identity.",
      details:
        "This media project focused on pacing, event energy, and visual continuity.\n\nThe final edit used motion, music timing, and graphic styling to match the event theme while keeping the story easy to follow.",
      tags: ["CapCut", "Canva", "Photoshop"],
      link: "",
      mediaUrl: "",
      gallery: [],
      icon: "Film",
      featured: true,
    },
  ],
};

function App() {
  const [portfolio, setPortfolio] = usePersistentPortfolio();
  const [route, setRoute] = useState(() => getRoute());
  const [isContactOpen, setContactOpen] = useState(false);
  const [isAdmin, setAdmin] = useState(() => window.localStorage.getItem(AUTH_KEY) === "true");

  useEffect(() => {
    const onPopState = () => setRoute(getRoute());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setRoute(getRoute());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const login = (username, password) => {
    if (username.trim().toLowerCase() !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      return false;
    }
    window.localStorage.setItem(AUTH_KEY, "true");
    setAdmin(true);
    navigate("/admin");
    return true;
  };

  const logout = () => {
    window.localStorage.removeItem(AUTH_KEY);
    setAdmin(false);
    navigate("/");
  };

  const project = route.kind === "project" ? portfolio.projects.find((item) => item.id === route.id) : null;
  const pageProps = { portfolio, setPortfolio, navigate, openContact: () => setContactOpen(true), isAdmin, logout };

  return (
    <>
      {route.kind === "login" && <AdminLogin navigate={navigate} login={login} />}
      {route.kind === "admin" && (isAdmin ? <AdminDashboard {...pageProps} /> : <AdminLogin navigate={navigate} login={login} />)}
      {route.kind === "project" && project && <ProjectDetail {...pageProps} project={project} />}
      {route.kind === "project" && !project && <NotFound navigate={navigate} />}
      {route.kind === "it" && <PortfolioListing {...pageProps} type="it" />}
      {route.kind === "media" && <PortfolioListing {...pageProps} type="media" />}
      {route.kind === "home" && <HomePage {...pageProps} />}
      <ContactModal portfolio={portfolio} isOpen={isContactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

function getRoute() {
  const path = window.location.pathname;
  if (path === "/admin-login") return { kind: "login" };
  if (path === "/admin") return { kind: "admin" };
  if (path === "/it" || path === "/it.html") return { kind: "it" };
  if (path === "/media" || path === "/media.html") return { kind: "media" };
  if (path.startsWith("/project/")) return { kind: "project", id: decodeURIComponent(path.replace("/project/", "")) };
  return { kind: "home" };
}

function usePersistentPortfolio() {
  const [portfolio, setPortfolioState] = useState(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      return saved ? mergePortfolio(defaultPortfolio, JSON.parse(saved)) : defaultPortfolio;
    } catch {
      return defaultPortfolio;
    }
  });

  const setPortfolio = (updater) => {
    setPortfolioState((current) => {
      const next = typeof updater === "function" ? updater(current) : updater;
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  return [portfolio, setPortfolio];
}

function mergePortfolio(base, saved) {
  return {
    ...base,
    ...saved,
    profile: { ...base.profile, ...saved.profile },
    about: { ...base.about, ...saved.about },
    highlights: saved.highlights || base.highlights,
    skills: saved.skills || base.skills,
    experience: saved.experience || base.experience,
    projects: saved.projects || base.projects,
  };
}

function PageShell({ children, tone = "blue" }) {
  return (
    <div className={`min-h-screen overflow-x-hidden bg-zinc-950 text-gray-300 antialiased selection:text-white ${tone === "amber" ? "selection:bg-amber-900/50" : "selection:bg-blue-900/50"}`}>
      <div className="fixed inset-x-0 top-0 z-0 h-[640px] bg-[linear-gradient(180deg,rgba(24,24,27,0.98)_0%,rgba(9,9,11,0.92)_48%,rgba(9,9,11,0)_100%)]" />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(1200px_620px_at_50%_-20%,rgba(37,99,235,0.16),transparent_60%)]" />
      {children}
    </div>
  );
}

function Nav({ portfolio, navigate, active = "home", openContact, isAdmin, logout }) {
  const [isOpen, setOpen] = useState(false);
  const navItems = [
    { label: "About", action: () => goHomeSection(navigate, "about") },
    { label: "Work", action: () => goHomeSection(navigate, "work") },
    { label: "IT", action: () => navigate("/it") },
    { label: "Media", action: () => navigate("/media") },
  ];

  const click = (action) => {
    setOpen(false);
    action();
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <button onClick={() => navigate("/")} className="flex items-center gap-3 text-left">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-xs font-black text-white">SD</span>
          <span className="hidden text-sm font-bold tracking-[0.18em] text-white sm:block">SMDR</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button key={item.label} onClick={() => item.action()} className={`rounded-md px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${active === item.label.toLowerCase() ? "bg-white text-zinc-950" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}>
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button onClick={openContact} className="rounded-md border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/10">Contact</button>
          {portfolio.profile.resumeUrl && (
            <a href={portfolio.profile.resumeUrl} target="_blank" rel="noreferrer" className="rounded-md bg-blue-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-blue-400">Resume</a>
          )}
          {isAdmin && <button onClick={logout} className="rounded-md border border-red-400/30 px-3 py-2 text-red-200 transition hover:bg-red-500/10" aria-label="Logout"><LogOut className="h-4 w-4" /></button>}
        </div>

        <button onClick={() => setOpen((value) => !value)} className="rounded-md border border-white/10 p-2 text-white md:hidden" aria-label="Toggle menu">
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-zinc-950 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button key={item.label} onClick={() => click(item.action)} className="rounded-md px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.16em] text-gray-300 hover:bg-white/5 hover:text-white">
                {item.label}
              </button>
            ))}
            <button onClick={() => click(openContact)} className="rounded-md px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.16em] text-gray-300 hover:bg-white/5 hover:text-white">Contact</button>
            {isAdmin && <button onClick={logout} className="flex items-center gap-2 rounded-md px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.16em] text-red-200 hover:bg-red-500/10"><LogOut className="h-4 w-4" /> Logout</button>}
          </div>
        </div>
      )}
    </nav>
  );
}

function goHomeSection(navigate, id) {
  if (window.location.pathname !== "/") {
    navigate("/");
    setTimeout(() => scrollToSection(id), 80);
    return;
  }
  scrollToSection(id);
}

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return;
  window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 84, behavior: "smooth" });
}

function HomePage({ portfolio, navigate, openContact, isAdmin, logout }) {
  const featured = portfolio.projects.filter((project) => project.featured).slice(0, 4);
  const typed = useTypewriter(["React interfaces.", "business dashboards.", "hardware workflows.", "media systems."]);

  return (
    <PageShell>
      <Nav portfolio={portfolio} navigate={navigate} openContact={openContact} isAdmin={isAdmin} logout={logout} />
      <main className="relative z-10">
        <section className="mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-md border border-blue-400/20 bg-blue-400/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
              <Check className="h-4 w-4" /> {portfolio.profile.eyebrow}
            </div>
            <h1 className="text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {portfolio.profile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-gray-300 sm:text-2xl">{portfolio.profile.headline}</p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400">{portfolio.profile.summary}</p>
            <div className="mt-8 min-h-8 text-lg font-medium text-gray-400">
              Building <span className="text-white">{typed}</span><span className="animate-blink text-blue-300">|</span>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => scrollToSection("work")} className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-blue-100">
                View Work <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={openContact} className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                Contact Sean <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[480px] lg:ml-auto">
            <div className="absolute inset-x-8 bottom-0 h-2/3 rounded-t-[2rem] bg-blue-500/10" />
            <img src={portfolio.profile.portrait || "/portrait.png"} alt={portfolio.profile.name} className="relative z-10 mx-auto max-h-[660px] w-full object-contain portrait-mask" />
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0">
            {portfolio.highlights.map((item) => (
              <div key={item.id} className="py-8 md:px-8">
                <p className="text-2xl font-black text-white">{item.value}</p>
                <p className="mt-2 text-sm text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">Background</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">{portfolio.about.title}</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-gray-300">
            {portfolio.about.paragraphs.map((paragraph) => <p key={paragraph.id}>{paragraph.text}</p>)}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
          <div className="marquee-container border-y border-white/10 py-5">
            <div className="flex shrink-0 animate-marquee items-center gap-4">
              {[...portfolio.skills, ...portfolio.skills].map((skill, index) => <SkillPill key={`${skill}-${index}`}>{skill}</SkillPill>)}
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">Selected Work</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Projects built for real workflows.</h2>
            </div>
            <div className="flex gap-3">
              <button onClick={() => navigate("/it")} className="rounded-md border border-white/15 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10">IT Portfolio</button>
              <button onClick={() => navigate("/media")} className="rounded-md border border-amber-300/25 px-4 py-3 text-sm font-bold text-amber-100 transition hover:bg-amber-400/10">Media</button>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {featured.map((project) => <ProjectCard key={project.id} project={project} navigate={navigate} />)}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-24 sm:px-6 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">Experience</p>
            <h2 className="mt-4 text-3xl font-black text-white">Practice in professional and community settings.</h2>
          </div>
          <div className="space-y-4">
            {portfolio.experience.map((item) => <ExperienceRow key={item.id} item={item} />)}
          </div>
        </section>

        <ContactBand portfolio={portfolio} openContact={openContact} />
        <Footer navigate={navigate} />
      </main>
    </PageShell>
  );
}

function PortfolioListing({ portfolio, type, navigate, openContact, isAdmin, logout }) {
  const tone = type === "media" ? "amber" : "blue";
  const projects = portfolio.projects.filter((project) => project.type === type);

  return (
    <PageShell tone={tone}>
      <Nav portfolio={portfolio} navigate={navigate} active={type} openContact={openContact} isAdmin={isAdmin} logout={logout} />
      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6">
        <button onClick={() => navigate("/")} className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-gray-400 transition hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Home
        </button>
        <div className="mb-12 max-w-3xl">
          <p className={`text-xs font-bold uppercase tracking-[0.24em] ${tone === "amber" ? "text-amber-300" : "text-blue-300"}`}>{type === "media" ? "Media Portfolio" : "IT Portfolio"}</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">{type === "media" ? "Creative work with structure and pace." : "Software projects with practical outcomes."}</h1>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => <ProjectCard key={project.id} project={project} navigate={navigate} tone={tone} />)}
        </div>
      </main>
      <Footer navigate={navigate} />
    </PageShell>
  );
}

function ProjectDetail({ portfolio, project, navigate, openContact, isAdmin, logout }) {
  const tone = project.type === "media" ? "amber" : "blue";
  const paragraphs = splitLines(project.details || project.excerpt);
  const gallery = [project.mediaUrl, ...(project.gallery || [])].filter(Boolean);

  return (
    <PageShell tone={tone}>
      <Nav portfolio={portfolio} navigate={navigate} active={project.type} openContact={openContact} isAdmin={isAdmin} logout={logout} />
      <main className="relative z-10 mx-auto max-w-5xl px-4 pb-24 pt-32 sm:px-6">
        <button onClick={() => navigate(project.type === "media" ? "/media" : "/it")} className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-gray-400 transition hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back to {project.type === "media" ? "Media" : "IT"}
        </button>
        <article>
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className={`rounded-md px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] ${tone === "amber" ? "bg-amber-400/10 text-amber-200" : "bg-blue-400/10 text-blue-200"}`}>{project.category}</span>
            <span className="text-sm text-gray-500">{project.date}</span>
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl">{project.title}</h1>
          <p className="mt-5 text-xl leading-8 text-gray-300">{project.excerpt}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.tags.map((tag) => <SkillPill key={tag}>{tag}</SkillPill>)}
          </div>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-blue-100">
              Open Project <ExternalLink className="h-4 w-4" />
            </a>
          )}

          {gallery.length > 0 && (
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {gallery.map((src, index) => <MediaFrame key={`${src}-${index}`} src={src} title={`${project.title} media ${index + 1}`} />)}
            </div>
          )}

          <div className="mt-12 space-y-7 border-t border-white/10 pt-10 text-lg leading-8 text-gray-300">
            {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
        </article>
      </main>
      <Footer navigate={navigate} />
    </PageShell>
  );
}

function ProjectCard({ project, navigate, tone = "blue" }) {
  const Icon = iconMap[project.icon] || Code2;
  const accent = tone === "amber" || project.type === "media" ? "text-amber-300 bg-amber-400/10" : "text-blue-300 bg-blue-400/10";

  return (
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]">
      {project.mediaUrl && <MediaFrame src={project.mediaUrl} title={project.title} compact />}
      <div className="p-6 sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${accent}`}>
            <Icon className="h-5 w-5" />
          </div>
          <span className="text-right text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">{project.date}</span>
        </div>
        <h3 className="text-2xl font-black text-white">{project.title}</h3>
        <p className="mt-2 text-sm font-semibold text-gray-500">{project.role}</p>
        <p className="mt-4 leading-7 text-gray-400">{project.excerpt}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => <span key={tag} className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-gray-300">{tag}</span>)}
        </div>
        <button onClick={() => navigate(`/project/${project.id}`)} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white transition group-hover:text-blue-200">
          Read case study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </button>
      </div>
    </article>
  );
}

function MediaFrame({ src, title, compact = false }) {
  const isVideo = /\.(mp4|webm|ogg)$/i.test(src) || src.startsWith("data:video");
  return (
    <div className={`overflow-hidden bg-zinc-900 ${compact ? "aspect-[16/9]" : "aspect-[4/3] rounded-lg border border-white/10"}`}>
      {isVideo ? (
        <video src={src} title={title} controls className="h-full w-full object-cover" />
      ) : (
        <img src={src} alt={title} className="h-full w-full object-cover" />
      )}
    </div>
  );
}

function SkillPill({ children }) {
  return <span className="whitespace-nowrap rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-gray-300">{children}</span>;
}

function ExperienceRow({ item }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          <p className="mt-1 text-sm font-semibold text-blue-300">{item.company}</p>
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">{item.period}</span>
      </div>
      <p className="mt-4 leading-7 text-gray-400">{item.description}</p>
    </article>
  );
}

function ContactBand({ portfolio, openContact }) {
  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">Get in touch</p>
          <h2 className="mt-3 text-3xl font-black text-white">Let’s build something useful.</h2>
          <p className="mt-3 max-w-2xl text-gray-400">{portfolio.profile.contactCopy}</p>
        </div>
        <button onClick={openContact} className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-blue-100">
          Contact Details <Mail className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

function Footer({ navigate }) {
  return (
    <footer className="relative z-10 w-full border-t border-white/10 py-8 text-center">
      <button onDoubleClick={() => navigate("/admin-login")} className="select-none text-xs font-semibold uppercase tracking-[0.18em] text-gray-600 transition hover:text-gray-400" title="©">
        &copy; {new Date().getFullYear()} Sean Martin Del Rosario. All Rights Reserved.
      </button>
    </footer>
  );
}

function ContactModal({ portfolio, isOpen, onClose }) {
  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}>
      <button className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} aria-label="Close contact modal" />
      <div className={`relative w-full max-w-md rounded-lg border border-white/10 bg-zinc-950 p-6 shadow-2xl transition ${isOpen ? "scale-100" : "scale-95"}`}>
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-white" aria-label="Close">
          <X className="h-5 w-5" />
        </button>
        <h2 className="text-2xl font-black text-white">Contact Sean</h2>
        <div className="mt-6 space-y-4">
          <ContactLink icon={Mail} label="Email" value={portfolio.profile.email} href={`mailto:${portfolio.profile.email}`} />
          <ContactLink icon={Phone} label="Mobile" value={portfolio.profile.phone} href={`tel:${portfolio.profile.phone}`} />
          <ContactLink icon={Linkedin} label="LinkedIn" value="linkedin.com/in/seandelrosario" href={portfolio.profile.linkedin} />
          <ContactLink icon={Github} label="GitHub" value="github.com/seandelrosario" href={portfolio.profile.github} />
        </div>
      </div>
    </div>
  );
}

function ContactLink({ icon: Icon, label, value, href }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 rounded-md border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]">
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-400/10 text-blue-200"><Icon className="h-5 w-5" /></span>
      <span>
        <span className="block text-xs font-bold uppercase tracking-[0.16em] text-gray-500">{label}</span>
        <span className="mt-1 block text-sm font-medium text-white">{value}</span>
      </span>
    </a>
  );
}

function AdminLogin({ navigate, login }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (event) => {
    event.preventDefault();
    const ok = login(username, password);
    if (!ok) setError("Invalid admin credentials.");
  };

  return (
    <PageShell>
      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20">
        <form onSubmit={submit} className="w-full max-w-md rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-2xl sm:p-8">
          <button type="button" onClick={() => navigate("/")} className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Visitor Mode
          </button>
          <div className="mb-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-blue-400/10 text-blue-200">
              <Shield className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-black text-white">Admin Login</h1>
            <p className="mt-3 text-sm leading-6 text-gray-400">Private portfolio editor for Sean.</p>
          </div>
          <div className="space-y-4">
            <AdminField label="Username" value={username} onChange={setUsername} />
            <AdminField label="Password" value={password} onChange={setPassword} type="password" />
          </div>
          {error && <p className="mt-4 rounded-md border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</p>}
          <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-blue-100">
            Login <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </main>
    </PageShell>
  );
}

function AdminDashboard({ portfolio, setPortfolio, navigate, logout }) {
  const [tab, setTab] = useState("content");
  const [editingId, setEditingId] = useState("");
  const editingProject = portfolio.projects.find((project) => project.id === editingId) || null;

  const updateProfile = (field, value) => {
    setPortfolio((current) => ({ ...current, profile: { ...current.profile, [field]: value } }));
  };

  const updateAbout = (field, value) => {
    setPortfolio((current) => ({ ...current, about: { ...current.about, [field]: value } }));
  };

  const addParagraph = () => {
    setPortfolio((current) => ({
      ...current,
      about: {
        ...current.about,
        paragraphs: [...current.about.paragraphs, { id: createId("about"), text: "New paragraph" }],
      },
    }));
  };

  const updateParagraph = (id, text) => {
    setPortfolio((current) => ({
      ...current,
      about: { ...current.about, paragraphs: current.about.paragraphs.map((item) => item.id === id ? { ...item, text } : item) },
    }));
  };

  const deleteParagraph = (id) => {
    setPortfolio((current) => ({
      ...current,
      about: { ...current.about, paragraphs: current.about.paragraphs.filter((item) => item.id !== id) },
    }));
  };

  const moveParagraph = (id, direction) => {
    setPortfolio((current) => ({
      ...current,
      about: { ...current.about, paragraphs: moveItem(current.about.paragraphs, id, direction) },
    }));
  };

  const updateProject = (project) => {
    setPortfolio((current) => ({
      ...current,
      projects: current.projects.map((item) => item.id === project.id ? project : item),
    }));
  };

  const addProject = (type = "it") => {
    const project = createProject(type);
    setPortfolio((current) => ({ ...current, projects: [project, ...current.projects] }));
    setEditingId(project.id);
    setTab("projects");
  };

  const deleteProject = (id) => {
    setPortfolio((current) => ({ ...current, projects: current.projects.filter((project) => project.id !== id) }));
    if (editingId === id) setEditingId("");
  };

  const moveProject = (id, direction) => {
    setPortfolio((current) => ({ ...current, projects: moveItem(current.projects, id, direction) }));
  };

  const resetContent = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setPortfolio(defaultPortfolio);
    setEditingId("");
  };

  return (
    <PageShell>
      <main className="relative z-10 min-h-screen">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300">Admin Mode</p>
              <h1 className="text-2xl font-black text-white">Portfolio Control Room</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => navigate("/")} className="rounded-md border border-white/15 px-4 py-2 text-sm font-bold text-white hover:bg-white/10">Visitor View</button>
              <button onClick={resetContent} className="rounded-md border border-amber-300/20 px-4 py-2 text-sm font-bold text-amber-100 hover:bg-amber-400/10">Reset Local Edits</button>
              <button onClick={logout} className="inline-flex items-center gap-2 rounded-md border border-red-400/30 px-4 py-2 text-sm font-bold text-red-200 hover:bg-red-500/10"><LogOut className="h-4 w-4" /> Logout</button>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[250px_1fr]">
          <aside className="h-max rounded-lg border border-white/10 bg-white/[0.035] p-3">
            {[["content", "Page Content", Edit3], ["projects", "Projects CRUD", BriefcaseBusiness], ["settings", "Contact / Skills", User]].map(([value, label, Icon]) => (
              <button key={value} onClick={() => setTab(value)} className={`mb-1 flex w-full items-center gap-3 rounded-md px-4 py-3 text-left text-sm font-bold transition ${tab === value ? "bg-white text-zinc-950" : "text-gray-300 hover:bg-white/10 hover:text-white"}`}>
                <Icon className="h-4 w-4" /> {label}
              </button>
            ))}
          </aside>

          <section className="min-w-0">
            {tab === "content" && (
              <AdminPanel title="Page Copy">
                <div className="grid gap-4 lg:grid-cols-2">
                  <AdminField label="Hero eyebrow" value={portfolio.profile.eyebrow} onChange={(value) => updateProfile("eyebrow", value)} />
                  <AdminField label="Name" value={portfolio.profile.name} onChange={(value) => updateProfile("name", value)} />
                  <AdminArea label="Headline" value={portfolio.profile.headline} onChange={(value) => updateProfile("headline", value)} />
                  <AdminArea label="Hero summary" value={portfolio.profile.summary} onChange={(value) => updateProfile("summary", value)} />
                  <AdminArea label="Contact copy" value={portfolio.profile.contactCopy} onChange={(value) => updateProfile("contactCopy", value)} />
                  <AdminArea label="About title" value={portfolio.about.title} onChange={(value) => updateAbout("title", value)} />
                </div>
                <div className="mt-8 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-black text-white">About Paragraphs</h3>
                  <button onClick={addParagraph} className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-bold text-zinc-950"><Plus className="h-4 w-4" /> Add</button>
                </div>
                <div className="mt-4 space-y-3">
                  {portfolio.about.paragraphs.map((paragraph, index) => (
                    <EditableListRow key={paragraph.id} onUp={() => moveParagraph(paragraph.id, -1)} onDown={() => moveParagraph(paragraph.id, 1)} onDelete={() => deleteParagraph(paragraph.id)} disableUp={index === 0} disableDown={index === portfolio.about.paragraphs.length - 1}>
                      <AdminArea label={`Paragraph ${index + 1}`} value={paragraph.text} onChange={(value) => updateParagraph(paragraph.id, value)} />
                    </EditableListRow>
                  ))}
                </div>
              </AdminPanel>
            )}

            {tab === "projects" && (
              <AdminPanel title="Projects">
                <div className="mb-6 flex flex-wrap gap-3">
                  <button onClick={() => addProject("it")} className="inline-flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-sm font-bold text-white"><Plus className="h-4 w-4" /> Add IT Project</button>
                  <button onClick={() => addProject("media")} className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-4 py-2 text-sm font-bold text-zinc-950"><Plus className="h-4 w-4" /> Add Media Project</button>
                </div>
                <div className="grid gap-5 xl:grid-cols-[340px_1fr]">
                  <div className="space-y-2">
                    {portfolio.projects.map((project, index) => (
                      <div key={project.id} className={`flex w-full items-center justify-between gap-3 rounded-md border p-4 text-left transition ${editingId === project.id ? "border-blue-300 bg-blue-400/10" : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"}`}>
                        <span className="min-w-0">
                          <button onClick={() => setEditingId(project.id)} className="block max-w-full truncate text-left font-bold text-white">{project.title}</button>
                          <span className="text-xs uppercase tracking-[0.14em] text-gray-500">{project.type} / {project.category}</span>
                        </span>
                        <span className="flex shrink-0 gap-1">
                          <IconButton icon={GripVertical} />
                          <IconButton icon={ArrowLeft} disabled={index === 0} onClick={() => moveProject(project.id, -1)} />
                          <IconButton icon={ArrowRight} disabled={index === portfolio.projects.length - 1} onClick={() => moveProject(project.id, 1)} />
                        </span>
                      </div>
                    ))}
                  </div>
                  <div>
                    {editingProject ? (
                      <ProjectEditor project={editingProject} updateProject={updateProject} deleteProject={deleteProject} navigate={navigate} />
                    ) : (
                      <div className="rounded-lg border border-dashed border-white/15 p-8 text-center text-gray-500">Select a project to edit.</div>
                    )}
                  </div>
                </div>
              </AdminPanel>
            )}

            {tab === "settings" && (
              <AdminPanel title="Contact, Image, Skills">
                <div className="grid gap-4 lg:grid-cols-2">
                  <AdminField label="Portrait URL or data image" value={portfolio.profile.portrait} onChange={(value) => updateProfile("portrait", value)} />
                  <AdminUpload label="Upload portrait" onData={(value) => updateProfile("portrait", value)} />
                  <AdminField label="Resume URL" value={portfolio.profile.resumeUrl} onChange={(value) => updateProfile("resumeUrl", value)} />
                  <AdminField label="Email" value={portfolio.profile.email} onChange={(value) => updateProfile("email", value)} />
                  <AdminField label="Phone" value={portfolio.profile.phone} onChange={(value) => updateProfile("phone", value)} />
                  <AdminField label="LinkedIn" value={portfolio.profile.linkedin} onChange={(value) => updateProfile("linkedin", value)} />
                  <AdminField label="GitHub" value={portfolio.profile.github} onChange={(value) => updateProfile("github", value)} />
                  <AdminArea label="Skills, comma separated" value={portfolio.skills.join(", ")} onChange={(value) => setPortfolio((current) => ({ ...current, skills: value.split(",").map((item) => item.trim()).filter(Boolean) }))} />
                </div>
              </AdminPanel>
            )}
          </section>
        </div>
      </main>
    </PageShell>
  );
}

function AdminPanel({ title, children }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4 sm:p-6">
      <h2 className="mb-6 text-2xl font-black text-white">{title}</h2>
      {children}
    </div>
  );
}

function ProjectEditor({ project, updateProject, deleteProject, navigate }) {
  const setField = (field, value) => updateProject({ ...project, [field]: value });
  const tagsText = project.tags.join(", ");
  const galleryText = (project.gallery || []).join("\n");

  return (
    <div className="rounded-lg border border-white/10 bg-zinc-950/60 p-4 sm:p-6">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-xl font-black text-white">Edit Project</h3>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => navigate(`/project/${project.id}`)} className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm font-bold text-white hover:bg-white/10"><ExternalLink className="h-4 w-4" /> View</button>
          <button onClick={() => deleteProject(project.id)} className="inline-flex items-center gap-2 rounded-md border border-red-400/30 px-3 py-2 text-sm font-bold text-red-200 hover:bg-red-500/10"><Trash2 className="h-4 w-4" /> Delete</button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <AdminField label="Title" value={project.title} onChange={(value) => setField("title", value)} />
        <AdminSelect label="Portfolio" value={project.type} onChange={(value) => setField("type", value)} options={[["it", "IT"], ["media", "Media"]]} />
        <AdminField label="Role" value={project.role} onChange={(value) => setField("role", value)} />
        <AdminField label="Date" value={project.date} onChange={(value) => setField("date", value)} />
        <AdminField label="Category" value={project.category} onChange={(value) => setField("category", value)} />
        <AdminField label="Clickable link" value={project.link} onChange={(value) => setField("link", value)} />
        <AdminSelect label="Icon" value={project.icon} onChange={(value) => setField("icon", value)} options={iconOptions.map((icon) => [icon, icon])} />
        <AdminSelect label="Featured on home" value={project.featured ? "yes" : "no"} onChange={(value) => setField("featured", value === "yes")} options={[["yes", "Yes"], ["no", "No"]]} />
        <AdminField label="Main media URL or data image/video" value={project.mediaUrl} onChange={(value) => setField("mediaUrl", value)} />
        <AdminUpload label="Upload main media" onData={(value) => setField("mediaUrl", value)} />
        <AdminArea label="Short card description" value={project.excerpt} onChange={(value) => setField("excerpt", value)} />
        <AdminArea label="Tags, comma separated" value={tagsText} onChange={(value) => setField("tags", value.split(",").map((item) => item.trim()).filter(Boolean))} />
        <AdminArea label="Case study paragraphs" value={project.details} onChange={(value) => setField("details", value)} rows={8} />
        <AdminArea label="Gallery URLs, one per line" value={galleryText} onChange={(value) => setField("gallery", splitLines(value))} rows={8} />
      </div>
      <div className="mt-6 flex items-center gap-2 rounded-md border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
        <Save className="h-4 w-4" /> Changes save automatically in this browser.
      </div>
    </div>
  );
}

function EditableListRow({ children, onUp, onDown, onDelete, disableUp, disableDown }) {
  return (
    <div className="grid gap-3 rounded-lg border border-white/10 bg-zinc-950/40 p-4 md:grid-cols-[1fr_auto]">
      {children}
      <div className="flex items-end gap-2">
        <IconButton icon={ArrowLeft} onClick={onUp} disabled={disableUp} />
        <IconButton icon={ArrowRight} onClick={onDown} disabled={disableDown} />
        <IconButton icon={Trash2} onClick={onDelete} danger />
      </div>
    </div>
  );
}

function IconButton({ icon: Icon, onClick, disabled, danger }) {
  return (
    <button type="button" onClick={onClick} disabled={disabled} className={`rounded-md border p-2 transition disabled:cursor-not-allowed disabled:opacity-30 ${danger ? "border-red-400/30 text-red-200 hover:bg-red-500/10" : "border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"}`}>
      <Icon className="h-4 w-4" />
    </button>
  );
}

function AdminField({ label, value, onChange, type = "text" }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-gray-500">{label}</span>
      <input type={type} value={value} onChange={(event) => onChange(event.target.value)} className="w-full rounded-md border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-blue-300" />
    </label>
  );
}

function AdminArea({ label, value, onChange, rows = 4 }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-gray-500">{label}</span>
      <textarea value={value} rows={rows} onChange={(event) => onChange(event.target.value)} className="w-full resize-y rounded-md border border-white/10 bg-zinc-950 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-gray-700 focus:border-blue-300" />
    </label>
  );
}

function AdminSelect({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-gray-500">{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)} className="w-full rounded-md border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-300">
        {options.map(([optionValue, labelText]) => <option key={optionValue} value={optionValue}>{labelText}</option>)}
      </select>
    </label>
  );
}

function AdminUpload({ label, onData }) {
  const handleFile = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onData(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-gray-500">{label}</span>
      <span className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-white/15 bg-zinc-950 px-4 py-3 text-sm font-bold text-gray-300 transition hover:bg-white/5 hover:text-white">
        <Upload className="h-4 w-4" /> Choose file
      </span>
      <input type="file" accept="image/*,video/*" onChange={handleFile} className="sr-only" />
    </label>
  );
}

function NotFound({ navigate }) {
  return (
    <PageShell>
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-black text-white">Project not found</h1>
        <button onClick={() => navigate("/")} className="mt-8 rounded-md bg-white px-5 py-3 text-sm font-bold text-zinc-950">Return home</button>
      </main>
    </PageShell>
  );
}

function createProject(type) {
  const id = createId(type);
  return {
    id,
    type,
    title: type === "media" ? "New Media Project" : "New IT Project",
    role: "Your role",
    date: new Date().getFullYear().toString(),
    category: type === "media" ? "Creative" : "Web App",
    excerpt: "Short project summary for cards and listings.",
    details: "Write the full project story here.\n\nAdd another paragraph for process, outcome, or technical decisions.",
    tags: ["React"],
    link: "",
    mediaUrl: "",
    gallery: [],
    icon: type === "media" ? "Film" : "Code2",
    featured: false,
  };
}

function createId(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function moveItem(items, id, direction) {
  const index = items.findIndex((item) => item.id === id);
  const nextIndex = index + direction;
  if (index < 0 || nextIndex < 0 || nextIndex >= items.length) return items;
  const next = [...items];
  const [item] = next.splice(index, 1);
  next.splice(nextIndex, 0, item);
  return next;
}

function splitLines(value) {
  return (value || "").split("\n").map((item) => item.trim()).filter(Boolean);
}

function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const isComplete = letterCount === current.length;
    const isEmpty = letterCount === 0;
    const delay = deleting ? 45 : isComplete ? 1600 : 80;
    const timer = setTimeout(() => {
      if (!deleting && isComplete) {
        setDeleting(true);
        return;
      }
      if (deleting && isEmpty) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
        return;
      }
      setLetterCount((count) => count + (deleting ? -1 : 1));
    }, delay);
    return () => clearTimeout(timer);
  }, [deleting, letterCount, wordIndex, words]);

  return words[wordIndex].slice(0, letterCount);
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
