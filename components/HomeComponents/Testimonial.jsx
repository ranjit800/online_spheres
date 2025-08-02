"use client"
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { SiComma } from "react-icons/si";
import star from '../../public/images/star.png';
import { useEffect, useState } from "react";

export const EachTestimonial = ({ isMobile, name, image, desc, thoughts }) => {
  return (
    <div
      className={`flex flex-col items-start rounded-2xl bg-[#080F19] p-8 mx-5 outline shadow-md outline-gray-300 outline-[0.2px] my-2 ${isMobile ? 'w-[calc(100vw-60px)]' : 'w-[350px]'}`}
    >
      <div className="flex items-start rotate-180 mb-3">
        <h1 className="text-primaryCyan text-xl"><SiComma /></h1>
        <h1 className="text-primaryCyan text-xl"><SiComma /></h1>
      </div>
      <h1 className="mb-5 font-semibold text-sm font-poppins">
        {thoughts}
      </h1>
      <div className="flex items-center gap-4">
        <img
          src={image}
          className="w-8 h-8 object-cover rounded-full"
          alt=""
        />
        <div className="flex flex-col">
          <h1 className="text-xs font-bold font-antipasto-pro">{name}</h1>
          <h1 className="text-[11px] text-gray-400 font-antipasto-pro">{desc}</h1>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Effect to check screen size and toggle mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500); // Check if the width is less than 500px (mobile size)
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Update on resize

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-black">
      <div className="flex bh-white flex-col py-20 items-center justify-center container mx-auto space-y-7 px-5">
        <div className="flex items-center gap-3 p-2 px-2 bg-slate-800 rounded-3xl">
          <div className="star p-2 bg-primaryCyan rounded-full">
            <img src={star} className="w-3" alt="" />
          </div>
          <h1 className="text-white text-xs lg:text-sm px-4 font-poppins">
            Rated 4/5 by over 1 lakh users
          </h1>
        </div>

        <h1 className="lg:text-4xl text-3xl text-center font-bold font-poppins text-slate-400">
          Words of praise from <br /> others about our presence.
        </h1>

        {/* First Marquee */}
        <Marquee
          gradient={!isMobile} // No gradient for mobile, true for larger screens
          gradientColor="black"
          loop={0}
          speed={60}
          pauseOnHover={true}
        >
         <EachTestimonial isMobile={isMobile} image="https://images.unsplash.com/photo-1512348685137-98ad6f766061?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" desc="Crypto Investor" thoughts="A visionary team from Kolkata that doesn’t just create visuals – they tell our brand’s story. They understand crypto and our needs perfectly." name="James hemsburg"  />
          <EachTestimonial isMobile={isMobile} image="https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" desc="Crypto Investor" thoughts="Their designs capture our brand's essence. Working with this Kolkata-based team feels seamless and great to invest." name="Partho Sarkar"/>
          <EachTestimonial isMobile={isMobile} image="https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" desc="Crypto Investor" thoughts="Incredible service! The Kolkata team’s visuals connect globally, making them the ideal partner for a crypto brand aiming to stand out" name="Payel Biswas"/>
          <EachTestimonial isMobile={isMobile} image="https://images.unsplash.com/photo-1569918141540-7775b3d11c88?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" desc="Crypto Investor" thoughts="An agency that listens and delivers beyond expectations. They understand crypto and craft visuals that capture exactly what we need." name="Ryan Oscar Williams"/>
          <EachTestimonial isMobile={isMobile} image="https://images.unsplash.com/photo-1568367779668-8356770653a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" desc="Crypto Investor" thoughts="Creative and insightful – they bring an authentic Kolkata touch to our global brand. Perfect partners for any crypto business." name="Sandeep Jaiswal"/>
          <EachTestimonial isMobile={isMobile} image="https://images.unsplash.com/photo-1637610716551-842653094c78?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" desc="Crypto Investor" thoughts="Their designs elevate our crypto brand with a unique touch. This Kolkata-based team really understands what we’re looking for." name="Shojaat Ali"/>
        </Marquee>

        {/* Second Marquee */}
        <Marquee
          gradient={!isMobile} // No gradient for mobile, true for larger screens
          gradientColor="black"
          loop={0}
          speed={60}
          pauseOnHover={true}
          direction="right"
        >
          <EachTestimonial isMobile={isMobile} image="https://images.unsplash.com/photo-1512348685137-98ad6f766061?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" desc="Crypto Investor" thoughts="A visionary team from Kolkata that doesn’t just create visuals – they tell our brand’s story. They understand crypto and our needs perfectly." name="James hemsburg"  />
          <EachTestimonial isMobile={isMobile} image="https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" desc="Crypto Investor" thoughts="Their designs capture our brand's essence. Working with this Kolkata-based team feels seamless and great to invest." name="Partho Sarkar"/>
          <EachTestimonial isMobile={isMobile} image="https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" desc="Crypto Investor" thoughts="Incredible service! The Kolkata team’s visuals connect globally, making them the ideal partner for a crypto brand aiming to stand out" name="Payel Biswas"/>
          <EachTestimonial isMobile={isMobile} image="https://images.unsplash.com/photo-1569918141540-7775b3d11c88?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" desc="Crypto Investor" thoughts="An agency that listens and delivers beyond expectations. They understand crypto and craft visuals that capture exactly what we need." name="Ryan Oscar Williams"/>
          <EachTestimonial isMobile={isMobile} image="https://images.unsplash.com/photo-1568367779668-8356770653a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" desc="Crypto Investor" thoughts="Creative and insightful – they bring an authentic Kolkata touch to our global brand. Perfect partners for any crypto business." name="Sandeep Jaiswal"/>
          <EachTestimonial isMobile={isMobile} image="https://images.unsplash.com/photo-1637610716551-842653094c78?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" desc="Crypto Investor" thoughts="Their designs elevate our crypto brand with a unique touch. This Kolkata-based team really understands what we’re looking for." name="Shojaat Ali"/>
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonial;
