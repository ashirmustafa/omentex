"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IconType } from "react-icons";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: IconType;
  path: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  Icon,
  path,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="flex gap-3 px-5 py-7 bg-[#323232] hover:bg-secondary rounded-md shadow-lg lg:max-w-[32%] w-full hover:scale-95 transition-all text-secondary hover:text-primary self-stretch"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Render the icon using JSX */}
      <Icon className="text-4xl -mt-1 " />
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-2">
          <h1
            className={`text-xl font-medium select-none  `}
          >
            {title}
          </h1>
          <p className="select-none pt-2 ">{description}</p>
        </div>
        <div className="flex justify-end self-end">
          <Link href={`services/${path}`} className={`underline font-semibold text-[#323232]`}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
