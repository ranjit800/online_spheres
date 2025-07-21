// "use client";

// import React from 'react';
// import Image from "next/image";

// import background from '../../public/images/OurExpertiseImg/background.png';
// import fullstackIcon from '../../public/images/OurExpertiseImg/fullstackIcon.png';
// import frontendIcon from '../../public/images/OurExpertiseImg/frontendIcon.png';
// import backendIcon from '../../public/images/OurExpertiseImg/backendIcon.png';
// import marketingIcon from '../../public/images/OurExpertiseImg/marketingIcon.png';
// import degitalIcon from '../../public/images/OurExpertiseImg/digitalIcom.png';

// const expertiseData = [
//     {
//         icon: fullstackIcon,
//         title: 'FULLSTACK DEVELOPMENT',
//         description: 'We build fast, modern web apps using MERN Stack, Next.js, and top tools like Tailwind, Redux, and AWS handling everything from frontend to backend so your product runs smoothly and scales easily.'
//     },
//     {
//         icon: frontendIcon,
//         title: 'FRONTEND DEVELOPMENT',
//         description: 'We craft modern, responsive interfaces using React, Next.js, and Tailwind CSS, staying aligned with the latest industry trends to deliver fast, accessible, and user-focused frontend experiences.'
//     },
//     {
//         icon: backendIcon,
//         title: 'BACKEND DEVELOPMENT',
//         description: 'We build powerful, secure backends using Node.js, Express.js, and MongoDB, following the latest best practices to ensure your app runs smoothly, scales effortlessly, and stays protected.'
//     },
//     {
//         icon: degitalIcon,
//         title: 'DIGITAL MARKETING',
//         description: 'We boost your online presence with smart digital marketing strategies including SEO, content creation, and social media marketing. And yeah, we create damn good content that makes your social media stand out.'
//     },
//     {
//         icon: marketingIcon,
//         title: 'PAID MARKETING',
//         description: 'We boost your online presence with smart digital marketing strategies including SEO, content creation, and social media marketing. And yeah, we create damn good content that makes your social media stand out.'
//     }
// ];

// const OurExpertise = () => {
//   return (
//     <section className="relative py-20 px-4 md:px-12 bg-[#082462] text-white overflow-hidden">
//         {/* Background image */}
//         <Image
//             src={background}
//             alt="Abstract background"
//             fill
//             className="object-cover z-0"
//         />
//         {/* Black overlay */}
//         <div className="absolute inset-0 bg-black opacity-20 z-0 pointer-events-none"></div>
//         <div className="relative z-10 max-w-7xl mx-auto">
//             <div className="text-left mb-12">
//                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
//                     Our <span className="text-blue-400">Expertise</span>
//                 </h2>
//                 <p className="mt-2 text-gray-300">We provide the best web technologies present in the market to boost your business</p>
//             </div>

//             {/* Cards grid */}
//             <div className="mb-12">
//                 {/* Top 3 cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {expertiseData.slice(0, 3).map((item, index) => (
//                         <div
//                             key={index}
//                             className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex flex-col w-full max-w-xs mx-auto"
//                         >
//                             <div className="w-16 h-16 mb-4">
//                                 <Image src={item.icon} alt={`${item.title} icon`} width={64} height={64} />
//                             </div>
//                             <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//                             <p className="text-sm text-gray-400">{item.description}</p>
//                         </div>
//                     ))}
//                 </div>
//                 {/* Bottom 2 cards centered */}
//                 <div className="flex flex-col items-center mt-8 gap-8 lg:flex-row lg:justify-center">
//                     {expertiseData.slice(3).map((item, index) => (
//                         <div
//                             key={index + 3}
//                             className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex flex-col w-full max-w-xs"
//                         >
//                             <div className="w-16 h-16 mb-4">
//                                 <Image src={item.icon} alt={`${item.title} icon`} width={64} height={64} />
//                             </div>
//                             <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//                             <p className="text-sm text-gray-400">{item.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className="text-center">
//                 <a href="#" className="inline-flex items-center gap-2 text-lg font-semibold group">
//                     VIEW ALL DETAILS
//                     <svg 
//                         xmlns="http://www.w3.org/2000/svg" 
//                         width="24" 
//                         height="24" 
//                         viewBox="0 0 24 24" 
//                         fill="none" 
//                         stroke="currentColor" 
//                         strokeWidth="2" 
//                         strokeLinecap="round" 
//                         strokeLinejoin="round" 
//                         className="transition-transform duration-300 group-hover:translate-x-1 bg-blue-500 rounded-full p-1"
//                     >
//                         <line x1="5" y1="12" x2="19" y2="12"></line>
//                         <polyline points="12 5 19 12 12 19"></polyline>
//                     </svg>
//                 </a>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default OurExpertise;


