"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function AboutMe() {
  const ref = useRef<HTMLElement>(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const cardVariants1 = {
    hidden: { opacity: 0, y: 50, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const cardVariants2 = {
    hidden: { opacity: 0, y: 50, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const cardVariants3 = {
    hidden: { opacity: 0, y: 50, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const numberBoxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section ref={ref} className="relative min-h-screen w-full pt-8 pb-16 md:pt-16 px-4 overflow-hidden">
      {/* Content Container */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Heading */}
        <motion.h1 
          className="font-anton text-4xl md:text-6xl lg:text-7xl mb-6 text-center"
          variants={headingVariants}
          style={{
            background: "linear-gradient(90deg, #004aad 0%, #cb6ce6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ABOUT ME
        </motion.h1>

        {/* Description Paragraph */}
        <motion.p 
          className="text-sm md:text-xl mb-12 text-center max-w-4xl mx-auto" 
          style={{ color: '#442832' }}
          variants={textVariants}
        >
          I'm a creative professional with 3+ years of experience leading graphic design and digital marketing campaigns. I specialize in creating performance-driven ads and visual identities for brands
        </motion.p>

        {/* Gradient Containers with Stripes */}
        <div className="space-y-6 md:space-y-8">
          {/* First Row - 3+ and 25+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* First Stripe - Years of Experience */}
            <motion.div 
              className="rounded-2xl p-6 md:p-8 lg:p-10 relative flex items-start gap-4 md:gap-6 animate-gradient shadow-xl"
              variants={cardVariants1}
              style={{
                background: "linear-gradient(135deg, #b471e5 0%, #efd7fa 12.5%, #f7dfff 25%, #fde5ff 37.5%, #ffffff 50%, #fde5ff 62.5%, #f7dfff 75%, #efd7fa 87.5%, #b471e5 100%)",
                backgroundSize: "400% 400%",
                backgroundPosition: "0% 50%",
                animation: "gradientShift 16s linear infinite",
              }}
            >
              {/* Number Box - 3+ */}
              <motion.div 
                className="rounded-xl p-4 md:p-6 flex-shrink-0 shadow-lg"
                variants={numberBoxVariants}
                style={{
                  background: "rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: '#442832' }}>
                  3+
                </h1>
              </motion.div>

              {/* Content beside number */}
              <div className="flex-1 pt-2">
                <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: '#442832' }}>
                  Years of Experience
                </h2>
                <motion.ul 
                  className="space-y-2" 
                  style={{ color: '#442832' }}
                  variants={listContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.li variants={listItemVariants}>• 2 years in freelancing</motion.li>
                  <motion.li variants={listItemVariants}>• 1 year of professional corporate</motion.li>
                </motion.ul>
              </div>
            </motion.div>

            {/* Second Stripe - Happy Clients */}
            <motion.div 
              className="rounded-2xl p-6 md:p-8 lg:p-10 relative flex items-start gap-4 md:gap-6 animate-gradient shadow-xl"
              variants={cardVariants2}
              style={{
                background: "linear-gradient(135deg, #b471e5 0%, #efd7fa 12.5%, #f7dfff 25%, #fde5ff 37.5%, #ffffff 50%, #fde5ff 62.5%, #f7dfff 75%, #efd7fa 87.5%, #b471e5 100%)",
                backgroundSize: "400% 400%",
                backgroundPosition: "0% 50%",
                animation: "gradientShift 16s linear infinite",
              }}
            >
              {/* Number Box - 25+ */}
              <motion.div 
                className="rounded-xl p-4 md:p-6 flex-shrink-0 shadow-lg"
                variants={numberBoxVariants}
                style={{
                  background: "rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: '#442832' }}>
                  25+
                </h1>
              </motion.div>

              {/* Content beside number */}
              <div className="flex-1 pt-2">
                <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: '#442832' }}>
                  Happy Clients
                </h2>
                <motion.ul 
                  className="space-y-2" 
                  style={{ color: '#442832' }}
                  variants={listContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.li variants={listItemVariants}>• Local Business</motion.li>
                  <motion.li variants={listItemVariants}>• Mid level Business</motion.li>
                  <motion.li variants={listItemVariants}>• Celebrity Pages</motion.li>
                </motion.ul>
              </div>
            </motion.div>
          </div>

          {/* Second Row - 50+ Projects */}
          <motion.div 
            className="rounded-2xl p-6 md:p-8 lg:p-10 animate-gradient shadow-xl"
            variants={cardVariants3}
            style={{
              background: "linear-gradient(135deg, #b471e5 0%, #efd7fa 12.5%, #f7dfff 25%, #fde5ff 37.5%, #ffffff 50%, #fde5ff 62.5%, #f7dfff 75%, #efd7fa 87.5%, #b471e5 100%)",
              backgroundSize: "400% 400%",
              backgroundPosition: "0% 50%",
              animation: "gradientShift 8s linear infinite",
            }}
          >
            <div className="relative flex flex-col md:flex-row items-start gap-4 md:gap-6">
              {/* Number Box - 50+ and Projects heading side by side */}
              <div className="flex flex-row items-start gap-4 md:gap-6 w-full md:w-auto">
                {/* Number Box - 50+ */}
                <motion.div 
                  className="rounded-xl p-4 md:p-6 flex-shrink-0 shadow-lg"
                  variants={numberBoxVariants}
                  style={{
                    background: "rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: '#442832' }}>
                    50+
                  </h1>
                </motion.div>

                {/* Projects heading beside 50+ */}
                <div className="flex-1 pt-2 w-full">
                  <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: '#442832' }}>
                    Projects
                  </h2>
                  {/* First 2 items under Projects - only on mobile */}
                  <motion.ul 
                    className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-1 md:hidden" 
                    style={{ color: '#442832' }}
                    variants={listContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <motion.li variants={listItemVariants}>• Social Media Campaings</motion.li>
                    <motion.li variants={listItemVariants}>• Website Designs</motion.li>
                  </motion.ul>
                  {/* All items - below Projects heading on desktop */}
                  <motion.ul 
                    className="hidden md:grid md:grid-cols-5 gap-x-4 gap-y-2 text-sm" 
                    style={{ color: '#442832' }}
                    variants={listContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <motion.li variants={listItemVariants}>• Social Media Campaings</motion.li>
                    <motion.li variants={listItemVariants}>• Website Designs</motion.li>
                    <motion.li variants={listItemVariants}>• Socail Media Branding</motion.li>
                    <motion.li variants={listItemVariants}>• 30+ Reel Edition</motion.li>
                    <motion.li variants={listItemVariants}>• Marketing Reels</motion.li>
                    <motion.li variants={listItemVariants}>• Page Management</motion.li>
                    <motion.li variants={listItemVariants}>• Landing Pages</motion.li>
                    <motion.li variants={listItemVariants}>• Poster Design</motion.li>
                    <motion.li variants={listItemVariants}>• Flyers</motion.li>
                    <motion.li variants={listItemVariants}>• logos</motion.li>
                    <motion.li variants={listItemVariants}>• Banners</motion.li>
                    <motion.li variants={listItemVariants}>• App Designs</motion.li>
                  </motion.ul>
                </div>
              </div>
              
              {/* Items from 3rd point onward - below Projects on mobile only */}
              <motion.ul 
                className="grid grid-cols-3 gap-x-4 gap-y-2 text-sm w-full mt-1 md:hidden" 
                style={{ color: '#442832' }}
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.li variants={listItemVariants}>• Socail Media Branding</motion.li>
                <motion.li variants={listItemVariants}>• 30+ Reel Edition</motion.li>
                <motion.li variants={listItemVariants}>• Marketing Reels</motion.li>
                <motion.li variants={listItemVariants}>• Page Management</motion.li>
                <motion.li variants={listItemVariants}>• Landing Pages</motion.li>
                <motion.li variants={listItemVariants}>• Poster Design</motion.li>
                <motion.li variants={listItemVariants}>• Flyers</motion.li>
                <motion.li variants={listItemVariants}>• logos</motion.li>
                <motion.li variants={listItemVariants}>• Banners</motion.li>
                <motion.li variants={listItemVariants}>• App Designs</motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

