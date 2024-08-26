import Link from "next/link";
import React from "react";

interface LogoProps {
  dark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ dark = false }) => {
  return (
    <Link
      href="/"
      className={`font-semibold text-3xl relative z-50 ${
        !dark ? "text-primaryLight" : "text-primary"
      }`}
    >
      OMENTEX
    </Link>
  );
};

export default Logo;
