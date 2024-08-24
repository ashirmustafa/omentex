"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoLogoDesignernews } from "react-icons/io5";

const ServiceCard = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div
      className="flex gap-3 px-5 py-7 bg-secondary rounded-md shadow-lg lg:max-w-[32%] w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IoLogoDesignernews size={40} />
      <div>
        <h1
          className={`text-xl font-bold select-none  transition-all duration-500 ${
            isHovered
              ? "tracking-widest scale-105 translate-x-3 font-extrabold"
              : ""
          }`}
        >
          UX Research
        </h1>
        <p className="select-none">
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
