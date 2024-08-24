import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-semibold text-3xl relative z-50 text-primaryLight"
    >
      OMENTEX
    </Link>
  );
};

export default Logo;
