"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [videoScale, setVideoScale] = useState(1);
  const [textOpacity, setTextOpacity] = useState(0);
  const [heroTextOpacity, setHeroTextOpacity] = useState(1);
  const [showFinalLayout, setShowFinalLayout] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const alternateWords = ["MARKETING", "STRATEGY", "BRANDING", "GROWTH"];
  const [index, setIndex] = useState(0);

  // Track window size for responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % alternateWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [alternateWords.length]);

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

      // Check if we're on mobile (768px is md breakpoint in Tailwind)
      const isMobileCheck = window.innerWidth < 768;

      // Different scaling behavior for mobile vs desktop
      let targetScale;
      if (isMobileCheck) {
        // On mobile, scale down to 0 (disappear completely)
        targetScale = Math.max(0, 1 - scrollProgress);
      } else {
        // On desktop, scale from 1.0 to 0.5
        targetScale = Math.max(0.5, 1 - scrollProgress * 0.5);
      }
      setVideoScale(targetScale);

      // Hero text fades out in first 40% of scroll
      if (scrollProgress <= 0.4) {
        setHeroTextOpacity(Math.max(0, 1 - scrollProgress * 2.5));
        setTextOpacity(0);
        setShowFinalLayout(false);
      }
      // Transition zone where hero text is gone but tagline hasn't appeared (40% to 75%)
      else if (scrollProgress <= 0.75) {
        setHeroTextOpacity(0);
        setTextOpacity(0);
        setShowFinalLayout(false);
      }
      // Tagline starts appearing (75% to 90% of scroll)
      else if (scrollProgress <= 0.9) {
        const taglineProgress = (scrollProgress - 0.75) / 0.15;
        setHeroTextOpacity(0);
        setTextOpacity(taglineProgress * 0.5);
        setShowFinalLayout(taglineProgress > 0.3);
      }
      // Final state with full tagline opacity (90% to 100%)
      else {
        const finalProgress = (scrollProgress - 0.9) / 0.1;
        setHeroTextOpacity(0);
        setTextOpacity(0.5 + 0.5 * finalProgress);
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
    <div className="w-full">
      {/* Combined Hero and Scroll Video Section */}
      <section
        ref={sectionRef}
        className="relative"
        style={{ height: "280vh" }} // Balanced height for smooth transitions
      >
        {/* Sticky container for hero text and video */}
        <div className="sticky top-0 h-screen overflow-hidden bg-stone-50">
          {/* Single video element that transforms smoothly - hidden when final layout is active on desktop */}
          <motion.div
            className={`absolute inset-0 flex items-center justify-center pointer-events-none`}
            style={{
              transition: "none", // No CSS transitions - only scroll-driven
              // Hide the scaling video when final layout is active on desktop
              opacity: showFinalLayout && !isMobile ? 0 : 1,
            }}
          >
            <motion.div
              className="relative bg-black overflow-hidden shadow-2xl"
              style={{
                width: `${100 * videoScale}vw`,
                height: `${100 * videoScale}vh`,
                borderRadius: videoScale < 0.8 ? "8px" : "0px",
                transition: "none",
                // Hide video on mobile when scaled to 0
                opacity: videoScale === 0 ? 0 : 1,
                // Ensure video doesn't interfere when hidden
                pointerEvents: videoScale === 0 ? "none" : "auto",
              }}
              animate={{
                scale: videoScale,
              }}
              transition={{ duration: 0, ease: "linear" }}
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
            </motion.div>
          </motion.div>

          {/* Hero text overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-10"
            animate={{
              opacity: heroTextOpacity,
            }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            style={{
              pointerEvents: heroTextOpacity > 0.1 ? "auto" : "none",
              visibility: heroTextOpacity > 0 ? "visible" : "hidden",
            }}
          >
            <div className="flex flex-col lg:flex-row lg:relative w-full h-full">
              {/* Left side text */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-12 lg:pr-8 xl:pl-16 xl:pr-16 px-4 sm:px-6 md:px-8 relative z-30 mb-8 lg:mb-0 lg:h-screen text-center lg:text-left">
                <h1
                  className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-extralight text-white leading-none tracking-widest hover:text-gray-200 transition-colors duration-500 cursor-pointer mb-2 sm:mb-3 md:mb-4 lg:mb-6 capitalize mt-16 sm:mt-20 md:mt-24 lg:mt-32 drop-shadow-lg"
                  style={{
                    fontFamily: "'PT Sans', sans-serif",
                    letterSpacing: "0.08em",
                    fontStretch: "condensed",
                  }}
                >
                  We
                </h1>

                <h2
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light italic text-white leading-none tracking-wider hover:text-gray-200 transition-colors duration-500 cursor-pointer mb-3 sm:mb-4 md:mb-6 lg:mb-8 capitalize drop-shadow-lg"
                  style={{
                    fontFamily: "'Rouge Script', cursive",
                    letterSpacing: "0.04em",
                    fontStyle: "italic",
                  }}
                >
                  Create
                </h2>

                <div className="relative h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 w-full overflow-visible mb-4 lg:mb-8">
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={index}
                      className="text-3xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[7rem] font-extralight text-white leading-none tracking-widest cursor-pointer absolute top-0 left-0 capitalize drop-shadow-lg"
                      style={{
                        fontFamily: "'PT Sans', sans-serif",
                        letterSpacing: "0.08em",
                        fontStretch: "condensed",
                      }}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      {alternateWords[index]}
                    </motion.h3>
                  </AnimatePresence>
                </div>

                {/* CTA Section */}
                <div className="mt-4 lg:mt-2 flex justify-center lg:justify-start">
                  <button className="bg-white text-black px-6 py-3 font-medium text-sm hover:bg-gray-100 transition-all duration-300 tracking-wide uppercase transform hover:scale-105 hover:shadow-lg">
                    Soar Like an Eagle
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tagline text layout that appears as video settles */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center px-4 md:px-8 z-20"
            animate={{
              opacity: textOpacity,
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              pointerEvents: showFinalLayout ? "auto" : "none",
              visibility: textOpacity > 0 ? "visible" : "hidden",
            }}
          >
            <div className="w-full max-w-7xl mx-auto">
              <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
                {/* Desktop layout: Single line with text and video inline */}
                <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8 flex-wrap">
                  {/* "See what others" */}
                  <h1 className="text-3xl lg:text-4xl xl:text-6xl font-black text-gray-900 leading-none whitespace-nowrap">
                    See what others
                  </h1>

                  {/* Inline video for desktop - only visible when showFinalLayout and not mobile */}
                  {showFinalLayout && !isMobile && (
                    <div
                      className="relative flex-shrink-0 bg-black overflow-hidden shadow-2xl rounded-lg"
                      style={{
                        width: "160px",
                        height: "90px",
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
                  <h1 className="text-3xl lg:text-4xl xl:text-6xl font-black text-gray-900 leading-none whitespace-nowrap">
                    miss.
                  </h1>
                </div>

                {/* Mobile layout: Stacked text, no video */}
                <div className="flex md:hidden flex-col items-center justify-center space-y-1">
                  <h1 className="text-2xl sm:text-3xl font-black text-gray-900 leading-none text-center">
                    See what others miss.
                  </h1>
                </div>

                {/* Second line - "Market smarter." for both layouts */}
                <div className="flex justify-center">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-black text-gray-900 leading-none text-center">
                    Market smarter.
                  </h1>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Brand services footer */}
          <motion.div
            className="absolute bottom-8 left-0 right-0 text-center z-20 px-4"
            animate={{
              opacity: textOpacity,
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              visibility: textOpacity > 0 ? "visible" : "hidden",
            }}
          >
            <p className="text-xs sm:text-sm font-medium text-gray-600 tracking-wider uppercase leading-relaxed">
              Brand Strategy • Brand Culture • Brand Innovation • Brand Design •
              Brand Transformation
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
