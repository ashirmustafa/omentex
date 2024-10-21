"use client";
import { FaLongArrowAltRight } from "react-icons/fa";
import AnimateOnLoad from "../../AnimateOnLoad";
import Link from "next/link";
import GlitchText from "../../GlitchText";

const HeroSection = () => {
  return (
    <AnimateOnLoad>
      <div className="relative select-none h-full">
        <div className="flex h-screen justify-center flex-col items-center">
          <GlitchText
            firstText="Transcend the"
            secondText="limits of technology"
          />
          <p className="text-primaryLight text-center md:mt-5 mt-3 md:text-base lg:text-xl text-sm md:px-0 px-10">
            We build digital platforms that drive business growth.
          </p>
          <div className="flex md:flex-row flex-col md:gap-10 gap-6">
            <button className="mt-6 flex text-secondary font-medium border w-[200px] justify-center py-2 items-center gap-2 rounded-[6px] hover:bg-secondary hover:text-primary transition-all md:text-base text-sm">
              Why OMENTEX ?
            </button>
          </div>
        </div>
      </div>
    </AnimateOnLoad>
  );
};

export default HeroSection;
