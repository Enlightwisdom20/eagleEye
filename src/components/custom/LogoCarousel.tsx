"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedTitle2 from "@/components/ui/AnimatedTitle2";

const LogoCarousel = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }; // Logo paths with reduced scale information (decreased by 0.3)
  const clients = [
    { name: "A2Z", logo: "/logos/a2z.webp", scale: 0.9 },
    { name: "Ashbunk", logo: "/logos/ashbunk.webp", scale: 0.9 },
    { name: "Beat Naturally", logo: "/logos/beatnaturally.webp", scale: 0.9 },
    {
      name: "Bricks and Spaces",
      logo: "/logos/bricks and spaces.avif",
      scale: 1.4,
    },
    { name: "Enlight Wisdom", logo: "/logos/enlight.webp", scale: 2.4 },
    { name: "Grove", logo: "/logos/grove.webp", scale: 0.7 },
    { name: "Professional", logo: "/logos/professional_logo.webp", scale: 0.9 },
    { name: "Rel", logo: "/logos/rel.webp", scale: 1.1 },
    { name: "Reylon", logo: "/logos/Relyon-Logo.webp", scale: 0.9 },
    { name: "Schoolbunk", logo: "/logos/schoolbunk.webp", scale: 0.9 },
    {
      name: "SS Graphics",
      logo: "/logos/S.S. Graphics Logo-01.webp",
      scale: 1.7,
    },
    { name: "TNUHUB", logo: "/logos/tnuhub.webp", scale: 0.9 },
    { name: "Shahs electronics", logo: "/logos/shahs.webp", scale: 2.1 },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-100 via-white to-white overflow-hidden">
      <motion.div
        className="text-center py-16 pt-1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Client Logos Section */}
        <div className="container mx-auto px-4 max-w-7xl mt-16">
          {" "}
          <div className="text-center mb-16">
            <AnimatedTitle2
              className="text-2xl sm:text-[2.5rem] font-normal text-gray-900 mb-6 leading-none tracking-wider"
              style={{
                fontFamily: "vinila, sans-serif",
                fontStyle: "normal",
                letterSpacing: "0.01em",
                fontWeight: "700",
              }}
            >
              Brands That{" "}
              <span
                className="text-gray-700"
                style={{
                  fontFamily: "vinila, sans-serif",
                  fontWeight: "700",
                }}
              >
                Believe
              </span>
            </AnimatedTitle2>
          </div>{" "}
          <div className="relative overflow-hidden py-8">
            <div className="flex w-max gap-x-12 scrolling-wrapper">
              {" "}
              {/* Group 1: Original Logos */}
              <div className="flex gap-x-12">
                {clients.map((client, index) => (
                  <div
                    key={`logo1-${index}`}
                    className="flex items-center justify-center w-40 h-24 flex-shrink-0 p-2"
                    style={{ transform: `scale(${client.scale})` }}
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={160}
                      height={80}
                      className="max-w-full max-h-full w-auto h-auto object-contain transition-all duration-300"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </div>
                ))}
              </div>
              {/* Group 2: Duplicated Logos for Seamless Loop */}
              <div className="flex gap-x-12">
                {clients.map((client, index) => (
                  <div
                    key={`logo2-${index}`}
                    className="flex items-center justify-center w-40 h-24 flex-shrink-0 p-2"
                    style={{ transform: `scale(${client.scale})` }}
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={160}
                      height={80}
                      className="max-w-full max-h-full w-auto h-auto object-contain transition-all duration-300"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        width: "auto",
                        height: "auto",
                      }}
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
              onClick={() => scrollToSection("#contact")}
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
