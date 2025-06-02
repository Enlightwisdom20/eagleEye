"use client";
import { useRef, useEffect, useState } from "react";

const ServicesCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Service data
  const services = [
    {
      image: "/images/branding.png",
      title: "Branding Solutions",
      description: [
        "We help build strong brands",
        "through innovative visuals",
        "and clear messaging.",
      ],
    },
    {
      image: "/images/content.png",
      title: "Content Writing",
      description: [
        "Improve your visibility",
        "with strategic SEO techniques",
        "that rank you higher.",
      ],
    },
    {
      image: "/images/event.png",
      title: "Event Marketing",
      description: [
        "Maximize ROI with",
        "data-driven campaigns",
        "and performance insights.",
      ],
    },
    {
      image: "/images/influencer.png",
      title: "Influencer Marketing",
      description: [
        "Create impactful content",
        "that informs and engages",
        "your target audience.",
      ],
    },
    {
      image: "/images/performance.png",
      title: "Performance Marketing",
      description: [
        "Build your online presence",
        "across platforms with",
        "consistent branding.",
      ],
    },
    {
      image: "/images/seo.png",
      title: "SEO Services",
      description: [
        "Build your online presence",
        "across platforms with",
        "consistent branding.",
      ],
    },
    {
      image: "/images/socialmedia.png",
      title: "Social Media Marketing",
      description: [
        "Build your online presence",
        "across platforms with",
        "consistent branding.",
      ],
    },
    {
      image: "/images/video.png",
      title: "Video Production",
      description: [
        "Build your online presence",
        "across platforms with",
        "consistent branding.",
      ],
    },
    {
      image: "/images/website.png",
      title: "Website Development",
      description: [
        "Build your online presence",
        "across platforms with",
        "consistent branding.",
      ],
    },
    {
      image: "/images/whatsap.png",
      title: "Whatsapp Marketing",
      description: [
        "Build your online presence",
        "across platforms with",
        "consistent branding.",
      ],
    },
  ];
  const scrollCarousel = (direction: number) => {
    if (carouselRef.current) {
      // Calculate the exact width of one card including its gap
      const cardWidth = 288; // w-72 = 18rem = 288px
      const gap = 24; // gap-6 = 1.5rem = 24px
      const scrollAmount = cardWidth + gap;

      carouselRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && carouselRef.current) {
        const container = carouselRef.current;
        const isAtEnd =
          Math.ceil(container.scrollLeft + container.offsetWidth) >=
          container.scrollWidth;

        if (isAtEnd) {
          // Reset to start when reaching the end
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollCarousel(1);
        }
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="relative w-full max-w-7xl mx-auto px-4 bg-gradient-to-b from-gray-100 to-white"
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
              className="flex-shrink-0 w-72 flex flex-col items-center text-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className={`max-h-[200px] w-auto object-contain hover:grayscale-0 transition-all duration-300 ${
                  service.title === "Social Media Marketing"
                    ? "max-h-[180px]"
                    : ""
                }`}
              />
              <p className="text-lg font-bold mt-4 uppercase">
                {service.title}
              </p>
              {service.description.map((line, i) => (
                <p key={i} className={i === 0 ? "text-sm mt-2" : "text-sm"}>
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
