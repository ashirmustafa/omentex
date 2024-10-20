"use client";
import { FaLongArrowAltRight } from "react-icons/fa";
import AnimateOnLoad from "../AnimateOnLoad";
import Link from "next/link";
import GlitchText from "../GlitchText";

const AboutUsheroSection = () => {
  return (
    <AnimateOnLoad>
      <div className="relative select-none h-full">
        <div className="flex h-screen justify-center flex-col items-center">
          <GlitchText firstText="About Us" secondText=""/>
          <p className="text-primaryLight text-center md:mt-5 mt-3 md:text-base lg:text-xl text-sm md:px-0 px-10 lg:max-w-[1200px] max-w-full">
          Omentex is a technology company providing comprehensive digital solutions, including custom website development, mobile app development, graphics, marketing, Google Ads, and SEO. We leverage modern technologies like React, Next.js, and Node.js, along with trusted tools like PHP and WordPress, to deliver tailored digital experiences.
          </p>
          <p className="text-primaryLight text-center md:mt-5 mt-3 md:text-base lg:text-xl text-sm md:px-0 px-10 lg:max-w-[1200px] max-w-full">
          Our mission is to help businesses thrive in the digital landscape with innovative, engaging solutions. By combining creativity and technical expertise, we deliver high-quality results that effectively represent your brand and drive success.
          </p>
        </div>
      </div>
    </AnimateOnLoad>
  );
};

export default AboutUsheroSection;
