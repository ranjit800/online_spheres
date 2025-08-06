"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Marquee from "react-fast-marquee"

import mongo from "../../public/images/Technologiya/mongo.png"
import next from "../../public/images/Technologiya/next.png"
import node from "../../public/images/Technologiya/node2.png"
import react from "../../public/images/Technologiya/react.png"
import redux from "../../public/images/Technologiya/redux.png"
import tailwind from "../../public/images/Technologiya/tailwind2.png"

const Technologiya = () => {
   
  return (
    <section className="bg-[#0a0a1a] py-20 text-white w-full">
      <div className=" mx-auto px-4 flex  flex-col gap-5 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0783FF] to-[#A100FE]">Technologies</span>
          <br />We Work In
        </h2>

        <Marquee 
        //    gradient={!isMobile} // No gradient for mobile, true for larger screens
           gradientColor="black"
           loop={0}
           speed={60}
          
        >
          <div className="flex items-center gap-16">
            <Image src={node} alt="Node.js" height={80} className="h-20 w-auto" />
            <Image src={mongo} alt="MongoDB" height={80} className="h-20 w-auto" />
            <Image src={react} alt="React" height={80} className="h-20 w-auto" />
            <Image src={node} alt="Node.js" height={80} className="h-20 w-auto" />
            <Image src={redux} alt="Redux" height={80} className="h-20 w-auto" />
            <Image src={next} alt="Next.js" height={80} className="h-20 w-auto" />
            <Image src={mongo} alt="MongoDB" height={80} className="h-20 w-auto" />
            <Image src={tailwind} alt="Tailwind CSS" height={80} className="h-20 w-auto" />
          </div>
        </Marquee>

        <Marquee 
         gradientColor="black"
         loop={0}
         speed={60}
        
        direction="right">
          <div className="flex items-center gap-16">
            <Image src={node} alt="Node.js" height={80} className="h-20 w-auto" />
            <Image src={mongo} alt="MongoDB" height={80} className="h-20 w-auto" />
            <Image src={react} alt="React" height={80} className="h-20 w-auto" />
            <Image src={node} alt="Node.js" height={80} className="h-20 w-auto" />
            <Image src={redux} alt="Redux" height={80} className="h-20 w-auto" />
            <Image src={next} alt="Next.js" height={80} className="h-20 w-auto" />
            <Image src={mongo} alt="MongoDB" height={80} className="h-20 w-auto" />
            <Image src={tailwind} alt="Tailwind CSS" height={80} className="h-20 w-auto" />
          </div>
        </Marquee>
      </div>
    </section>
  )
}

export default Technologiya;
