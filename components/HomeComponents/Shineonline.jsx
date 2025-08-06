"use client";

import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import iconOne from "../../public/images/ShineonlineImg/icon1.png";
import iconTwo from "../../public/images/ShineonlineImg/icon2.png";
import iconThree from "../../public/images/ShineonlineImg/icon3.png";
import iconFour from "../../public/images/ShineonlineImg/icon4.png";
import iconBg from "../../public/images/ShineonlineImg/iconBg.png";

const features = [
  {
    icon: iconOne,
    title: "STRATEGIC PLANNING",
    desc: "Tailored campaigns for maximum reach & engagement",
  },
  {
    icon: iconTwo,
    title: "CONTENT THAT CONVERTS",
    desc: "Eye-catching visuals & compelling copy",
  },
  {
    icon: iconThree,
    title: "CONSISTENT GROWTH",
    desc: "Data driven insights to expand your audience",
  },
  {
    icon: iconFour,
    title: "MULTI PLATFORM MANAGEMENT",
    desc: "From Facebook to LinkedIn, we've got you covered",
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const featureVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 14 } },
};

const iconVariants = {
  rest: { scale: 1, rotate: 0, filter: "drop-shadow(0 0 0px #8e1aff00)" },
  hover: {
    scale: 1.12,
    rotate: 8,
    filter: "drop-shadow(0 0 24px #8e1aff88)",
    transition: { type: "spring", stiffness: 200, damping: 10 },
  },
};

const iconImageVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.15, rotate: 12, transition: { type: "spring", stiffness: 180, damping: 12 } },
};

const iconInnerVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.22, y: -6, transition: { type: "spring", stiffness: 180, damping: 12 } },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { delay: 0.5, type: "spring", stiffness: 80 } },
  hover: { scale: 1.07, borderColor: "#8E1AFF", color: "#8E1AFF" },
};

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

const ShineOnline = () => {
  return (
    <motion.section
      className="max-w-[1200px] mx-auto px-4 py-16 text-white text-center md:h-[100vh] h-auto"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Headings */}
      <motion.h2
        className="text-3xl md:text-4xl font-semibold mb-2"
        variants={headingVariants}
      >
        Grow, Engage <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0783FF] to-[#8E1AFF]">
          & Shine Online
        </span>
      </motion.h2>
      <motion.p
        className="text-gray-300 max-w-xl mx-auto mt-4 mb-14"
        variants={headingVariants}
        transition={{ delay: 0.1 }}
      >
        Stay connected, engage your audience, and grow your online presence effortlessly.
        We handle everything—from content creation to strategy—so you can focus on your business.
      </motion.p>

      {/* Features */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center group"
            variants={featureVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            whileHover="hover"
            animate="rest"
          >
            {/* Icon with Background */}
            <motion.div
              className="relative w-24 h-24 mb-4 transition-transform duration-300"
              variants={iconVariants}
            >
              {/* Unique hover effect: background rotates and glows, icon pops up */}
              <span className="absolute inset-0 rounded-full z-10 pointer-events-none group-hover:shadow-[0_0_32px_8px_rgba(126,34,206,0.4)] transition-all duration-300" />
              <motion.div
                className="absolute inset-0"
                variants={iconImageVariants}
                style={{ zIndex: 1 }}
              >
                <Image
                  src={iconBg}
                  alt="Icon Background"
                  fill
                  className="object-contain"
                  draggable={false}
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center p-3 z-20"
                variants={iconInnerVariants}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className=""
                  draggable={false}
                />
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.h3
              className="text-sm md:text-base font-semibold mb-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            >
              {item.title}
            </motion.h3>
            <motion.p
              className="text-xs md:text-sm text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            >
              {item.desc}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.button
        className="text-sm md:text-base border-b-2 border-white px-3 pb-1 hover:opacity-80 transition-all flex items-center gap-2 mx-auto"
        variants={ctaVariants}
        initial="hidden"
        animate="show"
        whileHover="hover"
      >
        Explore More
        <span className="text-lg">→</span>
      </motion.button>
      <style jsx>{`
        /* Extra unique effect: add a subtle animated gradient ring on hover */
        .group:hover .relative.w-24.h-24::before {
          content: "";
          position: absolute;
          inset: -6px;
          border-radius: 9999px;
          background: conic-gradient(from 0deg, #0783ff, #8e1aff, #0783ff 100%);
          filter: blur(6px);
          opacity: 0.7;
          z-index: 0;
          animation: spin 1.2s linear infinite;
        }
        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </motion.section>
  );
};

export default ShineOnline;
