"use client";
import AnimateOnLoad from "../AnimateOnLoad";
import GlitchText from "../GlitchText";
import CustomSlider from "../Slider";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Safra Tourism",
    imgSrc: "/safra.png",
    link: "/projects/project-one",
  },
  // {
  //   title: "Favarr",
  //   imgSrc: "/favarr.png",
  //   link: "/projects/project-two",
  // },
  // {
  //   title: "Soloon",
  //   imgSrc: "/soloon.png",
  //   link: "/projects/project-three",
  // },
  {
    title: "MediaFire",
    imgSrc: "/mediafire.png",
    link: "/projects/project-three",
  },
  {
    title: "AssessCandidates",
    imgSrc: "/gfi.jpeg",
    link: "/projects/project-three",
  },
  {
    title: "Scan and Win Game",
    imgSrc: "/scanAndWin.png",
    link: "/projects/project-three",
  },
  {
    title: "Dubai Bus Advertising",
    imgSrc: "/dubaiBus.png",
    link: "/projects/project-three",
  },
  {
    title: "Indexcore",
    imgSrc: "/indexcore.png",
    link: "/projects/project-three",
  },
  // {
  //   title: "Owl",
  //   imgSrc: "/owl.png",
  //   link: "/projects/project-three",
  // },
  {
    title: "Abronn",
    imgSrc: "/abronn.png",
    link: "/projects/project-three",
  },
  {
    title: "Transport Media",
    imgSrc: "/transportMedia.png",
    link: "/projects/project-three",
  },
  {
    title: "Dubai Advertising",
    imgSrc: "/dubaiAd.png",
    link: "/projects/project-three",
  },
];

const ProjectsHeroSection = () => {
  return (
    <>
      <AnimateOnLoad>
        <div className="relative select-none h-full">
          <div className="flex h-[90vh] justify-center flex-col items-center">
            <GlitchText firstText="Trusted by" secondText="5+ global brands" />
            <p className="text-primaryLight text-center md:mt-5 mt-3 md:text-base lg:text-xl text-sm md:px-0 px-10 lg:max-w-[700px] max-w-full">
              Discover the driving force behind our success – the extraordinary
              partnerships that fuel innovation and deliver unmatched results.
            </p>
            <div className="w-full mt-6 absolute bottom-0 left-0">
              {/* <CustomSlider /> */}
            </div>
          </div>
        </div>
      </AnimateOnLoad>
      <div className="w-full">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-10 text-secondary">Our Portfolio</h1>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                imgSrc={project.imgSrc}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsHeroSection;
