"use client";
import { useState } from "react";
import Logo from "../Logo";
import NavLink from "./NavLink";
import { CiMenuKebab } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";

const Navbar = () => {
  const [isSideBarOpened, setIsSideBarOpened] = useState<boolean>(false);
  return (
    <>
      <div className="flex justify-between items-center bg-transparent py-5 relative">
        <Logo />
        <div className="md:flex hidden items-center md:gap-6">
          <NavLink path="/" label="Home" />
          <NavLink path="/services" label="Services" />
          <NavLink path="/about-us" label="About Us" />
          <NavLink
            path="/projects"
            label="Projects"
            className="border border-white px-3 bg-white text-black hover:after:w-0 after:h-0 hover:bg-black hover:text-white transition-all"
          />
        </div>
        <div
          className="md:hidden block relative"
          onClick={() => setIsSideBarOpened(true)}
        >
          <CiMenuKebab color="#ffffff" size={40} />
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full bg-black text-white sm:w-[370px] w-full transform z-[999] ${
          isSideBarOpened ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6">
          <div className="flex justify-between">
            <RxCross1
              onClick={() => setIsSideBarOpened(false)}
              size={30}
              className=""
            />
          </div>

          <div className="flex flex-col items-center gap-10 pt-10">
            <NavLink path="/" label="Home" />
            <NavLink path="/projects" label="Projects" />
            <NavLink path="/services" label="Service" />
            <NavLink path="/about-us" label="About Us" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
