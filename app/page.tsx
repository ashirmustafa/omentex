import HomeLayout from "@/components/Home/HomeLayout";
import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <HomeLayout>
        <Navbar />
        <HeroSection />
      </HomeLayout>
    </>
  );
};

export default Home;
