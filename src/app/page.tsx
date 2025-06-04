import Hero from "@/components/custom/Hero";
import About from "@/components/custom/About";
import TrainingComponent from "@/components/custom/training";
import ServicesCarousel from "@/components/custom/ServicesCarousel";
import Clients from "@/components/custom/clients";
import TeamSection from "@/components/custom/TeamSection";
import ContactSection from "@/components/custom/ContactSection";
import LogoCarousel from "@/components/custom/LogoCarousel";
import OurWorksSection from "@/components/custom/works";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>

      {/* Clients Section */}
      <Clients />
      <section id="works">
        <OurWorksSection />
      </section>
      {/* Services Carousel Section */}
      <section
        id="services"
        className="py-4 w-full overflow-x-hidden bg-gradient-to-b from-gray-100 to-white"
      >
        <div className="text-center p-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
            Services
          </div>
          <h1
            className="text-2xl sm:text-3xl font-normal text-gray-900 mb-4 leading-none tracking-wider"
            style={{
              fontFamily: "var(--font-inter)",
              letterSpacing: "0.05em",
              fontWeight: "400",
            }}
          >
            Crafting{" "}
            <span
              className="text-gray-700"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: "400",
              }}
            >
              Digital
            </span>{" "}
            Experiences That Drive Growth!
          </h1>
        </div>
        <ServicesCarousel />
      </section>

      <section id="about">
        <About />
      </section>
      <LogoCarousel />

      {/* Training Section */}
      <section id="training">
        <TrainingComponent />
      </section>
      <section id="team">
        <TeamSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
