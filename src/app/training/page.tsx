"use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const TrainingComponent = () => {
//   const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({
//     benefits: false,
//     inAction: false,
//     curriculum: false,
//     tools: false,
//   });

//   // Tools logos
//   const tools = [
//     { name: "Google Analytics", icon: "/placeholder.svg?height=60&width=60" },
//     { name: "Meta Ads", icon: "/placeholder.svg?height=60&width=60" },
//     { name: "Canva", icon: "/placeholder.svg?height=60&width=60" },
//     { name: "ChatGPT", icon: "/placeholder.svg?height=60&width=60" },
//     { name: "Google Workspace", icon: "/placeholder.svg?height=60&width=60" },
//     { name: "Shopify", icon: "/placeholder.svg?height=60&width=60" },
//     { name: "Google Trends", icon: "/placeholder.svg?height=60&width=60" },
//     { name: "MS Office", icon: "/placeholder.svg?height=60&width=60" },
//     { name: "Zoho Books", icon: "/placeholder.svg?height=60&width=60" },
//   ];

//   // Intersection observer for scroll animations
//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.2,
//       rootMargin: "0px 0px -100px 0px",
//     };

//     const observerCallback = (entries: IntersectionObserverEntry[]) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
//         }
//       });
//     };

//     const observer = new IntersectionObserver(
//       observerCallback,
//       observerOptions
//     );

//     const sections = ["benefits", "inAction", "curriculum", "tools"];
//     sections.forEach((section) => {
//       const element = document.getElementById(section);
//       if (element) observer.observe(element);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-24 px-4"
//       >
//         <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-3">
//           Training
//         </h2>
//         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 leading-tight">
//           Training That Transforms Careers
//         </h1>
//         <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//           Empowering the next generation of digital marketers through
//           expert-led, practice-based learning.
//         </p>
//       </motion.div>

//       {/* Why Learn With Us Section */}
//       <motion.section
//         id="benefits"
//         className="mb-24"
//         initial={{ opacity: 0 }}
//         animate={isVisible.benefits ? { opacity: 1 } : { opacity: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-xl sm:text-2xl font-light text-center mb-12">
//           Why Learn With Us?
//         </h2>
//         <div className="grid grid-cols-2 gap-8">
//           {[
//             {
//               title: "5+ Years of Experience",
//               description: "In Online & Offline Digital Marketing Training",
//             },
//             {
//               title: "Top University Sessions",
//               description:
//                 "Sessions Conducted at Top Universities across India",
//             },
//             {
//               title: "1000+ Students Trained",
//               description: "With Success Stories to Tell",
//             },
//             {
//               title: "Complete Resources",
//               description:
//                 "Full Curriculum + Resources + Practice Material Provided",
//             },
//             //            {
//             //              title: "For Everyone",
//             //              description:
//             //                "Ideal for Beginners, Career Switchers, and Marketing Enthusiasts",
//             //            },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-50 p-6 rounded-lg"
//               whileHover={{
//                 y: -5,
//                 boxShadow: "0 10px 30px -15px rgba(0,0,0,0.1)",
//               }}
//               transition={{ duration: 0.2 }}
//             >
//               <h3 className="text-lg font-medium mb-2">{item.title}</h3>
//               {/* <p className="text-gray-600">{item.description}</p> */}
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* What You'll Learn Section */}
//       <motion.section
//         id="curriculum"
//         className="mb-24"
//         initial={{ opacity: 0 }}
//         animate={isVisible.curriculum ? { opacity: 1 } : { opacity: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-xl sm:text-2xl font-light text-center mb-12">
//           What You{"'"}ll Learn
//         </h2>
//         <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             "Social Media Marketing",
//             "SEO & Google Ads",
//             "Email Marketing & Funnels",
//             "Analytics & Reporting",
//             "Brand Strategy & Content Creation",
//             "Freelancing & Career Guidance",
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-50 p-6 rounded-lg text-center"
//               whileHover={{ scale: 1.1 }}
//               transition={{ duration: 0.2 }}
//             >
//               <p className="text-lg">{item}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Tools We Cover Section */}
//       <motion.section
//         id="tools"
//         initial={{ opacity: 0 }}
//         animate={isVisible.tools ? { opacity: 1 } : { opacity: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-xl sm:text-2xl font-light text-center mb-12">
//           Tools We Cover
//         </h2>
//         <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
//           {tools.map((tool, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col items-center"
//               whileHover={{ y: -5 }}
//               transition={{ duration: 0.2 }}
//             >
//               <div className="bg-gray-50 p-4 rounded-full mb-3">
//                 <img
//                   src={tool.icon || "/placeholder.svg"}
//                   alt={tool.name}
//                   className="w-12 h-12"
//                 />
//               </div>
//               <p className="text-sm text-center text-gray-600">{tool.name}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default TrainingComponent;

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Users,
  BookOpen,
  School,
  Package,
  Settings,
  ExternalLink,
} from "lucide-react";

const styles = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-300%);
    }
  }
  
  .animate-scroll {
    animation: scroll 60s linear infinite;
  }
  
  // .animate-scroll:hover {
  //   animation-play-state: paused;
  // }
`;

export default function TrainingPage() {
  const tools = [
    { name: "Google Analytics", icon: "/svgs/Ganalytics.png" },
    { name: "Meta Ads", icon: "/svgs/meta.png" },
    { name: "Canva", icon: "/svgs/canva.svg" },
    { name: "ChatGPT", icon: "/svgs/ChatGPT-Logo.svg" },
    { name: "Google Workspace", icon: "/svgs/g.webp" },
    { name: "Shopify", icon: "/svgs/shopify_glyph.svg" },
    { name: "Google Trends", icon: "/svgs/Gtrends.png" },
    { name: "MS Office", icon: "/svgs/msOffics.svg" },
    { name: "Zoho Books", icon: "/svgs/zohoBooks.png" },
  ];

  const features = [
    {
      title: "6+ Years of Training",
      icon: <Calendar className="w-6 h-6 text-gray-700" />,
    },
    {
      title: "Offline and Online Mode",
      icon: <Users className="w-6 h-6 text-gray-700" />,
    },
    {
      title: "End to End Training",
      icon: <BookOpen className="w-6 h-6 text-gray-700" />,
    },
    {
      title: "Top Universities Sessions",
      icon: <School className="w-6 h-6 text-gray-700" />,
    },
    {
      title: "1000+ Students and Professionals Trained",
      icon: <Users className="w-6 h-6 text-gray-700" />,
    },
    {
      title: "Complete Resources",
      icon: <Package className="w-6 h-6 text-gray-700" />,
    },
    {
      title: "Customizable Curriculum",
      icon: <Settings className="w-6 h-6 text-gray-700" />,
    },
  ];

  return (
    <div className="w-full bg-white">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      {/* Banner Section */}
      <section className="w-full py-18 relative overflow-hidden bg-[url('/tagline.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Background Image */}
        {/* <div className="absolute inset-0 z-0">
          <Image
            src="/tagline.png?height=800&width=1600"
            alt="Digital Marketing Training Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-gray-50/80" />
        </div> */}

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-left">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-6 text-sm font-medium text-gray-700 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200">
              Expert Training
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight mb-8">
              Build Your Digital Empire with the Eyes of an Expert
            </h1>
            <div className="space-y-4 mb-6">
              <p className="text-xl md:text-2xl text-gray-700 font-light">
                Future-Ready Marketers Start Here.
              </p>
              <p className="text-lg md:text-xl text-gray-600">
                Training That Sees Beyond the Trends.
              </p>
            </div>
            <div>
              <button className="px-8 py-6 text-base bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                Book a call
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </button>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden pt-10">
          <div className="flex animate-scroll">
            {/* First set of features */}
            {features.map((feature, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center gap-1 h-16 w-96 mx-4 bg-gradient-to-br from-white to-gray-50 rounded-xl px-4 py-3 border border-gray-100 shadow-sm flex-shrink-0"
              >
                <div className="bg-gray-50 rounded-full p-2 size-8 flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <h3 className="text-base font-medium text-gray-900 whitespace-nowrap">
                  {feature.title}
                </h3>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {features.map((feature, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center gap-3 h-16 w-96 mx-4 bg-gradient-to-br from-white to-gray-50 rounded-xl px-4 py-3 border border-gray-100 shadow-sm flex-shrink-0"
              >
                <div className="bg-gray-50 rounded-full p-2 w-10 h-10 flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <h3 className="text-base font-medium text-gray-900 whitespace-nowrap">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
          {/* <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" /> */}
        </div>
      </section>

      {/* Tools Section */}
      <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white mb-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-6 text-sm font-medium text-gray-600 bg-gray-100 rounded-full">
              Industry Standard
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">
              Tools We Cover
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Master the essential platforms and technologies that drive
              successful digital marketing campaigns.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center h-28"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center h-16 w-16 mb-3">
                  <img
                    src={tool.icon || "/placeholder.svg"}
                    alt={tool.name}
                    className={
                      tool.name === "Google Analytics"
                        ? "max-h-18 max-w-18 object-contain"
                        : "max-h-14 max-w-14 object-contain"
                    }
                  />
                </div>
                <p className="text-sm text-center text-gray-600 leading-tight">
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* End Card / CTA */}
      <section className="w-full py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
              Build your Empire Now!
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Take the first step toward mastering digital marketing with
              personalized guidance from industry experts.
            </p>
            <button className="px-8 py-6 text-base bg-stone-700 hover:bg-stone-600 text-gray-300 rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
              Book a call
              <ExternalLink className="ml-2 w-5 h-5 inline" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
