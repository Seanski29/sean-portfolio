import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  Calendar,
  Camera,
  ChevronRight,
  Film,
  Github,
  LayoutDashboard,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Plane,
  Play,
  Radar,
  Smartphone,
  X,
} from "lucide-react";
import "./styles.css";

const skills = [
  "Business Analytics",
  "Front-End Development",
  "Arduino Integration",
  "UI/UX Design",
  "Multimedia Editing",
  "Data Visualization",
];

const featuredProjects = [
  {
    title: "Shervice",
    description:
      "A service management application designed to streamline operations, track requests, and improve overall workflow efficiency within organizations.",
    href: "https://github.com/Seanski29/Shervice",
    icon: Briefcase,
    wide: true,
  },
  {
    title: "Flik",
    description:
      "A software application that replicates a 1970s photobooth, featuring custom camera filters and simplified photo exporting.",
    href: "https://github.com/Seanski29/Flik-70sPhotobooth",
    icon: Camera,
  },
  {
    title: "ClearAir Turb",
    description:
      "A simulated LIDAR-based system designed to detect clear air turbulence, aimed at enhancing flight monitoring and safety.",
    href: "https://github.com/Seanski29/ClearAirTurblence-LIDAR",
    icon: Plane,
  },
  {
    title: "Sentry 360",
    description:
      "A hardware-software integration project using Arduino components to construct a radar tower capable of 360-degree monitoring and object detection.",
    href: "https://github.com/Seanski29/Sentry-360-Arduino-Radar-Sentry-Tower",
    icon: Radar,
    wide: true,
  },
];

const itProjects = [
  {
    title: "Shervice",
    date: "Dec 2026",
    role: "FrontEnd UI/UX",
    description:
      "Developed a transport management system for GT Lantin Car Rentals to optimize fleet operations. Designed the user interface and implemented features to track driver attendance, monitor punctuality, and generate data-driven analytics.",
    tags: ["Flutter", "Node.js", "Python", "Supabase"],
    category: "web",
    href: "https://github.com/Seanski29/Shervice",
    icon: Smartphone,
  },
  {
    title: "Flik-70s",
    date: "Jul 2026",
    role: "Lead Developer",
    description:
      "Built a vintage-style photobooth integrating an Arduino-based hardware control layer. Developed a responsive operator dashboard using Electron for automated event management.",
    tags: ["Arduino", "Electron", "JS/HTML/CSS"],
    category: "hardware",
    href: "https://github.com/Seanski29/Flik-70sPhotobooth",
    icon: Camera,
  },
  {
    title: "ClearAir LIDAR",
    date: "May 2026",
    role: "Sole Programmer",
    description:
      "Developed a LIDAR-based avionics system using an Arduino Mega for laser backscatter analysis. Integrated a K-Nearest Neighbors algorithm in C++ to classify atmospheric data and detect clear air turbulence.",
    tags: ["C++ / C", "Arduino Mega"],
    category: "hardware",
    href: "https://github.com/Seanski29/ClearAirTurblence-LIDAR",
    icon: Plane,
  },
  {
    title: "Unitly",
    date: "Dec 2025",
    role: "FrontEnd UI/UX",
    description:
      "Designed the front-end interface for a multi-property management platform. Automated billing workflows and centralized property tracking to improve landlord-tenant communication.",
    tags: ["PHP", "Tailwind", "JS"],
    category: "web",
    icon: LayoutDashboard,
  },
  {
    title: "Sentry-360 Radar Tower",
    date: "Dec 2025",
    role: "Sole Programmer",
    description:
      "Constructed a 360-degree radar tower using Arduino C++ and Processing 4 Java. Developed a real-time visual interface to translate physical sensor data into visual metrics.",
    tags: ["C", "Arduino Uno", "Processing 4"],
    category: "hardware",
    href: "https://github.com/Seanski29/Sentry-360-Arduino-Radar-Sentry-Tower",
    icon: Radar,
    wide: true,
  },
];

const contact = {
  phone: "09764362928",
  email: "seanmdelrosraio@gmail.com",
  linkedin: "https://linkedin.com/in/seandelrosario/",
  github: "https://github.com/seandelrosario",
};

