import React from "react";

const page = () => {
  return (
    <div className="bg-black h-screen flex  flex-col justify-center items-center ">
      <div className="max-w-5xl">
        <h1 className="text-white py-6 lg:text-6xl text-3xl font-bold">
          About US
        </h1>
        <div className="flex flex-col gap-3">
          <p className="text-white text-xl">
            Omentex is a technology company providing comprehensive digital
            solutions, including custom website development, mobile app
            development, graphics, marketing, Google Ads, and SEO. We leverage
            modern technologies like React, Next.js, and Node.js, along with
            trusted tools like PHP and WordPress, to deliver tailored digital
            experiences.
          </p>
          <p className="text-white text-xl">
            Our mission is to help businesses thrive in the digital landscape
            with innovative, engaging solutions. By combining creativity and
            technical expertise, we deliver high-quality results that
            effectively represent your brand and drive success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
