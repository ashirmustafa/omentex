"use client";
import { useState } from "react";
import Logo from "../Logo";
import NavLink from "./NavLink";
import { CiMenuKebab } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isSideBarOpened, setIsSideBarOpened] = useState<boolean>(false);
  return (
    <div className="relative">
      <div className="bg-primary fixed top-0 left-0 right-0 z-40">
        <div className="flex justify-between items-center py-5 mx-auto max-w-[1760px] pl-5 pr-2 w-full">
          <Logo />
          <div className="md:flex hidden items-center gap-4">
            <div className="flex items-center md:gap-6 border-2 border-primaryLight py-3 px-5 rounded-full">
              <NavLink path="/" label="Home" />
              <NavLink path="/#services" label="Services" />
              <NavLink path="/about-us" label="About Us" />
              <NavLink path="/contact-us" label="Contact Us" />
              <button
                className="border border-secondary px-3 font-extrabold py-1 bg-[#fffff2] text-primary hover:bg-primary hover:text-secondary transition-all rounded-full"
                onClick={() => router.push("/projects")}
              >
                Projects
              </button>
            </div>
            <button
              className="w-16 h-16 border-2 border-secondary rounded-full text-secondary flex items-center justify-center text-[10px] hover:scale-110 transition-all duration-1000 hover:rotate-[360deg] hover:font-bold hover:bg-secondary hover:text-primary hover:tracking-[3px]"
              onClick={() => router.push("/order-now")}
            >
              Order <br /> Now
            </button>
          </div>
          <div
            className="md:hidden block relative"
            onClick={() => setIsSideBarOpened(true)}
          >
            <CiMenuKebab className="text-secondary" size={40} />
          </div>
        </div>

        <div
          className={`fixed top-0 right-0 h-full bg-primary text-secondary sm:w-[370px] w-full transform z-[999] ${
            isSideBarOpened ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="p-6">
            <div className="flex justify-between">
              <RxCross1 onClick={() => setIsSideBarOpened(false)} size={30} />
            </div>

            <div className="flex flex-col items-center gap-10 pt-10">
              <NavLink path="/" label="Home" />
              <NavLink path="/services" label="Service" />
              <NavLink path="/about-us" label="About Us" />
              <NavLink path="/projects" label="Projects" />
              <button
                className="text-lg text-primaryLight hover:text-secondary flex items-center justify-center"
                onClick={() => router.push("/order-now")}
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