function App() {
  const [route, setRoute] = useState(() => normalizeRoute(window.location.pathname));
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onPopState = () => setRoute(normalizeRoute(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setRoute(normalizeRoute(to));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const page = {
    "/": <HomePage navigate={navigate} openContact={() => setModalOpen(true)} />,
    "/it": <ItPage navigate={navigate} openContact={() => setModalOpen(true)} />,
    "/media": <MediaPage navigate={navigate} openContact={() => setModalOpen(true)} />,
  }[route] || <HomePage navigate={navigate} openContact={() => setModalOpen(true)} />;

  return (
    <>
      {page}
      <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

function normalizeRoute(pathname) {
  if (pathname === "/it.html") return "/it";
  if (pathname === "/media.html") return "/media";
  if (pathname === "/index.html") return "/";
  return pathname === "/" || pathname === "/it" || pathname === "/media" ? pathname : "/";
}

function Nav({ active = "home", accent = "blue", navigate, openContact }) {
  const [isOpen, setOpen] = useState(false);
  const accentText = accent === "amber" ? "text-amber-400 hover:text-amber-300" : "text-blue-400 hover:text-blue-300";
  const activeText = accent === "amber" ? "text-amber-500" : "text-blue-500";

  const go = (path, hash) => {
    setOpen(false);
    if (path !== normalizeRoute(window.location.pathname)) {
      navigate(path);
      setTimeout(() => scrollToHash(hash), 80);
      return;
    }
    scrollToHash(hash);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-zinc-950/70 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button onClick={() => go("/", "hero")} className={`text-lg font-bold tracking-widest text-white transition-colors ${accent === "amber" ? "hover:text-amber-500" : "hover:text-blue-500"}`}>
          SMDR.
        </button>
        <div className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-widest md:flex">
          <button onClick={() => go("/", "about")} className="transition-colors hover:text-white">About</button>
          <button onClick={() => go("/", "projects")} className="transition-colors hover:text-white">Featured</button>
          <div className="h-4 w-px bg-white/20" />
          <button onClick={() => navigate("/it")} className={active === "it" ? activeText : accentText}>IT</button>
          <button onClick={() => navigate("/media")} className={active === "media" ? "text-amber-500" : "text-amber-400 hover:text-amber-300"}>Media</button>
          <button onClick={openContact} className="ml-4 rounded border border-white/20 px-4 py-2 text-white transition-colors hover:bg-white/10">Contact</button>
        </div>
        <button onClick={() => setOpen((value) => !value)} className="text-white md:hidden" aria-label="Toggle mobile menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {isOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col items-center gap-6 border-b border-white/5 bg-zinc-900/95 py-4 text-sm font-semibold uppercase tracking-widest backdrop-blur-md md:hidden">
          <button onClick={() => go("/", "about")} className="transition-colors hover:text-white">About</button>
          <button onClick={() => go("/", "projects")} className="transition-colors hover:text-white">Featured</button>
          <button onClick={() => navigate("/it")} className={active === "it" ? activeText : "text-blue-400 hover:text-blue-300"}>IT</button>
          <button onClick={() => navigate("/media")} className={active === "media" ? "text-amber-500" : "text-amber-400 hover:text-amber-300"}>Media</button>
          <button onClick={() => { setOpen(false); openContact(); }} className="text-white transition-colors hover:text-blue-400">Contact</button>
        </div>
      )}
    </nav>
  );
}

function scrollToHash(hash) {
  if (!hash) return;
  const target = document.getElementById(hash);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - 84;
  window.scrollTo({ top, behavior: "smooth" });
}

function HomePage({ navigate, openContact }) {
  const typed = useTypewriter(["Business Analytics.", "Front-End Development.", "Hardware Integration.", "UI/UX Design."]);

  return (
    <PageShell>
      <Nav navigate={navigate} openContact={openContact} />
      <main className="relative z-10 flex w-full flex-col items-center">
        <section id="hero" className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-32 lg:grid-cols-2">
          <div className="order-2 z-10 flex flex-col items-start justify-center lg:order-1">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">BSU Lipa - 4th Year IT Student</p>
            <h1 className="mb-6 text-5xl font-black leading-[1.1] tracking-tight text-white opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] md:text-7xl lg:text-[5.5vw]">
              Sean Martin <br /> Del Rosario
            </h1>
            <div className="h-10 text-xl font-light text-gray-400 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] md:text-3xl">
              I focus on <span className="font-medium text-white">{typed}</span><span className="animate-blink text-white">|</span>
            </div>
            <div className="mt-12 flex w-full flex-col gap-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards] sm:w-auto sm:flex-row">
              <button onClick={() => navigate("/it")} className="group flex items-center justify-center gap-3 rounded-lg border border-blue-500/30 bg-blue-500/10 px-8 py-4 text-sm font-semibold tracking-[0.1em] text-blue-400 transition-all duration-300 hover:bg-blue-600 hover:text-white">
                IT PORTFOLIO <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={() => navigate("/media")} className="group flex items-center justify-center gap-3 rounded-lg border border-amber-500/30 bg-amber-500/10 px-8 py-4 text-sm font-semibold tracking-[0.1em] text-amber-500 transition-all duration-300 hover:bg-amber-500 hover:text-white">
                MEDIA PORTFOLIO <Play className="h-4 w-4 transition-transform group-hover:scale-110" />
              </button>
            </div>
          </div>
          <div className="order-1 mx-auto flex w-full max-w-lg items-center justify-center opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] lg:order-2 lg:ml-auto">
            <img src="/portrait.png" alt="Sean Martin Del Rosario" className="max-h-[75vh] w-full object-contain portrait-mask" />
          </div>
        </section>
        <section id="about" className="mx-auto w-full max-w-4xl border-t border-white/5 px-6 py-24 text-center">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-500">Background</h2>
          <h3 className="mb-8 text-3xl font-bold tracking-tight text-white md:text-4xl">Data and Development</h3>
          <div className="space-y-6 leading-relaxed text-gray-400 md:text-lg">
            <p>I am a 4th-year Information Technology student at Batangas State University (Lipa Campus), majoring in Business Analytics. My core objective is to build practical software solutions and analyze data to support strategic business decisions.</p>
            <p>My experience covers full-stack web development, hardware integration, and multimedia design. I prioritize delivering clean, functional, and user-centered products that solve real-world problems efficiently.</p>
          </div>
          <div className="mt-24 border-t border-white/5 pt-12">
            <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-gray-500">Technical Proficiencies</p>
            <div className="marquee-container">
              <div className="flex shrink-0 animate-marquee items-center gap-8">
                {[...skills, ...skills].map((skill, index) => <SkillPill key={`${skill}-${index}`}>{skill}</SkillPill>)}
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="mx-auto w-full max-w-7xl border-t border-white/5 px-6 py-24">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-blue-500">Portfolio</h2>
              <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Featured IT Projects</h3>
            </div>
            <button onClick={() => navigate("/it")} className="hidden items-center gap-2 text-sm font-semibold text-gray-400 transition-colors hover:text-white md:flex">See All Projects <ArrowRight className="h-4 w-4" /></button>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => <FeaturedProjectCard key={project.title} project={project} />)}
          </div>
        </section>
        <ContactSection openContact={openContact} />
        <Footer />
      </main>
    </PageShell>
  );
}

