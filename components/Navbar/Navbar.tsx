"use client";
import { useState } from "react";
import Logo from "../Logo";
import NavLink from "./NavLink";
import { CiMenuKebab } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isSideBarOpened, setIsSideBarOpened] = useState<boolean>(false);
  return (
    <>
      <div className="flex justify-between items-center bg-black py-6 px-5">
        <Logo />
        <div className="md:flex hidden items-center lg:gap-5">
          <NavLink path="/" label="Home" />
          <NavLink path="/projects" label="Projects" />
          <NavLink path="/services" label="Service" />
          <NavLink path="/about-us" label="About Us" />
        </div>
        <div
          className="md:hidden block relative"
          onClick={() => setIsSideBarOpened(true)}
        >
          <CiMenuKebab color="#ffffff" size={40} />
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full bg-black text-white sm:w-[370px] w-full transform ${
          isSideBarOpened ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6">
          <div className="flex justify-between">
            <RxCross1 onClick={() => setIsSideBarOpened(false)} size={30} />
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
