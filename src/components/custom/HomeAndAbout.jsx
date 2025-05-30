import React, { useState, useEffect } from "react";

// Using placeholder images since we don't have access to the actual image files
const photos = [
  // Marketing image
  "src/images/branding.png",
  "src/images/strategy.png", // Strategy image // Branding image
  "src/images/growth.png",
  "src/images/marketing.png", // Growth image
];
export default function HomeAndAbout() {
  const [isHovering, setIsHovering] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const alternateWords = ["MARKETING", "STRATEGY", "BRANDING", "GROWTH"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % alternateWords.length);
        setIsAnimating(false);
      }, 600); // animation duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 font-sans flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50 flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 shadow-sm">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-black transform rotate-45 cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          ></div>
          <div
            className="text-black font-bold text-sm sm:text-base md:text-lg lg:text-xl leading-none cursor-pointer"
            style={{ fontFamily: "Georgia, serif" }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            THE EAGLE EYE
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {[
            "Home",
            "About",
            "Services",
            "Brands",
            "Testimonials",
            "Team",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-black font-medium text-sm lg:text-base relative transition-all duration-300 hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black after:scale-x-0 after:transition-transform after:duration-300 after:origin-left scroll-smooth"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById(item.toLowerCase());
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden flex flex-col space-y-1 p-2">
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </header>

      {/* Main Content */}
      <main
        id="home"
        className="flex-grow flex flex-col pt-20 sm:pt-24 md:pt-32 lg:pt-0 px-4 sm:px-6 md:px-8 lg:px-0 pb-8 sm:pb-12 lg:pb-0 max-w-full relative"
      >
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row lg:relative lg:h-screen">
          {/* Left side text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-12 lg:pr-8 xl:pl-16 xl:pr-16 px-4 sm:px-6 md:px-8 relative z-30 mb-8 lg:mb-0 lg:h-screen">
            <h1
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-extralight text-black leading-none tracking-widest hover:text-gray-800 transition-colors duration-500 cursor-pointer mb-2 sm:mb-3 md:mb-4 lg:mb-6 capitalize mt-16 sm:mt-20 md:mt-24 lg:mt-32"
              style={{
                fontFamily: "'PT Sans', sans-serif",
                letterSpacing: "0.08em",
                fontStretch: "condensed",
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              We
            </h1>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light italic text-black leading-none tracking-wider hover:text-gray-700 transition-colors duration-500 cursor-pointer mb-3 sm:mb-4 md:mb-6 lg:mb-8 capitalize"
              style={{
                fontFamily: "'Rouge Script', cursive",
                letterSpacing: "0.04em",
                fontStyle: "italic",
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Create
            </h2>

            <div className="relative h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 w-full overflow-visible mb-4 lg:mb-8">
              <h3
                className="text-3xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[7rem] font-extralight text-black leading-none tracking-widest cursor-pointer absolute top-0 left-0 capitalize"
                style={{
                  fontFamily: "'PT Sans', sans-serif",
                  letterSpacing: "0.08em",
                  fontStretch: "condensed",
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span
                  className={`inline-block transition-all duration-600 ease-in-out ${
                    isAnimating ? "animate-slide-out-up" : "animate-slide-in-up"
                  }`}
                  style={{ display: "inline-block" }}
                  key={index}
                >
                  {alternateWords[index]}
                </span>
              </h3>
            </div>

            {/* CTA Section moved from About */}
            <div className="mt-4 lg:mt-2">
              <button
                className="bg-black text-white px-6 py-3 font-medium text-sm hover:bg-gray-900 transition-all duration-300 tracking-wide uppercase transform hover:scale-105 hover:shadow-lg ml-50"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Soar Like an Eagle
              </button>
            </div>
          </div>

          {/* Right side photos - VERTICAL SLIDER */}
          <div
            className="w-full lg:w-1/2 lg:relative lg:h-screen transform transition-all duration-700 ease-out pt-4 sm:pt-6 lg:pt-20"
            id="hero-images"
            style={{ willChange: "transform" }}
          >
            <div className="relative overflow-hidden lg:rounded-none rounded-lg shadow-lg w-full h-64 sm:h-80 md:h-96 lg:h-full">
              {photos.map((photo, i) => {
                const isActive = i === index;
                const isPrevious =
                  i === (index - 1 + photos.length) % photos.length;
                const isNext = i === (index + 1) % photos.length;

                return (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-all duration-600 ease-in-out ${
                      isActive ? "z-20" : "z-10"
                    }`}
                    style={{
                      transform: isActive
                        ? "translateY(0%)"
                        : isPrevious
                        ? "translateY(-100%)"
                        : isNext
                        ? "translateY(100%)"
                        : "translateY(100%)",
                    }}
                  >
                    <img
                      src={photo}
                      alt={alternateWords[i]}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section
        id="about"
        className="w-full bg-stone-50 overflow-hidden"
        style={{ paddingTop: "50px" }}
      >
        <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24">
          <div className="max-w-full mx-auto w-full">
            {/* Header with Animation */}
            <div className="text-center mb-12 sm:mb-16 md:mb-6 group">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-black mb-3 tracking-wide transform hover:scale-105 transition-all duration-700 cursor-pointer opacity-0 animate-fade-in-up"
                style={{
                  fontFamily: "'PT Sans', sans-serif",
                  letterSpacing: "0.08em",
                  fontStretch: "condensed",
                  animationDelay: "0.2s",
                  animationFillMode: "forwards",
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                About
                <span
                  className="italic font-light text-black ml-2 inline-block transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                  style={{ fontFamily: "'Rouge Script', cursive" }}
                >
                  Us
                </span>
              </h2>
              <div
                className="w-8 h-px bg-black mx-auto transform scale-x-0 animate-expand-width"
                style={{
                  animationDelay: "0.8s",
                  animationFillMode: "forwards",
                }}
              ></div>
            </div>

            {/* Main Story Content */}
            <div
              className="max-w-4xl mx-auto text-center mb-16 sm:mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "1s", animationFillMode: "forwards" }}
            >
              <p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-800 leading-relaxed mb-6 tracking-wide"
                style={{
                  fontFamily: "'PT Sans', sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                At <span className="font-medium text-black">The Eagle Eye</span>
                , we believe great marketing comes from seeing what others
                don't.
              </p>
            </div>

            {/* Enhanced Content Cards */}
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 items-stretch mb-16">
              {/* Vision Card */}
              <div
                className="group bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-xl opacity-0 animate-fade-in-up transform hover:-translate-y-2 transition-all duration-500 relative overflow-hidden border border-stone-100"
                style={{
                  animationDelay: "1.2s",
                  animationFillMode: "forwards",
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-500">
                    <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                  </div>
                  <h3
                    className="text-lg sm:text-xl font-extralight text-black tracking-wide mb-4 relative"
                    style={{
                      fontFamily: "'PT Sans', sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Our Vision
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300">
                    Great marketing comes from seeing what others don't. With
                    over{" "}
                    <span className="font-medium text-black">
                      6 years of experience
                    </span>{" "}
                    working with diverse brands, we help companies spot
                    opportunities and grow with purpose, turning insights into
                    impactful strategies that drive real results.
                  </p>
                </div>
              </div>

              {/* Approach Card */}
              <div
                className="group bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-xl opacity-0 animate-fade-in-up transform hover:-translate-y-2 transition-all duration-500 relative overflow-hidden border border-stone-100"
                style={{
                  animationDelay: "1.4s",
                  animationFillMode: "forwards",
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-600 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-500">
                    <div className="w-4 h-4 bg-white transform rotate-45"></div>
                  </div>
                  <h3
                    className="text-lg sm:text-xl font-extralight text-black tracking-wide mb-4 relative"
                    style={{
                      fontFamily: "'PT Sans', sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Our Approach
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300">
                    We blend creativity with data — like an eagle's sharp vision
                    paired with powerful instincts. Having served{" "}
                    <span className="font-medium text-black">100+ clients</span>
                    , we don't just create campaigns; we craft smart strategies
                    that focus on results that truly matter to your business.
                  </p>
                </div>
              </div>

              {/* Impact Card */}
              <div
                className="group bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-xl opacity-0 animate-fade-in-up transform hover:-translate-y-2 transition-all duration-500 relative overflow-hidden border border-stone-100"
                style={{
                  animationDelay: "1.6s",
                  animationFillMode: "forwards",
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-500">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full ml-1"></div>
                  </div>
                  <h3
                    className="text-lg sm:text-xl font-extralight text-black tracking-wide mb-4 relative"
                    style={{
                      fontFamily: "'PT Sans', sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Our Impact
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300">
                    Across{" "}
                    <span className="font-medium text-black">
                      40+ industries
                    </span>
                    , we've trained{" "}
                    <span className="font-medium text-black">
                      1000+ students and professionals worldwide
                    </span>
                    , sharing the skills they need to stand out in today's
                    digital world — from AI tools to personal branding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideOutUp {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        @keyframes fadeInUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes expandWidth {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        .animate-slide-in-up {
          animation: slideInUp 0.6s forwards;
        }

        .animate-slide-out-up {
          animation: slideOutUp 0.6s forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-expand-width {
          animation: expandWidth 0.8s ease-out forwards;
        }

        @media (max-width: 1023px) {
          .main-content {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
