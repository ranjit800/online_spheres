
//------------------------------------------------






// --------------------------------------------------1






// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/autoplay";

// const cards = [
//   { color: "#ff6f61", title: "Card One" },
//   { color: "#6a5acd", title: "Card Two" },
//   { color: "#00ced1", title: "Card Three" },
//   { color: "#f39c12", title: "Card Four" },
//   { color: "#1abc9c", title: "Card Five" },
//   { color: "#e74c3c", title: "Card Six" },
//   { color: "#9b59b6", title: "Card Seven" },
// ];

// const SwiperCard = () => {
//   return (
//     <section className=" mx-auto px-4 md:px-2 py-16 bg-[#0a0a1a] text-white overflow-hidden">
//       <div className="  bg-red-600">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0783FF] to-[#A100FE]">
//             Swiper Card
//           </span>{" "}
//           Showcase
//         </h2>

//         <Swiper
//           modules={[EffectCoverflow, Autoplay]}
//           effect="coverflow"
//           grabCursor={true}
//           centeredSlides={false}
//           loop={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           speed={800}
//           initialSlide={4}
//           slidesPerView={3}
//           spaceBetween={40}
//           coverflowEffect={{
//             rotate: 50,
//             depth: 100,
//             scale: 1,
//             stretch: 0,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           breakpoints={{
//             0: {
//               slidesPerView: 1.1,
//               spaceBetween: 20,
//             },
//             640: {
//               slidesPerView: 1.5,
//               spaceBetween: 30,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 40,
//             },
//           }}
//           className="w-full"
//         >
//           {cards.map((card, idx) => (
//             <SwiperSlide key={idx}>
//               <div
//                 className="h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-md grayscale hover:grayscale-0 transition duration-500"
//                 style={{
//                   background: `linear-gradient(135deg, ${card.color}, #111)`,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <h3 className="text-2xl font-bold">{card.title}</h3>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default SwiperCard;



// "use client";

// import React from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/autoplay";

// // Local Images
// import card1 from "../../public/images/OurCreationsImg/cardImg1.png";
// import card2 from "../../public/images/OurCreationsImg/cardImg2.png";
// import card3 from "../../public/images/OurCreationsImg/cardImg3.png";

// // Cards Data
// const cards = [
//   {
//     src: card1,
//     title: "h-or-g.com Website design",
//     tags: ["SaaS Website", "MERN"],
//   },
//   {
//     src: card2,
//     title: "TourMate Booking Platform",
//     tags: ["Next.js", "Tour App"],
//   },
//   {
//     src: card3,
//     title: "Finance Dashboard UI",
//     tags: ["React.js", "UI/UX"],
//   },
//   {
//     src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop",
//     title: "Team Workflow Manager",
//     tags: ["Collaboration", "Project Tool"],
//   },
//   {
//     src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1170&auto=format&fit=crop",
//     title: "E-commerce Dashboard",
//     tags: ["Next.js", "Admin Panel"],
//   },
//   {
//     src: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=1039&auto=format&fit=crop",
//     title: "Blogging App Design",
//     tags: ["Blog", "Content Platform"],
//   },
// ];

// const OurCreations = () => {
//   return (
//     <section className="w-full px-4 md:px-12 py-20 bg-[#05051A] text-white overflow-hidden rounded-[2rem]">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold">
//               A Glimpse Into{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0783FF] to-[#A100FE]">
//                 Our Creations
//               </span>
//             </h2>
//             <p className="mt-2 text-gray-300 max-w-lg text-sm md:text-base">
//               We believe in creating work that works — visually engaging,
//               user-focused, and built to perform. Here are a few highlights
//               from our journey.
//             </p>
//           </div>

//           <div className="mt-4 md:mt-0 text-right">
//             <a
//               href="#"
//               className="inline-flex items-center gap-2 font-medium group"
//             >
//               View All
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="url(#gradient)"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               >
//                 <defs>
//                   <linearGradient
//                     id="gradient"
//                     x1="0%"
//                     y1="0%"
//                     x2="100%"
//                     y2="0%"
//                   >
//                     <stop offset="0%" stopColor="#0783FF" />
//                     <stop offset="100%" stopColor="#A100FE" />
//                   </linearGradient>
//                 </defs>
//                 <line x1="5" y1="12" x2="19" y2="12" />
//                 <polyline points="12 5 19 12 12 19" />
//               </svg>
//             </a>
//             <div className="h-[2px] w-full mt-1 bg-gradient-to-r from-[#0783FF] to-[#A100FE]" />
//           </div>
//         </div>

