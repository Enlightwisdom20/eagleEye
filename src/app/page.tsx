import Industries from "@/components/custom/industries";
import Hero from "@/components/custom/Hero";
import About from "@/components/custom/About";
import TagLine from "@/components/custom/tagline";
import TrainingComponent from "@/components/custom/training";
// import LogoCarousel from "@/components/custom/LogoCarousel";
import ServicesCarousel from "@/components/custom/ServicesCarousel";
import Clients from "@/components/custom/clients";
import TeamSection from "@/components/custom/TeamSection";
import ContactSection from "@/components/custom/ContactSection";
// import ClientLogosSection from "@/components/custom/clientLogos";
// import TestimonialsSlideshow from "@/components/custom/testimonials";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <TagLine />

      {/* Clients Section */}
      <Clients />
      {/* Services Carousel Section */}
      <section className="py-10 w-full overflow-x-hidden">
        <div className="text-center p-8">
          <h1 className="text-3xl font-semibold">
            Crafting Digital Experiences That Drive Growth!
          </h1>
        </div>
        <ServicesCarousel />
      </section>

      {/* Industries Section */}
      <Industries />

      {/* Training Section */}
      <TrainingComponent />
      {/* <TestimonialsSlideshow /> */}
      <About />
      <TeamSection />
      <ContactSection />
    </div>
  );
}
