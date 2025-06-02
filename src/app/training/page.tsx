"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TrainingComponent = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({
    benefits: false,
    inAction: false,
    curriculum: false,
    tools: false,
  });

  // Tools logos
  const tools = [
    { name: "Google Analytics", icon: "/placeholder.svg?height=60&width=60" },
    { name: "Meta Ads", icon: "/placeholder.svg?height=60&width=60" },
    { name: "Canva", icon: "/placeholder.svg?height=60&width=60" },
    { name: "ChatGPT", icon: "/placeholder.svg?height=60&width=60" },
    { name: "Google Workspace", icon: "/placeholder.svg?height=60&width=60" },
    { name: "Shopify", icon: "/placeholder.svg?height=60&width=60" },
    { name: "Google Trends", icon: "/placeholder.svg?height=60&width=60" },
    { name: "MS Office", icon: "/placeholder.svg?height=60&width=60" },
    { name: "Zoho Books", icon: "/placeholder.svg?height=60&width=60" },
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

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24 px-4"
      >
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-3">
          Training
        </h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 leading-tight">
          Training That Transforms Careers
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Empowering the next generation of digital marketers through
          expert-led, practice-based learning.
        </p>
      </motion.div>

      {/* Why Learn With Us Section */}
      <motion.section
        id="benefits"
        className="mb-24"
        initial={{ opacity: 0 }}
        animate={isVisible.benefits ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl sm:text-2xl font-light text-center mb-12">
          Why Learn With Us?
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {[
            {
              title: "5+ Years of Experience",
              description: "In Online & Offline Digital Marketing Training",
            },
            {
              title: "Top University Sessions",
              description:
                "Sessions Conducted at Top Universities across India",
            },
            {
              title: "1000+ Students Trained",
              description: "With Success Stories to Tell",
            },
            {
              title: "Complete Resources",
              description:
                "Full Curriculum + Resources + Practice Material Provided",
            },
            //            {
            //              title: "For Everyone",
            //              description:
            //                "Ideal for Beginners, Career Switchers, and Marketing Enthusiasts",
            //            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -15px rgba(0,0,0,0.1)",
              }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              {/* <p className="text-gray-600">{item.description}</p> */}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* What You'll Learn Section */}
      <motion.section
        id="curriculum"
        className="mb-24"
        initial={{ opacity: 0 }}
        animate={isVisible.curriculum ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl sm:text-2xl font-light text-center mb-12">
          What You{"'"}ll Learn
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Social Media Marketing",
            "SEO & Google Ads",
            "Email Marketing & Funnels",
            "Analytics & Reporting",
            "Brand Strategy & Content Creation",
            "Freelancing & Career Guidance",
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-lg">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tools We Cover Section */}
      <motion.section
        id="tools"
        initial={{ opacity: 0 }}
        animate={isVisible.tools ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl sm:text-2xl font-light text-center mb-12">
          Tools We Cover
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-gray-50 p-4 rounded-full mb-3">
                <img
                  src={tool.icon || "/placeholder.svg"}
                  alt={tool.name}
                  className="w-12 h-12"
                />
              </div>
              <p className="text-sm text-center text-gray-600">{tool.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default TrainingComponent;
