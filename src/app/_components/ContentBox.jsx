"use client";

import MainPageBG from "@/components/elements/MainPageBG";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function ContentBox() {
  return (
    <div className="md:w-1/2 w-full h-full flex flex-col items-center relative bg-[#073362] md:rounded-none rounded-tl-[140px_80px] rounded-tr-[140px_80px]">
      <div className="w-full flex md:flex-row flex-col items-center xl:justify-normal justify-center md:px-7 sm:px-20 px-8 md:py-4 pt-14 gap-5">
        <Link
          href="/auth/login"
          className="bg-[#E0EDFF] text-center md:w-auto w-full text-[#073362] text-xl rounded-[20px] VazirmatnBold py-1 md:px-8 px-0"
        >
          ورود
        </Link>
        <Link
          href="/auth/register"
          className="bg-[#A6C2FF] text-center md:w-auto w-full text-[#073362] text-xl rounded-[20px] VazirmatnBold py-1 md:px-8 px-0"
        >
          ثبت نام
        </Link>
      </div>
      <div className="w-full md:flex hidden flex-col items-center text-center 2xl:pt-40 pt-32 text-white font-semibold VazirmatnBold text-4xl leading-12">
        <span className="">به تَسکینو ، اپلیکیشن</span>
        <span className="">برنامه ریزی روزانه</span>
        <span className="">و مدیریت تسک‌ها</span>
        <span className="">خوش اومدی</span>
      </div>
      <MainPageBG
        width={"100%"}
        height={"100%"}
        className={`xl:block hidden absolute left-[-16rem] z-[-1]`}
      />
      <motion.div
        initial={{ y: 200, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
        className="w-full h-[450px] bg-[#F1F7FF] md:hidden block rounded-tl-[140px_80px] rounded-tr-[140px_80px] absolute left-0 right-0 bottom-0 z-[-2]"
      ></motion.div>
      <motion.div
        initial={{ y: 200, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full h-[350px] bg-[#E0EDFF] md:hidden block rounded-tl-[140px_80px] rounded-tr-[140px_80px] absolute left-0 right-0 bottom-0 z-[-1]"
      ></motion.div>
    </div>
  );
}
