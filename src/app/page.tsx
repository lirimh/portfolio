import React from "react";
import About from "@/components/page/About";
import Services from "@/components/page/Services";
import Work from "@/components/page/Work";
import Contact from "@/components/page/Contact";
import Hero from "@/components/page/Hero";
import { GridBackgroundDemo } from "@/components/ui/grid-background-demo";

export default function Home() {
  return (
    <>
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <Hero />
        <About />
        <Services />
        <Work />
        <Contact />
        <GridBackgroundDemo />
      </div>
    </>
  );
}