//         {/* Swiper */}
//         <div className="relative">
//           <Swiper
//             modules={[Autoplay]}
//             slidesPerView={"auto"}
//             spaceBetween={-300}
//             centeredSlides={false}
//             loop={true}
//             speed={1200}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             className="our-creations-swiper"
//           >
//             {cards.map((card, index) => (
//               <SwiperSlide
//                 key={index}
//                 className="!w-[950px] md:!w-[950px] swiper-slide-custom"
//               >
//                 <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/10 backdrop-blur-xl bg-[#0A0A1F] h-[520px]">
//                   {/* Image */}
//                   {typeof card.src === "string" ? (
//                     <img
//                       src={card.src}
//                       alt={card.title}
//                       className="rounded-2xl w-full h-[400px] md:h-[460px] object-cover"
//                     />
//                   ) : (
//                     <Image
//                       src={card.src}
//                       alt={card.title}
//                       className="rounded-2xl w-full h-[400px] md:h-[460px] object-cover"
//                       placeholder="blur"
//                     />
//                   )}

//                   {/* Footer */}
//                   <div className="text-center py-4 px-4">
//                     <h3 className="text-lg md:text-xl font-semibold mb-2">
//                       {card.title}
//                     </h3>
//                     <div className="flex justify-center gap-2 flex-wrap">
//                       {card.tags.map((tag, i) => (
//                         <span
//                           key={i}
//                           className="px-3 py-1 text-xs rounded-full border border-white/20 bg-white/5 backdrop-blur-md"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>

//       {/* Custom Style: right-aligned active card */}
//       <style jsx global>{`
//         .our-creations-swiper .swiper-slide {
//           opacity: 0.3;
//           transform: scale(0.88);
//           filter: blur(4px);
//           transition: all 0.5s ease;
//         }

//         .our-creations-swiper .swiper-slide-active {
//           opacity: 1 !important;
//           transform: scale(1) !important;
//           filter: none !important;
//           margin-left: auto !important;
//           margin-right: 0 !important;
//           z-index: 10;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default OurCreations;




"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

// Images
import card1 from "../../public/images/OurCreationsImg/cardImg1.png";
import card2 from "../../public/images/OurCreationsImg/cardImg2.png";
import card3 from "../../public/images/OurCreationsImg/cardImg3.png";

// Cards data
const cards = [
  {
    src: card1,
    title: "h-or-g.com Website design",
    tags: ["SaaS Website", "MERN"],
  },
  {
    src: card2,
    title: "TourMate Booking Platform",
    tags: ["Next.js", "Tour App"],
  },
  {
    src: card3,
    title: "Finance Dashboard UI",
    tags: ["React.js", "UI/UX"],
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170",
    title: "Team Workflow Manager",
    tags: ["Collaboration", "Project Tool"],
  },
  {
    src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1170",
    title: "E-commerce Dashboard",
    tags: ["Next.js", "Admin Panel"],
  },
  {
    src: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=1039",
    title: "Blogging App Design",
    tags: ["Blog", "Content Platform"],
  },
];

