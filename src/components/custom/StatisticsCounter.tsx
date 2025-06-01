"use client";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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

const StatisticsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const clients = [
    { name: "A2Z", logo: "/logos/a2z.png?height=60&width=120" },
    { name: "Ashbunk", logo: "/logos/ashbunk.png?height=60&width=120" },
    {
      name: "Beat Naturally",
      logo: "/logos/beatnaturally.webp?height=60&width=120",
    },
    {
      name: "Bricks and Spaces",
      logo: "/logos/bricks and spaces.avif?height=60&width=120",
    },
    { name: "Enlight Wisdom", logo: "/logos/enlight.png?height=60&width=120" },
    { name: "Grove", logo: "/logos/grove.png?height=60&width=120" },
    {
      name: "Professional",
      logo: "/logos/professional_logo.png?height=60&width=120",
    },
    { name: "Rel", logo: "/logos/rel.png?height=60&width=120" },
    { name: "Reylon", logo: "/logos/Relyon-Logo.png?height=60&width=120" },
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

          <div className="relative">
            <div className="honeycomb-grid">
              {clients.map((client, index) => (
                <div
                  key={client.name}
                  className={`honeycomb-item ${
                    isVisible ? "animate-fade-in" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="hexagon">
                    <div className="hexagon-inner">
                      <div className="hexagon-content">
                        <Image
                          src={client.logo || "/placeholder.svg"}
                          alt={`${client.name} logo`}
                          width={120}
                          height={60}
                          className="logo-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
        .honeycomb-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          max-width: 1000px;
          margin: 0 auto;
          gap: 10px;
        }

        .honeycomb-item {
          width: 160px;
          height: 140px;
          margin: 5px;
        }

        .honeycomb-item:nth-child(n + 6) {
          margin-top: -60px;
        }

        .hexagon {
          width: 100%;
          height: 100%;
          position: relative;
          transform: rotate(30deg);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hexagon-inner {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border: 2px solid #e2e8f0;
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .hexagon-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-30deg);
          width: 80%;
          height: 80%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          filter: grayscale(100%) opacity(0.7);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .honeycomb-item:hover .hexagon {
          transform: rotate(30deg) scale(1.1);
        }

        .honeycomb-item:hover .hexagon-inner {
          background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%);
          border-color: #a0aec0;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .honeycomb-item:hover .logo-image {
          filter: grayscale(0%) opacity(1);
          transform: scale(1.05);
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @media (max-width: 768px) {
          .honeycomb-item {
            width: 120px;
            height: 105px;
          }

          .honeycomb-item:nth-child(n + 6) {
            margin-top: 0;
          }
          .honeycomb-item:nth-child(n + 8) {
            margin-top: -45px;
          }
        }

        @media (max-width: 480px) {
          .honeycomb-grid {
            gap: 5px;
          }

          .honeycomb-item {
            width: 100px;
            height: 87px;
            margin: 2px;
          }

          .honeycomb-item:nth-child(n + 6),
          .honeycomb-item:nth-child(n + 8) {
            margin-top: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default StatisticsCounter;
