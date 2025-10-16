"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import classNames from "classnames";

const Button = ({
  text = "Book A Meeting",
  onClick,
  className = "",
  circleFrom = "from-blue-500",
  circleTo = "to-purple-600",
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={classNames(
        // 👇 Main button transparent
        "relative flex items-center gap-3 px-4 py-2 text-white transition duration-300 rounded-full bg-transparent",
        className
      )}
      style={{
        border: "2px solid transparent", // transparent border
        borderRadius: "9999px", // fully rounded
        backgroundImage: "linear-gradient(#E7E7E7, #818181), linear-gradient(90deg, #0783FF, #A100FE)", 
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box", // magic trick → only border gradient
      }}
    >
      {/* Title */}
      <span className="font-medium">{text}</span>

      {/* Gradient circle with arrow */}
      <span
        className={classNames(
          "flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r",
          circleFrom,
          circleTo
        )}
      >
        <ArrowRight size={16} className="text-white" />
      </span>
    </motion.button>
  );
};

export default Button;
