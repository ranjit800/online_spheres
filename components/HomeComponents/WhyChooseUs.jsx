"use client";
import React from 'react';
import Image from "next/image";
import centerIcon from '../../public/images/WhyStandOut/centerICON.png';

const whyChooseUsData = [
    {
        title: 'MERN-Powered Site',
        description: 'We use the MERN Stack, one of the most powerful and in-demand technologies today. It’s scalable, secure, and built for performance — perfect for modern businesses. And no, we don’t use WordPress — we build smarter, more custom solutions.'
    },
    {
        title: 'Low Cost & Easy Maintenance',
        description: 'Our development model is cost-effective without compromising quality. We write clean, modular code that makes future updates, edits, or scaling simple and efficient. You save on ongoing costs, avoid technical clutter, and get a system that’s easy for your team to maintain.'
    },
    {
        title: 'Performance & UX Focused',
        description: 'Your website isn’t just a digital brochure – it’s your 24/7 storefront. We ensure it’s lightning-fast, mobile-optimized, SEO-friendly, and offers a smooth user experience that keeps visitors engaged and coming back. From loading speed to visual polish, we focus on what .'
    },
    {
        title: 'Expert Team with End-to-End Support',
        description: 'Our experienced team of developers, designers, and strategists takes care of the entire development process — from UI/UX design and backend APIs to deployment on platforms like AWS or Vercel. We work closely with you at every stage to ensure your project is not only  .'
    }
];

const WhyChooseUs = () => {
  const borderRadiusClasses = [
    'rounded-br-[100px]', // Top-left card
    'rounded-bl-[100px]', // Top-right card
    'rounded-tr-[100px]', // Bottom-left card
    'rounded-tl-[100px]'  // Bottom-right card
  ];

  return (
    <section className=" text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    Why choose us <br /> for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Web Development</span>
                </h2>
                <div className="flex flex-col items-start ">
                  <a href="#" className="hidden md:inline-flex items-center gap-2 text-lg font-semibold group">
                      Talk To An Expert
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
                  <div className="h-0.5 w-full bg-gradient-to-r from-[#0783FF] to-[#A100FE] mt-1"></div>
                </div>
            </div>
                <hr className='w-full border-white/70 my-10' />

            <div className="relative ">
                <div className="md:block hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                    <div className="w-24 h-24">
                        <Image src={centerIcon} alt="Decorative center icon" layout="responsive" width={96} height={96} />
                    </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:flex-wrap gap-8 justify-center ">
                    {whyChooseUsData.map((item, index) => (
                        <div
                          key={index}
                          className={`border border-white/10 p-10 backdrop-blur-sm flex flex-col z-0 md:w-[calc(50%-1rem)] rounded-2xl ${borderRadiusClasses[index]}`}
                          style={{
                            background: "linear-gradient(98deg, rgba(255, 255, 255, 0.1) 0%, rgba(69, 20, 208, 0.1) 50%)"
                          }}
                        >
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
             <div className="text-center mt-12 md:hidden">
                 <a href="#" className="inline-flex items-center gap-2 text-lg font-semibold group">
                    Talk To An Expert
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
                        className="transition-transform duration-300 group-hover:translate-x-1 border border-white/50 rounded-full p-1"
                    >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs;
