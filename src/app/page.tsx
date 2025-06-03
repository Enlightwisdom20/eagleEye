import Hero from "@/components/custom/Hero";
import About from "@/components/custom/About";
import TrainingComponent from "@/components/custom/training";
// import LogoCarousel from "@/components/custom/LogoCarousel";
import ServicesCarousel from "@/components/custom/ServicesCarousel";
import Clients from "@/components/custom/clients";
import TeamSection from "@/components/custom/TeamSection";
import ContactSection from "@/components/custom/ContactSection";
import LogoCarousel from "@/components/custom/LogoCarousel";
import OurWorksSection from "@/components/custom/works";
// import ClientLogosSection from "@/components/custom/clientLogos";
// import TestimonialsSlideshow from "@/components/custom/testimonials";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />

      {/* Clients Section */}
      <Clients />
      <OurWorksSection />
      {/* Services Carousel Section */}
      <section className="py-4 w-full overflow-x-hidden bg-gradient-to-b from-gray-100 to-white">
        <div className="text-center p-8 max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-loose">
            Crafting Digital Experiences That Drive Growth!
          </h1>
        </div>
        <ServicesCarousel />
      </section>

      {/* Industries Section */}
      {/* <Industries /> */}
      <About />
      <TeamSection />
      <LogoCarousel />

      {/* Training Section */}
      <TrainingComponent />
      {/* <TestimonialsSlideshow /> */}
      <ContactSection />
    </div>
  );
}
