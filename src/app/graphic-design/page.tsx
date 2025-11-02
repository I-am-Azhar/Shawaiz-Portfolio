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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const imageVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const imageGroupVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Jewellery image variants - slide in from left/right
  const jewelleryImageVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index === 0 ? -100 : index === 1 ? 0 : 100,
      y: index === 1 ? 30 : -30,
      scale: 0.8,
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  // Restaurant image variants - slide in from different directions
  const restaurantImageVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index === 0 || index === 3 ? -80 : index === 1 || index === 4 ? 80 : 0,
      y: index === 0 || index === 2 ? -50 : index === 1 || index === 5 ? 50 : 0,
      scale: 0.85,
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  // Billboard image variants - scale up from center
  const billboardImageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  // Thumbnail image variants - slide in from left/right
  const thumbnailImageVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index === 0 || index === 2 ? -100 : index === 1 || index === 3 ? 100 : 0,
      scale: 0.9,
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
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
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link href="/">
          <motion.button
            className="flex items-center gap-2 px-4 py-3 md:px-6 md:py-4 rounded-full shadow-lg backdrop-blur-sm font-semibold text-sm md:text-base"
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
              className="w-5 h-5 md:w-6 md:h-6"
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
        className="w-full py-16 px-4 relative animate-gradient"
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
        <h1 className="font-anton text-4xl md:text-6xl lg:text-7xl text-center">
          <span style={{ color: "#442832" }}>My Designs Gallery</span>
        </h1>
      </motion.div>

      {/* Content Section */}
      <section className="relative w-full py-16 px-4">
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
          <div ref={tourismRef}>
            <motion.h2
              className="font-anton text-3xl md:text-5xl lg:text-6xl mb-4 text-center"
              variants={headingVariants}
              style={{
                background: "linear-gradient(90deg, #004aad 0%, #cb6ce6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                y: tourismY,
                opacity: tourismOpacity,
              }}
            >
              Tourism?
            </motion.h2>

            {/* Creative Ads Design Paragraph */}
            <motion.p 
              className="text-center text-lg md:text-xl mb-12 text-gray-700"
              variants={textVariants}
              style={{
                y: tourismY,
                opacity: tourismOpacity,
              }}
            >
              Creative Ads Design
            </motion.p>

            {/* SVG Gallery - Horizontal Layout with Alternating Vertical Positions */}
            <motion.div 
              className="flex flex-row items-center justify-between w-full gap-4 md:gap-8 mb-16"
              variants={imageGroupVariants}
              style={{
                y: tourismImagesY,
                opacity: tourismOpacity,
              }}
            >
            {tourismSvgs.map((svg, index) => {
              const isEven = index % 2 === 1; // 0-based: index 1, 3 are down (even positions)
              const translateY = isEven ? "translate-y-8 md:translate-y-16" : "-translate-y-8 md:-translate-y-16";
              
              return (
                <motion.div
                  key={index}
                  className={`flex-1 transition-transform duration-300 ${translateY}`}
                  variants={imageVariants}
                  whileHover={{ scale: 1.05, y: isEven ? 24 : -24 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={svg.src}
                    alt={svg.alt}
                    width={300}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
              );
            })}
            </motion.div>
          </div>

          {/* Jewellery? Heading with Gradient Text */}
          <div ref={jewelleryRef}>
            <motion.h2
              className="font-anton text-3xl md:text-5xl lg:text-6xl mb-4 text-center"
              variants={headingVariants}
              style={{
                background: "linear-gradient(90deg, #004aad 0%, #cb6ce6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                y: jewelleryY,
                opacity: jewelleryOpacity,
              }}
            >
              Jewellery
            </motion.h2>

            {/* Creative Ads Design Paragraph */}
            <motion.p 
              className="text-center text-lg md:text-xl mb-12 text-gray-700"
              variants={textVariants}
              style={{
                y: jewelleryY,
                opacity: jewelleryOpacity,
              }}
            >
              Creative Ads Designs
            </motion.p>

            {/* Jewellery SVG Gallery - Horizontal Layout with Up Down Up Pattern */}
            <motion.div 
              className="flex flex-row items-center justify-between w-full gap-4 md:gap-8 mb-16"
              variants={imageGroupVariants}
              style={{
                y: jewelleryImagesY,
                opacity: jewelleryOpacity,
              }}
            >
            {jewellerySvgs.map((svg, index) => {
              // Pattern: up (0), down (1), up (2)
              const translateY = index === 1 ? "translate-y-8 md:translate-y-16" : "-translate-y-8 md:-translate-y-16";
              const isMiddle = index === 1;
              
              return (
                <motion.div
                  key={index}
                  className={`${isMiddle ? 'flex-[1.5]' : 'flex-1'} transition-transform duration-300 ${translateY}`}
                  custom={index}
                  variants={jewelleryImageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.05, y: index === 1 ? 24 : -24 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={svg.src}
                    alt={svg.alt}
                    width={300}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
              );
            })}
            </motion.div>
          </div>

          {/* RESTAURANT Heading with Gradient Text */}
          <div ref={restaurantRef}>
            <motion.h2
              className="font-anton text-3xl md:text-5xl lg:text-6xl mb-4 text-center"
              variants={headingVariants}
              style={{
                background: "linear-gradient(90deg, #004aad 0%, #cb6ce6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                y: restaurantY,
                opacity: restaurantOpacity,
              }}
            >
              RESTAURANT
            </motion.h2>

            {/* Creative Ads Design Paragraph */}
            <motion.p 
              className="text-center text-lg md:text-xl mb-12 text-gray-700"
              variants={textVariants}
              style={{
                y: restaurantY,
                opacity: restaurantOpacity,
              }}
            >
              Creative Ads Designs
            </motion.p>

            {/* Restaurant SVG Gallery - Custom Layout */}
            <motion.div 
              className="flex flex-row items-center justify-between w-full gap-4 md:gap-8"
              variants={imageGroupVariants}
              style={{
                scale: restaurantImagesScale,
                opacity: restaurantOpacity,
              }}
            >
            {/* Column 1: SVG 1 (top), SVG 2 (bottom) */}
            <motion.div 
              className="flex flex-col items-center justify-start flex-1 gap-6 md:gap-8"
              variants={imageGroupVariants}
            >
              <motion.div 
                className="w-full max-w-[75%]"
                custom={0}
                variants={restaurantImageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
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
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
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
              className="flex flex-row items-center justify-center flex-[1.5] gap-4 md:gap-8"
              variants={imageGroupVariants}
            >
              <motion.div 
                className="flex-1"
                custom={2}
                variants={restaurantImageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
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
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
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
              className="flex flex-col items-center justify-start flex-1 gap-6 md:gap-8"
              variants={imageGroupVariants}
            >
              <motion.div 
                className="w-full max-w-[75%]"
                custom={4}
                variants={restaurantImageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
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
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
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
          </motion.div>
          </div>

          {/* BILL BOARD Heading with Gradient Text */}
          <div ref={billboardRef}>
            <motion.h2
              className="font-anton text-3xl md:text-5xl lg:text-6xl mb-4 text-center mt-16"
              variants={headingVariants}
              style={{
                background: "linear-gradient(90deg, #004aad 0%, #cb6ce6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                y: billboardY,
                opacity: billboardOpacity,
              }}
            >
              BILL BOARD
            </motion.h2>

            {/* Creative Designs Paragraph */}
            <motion.p 
              className="text-center text-lg md:text-xl mb-12 text-gray-700"
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
              className="flex items-center justify-center mb-16"
              variants={billboardImageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                scale: billboardScale,
                opacity: billboardOpacity,
              }}
            >
            <div className="w-full max-w-[540px]">
              <Image
                src="/assets/BILL BOARD/bb.png"
                alt="Billboard Design"
                width={540}
                height={768}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
          </div>

          {/* Thumbnail Heading with Gradient Text */}
          <div ref={thumbnailRef}>
            <motion.h2
              className="font-anton text-3xl md:text-5xl lg:text-6xl mb-4 text-center mt-16"
              variants={headingVariants}
              style={{
                background: "linear-gradient(90deg, #004aad 0%, #cb6ce6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                y: thumbnailY,
                opacity: thumbnailOpacity,
              }}
            >
              Thumbnail
            </motion.h2>

            {/* Creative Designs Paragraph */}
            <motion.p 
              className="text-center text-lg md:text-xl mb-12 text-gray-700"
              variants={textVariants}
              style={{
                y: thumbnailY,
                opacity: thumbnailOpacity,
              }}
            >
              Creative Designs
            </motion.p>

           {/* Before/After Pair 1: 1.svg → 2.svg + 3.svg */}
           <motion.div 
             className="flex flex-row items-center justify-center gap-6 md:gap-12 mb-16"
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
               whileHover={{ scale: 1.03 }}
               transition={{ duration: 0.3 }}
             >
               <h3 className="text-lg md:text-xl font-semibold mb-4" style={{ color: '#004aad' }}>Before</h3>
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

             {/* Connector: Custom Gradient Arrow */}
             <motion.div 
               className="flex items-center justify-center px-4 md:px-8"
               custom={1}
               variants={thumbnailImageVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               whileHover={{ scale: 1.1 }}
               transition={{ duration: 0.3 }}
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
               whileHover={{ scale: 1.03 }}
               transition={{ duration: 0.3 }}
             >
               <h3 className="text-lg md:text-xl font-semibold mb-4" style={{ color: '#004aad' }}>After</h3>
               <div className="flex flex-row gap-4 md:gap-6 flex-1 max-w-[600px]">
                 <motion.div 
                   className="flex-[3.15]"
                   custom={2}
                   variants={thumbnailImageVariants}
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, margin: "-50px" }}
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.3 }}
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
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.3 }}
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
           <motion.div 
             className="flex flex-row items-center justify-center gap-6 md:gap-12 mb-16"
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
               whileHover={{ scale: 1.03 }}
               transition={{ duration: 0.3 }}
             >
               <h3 className="text-lg md:text-xl font-semibold mb-4" style={{ color: '#004aad' }}>Before</h3>
               <div className="flex flex-row gap-4 md:gap-6 flex-1 max-w-[400px]">
                 <motion.div 
                   className="flex-1"
                   custom={5}
                   variants={thumbnailImageVariants}
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, margin: "-50px" }}
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.3 }}
                 >
                   <Image
                     src="/assets/THUMBNAIL/4.svg"
                     alt="Thumbnail Before"
                     width={200}
                     height={267}
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
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.3 }}
                 >
                   <Image
                     src="/assets/THUMBNAIL/5.svg"
                     alt="Thumbnail Before"
                     width={200}
                     height={267}
                     className="w-full h-auto object-contain"
                   />
                 </motion.div>
               </div>
             </motion.div>

             {/* Connector: Custom Gradient Arrow */}
             <motion.div 
               className="flex items-center justify-center px-4 md:px-8"
               custom={7}
               variants={thumbnailImageVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               whileHover={{ scale: 1.1 }}
               transition={{ duration: 0.3 }}
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
               whileHover={{ scale: 1.03 }}
               transition={{ duration: 0.3 }}
             >
               <h3 className="text-lg md:text-xl font-semibold mb-4" style={{ color: '#004aad' }}>After</h3>
               <div className="flex-1 max-w-[1200px]">
                 <Image
                   src="/assets/THUMBNAIL/6.svg"
                   alt="Thumbnail After"
                   width={1200}
                   height={1600}
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

