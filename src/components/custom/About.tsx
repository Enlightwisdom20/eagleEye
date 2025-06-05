"use client";

import React, { useState, useEffect, useRef } from "react";

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Only apply parallax when section is in view
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        // Calculate how much of the section is visible (0 to 1)
        const visibleRatio = Math.max(
          0,
          Math.min(
            1,
            (windowHeight - sectionTop) / (windowHeight + sectionHeight)
          )
        );
        // Apply a subtle parallax effect only within a small range
        setScrollY(visibleRatio * 50); // Max 50px movement
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen bg-white relative overflow-hidden"
    >
      {/* Split Layout Container */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Half - Parallax Image */}
        <div className="w-full lg:w-2/5 relative h-[48vh] lg:h-[88vh] overflow-hidden ml-0 lg:ml-8">
          <div
            className="absolute inset-0 w-full h-full scale-105 lg:scale-105"
            style={{
              transform: `translateY(${-scrollY}px)`,
            }}
          >
            <video
              src="/about.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{ objectPosition: "center top" }}
              onError={(e) => {
                console.error("Video failed to load:", e);
              }}
            />
            {/* Subtle overlay for better text readability */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Floating brand badge on image */}
          <div className="absolute top-8 left-8 z-10">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse"></div>
              About Us
            </div>
          </div>
        </div>

        {/* Right Half - Content */}
        <div className="w-full lg:w-3/5 flex flex-col justify-center px-6 sm:px-8 lg:px-12 xl:px-16 py-8">
          {/* Header Section */}
          <div className="mb-8">
            <h2
              className="text-2xl sm:text-[2.5rem] font-normal mb-4 text-black leading-none tracking-wider"
              style={{
                fontFamily: "vinila, sans-serif",
                fontStyle: "normal",
                letterSpacing: "0.01em",
                fontWeight: "700",
              }}
            >
              Who We Are,{" "}
              <span
                className="text-gray-700"
                style={{
                  fontFamily: "vinila, sans-serif",
                  fontWeight: "700",
                }}
              >
                Beyond the Lens
              </span>
            </h2>
            <div className="w-12 h-px bg-black"></div>
          </div>

          {/* Main Content */}
          <div className="">
            {/* Key Points */}
            <div className="group">
              <div className="flex items-start gap-4 mb-1">
                <div>
                  <p
                    className="text-gray-600 font-medium text-base leading-relaxed"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: "400",
                    }}
                  >
                    At The Eagle Eye, we believe great marketing comes from
                    seeing what others don’t. With over 6 years of experience
                    working with 100+ clients across 40+ industries, we help
                    brands spot opportunities, craft smart strategies, and grow
                    with purpose.
                    <br />
                    <br />
                    Our strength lies in blending creativity with data — like an
                    eagle’s sharp vision paired with powerful instincts. We
                    don’t just create campaigns; we focus on results that truly
                    matter.
                    <br />
                    <br />
                    We’re also passionate about helping people soar. We’ve
                    trained over 1000+ students and professionals worldwide,
                    sharing the skills they need to stand out in today’s digital
                    world — from AI tools to personal branding.
                    <br />
                    <br />
                    If you want a marketing partner who sees beyond the obvious
                    and helps you rise above the noise, The Eagle Eye is here to
                    guide your flight. Let’s take your brand higher, together.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-6 lg:pt-8">
              <button
                className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm tracking-wide uppercase"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: "500",
                }}
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
