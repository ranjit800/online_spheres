"use client";
import React, { useState } from "react";
import Image from "next/image";
import leftImg from "../../public/images/FaqImg/faqImg.png";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

const faqData = [
  {
    question: "1. What technologies do you use to build websites?",
    answer:
      "We use MERN Stack (MongoDB, Express.js, React, Node.js), Next.js, Tailwind CSS, and modern libraries to ensure top performance.",
  },
  {
    question: "2. How long does it take to build a website?",
    answer:
      "Typically 2-6 weeks depending on the project's complexity and your responsiveness to feedback.",
  },
  {
    question: "3. Do you offer maintenance after launch?",
    answer:
      "Yes! We offer ongoing support and maintenance packages, so your site stays secure, updated, and running smoothly even after it goes live.",
  },
  {
    question: "4. Is SEO included in the development process?",
    answer:
      "Absolutely. We follow SEO best practices with proper meta tags, performance optimization, and semantic HTML.",
  },
  {
    question: "5. What if I only need frontend or backend, not the full site?",
    answer:
      "No problem. We can work on just the frontend or backend depending on your need.",
  },
  {
    question: "6. Can you help with content and branding too?",
    answer:
      "Yes. Our team includes experts in content writing, branding, and design strategy.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // default first open

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-white md:h-auto md:max-h-[100vh]">
      <div className="rounded-2xl bg-gradient-to-r from-[#0783FF]/50 to-[#200079]/50 p-6 md:p-10 flex flex-col md:flex-row items-center gap-10 border border-gray-600 shadow-xl md:h-[80vh]">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-sm text-gray-300 mb-2">
            Got questions? We've got answers.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="text-purple-400">Questions</span>
          </h2>
          <div className="w-full max-w-sm mx-auto md:mx-0">
            <Image src={leftImg} alt="FAQ" className="w-full h-full" />
          </div>
        </div>

        {/* Right Section - Accordion */}
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-[#0e071e] border border-gray-600 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-sm md:text-base text-white hover:text-purple-400"
              >
                <span
                  className={`transition-colors duration-300 ${
                    openIndex === index ? "text-purple-400" : ""
                  }`}
                >
                  {item.question}
                </span>
                {openIndex === index ? (
                  <MinusIcon className="h-5 w-5 text-purple-400" />
                ) : (
                  <PlusIcon className="h-5 w-5 text-white" />
                )}
              </button>

              {/* Dropdown Content */}
              <div
                className={`transition-all duration-300 ease-in-out px-4 ${
                  openIndex === index
                    ? "max-h-[200px] py-3 opacity-100"
                    : "max-h-0 py-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-sm text-gray-300 bg-[#1b112a] p-3 rounded-md border border-gray-600">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
