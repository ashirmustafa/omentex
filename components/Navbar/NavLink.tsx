"use client";
import Link from "next/link";

interface NavLinkProps {
  label: string;
  path: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label, path }) => {
  return (
    <>
      <Link
        href={path}
        className="text-lg text-white font-medium border border-transparent hover:border-white py-1 transition w-[130px] text-center hover:bg-white hover:text-black"
      >
        {label}
      </Link>
    </>
  );
};

export default NavLink;
