"use client";
import React from "react";
import Image from "next/image";

import UIUX from "@/public/images/WhyStandOut/uiux.png";
import Backend from "@/public/images/WhyStandOut/backend.png";
import Animation from "@/public/images/WhyStandOut/animation.png";
import SEO from "@/public/images/WhyStandOut/seo.png";
import Ringbg from "@/public/images/HeroSectionImg/whyStandBg.png";

const features = [
  {
    title: "Unmatched UI/UX",
    desc: "We design intuitive, modern interfaces that not only look stunning but also offer a seamless user journey across all devices.",
    img: UIUX,
  },
  {
    title: "Fast & Secure Backend",
    desc: "Powered by Node.js and Express, our backend architecture is built for speed, scalability, and top tier security, so your app performs under any load.",
    img: Backend,
  },
  {
    title: "Industry Leading Animations",
    desc: "From micro-interactions to full-page transitions, we use Framer Motion and the latest animation techniques to bring your site to life with smooth, engaging effects.",
    img: Animation,
  },
  {
    title: "SEO Ready Content",
    desc: "We build and write with SEO in mind — clean code, semantic tags, optimized metadata, and content strategies that help your site rank from day one.",
    img: SEO,
  },
];

const WhyStandOut = () => {
  return (
    <section className="relative px-4 md:px-12 py-20  text-white overflow-hidden">
      <Image
        src={Ringbg}
        alt="Abstract background graphic"
        fill
        className="object-cover z-0 "
      />
      <div className="relative max-w-7xl mx-auto z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-12 text-left">
          Why Our Web Experiences <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Stand Out</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#9A9A9A]/20 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex flex-col min-h-[280px]"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl md:text-3xl font-bold max-w-[60%]">
                  {item.title}
                </h3>
                <div className="w-20 h-20 flex-shrink-0">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-300 mt-auto">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStandOut;
