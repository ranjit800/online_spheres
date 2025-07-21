"use client";
import React from "react";
import Image from "next/image";
import background from "@/public/images/HeroSectionImg/bg3.png";

const HeroHome = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen text-white overflow-hidden">
      <Image
        src={background}
        alt="A dark, abstract background with planetary bodies"
        fill
        style={{ objectFit: 'cover' }}
        className=""
        priority
      />

      <div className="relative z-10 flex flex-col items-center text-center p-8 select-none">
        <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
          Everything You Need to <br />
          <span className="text-5xl md:text-7xl lg:text-8xl">Succeed Online</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-300">
          No matter your industry, we build websites tailored to your brand, goals, and audience—seamless, user-friendly, and scalable to help you grow!
        </p>

        <a 
          href="#contact" 
          className="mt-8 text-lg font-semibold flex items-center gap-2 group"
        >
          Book a Meeting
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HeroHome;
