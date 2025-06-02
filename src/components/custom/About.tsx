"use client";

import React, { useState } from "react";
import { PT_Sans, Rouge_Script } from "next/font/google";

const ptSans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const rougeScript = Rouge_Script({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-stone-50 font-sans">
      {/* About Section */}
      <section
        id="about"
        className="overflow-hidden"
        style={{ paddingTop: "50px" }}
      >
        <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24">
          <div className="max-w-full mx-auto w-full">
            {/* Header with Animation */}
            <div className="text-center mb-12 sm:mb-16 md:mb-6 group">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-black mb-3 tracking-wide transform hover:scale-105 transition-all duration-700 cursor-pointer opacity-0 animate-fade-in-up"
                style={{
                  fontFamily: "'PT Sans', sans-serif",
                  letterSpacing: "0.08em",
                  fontStretch: "condensed",
                  animationDelay: "0.2s",
                  animationFillMode: "forwards",
                }}
              >
                About
                <span
                  className="italic font-light text-black ml-2 inline-block transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                  style={{ fontFamily: "'Rouge Script', cursive" }}
                >
                  Us
                </span>
              </h2>
              <div
                className="w-8 h-px bg-black mx-auto transform scale-x-0 animate-expand-width"
                style={{
                  animationDelay: "0.8s",
                  animationFillMode: "forwards",
                }}
              ></div>
            </div>

            {/* Main Story Content */}
            <div
              className="max-w-4xl mx-auto text-center mb-16 sm:mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "1s", animationFillMode: "forwards" }}
            >
              <p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-800 leading-relaxed mb-6 tracking-wide"
                style={{
                  fontFamily: "'PT Sans', sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                At <span className="font-medium text-black">The Eagle Eye</span>
                , we believe great marketing comes from seeing what others
                don't.
              </p>
            </div>

            {/* Enhanced Content Cards */}
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 items-stretch mb-16">
              {/* Vision Card */}
              <div
                className="group bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-xl opacity-0 animate-fade-in-up transform hover:-translate-y-2 transition-all duration-500 relative overflow-hidden border border-stone-100"
                style={{
                  animationDelay: "1.2s",
                  animationFillMode: "forwards",
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-500">
                    <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                  </div>
                  <h3
                    className="text-lg sm:text-xl font-extralight text-black tracking-wide mb-4 relative"
                    style={{
                      fontFamily: "'PT Sans', sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Our Vision
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300">
                    Great marketing comes from seeing what others don't. With
                    over{" "}
                    <span className="font-medium text-black">
                      6 years of experience
                    </span>{" "}
                    working with diverse brands, we help companies spot
                    opportunities and grow with purpose, turning insights into
                    impactful strategies that drive real results.
                  </p>
                </div>
              </div>

              {/* Approach Card */}
              <div
                className="group bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-xl opacity-0 animate-fade-in-up transform hover:-translate-y-2 transition-all duration-500 relative overflow-hidden border border-stone-100"
                style={{
                  animationDelay: "1.4s",
                  animationFillMode: "forwards",
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-600 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-500">
                    <div className="w-4 h-4 bg-white transform rotate-45"></div>
                  </div>
                  <h3
                    className="text-lg sm:text-xl font-extralight text-black tracking-wide mb-4 relative"
                    style={{
                      fontFamily: "'PT Sans', sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Our Approach
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300">
                    We blend creativity with data — like an eagle's sharp vision
                    paired with powerful instincts. Having served{" "}
                    <span className="font-medium text-black">100+ clients</span>
                    , we don't just create campaigns; we craft smart strategies
                    that focus on results that truly matter to your business.
                  </p>
                </div>
              </div>

              {/* Impact Card */}
              <div
                className="group bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-xl opacity-0 animate-fade-in-up transform hover:-translate-y-2 transition-all duration-500 relative overflow-hidden border border-stone-100"
                style={{
                  animationDelay: "1.6s",
                  animationFillMode: "forwards",
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-500">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full ml-1"></div>
                  </div>
                  <h3
                    className="text-lg sm:text-xl font-extralight text-black tracking-wide mb-4 relative"
                    style={{
                      fontFamily: "'PT Sans', sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Our Impact
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300">
                    Across{" "}
                    <span className="font-medium text-black">
                      40+ industries
                    </span>
                    , we've trained{" "}
                    <span className="font-medium text-black">
                      1000+ students and professionals worldwide
                    </span>
                    , sharing the skills they need to stand out in today's
                    digital world — from AI tools to personal branding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes expandWidth {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-expand-width {
          animation: expandWidth 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
