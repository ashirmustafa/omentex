"use client";
import AnimateOnLoad from "../AnimateOnLoad";
import { FaHotel } from "react-icons/fa";
import Image from "next/image";

const HomeOurStack = () => {
  return (
    <AnimateOnLoad>
      <div className="relative select-none h-full overflow-hidden">
        <div className="flex justify-center flex-col m-auto my-20 max-w-[1200px]">
            <h1 className="text-6xl font-bold text-secondary text-center">Your Full-Stack Development Partner</h1>
            <div className="flex flex-wrap my-12 w-full max-w-[1200px]">
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-6 py-4 mx-2 my-2 text-base">
                    <FaHotel className="mr-2" /> <p>Full-Stack</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-6 py-4 mx-2 my-2 text-base">
                    <FaHotel className="mr-2" /> <p>ReactJs</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-6 py-4 mx-2 my-2 text-base">
                    <FaHotel className="mr-2" /> <p>NodeJs</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-6 py-4 mx-2 my-2 text-base">
                    <FaHotel className="mr-2" /> <p>Front-End</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-6 py-4 mx-2 my-2 text-base">
                    <FaHotel className="mr-2" /> <p>Back-End</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-6 py-4 mx-2 my-2 text-base">
                    <FaHotel className="mr-2" /> <p>Kotlin</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-6 py-4 mx-2 my-2 text-base">
                    <FaHotel className="mr-2" /> <p>Swift</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-6 py-4 mx-2 my-2 text-base">
                    <FaHotel className="mr-2" /> <p>Laravel</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-6 py-4 mx-2 my-2 text-base">
                    <FaHotel className="mr-2" /> <p>PHP</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-6 py-4 mx-2 my-2 text-base">
                    <FaHotel className="mr-2" /> <p>MySQL</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-6 py-4 mx-2 my-2 text-base">
                    <FaHotel className="mr-2" /> <p>MongoDB</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-6 py-4 mx-2 my-2 text-base">
                    <FaHotel className="mr-2" /> <p>PostgreSQL</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-6 py-4 mx-2 my-2 text-base">
                    <FaHotel className="mr-2" /> <p>MS Azure</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-6 py-4 mx-2 my-2 text-base">
                    <FaHotel className="mr-2" /> <p>Digital Ocean</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-6 py-4 mx-2 my-2 text-base">
                    <FaHotel className="mr-2" /> <p>AWS</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-6 py-4 mx-2 my-2 text-base">
                    <FaHotel className="mr-2" /> <p>Graphics</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-6 py-4 mx-2 my-2 text-base">
                    <FaHotel className="mr-2" /> <p>Ui / Ux</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-6 py-4 mx-2 my-2 text-base">
                    <FaHotel className="mr-2" /> <p>SQA</p>
                </div>
            </div>
        </div>
      </div>
    </AnimateOnLoad>
  );
};

export default HomeOurStack;
