"use client";

import React, { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [videoScale, setVideoScale] = useState(1);
  const [textOpacity, setTextOpacity] = useState(0);
  const [heroTextOpacity, setHeroTextOpacity] = useState(1);
  const [showFinalLayout, setShowFinalLayout] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const alternateWords = ["MARKETING", "STRATEGY", "BRANDING", "GROWTH"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % alternateWords.length);
        setIsAnimating(false);
      }, 600); // animation duration
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

      // Continuous linear scaling from 1.0 to 0.5 across the entire scroll
      const targetScale = Math.max(0.5, 1 - scrollProgress * 0.5); // Linear scale from 1.0 to 0.5
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
          {/* Single video element that transforms smoothly */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              transition: "none", // No CSS transitions - only scroll-driven
            }}
          >
            <div
              className="relative bg-black overflow-hidden shadow-2xl"
              style={{
                width: showFinalLayout ? "160px" : `${100 * videoScale}vw`,
                height: showFinalLayout ? "90px" : `${100 * videoScale}vh`,
                borderRadius:
                  videoScale < 0.8 || showFinalLayout ? "8px" : "0px",
                transform: showFinalLayout ? "translate(0, 0)" : "none",
                transition: "none",
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

          {/* Hero text overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center z-10"
            style={{
              opacity: heroTextOpacity,
              pointerEvents: heroTextOpacity > 0.1 ? "auto" : "none",
              transition: "opacity 0.1s ease-out",
              visibility: heroTextOpacity > 0 ? "visible" : "hidden",
            }}
          >
            <div className="flex flex-col lg:flex-row lg:relative w-full h-full">
              {/* Left side text */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-12 lg:pr-8 xl:pl-16 xl:pr-16 px-4 sm:px-6 md:px-8 relative z-30 mb-8 lg:mb-0 lg:h-screen">
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
                  <h3
                    className="text-3xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[7rem] font-extralight text-white leading-none tracking-widest cursor-pointer absolute top-0 left-0 capitalize drop-shadow-lg"
                    style={{
                      fontFamily: "'PT Sans', sans-serif",
                      letterSpacing: "0.08em",
                      fontStretch: "condensed",
                    }}
                  >
                    <span
                      className={`inline-block transition-all duration-600 ease-in-out ${
                        isAnimating
                          ? "animate-slide-out-up"
                          : "animate-slide-in-up"
                      }`}
                      style={{ display: "inline-block" }}
                      key={index}
                    >
                      {alternateWords[index]}
                    </span>
                  </h3>
                </div>

                {/* CTA Section */}
                <div className="mt-4 lg:mt-2">
                  <button className="bg-white text-black px-6 py-3 font-medium text-sm hover:bg-gray-100 transition-all duration-300 tracking-wide uppercase transform hover:scale-105 hover:shadow-lg">
                    Soar Like an Eagle
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tagline text layout that appears as video settles */}
          <div
            className="absolute inset-0 flex items-center justify-center px-8 z-20"
            style={{
              opacity: textOpacity,
              pointerEvents: showFinalLayout ? "auto" : "none",
              transition: "opacity 0.2s ease-out",
              visibility: textOpacity > 0 ? "visible" : "hidden",
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

                  {/* Video placeholder - actual video is positioned absolutely */}
                  <div
                    className="relative"
                    style={{
                      width: "160px", // Match the final video scale
                      height: "90px", // Match the final video scale
                    }}
                  />

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
            className="absolute bottom-8 left-0 right-0 text-center z-20"
            style={{
              opacity: textOpacity,
              transition: "opacity 0.2s ease-out",
              visibility: textOpacity > 0 ? "visible" : "hidden",
            }}
          >
            <p className="text-sm font-medium text-gray-600 tracking-wider uppercase">
              Brand Strategy • Brand Culture • Brand Innovation • Brand Design •
              Brand Transformation
            </p>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideOutUp {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        .animate-slide-in-up {
          animation: slideInUp 0.6s forwards;
        }

        .animate-slide-out-up {
          animation: slideOutUp 0.6s forwards;
        }
      `}</style>
    </div>
  );
}
