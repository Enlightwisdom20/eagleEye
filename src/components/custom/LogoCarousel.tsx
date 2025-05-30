const LogoCarousel = () => {
  // Logo paths - replace with actual paths
  const logos = [
    { src: "/logos/a2z.png", alt: "A2Z Logo", scale: 1 },
    { src: "/logos/ashbunk.png", alt: "Ashbunk Logo", scale: 1 },
    { src: "/logos/beatnaturally.webp", alt: "Beat Naturally Logo", scale: 1 },
    {
      src: "/logos/bricks and spaces.avif",
      alt: "Bricks and Spaces Logo",
      scale: 1.5,
    },
    { src: "/logos/enlight.png", alt: "Enlight Logo", scale: 2.5 },
    { src: "/logos/grove.png", alt: "Grove Logo", scale: 0.8 },
    {
      src: "/logos/professional_logo.png",
      alt: "Professional Logo",
      scale: 1.0,
    },
    { src: "/logos/rel.png", alt: "Rel Logo", scale: 1.2 },
    { src: "/logos/Relyon-Logo.png", alt: "Relyon Logo", scale: 1 },
  ];
  return (
    <div className="w-full max-w-7xl mx-auto overflow-hidden">
      <h2 className="text-3xl font-bold mb-8 text-center px-4">
        Brands we nurtured into{" "}
        <em className="italic font-serif">inspiring narratives</em>
      </h2>

      <div className="relative overflow-hidden">
        <div className="flex w-max gap-x-16 scrolling-wrapper">
          {/* Group 1: Original Logos */}
          <div className="flex gap-x-16">
            {logos.map((logo, index) => (
              <div
                key={`logo1-${index}`}
                className="flex items-center justify-center w-32 h-16 flex-shrink-0"
                style={{ transform: `scale(${logo.scale})` }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Group 2: Duplicated Logos for Seamless Loop */}
          <div className="flex gap-x-16">
            {logos.map((logo, index) => (
              <div
                key={`logo2-${index}`}
                className="flex items-center justify-center w-32 h-16 flex-shrink-0"
                style={{ transform: `scale(${logo.scale})` }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div></div>
      </div>
    </div>
  );
};

export default LogoCarousel;
