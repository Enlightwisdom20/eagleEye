"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const TrainingComponent = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({
    benefits: false,
    inAction: false,
    curriculum: false,
    tools: false,
  });

  // Mock data for carousel (replace with actual images)
  const carouselImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      caption: "Workshop at Delhi University",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      caption: "Hands-on SEO Training",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      caption: "Group Marketing Strategy Session",
    },
  ];

  // Intersection observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = ["benefits", "inAction", "curriculum", "tools"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Carousel controls
  const nextSlide = () => {
    setActiveSlide((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-gray-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 px-4"
      >
        <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
          Training
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 text-gray-900 leading-tight">
          Training That Transforms Careers
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Empowering the next generation of digital marketers through
          expert-led, practice-based learning.
        </p>
      </motion.div>

      {/* In Action Section */}
      <motion.section
        id="inAction"
        className="mb-24"
        initial={{ opacity: 0 }}
        animate={isVisible.inAction ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-light text-center mb-12">In Action</h2>
        <div className="relative overflow-hidden rounded-lg bg-gray-50">
          <div className="relative h-[400px]">
            {carouselImages.map((image, index) => (
              <motion.div
                key={index}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  activeSlide === index ? "opacity-100" : "opacity-0"
                )}
                initial={false}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 text-white p-4">
                  <p className="text-center">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full text-gray-800 hover:bg-opacity-100 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full text-gray-800 hover:bg-opacity-100 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  activeSlide === index
                    ? "bg-white scale-125"
                    : "bg-white bg-opacity-50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={
          isVisible.inAction ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
        }
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
          Ready to advance your digital marketing career?
        </p>
        <Link href="/training">
          <button className="group inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-gray-900/25 hover:scale-105">
            <span className="mr-2">Explore Our Training Program</span>
            <div className="w-4 h-4 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
          </button>
        </Link>
      </motion.section>
    </div>
  );
};

export default TrainingComponent;
