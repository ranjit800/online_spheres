// "use client";
// import React from "react";
// import Image from "next/image";
// import line from "../../public/images/line.png"; // ✅ Don't use '/public' in path if you import like this

// const steps = [
//   {
//     number: "1",
//     title: (
//       <>
//         INITIAL<br />CONSULTATION
//       </>
//     ),
//     description: "We kick things off with a discovery call to understand your goals, target audience, and specific project needs.",
//   },
//   {
//     number: "2",
//     title: (
//       <>
//         RESEARCH &<br />STRATEGY
//       </>
//     ),
//     description: "We dive into market research and competitor analysis to craft a smart development and content strategy that aligns with your brand.",
//   },
//   {
//     number: "3",
//     title: (
//       <>
//         WIREFRAMING &<br />UI/UX DESIGN
//       </>
//     ),
//     description: "Our designers sketch user journeys and build clean, modern wireframes — turning them into high-fidelity UI/UX designs with a focus on user experience.",
//   },
//   {
//     number: "4",
//     title: (
//       <>
//         DEVELOPMENT
//       </>
//     ),
//     description:
//       "Our dev team brings the designs to life using the MERN Stack, Next.js, and other modern tools. We handle everything from the frontend to backend, APIs, and database setup.",
//   },
//   {
//     number: "5",
//     title: (
//       <>
//         TESTING &<br />OPTIMIZATION
//       </>
//     ),
//     description: "We rigorously test for bugs, performance, responsiveness, and SEO readiness — ensuring your site is smooth, fast, and user-friendly across all devices.",
//   },
//   {
//     number: "6",
//     title: (
//       <>
//         LAUNCH &<br />ONGOING SUPPORT
//       </>
//     ),
//     description: "Once everything’s perfect, we go live — and stick around for post-launch support, performance monitoring, and updates as your business grows.",
//   },
// ];

// const CARD_WIDTH = "w-full max-w-[250px] min-w-[140px]"; // reduced width for all cards

// // Define different position values for each card
// const cardPositionStyles = [
//   "relative -top-7 left-24",           // Card 1: default
//   "relative -top-7 left-[78%]",           // Card 2: shifted down and right
//   "relative -top-[127%] left-[325%]",         // Card 3: shifted up and more right
//   "relative -top-[25%] left-[220%]",          // Card 4: shifted down and left
//   "relative -top-2 left-0",          // Card 5: slightly up
//   "relative top-4 left-8",           // Card 6: down and right
// ];

// const IdeaToLaunch = () => {
//   return (
//    <section className="relative py-20 px-4 md:px-12 text-white overflow-hidden container mx-auto h-[100vh] ">
//     <Image
//       src={line}
//       alt="Process line"
//       className="object-cover z-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//     />
//      {/* Title */}
//      <div className="text-center mb-12">
//         <h2 className="text-3xl sm:text-4xl font-bold">
//           Our Process From{" "}
//           <span className="text-gradient bg-gradient-to-r from-[#321190] to-[#035FBA] text-transparent bg-clip-text">
//             Idea To Launch
//           </span>
//         </h2>
//         <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
//           We keep things simple, structured, and transparent — here’s how we
//           bring your ideas to life, step by step, with clarity and care.
//         </p>
//       </div>

//       {/* Steps Grid */}
//       <div className=" grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4 max-w-4xl mx-auto absolute z-10">
//         {steps.map((item, index) => (
//           <div
//             key={index}
//             className={`flex flex-col items-center text-center px-2 ${CARD_WIDTH} mx-auto ${cardPositionStyles[index]}`}
//           >
//             {/* Step Box */}
//             <div className={`flex items-center bg-gradient-to-l from-[#035FBA] to-[#321190] rounded-full py-3 px-4 shadow-lg w-full ${CARD_WIDTH}`}>
//               <div className="w-10 h-10 min-w-10 min-h-10 flex items-center justify-center rounded-full bg-white text-blue-600 font-semibold text-lg mr-3">
//                 {item.number}
//               </div>
//               <p className="text-white text-sm sm:text-sm font-semibold text-left break-words leading-tight">
//                 {item.title}
//               </p>
//             </div>

