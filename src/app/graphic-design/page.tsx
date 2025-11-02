"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function GraphicDesignPage() {
  const ref = useRef<HTMLDivElement>(null);
  const tourismRef = useRef<HTMLDivElement>(null);
  const jewelleryRef = useRef<HTMLDivElement>(null);
  const restaurantRef = useRef<HTMLDivElement>(null);
  const billboardRef = useRef<HTMLDivElement>(null);
  const thumbnailRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Section-specific scroll tracking
  const { scrollYProgress: tourismProgress } = useScroll({
    target: tourismRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: jewelleryProgress } = useScroll({
    target: jewelleryRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: restaurantProgress } = useScroll({
    target: restaurantRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: billboardProgress } = useScroll({
    target: billboardRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: thumbnailProgress } = useScroll({
    target: thumbnailRef,
    offset: ["start end", "end start"],
  });

  // Global scroll effects
  const containerY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const containerOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.95, 0.9]);
  
  // Section-specific scroll effects
  const tourismY = useTransform(tourismProgress, [0, 1], [0, -50]);
  const tourismOpacity = useTransform(tourismProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.8]);
  const tourismImagesY = useTransform(tourismProgress, [0, 1], [0, 30]);
  
  const jewelleryY = useTransform(jewelleryProgress, [0, 1], [0, -50]);
  const jewelleryOpacity = useTransform(jewelleryProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.8]);
  const jewelleryImagesY = useTransform(jewelleryProgress, [0, 1], [0, -30]);
  
  const restaurantY = useTransform(restaurantProgress, [0, 1], [0, -50]);
  const restaurantOpacity = useTransform(restaurantProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.8]);
  const restaurantImagesScale = useTransform(restaurantProgress, [0, 0.5, 1], [0.95, 1, 0.98]);
  
  const billboardY = useTransform(billboardProgress, [0, 1], [0, -40]);
  const billboardOpacity = useTransform(billboardProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.8]);
  const billboardScale = useTransform(billboardProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  
  const thumbnailY = useTransform(thumbnailProgress, [0, 1], [0, -50]);
  const thumbnailOpacity = useTransform(thumbnailProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.8]);
  const thumbnailImagesX = useTransform(thumbnailProgress, [0, 1], [0, -20]);
  
  // Image scroll effects
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.02, 1]);

  // Animation variants - optimized for mobile
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const headingVariants = {
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  // Mobile-optimized image variants - fade in from bottom
  const imageVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const imageGroupVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  // Mobile-optimized tourism image variants
  const tourismImageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  // Mobile-optimized jewellery image variants - fade in from bottom on mobile
  const jewelleryImageVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: 0, // Remove horizontal movement on mobile
      y: 50, // Always slide up on mobile
      scale: 0.95,
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  // Mobile-optimized restaurant image variants - fade in from bottom
  const restaurantImageVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: 0, // Remove horizontal movement on mobile
      y: 50, // Always slide up on mobile
      scale: 0.95,
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  // Mobile-optimized billboard image variants
  const billboardImageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 40,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  // Mobile-optimized thumbnail image variants - fade in from bottom
  const thumbnailImageVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: 0, // Remove horizontal movement on mobile
      y: 50, // Always slide up on mobile
      scale: 0.95,
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };
  const tourismSvgs = [
    { src: "/assets/TOURISM/13.svg", alt: "Tourism Design 13" },
    { src: "/assets/TOURISM/14.svg", alt: "Tourism Design 14" },
    { src: "/assets/TOURISM/15.svg", alt: "Tourism Design 15" },
    { src: "/assets/TOURISM/16.svg", alt: "Tourism Design 16" },
    { src: "/assets/TOURISM/17.svg", alt: "Tourism Design 17" },
  ];

  const jewellerySvgs = [
    { src: "/assets/Jewellery/1.svg", alt: "Jewellery Design 1" },
    { src: "/assets/Jewellery/2.svg", alt: "Jewellery Design 2" },
    { src: "/assets/Jewellery/3.svg", alt: "Jewellery Design 3" },
  ];

  const restaurantSvgs = [
    { src: "/assets/Restaurant/1.svg", alt: "Restaurant Design 1" },
    { src: "/assets/Restaurant/2.svg", alt: "Restaurant Design 2" },
    { src: "/assets/Restaurant/3.svg", alt: "Restaurant Design 3" },
    { src: "/assets/Restaurant/4.svg", alt: "Restaurant Design 4" },
    { src: "/assets/Restaurant/5.svg", alt: "Restaurant Design 5" },
    { src: "/assets/Restaurant/6.svg", alt: "Restaurant Design 6" },
  ];

  return (
    <div ref={ref} className="min-h-screen">
      {/* Sticky Go Back Home Button */}
      <motion.div
        className="fixed top-4 left-4 md:top-6 md:left-6 z-50"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link href="/">
          <motion.button
            className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 rounded-full shadow-lg backdrop-blur-sm font-semibold text-xs md:text-sm lg:text-base"
            style={{
              background:
                "linear-gradient(135deg, #b471e5 0%, #efd7fa 12.5%, #f7dfff 25%, #fde5ff 37.5%, #ffffff 50%, #fde5ff 62.5%, #f7dfff 75%, #efd7fa 87.5%, #b471e5 100%)",
              backgroundSize: "400% 400%",
              backgroundPosition: "0% 50%",
              animation: "gradientShift 16s linear infinite",
              color: "#442832",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="hidden sm:inline">Home</span>
          </motion.button>
        </Link>
      </motion.div>

      {/* My Designs Gallery Heading with Gradient Background */}
      <motion.div
        className="w-full py-12 md:py-16 px-4 relative animate-gradient mt-4 md:mt-8 rounded-b-3xl max-w-xs sm:max-w-xl md:max-w-4xl mx-auto shadow-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background:
            "linear-gradient(135deg, #b471e5 0%, #efd7fa 12.5%, #f7dfff 25%, #fde5ff 37.5%, #ffffff 50%, #fde5ff 62.5%, #f7dfff 75%, #efd7fa 87.5%, #b471e5 100%)",
          backgroundSize: "400% 400%",
          backgroundPosition: "0% 50%",
          animation: "gradientShift 16s linear infinite",
        }}
      >
        <h1 className="font-anton text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
          <span style={{ color: "#442832" }}>My Designs Gallery</span>
        </h1>
      </motion.div>

      {/* Content Section */}
      <section className="relative w-full py-12 md:py-24 px-4 md:px-6 lg:px-8">
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            y: containerY,
            opacity: containerOpacity,
          }}
        >
          {/* Tourism? Heading with Gradient Text */}
          <div ref={tourismRef} className="py-12 md:py-20">
            <motion.h2
              className="font-anton text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-center"
              variants={headingVariants}
              style={{
                background: "linear-gradient(90deg, #004aad 0%, #cb6ce6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                y: tourismY,
                opacity: tourismOpacity,
                textShadow: "0 4px 20px rgba(0, 74, 173, 0.2)",
              }}
            >
              TOURISM
            </motion.h2>

            {/* Creative Ads Design Paragraph */}
            <motion.p 
              className="text-center text-base md:text-lg lg:text-xl mb-8 md:mb-12 text-gray-700 font-medium"
              variants={textVariants}
              style={{
                y: tourismY,
                opacity: tourismOpacity,
              }}
            >
              Creative Ads Design
            </motion.p>

            {/* SVG Gallery - Vertical on mobile, horizontal on desktop */}
            <motion.div 
              className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-4 lg:gap-8 mb-12 md:mb-16"
              variants={imageGroupVariants}
              style={{
                y: tourismImagesY,
                opacity: tourismOpacity,
              }}
            >
            {tourismSvgs.map((svg, index) => {
              const isEven = index % 2 === 1; // 0-based: index 1, 3 are down (even positions)
              const translateY = isEven ? "md:translate-y-8 lg:translate-y-16" : "md:-translate-y-8 lg:-translate-y-16";
              
              return (
                <motion.div
                  key={index}
                  className={`w-full md:flex-1 transition-transform duration-300 ${translateY}`}
                  custom={index}
                  variants={tourismImageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={svg.src}
                    alt={svg.alt}
                    width={300}
                    height={400}
                    className="w-full h-auto object-contain max-w-[85%] md:max-w-none mx-auto"
                    priority={index < 2}
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </motion.div>
              );
            })}
            </motion.div>
          </div>

          {/* Section Divider */}
          <div className="flex items-center justify-center py-8 md:py-12">
            <div className="w-48 md:w-96 h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          </div>

          {/* Jewellery? Heading with Gradient Text */}
          <div ref={jewelleryRef} className="py-12 md:py-20">
            <motion.h2
              className="font-anton text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-center"
              variants={headingVariants}
              style={{
                background: "linear-gradient(90deg, #004aad 0%, #cb6ce6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                y: jewelleryY,
                opacity: jewelleryOpacity,
                textShadow: "0 4px 20px rgba(0, 74, 173, 0.2)",
              }}
            >
              JEWELRY
            </motion.h2>

            {/* Creative Ads Design Paragraph */}
            <motion.p 
              className="text-center text-base md:text-lg lg:text-xl mb-8 md:mb-12 text-gray-700 font-medium"
              variants={textVariants}
              style={{
                y: jewelleryY,
                opacity: jewelleryOpacity,
              }}
            >
              Creative Ads Designs
            </motion.p>

            {/* Jewellery SVG Gallery - Vertical on mobile, horizontal on desktop */}
            <motion.div 
              className="flex flex-col md:flex-row items-center justify-center w-full gap-6 md:gap-6 lg:gap-10 mb-12 md:mb-16"
              variants={imageGroupVariants}
              style={{
                y: jewelleryImagesY,
                opacity: jewelleryOpacity,
              }}
            >
            {jewellerySvgs.map((svg, index) => {
              // Pattern: up (0), down (1), up (2)
              const translateY = index === 1 ? "md:translate-y-8 lg:translate-y-16" : "md:-translate-y-8 lg:-translate-y-16";
              const isMiddle = index === 1;
              const flexClass = isMiddle ? "w-full md:flex-[1.5]" : "w-full md:flex-1";
              
              return (
                <motion.div
                  key={index}
                  className={`${flexClass} transition-transform duration-300 ${translateY}`}
                  custom={index}
                  variants={jewelleryImageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={svg.src}
                    alt={svg.alt}
                    width={300}
                    height={400}
                    className="w-full h-auto object-contain max-w-[85%] md:max-w-none mx-auto"
                    priority={index < 2}
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </motion.div>
              );
            })}
            </motion.div>
          </div>

          {/* Section Divider */}
          <div className="flex items-center justify-center py-8 md:py-12">
            <div className="w-48 md:w-96 h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          </div>

          {/* RESTAURANT Heading with Gradient Text */}
          <div ref={restaurantRef} className="py-12 md:py-20">
            <motion.h2
              className="font-anton text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-center"
              variants={headingVariants}
              style={{
                background: "linear-gradient(90deg, #004aad 0%, #cb6ce6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                y: restaurantY,
                opacity: restaurantOpacity,
                textShadow: "0 4px 20px rgba(0, 74, 173, 0.2)",
              }}
            >
              RESTAURANT
            </motion.h2>

            {/* Creative Ads Design Paragraph */}
            <motion.p 
              className="text-center text-base md:text-lg lg:text-xl mb-8 md:mb-12 text-gray-700 font-medium"
              variants={textVariants}
              style={{
                y: restaurantY,
                opacity: restaurantOpacity,
              }}
            >
              Creative Ads Designs
            </motion.p>

            {/* Restaurant SVG Gallery - Single column on mobile, custom layout on desktop */}
            <motion.div 
              className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-6 lg:gap-10 mb-12 md:mb-16"
              variants={imageGroupVariants}
              style={{
                scale: restaurantImagesScale,
                opacity: restaurantOpacity,
              }}
            >
            {/* Mobile: Single column with all images stacked */}
            <div className="flex flex-col md:hidden items-center w-full gap-6">
              {restaurantSvgs.map((svg, index) => (
                <motion.div 
                  key={index}
                  className="w-full max-w-[85%]"
                  custom={index}
                  variants={restaurantImageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={svg.src}
                    alt={svg.alt}
                    width={300}
                    height={400}
                    className="w-full h-auto object-contain"
                    priority={index < 3}
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </motion.div>
              ))}
            </div>

            {/* Desktop: Custom 3-column layout */}
            <div className="hidden md:flex flex-row items-center justify-between w-full gap-6 lg:gap-8">
              {/* Column 1: SVG 1 (top), SVG 2 (bottom) */}
              <motion.div 
                className="flex flex-col items-center justify-start flex-1 gap-6 lg:gap-8"
                variants={imageGroupVariants}
              >
                <motion.div 
                  className="w-full max-w-[75%]"
                  custom={0}
                  variants={restaurantImageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={restaurantSvgs[0].src}
                    alt={restaurantSvgs[0].alt}
                    width={300}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
                <motion.div 
                  className="w-full max-w-[75%]"
                  custom={1}
                  variants={restaurantImageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={restaurantSvgs[1].src}
                    alt={restaurantSvgs[1].alt}
                    width={300}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
              </motion.div>

              {/* Column 2: SVG 3 and SVG 4 side by side */}
              <motion.div 
                className="flex flex-row items-center justify-center flex-[1.5] gap-6 lg:gap-8"
                variants={imageGroupVariants}
              >
                <motion.div 
                  className="flex-1"
                  custom={2}
                  variants={restaurantImageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={restaurantSvgs[2].src}
                    alt={restaurantSvgs[2].alt}
                    width={300}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
                <motion.div 
                  className="flex-1"
                  custom={3}
                  variants={restaurantImageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={restaurantSvgs[3].src}
                    alt={restaurantSvgs[3].alt}
                    width={300}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
              </motion.div>

              {/* Column 3: SVG 5 (top), SVG 6 (bottom) */}
              <motion.div 
                className="flex flex-col items-center justify-start flex-1 gap-6 lg:gap-8"
                variants={imageGroupVariants}
              >
                <motion.div 
                  className="w-full max-w-[75%]"
                  custom={4}
                  variants={restaurantImageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={restaurantSvgs[4].src}
                    alt={restaurantSvgs[4].alt}
                    width={300}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
                <motion.div 
                  className="w-full max-w-[75%]"
                  custom={5}
                  variants={restaurantImageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={restaurantSvgs[5].src}
                    alt={restaurantSvgs[5].alt}
                    width={300}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          </div>

          {/* Section Divider */}
          <div className="flex items-center justify-center py-8 md:py-12">
            <div className="w-48 md:w-96 h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          </div>

          {/* BILL BOARD Heading with Gradient Text */}
          <div ref={billboardRef} className="py-12 md:py-20">
            <motion.h2
              className="font-anton text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-center"
              variants={headingVariants}
              style={{
                background: "linear-gradient(90deg, #004aad 0%, #cb6ce6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                y: billboardY,
                opacity: billboardOpacity,
                textShadow: "0 4px 20px rgba(0, 74, 173, 0.2)",
              }}
            >
              BILL BOARD
            </motion.h2>

            {/* Creative Designs Paragraph */}
            <motion.p 
              className="text-center text-base md:text-lg lg:text-xl mb-8 md:mb-12 text-gray-700 font-medium"
              variants={textVariants}
              style={{
                y: billboardY,
                opacity: billboardOpacity,
              }}
            >
              Creative Designs
            </motion.p>

            {/* Billboard SVG Gallery - Single Image */}
            <motion.div 
              className="flex items-center justify-center mb-12 md:mb-16 px-4"
              variants={billboardImageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              style={{
                scale: billboardScale,
                opacity: billboardOpacity,
              }}
            >
            <div className="w-full max-w-[90%] sm:max-w-[540px] md:max-w-[700px] lg:max-w-[900px]">
              <Image
                src="/assets/BILL BOARD/bb.png"
                alt="Billboard Design"
                width={900}
                height={1280}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>
          </div>

          {/* Section Divider */}
          <div className="flex items-center justify-center py-8 md:py-12">
            <div className="w-48 md:w-96 h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          </div>

          {/* Thumbnail Heading with Gradient Text */}
          <div ref={thumbnailRef} className="py-12 md:py-20">
            <motion.h2
              className="font-anton text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-center"
              variants={headingVariants}
              style={{
                background: "linear-gradient(90deg, #004aad 0%, #cb6ce6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                y: thumbnailY,
                opacity: thumbnailOpacity,
                textShadow: "0 4px 20px rgba(0, 74, 173, 0.2)",
              }}
            >
                THUMBNAIL
            </motion.h2>

            {/* Creative Designs Paragraph */}
            <motion.p 
              className="text-center text-base md:text-lg lg:text-xl mb-8 md:mb-12 text-gray-700 font-medium"
              variants={textVariants}
              style={{
                y: thumbnailY,
                opacity: thumbnailOpacity,
              }}
            >
              Creative Designs
            </motion.p>

           {/* Before/After Pair 1: 1.svg → 2.svg + 3.svg */}
           {/* Mobile: Vertical layout */}
           <div className="flex flex-col md:hidden items-center gap-8 mb-16">
             {/* Before: Single Image */}
             <motion.div 
               className="flex flex-col items-center w-full"
               custom={0}
               variants={thumbnailImageVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               whileTap={{ scale: 0.98 }}
               transition={{ duration: 0.2 }}
             >
               <h3 className="text-lg font-semibold mb-4" style={{ color: '#004aad' }}>Before</h3>
               <div className="w-full max-w-[85%]">
                 <Image
                   src="/assets/THUMBNAIL/1.svg"
                   alt="Thumbnail Before"
                   width={300}
                   height={400}
                   className="w-full h-auto object-contain"
                   priority
                 />
               </div>
             </motion.div>

             {/* Connector: Vertical Arrow */}
             <motion.div 
               className="flex items-center justify-center py-2"
               custom={1}
               variants={thumbnailImageVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               whileTap={{ scale: 0.95 }}
               transition={{ duration: 0.2 }}
             >
               <svg
                 className="w-8 h-12"
                 viewBox="0 0 48 80"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <defs>
                   <linearGradient id="arrowGradient1Vertical" x1="0%" y1="0%" x2="0%" y2="100%">
                     <stop offset="0%" stopColor="#004aad" />
                     <stop offset="100%" stopColor="#cb6ce6" />
                   </linearGradient>
                 </defs>
                 <path
                   d="M24 0 L24 60 M24 60 L12 48 M24 60 L36 48"
                   stroke="url(#arrowGradient1Vertical)"
                   strokeWidth="4"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 />
               </svg>
             </motion.div>

             {/* After: Two Images Side by Side */}
             <motion.div 
               className="flex flex-col items-center w-full"
               custom={2}
               variants={thumbnailImageVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               whileTap={{ scale: 0.98 }}
               transition={{ duration: 0.2 }}
             >
               <h3 className="text-lg font-semibold mb-4" style={{ color: '#004aad' }}>After</h3>
               <div className="flex flex-row gap-4 w-full max-w-[85%]">
                 <motion.div 
                   className="flex-[3.15]"
                   custom={2}
                   variants={thumbnailImageVariants}
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, margin: "-50px" }}
                   whileTap={{ scale: 0.98 }}
                   transition={{ duration: 0.2 }}
                 >
                   <Image
                     src="/assets/THUMBNAIL/2.svg"
                     alt="Thumbnail After"
                     width={1050}
                     height={1400}
                     className="w-full h-auto object-contain"
                   />
                 </motion.div>
                 <motion.div 
                   className="flex-1"
                   custom={3}
                   variants={thumbnailImageVariants}
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, margin: "-50px" }}
                   whileTap={{ scale: 0.98 }}
                   transition={{ duration: 0.2 }}
                 >
                   <Image
                     src="/assets/THUMBNAIL/3.svg"
                     alt="Thumbnail After"
                     width={300}
                     height={400}
                     className="w-full h-auto object-contain"
                   />
                 </motion.div>
               </div>
             </motion.div>
           </div>

           {/* Desktop: Horizontal layout */}
           <motion.div 
             className="hidden md:flex flex-row items-center justify-center gap-6 lg:gap-12 mb-20"
             variants={imageGroupVariants}
             style={{
               x: thumbnailImagesX,
               opacity: thumbnailOpacity,
             }}
           >
             {/* Before: Single Image */}
             <motion.div 
               className="flex flex-col items-center"
               custom={0}
               variants={thumbnailImageVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               whileTap={{ scale: 0.98 }}
               transition={{ duration: 0.2 }}
             >
               <h3 className="text-lg md:text-xl font-semibold mb-6" style={{ color: '#004aad' }}>Before</h3>
               <div className="flex-1 max-w-[300px]">
                 <Image
                   src="/assets/THUMBNAIL/1.svg"
                   alt="Thumbnail Before"
                   width={300}
                   height={400}
                   className="w-full h-auto object-contain"
                 />
               </div>
             </motion.div>

             {/* Connector: Horizontal Arrow */}
             <motion.div 
               className="flex items-center justify-center px-4 md:px-8"
               custom={1}
               variants={thumbnailImageVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               whileTap={{ scale: 0.95 }}
               transition={{ duration: 0.2 }}
             >
               <svg
                 className="w-12 h-8 md:w-20 md:h-12"
                 viewBox="0 0 80 48"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <defs>
                   <linearGradient id="arrowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="0%" stopColor="#004aad" />
                     <stop offset="100%" stopColor="#cb6ce6" />
                   </linearGradient>
                 </defs>
                 <path
                   d="M0 24 L60 24 M60 24 L45 12 M60 24 L45 36"
                   stroke="url(#arrowGradient1)"
                   strokeWidth="4"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 />
               </svg>
             </motion.div>

             {/* After: Two Images Side by Side */}
             <motion.div 
               className="flex flex-col items-center"
               custom={2}
               variants={thumbnailImageVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               whileTap={{ scale: 0.98 }}
               transition={{ duration: 0.2 }}
             >
               <h3 className="text-lg md:text-xl font-semibold mb-6" style={{ color: '#004aad' }}>After</h3>
               <div className="flex flex-row gap-4 md:gap-6 flex-1 max-w-[600px]">
                 <motion.div 
                   className="flex-[3.15]"
                   custom={2}
                   variants={thumbnailImageVariants}
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, margin: "-50px" }}
                   whileTap={{ scale: 0.98 }}
                   transition={{ duration: 0.2 }}
                 >
                   <Image
                     src="/assets/THUMBNAIL/2.svg"
                     alt="Thumbnail After"
                     width={1050}
                     height={1400}
                     className="w-full h-auto object-contain"
                   />
                 </motion.div>
                 <motion.div 
                   className="flex-1"
                   custom={3}
                   variants={thumbnailImageVariants}
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, margin: "-50px" }}
                   whileTap={{ scale: 0.98 }}
                   transition={{ duration: 0.2 }}
                 >
                   <Image
                     src="/assets/THUMBNAIL/3.svg"
                     alt="Thumbnail After"
                     width={300}
                     height={400}
                     className="w-full h-auto object-contain"
                   />
                 </motion.div>
               </div>
             </motion.div>
           </motion.div>

           {/* Before/After Pair 2: 4.svg + 5.svg → 6.svg */}
           {/* Mobile: Vertical layout */}
           <div className="flex flex-col md:hidden items-center gap-8 mb-16">
             {/* Before: Two Images Side by Side */}
             <motion.div 
               className="flex flex-col items-center w-full"
               custom={4}
               variants={thumbnailImageVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               whileTap={{ scale: 0.98 }}
               transition={{ duration: 0.2 }}
             >
               <h3 className="text-lg font-semibold mb-4" style={{ color: '#004aad' }}>Before</h3>
               <div className="flex flex-row gap-4 w-full max-w-[85%]">
                 <motion.div 
                   className="flex-1"
                   custom={5}
                   variants={thumbnailImageVariants}
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, margin: "-50px" }}
                   whileTap={{ scale: 0.98 }}
                   transition={{ duration: 0.2 }}
                 >
                   <Image
                     src="/assets/THUMBNAIL/4.svg"
                     alt="Thumbnail Before"
                     width={350}
                     height={467}
                     className="w-full h-auto object-contain"
                   />
                 </motion.div>
                 <motion.div 
                   className="flex-1"
                   custom={6}
                   variants={thumbnailImageVariants}
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, margin: "-50px" }}
                   whileTap={{ scale: 0.98 }}
                   transition={{ duration: 0.2 }}
                 >
                   <Image
                     src="/assets/THUMBNAIL/5.svg"
                     alt="Thumbnail Before"
                     width={350}
                     height={467}
                     className="w-full h-auto object-contain"
                   />
                 </motion.div>
               </div>
             </motion.div>

             {/* Connector: Vertical Arrow */}
             <motion.div 
               className="flex items-center justify-center py-2"
               custom={7}
               variants={thumbnailImageVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               whileTap={{ scale: 0.95 }}
               transition={{ duration: 0.2 }}
             >
               <svg
                 className="w-8 h-12"
                 viewBox="0 0 48 80"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <defs>
                   <linearGradient id="arrowGradient2Vertical" x1="0%" y1="0%" x2="0%" y2="100%">
                     <stop offset="0%" stopColor="#004aad" />
                     <stop offset="100%" stopColor="#cb6ce6" />
                   </linearGradient>
                 </defs>
                 <path
                   d="M24 0 L24 60 M24 60 L12 48 M24 60 L36 48"
                   stroke="url(#arrowGradient2Vertical)"
                   strokeWidth="4"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 />
               </svg>
             </motion.div>

             {/* After: Single Image */}
             <motion.div 
               className="flex flex-col items-center w-full"
               custom={8}
               variants={thumbnailImageVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               whileTap={{ scale: 0.98 }}
               transition={{ duration: 0.2 }}
             >
               <h3 className="text-lg font-semibold mb-4" style={{ color: '#004aad' }}>After</h3>
               <div className="w-full max-w-[85%]">
                 <Image
                   src="/assets/THUMBNAIL/6.svg"
                   alt="Thumbnail After"
                   width={800}
                   height={1067}
                   className="w-full h-auto object-contain"
                 />
               </div>
             </motion.div>
           </div>

           {/* Desktop: Horizontal layout */}
           <motion.div 
             className="hidden md:flex flex-row items-center justify-center gap-6 lg:gap-12 mb-20"
             variants={imageGroupVariants}
             style={{
               x: thumbnailImagesX,
               opacity: thumbnailOpacity,
             }}
           >
             {/* Before: Two Images Side by Side */}
             <motion.div 
               className="flex flex-col items-center"
               custom={4}
               variants={thumbnailImageVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               whileTap={{ scale: 0.98 }}
               transition={{ duration: 0.2 }}
             >
               <h3 className="text-lg md:text-xl font-semibold mb-6" style={{ color: '#004aad' }}>Before</h3>
               <div className="flex flex-row gap-4 md:gap-6 flex-1 max-w-[700px]">
                 <motion.div 
                   className="flex-1"
                   custom={5}
                   variants={thumbnailImageVariants}
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, margin: "-50px" }}
                   whileTap={{ scale: 0.98 }}
                   transition={{ duration: 0.2 }}
                 >
                   <Image
                     src="/assets/THUMBNAIL/4.svg"
                     alt="Thumbnail Before"
                     width={350}
                     height={467}
                     className="w-full h-auto object-contain"
                   />
                 </motion.div>
                 <motion.div 
                   className="flex-1"
                   custom={6}
                   variants={thumbnailImageVariants}
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, margin: "-50px" }}
                   whileTap={{ scale: 0.98 }}
                   transition={{ duration: 0.2 }}
                 >
                   <Image
                     src="/assets/THUMBNAIL/5.svg"
                     alt="Thumbnail Before"
                     width={350}
                     height={467}
                     className="w-full h-auto object-contain"
                   />
                 </motion.div>
               </div>
             </motion.div>

             {/* Connector: Horizontal Arrow */}
             <motion.div 
               className="flex items-center justify-center px-4 md:px-8"
               custom={7}
               variants={thumbnailImageVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               whileTap={{ scale: 0.95 }}
               transition={{ duration: 0.2 }}
             >
               <svg
                 className="w-12 h-8 md:w-20 md:h-12"
                 viewBox="0 0 80 48"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <defs>
                   <linearGradient id="arrowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="0%" stopColor="#004aad" />
                     <stop offset="100%" stopColor="#cb6ce6" />
                   </linearGradient>
                 </defs>
                 <path
                   d="M0 24 L60 24 M60 24 L45 12 M60 24 L45 36"
                   stroke="url(#arrowGradient2)"
                   strokeWidth="4"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 />
               </svg>
             </motion.div>

             {/* After: Single Image */}
             <motion.div 
               className="flex flex-col items-center"
               custom={8}
               variants={thumbnailImageVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               whileTap={{ scale: 0.98 }}
               transition={{ duration: 0.2 }}
             >
               <h3 className="text-lg md:text-xl font-semibold mb-6" style={{ color: '#004aad' }}>After</h3>
               <div className="flex-1 max-w-[800px]">
                 <Image
                   src="/assets/THUMBNAIL/6.svg"
                   alt="Thumbnail After"
                   width={800}
                   height={1067}
                   className="w-full h-auto object-contain"
                 />
               </div>
             </motion.div>
           </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

