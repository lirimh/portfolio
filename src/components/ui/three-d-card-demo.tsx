"use client";

import Image from "next/image";
import React, { FC } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { StaticImageData } from "next/image";

interface ThreeDCardProps {
  image: StaticImageData;
}

const ThreeDCardDemo: FC<ThreeDCardProps> = ({ image }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-none relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl border">
        <CardItem className="w-full h-full">
          <Image
            loading="lazy"
            src={image}
            height={1200}
            width={1200}
            className="w-full h-full object-cover rounded-xl group-hover/card:shadow-xl"
            sizes="(max-width: 640px) 90vw, 
                   (max-width: 768px) 80vw,
                   (max-width: 1024px) 80vw,
                   40vw"
            priority
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default ThreeDCardDemo;
