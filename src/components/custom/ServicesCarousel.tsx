"use client";
import { useRef, useEffect, useState } from "react";

const ServicesCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    {
      image: "/images/branding.webp",
      title: "Branding Solutions",
      description: ["Build a vibe", "they'll never forget."],
    },
    {
      image: "/images/content.webp",
      title: "Content Writing",
      description: ["Words that click,", "convert, and charm."],
    },
    {
      image: "/images/event.webp",
      title: "Event Marketing",
      description: ["Create buzz,", "fill seats make noise."],
    },
    {
      image: "/images/influencer.webp",
      title: "Influencer Marketing",
      description: ["Real faces,", "real reach, real results."],
    },
    {
      image: "/images/performance.webp",
      title: "Performance Marketing",
      description: [
        "Clicks that count,",
        "metrics that move,",
        "growth that shows.",
      ],
    },
    {
      image: "/images/seo.webp",
      title: "SEO Services",
      description: ["Rank high,", "get found, stay seen."],
    },
    {
      image: "/images/socialmedia.webp",
      title: "Social Media Marketing",
      description: [
        "Scroll-stopping content",
        "for likes, shares,",
        "and loyal fans.",
      ],
    },
    {
      image: "/images/video.webp",
      title: "Video Production",
      description: ["Lights, Camera.", "Stories that actually stick."],
    },
    {
      image: "/images/website.webp",
      title: "Website Development",
      description: ["Designs that wow,", "load fast,", "and convert better."],
    },
    {
      image: "/images/whatsap.webp",
      title: "Whatsapp Marketing",
      description: ["Slide into chats,", "start convos, close deals."],
    },
  ];

  const scrollCarousel = (direction: number) => {
    if (carouselRef.current) {
      const cardWidth = 288;
      const gap = 24;
      const scrollAmount = cardWidth + gap;

      carouselRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && carouselRef.current) {
        const container = carouselRef.current;
        const isAtEnd =
          Math.ceil(container.scrollLeft + container.offsetWidth) >=
          container.scrollWidth;

        if (isAtEnd) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollCarousel(1);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);
  return (
    <div
      className="relative w-full max-w-7xl mx-auto px-4 pb-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left Arrow */}
      <button
        onClick={() => {
          scrollCarousel(-1);
          setIsPaused(true);
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white border rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
        aria-label="Previous services"
      >
        &#10094;
      </button>

      {/* Carousel Container */}
      <div className="overflow-hidden mx-12">
        <div
          ref={carouselRef}
          className="flex gap-6 scrollbar-hide scroll-smooth overflow-x-scroll"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {" "}
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 flex flex-col items-center text-center px-4 py-6 bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              {/* Consistent image container */}
              <div className="h-[200px] flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="max-h-full w-auto object-contain hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-base sm:text-lg font-bold mt-4 uppercase leading-tight">
                {service.title}
              </p>
              {service.description.map((line, i) => (
                <p
                  key={i}
                  className={`text-sm leading-relaxed ${i === 0 ? "mt-2" : ""}`}
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => {
          scrollCarousel(1);
          setIsPaused(true);
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white border rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
        aria-label="Next services"
      >
        &#10095;
      </button>
    </div>
  );
};

export default ServicesCarousel;
