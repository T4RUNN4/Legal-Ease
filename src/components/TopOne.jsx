"use client";
import { motion } from "motion/react";
import Link from "next/link";

export default function TopOne({ lawyer }) {
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
    <motion.div variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }} 
      className="lg:col-span-7 bg-[#43311c] border border-[#c5a880]/30 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center justify-between relative overflow-hidden group hover:scale-105 transition-all duration-300">

      <motion.div variants={itemVariants} className="w-full md:w-1/2 aspect-4/5 overflow-hidden bg-neutral rounded-none shrink-0">
        <img
          src={lawyer.photo}
          alt={lawyer.name}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col justify-between h-full py-2">
        <div>
          <div className="badge badge-outline border-[#c5a880] text-[#c5a880] rounded-none px-3 py-2 text-xs font-semibold tracking-wider uppercase mb-4">
            BEST AMONG ALL
          </div>
          <h3 className="text-2xl md:text-3xl font-medium mb-1 text-white">
            {lawyer.name}
          </h3>
          <p className="text-[#c5a880] text-sm font-medium tracking-wide mb-4">
            {lawyer.specialization}
          </p>
        </div>

        <div className="border-t border-white/10 pt-4">
          <span className="text-xs tracking-wider text-white/50 block mb-1 uppercase">
            Achievement
          </span>

          <p className="text-[#c5a880] rounded-none font-semibold tracking-wider uppercase mb-4">
            Most Hired Lawyer in the Platform
          </p>
        </div>

        <Link
          href={`/lawyers/list/${lawyer._id}`}
          className="btn text-[#43311c] hover:bg-gray-300 border-none rounded-none px-5 py-2 min-h-0 h-auto font-medium text-xs tracking-wider shrink-0 uppercase"
        >
          View Profile
        </Link>
      </motion.div>
    </motion.div>
  );
}
