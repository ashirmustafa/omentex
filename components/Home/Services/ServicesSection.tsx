"use client";
import ServiceCard from "./ServiceCard";
import { IoLogoDesignernews } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaMobileScreen } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { BsFillShareFill } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";

const ServicesSection = () => {
  return (
    <div
      className="2xl:p-20 xl:p-14 lg:p-6 md:p-4 p-3 bg-primary"
      id="services"
    >
      <h1 className="text-6xl text-secondary font-bold pb-6 text-center">
        Our Services
      </h1>
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl text-secondary font-bold">Development:</h1>
        <div className="flex items-center justify-between gap-6 max-w-[1760px] w-full mx-auto flex-wrap">
          <ServiceCard
            path="uiux-design"
            title="UI/UX Design"
            description="Allow our design principles communicate the values and identity of your brand."
            Icon={IoLogoDesignernews}
          />
          <ServiceCard
            path="web-apps"
            title="Web Applications"
            description="Discover the full potential of your business with our custom web applications."
            Icon={AiOutlineGlobal}
          />
          <ServiceCard
            path="shopify-apps"
            title="Shopify Applications"
            description="Enhance your Shopify store with our innovative applications to maximize sales."
            Icon={IoMdCart}
          />
          <ServiceCard
            path="seo-optimzation"
            title="SEO Optimization"
            description="Boost your online visibility and drive traffic with our expert SEO optimization services."
            Icon={TbTargetArrow}
          />
          <ServiceCard
            path="mobile-apps"
            title="Mobile Applications"
            description="Discover the full potential of your business with our custom mobile hybrid applications."
            Icon={FaMobileScreen}
          />
          <ServiceCard
            path="strategic-consultation"
            title="Strategic Consultation"
            description="We will guide you towards success with expert insights and tailored solutions."
            Icon={BsFillShareFill}
          />
        </div>
        <hr className="w-full bg-primaryLight h-[2px]" />
      </div>
    </div>
  );
};

export default ServicesSection;
