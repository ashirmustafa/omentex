import HeroSectionLayout from "@/components/Home/HeroSectionLayout";
import HeroSection from "@/components/Home/Hero/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import ServicesSection from "@/components/Home/Services/ServicesSection";
import CustomSlider from "@/components/Slider";
import HomeOurStack from "@/components/Home/HomeOurStack";
import HomeOurWorkProcess from "@/components/Home/HomeOurWorkProgress";
import HomeOurProjects from "@/components/Home/HomeOurProjects";
import HomeAccordion from "@/components/Home/HomeAccordion";
import ProjectCard from "@/components/Projects/ProjectCard";

const projects = [
  {
    title: "Safra Tourism",
    imgSrc: "/safra.png",
    link: "/projects/project-one",
  },
  {
    title: "Favarr",
    imgSrc: "/favarr.png",
    link: "/projects/project-two",
  },
  {
    title: "Soloon",
    imgSrc: "/soloon.png",
    link: "/projects/project-three",
  },
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
  {
    title: "Dubai Advertising Media",
    imgSrc: "/dubaiAdMedia.png",
    link: "/projects/project-three",
  },
];
const Home = () => {
  return (
    <>
      <HeroSectionLayout scrollHref="#services">
        <Navbar />
        <HeroSection />
      </HeroSectionLayout>
      <CustomSlider />
      <ServicesSection />
      <HomeOurStack />
      <HomeOurWorkProcess />
      {/* <HomeOurProjects /> */}
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
      <HomeAccordion />
    </>
  );
};

export default Home;
