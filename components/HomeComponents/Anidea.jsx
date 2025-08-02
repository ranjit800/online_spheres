import Image from "next/image";
import React from "react";

import toLeftImg from "../../public/images/AnideaImg/firstImg.png";     // HAVE
import toCenterImg from "../../public/images/AnideaImg/secondImg.png"; // an
import toRightImg from "../../public/images/AnideaImg/thirdImg.png";   // idea
import bottomLeftImg from "../../public/images/AnideaImg/fourthImg.png"; // on mind

const Anidea = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-16 text-white">
      <div className="flex flex-col md:flex-row gap-3">
        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col gap-3">
          {/* Top 2 images: HAVE & an */}
          <div className="flex gap-3 h-[250px]">
            {/* HAVE */}
            <div className="relative flex-1 rounded-md overflow-hidden">
              <Image src={toLeftImg} alt="Have" fill className="object-cover" />
              <div className="absolute bottom-4 left-4 text-4xl font-semibold">
                HAVE
              </div>
            </div>

            {/* an */}
            <div className="relative flex-1 rounded-md overflow-hidden">
              <Image src={toCenterImg} alt="an" fill className="object-cover" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-light">
                an
              </div>
            </div>
          </div>

          {/* Bottom Image: on mind */}
          <div className="relative h-[250px] rounded-md overflow-hidden">
            <Image src={bottomLeftImg} alt="on mind" fill className="object-cover" />
            <div className="absolute bottom-4 left-4 flex items-end gap-2">
              <span className="text-5xl font-light">on</span>
              <span className="text-6xl font-extrabold text-white">mind</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex flex-col gap-3">
          {/* Top image: idea */}
          <div className="relative h-[250px] rounded-md overflow-hidden">
            <Image src={toRightImg} alt="idea" fill className="object-cover" />
            <div className="absolute bottom-4 left-4 text-7xl font-extrabold text-yellow-400">
              idea
            </div>
          </div>

          {/* CTA Text */}
          <div className="flex-1 flex items-center justify-center">
            <div className="max-w-md">
              <p className="text-sm md:text-base text-gray-300 mb-4">
                Your next big move starts here. Whether it’s a fresh idea or scaling your business, we’ll craft the tech and strategy to make it happen.
              </p>
              <button className="mt-2 text-sm md:text-base border-b-2 border-white px-2 pb-1 hover:opacity-80 transition-all">
                LET’S HAVE A DISCUSSION →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Anidea;
