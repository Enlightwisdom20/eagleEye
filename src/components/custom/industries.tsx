"use client";

import {
  Heart,
  Home,
  Coffee,
  GraduationCap,
  Monitor,
  Shield,
  Sparkles,
  Calendar,
  Building,
  ShoppingBag,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const industries = [
  {
    icon: Heart,
    title: "Hospitals & Healthcare Providers",
    description: "Comprehensive digital solutions for healthcare organizations",
  },
  {
    icon: Home,
    title: "Interior Design & Architecture",
    description: "Creative marketing strategies for design professionals",
  },
  {
    icon: Coffee,
    title: "Food and Beverage Industry",
    description: "Appetizing campaigns that drive customer engagement",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Innovative approaches to reach students and educators",
  },
  {
    icon: Monitor,
    title: "Technology & SaaS Solutions",
    description: "Data-driven marketing for tech companies and startups",
  },
  {
    icon: Shield,
    title: "Homecare & Wellness Products",
    description: "Trusted marketing for health and wellness brands",
  },
  {
    icon: Sparkles,
    title: "Beauty, Cosmetics & Fashion",
    description: "Stunning campaigns that showcase style and elegance",
  },
  {
    icon: Calendar,
    title: "Event Management & Entertainment",
    description: "Dynamic promotion strategies for memorable experiences",
  },
  {
    icon: Building,
    title: "Real Estate",
    description: "Strategic marketing to connect buyers with properties",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    description:
      "Performance-driven campaigns that boost sales and conversions",
  },
];

export default function Industries() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b w-full from-gray-50/50 to-white"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
              Industries We{" "}
              <span className="font-medium bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Cater
              </span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We specialize in delivering tailored digital marketing solutions
              across diverse industries, understanding the unique challenges and
              opportunities each sector presents.
            </p>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {/* <div className="flex flex-wrap gap-6"> */}
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.title}
                className={`group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-500 ease-out hover:shadow-xl hover:shadow-gray-100/50 hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/0 to-gray-100/0 group-hover:from-gray-50/50 group-hover:to-gray-100/30 rounded-2xl transition-all duration-500 ease-out"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4 relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300 ease-out group-hover:scale-110">
                      <Icon className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
                    </div>
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-gray-200/0 to-gray-400/0 group-hover:from-gray-200/20 group-hover:to-gray-400/10 rounded-xl blur-xl transition-all duration-500 ease-out"></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-medium text-gray-900 mb-3 leading-tight group-hover:text-gray-800 transition-colors duration-300">
                    {industry.title}
                  </h3>

                  {/* Description */}
                  {/* <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"> */}
                  {/*   {industry.description} */}
                  {/* </p> */}

                  {/* Subtle bottom accent */}
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gray-200/0 group-hover:via-gray-300/50 to-transparent transition-all duration-500 ease-out"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
        >
          <p className="text-gray-600 mb-6">
            {
              "Don't see your industry listed? We adapt our expertise to serve businesses across all sectors."
            }
          </p>
          <button className="group inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-gray-900/25 hover:scale-105">
            <span className="mr-2">Discuss Your Industry</span>
            <div className="w-4 h-4 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
