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
        <div className="w-full lg:w-3/5 order-2 lg:order-1 text-center md:text-center lg:text-left">
          <div className="mb-6">
            <TypewriterEffect words={words} />
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed max-w-prose mx-auto lg:mx-0">
            I am Lirim Hyseni, 28 years old from Presheve, a small city in
            Serbia. I graduated in 2019 with a Bachelor&apos;s degree in
            Computer Science. That same year, I started an internship at
            Blackstone EIT for four months, which led to a full-time position as
            a Junior Front-End Developer. I gained extensive experience working
            on web development and web design projects alongside a great team.
            In addition to my full-time role, I also worked as a freelance
            developer, completing various projects for small companies. I am
            always eager to learn new technologies and take on new challenges!
            😊
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