function PageShell({ children, accent = "blue" }) {
  return (
    <div className={`min-h-screen overflow-x-hidden bg-zinc-950 font-sans text-gray-300 antialiased selection:text-white ${accent === "amber" ? "selection:bg-amber-900/50" : "selection:bg-blue-900/50"}`}>
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className={`absolute top-[-10%] h-[500px] w-[500px] rounded-full blur-[120px] ${accent === "amber" ? "right-[-10%] bg-amber-900/10" : "left-[-10%] bg-blue-900/20"}`} />
        <div className={`absolute bottom-[-10%] h-[500px] w-[500px] rounded-full blur-[100px] ${accent === "amber" ? "left-[-10%] bg-amber-800/5" : "right-[-10%] bg-blue-800/10"}`} />
      </div>
      {children}
    </div>
  );
}

function SkillPill({ children }) {
  return <span className="rounded-full border border-zinc-800 bg-zinc-900 px-6 py-3 text-sm font-medium">{children}</span>;
}

function FeaturedProjectCard({ project }) {
  const Icon = project.icon;
  return (
    <a href={project.href} target="_blank" rel="noreferrer" className={`group relative block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-md transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] ${project.wide ? "md:col-span-2" : ""}`}>
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-blue-500/20 group-hover:text-blue-400">
            <Icon className="h-5 w-5" />
          </div>
          <h4 className={`${project.wide ? "text-2xl" : "text-xl"} mb-3 font-bold text-white`}>{project.title}</h4>
          <p className="max-w-md leading-relaxed text-gray-400">{project.description}</p>
        </div>
        <div className="mt-8 flex items-center text-sm font-semibold text-blue-500 group-hover:text-blue-400">View Repository <ArrowUpRight className="ml-1 h-4 w-4" /></div>
      </div>
    </a>
  );
}

