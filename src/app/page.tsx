import Industries from "@/components/custom/industries";
import Hero from "@/components/custom/Hero";
import About from "@/components/custom/About";
import TagLine from "@/components/custom/tagline";
import TrainingComponent from "@/components/custom/training";
import LogoCarousel from "@/components/custom/LogoCarousel";
import ServicesCarousel from "@/components/custom/ServicesCarousel";
import StatisticsCounter from "@/components/custom/StatisticsCounter";
import TeamSection from "@/components/custom/TeamSection";
import ContactSection from "@/components/custom/ContactSection";
// import TestimonialsSlideshow from "@/components/custom/testimonials";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <TagLine />
      <About />

      {/* Statistics Counter Section */}
      <StatisticsCounter />

      {/* Brands Carousel Section */}
      <section className="py-10 w-full overflow-x-hidden">
        <LogoCarousel />
      </section>

      {/* Services Carousel Section */}
      <section className="py-10 w-full overflow-x-hidden">
        <div className="text-center p-8">
          <h1 className="text-3xl font-semibold">
            Crafting Digital Experiences That Drive Growth!
          </h1>
        </div>
        <ServicesCarousel />
      </section>
      <Industries />
      <TrainingComponent />
      {/* <TestimonialsSlideshow /> */}
      <TeamSection />
      <ContactSection />
    </div>
  );
}
