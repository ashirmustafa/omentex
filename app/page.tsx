import HeroLayout from "@/components/Home/HeroLayout";
import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <HeroLayout>
        <Navbar />
        <HeroSection />
      </HeroLayout>
    </>
  );
};

export default Home;