"use client";

import React from 'react';
import Image from "next/image";

import background from '../../public/images/OurExpertiseImg/background.png';
import fullstackIcon from '../../public/images/OurExpertiseImg/fullstackIcon.png';
import frontendIcon from '../../public/images/OurExpertiseImg/frontendIcon.png';
import backendIcon from '../../public/images/OurExpertiseImg/backendIcon.png';
import marketingIcon from '../../public/images/OurExpertiseImg/marketingIcon.png';
import degitalIcon from '../../public/images/OurExpertiseImg/digitalIcom.png';

const expertiseData = [
    {
        icon: fullstackIcon,
        title: 'FULLSTACK DEVELOPMENT',
        description: 'We build fast, modern web apps using MERN Stack, Next.js, and top tools like Tailwind, Redux, and AWS handling everything from frontend to backend so your product runs smoothly and scales easily.'
    },
    {
        icon: frontendIcon,
        title: 'FRONTEND DEVELOPMENT',
        description: 'We craft modern, responsive interfaces using React, Next.js, and Tailwind CSS, staying aligned with the latest industry trends to deliver fast, accessible, and user-focused frontend experiences.'
    },
    {
        icon: backendIcon,
        title: 'BACKEND DEVELOPMENT',
        description: 'We build powerful, secure backends using Node.js, Express.js, and MongoDB, following the latest best practices to ensure your app runs smoothly, scales effortlessly, and stays protected.'
    },
    {
        icon: degitalIcon,
        title: 'DIGITAL MARKETING',
        description: 'We boost your online presence with smart digital marketing strategies including SEO, content creation, and social media marketing. And yeah, we create damn good content that makes your social media stand out.'
    },
    {
        icon: marketingIcon,
        title: 'PAID MARKETING',
        description: 'We boost your online presence with smart digital marketing strategies including SEO, content creation, and social media marketing. And yeah, we create damn good content that makes your social media stand out.'
    }
];

// Linear gradient with increased transparency (rgba)
const cardGradient = {
    background: "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(68,17,214,0.4) 100%)"
};

const OurExpertise = () => {
  return (
    <section className="relative py-20 px-4 md:px-12 bg-black text-white overflow-hidden">
        <Image
            src={background}
            alt="Abstract background"
            fill
            className="object-cover z-0 opacity-80"
        />
        <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-left mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    Our <span className="text-blue-400">Expertise</span>
                </h2>
                <p className="mt-2 text-gray-300">We provide the best web technologies present in the market to boost your business</p>
            </div>

            <div className="text-center mb-12">
                {/* Top 3 cards in a row (flex) */}
                <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center">
                    {expertiseData.slice(0, 3).map((item, index) => (
                        <div
                            key={index}
                            className="border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex flex-col text-left w-full max-w-xs"
                            style={cardGradient}
                        >
                            <div className="w-16 h-16 mb-4">
                                <Image src={item.icon} alt={`${item.title} icon`} width={64} height={64} />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>
                {/* Bottom 2 cards centered (flex) */}
                <div className="flex flex-col items-center mt-8 gap-8 lg:flex-row lg:justify-center">
                    {expertiseData.slice(3).map((item, index) => (
                        <div
                            key={index + 3}
                            className="border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex flex-col text-left w-full max-w-xs"
                            style={cardGradient}
                        >
                            <div className="w-16 h-16 mb-4">
                                <Image src={item.icon} alt={`${item.title} icon`} width={64} height={64} />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center">
                <a href="#" className="inline-flex items-center gap-2 text-lg font-semibold group">
                    VIEW ALL DETAILS
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
                        className="transition-transform duration-300 group-hover:translate-x-1 bg-blue-500 rounded-full p-1"
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

export default OurExpertise;
