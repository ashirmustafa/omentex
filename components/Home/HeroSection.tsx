import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="pt-32 flex justify-center flex-col items-center">
      <h1 className="text-white md:text-3xl text-lg font-bold text-center">
        Reliable game server hosting
      </h1>
      <p className="text-[#999999] text-center md:mt-5 mt-3 md:text-base text-sm md:px-0 px-10">
        With great network speed and easy control panel
      </p>
      <button className="mt-6 flex text-white border w-max px-4 py-2 items-center gap-2 rounded-[60px] hover:bg-white hover:text-black transition-all md:text-base text-sm">
        Get Started Now <FaLongArrowAltRight />
      </button>
    </div>
  );
};

export default HeroSection;
