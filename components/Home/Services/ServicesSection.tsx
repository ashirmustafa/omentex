import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <div className="p-20 bg-black" id="services">
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
