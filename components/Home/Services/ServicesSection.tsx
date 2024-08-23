import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <div className="2xl:p-20 xl:p-14 lg:p-6 md:p-4 p-3 bg-black" id="services">
      <h1 className="text-4xl text-white font-bold pb-6">Our Services:</h1>
      <div className="flex items-center justify-between gap-6 max-w-[1760px] w-full mx-auto flex-wrap">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default ServicesSection;
