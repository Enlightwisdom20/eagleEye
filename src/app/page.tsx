import About from "@/components/custom/about";
import Hero from "@/components/custom/hero";
import TagLine from "@/components/custom/tagline";
import TestimonialsSlideshow from "@/components/custom/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <TagLine />
      <About />
      <TestimonialsSlideshow />
    </>
  );
}
