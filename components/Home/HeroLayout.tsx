import React from "react";

const HeroLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="h-screen bg-black px-5">{children}</div>;
};

export default HeroLayout;
