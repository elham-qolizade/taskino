"use client";

import React from "react";
import { motion } from "framer-motion";

export default function RegisterMotion() {
  return (
    <div className="absolute left-0 right-0 bottom-[16rem] w-full flex flex-col items-center z-0">
      <motion.div
        initial={{ y: 200, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        className="w-full h-[320px] bg-[#F1F7FF] rounded-tl-[140px_80px] rounded-tr-[140px_80px] absolute left-0 right-0 bottom-0 z-[1]"
      ></motion.div>
      <motion.div
        initial={{ y: 200, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="w-full h-[260px] bg-[#E0EDFF] rounded-tl-[140px_80px] rounded-tr-[140px_80px] absolute left-0 right-0 bottom-0 z-[2]"
      ></motion.div>
      <motion.div
        initial={{ y: 200, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: -0.1 }}
        className="w-full h-[200px] bg-[#073362] rounded-tl-[140px_80px] rounded-tr-[140px_80px] absolute left-0 right-0 bottom-0 z-[3]"
      ></motion.div>
    </div>
  );
}
