import HeroSectionLayout from "@/components/HeroSectionLayout";
import ProjectsHeroSection from "@/components/Projects/ProjectsHeroSection";
import React from "react";

const Projects = () => {
  return (
    <>
      <HeroSectionLayout scrollHref="#portfolio">
        <ProjectsHeroSection />
      </HeroSectionLayout>
    </>
  );
};

export default Projects;
