"use client";
import TeamMember from "./TeamMember";
import AnimatedTitle from "@/components/ui/AnimatedTitle";

const team = [
  {
    name: "Erlinda Scarlet Selvan",
    role: "Founder & CEO",
    image: "/teams/erlinda.webp",
    objectPosition: "center top",
  },
  {
    name: "Bezaleel (Beslee)",
    role: "Chief Technical Officer",
    image: "/teams/Beslee.webp",
    objectPosition: "center 20%",
  },
  {
    name: "Surya",
    role: "AI & Development Manager",
    image: "/teams/surya.webp",
    objectPosition: "center 15%",
  },
  {
    name: "Shallon Sherly",
    role: "Creative Head",
    image: "/teams/Sherly.webp",
    objectPosition: "40% 20%",
  },
  {
    name: "Tiffany Tracina",
    role: "Content Strategist & Trainer",
    image: "/teams/Tiffany.webp",
    objectPosition: "center 10%",
  },
  {
    name: "Elisha Olive",
    role: "Influencer Marketing Coordinator",
    image: "/teams/Elisha.webp",
    objectPosition: "center center",
  },
  {
    name: "Jervin",
    role: "Videographer",
    image: "/teams/Jervin.webp",
    objectPosition: "70% center",
  },
  {
    name: "Saheli",
    role: "Creative Designer",
    image: "/teams/Saheli.webp",
    objectPosition: "center 25%",
  },
  // {
  //   name: "Anita Cassandra",
  //   role: "Social Media Executive",
  //   image: "/teams/Anita.webp",
  //   objectPosition: "center 20%",
  // },
  {
    name: "Rashmi",
    role: "Social Media Executive",
    image: "/teams/rashmi.webp",
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
      className="py-16 px-6 bg-gray-100 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/your-bg.webp')" }}
    >
      {/* Blur overlay */}

      {/* Content container */}
      <div className="relative z-10 px-4 md:px-20">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <AnimatedTitle
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
          </AnimatedTitle>
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
