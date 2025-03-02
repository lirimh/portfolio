import React from "react";
import About from "@/components/page/About";
import { TimelineDemo } from "@/components/ui/time-line";
import { AuroraBackgroundDemo } from "@/components/ui/aurora-background-demo";
import Skills from "@/components/page/Skills";
import { Projects } from "@/components/page/Projects";
import Contact from "@/components/page/Contact";

export default function Home() {
  return (
    <>
      <AuroraBackgroundDemo />
      <About />
      <TimelineDemo />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
