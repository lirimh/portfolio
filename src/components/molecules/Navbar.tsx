"use client";
import React, { useState } from "react";
import { FloatingNav } from "../ui/floating-nav";
import { motion, AnimatePresence } from "framer-motion";
import { HamburgerMenu } from "../ui/hamburger-menu";

export function FloatingNavDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false); // Close menu after clicking
  };

  const navItems = [
    {
      name: "Home",
      link: "home",
      onClick: () => scrollToSection("home"),
    },
    {
      name: "About",
      link: "about",
      onClick: () => scrollToSection("about"),
    },
    {
      name: "Career",
      link: "career",
      onClick: () => scrollToSection("career"),
    },
    {
      name: "Skills",
      link: "skills",
      onClick: () => scrollToSection("skills"),
    },
    {
      name: "Projects",
      link: "projects",
      onClick: () => scrollToSection("projects"),
    },
    {
      name: "Contact",
      link: "contact",
      onClick: () => scrollToSection("contact"),
    },
  ];

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <FloatingNav navItems={navItems} />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <HamburgerMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-zinc-900/95 backdrop-blur-sm"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {navItems.map((item, idx) => (
                  <motion.button
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={item.onClick}
                    className="flex items-center space-x-2 text-white hover:text-neutral-300 transition-colors"
                  >
                    <span className="text-lg">{item.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
