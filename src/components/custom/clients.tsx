"use client";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

interface CounterProps {
  target: number;
}

const AnimatedCounter = ({ target }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [motionValue, isInView, target]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);
  return (
    <motion.span
      ref={ref}
      className="text-4xl font-black text-black counter tracking-tight leading-none"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      0
    </motion.span>
  );
};

const Clients = () => {
  const clients = [
    { name: "A2Z", logo: "/logos/a2z.png?height=60&width=120", scale: 1 },
    {
      name: "Ashbunk",
      logo: "/logos/ashbunk.png?height=60&width=120",
      scale: 1,
    },
    {
      name: "Beat Naturally",
      logo: "/logos/beatnaturally.webp?height=60&width=120",
      scale: 1,
    },
    {
      name: "Bricks and Spaces",
      logo: "/logos/bricks and spaces.avif?height=60&width=120",
      scale: 1.5,
    },
    {
      name: "Enlight Wisdom",
      logo: "/logos/enlight.png?height=60&width=120",
      scale: 2.5,
    },
    { name: "Grove", logo: "/logos/grove.png?height=60&width=120", scale: 0.8 },
    {
      name: "Professional",
      logo: "/logos/professional_logo.png?height=60&width=120",
      scale: 1.0,
    },
    { name: "Rel", logo: "/logos/rel.png?height=60&width=120", scale: 1.2 },
    {
      name: "Reylon",
      logo: "/logos/Relyon-Logo.png?height=60&width=120",
      scale: 1,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      <motion.div
        className="text-center py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our <em className="italic font-serif">Impact</em> in Numbers
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-16 text-xl font-semibold mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-baseline justify-center">
              <AnimatedCounter target={6} />
              <span className="text-4xl font-bold text-gray-700 ml-1">+</span>
            </div>
            <div className="text-gray-600 font-medium">years of Experience</div>
          </motion.div>
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-baseline justify-center">
              <AnimatedCounter target={100} />
              <span className="text-4xl font-bold text-gray-700 ml-1">+</span>
            </div>
            <div className="text-gray-600 font-medium">Clients</div>
          </motion.div>
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-baseline justify-center">
              <AnimatedCounter target={40} />
              <span className="text-4xl font-bold text-gray-700 ml-1">+</span>
            </div>
            <div className="text-gray-600 font-medium">Industries</div>
          </motion.div>
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-baseline justify-center">
              <AnimatedCounter target={20} />
              <span className="text-4xl font-bold text-gray-700 ml-1">+</span>
            </div>
            <div className="text-gray-600 font-medium">Digital Services</div>
          </motion.div>
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="flex items-baseline justify-center">
              <AnimatedCounter target={1000} />
              <span className="text-4xl font-bold text-gray-700 ml-1">+</span>
            </div>
            <div className="text-gray-600 font-medium">
              Students and Graduates Trained
            </div>
          </motion.div>
        </motion.div>

        {/* Client Logos Section */}
        <div className="container mx-auto px-4 max-w-7xl mt-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
              Trusted Partners
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Brands That Trust <span className="text-gray-800">Eagle Eye</span>
            </h3>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex w-max gap-x-16 scrolling-wrapper">
              {/* Group 1: Original Logos */}
              <div className="flex gap-x-16">
                {clients.map((client, index) => (
                  <div
                    key={`logo1-${index}`}
                    className="flex items-center justify-center w-32 h-16 flex-shrink-0"
                    style={{ transform: `scale(${client.scale})` }}
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={120}
                      height={60}
                      className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Group 2: Duplicated Logos for Seamless Loop */}
              <div className="flex gap-x-16">
                {clients.map((client, index) => (
                  <div
                    key={`logo2-${index}`}
                    className="flex items-center justify-center w-32 h-16 flex-shrink-0"
                    style={{ transform: `scale(${client.scale})` }}
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={120}
                      height={60}
                      className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Ready to join our success stories?
            </p>
            <button className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
              Start Your Journey
            </button>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        .scrolling-wrapper {
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scrolling-wrapper:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Clients;
