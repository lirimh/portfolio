import React from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";
import ThreeDCardDemo from "../ui/three-d-card-demo";
import image from "../../../public/images/lirim.jpg";
import { LampDemo } from "../ui/lamp";

const About = () => {
  const words = [
    {
      text: "Do",
    },
    {
      text: "you",
    },
    {
      text: "want",
    },
    {
      text: "to",
    },
    {
      text: "know",
    },
    {
      text: "more",
    },
    {
      text: "about",
      className: "text-[#6c00a2] dark:text-blue-500",
    },
    {
      text: "me?",
    },
  ];

  return (
    <div className="snap-start h-screen px-32  w-full dark:bg-black bg-[#001152]  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-[#001152] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="flex justify-between  items-center gap-20">
        <div>
          <TypewriterEffect words={words} />
          <p className="text-base mt-5 text-clip text-white w-[50%]">
            I am Lirim Hyseni, 28 years old from Presheve a small city in
            Serbia. I graduated in 2019 with Bachelor degree in Computer
            Science. At this year I started an internship at Blackstone eit for
            four months and after internship I started a working as full time
            Junior Front-End Developer at Blackstone eit. I earned a lot of
            excperience during my first job as a Front-End Developer at
            Blackstone with great a staff and colleagues. I was involved in many
            interesting projects in Web Developemnt and Web Design. I also
            worked as part-time Freelance developer after work and have
            completed many projects for small companies. This is a short
            introduction of me and my career 😊, I always look forwad to learn
            new technologies and ready for new challanges.
          </p>
        </div>

        <ThreeDCardDemo title="Lirim Hyseni" image={image} />
      </div>
    </div>
  );
};

export default About;
