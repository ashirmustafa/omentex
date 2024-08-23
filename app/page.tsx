import HomeLayout from "@/components/Home/HomeLayout";
import HeroSection from "@/components/Home/Hero/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import ServicesSection from "@/components/Home/Services/ServicesSection";

const Home = () => {
  return (
    <>
      <HomeLayout>
        <Navbar />
        <HeroSection />
      </HomeLayout>
      <ServicesSection />
    </>
  );
};

export default Home;
