"use client";
import { motion } from "motion/react";

export default function SubHeading({ text, mode="light" }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }} className="flex items-center gap-4 mb-6">
      <span className={`w-12 h-0.5 ${mode === "light" ? "bg-[#c5a880]" : "bg-white"}`}></span>
      <span className={`tracking-widest ${mode === "light" ? "text-[#c5a880]" : "text-white"} font-medium uppercase`}>
        {text}
      </span>
    </motion.div>
  );
}
