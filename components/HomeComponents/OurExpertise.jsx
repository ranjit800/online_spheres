"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";

import background from "../../public/images/OurExpertiseImg/background.png";
import fullstackIcon from "../../public/images/OurExpertiseImg/fullstackIcon.png";
import frontendIcon from "../../public/images/OurExpertiseImg/frontendIcon.png";
import backendIcon from "../../public/images/OurExpertiseImg/backendIcon.png";
import marketingIcon from "../../public/images/OurExpertiseImg/marketingIcon.png";
import degitalIcon from "../../public/images/OurExpertiseImg/digitalIcom.png";

const expertiseData = [
  {
    icon: fullstackIcon,
    title: "FULLSTACK DEVELOPMENT",
    description:
      "We build fast, modern web apps using MERN Stack, Next.js, and top tools like Tailwind, Redux, and AWS handling everything from frontend to backend so your product runs smoothly and scales easily.",
  },
  {
    icon: frontendIcon,
    title: "FRONTEND DEVELOPMENT",
    description:
      "We craft modern, responsive interfaces using React, Next.js, and Tailwind CSS, staying aligned with the latest industry trends to deliver fast, accessible, and user-focused frontend experiences.",
  },
  {
    icon: backendIcon,
    title: "BACKEND DEVELOPMENT",
    description:
      "We build powerful, secure backends using Node.js, Express.js, and MongoDB, following the latest best practices to ensure your app runs smoothly, scales effortlessly, and stays protected.",
  },
  {
    icon: degitalIcon,
    title: "DIGITAL MARKETING",
    description:
      "We boost your online presence with smart digital marketing strategies including SEO, content creation, and social media marketing. And yeah, we create damn good content that makes your social media stand out.",
  },
  {
    icon: marketingIcon,
    title: "PAID MARKETING",
    description:
      "We boost your online presence with smart digital marketing strategies including SEO, content creation, and social media marketing. And yeah, we create damn good content that makes your social media stand out.",
  },
];

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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const headerVariants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  hover: {
    rotate: [-6, 6, -6],
    scale: 1.1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.95,
  },
};

// Modern hover colors
const HOVER_BORDER = "hover:border-[#00FFD0]";
const HOVER_TEXT = "group-hover:text-[#00FFD0]";

const Card = ({ item, index }) => (
  <motion.div
    variants={cardVariants}
    whileHover="hover"
    className={`group relative border border-[#02337B] rounded-2xl p-6 backdrop-blur-sm flex flex-col text-left w-full max-w-xs bg-gradient-to-tr from-[#000000]/5 to-[#4511d6b1] transition-all duration-300 ease-out overflow-hidden shadow-lg
        hover:shadow-[0_8px_32px_0_rgba(0,255,208,0.18)] ${HOVER_BORDER} hover:bg-gradient-to-tr hover:from-[#0e1a1a]/60 hover:to-[#00FFD0]/10`}
    style={{ cursor: "pointer" }}
  >
    {/* Animated gradient border effect */}
    <motion.span
      className="pointer-events-none absolute -inset-0.5 z-0 rounded-2xl bg-gradient-to-tr from-[#00FFD0]/40 via-[#0783FF]/20 to-[#4511d6b1]/20 opacity-0 group-hover:opacity-100 blur-[6px] transition-all duration-500"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
    />

    <motion.div
      variants={iconVariants}
      className="relative w-16 h-16 mb-4 z-10 flex items-center justify-center"
      style={{
        backgroundColor: "transparent",
        padding: "10px",
        borderRadius: "12px",
        boxShadow: "0 0 10px rgba(255,255,255,0.2)",
      }}
    >
      <Image src={item.icon} alt={`${item.title} icon`} width={64} height={64} />
    </motion.div>

    <h3 className={`relative z-10 text-lg font-semibold mb-2 transition-colors duration-300 ${HOVER_TEXT}`}>{item.title}</h3>
    <p className={`relative z-10 text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-100`}>{item.description}</p>

    {/* Subtle floating glass effect */}
    <motion.div
      className="pointer-events-none absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
    />

    {/* Glow ring */}
    <motion.div
      className="pointer-events-none absolute -inset-1 rounded-3xl border-2 border-transparent group-hover:border-[#00FFD0]/40 transition-all duration-500"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
    />
  </motion.div>
);

const OurExpertise = () => {
  return (
    <section className="relative py-20 px-4 md:px-12  text-white overflow-hidden">
      <Image src={background} alt="Abstract background" fill className="object-cover z-0 opacity-90" />
      <motion.div className="relative z-10 max-w-7xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
        <motion.div className="text-left mb-12" variants={headerVariants}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0783FF] to-[#A100FE]">Expertise</span>
          </h2>
          <p className="mt-2 text-gray-300">We provide the best web technologies present in the market to boost your business</p>
        </motion.div>

        <div className="text-center mb-12">
          {/* Top 3 cards in a row (flex) */}
          <motion.div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center" variants={containerVariants}>
            {expertiseData.slice(0, 3).map((item, index) => (
              <Card key={index} item={item} index={index} />
            ))}
          </motion.div>

          {/* Bottom 2 cards centered (flex) */}
          <motion.div className="flex flex-col items-center mt-8 gap-8 lg:flex-row lg:justify-center" variants={containerVariants}>
            {expertiseData.slice(3).map((item, index) => (
              <Card key={index + 3} item={item} index={index + 3} />
            ))}
          </motion.div>
        </div>

        <motion.div className="flex justify-center" variants={headerVariants}>
          <motion.div className="text-center inline-block" variants={buttonVariants} whileHover="hover" whileTap="tap">
            <a href="#" className="inline-flex items-center gap-2 text-lg font-semibold group">
              VIEW ALL DETAILS
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1 border border-white/50 rounded-full p-1"
                whileHover={{ x: 5 }}
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </motion.svg>
            </a>
            <motion.div className="h-[1px] bg-white mt-1" initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 0.8, delay: 0.5 }} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurExpertise;
