"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";

export default function HeroPage() {
  // Generate subtle random tilts for each icon (-15 to 15 degrees)
  const iconRotations = useMemo(() => ({
    instagram: Math.random() * 30 - 15,
    photoshop: Math.random() * 30 - 15,
    illustrator: Math.random() * 30 - 15,
    youtube: Math.random() * 30 - 15,
  }), []);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  // Parallax effects - enhanced
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroImageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroImageScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const heroImageRotate = useTransform(scrollYProgress, [0, 1], [0, 2]);
  
  // Icons parallax effects - same as hero image
  const iconsY = useTransform(scrollYProgress, [0, 1], [20, 170]); // Start at 20, end at 170 (150 + 20 offset)
  const iconsOpacity = useTransform(scrollYProgress, [0, 0.5], [0.7, 0]); // Reduced base opacity to 0.7
  const iconsScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const iconsRotate = useTransform(scrollYProgress, [0, 1], [0, 2]);
  
  // Heading scroll effects
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const headingScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  
  // Icons scroll effects
  const leftIconX = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rightIconX = useTransform(scrollYProgress, [0, 1], [0, 50]);
  
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

  const iconVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const iconVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
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

  const heroImageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        delay: 0.3,
      },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };
  
  return (
    <div ref={ref} className="relative min-h-[55vh] md:min-h-screen w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-screen flex flex-col items-center justify-center px-4 py-16">
        {/* Person Image - Positioned to overlap text with masking effect - Part of hero section */}
        <motion.div 
          className="absolute top-[0%] left-[15%] right-[15%] bottom-0 md:inset-0 z-30 flex items-end justify-center"
          variants={heroImageVariants}
          initial="hidden"
          animate="visible"
          style={{
            clipPath: "inset(0% 0% 0% 0%)",
            y: heroImageY,
            opacity: heroImageOpacity,
            scale: heroImageScale,
            rotate: heroImageRotate,
          }}
        >
          <Image
            src="/assets/Hero.svg"
            alt="Person"
            width={1920}
            height={1080}
            className="object-contain w-[70vw] h-[70vh] md:w-full md:h-full translate-y-[30%] md:translate-y-[25%]"
            priority
          />
        </motion.div>

        {/* Main Container */}
        <motion.div 
          className="relative w-full max-w-7xl mx-auto z-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading with Horizontal Gradient - Mask 1 */}
          <motion.div 
            className="relative w-full flex justify-center items-center lg:-mt-32"
            variants={headingVariants}
            style={{
              y: headingY,
              opacity: headingOpacity,
              scale: headingScale,
            }}
          >
            <h1 
              className="font-anton text-[6rem] md:text-[14rem] lg:text-[18rem] leading-none font-bold text-center relative z-0"
              style={{
                background: "linear-gradient(90deg, #004aad 0%, #cb6ce6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SHAWAIZ
            </h1>
          </motion.div>

          {/* Bottom Section with Icons and Labels */}
          <motion.div 
            className="relative w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-[-80px] md:mt-[-120px] lg:mt-[-150px] z-20 px-4"
            variants={containerVariants}
          >
            {/* Left Section - Digital Marketer */}
            <motion.div 
              className="flex flex-col items-start justify-end translate-y-[130px] md:translate-y-0"
              variants={iconVariants}
              style={{ x: leftIconX }}
            >
              {/* Icon - Digital Marketer */}
              <motion.div 
                className="w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-3 relative"
                variants={iconVariants}
              >
                <Image
                  src="/assets/HeroLeft.svg"
                  alt="Digital Marketer Icon"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </motion.div>
              
              {/* Text Label */}
              <motion.div 
                className="font-anton text-base md:text-2xl lg:text-3xl text-left -translate-y-2 md:translate-y-0"
                variants={textVariants}
              >
                <div
                  className="block"
                  style={{
                    background: "linear-gradient(180deg, #004aad 0%, #cb6ce6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: "1.1",
                  }}
                >
                  Digital
                </div>
                <div
                  className="block"
                  style={{
                    background: "linear-gradient(180deg, #004aad 0%, #cb6ce6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: "1.1",
                  }}
                >
                  Marketer
                </div>
              </motion.div>
            </motion.div>

            {/* Center Spacer */}
            <div className="hidden md:block"></div>

            {/* Right Section - Graphic Designer */}
            <motion.div 
              className="flex flex-col items-end justify-end md:col-start-3"
              variants={iconVariantsRight}
              style={{ x: rightIconX }}
            >
              {/* Icon - Graphic Designer */}
              <motion.div 
                className="w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-3 relative"
                variants={iconVariantsRight}
              >
                <Image
                  src="/assets/HeroRight.svg"
                  alt="Graphic Designer Icon"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </motion.div>
              
              {/* Text Label */}
              <motion.div 
                className="font-anton text-base md:text-2xl lg:text-3xl text-right -translate-y-2 md:translate-y-0"
                variants={textVariants}
              >
                <div
                  className="block"
                  style={{
                    background: "linear-gradient(180deg, #004aad 0%, #cb6ce6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: "1.1",
                  }}
                >
                  Graphic
                </div>
                <div
                  className="block"
                  style={{
                    background: "linear-gradient(180deg, #004aad 0%, #cb6ce6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: "1.1",
                  }}
                >
                  Designer
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Social Media & Tools Icons - Individual positioning for mobile */}
        {/* Mobile: All icons centered horizontally at bottom - Grouped for transform */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 flex justify-center items-center gap-4 md:hidden z-30"
          variants={heroImageVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            y: iconsY,
            opacity: iconsOpacity,
            scale: iconsScale,
            rotate: iconsRotate,
            filter: 'blur(1px)',
            transformStyle: 'preserve-3d'
          }} // Same animations as hero image with parallax effects + normal blur
        >
          {/* Instagram Icon - MOBILE - CENTERED */}
          {/* TWEAK MOBILE INSTAGRAM: Size (w-* h-*), Rotation, Image size, Gap spacing */}
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 cursor-pointer"
            variants={socialIconVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ rotate: iconRotations.instagram }} // Random tilt between -15 and 15 degrees
          >
            <Image
              src="/assets/Logo/Instagram_logo_2016.svg"
              alt="Instagram"
              width={56}
              height={56}
              className="w-full h-full object-contain"
            />
          </motion.a>

          {/* Photoshop Icon - MOBILE - CENTERED */}
          {/* TWEAK MOBILE PHOTOSHOP: Size (w-* h-*), Rotation, Image size, Gap spacing */}
          <motion.div
            className="w-14 h-14 cursor-pointer"
            variants={socialIconVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ rotate: iconRotations.photoshop }} // Random tilt between -15 and 15 degrees
          >
            <Image
              src="/assets/Logo/Adobe_Photoshop_CC_icon.svg"
              alt="Photoshop"
              width={56}
              height={56}
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Adobe Illustrator Icon - MOBILE - CENTERED */}
          {/* TWEAK MOBILE ILLUSTRATOR: Size (w-* h-*), Rotation, Image size, Gap spacing */}
          <motion.div
            className="w-14 h-14 cursor-pointer"
            variants={socialIconVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ rotate: iconRotations.illustrator }} // Random tilt between -15 and 15 degrees
          >
            <Image
              src="/assets/Logo/Adobe_Illustrator_CC_icon.svg"
              alt="Adobe Illustrator"
              width={56}
              height={56}
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* YouTube Icon - MOBILE - CENTERED */}
          {/* TWEAK MOBILE YOUTUBE: Size (w-* h-*), Rotation, Image size, Gap spacing */}
          <motion.a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 cursor-pointer"
            variants={socialIconVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ rotate: iconRotations.youtube }} // Random tilt between -15 and 15 degrees
          >
            <Image
              src="/assets/Logo/YouTube_full-color_icon_(2017).svg"
              alt="YouTube"
              width={56}
              height={56}
              className="w-full h-full object-contain"
            />
          </motion.a>
        </motion.div>

        {/* Desktop: Each icon positioned independently - Same style as mobile */}
        <motion.div 
          className="hidden md:block absolute inset-0 z-30 pointer-events-none"
          variants={heroImageVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            y: iconsY,
            opacity: iconsOpacity,
            scale: iconsScale,
            rotate: iconsRotate,
            filter: 'blur(1px)',
            transformStyle: 'preserve-3d'
          }} // Same animations as mobile icons with parallax effects + normal blur
        >
          {/* Instagram Icon - DESKTOP - INDIVIDUAL */}
          {/* TWEAK DESKTOP INSTAGRAM: Position (top/bottom/left/right), Size (w-* h-*), Rotation, Image size */}
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/4 left-8 w-20 h-20 cursor-pointer pointer-events-auto"
            variants={socialIconVariants}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            style={{ rotate: iconRotations.instagram }} // Random tilt between -15 and 15 degrees
          >
            <Image
              src="/assets/Logo/Instagram_logo_2016.svg"
              alt="Instagram"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </motion.a>

          {/* Photoshop Icon - DESKTOP - INDIVIDUAL */}
          {/* TWEAK DESKTOP PHOTOSHOP: Position (top/bottom/left/right), Size (w-* h-*), Rotation, Image size */}
          <motion.div
            className="absolute top-1/4 right-8 w-20 h-20 cursor-pointer pointer-events-auto"
            variants={socialIconVariants}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            style={{ rotate: iconRotations.photoshop }} // Random tilt between -15 and 15 degrees
          >
            <Image
              src="/assets/Logo/Adobe_Photoshop_CC_icon.svg"
              alt="Photoshop"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Adobe Illustrator Icon - DESKTOP - INDIVIDUAL */}
          {/* TWEAK DESKTOP ILLUSTRATOR: Position (top/bottom/left/right), Size (w-* h-*), Rotation, Image size */}
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-20 h-20 cursor-pointer pointer-events-auto -translate-x-1/2 translate-y-1/2"
            variants={socialIconVariants}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            style={{ rotate: iconRotations.illustrator }} // Random tilt between -15 and 15 degrees
          >
            <Image
              src="/assets/Logo/Adobe_Illustrator_CC_icon.svg"
              alt="Adobe Illustrator"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* YouTube Icon - DESKTOP - INDIVIDUAL */}
          {/* TWEAK DESKTOP YOUTUBE: Position (top/bottom/left/right), Size (w-* h-*), Rotation, Image size */}
          <motion.a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-1/4 right-1/4 w-20 h-20 cursor-pointer pointer-events-auto translate-x-1/2 translate-y-1/2"
            variants={socialIconVariants}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            style={{ rotate: iconRotations.youtube }} // Random tilt between -15 and 15 degrees
          >
            <Image
              src="/assets/Logo/YouTube_full-color_icon_(2017).svg"
              alt="YouTube"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}

