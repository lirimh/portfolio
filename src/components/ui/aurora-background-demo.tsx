"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { TextGenerateEffect } from "./text-generate-effect";
import { FlipWords } from "./flip-words";
import { Button } from "./button";

export function AuroraBackgroundDemo() {
  const words = ["React", "Next Js", "Wordpress"];

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Lirim_Hyseni_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center"
        >
          <div className="flex-col text-center justify-center items-center">
            <TextGenerateEffect
              className="bg-clip-text text-3xl text-center md:text-4xl lg:text-7xl text-transparent drop-shadow-2xl text-white"
              words="Welcome to my Portfolio"
            />
            <div className="bg-clip-text mt-3 px-10 lg:px-0 text-transparent font-normal drop-shadow-2xl text-md text-center md:text-4xl lg:text-xl bg-gradient-to-b from-white/80 to-white/20">
              Hi! I’m Lirim Hyseni, a Front End Developer with{" "}
              <FlipWords words={words} /> based in Presheve.
            </div>
            <div className="gap-5 flex justify-center py-3">
              <Button
                onClick={scrollToContact}
                className="mt-3 border px-10 py-5 rounded-full border-white bg-transparent text-white hover:scale-105 hover:bg-white/10 transition-transform duration-300 ease-in-out"
              >
                Get in touch
              </Button>
              <Button
                onClick={handleDownloadCV}
                className="mt-3 border px-10 py-5 rounded-full border-white bg-transparent text-white hover:scale-105 hover:bg-white/10 transition-transform duration-300 ease-in-out"
              >
                Download CV
              </Button>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
    </section>
  );
}
