"use client";
import React from "react";
import Image from "next/image";
import HeroImg from "@/public/images/HeroSectionImg/HeroImg.png";
import bgLayer from "@/public/images/HeroSectionImg/bgLayer.png";


const HeroHome = () => {
  return (
      <section className="relative overflow-hidden min-h-[calc(100vh-50px)] flex items-center justify-center px-6 md:px-0 pt-32 pb-20 bg-[#0B0212] text-white">
    <div className="container mx-auto ">
        {/* Background wave layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgLayer}
          alt="Background Layer"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Text */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Everything <br />
            You Need to <br />
            <span className="text-white">Succeed Online</span>
          </h1>
          <p className="text-base md:text-lg text-white/80 mb-8">
            No matter your industry, we build websites tailored to your brand,
            goals, and audience—seamless, user-friendly, and scalable to help
            you grow!
          </p>
          <div>
            <button className="group relative text-white font-medium flex items-center gap-2 text-sm border-b-2 border-[#D175B6] hover:text-[#D175B6] transition">
              Book a Meeting
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src={HeroImg}
            alt="3D Cubes"
            width={600}
            height={600}
            className="w-full max-w-[500px] h-auto"
            priority
          />
        </div>
      </div>
    </div>
    </section>
  )
}

export default HeroHome
