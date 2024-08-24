import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface GlitchTextProps {
  firstText: string;
  secondText: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ firstText, secondText }) => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const textVariants: any = {
    initial: {
      x: 0,
      textShadow: "none",
      transform: "none",
      color: "#fff",
    },
    glitch: {
      x: ["0%", "5%", "-15%", "10%", "-20%", "0%"],
      textShadow: [
        "2px 0 red, -2px 0 blue",
        "-2px 0 green, 2px 0 purple",
        "4px 0 red, -4px 0 blue",
        "0 0 10px red, 0 0 20px blue",
      ],
      transform: [
        "translate(0, 0)",
        "translate(-2px, 2px)",
        "translate(2px, -2px)",
        "translate(-4px, 4px) scaleX(1)",
        "translate(4px, -4px) scaleX(1)",
        "translate(0, 0)",
      ],
      color: ["#fff", "#fff", "#fff", "#fff"],
      transition: {
        duration: 0.3,
        repeat: 1,
        repeatType: "mirror",
      },
    },
  };

  return (
    <motion.h1
      className="relative text-white md:text-3xl lg:text-5xl xl:text-7xl text-lg font-bold text-center leading-10"
      initial="initial"
      animate={glitch ? "glitch" : "initial"}
    >
      <motion.span
        className="absolute inset-0 select-none"
        variants={textVariants}
        initial="initial"
        animate={glitch ? "glitch" : "initial"}
        style={{ clipPath: "inset(0 0 0 0)" }}
      >
        {firstText} <br />
        {secondText}
      </motion.span>
      {/* Main text */}
      {firstText} <br />
      {secondText}
    </motion.h1>
  );
};

export default GlitchText;
