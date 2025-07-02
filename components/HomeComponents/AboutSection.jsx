import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] px-6 md:px-12 py-20 flex flex-col items-center justify-center text-center bg-[#0B0212] text-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        About <span className="text-[#9B39F2]">OnlineSpheres</span>
      </h2>

      {/* Paragraphs */}
      <div className="max-w-3xl text-white/90 space-y-6 mb-12 text-sm md:text-base">
        <p>
          OnlineSphere is where creativity meets technology. Formed by a group
          of highly talented professionals, we came together with a shared
          vision to empower businesses in the digital space with cutting-edge
          solutions and impactful online presence.
        </p>
        <p>
          With expertise in MERN Stack, Next.js, and AWS, we craft high
          performance websites and web applications that are fast, scalable,
          and user focused. But we don’t stop at development, our services
          extend to social media marketing, SEO, content writing, and
          performance marketing to help you grow, engage, and convert your
          audience effectively.
        </p>
      </div>

      {/* Button */}
      <button className="flex items-center gap-3 px-6 py-3 border-2 border-[#9B39F2] text-white rounded-lg hover:bg-[#9B39F2]/10 transition">
        Know More <FaArrowRight size={16} />
      </button>
    </section>
  );
};

export default AboutSection;
