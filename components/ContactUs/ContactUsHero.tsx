"use client";
import { FaLongArrowAltRight } from "react-icons/fa";
import AnimateOnLoad from "../AnimateOnLoad";
import Link from "next/link";
import GlitchText from "../GlitchText";

const ContactUsHeroSection = () => {
  return (
    <AnimateOnLoad>
      <div className="relative select-none h-full">
        <div className="pt-48 flex h-full justify-center flex-col items-center">
          {/* <h1 className="text-secondary md:text-3xl lg:text-5xl xl:text-7xl text-lg font-bold text-center leading-10 glitch">
            Transcend the <br />
            limits of technology
          </h1> */}
          <GlitchText firstText="Connect with us" secondText="" />
          <p className="text-primaryLight text-center md:mt-5 mt-3 md:text-base lg:text-xl text-sm md:px-0 px-10 lg:max-w-[600px] max-w-full">
            Complete the form to schedule a demo or ask questions about the ways
            we can support your business goals.
          </p>
        </div>
      </div>
    </AnimateOnLoad>
  );
};

export default ContactUsHeroSection;
