"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MyWork() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scroll effects
  const containerY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const containerOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.95, 0.9]);
  
  // Card scroll effects
  const leftCardX = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const rightCardX = useTransform(scrollYProgress, [0, 1], [0, 30]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const cardLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const arrowVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section ref={ref} className="relative w-full py-16 px-4">
      {/* Content Container */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{
          y: containerY,
          opacity: containerOpacity,
        }}
      >
        {/* Heading */}
        <motion.h1
          className="font-anton text-4xl md:text-6xl lg:text-7xl mb-12 text-center"
          variants={containerVariants}
          style={{
            background: "linear-gradient(90deg, #004aad 0%, #cb6ce6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          MY WORK
        </motion.h1>

        {/* Two Vertical Divs */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Graphic Design Div */}
          <Link href="/graphic-design" className="block">
            <motion.div
              className="rounded-2xl p-8 md:p-12 lg:p-16 relative shadow-xl cursor-pointer"
              variants={cardLeftVariants}
              whileHover={{ scale: 1.05 }}
              style={{
                background:
                  "linear-gradient(135deg, #b471e5 0%, #efd7fa 12.5%, #f7dfff 25%, #fde5ff 37.5%, #ffffff 50%, #fde5ff 62.5%, #f7dfff 75%, #efd7fa 87.5%, #b471e5 100%)",
                backgroundSize: "400% 400%",
                backgroundPosition: "0% 50%",
                animation: "gradientShift 16s linear infinite",
                x: leftCardX,
              }}
            >
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-center"
                style={{ color: "#442832" }}
              >
                Graphic Design
              </h1>

              {/* Arrow Icon - Bottom Right */}
              <motion.div 
                className="absolute bottom-6 right-6 md:bottom-8 md:right-8"
                variants={arrowVariants}
              >
                <Image
                  src="/assets/Arrow.svg"
                  alt="Arrow right"
                  width={100}
                  height={60}
                  className="w-8 h-8 md:w-16 md:h-16 object-contain"
                />
              </motion.div>
            </motion.div>
          </Link>

          {/* Digital Marketing Div */}
          <motion.div
            className="rounded-2xl p-8 md:p-12 lg:p-16 relative shadow-xl cursor-pointer"
            variants={cardRightVariants}
            whileHover={{ scale: 1.05 }}
            style={{
              background:
                "linear-gradient(135deg, #b471e5 0%, #efd7fa 12.5%, #f7dfff 25%, #fde5ff 37.5%, #ffffff 50%, #fde5ff 62.5%, #f7dfff 75%, #efd7fa 87.5%, #b471e5 100%)",
              backgroundSize: "400% 400%",
              backgroundPosition: "0% 50%",
              animation: "gradientShift 16s linear infinite",
              x: rightCardX,
            }}
          >
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center"
              style={{ color: "#442832" }}
            >
              Digital Marketing
            </h1>

            {/* Arrow Icon - Bottom Left */}
            <motion.div 
              className="absolute bottom-6 left-6 md:bottom-8 md:left-8"
              variants={arrowVariants}
            >
              <Image
                src="/assets/Arrow.svg"
                alt="Arrow left"
                width={100}
                height={60}
                className="w-8 h-8 md:w-16 md:h-16 object-contain -scale-x-100"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

