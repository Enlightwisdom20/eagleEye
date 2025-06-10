"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "@/components/ui/AnimatedTitle";

export default function Hero() {
  const [videoScale, setVideoScale] = useState(1);
  const [textOpacity, setTextOpacity] = useState(0);
  const [heroTextOpacity, setHeroTextOpacity] = useState(1);
  const [showFinalLayout, setShowFinalLayout] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };
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
      let scrollProgress = Math.min(1, scrollIntoSection / maxScroll);

      // Check if we're on mobile (768px is md breakpoint in Tailwind)
      const isMobileCheck = window.innerWidth < 768;

      // Accelerate scroll progress on mobile for faster animations
      if (isMobileCheck) {
        // Apply exponential curve to make mobile animations 2-3x faster
        scrollProgress = Math.pow(scrollProgress, 0.4); // Makes progress accelerate faster
      }

      // Different scaling behavior for mobile vs desktop
      let targetScale;
      if (isMobileCheck) {
        // On mobile, scale down to 0 (disappear completely) with faster progression
        targetScale = Math.max(0, 1 - scrollProgress);
      } else {
        // On desktop, scale from 1.0 to 0.5
        targetScale = Math.max(0.5, 1 - scrollProgress * 0.5);
      }
      setVideoScale(targetScale);

      // Hero text fades out in first 40% of scroll (faster on mobile)
      const heroFadeThreshold = isMobileCheck ? 0.25 : 0.4; // Faster fade on mobile
      const transitionStart = isMobileCheck ? 0.6 : 0.75; // Earlier transition on mobile
      const taglineStart = isMobileCheck ? 0.75 : 0.9; // Earlier tagline appearance on mobile

      if (scrollProgress <= heroFadeThreshold) {
        const fadeMultiplier = isMobileCheck ? 4 : 2.5; // Faster fade on mobile
        setHeroTextOpacity(Math.max(0, 1 - scrollProgress * fadeMultiplier));
        setTextOpacity(0);
        setShowFinalLayout(false);
      }
      // Transition zone where hero text is gone but tagline hasn't appeared
      else if (scrollProgress <= transitionStart) {
        setHeroTextOpacity(0);
        setTextOpacity(0);
        setShowFinalLayout(false);
      }
      // Tagline starts appearing
      else if (scrollProgress <= taglineStart) {
        const transitionRange = isMobileCheck ? 0.15 : 0.15;
        const taglineProgress =
          (scrollProgress - transitionStart) / transitionRange;
        setHeroTextOpacity(0);
        setTextOpacity(taglineProgress * 0.5);
        setShowFinalLayout(taglineProgress > 0.3);
      }
      // Final state with full tagline opacity
      else {
        const finalRange = isMobileCheck ? 0.25 : 0.1;
        const finalProgress = (scrollProgress - taglineStart) / finalRange;
        setHeroTextOpacity(0);
        setTextOpacity(0.5 + 0.5 * Math.min(1, finalProgress));
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
        style={{
          height: isMobile ? "200vh" : "280vh", // Reduced height on mobile for faster scroll
        }}
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
            {" "}
            <div className="flex flex-col w-full h-full">
              {/* Full width text container */}
              <div className="w-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 relative z-30 mb-8 lg:mb-0 lg:h-screen text-left pt-20">
                <AnimatedTitle
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-none tracking-wider hover:text-gray-200 transition-colors duration-500 cursor-pointer mb-2 sm:mb-3 md:mb-4 lg:mb-6 mt-8 drop-shadow-lg"
                  style={{
                    fontFamily: "var(--font-inter)",
                    letterSpacing: "0.01em",
                    fontWeight: "600",
                  }}
                  delay={0}
                >
                  Not Just
                </AnimatedTitle>
                <AnimatedTitle
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-gray-300 leading-none tracking-wider hover:text-gray-200 transition-colors duration-500 cursor-pointer mb-3 sm:mb-4 md:mb-6 lg:mb-8 drop-shadow-lg"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    letterSpacing: "0.02em",
                    fontWeight: "500",
                  }}
                  delay={0.3}
                >
                  Branding
                </AnimatedTitle>
                <AnimatedTitle
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight tracking-tight drop-shadow-lg mb-2 lg:mb-3"
                  style={{
                    fontFamily: "var(--font-inter)",
                    letterSpacing: "0.01em",
                    fontWeight: "600",
                  }}
                  delay={0.6}
                >
                  Surveillance Level Strategy
                </AnimatedTitle>
                {/* Subtitle text */}
                <div className="mb-6 lg:mb-8">
                  <AnimatedTitle
                    className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal text-white leading-relaxed tracking-normal drop-shadow-lg"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      letterSpacing: "0.01em",
                      fontWeight: "400",
                    }}
                    delay={0.9}
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
                  </AnimatedTitle>
                </div>{" "}
                {/* CTA Section */}
                <motion.div
                  className="mt-4 lg:mt-2 flex justify-start mb-8"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                >
                  <button
                    className="bg-white text-black px-8 py-4 font-medium text-base hover:bg-gray-100 transition-all duration-300 tracking-wider uppercase transform hover:scale-105 hover:shadow-lg rounded-sm"
                    style={{
                      fontFamily: "var(--font-inter)",
                      letterSpacing: "0.1em",
                    }}
                    onClick={() => scrollToSection("#contact")}
                  >
                    Elevate Your Vision
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Tagline text layout that appears as video settles */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center px-4 md:px-8 z-20 bg-[#E7C280] bg-[url('/FResized.png')] md:bg-[url('/agh.jpeg')] bg-cover md:bg-cover bg-right md:bg-top bg-no-repeat pt-20"
            animate={{
              opacity: textOpacity,
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              pointerEvents: showFinalLayout ? "auto" : "none",
              visibility: textOpacity > 0 ? "visible" : "hidden",
            }}
          ></motion.div>
        </div>
      </section>
    </div>
  );
}
