import HeroSectionLayout from "@/components/Home/HeroSectionLayout";
import Navbar from "@/components/Navbar/Navbar";
import AboutUsHeroSection from "@/components/AboutUs/AboutUsHero";
import AboutUsOurVisionSection from "@/components/AboutUs/AboutUsVision";
import AboutUsCounterSection from "@/components/AboutUs/AboutUsCounter";
import AboutUsCompanyValue from "@/components/AboutUs/AboutUsCompanyValue";
import CustomSlider from "@/components/Slider";
import AboutUsCommunication from "@/components/AboutUs/AboutUsCommunication";

import React from "react";

const AboutUs = () => {
  return (
    <>
      <HeroSectionLayout scrollHref="#contact-form">
        <Navbar />
        <AboutUsHeroSection />
      </HeroSectionLayout>
      <AboutUsOurVisionSection />
      <AboutUsCounterSection />
      <AboutUsCompanyValue />
      <CustomSlider />
      <AboutUsCommunication />
    </>
  );
};

export default AboutUs;
