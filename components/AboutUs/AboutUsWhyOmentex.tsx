"use client";
import AnimateOnLoad from "../AnimateOnLoad";
import { SiTicktick } from "react-icons/si";

const AboutUsWhyOmentex = () => {
  return (
    <AnimateOnLoad>
      <div className="relative" id="WhyOmentex">
        <div className="flex justify-center flex-col m-auto my-10 md:my-32 max-w-[1200px] px-3 md:px-0">
            <h1 className="text-3xl md:text-6xl font-bold text-secondary text-center mb-10">Why Omentex</h1>
            <h2 className="text-secondary text-2xl font-bold flex mt-6"><SiTicktick className="mr-3"/>7 Days Satisfaction Period.</h2>
            <p className="text-secondary text-sm md:text-base text-center md:text-left">We provide 7-days satisfaction guarantee. If you're not completely satisfied with out results, you're free to choose another service provider.</p>
            <h2 className="text-secondary text-2xl font-bold flex mt-6"><SiTicktick className="mr-3"/>100% Money Back Guarantee.</h2>
            <p className="text-secondary text-sm md:text-base text-center md:text-left">Even after the initial 7 days, we continue to stand by our commitment with a 100% money-back guarantee. Should you remain dissatisfied simply cancel the contract within 2 weeks of project commencement to receive a full refund.</p>
            <h2 className="text-secondary text-2xl font-bold flex mt-6"><SiTicktick className="mr-3"/>30 Days Free Post Launch Support.</h2>
            <p className="text-secondary text-sm md:text-base text-center md:text-left">Following the launch of your project, we provide complimentary support for the initial 30 days to ensure a seamless customer onboarding experience.</p>
            <h2 className="text-secondary text-2xl font-bold flex mt-6"><SiTicktick className="mr-3"/>Ongoing Support and Maintenance.</h2>
            <p className="text-secondary text-sm md:text-base text-center md:text-left">At Omentex. our commitment extends beyond project completion.We partner with you to facilitate the seamless scaling of your application as your bussiness grows.Our team conducts regular updates while prioritizing the security and integrity of your application.</p>
        </div>
      </div>
    </AnimateOnLoad>
  );
};

export default AboutUsWhyOmentex;