//             {/* Description */}
//             <p className="mt-4 text-xs text-gray-300 max-w-[220px]">
//               {item.description}
//             </p>
//           </div>
//         ))}
//       </div>
//    </section>
//   );
// };

// export default IdeaToLaunch;

"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Users, Search, PenSquare, Code, TestTube2, Rocket } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Consultation", // Shorter title for tab layout
    description: "We kick things off with a discovery call to understand your goals, target audience, and specific project needs.",
    icon: <Users />,
    image: "/images/step-launch.jpg",
  },
  {
    id: 2,
    title: "Strategy",
    description: "We dive into market research and competitor analysis to craft a smart strategy that aligns with your brand.",
    icon: <Search />,
    image: "/images/step-launch.jpg",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Our designers build clean wireframes and high-fidelity UI/UX designs with a focus on user experience.",
    icon: <PenSquare />,
    image: "/images/step-launch.jpg",
  },
  {
    id: 4,
    title: "Development",
    description: "Our dev team brings the designs to life using modern tools, handling everything from frontend to backend.",
    icon: <Code />,
    image: "/images/step-launch.jpg",
  },
  {
    id: 5,
    title: "Testing",
    description: "We rigorously test for bugs, performance, and responsiveness to ensure your site is fast and user-friendly.",
    icon: <TestTube2 />,
    image: "/images/step-launch.jpg",
  },
  {
    id: 6,
    title: "Launch",
    description: "We go live and stick around for post-launch support, monitoring, and updates as your business grows.",
    icon: <Rocket />,
    image: "/images/step-launch.jpg",
  },
];

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

