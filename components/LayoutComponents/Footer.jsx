"use client";

import React from "react";
import Image from "next/image";
import logo from "@/public/images/Logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { PiXLogoFill } from "react-icons/pi";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f001d] to-[#120013] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Left Side (Logo & Description) */}
        <div className="md:col-span-2 space-y-4">
          <Image src={logo} alt="Onlinespheres Logo" className="h-10 w-auto" priority />
          <p className="text-sm text-gray-300 leading-relaxed">
            We’re a team of talented freelancers dedicated to building fast, secure, and scalable websites. From development to content and digital marketing, we deliver creative solutions that help your brand grow, stand out, and succeed in the digital world.
          </p>
          <div className="mt-4">
            <label className="text-xs block mb-2 text-gray-400">Subscribe to get latest updates from us.</label>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your mail address"
                className="px-4 py-2 rounded-l-lg bg-[#1e1e2f] text-sm text-white border border-gray-600 placeholder-gray-400 w-full"
              />
              <button
                type="submit"
                className="bg-[#D175B6] px-4 py-2 rounded-r-lg text-sm font-medium hover:bg-pink-400 transition"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-gray-400">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {["Home", "About Us", "Works", "Blogs", "Contact US", "Careers"].map((item, i) => (
              <li key={i}>
                <Link href="#" className="hover:text-white transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-gray-400">SERVICES</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "Full Stack Development",
              "Front-end Development",
              "Back-end Development",
              "Digital Marketing",
              "Performance Marketing",
              "Support & Maintenance",
            ].map((item, i) => (
              <li key={i}>
                <Link href="#" className="hover:text-white transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal + Contact */}
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-400">LEGAL</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">Terms & Condition</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2 text-gray-400">CONTACTS</h4>
            <p className="text-sm text-gray-300">+91 9679259135</p>
            <p className="text-sm text-gray-300">onlinespheres@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>
          Copyright © <span className="text-[#D175B6]">Onlinespheres</span> {new Date().getFullYear()} | All Rights Reserved
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#"><PiXLogoFill className="text-xl hover:text-white" /></Link>
          <Link href="#"><FaLinkedinIn className="text-xl hover:text-white" /></Link>
          <Link href="#"><FaFacebookF className="text-xl hover:text-white" /></Link>
          <Link href="#"><FaInstagram className="text-xl hover:text-white" /></Link>
        </div>
      </div>
    </footer>
  );
}
