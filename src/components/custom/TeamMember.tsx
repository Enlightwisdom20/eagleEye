"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// rest of your component code...

type TeamMemberProps = {
  name: string;
  role: string;
  image: string;
  objectPosition?: string; // Optional: object position for better image framing
};

export default function TeamMember({
  name,
  role,
  image,
  objectPosition = "center",
}: TeamMemberProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // unobserve once visible to prevent re-trigger
          }
        });
      },
      { threshold: 0.1 } // trigger when 10% visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <article
      ref={ref}
      className={`bg-white w-full max-w-[16rem] h-[20rem] sm:h-[22rem] lg:h-[25rem] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 text-center transform hover:scale-105 relative mx-auto
        ${isVisible ? "fade-in-smooth" : "opacity-0 translate-y-10"}`}
    >
      {/* Image Container */}
      <div className="relative w-full h-[78%] overflow-hidden bg-gray-150">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-all duration-500 hover:scale-110"
          style={{ objectPosition }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
      </div>

      {/* Card Details */}
      <div className="p-3 sm:p-4 lg:p-6">
        <h2
          className="text-base sm:text-lg font-medium text-gray-800 mb-1"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: "500",
          }}
        >
          {name}
        </h2>
        <p
          className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-4"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: "300",
          }}
        >
          {role}
        </p>
      </div>
    </article>
  );
}