function ItPage({ navigate, openContact }) {
  const [filter, setFilter] = useState("all");
  const projects = useMemo(() => filter === "all" ? itProjects : itProjects.filter((project) => project.category === filter), [filter]);

  return (
    <PageShell>
      <CursorGlow accent="blue" />
      <Nav active="it" navigate={navigate} openContact={openContact} />
      <PortfolioHeader eyebrow="IT Portfolio" title="Engineering" highlight="The Future." accent="blue" />
      <main className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 pb-32 lg:grid-cols-12 lg:gap-20">
        <aside className="space-y-16 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] lg:col-span-5">
          <SectionTitle>Education</SectionTitle>
          <InfoCard accent="blue">
            <h3 className="mb-2 text-xl font-bold text-white">Batangas State University - Lipa</h3>
            <p className="mb-4 text-sm font-medium text-blue-500">BS in Information Technology<br />Major in Business Analytics</p>
            <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-wide text-gray-400">
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3 text-gray-500" /> Exp. July 2027</span>
              <span className="flex items-center gap-1"><Award className="h-3 w-3 text-gray-500" /> GWA: 1.83</span>
            </div>
          </InfoCard>
          <SectionTitle>Experience</SectionTitle>
          <div className="space-y-6">
            <InfoCard accent="blue">
              <Badge>Jul 2026 - Present</Badge>
              <h3 className="mb-2 text-xl font-bold text-white">Software Developer</h3>
              <p className="mb-4 text-sm font-medium text-blue-500">SCRATCH SOLUTIONS INC</p>
              <ul className="space-y-4 text-sm leading-relaxed text-gray-400">
                {["Developing a full-stack desktop application using Electron, Node.js, and JavaScript to centralize live-event operations.", "Integrating hardware components, including micro-controllers and digital cameras, to automate workflows and physical interactions."].map((item) => (
                  <li key={item} className="flex items-start gap-3"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />{item}</li>
                ))}
              </ul>
              <p className="mt-6 text-xs tracking-tight text-gray-500">C++ - Python - Node.js - Arduino - JS - HTML/CSS</p>
            </InfoCard>
            <InfoCard accent="blue">
              <Badge>Aug 2025</Badge>
              <h3 className="mb-2 text-lg font-bold text-white">Admin Employee (SPES)</h3>
              <p className="mb-4 text-sm font-medium text-gray-400">Lipa City Government</p>
              <p className="text-sm leading-relaxed text-gray-400">Provided administrative support to the Admin Office and Public Employment Service Office. Handled document processing, records management, and client service coordination.</p>
            </InfoCard>
          </div>
        </aside>
        <section className="mt-16 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] lg:col-span-7 lg:mt-0">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle>Featured Projects</SectionTitle>
            <div className="flex flex-wrap gap-3">
              {[["all", "All"], ["web", "Web/Mobile"], ["hardware", "Hardware"]].map(([value, label]) => <FilterButton key={value} active={filter === value} onClick={() => setFilter(value)}>{label}</FilterButton>)}
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => <ProjectCard key={project.title} project={project} accent="blue" />)}
          </div>
        </section>
      </main>
    </PageShell>
  );
}

