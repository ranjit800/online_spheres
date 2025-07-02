import React from "react";
import Image from "next/image";

// Images (replace with actual paths if different)
import UIUX from "@/public/images/WhyStandOut/uiux.png";
import Backend from "@/public/images/WhyStandOut/backend.png";
import Animation from "@/public/images/WhyStandOut/animation.png";
import SEO from "@/public/images/WhyStandOut/seo.png";

const features = [
  {
    title: "Unmatched UI/UX",
    desc: "We design intuitive, modern interfaces that not only look stunning but also offer a seamless user journey across all devices.",
    color: "bg-[#2B50C9]",
    img: UIUX,
  },
  {
    title: "Fast & Secure Backend",
    desc: "Powered by Node.js and Express, our backend architecture is built for speed, scalability, and top tier security, so your app performs under any load.",
    color: "bg-[#F9B233]",
    img: Backend,
  },
  {
    title: "Industry Leading Animations",
    desc: "From micro-interactions to full-page transitions, we use Framer Motion and the latest animation techniques to bring your site to life with smooth, engaging effects.",
    color: "bg-[#7BCC75]",
    img: Animation,
  },
  {
    title: "SEO Ready Content",
    desc: "We build and write with SEO in mind — clean code, semantic tags, optimized metadata, and content strategies that help your site rank from day one.",
    color: "bg-[#C63F63]",
    img: SEO,
  },
];

const WhyStandOut = () => {
  return (
    <section className="px-4 md:px-12 py-20 bg-[#0B0212] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          Why Our Web Experiences <br />
          <span className="text-[#9B39F2]">Stand Out</span>
        </h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-[#1a1a1a] rounded-2xl">
          {features.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl ${item.color} p-6 flex flex-col justify-between min-h-[280px]`}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl md:text-2xl font-bold max-w-[65%]">{item.title}</h3>
                <div className="w-20 h-20">
                  <Image src={item.img} alt={item.title} className="w-full h-full object-contain" />
                </div>
              </div>
              <p className="text-sm mt-4 opacity-90">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStandOut;
