"use client";
import AnimateOnLoad from "../AnimateOnLoad";
import { FaHotel, FaReact, FaHtml5, FaServer, FaSwift, FaLaravel, FaPhp, FaDigitalOcean, FaFigma, FaAws } from "react-icons/fa";
import { IoLogoNodejs, IoIosColorPalette } from "react-icons/io";
import { RiStackLine } from "react-icons/ri";
import { TbBrandKotlin, TbBrandMysql, TbBrandCypress} from "react-icons/tb";
import { SiMongodb, SiMicrosoftazure } from "react-icons/si";
import { BiLogoPostgresql, BiLogoGraphql } from "react-icons/bi";

import Image from "next/image";

const HomeOurStack = () => {
  return (
    <AnimateOnLoad>
      <div className="relative select-none h-full overflow-hidden">
        <div className="flex justify-center flex-col m-auto my-10 md:my-20 max-w-[1200px]">
            <h1 className="text-3xl md:text-6xl font-bold text-secondary text-center">Your Full-Stack Development Partner</h1>
            <div className="flex flex-wrap my-12 w-full max-w-[1200px] px-2 md:px-0">
                <div className="flex items-center text-secondary rounded-full border-2 border-orange-500 px-3 py-2 md:px-6 md:py-4 mx-2 my-2 text-base">
                    <RiStackLine className="mr-2" /> <p>Full-Stack</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-3 py-2 md:px-6 md:py-4 mx-2 my-2 text-base">
                    <FaReact className="mr-2" /> <p>ReactJs</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-green-600 px-3 py-2 md:px-6 md:py-4 mx-2 my-2 text-base">
                    <IoLogoNodejs className="mr-2" /> <p>NodeJs</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-orange-500 px-3 py-2 md:px-6 md:py-4 mx-2 my-2 text-base">
                    <FaHtml5 className="mr-2" /> <p>Front-End</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-3 py-2 md:px-6 md:py-4 mx-2 my-2 text-base">
                    <FaServer className="mr-2" /> <p>Back-End</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-pink-500 px-3 py-2 md:px-6 md:py-4 mx-2 my-2 text-base">
                    <TbBrandKotlin className="mr-2" /> <p>Kotlin</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-orange-500 px-3 py-2 md:px-6 md:py-4 mx-2 my-2 text-base">
                    <FaSwift className="mr-2" /> <p>Swift</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-red-500 px-3 py-2 md:px-6 md:py-4 mx-2 my-2 text-base">
                    <FaLaravel className="mr-2" /> <p>Laravel</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-3 py-2 md:px-6 md:py-4 mx-2 my-2 text-base">
                    <FaPhp className="mr-2" /> <p>PHP</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-orange-300 px-3 py-2 md:px-6 md:py-4 mx-2 my-2 text-base">
                    <TbBrandMysql className="mr-2" /> <p>MySQL</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-green-500 px-3 py-2 md:px-6 md:py-4 mx-2 my-2 text-base">
                    <SiMongodb className="mr-2" /> <p>MongoDB</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-3 py-2 md:px-6 md:py-4 mx-2 my-2 text-base">
                    <BiLogoPostgresql className="mr-2" /> <p>PostgreSQL</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-pink-500 px-3 py-2 md:px-6 md:py-4 mx-2 my-2 text-base">
                    <BiLogoGraphql className="mr-2" /> <p>GraphQL</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-3 py-2 md:px-6 md:py-4 mx-2 my-2 text-base">
                    <SiMicrosoftazure className="mr-2" /> <p>MS Azure</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-orange-500 px-3 py-2 md:px-6 md:py-4 mx-2 my-2 text-base">
                    <FaAws className="mr-2" /> <p>AWS</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-3 py-2 md:px-6 md:py-4 mx-2 my-2 text-base">
                    <FaDigitalOcean className="mr-2" /> <p>Digital Ocean</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-purple-500 px-3 py-2 md:px-6 md:py-4 mx-2 my-2 text-base">
                    <FaFigma className="mr-2" /> <p>Ui / Ux</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-blue-500 px-3 py-2 md:px-6 md:py-4 mx-2 my-2 text-base">
                    <IoIosColorPalette className="mr-2" /> <p>Graphics</p>
                </div>
                <div className="flex items-center text-secondary rounded-full border-2 border-green-500 px-3 py-2 md:px-6 md:py-4 mx-2 my-2 text-base">
                    <TbBrandCypress className="mr-2" /> <p>SQA</p>
                </div>
            </div>
        </div>
      </div>
    </AnimateOnLoad>
  );
};

export default HomeOurStack;
