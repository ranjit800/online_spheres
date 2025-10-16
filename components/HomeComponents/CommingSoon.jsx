"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo4.png";

const CommingSoon = () => {
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState([]);

  // Simulate loading progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Generate random particles for background
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated particles background */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-[#6338D8] opacity-30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float-particle ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#6338D8]/10 via-transparent to-[#9000FF]/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,56,216,0.1),transparent_50%)]" />
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="scanline" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-6xl px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Logo and visual */}
          <div className="flex flex-col items-center md:items-start space-y-8">
            {/* Logo container with 3D effect */}
            <div className="relative group perspective">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#6338D8] to-[#9000FF] rounded-lg blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000" />
              <div className="relative  p-8  transform-3d">
                <Image src={logo} alt="Online Spheres Logo" width={180} height={180} className="w-40 h-40 md:w-44 md:h-44 object-contain relative z-10 logo-3d" priority />
                {/* Orbiting elements */}
                <div className="absolute inset-0 orbit-container">
                  <div className="orbit orbit-1">
                    <div className="orbit-dot" />
                  </div>
                  <div className="orbit orbit-2">
                    <div className="orbit-dot" />
                  </div>
                  <div className="orbit orbit-3">
                    <div className="orbit-dot" />
                  </div>
                </div>
              </div>
            </div>

            {/* Animated metrics */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-md">
              <div className="metric-card">
                <div className="text-2xl font-bold text-[#6338D8]">{progress}%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Loading</div>
              </div>
              <div className="metric-card">
                <div className="text-2xl font-bold text-[#9000FF]">∞</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Potential</div>
              </div>
              <div className="metric-card">
                <div className="text-2xl font-bold text-[#6338D8]">24/7</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Ready</div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 text-center md:text-left">
            {/* Main Headline with glitch effect */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight glitch-text" data-text="Your Digital Takeoff is Imminent">
              Your Digital Takeoff is <span className="text-gradient">Imminent</span>
            </h1>

            {/* Coming Soon badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#6338D8]/20 to-[#9000FF]/20 border border-[#6338D8]/40 rounded-full backdrop-blur-sm">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6338D8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#9000FF]"></span>
              </div>
              <span className="text-lg md:text-xl font-bold text-white tracking-wide">Coming Soon..</span>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl typewriter">
              Your brand's potential is limitless. We're building the engine to help you conquer the online universe. Explore a new sphere of growth with solutions that are
              powerful, fast, and effective.
            </p>

            {/* Services with hover effects */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <div className="service-badge">
                <span className="text-sm md:text-base font-semibold">Web Development</span>
              </div>
              <div className="service-badge">
                <span className="text-sm md:text-base font-semibold">UI/UX Design</span>
              </div>
              <div className="service-badge">
                <span className="text-sm md:text-base font-semibold">Digital Marketing & Growth</span>
              </div>
            </div>

            {/* Progress bar with percentage */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>System Initialization</span>
                <span className="font-mono">{progress}%</span>
              </div>
              <div className="h-2 bg-gray-900 rounded-full overflow-hidden border border-[#6338D8]/20">
                <div className="h-full bg-gradient-to-r from-[#6338D8] via-[#9000FF] to-[#6338D8] transition-all duration-300 ease-out relative" style={{ width: `${progress}%` }}>
                  <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 pt-4 border-t border-gray-800">
              <a href="mailto:onlinespheres@gmail.com" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#6338D8] transition-all duration-300 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-medium">onlinespheres@gmail.com</span>
              </a>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="inline-flex items-center gap-1">
                  <span className="text-[#6338D8] font-bold">#</span>
                  <span>onlinespheres</span>
                </span>
                <span>•</span>
                <a href="https://www.onlinespheres.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#6338D8] transition-colors">
                  www.onlinespheres.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        .scanline {
          width: 100%;
          height: 2px;
          background: linear-gradient(to bottom, transparent, #6338d8, transparent);
          animation: scan 4s linear infinite;
        }

        @keyframes scan {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        .text-gradient {
          background: linear-gradient(135deg, #6338d8, #9000ff, #6338d8);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease infinite;
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .perspective {
          perspective: 1000px;
        }

        .transform-3d {
          transform-style: preserve-3d;
          transition: transform 0.6s;
        }

        .transform-3d:hover {
          transform: rotateY(5deg) rotateX(5deg);
        }

        .logo-3d {
          animation: logo-float 3s ease-in-out infinite;
        }

        @keyframes logo-float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.05);
          }
        }

        .orbit-container {
          pointer-events: none;
        }

        .orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 1px solid rgba(99, 56, 216, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .orbit-1 {
          width: 120%;
          height: 120%;
          animation: spin 10s linear infinite;
        }

        .orbit-2 {
          width: 140%;
          height: 140%;
          animation: spin 15s linear infinite reverse;
        }

        .orbit-3 {
          width: 160%;
          height: 160%;
          animation: spin 20s linear infinite;
        }

        .orbit-dot {
          width: 6px;
          height: 6px;
          background: #6338d8;
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 10px #6338d8;
        }

        @keyframes spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .metric-card {
          background: linear-gradient(135deg, rgba(99, 56, 216, 0.1), rgba(144, 0, 255, 0.1));
          border: 1px solid rgba(99, 56, 216, 0.2);
          border-radius: 12px;
          padding: 16px 12px;
          text-align: center;
          backdrop-filter: blur(10px);
          transition: all 0.3s;
        }

        .metric-card:hover {
          transform: translateY(-4px);
          border-color: rgba(99, 56, 216, 0.5);
          box-shadow: 0 8px 20px rgba(99, 56, 216, 0.3);
        }

        .service-badge {
          position: relative;
          padding: 12px 24px;
          background: linear-gradient(135deg, rgba(99, 56, 216, 0.15), rgba(144, 0, 255, 0.15));
          border: 1px solid rgba(99, 56, 216, 0.3);
          border-radius: 50px;
          color: white;
          backdrop-filter: blur(10px);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s;
        }

        .service-badge::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .service-badge:hover::before {
          left: 100%;
        }

        .service-badge:hover {
          transform: translateY(-2px);
          border-color: rgba(99, 56, 216, 0.6);
          box-shadow: 0 4px 15px rgba(99, 56, 216, 0.4);
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .glitch-text {
          position: relative;
          animation: glitch-skew 3s infinite;
        }

        @keyframes glitch-skew {
          0% {
            transform: skew(0deg);
          }
          1% {
            transform: skew(-2deg);
          }
          2% {
            transform: skew(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default CommingSoon;
