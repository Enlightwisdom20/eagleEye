"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoCarousel = () => {
  // Logo paths - replace with actual paths
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
    {
      name: "Schoolbunk",
      logo: "/logos/schoolbunk.webp?height=60&width=120",
      scale: 1,
    },
    {
      name: "SS Graphics",
      logo: "/logos/S.S. Graphics Logo-01.png?height=60&width=120",
      scale: 1.8,
    },
    {
      name: "TNUHUB",
      logo: "/logos/tnuhub.png?height=60&width=120",
      scale: 1,
    },
    {
      name: "Shahs electronics",
      logo: "/logos/shahs.png?height=60&width=120",
      scale: 2.2,
    },
  ];

  return (
    <section className="bg-white overflow-hidden">
      <motion.div
        className="text-center py-16 pt-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Client Logos Section */}
        <div className="container mx-auto px-4 max-w-7xl mt-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
              Clients
            </div>{" "}
            <h3
              className="text-2xl sm:text-3xl font-normal text-gray-900 mb-6 leading-none tracking-wider"
              style={{
                fontFamily: "var(--font-inter)",
                letterSpacing: "0.05em",
                fontWeight: "400",
              }}
            >
              Brands That{" "}
              <span
                className="text-gray-700"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: "400",
                }}
              >
                Believe
              </span>
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
                      className="h-12 object-contain hover:grayscale-0 transition-all duration-300"
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
                      className="h-12 object-contain hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>{" "}
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6 text-base sm:text-lg">
              Ready to join our success stories?
            </p>
            <button
              className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: "500",
              }}
            >
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

export default LogoCarousel;
