"use client";
import AnimateOnLoad from "../AnimateOnLoad";
import Image from "next/image";

const AboutUsVisionSection = () => {
  return (
    <AnimateOnLoad>
      <div className="relative select-none h-full overflow-hidden">
        <div className="flex justify-center flex-col m-auto my-10 md:my-32 max-w-[1200px] px-3 md:px-0">
            <h1 className="text-3xl md:text-6xl font-bold text-secondary text-center mb-10">Our Vision</h1>
            <p className="mt-3 text-secondary text-sm md:text-base text-center md:text-left">
                Omentex is a technology company providing comprehensive digital solutions, including custom website development, mobile app development, graphics, marketing, Google Ads, and SEO. We leverage modern technologies like React, Next.js, and Node.js, along with trusted tools like PHP and WordPress, to deliver tailored digital experiences.
            </p>
            <p className="mt-3 text-secondary text-sm md:text-base text-center md:text-left">
                Our mission is to help businesses thrive in the digital landscape with innovative, engaging solutions. By combining creativity and technical expertise, we deliver high-quality results that effectively represent your brand and drive success.
            </p>
        </div>
        <Image src="/Omentex-Circle-Logo-white.png" alt="Omentex Logo" width={300} height={300} className="relative block m-auto w-1/5 mb-10 md:w-auto md:absolute md:-right-20 md:top-20 opacity-50"/>
      </div>
    </AnimateOnLoad>
  );
};

export default AboutUsVisionSection;
