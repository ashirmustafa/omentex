"use client";
import { useState } from "react";
import Logo from "../Logo";
import NavLink from "./NavLink";
import { CiMenuKebab } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isSideBarOpened, setIsSideBarOpened] = useState<boolean>(false);
  return (
    <>
      <div className="flex justify-between items-center bg-transparent py-5 relative">
        <Logo />
        <div className="md:flex hidden items-center gap-4">
          <div className="flex items-center md:gap-6 border-2 border-[#999999] py-3 px-5 rounded-full">
            <NavLink path="/" label="Home" />
            <NavLink path="/services" label="Services" />
            <NavLink path="/about-us" label="About Us" />
            <NavLink path="/contact-us" label="Contact Us" />
            <button
              className="border border-white px-3 py-1 bg-white text-black hover:bg-black hover:text-white transition-all rounded-full"
              onClick={() => router.push("/projects")}
            >
              Projects
            </button>
          </div>
          <button
            className="w-16 h-16 border-2 border-white rounded-full text-white flex items-center justify-center text-[10px] hover:scale-110 transition-all duration-1000 hover:rotate-[360deg] hover:font-bold hover:bg-white hover:text-black hover:tracking-[3px] "
            onClick={() => router.push("/order-now")}
          >
            Order <br /> Now
          </button>
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
            <NavLink path="/services" label="Service" />
            <NavLink path="/about-us" label="About Us" />
            <NavLink path="/projects" label="Projects" />
            <button
              className="text-lg text-[#999999] hover:text-white flex items-center justify-center "
              onClick={() => router.push("/order-now")}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
