"use client";
import CountUp from 'react-countup';
import Image from 'next/image';
const AboutUsCommunication = () => {
    return (
        <>
            <div className="relative select-none h-full py-1">
                <div className="m-auto my-24 max-w-[1200px] ">
                    <h1 className="text-3xl md:text-6xl font-bold text-secondary mb-12 text-center">Software Development Process</h1>
                    <Image src="/Software-life-cycle.png" alt="Omentex Logo" width={1000} height={300} className="w-full block"/>
                    <h1 className="text-3xl md:text-6xl font-bold text-secondary mt-20 mb-16 text-center">Communication Channels We Use</h1>
                    <div className="grid grid-cols-[50%_50%] w-full m-auto gap-3 px-3 md:px-0 md:flex md:justify-center md:gap-12">
                        <div className="w-4/5 m-auto block md:w-full">
                            <Image src="/Communication/discord.png" alt="Omentex Logo" width={100} height={100} className="w-8 md:w-16 m-auto block"/>
                            <h2 className="text-secondary text-lg md:text-xl font-bold mt-3 md:my-3 text-center">Discord</h2>
                            <p className="text-secondary text-center text-sm md:text-base">for on going communication</p>
                        </div>
                        <div className="w-4/5 m-auto block md:w-full">
                            <Image src="/Communication/docs.png" alt="Omentex Logo" width={100} height={100} className="w-8 md:w-16 m-auto block"/>
                            <h2 className="text-secondary text-lg md:text-xl font-bold mt-3 md:my-3 text-center">Google Docs</h2>
                            <p className="text-secondary text-center text-sm md:text-base">for collaborating on documentation</p>
                        </div>
                        <div className="w-4/5 m-auto block md:w-full">
                            <Image src="/Communication/figma.png" alt="Omentex Logo" width={100} height={100} className="w-8 md:w-16 m-auto block"/>
                            <h2 className="text-secondary text-lg md:text-xl font-bold mt-3 md:my-3 text-center">Figma</h2>
                            <p className="text-secondary text-center text-sm md:text-base">for presenting wire frames & design</p>
                        </div>
                        <div className="w-4/5 m-auto block md:w-full">
                            <Image src="/Communication/trello.png" alt="Omentex Logo" width={100} height={100} className="w-8 md:w-16 m-auto block"/>
                            <h2 className="text-secondary text-lg md:text-xl font-bold mt-3 md:my-3 text-center">Trello</h2>
                            <p className="text-secondary text-center text-sm md:text-base">for project management</p>
                        </div>
                        <div className="w-4/5 m-auto block md:w-full">
                            <Image src="/Communication/meet.png" alt="Omentex Logo" width={100} height={100} className="w-8 md:w-16 m-auto block"/>
                            <h2 className="text-secondary text-lg md:text-xl font-bold mt-3 md:my-3 text-center">Google Meet</h2>
                            <p className="text-secondary text-center text-sm md:text-base">for video conferencing</p>
                        </div>
                        <div className="w-4/5 m-auto block md:w-full">
                            <Image src="/Communication/whatsapp.png" alt="Omentex Logo" width={100} height={100} className="w-8 md:w-16 m-auto block"/>
                            <h2 className="text-secondary text-lg md:text-xl font-bold mt-3 md:my-3 text-center">WhatsApp</h2>
                            <p className="text-secondary text-center text-sm md:text-base">for on going communication</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUsCommunication;