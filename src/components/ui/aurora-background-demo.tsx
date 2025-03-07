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
    <section id="home" className="min-h-screen">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
        >
          <div className="flex-col text-center justify-center items-center max-w-4xl mx-auto">
            <TextGenerateEffect
              className="bg-clip-text text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent drop-shadow-2xl text-white font-bold tracking-tight"
              words="Welcome to my Portfolio"
            />
            <div className="bg-clip-text mt-4 sm:mt-6 text-transparent font-normal drop-shadow-2xl text-base xs:text-lg sm:text-xl md:text-2xl lg:text-xl bg-gradient-to-b from-white/80 to-white/20 max-w-3xl mx-auto px-4">
              Hi! I&apos;m Lirim Hyseni, a Front End Developer with{" "}
              <FlipWords words={words} /> based in Presheve.
            </div>
            <div className="gap-4 flex flex-row justify-center py-6 sm:py-8 lg:py-2 mt-4 sm:mt-6">
              <Button
                onClick={scrollToContact}
                className="w-[160px] xs:w-[180px] sm:w-auto px-4 xs:px-6 sm:px-10 lg:text-base lg:px-10 lg:py-5 py-3 xs:py-4 sm:py-6 text-sm xs:text-base sm:text-xl rounded-full border-2 border-white bg-transparent text-white hover:scale-105 hover:bg-white/10 transition-all duration-300 ease-in-out font-medium"
              >
                Get in touch
              </Button>
              <Button
                onClick={handleDownloadCV}
                className="w-[160px] xs:w-[180px] sm:w-auto px-4 xs:px-6 sm:px-10 lg:text-base lg:px-10 lg:py-5 py-3 xs:py-4 sm:py-6 text-sm xs:text-base sm:text-xl rounded-full border-2 border-white bg-transparent text-white hover:scale-105 hover:bg-white/10 transition-all duration-300 ease-in-out font-medium"
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
