"use client";
import React from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";
import ThreeDCardDemo from "../ui/three-d-card-demo";
import image from "../../../public/images/lirim.jpg";
import { motion } from "framer-motion";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";

const About = () => {
  const words = [
    { text: "Do" },
    { text: "you" },
    { text: "want" },
    { text: "to" },
    { text: "know" },
    { text: "more" },
    { text: "about" },
    { text: "me?" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center relative w-full px-4  md:py-16"
    >
      <ShootingStars />
      <StarsBackground />
      <motion.div
        initial={{ y: 100, opacity: 0 }} // Start from below
        whileInView={{ y: 0, opacity: 1 }} // Move to normal position
        exit={{ y: -100, opacity: 0 }} // Move upwards when exiting
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 1.2,
          ease: [0.43, 0.13, 0.23, 0.96],
          type: "spring",
          stiffness: 50,
          damping: 20,
          mass: 1.5,
        }}
        className="snap-start h-auto w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20"
      >
        {/* Image Container - Top on tablet, Right on desktop */}
        <div className="w-full md:w-2/3 lg:w-2/5 order-1 lg:order-2">
          <div className="w-[350px] sm:w-[300px]  md:w-[350px] lg:w-[400px] mx-auto">
            <ThreeDCardDemo image={image} />
          </div>
        </div>

        {/* Text Container - Bottom on tablet, Left on desktop */}
        <div className="w-full lg:w-3/5 order-2 lg:order-1 text-center">
          <div className="mb-6">
            <TypewriterEffect words={words} />
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed max-w-prose mx-auto text-center">
            I am Lirim Hyseni, 28 years old from Presheve, a small city in
            Serbia. I graduated in 2018 with a Bachelor&apos;s degree in
            Computer Science from the University for Business and Technology in
            Prishtina. My career began in early 2019 with an internship at
            Blackstone EIT, which quickly turned into a full-time position as a
            Front-End Developer. There, I gained valuable experience working on
            various web development projects and collaborating closely with a
            talented team. Afterwards, I continued my journey as a Front-End and
            WordPress Developer at CNW GmbH, where I was responsible for
            creating and maintaining websites for different businesses. Since
            2023, I have been working at Innovative Solutions, contributing to
            the development of e-commerce platforms and ERP systems, helping
            deliver high-quality solutions for clients. Alongside my full-time
            roles, I have also worked as a freelance developer, successfully
            completing a range of projects for small companies. I&apos;m
            passionate about continuous learning, improving my skills, and
            taking on new challenges! 😊
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
