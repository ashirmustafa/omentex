"use client";
import AnimateOnLoad from "../AnimateOnLoad";
import { FaHotel } from "react-icons/fa";
import Image from "next/image";

const HomeOurProjects = () => {
  return (
    <AnimateOnLoad>
      <div className="relative select-none h-full overflow-hidden">
        <div className="flex justify-center flex-col m-auto my-10 md:my-20 max-w-[1200px]">
            <h1 className="text-3xl md:text-6xl font-bold text-secondary text-center">Our Work & Creative Projects</h1>
            <div className="block md:flex md:flex-wrap my-12 w-full max-w-[1200px] px-3 md:px-0">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 m-3">
                    <Image 
                        src="/safra.png" 
                        alt="" 
                        width={376} 
                        height={400} 
                        className="h-72 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Safra</h2>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 m-3">
                    <Image 
                        src="/egtos.png" 
                        alt="" 
                        width={376} 
                        height={400} 
                        className="h-72 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">EGTOS</h2>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 m-3">
                    <Image 
                        src="/dubaibus.png" 
                        alt="" 
                        width={376} 
                        height={400} 
                        className="h-72 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Bus Advertising</h2>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 m-3">
                    <Image 
                        src="/transportmedia.png" 
                        alt="" 
                        width={376} 
                        height={400} 
                        className="h-72 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Transport Media UK</h2>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 m-3">
                    <Image 
                        src="/favarr.png" 
                        alt="" 
                        width={376} 
                        height={400} 
                        className="h-72 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Favarr</h2>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 m-3">
                    <Image 
                        src="/hannun.png" 
                        alt="" 
                        width={376} 
                        height={400} 
                        className="h-72 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Hannun</h2>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </AnimateOnLoad>
  );
};

export default HomeOurProjects;
