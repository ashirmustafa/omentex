"use client";
import CountUp from 'react-countup';
const AboutUsCounterSection = () => {
    return (
        <>
            <div className="relative select-none h-full bg-slate-300 py-1">
                <div className="grid grid-cols-[50%_50%] gap-3 p-3 md:p-0 md:flex justify-center m-auto my-10 md:my-32 max-w-[1200px] text-center">
                    <div className="mx-2 md:mx-12">
                        <CountUp start={0} end={15} duration={3} className='text-3xl md:text-5xl font-bold'></CountUp>
                        <h1 className="text-sm md:text-xl md:font-bold">Years of Experience</h1>
                    </div>
                    <div className="mx-2 md:mx-12">
                        <CountUp start={0} end={20} duration={3} className='text-3xl md:text-5xl font-bold'></CountUp>
                        <h1 className="text-sm md:text-xl md:font-bold">Qualified Professional</h1>
                    </div>
                    <div className="mx-2 md:mx-12">
                        <CountUp start={0} end={110} duration={3} className='text-3xl md:text-5xl font-bold'></CountUp>
                        <h1 className="text-sm md:text-xl md:font-bold">Project Completed</h1>
                    </div>
                    <div className="mx-2 md:mx-12">
                        <CountUp start={0} end={10} duration={3} className='text-3xl md:text-5xl font-bold'></CountUp>
                        <h1 className="text-sm md:text-xl md:font-bold">Countries with Active Client Base</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUsCounterSection;