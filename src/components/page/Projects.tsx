import Image from "next/image";
import ThreecoltsBlog from "../../../public/images/threecolts-blog.png";
import ThreecoltsPage from "../../../public/images/threecolt-page.png";
import MorelShop from "../../../public/images/morel-shop.png";
import Pygmalion from "../../../public/images/pygmalion.png";
import CNW from "../../../public/images/cnw.png";

const projects = [
  { title: "Supara", description: "An offline mobile app for learning Arabic reading, with audio, tracing, quizzes and saved progress for Albanian and German speakers.", technologies: ["React Native", "Expo", "TypeScript", "SQLite"], link: "https://apps.apple.com/us/app/supara/id1485123002", label: "View on the App Store" },
  { title: "Pro Keramik ERP", description: "A management system for ceramics and materials, products, orders, payments and daily operations.", technologies: ["React", "Shadcn", "Tailwind CSS", "Zustand", "React Query"] },
  { title: "Motivate PT", description: "New pages and features for a fitness and personal training platform, with improvements to responsiveness, SEO and performance.", technologies: ["WordPress", "Elementor"] },
  { title: "Luigi Building", description: "A responsive construction company landing page with contact forms, SEO and performance improvements.", technologies: ["WordPress", "Elementor"] },
  { title: "Threecolts Website", description: "Redesigned and expanded the company website with reusable components, new pages and responsive layouts.", technologies: ["SvelteKit", "Tailwind CSS"], link: "https://www.threecolts.com/", label: "Visit website", image: ThreecoltsPage },
  { title: "Threecolts Blog", description: "Developed and maintained a WordPress blog, including custom theme features, SEO and content improvements.", technologies: ["WordPress", "SCSS", "ACF"], link: "https://www.threecolts.com/blog/", label: "Visit blog", image: ThreecoltsBlog },
  { title: "Pygmalion Webshop & ERP", description: "E-commerce and management interfaces for products, users and content, including authentication and Stripe payments.", technologies: ["React", "React Query", "Material UI", "Stripe"], image: Pygmalion },
  { title: "Morel Webshop & ERP", description: "An optical e-commerce platform and business dashboard for products, prescriptions, users and point of sale.", technologies: ["Next.js", "Tailwind CSS", "Zustand", "React Query"], image: MorelShop },
  { title: "CNW GmbH", description: "A responsive IT services website with flexible page layouts built for ColNetworks.", technologies: ["WordPress", "Elementor", "ACF"], link: "https://www.cnw-gmbh.de/", label: "Visit website", image: CNW },
];

export function Projects() {
  return <section id="projects" className="bg-zinc-900 px-4 py-24 text-white sm:px-6">
    <div className="mx-auto max-w-7xl">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">Selected work</p>
      <h2 className="mt-3 text-4xl font-bold md:text-6xl">Projects</h2>
      <p className="mt-5 max-w-2xl text-zinc-300">From mobile learning to e-commerce and business tools, here are some of the projects I have worked on.</p>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => <article key={project.title} className="flex flex-col overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800/60">
          {project.image && <div className="relative h-44 overflow-hidden bg-zinc-800"><Image src={project.image} alt={`${project.title} preview`} fill className="object-cover object-top" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" /></div>}
          <div className="flex flex-1 flex-col p-6"><h3 className="text-xl font-semibold">{project.title}</h3><p className="mt-3 flex-1 leading-relaxed text-zinc-300">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-full bg-zinc-700 px-3 py-1 text-xs text-zinc-200">{tech}</span>)}</div>{project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-6 w-fit font-medium text-white underline underline-offset-4 hover:text-zinc-300">{project.label} ↗</a>}</div>
        </article>)}
      </div>
    </div>
  </section>;
}
