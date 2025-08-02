"use client";
import React from 'react';

const AboutSection = () => {
  return (
    <div className="bg-transparent text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          About{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0783FF] to-[#A100FE]">
            OnlineSpheres
          </span>
        </h2>
        <p className="mt-8 text-lg text-gray-300 leading-relaxed">
          OnlineSphere is where creativity meets technology. Formed by a group of highly talented professionals, we came together with a shared vision to empower businesses in the digital space with cutting-edge solutions and impactful online presence.
        </p>
        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          With expertise in MERN Stack, Next.js, and AWS, we craft high performance websites and web applications that are fast, scalable, and user focused. But we don’t stop at development, our services extend to social media marketing, SEO, content writing, and performance marketing to help you grow, engage, and convert your audience effectively.
        </p>
        <div className="mt-10 inline-block">
          <a href="#" className="text-lg font-semibold flex items-center gap-2 group text-white">
            Know More
            <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="30" 
                          height="30" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="transition-transform duration-300 group-hover:translate-x-1 border border-white/50 rounded-full p-1"
                      >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
           
          </a>
          <div className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mt-1"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
