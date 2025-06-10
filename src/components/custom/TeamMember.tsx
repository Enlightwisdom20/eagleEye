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

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <article
      ref={ref}
      className={`bg-white w-full max-w-[16rem] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 text-center transform hover:scale-105 relative mx-auto flex flex-col
        ${isVisible ? "fade-in-smooth" : "opacity-0 translate-y-10"}`}
      style={{ height: "clamp(20rem, 25vw, 26rem)" }}
    >
      {/* Image Container */}
      <div
        className="relative w-full flex-1 overflow-hidden bg-gray-150"
        style={{ minHeight: "70%" }}
      >
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
      <div
        className="px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5 flex flex-col justify-center"
        style={{ minHeight: "30%" }}
      >
        <h2
          className="text-sm sm:text-base lg:text-lg font-medium text-gray-800 mb-1 leading-tight"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: "500",
            lineHeight: "1.2",
          }}
        >
          {name}
        </h2>
        <p
          className="text-xs sm:text-sm text-gray-600 leading-tight"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: "300",
            lineHeight: "1.3",
          }}
        >
          {role}
        </p>
      </div>
    </article>
  );
}