const IdeaToLaunch = () => {
  const [activeStep, setActiveStep] = useState(steps[0].id);

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep === steps.length ? 1 : prevStep + 1));
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  const activeStepData = useMemo(() => steps.find((s) => s.id === activeStep), [activeStep]);

  return (
    <section className="py-24 px-4 md:px-12 text-white container mx-auto">
      {/* Title */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold">
          Our Process From <span className="text-gradient bg-gradient-to-r from-[#321190] to-[#035FBA] text-transparent bg-clip-text">Idea To Launch</span>
        </h2>
      </div>

      {/* Step Triggers (Tabs) - Horizontal and Clickable */}
      <div className="flex flex-row flex-wrap justify-center gap-2 sm:gap-4 mb-12">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(step.id)}
            className={`flex items-center gap-2 py-2 px-4 rounded-full transition-all duration-300 ${
              activeStep === step.id ? "bg-blue-600 text-white shadow-lg shadow-blue-600/50" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            {React.cloneElement(step.icon, { size: 18 })}
            <span className="font-medium text-sm sm:text-base">{step.title}</span>
          </button>
        ))}
      </div>

      {/* Wide Content Card Area */}
      <div className="relative w-full max-w-4xl mx-auto h-[450px] sm:h-[400px]">
        <AnimatePresence mode="wait">
          {activeStepData && (
            <motion.div
              key={activeStepData.id}
              className="absolute inset-0 w-full h-full flex flex-col md:flex-row items-center gap-8 bg-[#10101d] p-8 rounded-2xl shadow-2xl border border-white/10"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Left side of the card (Image) */}
              <div className="relative w-full md:w-1/2 h-48 md:h-full rounded-lg overflow-hidden flex-shrink-0">
                <Image src={activeStepData.image} alt={activeStepData.title} fill className="object-cover" />
              </div>
              {/* Right side of the card (Text) */}
              <div className="flex flex-col items-start w-full md:w-1/2">
                <h3 className="text-3xl font-bold text-white mb-3">{activeStepData.title}</h3>
                <p className="text-gray-300 text-base">{activeStepData.description}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IdeaToLaunch;

// "use client";
// import React, { useState, useEffect, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { Users, Search, PenSquare, Code, TestTube2, Rocket } from "lucide-react";

// // The `steps` array remains the same
// const steps = [
//   {
//     id: 1,
//     title: "Initial Consultation",
//     description: "We kick things off with a discovery call to understand your goals, target audience, and specific project needs.",
//     icon: <Users />,
//     image: "/images/step-consultation.avif",
//   },
//   {
//     id: 2,
//     title: "Research & Strategy",
//     description: "We dive into market research and competitor analysis to craft a smart strategy that aligns with your brand.",
//     icon: <Search />,
//     image: "/images/step-strategy.avif",
//   },
//   {
//     id: 3,
//     title: "UI/UX Design",
//     description: "Our designers build clean wireframes and high-fidelity UI/UX designs with a focus on user experience.",
//     icon: <PenSquare />,
//     image: "/images/step-design.avif",
//   },
//   {
//     id: 4,
//     title: "Development",
//     description: "Our dev team brings the designs to life using modern tools, handling everything from frontend to backend.",
//     icon: <Code />,
//     image: "/images/step-development.avif",
//   },
//   {
//     id: 5,
//     title: "Testing & Optimization",
//     description: "We rigorously test for bugs, performance, and responsiveness to ensure your site is fast and user-friendly.",
//     icon: <TestTube2 />,
//     image: "/images/step-testing.avif",
//   },
//   {
//     id: 6,
//     title: "Launch & Support",
//     description: "We go live and stick around for post-launch support, monitoring, and updates as your business grows.",
//     icon: <Rocket />,
//     image: "/images/step-launch.jpg",
//   },
// ];

// const contentVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
//   exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
// };

// const IdeaToLaunch = () => {
//   const [activeStep, setActiveStep] = useState(steps[0].id);
//   const [isPaused, setIsPaused] = useState(false); // NEW: State to control autoplay pause

//   // UPDATED: Autoplay logic now respects the `isPaused` state
//   useEffect(() => {
//     let interval;
//     if (!isPaused) {
//       interval = setInterval(() => {
//         setActiveStep(prevStep => (prevStep === steps.length ? 1 : prevStep + 1));
//       }, 2000);
//     }

//     // Cleanup function to clear interval when component unmounts or `isPaused` changes
//     return () => {
//       if (interval) {
//         clearInterval(interval);
//       }
//     };
//   }, [isPaused]); // Re-run this effect whenever `isPaused` changes

//   const activeStepData = useMemo(() => steps.find(s => s.id === activeStep), [activeStep]);

//   return (
//     <section className="py-16 px-4 md:px-12 text-white container mx-auto">
//       {/* Title */}
//       <div className="text-center mb-16 max-w-3xl mx-auto">
//         <h2 className="text-3xl sm:text-5xl font-bold">
//           Our Process From{" "}
//           <span className="text-gradient bg-gradient-to-r from-[#321190] to-[#035FBA] text-transparent bg-clip-text">
//             Idea To Launch
//           </span>
//         </h2>
//       </div>

//       <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

//         {/* UPDATED: Added hover events to the left column */}
//         <div
//           className="flex flex-col lg:col-span-2"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           {steps.map((step) => (
//             <div
//               key={step.id}
//               onClick={() => setActiveStep(step.id)}
//               style={{ cursor: 'pointer' }}
//               className={`flex items-center gap-4 py-6 border-l-2 transition-all duration-300 ${
//                 activeStep === step.id ? "border-blue-500" : "border-gray-700"
//               }`}
//             >
//               <div className={`ml-[-18px] w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
//                 activeStep === step.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50' : 'bg-gray-700 text-gray-400'
//               }`}>
//                 {step.icon}
//               </div>
//               <h4 className={`text-xl font-medium transition-colors duration-300 ${
//                 activeStep === step.id ? 'text-white' : 'text-gray-400'
//               }`}>{step.title}</h4>
//             </div>
//           ))}
//         </div>

//         {/* UPDATED: Added hover events to the right column */}
//         <div
//           className="relative h-[450px] lg:col-span-3"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           <AnimatePresence mode="wait">
//             {activeStepData && (
//               <motion.div
//                 key={activeStepData.id}
//                 className="absolute inset-0 w-full h-full flex flex-col justify-center items-start bg-[#10101d] p-8 rounded-2xl shadow-2xl border border-white/10"
//                 variants={contentVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//               >
//                 <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
//                   <Image
//                     src={activeStepData.image}
//                     alt={activeStepData.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-2">{activeStepData.title}</h3>
//                 <p className="text-gray-300">{activeStepData.description}</p>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IdeaToLaunch;
