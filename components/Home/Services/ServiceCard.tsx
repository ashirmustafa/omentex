import Link from "next/link";
import React from "react";
import { IoLogoDesignernews } from "react-icons/io5";

const ServiceCard = () => {
  return (
    <div className="flex gap-3 px-5 py-7 bg-white rounded-md shadow-lg xl:max-w-[30%] w-full">
      <IoLogoDesignernews  size={30}/>
      <div>
        <h1 className="text-xl font-bold">UX Research</h1>
        <p>
          Explore our range of robust cloud services for scalable and secure
          business solutions.
        </p>
        <Link href="services/ux-research" className="underline font-semibold">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
