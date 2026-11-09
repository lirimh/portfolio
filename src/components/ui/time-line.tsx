import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const entries = [
    { title: "2025 – 2026", role: "Front-End Developer · Threecolts", detail: "Freelance contractor working on the company website and WordPress blog, including reusable SvelteKit components, responsive design and SEO." },
    { title: "2023 – 2025", role: "Front-End Developer · Innovative Solution", detail: "Built e-commerce and ERP platforms for Pygmalion Be and Morel Opticien, including product catalogs, authentication, payments and business management tools." },
    { title: "2021 – 2022", role: "Front-End Developer · CNW GmbH", detail: "Designed and developed a responsive IT services website using WordPress, Elementor and ACF." },
    { title: "2019 – 2021", role: "Front-End Developer · Blackstone Eit", detail: "Developed responsive website modules and a multilingual React chatbot integrated with a .NET API." },
    { title: "2015 – 2018", role: "BSc in Computer Science and Engineering", detail: "University for Business and Technology, Prishtina." },
  ];
  return <section id="career" className="w-full"><Timeline data={entries.map((entry) => ({ title: entry.title, content: <div><h3 className="mb-3 text-xl font-semibold text-white">{entry.role}</h3><p className="text-sm leading-relaxed text-neutral-300 md:text-lg">{entry.detail}</p></div> }))} /></section>;
}
