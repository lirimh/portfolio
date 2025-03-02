"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import MorelErp from "../../../public/images/morel-erp.jpg";
import MorelShop from "../../../public/images/morel-shop.png";
import Pygmalion from "../../../public/images/pygmalion.png";
import PygmalionErp from "../../../public/images/pygmalion-erp.png";
import Blackstone from "../../../public/images/blackstone.png";
import CNWSolutions from "../../../public/images/cnw-solutions.png";
import CNWGmbh from "../../../public/images/cnw.png";

export function Projects() {
  return (
    <section id="projects">
      <HeroParallax products={products} />
    </section>
  );
}

export const products = [
  {
    title: "Pygmalion Webshop",
    description:
      "Created a home decor e-commerce platform with React.js, React Query, and Material UI, integrating user authentication, product listings, blog features, and Stripe payments.",
    link: "#",
    thumbnail: Pygmalion,
  },
  {
    title: "Morel Webshop",
    description:
      " Developed a responsive e-commerce platform for an optical company using Next.js, Tailwind CSS, and Stripe, featuring user authentication, product catalog, blog posts, and a seamless shopping experience.",
    link: "#",
    thumbnail: MorelShop,
  },
  {
    title: "Morel ERP",
    description:
      "Built a management dashboard for handling products, blog content, prescriptions, users, and POS using Next.js, React Query, and Zustand, ensuring efficient business operations.",
    link: "#",
    thumbnail: MorelErp,
  },
  {
    title: "Pygmalion ERP",
    description:
      "Developed an ERP system for managing products, users, and blog content, using React.js, Zustand, and React Query, streamlining business processes.",
    link: "#",
    thumbnail: PygmalionErp,
  },
  {
    title: "Blackstone Website",
    description:
      " Redesigned and improved company website modules using HTML, CSS, JavaScript, and Bootstrap, enhancing UI and UX.",
    link: "#",
    thumbnail: Blackstone,
  },
  {
    title: "CNW Solutions",
    description:
      "Designed and developed a WordPress-based IT services company website using Elementor and ACF, ensuring a professional and responsive layout.",
    link: "#",
    thumbnail: CNWSolutions,
  },
  {
    title: "CNW",
    description:
      "Designed and developed a WordPress-based IT services company website using Elementor and ACF, ensuring a professional and responsive layout.",
    link: "#",
    thumbnail: CNWGmbh,
  },
  {
    title: "Blackstone Website",
    description:
      " Redesigned and improved company website modules using HTML, CSS, JavaScript, and Bootstrap, enhancing UI and UX.",
    link: "#",
    thumbnail: Blackstone,
  },
  {
    title: "Morel ERP",
    description:
      "Built a management dashboard for handling products, blog content, prescriptions, users, and POS using Next.js, React Query, and Zustand, ensuring efficient business operations.",
    link: "#",
    thumbnail: MorelErp,
  },
  {
    title: "Morel Webshop",
    description:
      " Developed a responsive e-commerce platform for an optical company using Next.js, Tailwind CSS, and Stripe, featuring user authentication, product catalog, blog posts, and a seamless shopping experience.",
    link: "#",
    thumbnail: MorelShop,
  },
];
