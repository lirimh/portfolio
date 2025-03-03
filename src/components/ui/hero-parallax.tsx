"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Product = {
  title: string;
  description?: string;
  link: string;
  thumbnail: string | StaticImageData;
};

const DURATION = 40; // Adjust scroll speed (lower = faster)
const SCROLL_DISTANCE = 2000; // Adjust scroll distance

export const HeroParallax = ({ products }: { products: Product[] }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-400, 200]),
    springConfig
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const containerWidth = container.offsetWidth;
        const contentWidth = container.scrollWidth;

        // Calculate the maximum drag distance
        const maxDrag = contentWidth - containerWidth;

        setDragConstraints({
          left: -maxDrag - 100, // Add extra space for momentum
          right: 0,
        });
      }
    };

    // Initial update
    updateConstraints();

    // Update constraints on window resize
    window.addEventListener("resize", updateConstraints);

    return () => {
      window.removeEventListener("resize", updateConstraints);
    };
  }, [products]);

  // Duplicate the rows for infinite effect
  // const duplicatedFirstRow = [...firstRow, ...firstRow];
  // const duplicatedSecondRow = [...secondRow, ...secondRow];
  // const duplicatedThirdRow = [...thirdRow, ...thirdRow];

  return (
    <div
      ref={ref}
      className="lg:h-[230vh] h-[200vh] lg:pt-0 pt-24 bg-zinc-900 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative"
      >
        <motion.div
          ref={containerRef}
          className="cursor-grab active:cursor-grabbing overflow-hidden"
        >
          {/* First Row - Updated to match second row */}
          <motion.div
            className="flex flex-row mb-20 space-x-20 select-none relative group"
            initial={{ x: 0 }}
            animate={{
              x: [-SCROLL_DISTANCE, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: DURATION,
                ease: "linear",
              },
            }}
            drag="x"
            dragConstraints={dragConstraints}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
            whileHover={{
              scale: 0.95,
            }}
            onHoverStart={(e) => {
              const target = e.target as HTMLElement;
              target.style.animationPlayState = "paused";
            }}
            onHoverEnd={(e) => {
              const target = e.target as HTMLElement;
              target.style.animationPlayState = "running";
            }}
            style={{
              width: "fit-content",
              cursor: "grab",
            }}
          >
            {/* First set of items */}
            {firstRow.map((product, idx) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={`first-${product.title}-${idx}`}
              />
            ))}
            {/* Duplicated set for seamless loop */}
            {firstRow.map((product, idx) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={`second-${product.title}-${idx}`}
              />
            ))}
          </motion.div>

          {/* Second Row */}
          <motion.div
            className="flex flex-row mb-20 space-x-20 select-none relative group"
            initial={{ x: 0 }}
            animate={{
              x: [-SCROLL_DISTANCE, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: DURATION,
                ease: "linear",
              },
            }}
            drag="x"
            dragConstraints={dragConstraints}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
            whileHover={{
              scale: 0.95,
            }}
            onHoverStart={(e) => {
              const target = e.target as HTMLElement;
              target.style.animationPlayState = "paused";
            }}
            onHoverEnd={(e) => {
              const target = e.target as HTMLElement;
              target.style.animationPlayState = "running";
            }}
            style={{
              width: "fit-content",
              cursor: "grab",
            }}
          >
            {/* First set of items */}
            {secondRow.map((product, idx) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={`first-${product.title}-${idx}`}
              />
            ))}
            {/* Duplicated set for seamless loop */}
            {secondRow.map((product, idx) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={`second-${product.title}-${idx}`}
              />
            ))}
          </motion.div>

          {/* Third Row */}
          <motion.div
            className="flex flex-row-reverse space-x-reverse space-x-20 select-none relative"
            initial={{ x: 0 }}
            animate={{
              x: [-SCROLL_DISTANCE, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: DURATION,
                ease: "linear",
              },
            }}
            style={{
              width: "fit-content", // This ensures proper content width
            }}
          >
            {/* First set of items */}
            {thirdRow.map((product, idx) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={`first-${product.title}-${idx}`}
              />
            ))}
            {/* Duplicated set for seamless loop */}
            {thirdRow.map((product, idx) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={`second-${product.title}-${idx}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl bg-zinc-900 relative mx-auto py-10 md:py-20 lg:py-40 px-4 w-full left-0 top-0">
      <div className="flex flex-col md:flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Text Content - Bottom on mobile/tablet, Left on desktop */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-white text-center lg:text-left">
            Projects <br /> I&apos;ve Worked On
          </h1>
          <p className="max-w-2xl text-base md:text-lg lg:text-xl mt-6 text-neutral-200 text-center lg:text-left">
            As a front-end developer, I have built dynamic and responsive web
            applications using React.js, Next.js, Tailwind CSS, JavaScript, CSS
            and WordPress. My work includes developing interactive dashboards,
            e-commerce platforms, custom forms, and reusable UI components,
            ensuring seamless user experiences and performance optimization.
          </p>
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: Product;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-48 sm:h-60 md:h-72 lg:h-80 w-[16rem] sm:w-[20rem] md:w-[25rem] lg:w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          height="1000"
          width="1000"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-zinc-900 pointer-events-none"></div>
      <div className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        <h2 className="text-sm sm:text-base lg:text-lg font-bold mb-2">
          {product.title}
        </h2>
        {product.description && (
          <p className="text-xs sm:text-sm text-gray-300 line-clamp-3 sm:line-clamp-none">
            {product.description}
          </p>
        )}
      </div>
    </motion.div>
  );
};
