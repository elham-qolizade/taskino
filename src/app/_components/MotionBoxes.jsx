import React from "react";
import { motion } from "framer-motion";

export default function MotionBoxes() {
  return (
    <div className="absolute left-0 right-0 bottom-0 w-full flex flex-col items-center">
      <motion.div
        initial={{ y: 200, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        className="w-full h-[485px] bg-[#F1F7FF] rounded-tl-[140px_80px] rounded-tr-[140px_80px] absolute left-0 right-0 bottom-0 z-[1]"
      ></motion.div>
      <motion.div
        initial={{ y: 200, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full h-[345px] bg-[#E0EDFF] rounded-tl-[140px_80px] rounded-tr-[140px_80px] absolute left-0 right-0 bottom-0 z-[2]"
      ></motion.div>
      <div className="w-full h-[200px] bg-[#073362] rounded-tl-[140px_80px] rounded-tr-[140px_80px] absolute left-0 right-0 bottom-0 z-[3]"></div>
    </div>
  );
}
