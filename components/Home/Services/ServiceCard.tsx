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
      className="flex gap-3 px-5 py-7 bg-secondary rounded-md shadow-lg lg:max-w-[32%] w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Render the icon using JSX */}
      <Icon className="text-4xl -mt-1" />
      <div>
        <div className="flex flex-col gap-2">
          <h1
            className={`text-xl font-bold select-none transition-all duration-500 ${
              isHovered
                ? "tracking-widest scale-105 translate-x-3 font-extrabold"
                : ""
            }`}
          >
            {title}
          </h1>
          <p className="select-none pt-2">{description}</p>
        </div>
        <Link href={`services/${path}`} className="underline font-semibold">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
