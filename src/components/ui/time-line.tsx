import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import DegreePhoto from "../../../public/images/degree-1.jpg";
import DegreePhotoImg from "../../../public/images/degree-2.jpg";
import BlackstoneInternship from "../../../public/images/work-3.jpg";
import BlackstoneInternshipSecond from "../../../public/images/work-9.jpg";
import Blackstone from "../../../public/images/work-7.jpg";
import BlackstoneSecond from "../../../public/images/work-8.jpg";
import BlackstoneThird from "../../../public/images/work-2.jpg";
import InnoSecond from "../../../public/images/work-4.jpg";
import InnoThird from "../../../public/images/work-5.jpg";
import InnoImage from "../../../public/images/work-6.jpg";

export function TimelineDemo() {
  const data = [
    {
      title: "2018",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 lg:text-lg text-xs md:text-sm font-normal mb-8">
            I have graduated from the Faculty of Computer Science and
            Engineering with a Bachelor&apos;s degree.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <Image
              src={DegreePhoto}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-80 w-full max-w-72 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={DegreePhotoImg}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-center h-40 md:h-44 lg:h-80 w-full lg:max-w-72 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <p className="text-white lg:text-lg dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Started my internship as Front End Developer at Blackstone Eit in
            Prishtina
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src={BlackstoneInternship}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-28 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={BlackstoneInternshipSecond}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-28 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-white lg:text-lg dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Started as Junior Front End Developer at Blackstone Eit in Prishtina
          </p>

          <div className="flex flex-col gap-4">
            {/* Top row with 2 images */}
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={Blackstone}
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-28 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src={BlackstoneThird}
                alt="bento template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-28 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>

            {/* Bottom centered image */}
            <div className="flex justify-center">
              <Image
                src={BlackstoneSecond}
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-40  md:h-44 lg:h-80 lg:w-full lg:max-w-72 max-w-32 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-white lg:text-lg dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Started as a Front end developer at Innovative Solutions in Pristina
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src={InnoSecond}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-28 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={InnoThird}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-bottom h-28 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={InnoImage}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-center h-28 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <section id="career" className="w-full">
      <Timeline data={data} />
    </section>
  );
}
