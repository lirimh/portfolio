"use client";

import React from "react";
import { SparklesPreview } from "../ui/sparkles-preview";
import Image from "next/image";
import { motion } from "framer-motion";

import Css from "../../../public/images/icons8-css3-240.png";
import Html from "../../../public/images/icons8-html-5-240.png";
import Javascript from "../../../public/images/icons8-javascript-240.png";
import ReactJs from "../../../public/images/icons8-react-native-240.png";
import Wordpress from "../../../public/images/icons8-wordpress-240.png";
import Tailwind from "../../../public/images/icons8-tailwindcss-240.png";
import Git from "../../../public/images/icons8-git-240.png";
import Mui from "../../../public/images/icons8-material-ui-240.png";
import Next from "../../../public/images/icons8-next.js-240.png";
import Sass from "../../../public/images/icons8-sass-240.png";
import TypeScript from "../../../public/images/icons8-typescript-240.png";

// Floating animation (subtle movement)
const floatingVariants = {
  initial: {
    opacity: 0,
    scale: 0,
    rotate: -180,
  },
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      delay: index * 0.1,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  }),
  floating: {
    y: [0, -10, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1, // Delay floating animation until after appearance
    },
  },
};

// Adjusted positions for tighter icon grouping
const logos = [
  {
    src: Css,
    alt: "CSS",
    top: "45%",
    left: "20%",
    description: "CSS3 for modern web styling and animations",
  },
  {
    src: Html,
    alt: "HTML",
    top: "30%",
    left: "29%",
    description: "HTML5 for semantic markup and web structure",
  },
  {
    src: Javascript,
    alt: "JavaScript",
    top: "45%",
    left: "39%",
    description: "JavaScript for dynamic web functionality",
  },
  {
    src: TypeScript,
    alt: "TypeScript",
    top: "30%",
    left: "49%",
    description: "TypeScript for type-safe JavaScript development",
  },
  {
    src: ReactJs,
    alt: "ReactJs",
    top: "45%",
    left: "58%",
    description: "React.js for building interactive UIs",
  },
  {
    src: Next,
    alt: "Next.js",
    top: "24%",
    left: "68%",
    description: "Next.js for server-side rendering and static generation",
  },
  {
    src: Tailwind,
    alt: "Tailwind",
    top: "45%",
    left: "76%",
    description: "Tailwind CSS for utility-first styling",
  },
  {
    src: Sass,
    alt: "Sass",
    top: "75%",
    left: "30%",
    description: "Sass for advanced CSS preprocessing",
  },
  {
    src: Mui,
    alt: "Material UI",
    top: "85%",
    left: "43%",
    description: "Material UI for ready-to-use React components",
  },
  {
    src: Wordpress,
    alt: "WordPress",
    top: "85%",
    left: "56%",
    description: "WordPress for content management systems",
  },
  {
    src: Git,
    alt: "Git",
    top: "73%",
    left: "68%",
    description: "Git for version control and collaboration",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-zinc-900 min-h-screen py-10 overflow-hidden"
    >
      <SparklesPreview />

      {/* Desktop Layout (Hidden on Mobile and Tablet) */}
      <div className="hidden lg:block relative w-full h-[700px]">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="absolute group"
            style={{
              top: logo.top,
              left: logo.left,
              transform: "translate(-50%, -50%)",
            }}
            variants={floatingVariants}
            initial="initial"
            whileInView={["animate", "floating"]}
            viewport={{ once: false, amount: 0.3 }}
            custom={index}
          >
            <Image
              src={logo.src}
              height={120}
              width={120}
              alt={logo.alt}
              className="select-none w-28 lg:w-32"
            />
            <div className="absolute w-48 -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-center text-sm font-medium bg-zinc-800/90 px-3 py-2 rounded-md">
                {logo.alt}
                <span className="block text-xs text-gray-300 mt-1">
                  {logo.description}
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile and Tablet Layout */}
      <div className="lg:hidden container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center group"
              variants={floatingVariants}
              initial="initial"
              whileInView={["animate", "floating"]}
              viewport={{ once: false, amount: 0.3 }}
              custom={index}
            >
              <div className="relative">
                <Image
                  src={logo.src}
                  height={100}
                  width={100}
                  alt={logo.alt}
                  className="select-none w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 object-contain"
                />
              </div>
              <p className="mt-2 text-white text-xs sm:text-sm font-medium md:hidden">
                {logo.alt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
