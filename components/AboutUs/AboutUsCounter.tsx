"use client";
import CountUp from 'react-countup';
const AboutUsCounterSection = () => {
    return (
        <>
            <div className="relative select-none h-full bg-slate-300 py-1">
                <div className="flex justify-center m-auto my-24 max-w-[1200px] text-center">
                    <div className="mx-12">
                        <CountUp start={0} end={15} duration={3} className='text-5xl font-bold'></CountUp>
                        <h1 className="font-bold">Years of Experience</h1>
                    </div>
                    <div className="mx-12">
                        <CountUp start={0} end={20} duration={3} className='text-5xl font-bold'></CountUp>
                        <h1 className="font-bold">Qualified Professional</h1>
                    </div>
                    <div className="mx-12">
                        <CountUp start={0} end={110} duration={3} className='text-5xl font-bold'></CountUp>
                        <h1 className="font-bold">Project Completed</h1>
                    </div>
                    <div className="mx-12">
                        <CountUp start={0} end={10} duration={3} className='text-5xl font-bold'></CountUp>
                        <h1 className="font-bold">Countries with Active Client Base</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUsCounterSection;