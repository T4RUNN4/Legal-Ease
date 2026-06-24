"use client";

import { motion } from "motion/react";

export default function Heading({ texts, isHero = false }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`text-5xl md:text-6xl lg:text-7xl ${isHero && "text-[#fdfbf7]"} leading-tight mb-8`}
    >
      {texts.map((text, index) => (
        <span key={index}>
          {text}
          {index < texts.length - 1 && <br />}
        </span>
      ))}
    </motion.h1>
  );
}
