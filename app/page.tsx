import HeroSectionLayout from "@/components/Home/HeroSectionLayout";
import HeroSection from "@/components/Home/Hero/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import ServicesSection from "@/components/Home/Services/ServicesSection";
import CustomSlider from "@/components/Slider";
import HomeOurStack from "@/components/Home/HomeOurStack";
import HomeOurWorkProcess from "@/components/Home/HomeOurWorkProgress";
import HomeOurProjects from "@/components/Home/HomeOurProjects";
import HomeAccordion from "@/components/Home/HomeAccordion";

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
      <HomeOurProjects />
      <HomeAccordion />
    </>
  );
};

export default Home;