const OurCreations = () => {
  return (
    <section className="w-full px-4 md:px-12 py-20 bg-[#05051A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              A Glimpse Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0783FF] to-[#A100FE]">
                Our Creations
              </span>
            </h2>
            <p className="mt-2 text-gray-300 max-w-lg text-sm md:text-base">
              We believe in creating work that works — visually engaging,
              user-focused, and built to perform. Here are a few highlights from
              our journey.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-right">
            <a href="#" className="inline-flex items-center gap-2 font-medium group">
              View All
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0783FF" />
                    <stop offset="100%" stopColor="#A100FE" />
                  </linearGradient>
                </defs>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <div className="h-[2px] w-full mt-1 bg-gradient-to-r from-[#0783FF] to-[#A100FE]" />
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            reverseDirection: true, // Make right-to-left scroll
          }}
          speed={1000}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 3,
            slideShadows: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 1.2,
              spaceBetween: -60,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: -150,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: -200,
            },
          }}
          className="w-full pb-10"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative rounded-3xl overflow-hidden shadow-xl border border-white/10 backdrop-blur-xl transition-transform duration-500 hover:scale-[1.01]"
                style={{
                  background: "#0A0A1F",
                  filter: "blur(0px)",
                }}
              >
                {/* Card Image */}
                {typeof card.src === "string" ? (
                  <img
                    src={card.src}
                    alt={card.title}
                    className="rounded-2xl w-full h-[450px] object-cover"
                    style={{ filter: "brightness(0.9)" }}
                  />
                ) : (
                  <Image
                    src={card.src}
                    alt={card.title}
                    className="rounded-2xl w-full h-[450px] object-cover"
                    placeholder="blur"
                  />
                )}

                {/* Card Footer */}
                <div className="text-center py-4 px-4">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {card.title}
                  </h3>
                  <div className="flex justify-center gap-2 flex-wrap">
                    {card.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full border border-white/20 bg-white/5 backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurCreations;







// "use client";

// import React from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/autoplay";

// import card1 from "../../public/images/OurCreationsImg/cardImg1.png";
// import card2 from "../../public/images/OurCreationsImg/cardImg2.png";
// import card3 from "../../public/images/OurCreationsImg/cardImg3.png";

// const cards = [
//   {
//     src: card1,
//     title: "h-or-g.com Website design",
//     tags: ["SaaS Website", "MERN"],
//   },
//   {
//     src: card2,
//     title: "TourMate Booking Platform",
//     tags: ["Next.js", "Tour App"],
//   },
//   {
//     src: card3,
//     title: "Finance Dashboard UI",
//     tags: ["React.js", "UI/UX"],
//   },
//   {
//     src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop",
//     title: "Team Workflow Manager",
//     tags: ["Collaboration", "Project Tool"],
//   },
//   {
//     src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1170&auto=format&fit=crop",
//     title: "E-commerce Dashboard",
//     tags: ["Next.js", "Admin Panel"],
//   },
//   {
//     src: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=1039&auto=format&fit=crop",
//     title: "Blogging App Design",
//     tags: ["Blog", "Content Platform"],
//   },
// ];

// const OurCreations = () => {
//   return (
//     <section className="w-full px-4 md:px-12 py-20 bg-[#05051A] text-white overflow-hidden rounded-[2rem]">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold">
//               A Glimpse Into{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0783FF] to-[#A100FE]">
//                 Our Creations
//               </span>
//             </h2>
//             <p className="mt-2 text-gray-300 max-w-lg text-sm md:text-base">
//               We believe in creating work that works — visually engaging,
//               user-focused, and built to perform. Here are a few highlights from our journey.
//             </p>
//           </div>

//           <div className="mt-4 md:mt-0 text-right">
//             <a href="#" className="inline-flex items-center gap-2 font-medium group">
//               View All
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
//                 stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               >
//                 <defs>
//                   <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                     <stop offset="0%" stopColor="#0783FF" />
//                     <stop offset="100%" stopColor="#A100FE" />
//                   </linearGradient>
//                 </defs>
//                 <line x1="5" y1="12" x2="19" y2="12" />
//                 <polyline points="12 5 19 12 12 19" />
//               </svg>
//             </a>
//             <div className="h-[2px] w-full mt-1 bg-gradient-to-r from-[#0783FF] to-[#A100FE]" />
//           </div>
//         </div>

//         {/* Swiper Section */}
//         <Swiper
//           modules={[Autoplay]}
//           slidesPerView={"auto"}
//           spaceBetween={-300}
//           centeredSlides={false}
//           loop
//           // initialSlide={2}
//           speed={1300}
//           autoplay={{
//             delay: 1800,
//             disableOnInteraction: false,
//             // reverseDirection: false, // ⬅️ makes slides go right ➝ left (default)
//             reverseDirection: true, // 🔁 makes slides go left ➝ 
//           }}
//           className="our-creations-swiper"
//         >
//           {cards.map((card, index) => (
//             <SwiperSlide
//               key={index}
//               className="!w-[950px] md:!w-[950px] swiper-slide-custom "
//             >
//               <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/10 backdrop-blur-xl bg-[#0A0A1F]  h-[520px] flex flex-col justify-between ">
//                 {/* Image */}
//                 {typeof card.src === "string" ? (
//                   <img
//                     src={card.src}
//                     alt={card.title}
//                     className="w-full h-[400px] object-cover rounded-t-3xl"
//                   />
//                 ) : (
//                   <Image
//                     src={card.src}
//                     alt={card.title}
//                     className="w-full h-[400px] object-cover rounded-t-3xl"
//                     placeholder="blur"
//                   />
//                 )}

//                 {/* Title and Tags at Bottom Right */}
//                 <div className="absolute bottom-6 right-6 flex flex-col items-end z-10">
//                   <h3 className="text-xl font-semibold mb-2  px-4 py-2 rounded-lg shadow-lg">{card.title}</h3>
//                   <div className="flex gap-2 flex-wrap justify-end">
//                     {card.tags.map((tag, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1 text-xs rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Swiper Styles for blur and scale */}
//       <style jsx global>{`
//         .our-creations-swiper .swiper-slide {
//           opacity: 0.3;
//           transform: scale(0.85);
//           filter: blur(4px);
//           transition: all 0.5s ease;
//         }
//         .our-creations-swiper .swiper-slide-active {
//           opacity: 1 !important;
//           transform: scale(1) !important;
//           filter: none !important;
//           margin-left: 0 !important;
//           margin-right: auto !important;
//           z-index: 10;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default OurCreations;

