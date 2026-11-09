import Image, { StaticImageData } from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import DegreePhoto from "../../../public/images/degree-1.jpg";
import DegreePhotoTwo from "../../../public/images/degree-2.jpg";
import Blackstone from "../../../public/images/work-7.jpg";
import BlackstoneTwo from "../../../public/images/work-8.jpg";
import Cnw from "../../../public/images/work-1.jpg";
import Innovative from "../../../public/images/work-4.jpg";
import InnovativeTwo from "../../../public/images/work-5.jpg";

type Entry = { title: string; role: string; detail: string; images?: { src: StaticImageData; alt: string }[] };

export function TimelineDemo() {
  const entries: Entry[] = [
    { title: "2025 – 2026", role: "Front-End Developer · Threecolts", detail: "Freelance contractor working on the company website and WordPress blog, including reusable SvelteKit components, responsive design and SEO." },
    { title: "2023 – 2025", role: "Front-End Developer · Innovative Solution", detail: "Built e-commerce and ERP platforms for Pygmalion Be and Morel Opticien, including product catalogs, authentication, payments and business management tools.", images: [{ src: Innovative, alt: "At Innovative Solution" }, { src: InnovativeTwo, alt: "Innovative Solution team" }] },
    { title: "2021 – 2022", role: "Front-End Developer · CNW GmbH", detail: "Designed and developed a responsive IT services website using WordPress, Elementor and ACF.", images: [{ src: Cnw, alt: "At CNW GmbH" }] },
    { title: "2019 – 2021", role: "Front-End Developer · Blackstone Eit", detail: "Developed responsive website modules and a multilingual React chatbot integrated with a .NET API.", images: [{ src: Blackstone, alt: "At Blackstone Eit" }, { src: BlackstoneTwo, alt: "Blackstone Eit team" }] },
    { title: "2015 – 2018", role: "BSc in Computer Science and Engineering", detail: "University for Business and Technology, Prishtina.", images: [{ src: DegreePhoto, alt: "Graduation photo" }, { src: DegreePhotoTwo, alt: "Graduation celebration" }] },
  ];
  return <section id="career" className="w-full"><Timeline data={entries.map((entry) => ({ title: entry.title, content: <div><h3 className="mb-3 text-xl font-semibold text-white">{entry.role}</h3><p className="text-sm leading-relaxed text-neutral-300 md:text-lg">{entry.detail}</p>{entry.images && <div className="mt-6 grid grid-cols-2 gap-4">{entry.images.map((photo) => <Image key={photo.alt} src={photo.src} alt={photo.alt} width={500} height={400} className="h-40 w-full rounded-lg object-cover md:h-60" />)}</div>}</div> }))} /></section>;
}
