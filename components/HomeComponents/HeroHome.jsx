"use client";
import React from "react";
import Lottie from "lottie-react";
import Kinoplau from "@/public/json/KINOPLAU - Possibilities  Update.json";
import Button from "../Ui/Button"; // 👈 import button

const HeroHome = () => {
  return (
    <div className="relative flex items-center justify-center md:min-h-screen text-white overflow-hidden">
      {/* Background animation */}
      <div id="bgImage" className="absolute md:w-[100%] w-full">
        <Lottie animationData={Kinoplau} loop={true} autoplay={true} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center md:p-8 p-2 select-none">
        <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
          Everything You Need to <br />
          <span className="text-5xl md:text-7xl lg:text-8xl">Succeed Online</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-300">
          No matter your industry, we build websites tailored to your brand, goals, and audience—seamless, user-friendly, and scalable to help you grow!
        </p>

        {/* Transparent Button */}
        <div className="mt-10">
          <Button
            text="Book A Meeting"
            circleFrom="from-blue-600"
            circleTo="to-purple-600"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
