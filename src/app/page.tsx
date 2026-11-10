"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowDownRight, ArrowUp, ArrowUpRight, Menu, X } from "lucide-react";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiSvelte, SiWordpress, SiTailwindcss, SiPostgresql, SiNodedotjs, SiExpress, SiMongodb, SiPhp, SiGithub, SiLinkedin } from "react-icons/si";
import portrait from "../../public/images/lirim.jpg";
import threecolts from "../../public/images/threecolt-page.png";
import blog from "../../public/images/threecolts-blog.png";
import pygmalion from "../../public/images/pygmalion.png";
import morel from "../../public/images/morel-shop.png";
import supara from "../../public/images/supara-lesson.png";
import suparaPractice from "../../public/images/supara-practice.png";
import suparaQuiz from "../../public/images/supara-quiz.png";
import luigi from "../../public/images/luigi-website.png";
import proKeramik from "../../public/images/pro-keramik.png";
import motivate from "../../public/images/motivate-pt.png";

type Category = "All" | "Web" | "Mobile" | "Systems";
type Project = { number: string; name: string; category: Exclude<Category, "All">; subtitle: string; description: string; tags: string[]; image?: StaticImageData; link?: string; linkLabel?: string; tone: string };
const projects: Project[] = [
  { number: "01", name: "Supara", category: "Mobile", subtitle: "Learning, made accessible", description: "An offline mobile learning experience for Albanian and German speakers, with audio, tracing, quizzes and saved progress.", tags: ["React Native", "Expo", "TypeScript"], link: "https://apps.apple.com/us/app/supara/id1485123002", linkLabel: "App Store", image: supara, tone: "sage" },
  { number: "02", name: "Threecolts", category: "Web", subtitle: "A sharper digital presence", description: "Redesigned and expanded the company website with reusable components and responsive pages.", tags: ["SvelteKit", "Tailwind CSS"], image: threecolts, link: "https://www.threecolts.com/", linkLabel: "Visit website", tone: "lavender" },
  { number: "03", name: "Pro Keramik", category: "Systems", subtitle: "A better way to manage", description: "A custom ERP for materials, products, orders and payments, designed around everyday business workflows.", tags: ["React", "Zustand", "React Query"], image: proKeramik, tone: "peach" },
  { number: "04", name: "Pygmalion", category: "Web", subtitle: "Commerce meets craft", description: "An e-commerce experience and management system with product catalogs, user accounts and payments.", tags: ["React", "Material UI", "Stripe"], image: pygmalion, tone: "sand" },
  { number: "05", name: "Morel Opticien", category: "Systems", subtitle: "Tools for an optical business", description: "A webshop and business dashboard for products, prescriptions, customers and point of sale.", tags: ["Next.js", "Tailwind CSS", "React Query"], image: morel, tone: "blue" },
  { number: "06", name: "Threecolts Blog", category: "Web", subtitle: "Content that works harder", description: "Custom WordPress features, content improvements, SEO and ongoing maintenance for an e-commerce audience.", tags: ["WordPress", "SCSS", "ACF"], image: blog, link: "https://www.threecolts.com/blog/", linkLabel: "Visit blog", tone: "yellow" },
  { number: "07", name: "Motivate PT", category: "Web", subtitle: "Movement, online", description: "New pages and features for a personal training platform, improving responsiveness, SEO and performance.", tags: ["WordPress", "Elementor"], image: motivate, link: "https://www.motivatept.co.uk/", linkLabel: "Visit website", tone: "sage" },
  { number: "08", name: "Luigi Building", category: "Web", subtitle: "A foundation for growth", description: "A responsive construction company landing page with contact forms and performance improvements.", tags: ["WordPress", "Elementor"], image: luigi, link: "https://www.luigibuilding.com/", linkLabel: "Visit website", tone: "peach" },
];
const experience = [
  ["2026 — Present", "Freelance", "Front-end Developer · Self-employed", "Remote"],
  ["2025 — 2026", "Threecolts", "Front-end Developer · Freelance", "Remote"],
  ["2023 — 2025", "Innovative Solution", "Front-end Developer · Full-time", "Prishtina, Kosovo · Hybrid"],
  ["2021 — 2022", "CNW GmbH", "Front-end Developer · Freelance", "Remote"],
  ["2019 — 2021", "Blackstone Eit", "Front-end Developer · Full-time", "Prishtina, Kosovo · On-site"],
];
const stackGroups = [
  { label: "FRONTEND", items: [
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "React", icon: SiReact, color: "#61dafb" },
    { name: "Next.js", icon: SiNextdotjs, color: "#f5f5f5" },
    { name: "React Native", icon: SiReact, color: "#61dafb" },
    { name: "SvelteKit", icon: SiSvelte, color: "#ff3e00" },
    { name: "WordPress", icon: SiWordpress, color: "#66b3d2" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  ] },
  { label: "BACKEND", items: [
    { name: "Node.js", icon: SiNodedotjs, color: "#83cd29" },
    { name: "Express", icon: SiExpress, color: "#f2f2f2" },
    { name: "PHP", icon: SiPhp, color: "#aeb8e8" },
  ] },
  { label: "DATABASE", items: [
    { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#699eca" },
  ] },
];
const filters: Category[] = ["All", "Web", "Mobile", "Systems"];

const codeLines = [
  [{ text: "const", style: "keyword" }, { text: " developer = {" }],
  [{ text: "  name: " }, { text: "\"Lirim Hyseni\"", style: "string" }, { text: "," }],
  [{ text: "  focus: [" }],
  [{ text: "    " }, { text: "\"web\"", style: "string" }, { text: ", " }, { text: "\"mobile\"", style: "string" }],
  [{ text: "  ]," }],
  [{ text: "  approach: " }, { text: "\"thoughtful\"", style: "string" }],
  [{ text: "};" }],
];
const lineLengths = codeLines.map(line => line.reduce((total, part) => total + part.text.length, 0));
const totalCodeCharacters = lineLengths.reduce((total, length) => total + length, 0);

function TypingCode() {
  const reduced = useReducedMotion();
  const [typed, setTyped] = useState(0);
  useEffect(() => {
    if (reduced || typed >= totalCodeCharacters) return;
    const delay = typed === 0 ? 350 : 36 + (typed * 17 % 27);
    const timer = window.setTimeout(() => setTyped(current => current + 1), delay);
    return () => window.clearTimeout(timer);
  }, [typed, reduced]);
  const visibleCount = reduced ? totalCodeCharacters : typed;
  let remaining = visibleCount;
  return <div className="workspace-code" aria-hidden="true">{codeLines.map((line, index) => {
    const count = Math.min(remaining, lineLengths[index]);
    remaining -= count;
    const before = lineLengths.slice(0, index).reduce((total, length) => total + length, 0);
    const cursorHere = !reduced && visibleCount >= before && count < lineLengths[index];
    const cursorAtEnd = !reduced && visibleCount === totalCodeCharacters && index === codeLines.length - 1;
    let available = count;
    return <div key={index}><b>{String(index + 1).padStart(2, "0")}</b><span>{line.map((part, partIndex) => {
      const visibleText = part.text.slice(0, available);
      available = Math.max(0, available - part.text.length);
      return <span className={part.style ? `code-${part.style}` : undefined} key={partIndex}>{visibleText}</span>;
    })}{(cursorHere || cursorAtEnd) && <i className="typing-caret" />}</span></div>;
  })}</div>;
}

function SuparaShowcase() {
  const screens = [{ image: suparaPractice, alt: "Supara writing practice screen" }, { image: supara, alt: "Supara illustrated Arabic letter lesson" }, { image: suparaQuiz, alt: "Supara pronunciation quiz screen" }];
  return <div className="supara-showcase" role="group" aria-label="Supara app screens"><div className="supara-showcase-heading"><span>SUPARA</span><small>LEARN · PRACTISE · DISCOVER</small></div><div className="supara-phones">{screens.map((screen, index) => <div className={`supara-phone supara-phone-${index + 1}`} key={screen.alt}><div className="supara-phone-screen"><Image src={screen.image} alt={screen.alt} fill sizes="(max-width: 800px) 25vw, 12vw" /></div></div>)}</div><span className="supara-showcase-footer">A LITTLE LEARNING, EVERY DAY <span>✳</span></span></div>;
}
function ProjectShowcase({ project }: { project: Project }) {
  if (project.name === "Supara") return <SuparaShowcase />;
  return <div className={`showcase-board showcase-${project.tone}`}><div className="showcase-top"><span>{project.name.toUpperCase()}</span><small>{project.category.toUpperCase()} / {project.number}</small></div>{project.image ? <div className="showcase-device"><div className="showcase-browser-bar" aria-hidden="true"><i/><i/><i/><span>{project.name}</span></div><div className={`showcase-screen ${project.name === "Pro Keramik" ? "showcase-pro" : ""} ${project.name === "Morel Opticien" ? "showcase-morel" : ""} ${project.name === "Luigi Building" ? "showcase-luigi" : ""} ${project.name.startsWith("Threecolts") ? "showcase-browser-capture" : ""}`}><Image src={project.image} alt={`${project.name} project preview`} fill sizes="(max-width: 800px) 80vw, 35vw" /></div></div> : <div className="showcase-no-image"><span>{project.name.split(" ").map(word => word[0]).join("")}</span><small>PROJECT PREVIEW</small></div>}<div className="showcase-bottom"><span>{project.subtitle.toUpperCase()}</span><span aria-hidden="true">✳</span></div></div>;
}
function Reveal({ children, className = "", direction = "up", delay = 0 }: { children: React.ReactNode; className?: string; direction?: "up" | "left" | "right"; delay?: number }) {
  const reduced = useReducedMotion();
  const offset = direction === "left" ? { x: -40, y: 0 } : direction === "right" ? { x: 40, y: 0 } : { x: 0, y: 38 };
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, ...offset }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: false, amount: 0.12 }} transition={{ duration: 0.75, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
export default function Home() {
  const reducedMotion = useReducedMotion();
  const [filter, setFilter] = useState<Category>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);
  useEffect(() => {
    const update = () => setShowBackToTop(window.scrollY > 500);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const rows = Array.from(document.querySelectorAll<HTMLElement>("[data-experience-index]"));
      const visible = rows.filter(row => {
        const rect = row.getBoundingClientRect();
        return rect.bottom > 0 && rect.top < window.innerHeight;
      });
      if (!visible.length) return;
      const target = window.innerHeight * 0.45;
      const closest = visible.reduce((best, row) => {
        const distance = (element: HTMLElement) => {
          const rect = element.getBoundingClientRect();
          return Math.abs(rect.top + rect.height / 2 - target);
        };
        return distance(row) < distance(best) ? row : best;
      });
      const timeline = closest.closest<HTMLElement>(".experience-list");
      const marker = closest.querySelector<HTMLElement>(".exp-number");
      if (timeline && marker) {
        const markerRect = marker.getBoundingClientRect();
        timeline.style.setProperty("--timeline-end", `${markerRect.top + markerRect.height / 2 - timeline.getBoundingClientRect().top}px`);
      }
      setActiveExperience(Number(closest.dataset.experienceIndex));
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
    return () => { window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); if (frame) window.cancelAnimationFrame(frame); };
  }, []);
  useEffect(() => {
    let frame = 0;
    const updatePreview = () => {
      frame = 0;
      const section = document.getElementById("work");
      if (!section) return;
      const sectionRect = section.getBoundingClientRect();
      if (sectionRect.top >= window.innerHeight || sectionRect.bottom <= 0) return;
      const rows = Array.from(section.querySelectorAll<HTMLElement>("[data-project-number]"));
      const visibleRows = rows.filter(row => {
        const rect = row.getBoundingClientRect();
        return rect.bottom > 0 && rect.top < window.innerHeight;
      });
      if (!visibleRows.length) return;
      const target = window.innerHeight * 0.45;
      const closest = visibleRows.reduce((best, row) => {
        const distance = (element: HTMLElement) => {
          const rect = element.getBoundingClientRect();
          return Math.abs(rect.top + rect.height / 2 - target);
        };
        return distance(row) < distance(best) ? row : best;
      });
      const project = projects.find(item => item.number === closest.dataset.projectNumber);
      if (project) setActiveProject(previous => previous.number === project.number ? previous : project);
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(updatePreview); };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
    return () => { window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); if (frame) window.cancelAnimationFrame(frame); };
  }, [filter]);
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);
  const visible = projects.filter((project) => filter === "All" || project.category === filter);
  return <main>
    <div className="particle-field" aria-hidden="true">{Array.from({length: 45}, (_, i) => <i key={i} style={{left: `${(i * 37 + 11) % 100}%`, top: `${(i * 61 + 7) % 100}%`, animationDelay: `${(i % 9) * -.7}s`, animationDuration: `${4 + i % 5}s`}} />)}</div>
    <header className="site-header"><a className="brand" href="#home" aria-label="Lirim Hyseni home"><Image src="/images/developer-mark.svg" alt="" width={44} height={44} priority /></a><span className="header-caption">FRONT-END DEVELOPER / PORTFOLIO</span><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="site-menu">{menuOpen ? <X/> : <Menu/>}</button></header>
    <AnimatePresence>{menuOpen && <><motion.button className="menu-backdrop" aria-label="Close menu" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setMenuOpen(false)}/><motion.aside id="site-menu" className="menu-panel" initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} transition={{duration:.65,ease:[.76,0,.24,1]}}><button className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X/></button><div className="menu-columns"><div><span>SOCIAL</span><a href="https://github.com/lirimh" target="_blank" rel="noopener noreferrer">Github ↗</a><a href="https://www.linkedin.com/in/lirim-hyseni-135526182/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="/Cv-New.pdf" download>Download CV ↓</a></div><nav aria-label="Main navigation"><span>MENU</span>{[["Home","home"],["About me","about"],["Experience","experience"],["Projects","work"],["Contact","contact"]].map(([label,id], i) => <motion.a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} initial={{opacity:0,x:25}} animate={{opacity:1,x:0}} transition={{delay:.18+i*.06}}><i/> {label}</motion.a>)}</nav></div><div className="menu-contact"><span>GET IN TOUCH</span><a href="mailto:lirimi1996@gmail.com">lirimi1996@gmail.com ↗</a></div></motion.aside></>}</AnimatePresence>
    <section className="hero wrap" id="home"><div className="hero-watermark" aria-hidden="true">LIRIM</div><div className="hero-content"><span className="hero-intro-label">PORTFOLIO / FRONT-END DEVELOPER</span><Reveal><h1><span>FRONT-END</span><br/>DEVELOPER<span className="hero-period">.</span></h1></Reveal><motion.p className="hero-description" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.45,duration:.7}}>Hi! I&apos;m <strong>Lirim Hyseni.</strong> A front-end developer building responsive web and mobile experiences, from e-commerce platforms to tools that make everyday work easier.</motion.p><motion.div className="hero-actions" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.65,duration:.7}}><a href="mailto:lirimi1996@gmail.com" className="hero-talk">LET&apos;S TALK <ArrowUpRight size={18}/></a><a href="#work" className="hero-scroll">EXPLORE MY WORK <ArrowDown size={16}/></a></motion.div><p className="hero-based"><span className="status-dot"/> Based in Presheve, Serbia</p><div className="hero-socials" aria-label="Social profiles"><a href="https://github.com/lirimh" target="_blank" rel="noopener noreferrer"><SiGithub aria-hidden="true"/> GitHub <ArrowUpRight size={14}/></a><a href="https://www.linkedin.com/in/lirim-hyseni-135526182/" target="_blank" rel="noopener noreferrer"><SiLinkedin aria-hidden="true"/> LinkedIn <ArrowUpRight size={14}/></a></div></div><div className="hero-workspace" aria-label="Web and mobile development"><div className="workspace-bar"><span className="workspace-dots"><i/><i/><i/></span><span>building.experiences</span><span className="workspace-status">● ONLINE</span></div><div className="workspace-body"><div className="workspace-file">◈ &nbsp; portfolio.tsx</div><TypingCode /><div className="workspace-tags"><span>REACT</span><span>NEXT.JS</span><span>REACT NATIVE</span></div></div></div></section>
    <section id="about" className="about-section"><div className="wrap about-grid"><Reveal direction="left"><div className="portrait-frame"><Image src={portrait} alt="Lirim Hyseni" fill sizes="(max-width: 800px) 90vw, 40vw" className="portrait"/><div className="portrait-label">A LITTLE ABOUT ME <span>✳</span></div></div></Reveal><Reveal className="about-copy" direction="right" delay={0.1}><span className="eyebrow muted">01 / ABOUT ME</span><h2>Curious by nature.<br/><em>Developer by craft.</em></h2><p>I&apos;m Lirim, a front-end developer who enjoys turning complex ideas into interfaces that feel simple and intuitive.</p><p>From e-commerce and business systems to mobile learning apps, I bring an eye for detail and a practical approach to every project. I studied Computer Science and Engineering at the University for Business and Technology in Prishtina.</p><a className="text-link" href="/Cv-New.pdf" download="Lirim_Hyseni_CV.pdf">Download my CV <ArrowDownRight size={19}/></a></Reveal></div></section>
    <section id="experience" className="experience-section wrap"><div className="toolbox"><Reveal><span className="eyebrow muted">✳ &nbsp; 02 / MY STACK</span></Reveal><div className="stack-groups">{stackGroups.map((group) => <div className="stack-group" key={group.label}><Reveal direction="left"><h3>{group.label}</h3></Reveal><div className="stack-items">{group.items.map(({ name, icon: Icon, color }, i) => <motion.div className="stack-item" key={name} initial={reducedMotion ? false : {opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:false,amount:.2}} transition={{duration:.5,delay:i*.07}}><div className="stack-float-group"><motion.span className="stack-icon-wrap" initial={reducedMotion ? false : {scale:.5,rotate:-20}} whileInView={{scale:1,rotate:0}} viewport={{once:false,amount:.2}} transition={{type:"spring",stiffness:180,damping:13,delay:i*.07}}><Icon aria-hidden="true" className="stack-icon" style={{color}}/></motion.span><span>{name}</span></div></motion.div>)}</div></div>)}</div></div><Reveal><div className="section-heading"><div><span className="eyebrow muted">03 / EXPERIENCE</span><h2>Experience, <em>so far.</em></h2></div><p>Good work comes from good collaboration. Here are some of the teams I&apos;ve worked with.</p></div></Reveal><div className="experience-list">{experience.map(([date, company, role, location], index) => <Reveal key={company}><div className={"experience-row " + (activeExperience === index ? "is-current" : "")} data-experience-index={index}><span className="exp-number">0{index + 1}</span><span className="exp-date">{date}</span><h3>{company}</h3><span className="exp-role">{role}<span className="exp-location">{location}</span></span></div></Reveal>)}</div></section>
    <section id="work" className="work-section"><div className="wrap"><Reveal><div className="section-heading"><div><span className="eyebrow muted">04 / SELECTED WORK</span><h2>Made with <em>purpose.</em></h2></div><p>A selection of websites, apps and tools I&apos;ve helped bring to life.</p></div></Reveal><Reveal><div className="filter-bar" aria-label="Filter projects">{filters.map((item) => <button key={item} aria-pressed={filter === item} className={filter === item ? "filter active" : "filter"} onClick={() => { setFilter(item); setActiveProject(projects.find(p => item === "All" || p.category === item) ?? projects[0]); }}>{item}<span>{item === "All" ? projects.length : projects.filter(p => p.category === item).length}</span></button>)}</div></Reveal><div className="project-browser"><div className="project-list">{visible.map((project) => <Reveal key={project.number}><article className={`project-row ${activeProject.number === project.number ? "is-active" : ""}`} tabIndex={0} data-project-number={project.number} onClick={() => setActiveProject(project)} onMouseEnter={() => setActiveProject(project)} onFocus={() => setActiveProject(project)}><span className="project-number">_{project.number}.</span><div className="project-row-content"><h3>{project.name}</h3><p>{project.description}</p><div className="row-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="mobile-project-image mobile-showcase"><ProjectShowcase project={project} /></div></div>{project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="row-link" aria-label={`${project.linkLabel}: ${project.name}`}><ArrowUpRight/></a>}</article></Reveal>)}</div><Reveal className="project-preview" direction="right" delay={0.1}><div className="preview-transition" aria-live="polite"><AnimatePresence initial={false} mode="sync"><motion.div key={activeProject.number} initial={reducedMotion ? false : {opacity:0,y:12,scale:.985}} animate={{opacity:1,y:0,scale:1}} exit={reducedMotion ? {opacity:0} : {opacity:0,y:-10,scale:.985}} transition={{duration:reducedMotion ? 0 : .35,ease:[.22,1,.36,1]}}><div className="preview-inner showcase-container"><ProjectShowcase project={activeProject} /></div><span className="preview-label">{activeProject.category} / {activeProject.number} — {activeProject.name}</span></motion.div></AnimatePresence></div></Reveal></div></div></section>
    <section id="contact" className="contact-section"><div className="wrap"><Reveal><div className="contact-top"><span className="eyebrow">05 / HAVE SOMETHING IN MIND?</span><span>LET&apos;S MAKE IT HAPPEN ↗</span></div><h2>Let&apos;s make<br/><em>something</em> good<span>.</span></h2><div className="contact-bottom"><p>Have a project, an idea, or just want to say hello? My inbox is open.</p><a href="mailto:lirimi1996@gmail.com" className="contact-button">Get in touch <ArrowUpRight size={21}/></a></div></Reveal><Reveal delay={0.1}><footer><a className="brand footer-brand" href="#home" aria-label="Lirim Hyseni home"><Image src="/images/developer-mark-dark.svg" alt="" width={44} height={44} /></a><span>© {new Date().getFullYear()} LIRIM HYSENI</span><div><a href="https://github.com/lirimh" target="_blank" rel="noopener noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/lirim-hyseni-135526182/" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a></div></footer></Reveal></div></section>
    {showBackToTop && !menuOpen && <a href="#home" className="back-to-top" aria-label="Back to top"><ArrowUp size={21} aria-hidden="true" /></a>}
  </main>;
}
