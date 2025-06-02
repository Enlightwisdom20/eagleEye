import TeamMember from "./TeamMember";

const team = [
  {
    name: "Erlinda Scarlet Selvan",
    role: "Founder & CEO",
    image: "/team/p1.jpg",
    imageScale: "scale-[1.2]",
  },
  {
    name: "Besly",
    role: "Chief Technical Officer",
    image: "/team/p1.jpg",
    imageScale: "",
  },
  {
    name: "Surya",
    role: "AI & Development Manager",
    image: "/team/p1.jpg",
    imageScale: "",
  },
  {
    name: "Shallon Sherly",
    role: "Creative Head",
    image: "/team/Sherly.png",
    imageScale:
      "scale-[1.2] sm:scale-[1.65] md:scale-[1.45] lg:scale-[1.35] xl:scale-[1.15] -translate-x-10 custom-zoom",
  },
  {
    name: "Tiffany Tracina",
    role: "Content Strategist & Trainer",
    image: "/team/Tiffany.png",
    imageScale: "scale-[1.2] custom-tiffany",
  },
  {
    name: "Elisha Olive",
    role: "Influencer Marketing Coordinator",
    image: "/team/Elisha.png",
    imageScale: "scale-[1.5] translate-y-8 custom-elisha",
  },
  {
    name: "Jervin",
    role: "Videographer",
    image: "/team/Jervin.png",
    imageScale: "scale-[2] -translate-x-[50px]",
  },
  {
    name: "Saheli",
    role: "Creative Designer",
    image: "/team/Saheli.png",
    imageScale: "scale-150 custom-saheli",
  },
  {
    name: "Anita Cassandra",
    role: "Social Media Executive",
    image: "/team/Anita.png",
    imageScale: "scale-[1.2] custom-anita",
  },
  {
    name: "Rashmi",
    role: "Social Media Executive",
    image: "/team/p1.jpg",
    imageScale: "",
  },
];

export default function TeamSection() {
  return (
    <section
      className="py-16 px-6 bg-gray-200 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/your-bg.png')" }}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0"></div>

      {/* Content container */}
      <div className="relative z-10 px-4 md:px-20">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Meet Our Creators
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Designers. Developers. Dreamers.
          </p>
          <button className="mt-6 bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition">
            Join our team
          </button>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[100px] gap-y-[100px] max-w-6xl mx-auto custom-grid-lg">
          {team.map((member, idx) => (
            <TeamMember key={idx} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
