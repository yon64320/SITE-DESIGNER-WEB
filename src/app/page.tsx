import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Pillars from "@/components/sections/Pillars";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Pillars />
      <ProjectsPreview />
      <Testimonials />
    </>
  );
}
