"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { SparklesCore } from "./sparkles";

export function SparklesPreview() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    fallback: true,
  });

  return (
    <div
      ref={ref}
      className="pt-10 w-full bg-zinc-900 flex flex-col items-center justify-center overflow-hidden rounded-md"
    >
      {/* Animated Title with Smooth Elevator Door Effect */}
      <motion.div
        className="md:text-7xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20"
        initial={{ clipPath: "inset(0 50% 0 50%)", opacity: 0 }}
        animate={
          isInView
            ? { clipPath: "inset(0 0% 0 0%)", opacity: 1 }
            : { clipPath: "inset(0 50% 0 50%)", opacity: 0 }
        }
        transition={{
          duration: 5,
          ease: [0.05, 0.3, 0.2, 1],
          delay: 0.5,
        }}
      >
        <h1>Skills</h1>

        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-zinc-900 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </motion.div>
    </div>
  );
}
