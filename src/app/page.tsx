import Industries from "@/components/custom/industries";
import TagLine from "@/components/custom/tagline";
import TrainingComponent from "@/components/custom/training";
// import TestimonialsSlideshow from "@/components/custom/testimonials";

export default function Home() {
  return (
    <>
      <TagLine />
      <Industries />
      <TrainingComponent />
      {/* <TestimonialsSlideshow /> */}
    </>
  );
}
