

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// rest of your component code...


type TeamMemberProps = {
  name: string;
  role: string;
  image: string;
  imageScale?: string; // Optional: scale, translate-x, etc.
};

export default function TeamMember({
  name,
  role,
  image,
  imageScale = "",
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
      className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 text-center transform hover:scale-105 relative
        ${isVisible ? "fade-in-smooth" : "opacity-0 translate-y-10"}`}
    >
      {/* Image Container */}
      <div className="relative w-full h-[400px] overflow-hidden bg-gray-150 group ">
        <Image
          src={image}
          alt={name}
          fill
          className={`object-contain filter grayscale transition duration-500 group-hover:filter-none ${imageScale}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
      </div>

      {/* Card Details */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">{name}</h2>
        <p className="text-sm text-gray-600 italic mb-4">{role}</p>
      </div>
    </article>
  );
}
