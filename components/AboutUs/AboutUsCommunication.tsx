"use client";
import CountUp from 'react-countup';
import Image from 'next/image';
const AboutUsCommunication = () => {
    return (
        <>
            <div className="relative select-none h-full py-1">
                <div className="flex justify-center m-auto my-24 max-w-[1200px] text-center">
                    <h1 className="text-6xl font-bold text-secondary text-center">Software Development Process</h1>
                    <Image src="/Software-life-cycle.png" alt="Omentex Logo" width={1000} height={300} className="w-full block"/>
                </div>
            </div>
        </>
    );
};

export default AboutUsCommunication;