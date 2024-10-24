"use client";
import { FaHotel } from "react-icons/fa";
import AnimateOnLoad from "../AnimateOnLoad";

const AboutUsCompanyValue = () => {
  return (
    <AnimateOnLoad>
        <div className="relative">
            <h1 className="text-3xl md:text-6xl font-bold text-secondary max-w-[1200px] mt-12 text-center">Company Values</h1>
            <div className="grid grid-cols-1 px-3 md:px-0 md:grid-cols-2 m-auto mb-32 mt-12 max-w-[1200px]">
                <div className="p-6 py-12 border border-slate-300 rounded-lg border-t-0">
                    <FaHotel className="text-secondary"/>
                    <h1 className="text-2xl font-bold text-secondary">Our Vision</h1>
                    <p className="mt-3 text-secondary text-sm md:text-base">
                        Omentex is a technology company providing comprehensive digital solutions, including custom website development, mobile app development, graphics, marketing, Google Ads, and SEO. We leverage modern technologies like React, Next.js, and Node.js, along with trusted tools like PHP and WordPress, to deliver tailored digital experiences.
                    </p>
                </div>
                <div className="p-6 py-12 border border-slate-300 rounded-lg border-t-0">
                    <FaHotel className="text-secondary" />
                    <h1 className="text-2xl font-bold text-secondary">Our Vision</h1>
                    <p className="mt-3 text-secondary text-sm md:text-base">
                        Omentex is a technology company providing comprehensive digital solutions, including custom website development, mobile app development, graphics, marketing, Google Ads, and SEO. We leverage modern technologies like React, Next.js, and Node.js, along with trusted tools like PHP and WordPress, to deliver tailored digital experiences.
                    </p>
                </div>
                <div className="p-6 py-12 border border-slate-300 rounded-lg border-t-0">
                    <FaHotel className="text-secondary" />
                    <h1 className="text-2xl font-bold text-secondary">Our Vision</h1>
                    <p className="mt-3 text-secondary text-sm md:text-base">
                        Omentex is a technology company providing comprehensive digital solutions, including custom website development, mobile app development, graphics, marketing, Google Ads, and SEO. We leverage modern technologies like React, Next.js, and Node.js, along with trusted tools like PHP and WordPress, to deliver tailored digital experiences.
                    </p>
                </div>
                <div className="p-6 py-12 border border-slate-300 rounded-lg border-t-0">
                    <FaHotel className="text-secondary" />
                    <h1 className="text-2xl font-bold text-secondary">Our Vision</h1>
                    <p className="mt-3 text-secondary text-sm md:text-base">
                        Omentex is a technology company providing comprehensive digital solutions, including custom website development, mobile app development, graphics, marketing, Google Ads, and SEO. We leverage modern technologies like React, Next.js, and Node.js, along with trusted tools like PHP and WordPress, to deliver tailored digital experiences.
                    </p>
                </div>
            </div>
        </div>

    </AnimateOnLoad>
  );
};

export default AboutUsCompanyValue;
