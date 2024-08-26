import React from "react";
import Logo from "./Logo";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsArrowRightCircleFill } from "react-icons/bs";

interface SocialButtonProps {
  href: string;
  Icon: IconType;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, Icon }) => (
  <>
    <Link href={href}>
      <Icon size={30} />
    </Link>
  </>
);

const Footer = () => {
  return (
    <div className=" px-5 w-full bg-primary">
      <div className="max-w-[1760px] py-10 w-fullbg-secondary mx-auto ">
        <div className="flex lg:flex-row flex-col lg:gap-14 gap-8">
          <div className="flex flex-col gap-4">
            <Logo dark={false} />
            <p className="text-secondary">
              Elevating businessess through the transformative power of
              technology
            </p>
            <div className="flex items-center gap-4 text-secondary">
              <SocialButton
                href="https://www.facebook.com/ashirvfx/"
                Icon={FaFacebook}
              />
              <SocialButton
                href="https://www.linkedin.com/in/muhammad-ashir-153135235/"
                Icon={FaLinkedin}
              />
              <SocialButton
                href="https://www.instagram.com/ashircodes"
                Icon={FaInstagram}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 text-secondary">
            <h4 className="text-2xl font-bold">Contact Us:</h4>
            <div>
              <h6 className="text-lg font-bold">Address:</h6>
              Osborn House Osborn Terrace London SE3 9GB, United Kingdom
            </div>
            <div>
              <h6 className="text-lg font-bold">Address 2:</h6>
              5th Floor, Corporate Center, Business Park, Block B, Gulberg
              Greens, Islamabad, Pakistan
            </div>
            <div>
              <h6 className="text-lg font-bold">Email:</h6>
              info@omentex.com
            </div>
            <div>
              <h6 className="text-lg font-bold">Phone:</h6>
              +92 323 9652723
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-bold  text-secondary">Get a quote:</h4>
            <div className="rounded-full  relative bg-secondary mt-4">
              <input
                type="text"
                name=""
                id=""
                className="w-full outline-none bg-secondary border-none pl-4 pr-14 py-3 "
                placeholder="Email Address"
              />
              <BsArrowRightCircleFill
                className="absolute right-4 top-[10px] cursor-pointer text-primary"
                size={30}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center border-t">
        <p className="text-secondary py-2">
          Copyright 2024 All Rights Reserved by OMENTEX
        </p>
      </div>
    </div>
  );
};

export default Footer;
