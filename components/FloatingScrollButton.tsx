"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowCircleDown } from "react-icons/fa";

const FloatingScrollButton: React.FC = () => {
  return (
    <motion.div
      className="p-[2px] bg-white rounded-full cursor-pointer"
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FaArrowCircleDown color="#000000" size={30} />
    </motion.div>
  );
};

export default FloatingScrollButton;
