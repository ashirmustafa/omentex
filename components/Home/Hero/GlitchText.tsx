import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const GlitchText: React.FC = () => {
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
        "0 0 10px #fff",
        "none",
      ],
      transform: [
        "translate(0, 0)",
        "translate(-2px, 2px)",
        "translate(2px, -2px)",
        "translate(-4px, 4px) scaleX(1)",
        "translate(4px, -4px) scaleX(1)",
        "translate(0, 0)",
      ],
      color: ["#fff", "#000", "#fff", "#000", "#fff"],
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
        Transcend the <br />
        limits of technology
      </motion.span>
      {/* Main text */}
      Transcend the <br />
      limits of technology
    </motion.h1>
  );
};

export default GlitchText;
