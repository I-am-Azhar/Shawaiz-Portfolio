"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

const logos = Array.from({ length: 11 }, (_, i) => `/assets/Work/${i + 1}.svg`);

export default function Work() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const containerY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const containerOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.9, 0.8]);
  
  // Heading scroll effects
  const headingY = useTransform(scrollYProgress, [0, 0.5], [0, -30]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
  
  // Logo scroll effects
  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

  // Animation variants
  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  return (
    <section ref={ref} className="relative w-full py-16">
      {/* Content Container */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto mb-12 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{
          y: headingY,
          opacity: headingOpacity,
        }}
      >
        {/* Heading */}
        <motion.h1
          className="font-anton text-5xl md:text-6xl lg:text-7xl mb-12 text-center"
          variants={headingVariants}
          style={{
            background: "linear-gradient(90deg, #004aad 0%, #cb6ce6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Worked With
        </motion.h1>
      </motion.div>

      {/* Logo Scroll Container - Full Width */}
      <motion.div 
        className="overflow-hidden w-full"
        style={{ 
          y: containerY,
          opacity: containerOpacity,
        }}
      >
        <motion.div
          className="flex gap-8 md:gap-12 lg:gap-16 items-center"
          animate={{
            x: ["0%", "-50%"], // Move by exactly half (one full set of logos)
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          style={{ scale: logoScale }}
        >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <Image
                  src={logo}
                  alt={`Company logo ${index + 1}`}
                  width={120}
                  height={80}
                  className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <Image
                  src={logo}
                  alt={`Company logo ${index + 1}`}
                  width={120}
                  height={80}
                  className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                />
              </div>
            ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

