"use client";
import TeamMember from "./TeamMember";

const team = [
  {
    name: "Erlinda Scarlet Selvan",
    role: "Founder & CEO",
    image: "/teams/erlinda.jpeg",
    objectPosition: "center top",
  },
  {
    name: "Besly",
    role: "Chief Technical Officer",
    image: "/teams/Beslee.png",
    objectPosition: "center 20%",
  },
  {
    name: "Surya",
    role: "AI & Development Manager",
    image: "/teams/surya.jpeg",
    objectPosition: "center 15%",
  },
  {
    name: "Shallon Sherly",
    role: "Creative Head",
    image: "/teams/Sherly.jpg",
    objectPosition: "40% 20%",
  },
  {
    name: "Tiffany Tracina",
    role: "Content Strategist & Trainer",
    image: "/teams/Tiffany.jpg",
    objectPosition: "center 10%",
  },
  {
    name: "Elisha Olive",
    role: "Influencer Marketing Coordinator",
    image: "/teams/Elisha.jpg",
    objectPosition: "center center",
  },
  {
    name: "Jervin",
    role: "Videographer",
    image: "/teams/Jervin.jpg",
    objectPosition: "70% center",
  },
  {
    name: "Saheli",
    role: "Creative Designer",
    image: "/teams/Saheli.jpeg",
    objectPosition: "center 25%",
  },
  // {
  //   name: "Anita Cassandra",
  //   role: "Social Media Executive",
  //   image: "/teams/Anita.png",
  //   objectPosition: "center 20%",
  // },
  {
    name: "Rashmi",
    role: "Social Media Executive",
    image: "/teams/rashmi.jpeg",
    objectPosition: "center 20%",
  },
];

export default function TeamSection() {
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
  };
  return (
    <section
      className="py-16 px-6 bg-gradient-to-b from-white to-gray-200 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/your-bg.png')" }}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0"></div>

      {/* Content container */}
      <div className="relative z-10 px-4 md:px-20">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
            Team
          </div>
          <h1
            className="text-2xl sm:text-[2.5rem] font-normal text-gray-900 mb-4 leading-none tracking-wider"
            style={{
              fontFamily: "vinila, sans-serif",
              fontStyle: "normal",
              letterSpacing: "0.01em",
              fontWeight: "700",
            }}
          >
            Every{" "}
            <span
              className="text-gray-700"
              style={{
                fontFamily: "vinila, sans-serif",
                fontWeight: "700",
              }}
            >
              Eye
            </span>{" "}
            Counts
          </h1>
          <p
            className="text-gray-600 font-medium mt-2 text-base sm:text-lg leading-relaxed"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: "400",
            }}
          >
            Meet our team members
          </p>
          <button
            onClick={() => scrollToSection("#contact")}
            className="mt-6 bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: "500",
            }}
          >
            Join our team
          </button>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 max-w-6xl mx-auto justify-items-center">
          {team.map((member, idx) => (
            <TeamMember key={idx} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
