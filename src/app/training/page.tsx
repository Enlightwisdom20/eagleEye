"use client";

import MindMap from "@/components/custom/mindmap";
import TestimonialsSlideshow from "@/components/custom/testimonials";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  BookOpen,
  School,
  Package,
  Settings,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

const styles = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-300%);
    }
  }
  
  .animate-scroll {
    animation: scroll 60s linear infinite;
  }
  
  // .animate-scroll:hover {
  //   animation-play-state: paused;
  // }
`;

export default function TrainingPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const tools = [
    { name: "Google Analytics", icon: "/svgs/Ganalytics.png" },
    { name: "Meta Ads", icon: "/svgs/meta.png" },
    { name: "Canva", icon: "/svgs/canva.svg" },
    { name: "ChatGPT", icon: "/svgs/ChatGPT-Logo.svg" },
    { name: "Google Workspace", icon: "/svgs/g.webp" },
    { name: "Shopify", icon: "/svgs/shopify_glyph.svg" },
    { name: "Google Trends", icon: "/svgs/Gtrends.png" },
    { name: "MS Office", icon: "/svgs/msOffics.svg" },
    { name: "Zoho Books", icon: "/svgs/zohoBooks.png" },
  ];

  const trainingImages = [
    "/Training Images/IMG-20210219-WA0030.webp",
    "/Training Images/IMG-20210219-WA0036.webp",
    "/Training Images/IMG_20250421_140510172.webp",
    "/Training Images/IMG_20250421_141254404.webp",
    "/Training Images/IMG_20250421_223033130.webp",
    "/Training Images/WhatsApp Image 2025-04-23 at 3.17.57 PM.webp",
    "/Training Images/WhatsApp Image 2025-04-24 at 12.17.08 AM.webp",
    "/Training Images/WhatsApp Image 2025-05-29 at 10.02.01 AM.webp",
    "/Training Images/WhatsApp Image 2025-05-29 at 10.02.02 AM (1).webp",
    "/Training Images/WhatsApp Image 2025-06-05 at 10.59.30 PM.webp",
    "/Training Images/WhatsApp Image 2025-05-29 at 10.02.03 AM (1).webp",
    "/Training Images/WhatsApp Image 2025-05-29 at 10.02.03 AM.webp",
    "/Training Images/WhatsApp Image 2025-06-05 at 10.59.30 PM (1).webp",
    "/Training Images/WhatsApp Image 2025-05-29 at 10.08.45 AM (1).webp",
    "/Training Images/WhatsApp Image 2025-05-29 at 10.08.45 AM.webp",
    "/Training Images/WhatsApp Image 2025-05-29 at 10.08.46 AM.webp",
  ];

  const features = [
    {
      title: "6+ Years of Training",
      icon: <Calendar className="w-6 h-6 text-gray-700" />,
    },
    {
      title: "Offline and Online Mode",
      icon: <Users className="w-6 h-6 text-gray-700" />,
    },
    {
      title: "End to End Training",
      icon: <BookOpen className="w-6 h-6 text-gray-700" />,
    },
    {
      title: "Top Universities Sessions",
      icon: <School className="w-6 h-6 text-gray-700" />,
    },
    {
      title: "1000+ Students and Professionals Trained",
      icon: <Users className="w-6 h-6 text-gray-700" />,
    },
    {
      title: "Complete Resources",
      icon: <Package className="w-6 h-6 text-gray-700" />,
    },
    {
      title: "Customizable Curriculum",
      icon: <Settings className="w-6 h-6 text-gray-700" />,
    },
  ];

  return (
    <div className="w-full h-screen bg-white">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      {/* Banner Section */}
      <section className="w-full h-screen relative overflow-hidden bg-[url('/bg.webp')] bg-cover bg-center bg-no-repeat contrast-125">
        {/* Background Image */}
        {/* <div className="absolute inset-0 z-0">
          <Image
            src="/tagline.png?height=800&width=1600"
            alt="Digital Marketing Training Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-gray-50/80" />
        </div> */}

        <div className="w-full h-full flex flex-col justify-between bg-gray-900/45 py-8 md:py-12">
          {/* Content - Centered */}
          <div className="flex-1 flex items-center justify-center px-4 md:px-6 relative z-10">
            <div className="container mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <AnimatedTitle
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight md:leading-none tracking-wider mb-6 drop-shadow-lg px-4"
                  style={{
                    fontFamily: "var(--font-inter)",
                    letterSpacing: "0.05em",
                    fontWeight: "900",
                  }}
                >
                  Build Your Digital Empire with the Eyes of an Expert
                </AnimatedTitle>
              </div>
            </div>
          </div>

          {/* Sliding Component - Near bottom but not at the very bottom */}
          <div className="relative overflow-hidden pb-8 md:pb-12">
            <div className="flex animate-scroll">
              {/* First set of features */}
              {features.map((feature, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center gap-2 md:gap-3 h-12 md:h-16 w-72 md:w-96 mx-2 md:mx-4 bg-gradient-to-br from-white to-gray-50 rounded-xl px-3 md:px-4 py-2 md:py-3 border border-gray-100 shadow-sm flex-shrink-0"
                >
                  <div className="bg-gray-50 rounded-full p-1.5 md:p-2 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-normal text-gray-900 whitespace-nowrap pr-2 md:pr-3">
                    {feature.title}
                  </h3>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {features.map((feature, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center gap-2 md:gap-3 h-12 md:h-16 w-72 md:w-96 mx-2 md:mx-4 bg-gradient-to-br from-white to-gray-50 rounded-xl px-3 md:px-4 py-2 md:py-3 border border-gray-100 shadow-sm flex-shrink-0"
                >
                  <div className="bg-gray-50 rounded-full p-1.5 md:p-2 w-7 h-7 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-normal text-gray-900 whitespace-nowrap pr-2 md:pr-3">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
            {/* <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" /> */}
          </div>
        </div>
      </section>

      <MindMap />

      {/* Tools Section */}
      <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white mb-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <AnimatedTitle
              className="text-2xl sm:text-[2.5rem] font-normal text-gray-900 mb-4 leading-none tracking-wider"
              style={{
                fontFamily: "var(--font-inter)",
                fontStyle: "normal",
                letterSpacing: "0.01em",
                fontWeight: "700",
              }}
            >
              Tools We{" "}
              <span
                className="text-gray-700"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: "700",
                }}
              >
                Cover
              </span>
            </AnimatedTitle>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{
                fontFamily: "var(--font-playfair)",
                letterSpacing: "0.01em",
                fontWeight: "400",
              }}
            >
              Master the essential platforms and technologies that drive
              successful digital marketing campaigns.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center h-28"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center h-16 w-16 mb-3">
                  <img
                    src={tool.icon || "/placeholder.svg"}
                    alt={tool.name}
                    className={
                      tool.name === "Google Analytics"
                        ? "max-h-18 max-w-18 object-contain"
                        : "max-h-14 max-w-14 object-contain"
                    }
                  />
                </div>
                <p className="text-sm text-center text-gray-600 leading-tight">
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialsSlideshow />

      {/* Training Gallery Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <AnimatedTitle
              className="text-2xl sm:text-[2.5rem] font-normal text-gray-900 mb-4 leading-none tracking-wider"
              style={{
                fontFamily: "var(--font-inter)",
                fontStyle: "normal",
                letterSpacing: "0.01em",
                fontWeight: "700",
              }}
            >
              Training{" "}
              <span
                className="text-gray-700"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: "700",
                }}
              >
                Gallery
              </span>
            </AnimatedTitle>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{
                fontFamily: "var(--font-playfair)",
                letterSpacing: "0.01em",
                fontWeight: "400",
              }}
            >
              Glimpses from our training sessions, workshops, and student
              success stories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {trainingImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-50 aspect-square"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Training session ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-5xl max-h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Training session"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              style={{
                maxWidth: "calc(100vw - 4rem)",
                maxHeight: "calc(100vh - 4rem)",
              }}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors shadow-lg"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* End Card / CTA */}
      <section className="w-full py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedTitle
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-white leading-none tracking-wider mb-6"
              style={{
                fontFamily: "var(--font-inter)",
                letterSpacing: "0.05em",
                fontWeight: "400",
              }}
            >
              Build your Empire Now!
            </AnimatedTitle>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-gray-200 leading-relaxed tracking-normal mb-8 max-w-2xl mx-auto"
              style={{
                fontFamily: "var(--font-playfair)",
                letterSpacing: "0.01em",
                fontWeight: "400",
              }}
            >
              Take the first step toward mastering digital marketing with
              personalized guidance from industry experts.
            </p>
            <button
              className="bg-white text-black px-8 py-4 font-medium text-base hover:bg-gray-100 transition-all duration-300 tracking-wider uppercase transform hover:scale-105 hover:shadow-lg rounded-sm"
              style={{
                fontFamily: "var(--font-inter)",
                letterSpacing: "0.1em",
              }}
            >
              Book a call
              <ExternalLink className="ml-2 w-5 h-5 inline" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
