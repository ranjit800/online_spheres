"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/Logo2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "AboutUs", path: "/about" },
    { name: "Works", path: "/works" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 px-4 pt-4">
      <div
        className="max-w-7xl mx-auto flex justify-between items-center 
        bg-black/50 backdrop-blur-md border border-[#ffffff14] 
        rounded-full px-6 py-3 shadow-lg"

      >
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Onlinespheres Logo" className="h-10 w-auto" priority />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-10 text-sm text-white">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              className="hover:text-[#543dff] transition font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact Us Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className=" bg-[#4514D0] hover:bg-[#9a7af2] transition text-white px-4 py-2 rounded-md font-medium text-sm shadow">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none z-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleMenu} />}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#120022] backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-4 py-20">
          <nav className="flex flex-col space-y-6 text-white">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm border-b border-gray-700 pb-2"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <button className="mt-4 bg-[#4514D0] hover:bg-[#9a7af2] transition text-white px-4 py-2 rounded-md font-medium text-sm shadow w-full">
                Contact Us
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
