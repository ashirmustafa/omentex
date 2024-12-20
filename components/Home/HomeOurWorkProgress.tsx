"use client";
import AnimateOnLoad from "../AnimateOnLoad";
import { FaArrowCircleDown } from "react-icons/fa";

const HomeOurWorkProcess = () => {
  return (
    <AnimateOnLoad>
      <div className="relative select-none h-full overflow-hidden">
        <div className="flex justify-center flex-col m-auto my-10 md:my-20 max-w-[1200px]">
            <h1 className="text-3xl md:text-6xl font-bold text-secondary text-center">Our Work Process</h1>
            <div className="grid grid-cols-[60%_40%] md:grid-cols-[70%_30%] gap-x-2 md:gap-x-6 my-8 px-4 md:px-0">
                <div className="flex items-center text-secondary">
                    <FaArrowCircleDown className="mr-4 text-secondary text-xl sm:text-2xl md:text-3xl hidden md:block" />
                    <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">Ideation & Design</h2>
                </div>
                <div className="flex items-center text-secondary text-sm md:text-xl border-l border-r border-b border-gray-300 p-4">
                    <p>Project Completion Rate: 100%</p>
                </div>
                <div className="flex items-center text-secondary">
                    <FaArrowCircleDown className="mr-4 text-secondary text-xl sm:text-2xl md:text-3xl hidden md:block" />
                    <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">Development & Implementation</h2>
                </div>
                <div className="flex items-center text-secondary text-sm md:text-xl border-l border-r border-b border-gray-300 p-4">
                    <p>Project Delivered: 70+</p>
                </div>
                <div className="flex items-center text-secondary">
                    <FaArrowCircleDown className="mr-4 text-secondary text-xl sm:text-2xl md:text-3xl hidden md:block" />
                    <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">Ongoing Maintenance</h2>
                </div>
                <div className="flex items-center text-secondary text-sm md:text-xl border-l border-r border-b border-gray-300 p-4">
                    <p>Years of Industry Experience: 12+</p>
                </div>
                <div className="flex items-center text-secondary">
                    <FaArrowCircleDown className="mr-4 text-secondary text-xl sm:text-2xl md:text-3xl hidden md:block" />
                    <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">Customer Support</h2>
                </div>
                <div className="flex items-center text-secondary text-sm md:text-xl border-l border-r border-b border-gray-300 p-4">
                    <p>Client Retention Rate: 90%</p>
                </div>
            </div>
        </div>
      </div>
    </AnimateOnLoad>
  );
};

export default HomeOurWorkProcess;
