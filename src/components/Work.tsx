"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = Array.from({ length: 11 }, (_, i) => `/assets/Work/${i + 1}.svg`);

export default function Work() {
  return (
    <section className="relative w-full py-16 bg-white">
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto mb-12 px-4">
        {/* Heading */}
        <h1
          className="font-anton text-5xl md:text-6xl lg:text-7xl mb-12 text-center"
          style={{
            background: "linear-gradient(90deg, #004aad 0%, #cb6ce6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Worked With
        </h1>
      </div>

      {/* Logo Scroll Container - Full Width */}
      <div className="overflow-hidden w-full">
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
      </div>
    </section>
  );
}

