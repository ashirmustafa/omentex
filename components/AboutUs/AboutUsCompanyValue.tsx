"use client";
import { FaHandshake } from "react-icons/fa";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { PiUserFocusFill } from "react-icons/pi";
import { TbBulbFilled } from "react-icons/tb";
import AnimateOnLoad from "../AnimateOnLoad";

const AboutUsCompanyValue = () => {
  return (
    <AnimateOnLoad>
        <div className="relative">
            <h1 className="text-3xl md:text-6xl font-bold text-secondary max-w-[1200px] mt-12 text-center">Company Values</h1>
            <div className="grid grid-cols-1 px-3 md:px-0 md:grid-cols-2 m-auto mb-32 mt-12 max-w-[1200px]">
                <div className="p-6 py-12 border border-slate-300 rounded-lg border-t-0">
                    <TbBulbFilled className="text-secondary text-6xl"/>
                    <h1 className="text-2xl font-bold text-secondary">Innovation</h1>
                    <p className="mt-3 text-secondary text-sm md:text-base">
                        We thrive on creativity and are driven to push the boundaries of technology. By fostering a culture of innovation, we deliver cutting-edge solutions that not only meet our clients needs but also exceed their expectations. We stay ahead of industry trends, exploring new tools, frameworks, and approaches to keep our solutions fresh and effective.
                    </p>
                </div>
                <div className="p-6 py-12 border border-slate-300 rounded-lg border-t-0">
                    <PiUserFocusFill className="text-secondary text-6xl" />
                    <h1 className="text-2xl font-bold text-secondary">Client-Centricity</h1>
                    <p className="mt-3 text-secondary text-sm md:text-base">
                        Our clients are at the heart of everything we do. We listen, understand, and adapt to their needs, ensuring that every project we take on aligns with their goals and vision. We believe in creating meaningful, long-term partnerships that drive mutual success.
                    </p>
                </div>
                <div className="p-6 py-12 border border-slate-300 rounded-lg border-t-0">
                    <HiMiniCheckBadge className="text-secondary text-6xl" />
                    <h1 className="text-2xl font-bold text-secondary">Quality</h1>
                    <p className="mt-3 text-secondary text-sm md:text-base">
                        We are committed to delivering the highest quality in every aspect of our work. From code integrity to user experience design, we follow best practices, rigorous testing, and quality assurance standards. Our goal is to ensure that every product we deliver is robust, secure, and optimized for performance.
                    </p>
                </div>
                <div className="p-6 py-12 border border-slate-300 rounded-lg border-t-0">
                    <FaHandshake className="text-secondary text-6xl" />
                    <h1 className="text-2xl font-bold text-secondary">Collaboration</h1>
                    <p className="mt-3 text-secondary text-sm md:text-base">
                        Great ideas come from working together. Our team fosters a collaborative environment where everyone’s input is valued. We also collaborate closely with our clients, ensuring open communication and transparency throughout the project lifecycle to achieve the best possible outcomes.
                    </p>
                </div>
            </div>
        </div>

    </AnimateOnLoad>
  );
};

export default AboutUsCompanyValue;
