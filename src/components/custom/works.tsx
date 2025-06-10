"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedTitle2 from "@/components/ui/AnimatedTitle2";

export default function OurWorksSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Work images from the ourworks folder
  const workImages = [
    "/ourworks/Our Work/w1.jpg",
    "/ourworks/Our Work/w2.jpg",
    "/ourworks/Our Work/w3.jpg",
    "/ourworks/Our Work/w3(1).jpg",
    "/ourworks/Our Work/w4.jpg",
    "/ourworks/Our Work/w5.jpg",
    "/ourworks/Our Work/w6.jpg",
    "/ourworks/Our Work/w7.jpg",
    "/ourworks/Our Work/w8.jpg",
    "/ourworks/Our Work/w10.jpg",
    "/ourworks/Our Work/w11.jpg",
    "/ourworks/Our Work/w12.jpg",
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === workImages.length - 1 ? 0 : prev + 1));
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [workImages.length]);

  // Manual navigation functions
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === workImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? workImages.length - 1 : prev - 1));
  };

  return (
    <section className="w-full py-8 md:py-12 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <AnimatedTitle2
            className="text-2xl sm:text-[2.5rem] font-normal text-gray-900 mb-6 leading-none tracking-wider"
            style={{
              fontFamily: "vinila, sans-serif",
              fontStyle: "normal",
              letterSpacing: "0.01em",
              fontWeight: "700",
            }}
          >
            What{" "}
            <span
              className="text-gray-700"
              style={{
                fontFamily: "vinila, sans-serif",
                fontWeight: "700",
              }}
            >
              Vision
            </span>{" "}
            Looks like in{" "}
            <span
              className="text-gray-700"
              style={{
                fontFamily: "vinila, sans-serif",
                fontWeight: "700",
              }}
            >
              Action
            </span>
          </AnimatedTitle2>
        </div>

        {/* Image Slideshow */}
        <div className="group relative overflow-hidden rounded-2xl bg-gray-50 shadow-lg max-w-5xl mx-auto">
          <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
            {workImages.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                  activeSlide === index ? "opacity-100" : "opacity-0"
                )}
              >
                <img
                  src={image}
                  alt={`Work ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full text-gray-800 hover:bg-white hover:shadow-lg transition-all duration-300 opacity-70 hover:opacity-100 group-hover:opacity-100 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full text-gray-800 hover:bg-white hover:shadow-lg transition-all duration-300 opacity-70 hover:opacity-100 group-hover:opacity-100 z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            {workImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeSlide === index
                    ? "bg-white scale-125 shadow-lg"
                    : "bg-white/50 hover:bg-white/70"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
