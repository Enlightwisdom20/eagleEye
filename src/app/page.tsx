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
      </section>{" "}
      {/* Services Carousel Section */}
      <section
        id="services"
        className="py-4 w-full overflow-x-hidden bg-gray-100"
      >
        <div className="text-center p-8 max-w-4xl mx-auto">
          <h1
            className="text-2xl sm:text-[2.5rem] font-normal text-gray-900 mb-4 leading-none tracking-wider"
            style={{
              fontFamily: "vinila, sans-serif",
              fontStyle: "normal",
              letterSpacing: "0.01em",
              fontWeight: "700",
            }}
          >
            Services that{" "}
            <span
              className="text-gray-700"
              style={{
                fontFamily: "vinila, sans-serif",
                fontWeight: "700",
              }}
            >
              Soar
            </span>{" "}
          </h1>
        </div>
        <ServicesCarousel />
      </section>
      <section id="about">
        <About />
      </section>
      <LogoCarousel />
      {/* Training Section */}
      <section
        className=" bg-gradient-to-b from-white via-gray-100 to-gray-100"
        id="training"
      >
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
