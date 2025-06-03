import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function OurWorksSection() {
  const works = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern shopping experience with seamless checkout flow",
      image: "/placeholder.svg?height=300&width=400",
      year: "2024",
    },
    {
      id: 2,
      title: "Brand Identity System",
      category: "Design",
      description: "Complete visual identity for tech startup",
      image: "/placeholder.svg?height=300&width=400",
      year: "2024",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure and intuitive financial management",
      image: "/placeholder.svg?height=300&width=400",
      year: "2023",
    },
    {
      id: 4,
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      description: "Analytics platform with real-time data visualization",
      image: "/placeholder.svg?height=300&width=400",
      year: "2023",
    },
    {
      id: 5,
      title: "Corporate Website",
      category: "Web Development",
      description: "Professional presence for consulting firm",
      image: "/placeholder.svg?height=300&width=400",
      year: "2023",
    },
    {
      id: 6,
      title: "Marketing Campaign",
      category: "Digital Marketing",
      description: "Multi-channel campaign driving 300% growth",
      image: "/placeholder.svg?height=300&width=400",
      year: "2024",
    },
  ];

  return (
    <section className="w-full py-10 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
            Trusted Partners
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">
            Our <em className="italic font-serif">Works</em>
          </h2>
          <p className="text-gray-600 font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            What Vision Looks like in Action
          </p>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {works.map((work, index) => (
            <div
              key={work.id}
              className="group cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <ArrowUpRight className="w-4 h-4 text-gray-700" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                      {work.category}
                    </span>
                    <span className="text-sm text-gray-400">{work.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 hover:shadow-md group">
            <span className="font-medium">View All Projects</span>
            <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
