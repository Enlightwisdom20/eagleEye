"use client";
// import { useEffect, useState } from "react";
//
// const ScrollScaleVideo = () => {
//   const [scale, setScale] = useState(1);
//
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       // Limit scale between 1 and 2 based on scroll position
//       const newScale = Math.min(2, 1 + scrollY / 500);
//       setScale(newScale);
//     };
//
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//
//   return (
//     <div className="min-h-[200vh]">
//       <div
//         className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//         style={{ transform: `scale(${scale})` }}
//       >
//         <video
//           src="/output.webm" // replace with actual video path
//           autoPlay
//           loop
//           muted
//           className="w-64 h-64 rounded-lg"
//         />
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect, useRef } from "react";

const ScrollVideoSection = () => {
  const [videoScale, setVideoScale] = useState(0.3);
  const [videoPosition, setVideoPosition] = useState({ x: 0, y: 0 });
  const [textOpacity, setTextOpacity] = useState(0);
  const [showFinalLayout, setShowFinalLayout] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Only calculate when section is in view
      if (sectionTop > viewportHeight || sectionTop + sectionHeight < 0) return;

      // Calculate how much we've scrolled through this section
      const scrollIntoSection = Math.max(0, -sectionTop);
      const maxScroll = sectionHeight - viewportHeight;
      const scrollProgress = Math.min(1, scrollIntoSection / maxScroll);

      // Phase 1: Super quick growth phase (0% to 8% of scroll)
      if (scrollProgress <= 0.08) {
        const growthProgress = scrollProgress / 0.08;
        // Scale from 0.3 to 1.5 (really big at peak)
        const scale = 0.3 + 1.2 * growthProgress;
        setVideoScale(scale);
        setVideoPosition({ x: 0, y: 0 });
        setTextOpacity(0);
        setShowFinalLayout(false);
      }
      // Phase 2: Stay at maximum size for most of the scroll (8% to 87% of scroll)
      else if (scrollProgress <= 0.87) {
        // Stay at maximum scale for majority of scroll
        setVideoScale(1.5);
        setVideoPosition({ x: 0, y: 0 });
        setTextOpacity(0);
        setShowFinalLayout(false);
      }
      // Phase 3: Super quick transition to final position (87% to 92% of scroll)
      else if (scrollProgress <= 0.92) {
        const transitionProgress = (scrollProgress - 0.87) / 0.05;
        // Scale down from 1.5 to 0.4 (smaller final size)
        const scale = 1.5 - 1.1 * transitionProgress;
        setVideoScale(scale);
        setVideoPosition({ x: 0, y: 0 });
        setTextOpacity(transitionProgress * 0.3);
        setShowFinalLayout(transitionProgress > 0.3);
      }
      // Phase 4: Final settled state (92% to 100% of scroll)
      else {
        const finalProgress = (scrollProgress - 0.92) / 0.08;
        setVideoScale(0.4);
        setVideoPosition({ x: 0, y: 0 });
        setTextOpacity(0.3 + 0.7 * finalProgress);
        setShowFinalLayout(true);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  return (
    <div className="">
      {/* Main scroll-driven video section */}
      <section
        ref={sectionRef}
        className="relative"
        style={{ height: "260vh" }} // Tall section for long scroll
      >
        {/* Sticky container for video and text */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Video that scales with scroll */}
          <div
            className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-none ${
              showFinalLayout ? "hidden" : ""
            }`}
            style={{
              transform: `translate(${videoPosition.x}px, ${videoPosition.y}px)`,
              transition: "none", // No CSS transitions - only scroll-driven
            }}
          >
            <div
              className="relative bg-black rounded-lg overflow-hidden shadow-2xl"
              style={{
                width: `${320 * videoScale}px`,
                height: `${180 * videoScale}px`,
                transform: "none", // Remove any additional transforms
              }}
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src="/output.webm" type="video/webm" />
              </video>
            </div>
          </div>

          {/* Text layout that appears as video settles */}
          <div
            className="absolute inset-0 flex items-center justify-center px-8"
            style={{
              opacity: textOpacity,
              pointerEvents: showFinalLayout ? "auto" : "none",
            }}
          >
            <div className="w-full max-w-7xl mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4">
                {/* First line with text and video */}
                <div className="flex items-center justify-center gap-8">
                  {/* "See what others" */}
                  <h1 className="text-3xl lg:text-5xl font-black text-gray-900 leading-none">
                    See what others
                  </h1>

                  {/* Video in the middle */}
                  {showFinalLayout && (
                    <div
                      className="relative bg-black rounded-lg overflow-hidden shadow-2xl"
                      style={{
                        width: `${320 * 0.4}px`,
                        height: `${180 * 0.4}px`,
                      }}
                    >
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                      >
                        <source src="/output.webm" type="video/webm" />
                      </video>
                    </div>
                  )}

                  {/* "miss." */}
                  <h1 className="text-3xl lg:text-5xl font-black text-gray-900 leading-none">
                    miss.
                  </h1>
                </div>

                {/* Second line - "Market smarter." */}
                <div className="flex justify-center">
                  <h1 className="text-3xl lg:text-5xl font-black text-gray-900 leading-none">
                    Market smarter.
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Brand services footer */}
          <div
            className="absolute bottom-8 left-0 right-0 text-center"
            style={{ opacity: textOpacity }}
          >
            <p className="text-sm font-medium text-gray-600 tracking-wider uppercase">
              Brand Strategy • Brand Culture • Brand Innovation • Brand Design •
              Brand Transformation
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default function TagLine() {
  return (
    <div className="w-full">
      <ScrollVideoSection />
    </div>
  );
}
