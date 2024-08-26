"use client";
import AnimateOnLoad from "../AnimateOnLoad";
import GlitchText from "../GlitchText";
import CustomSlider from "../Slider";

const ProjectsHeroSection = () => {
  return (
    <AnimateOnLoad>
      <div className="relative select-none h-full">
        <div className="flex h-screen justify-center flex-col items-center">
          <GlitchText firstText="Trusted by" secondText="100+ global brands" />
          <p className="text-primaryLight text-center md:mt-5 mt-3 md:text-base lg:text-xl text-sm md:px-0 px-10 lg:max-w-[700px] max-w-full">
            Discover the driving force behind our success – the extraordinary
            partnerships that fuel innovation and deliver unmatched results.
          </p>
          <div className="w-full mt-6 absolute bottom-0 left-0">
            <CustomSlider />
          </div>
        </div>
      </div>
    </AnimateOnLoad>
  );
};

export default ProjectsHeroSection;