function MediaPage({ navigate, openContact }) {
  return (
    <PageShell accent="amber">
      <CursorGlow accent="amber" />
      <Nav active="media" accent="amber" navigate={navigate} openContact={openContact} />
      <PortfolioHeader eyebrow="Media Portfolio" title="Crafting" highlight="Stories." accent="amber" />
      <main className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 pb-32 lg:grid-cols-12 lg:gap-20">
        <aside className="space-y-16 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] lg:col-span-5">
          <SectionTitle>Creative Experience</SectionTitle>
          <div className="space-y-6">
            <InfoCard accent="amber">
              <Badge>2024 - 2025</Badge>
              <h3 className="mb-2 text-xl font-bold text-white">Multimedia Vice President</h3>
              <p className="mb-4 text-sm font-medium text-amber-500">Divino Amor - Redemptorist Lipa</p>
              <p className="mb-6 text-sm leading-relaxed text-gray-400">Managed live broadcasting and event photography. Operated vMix software and multi-camera setups to ensure consistent, high-quality digital coverage of major events.</p>
              <p className="text-xs tracking-tight text-gray-500">Live Broadcasting - Photography - vMix - Multi-cam</p>
            </InfoCard>
            <InfoCard accent="amber">
              <Badge>2022 - 2023</Badge>
              <h3 className="mb-2 text-lg font-bold text-white">YouTube Video Editor</h3>
              <p className="mb-4 text-sm font-medium text-gray-400">Cindior Ho & Coach Edmund Tan</p>
              <p className="mb-6 text-sm leading-relaxed text-gray-400">Edited and published informational YouTube content focused on the Singapore real estate market. Implemented content strategies that increased subscriber count by 300% and average video views tenfold within eight months.</p>
              <p className="text-xs tracking-tight text-gray-500">Video Editing - Script Writing - RoadMapping</p>
            </InfoCard>
          </div>
        </aside>
        <section className="mt-16 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] lg:col-span-7 lg:mt-0">
          <SectionTitle>Featured Projects</SectionTitle>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <ProjectCard accent="amber" project={{ title: "Sinaya Y2K | Reloaded 2025", role: "Video Editing", description: "Produced a video for the De La Salle Homecoming event. Applied dynamic transitions, color grading, and audio synchronization to align with the event's Y2K theme.", tags: ["CapCut", "Canva", "Photoshop"], icon: Film, wide: true }} />
          </div>
        </section>
      </main>
    </PageShell>
  );
}

function PortfolioHeader({ eyebrow, title, highlight, accent }) {
  return (
    <header className="relative z-10 mx-auto mb-24 w-full max-w-7xl px-6 pt-32 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
      <p className={`mb-4 text-xs font-bold uppercase tracking-[0.3em] ${accent === "amber" ? "text-amber-500" : "text-blue-500"}`}>{eyebrow}</p>
      <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-white md:text-7xl lg:text-[6vw]">
        {title} <br /><span className={`bg-gradient-to-r bg-clip-text text-transparent ${accent === "amber" ? "from-amber-400 to-amber-600" : "from-blue-400 to-blue-600"}`}>{highlight}</span>
      </h1>
    </header>
  );
}

function SectionTitle({ children }) {
  return <h2 className="border-l-2 border-white/20 pl-4 text-xs font-bold uppercase tracking-[0.4em] text-gray-500">{children}</h2>;
}

function InfoCard({ children, accent }) {
  return <div className={`rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-md transition-all duration-300 ${accent === "amber" ? "hover:border-amber-500/30" : "hover:border-blue-500/30"}`}>{children}</div>;
}

function Badge({ children }) {
  return <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{children}</span>;
}

function FilterButton({ active, onClick, children }) {
  return <button onClick={onClick} className={`rounded px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${active ? "bg-blue-600 text-white" : "border border-zinc-800 bg-zinc-900 text-gray-400 hover:text-white"}`}>{children}</button>;
}

function ProjectCard({ project, accent }) {
  const Icon = project.icon;
  const hover = accent === "amber" ? "hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]" : "hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]";
  const text = accent === "amber" ? "group-hover:text-amber-500" : "group-hover:text-blue-500";
  const iconColor = accent === "amber" ? "text-amber-500 bg-amber-500/10" : "text-blue-500 bg-blue-500/10";
  const content = (
    <>
      <div className="mb-6 flex items-start justify-between gap-6">
        <h3 className={`text-2xl font-bold text-white transition-colors ${text}`}>{project.title}</h3>
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform group-hover:scale-110 ${iconColor}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">{project.date ? `${project.date} - ${project.role}` : project.role}</p>
      <p className="mb-8 text-sm leading-relaxed text-gray-400">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">{tag}</span>)}
      </div>
    </>
  );

  const className = `group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-md transition-all duration-300 ${hover} ${project.wide ? "sm:col-span-2" : ""}`;
  return project.href ? <a href={project.href} target="_blank" rel="noreferrer" className={className}>{content}</a> : <div className={className}>{content}</div>;
}

