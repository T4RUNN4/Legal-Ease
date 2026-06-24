"use client";
import { motion } from "motion/react";
import Link from "next/link";

export default function BestLawyer({ lawyer }) {
   const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className="bg-transparent border border-white/10 p-4 flex flex-row gap-5 items-center hover:border-white/30 hover:scale-105 transition-all duration-300"
    >
      <motion.div
        variants={itemVariants}
        className="w-24 h-28 md:w-28 md:h-32 bg-neutral shrink-0 overflow-hidden"
      >
        <img
          src={lawyer.photo}
          alt={lawyer.name}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col justify-center">
        <h4 className="text-xl font-medium mb-1">{lawyer.name}</h4>
        <p className="text-sm text-[#c7bca9] mb-4">{lawyer.specialization}</p>
        <Link
          href={`/lawyers/list/${lawyer._id}`}
          className="text-xs font-semibold tracking-wider text-[#c5a880] hover:text-black transition-colors flex items-center gap-1"
        >
          View Profile <span className="text-[10px]">→</span>
        </Link>
      </motion.div>
    </motion.div>
  );
}