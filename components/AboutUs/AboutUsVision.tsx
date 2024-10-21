"use client";
import AnimateOnLoad from "../AnimateOnLoad";
import Image from "next/image";

const AboutUsVisionSection = () => {
  return (
    <AnimateOnLoad>
      <div className="relative select-none h-full overflow-hidden">
        <Image src="/Omentex-Circle-Logo.png" alt="Omentex Logo" width={300} height={300} className="absolute -right-20 top-20 opacity-50"/>
        <div className="flex justify-center flex-col m-auto my-32 max-w-[1200px]">
            <h1 className="text-6xl font-bold text-secondary">Our Vision</h1>
            <p className="mt-3 text-secondary">
                Omentex is a technology company providing comprehensive digital solutions, including custom website development, mobile app development, graphics, marketing, Google Ads, and SEO. We leverage modern technologies like React, Next.js, and Node.js, along with trusted tools like PHP and WordPress, to deliver tailored digital experiences.
            </p>
            <p className="mt-3 text-secondary">
                Our mission is to help businesses thrive in the digital landscape with innovative, engaging solutions. By combining creativity and technical expertise, we deliver high-quality results that effectively represent your brand and drive success.
            </p>
        </div>
      </div>
    </AnimateOnLoad>
  );
};

export default AboutUsVisionSection;
