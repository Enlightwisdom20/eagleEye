import Industries from "@/components/custom/industries";
import HomeandAbout from "@/components/custom/HomeAndAbout";
import TagLine from "@/components/custom/tagline";
import TrainingComponent from "@/components/custom/training";
// import TestimonialsSlideshow from "@/components/custom/testimonials";

export default function Home() {
  return (
    <>
      <HomeandAbout />

      <TagLine />
      <Industries />
      <TrainingComponent />
      {/* <TestimonialsSlideshow /> */}
    </>
  );
}
