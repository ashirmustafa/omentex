"use client";
import ServiceCard from "./ServiceCard";
import { IoLogoDesignernews } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaMobileScreen } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { BsFillShareFill, BsGraphUp } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";
import { BiCloud } from "react-icons/bi";

const ServicesSection = () => {
  return (
    <div
      className="2xl:p-20 xl:p-14 lg:p-6 md:p-4 p-3 bg-primary my-10 md:my-20"
      id="services"
    >
      <h1 className="text-3xl md:text-6xl text-secondary font-bold pb-3 md:pb-6 text-center mb-6">
        Our Services
      </h1>
      <div className="flex flex-col gap-8 ">
        <div className="flex items-center justify-center gap-1 max-w-[1200px] w-full mx-auto flex-wrap">
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
            path="trading-bots"
            title="Trading Bots"
            description="Boost your forex trading with our advanced, automated trading bots."
            Icon={BsGraphUp}
          />
          <ServiceCard
            path="cloud-engineering"
            title="Cloud Engineering"
            description="Optimize your business operations with our expert cloud engineering solutions."
            Icon={BiCloud}
          />
          <ServiceCard
            path="strategic-consultation"
            title="Strategic Consultation"
            description="We will guide you towards success with expert insights and tailored solutions."
            Icon={BsFillShareFill}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
