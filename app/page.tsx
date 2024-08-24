import HeroSectionLayout from "@/components/Home/HeroSectionLayout";
import HeroSection from "@/components/Home/Hero/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import ServicesSection from "@/components/Home/Services/ServicesSection";

const Home = () => {
  return (
    <>
      <HeroSectionLayout scrollHref="#services">
        <Navbar />
        <HeroSection />
      </HeroSectionLayout>
      <ServicesSection />
    </>
  );
};

export default Home;
