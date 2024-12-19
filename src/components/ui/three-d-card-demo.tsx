"use client";

import Image from "next/image";
import React, { FC } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { StaticImageData } from "next/image"; // Import the correct type

interface ThreeDCardProps {
  title?: string;
  image: StaticImageData; // Update to accept StaticImageData instead of string
}
const ThreeDCardDemo: FC<ThreeDCardProps> = ({ image, title }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-none relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl  border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default ThreeDCardDemo;
