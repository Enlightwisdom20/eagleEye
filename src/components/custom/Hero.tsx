"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [videoScale, setVideoScale] = useState(1);
  const [textOpacity, setTextOpacity] = useState(0);
  const [heroTextOpacity, setHeroTextOpacity] = useState(1);
  const [showFinalLayout, setShowFinalLayout] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

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
                <source src="/E1.mp4" type="video/mp4" />
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
            <div className="flex flex-col w-full h-full">
              {/* Full width text container */}
              <div className="w-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 relative z-30 mb-8 lg:mb-0 lg:h-screen text-left pt-20">
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-white leading-none tracking-wider hover:text-gray-200 transition-colors duration-500 cursor-pointer mb-2 sm:mb-3 md:mb-4 lg:mb-6 mt-8 drop-shadow-lg"
                  style={{
                    fontFamily: "var(--font-inter)",
                    letterSpacing: "0.05em",
                    fontWeight: "400",
                  }}
                >
                  Not Just
                </h1>

                <h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-gray-300 leading-none tracking-wider hover:text-gray-200 transition-colors duration-500 cursor-pointer mb-3 sm:mb-4 md:mb-6 lg:mb-8 drop-shadow-lg"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    letterSpacing: "0.02em",
                    fontWeight: "500",
                  }}
                >
                  Branding
                </h2>

                <h3
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-white leading-tight tracking-tight drop-shadow-lg mb-2 lg:mb-3"
                  style={{
                    fontFamily: "var(--font-inter)",
                    letterSpacing: "0.01em",
                    fontWeight: "300",
                  }}
                >
                  Surveillance Level Strategy
                </h3>

                {/* Subtitle text */}
                <div className="mb-6 lg:mb-8">
                  <h4
                    className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal text-white leading-relaxed tracking-normal drop-shadow-lg"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      letterSpacing: "0.01em",
                      fontWeight: "400",
                    }}
                  >
                    Your Brand,{" "}
                    <span
                      className="text-gray-300"
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontWeight: "400",
                      }}
                    >
                      Seen from the Skies
                    </span>
                    .
                  </h4>
                </div>

                {/* CTA Section */}
                <div className="mt-4 lg:mt-2 flex justify-start mb-8">
                  <button
                    className="bg-white text-black px-8 py-4 font-medium text-base hover:bg-gray-100 transition-all duration-300 tracking-wider uppercase transform hover:scale-105 hover:shadow-lg rounded-sm"
                    style={{
                      fontFamily: "var(--font-inter)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Elevate Your Vision
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tagline text layout that appears as video settles */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center px-4 md:px-8 z-20 bg-[url('/image.webp')] bg-cover bg-center bg-no-repeat pt-20"
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
                        <source src="/E1.mp4" type="video/mp4" />
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
            <p className="text-xs sm:text-sm font-medium text-gray-50 tracking-wider uppercase leading-relaxed">
              The problem isn{"’"}t lack of content, it{"’"}s lack of
              connection. We are here to draw the connection
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