function CursorGlow({ accent }) {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    let mouseX = position.x;
    let mouseY = position.y;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let frame;
    const onMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };
    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      setPosition({ x: cursorX, y: cursorY });
      frame = requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", onMouseMove);
    frame = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div className={`pointer-events-none fixed left-0 top-0 z-0 h-[500px] w-[500px] rounded-full opacity-30 mix-blend-screen will-change-transform ${accent === "amber" ? "glow-amber" : "glow-blue"}`} style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0) translate3d(-50%, -50%, 0)` }} />;
}

function ContactSection({ openContact }) {
  return (
    <section id="contact" className="mx-auto mb-12 w-full max-w-4xl border-t border-white/5 px-6 py-24">
      <div className="mb-16 text-center">
        <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-blue-500">Get In Touch</h2>
        <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Let's Connect</h3>
        <p className="mx-auto mt-4 max-w-xl text-gray-400">Feel free to reach out for collaborations, project inquiries, or employment opportunities.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        <ContactButton icon={Mail} label="Email" onClick={openContact} />
        <ContactButton icon={Phone} label="Mobile" onClick={openContact} accent="amber" />
        <ContactButton icon={Linkedin} label="LinkedIn" href={contact.linkedin} />
        <ContactButton icon={Github} label="GitHub" href={contact.github} />
      </div>
    </section>
  );
}

function ContactButton({ icon: Icon, label, href, onClick, accent = "blue" }) {
  const classes = `group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10`;
  const iconClass = accent === "amber" ? "group-hover:text-amber-400" : "group-hover:text-blue-400";
  const content = (
    <>
      <div className={`text-gray-400 transition-colors ${iconClass}`}><Icon className="h-5 w-5" /></div>
      <span className="text-sm font-semibold uppercase tracking-widest text-white">{label}</span>
    </>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer" className={classes}>{content}</a> : <button onClick={onClick} className={classes}>{content}</button>;
}

function ContactModal({ isOpen, onClose }) {
  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-300 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}>
      <button className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} aria-label="Close contact modal" />
      <div className={`relative mx-6 w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl transition-transform duration-300 ${isOpen ? "scale-100" : "scale-95"}`}>
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 transition-colors hover:text-white" aria-label="Close">
          <X className="h-5 w-5" />
        </button>
        <h4 className="mb-6 text-xl font-bold tracking-tight text-white">Direct Contact</h4>
        <div className="space-y-6">
          <ModalContactRow icon={Phone} label="Mobile Number" value={contact.phone} href={`tel:${contact.phone}`} accent="amber" />
          <ModalContactRow icon={Mail} label="Email Address" value={contact.email} href={`mailto:${contact.email}`} />
        </div>
      </div>
    </div>
  );
}

function ModalContactRow({ icon: Icon, label, value, href, accent = "blue" }) {
  const color = accent === "amber" ? "border-amber-500/20 bg-amber-500/10 text-amber-500 hover:text-amber-400" : "border-blue-500/20 bg-blue-500/10 text-blue-500 hover:text-blue-400";
  return (
    <div className="flex items-center gap-4">
      <div className={`flex h-12 w-12 items-center justify-center rounded-full border ${color}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">{label}</p>
        <a href={href} className={`text-sm font-medium text-gray-200 transition-colors ${accent === "amber" ? "hover:text-amber-400" : "hover:text-blue-400"}`}>{value}</a>
      </div>
    </div>
  );
}

function Footer() {
  return <footer className="w-full border-t border-white/5 py-8 text-center text-xs font-semibold uppercase tracking-widest text-gray-500">&copy; {new Date().getFullYear()} Sean Martin Del Rosario. All Rights Reserved.</footer>;
}

function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const isComplete = letterCount === current.length;
    const isEmpty = letterCount === 0;
    const delay = deleting ? 50 : isComplete ? 2000 : 100;
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
