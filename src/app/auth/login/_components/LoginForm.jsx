"use client";

import React from "react";
import Logo from "../../../../../public/images/Logo-V2.png";
import Image from "next/image";
import LoginRegisterNavbar from "@/components/partials/LoginRegisterNavbar";
import { motion } from "framer-motion";
import LoginRegisterNavTitle from "@/components/partials/LoginRegisterNavTitle";

export default function LoginForm() {
  return (
    <div className="md:w-1/2 w-full h-full relative flex flex-col items-center md:justify-evenly justify-between bg-[#F1F7FF] xl:px-44 lg:px-28 md:px-3 px-0">
      <LoginRegisterNavbar />
      <div className="animate-pulse md:block hidden">
        <Image src={Logo} alt="Logo" width={200} height={200} />
      </div>
      <motion.div
        initial={{ y: 200, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full h-[480px] bg-[#E0EDFF] md:hidden block rounded-tl-[140px_80px] rounded-tr-[140px_80px] absolute left-0 right-0 bottom-0 z-0"
      ></motion.div>
      <LoginRegisterNavTitle title="ورود" />
      <div className="w-full md:bg-[#F1F7FF] bg-[#073362] flex flex-col items-center md:gap-16 gap-8 lg:rounded-none rounded-tl-[140px_80px] rounded-tr-[140px_80px] lg:px-0 md:px-16 sm:px-8 px-5 lg:pt-0 lg:pb-0 pt-20 pb-4 z-[1]">
        <div className="w-full flex flex-col items-center lg:gap-3 gap-2">
          <input
            type="text"
            name=""
            id="text"
            placeholder="ایمیل یا شماره تلفن"
            className="w-full md:bg-[#073362] bg-[#F1F7FF] rounded-lg md:text-[#D9D9D9] text-[#979797] outline-0 border-none p-3"
          />
          <input
            type="password"
            name=""
            id="password"
            placeholder="رمز عبور"
            className="w-full md:bg-[#073362] bg-[#F1F7FF] rounded-lg md:text-[#D9D9D9] text-[#979797] outline-0 border-none p-3"
          />
          <select
            name=""
            id=""
            defaultValue=""
            className="w-full md:bg-[#073362] bg-[#F1F7FF] rounded-lg md:text-[#D9D9D9] text-[#979797] outline-0 border-none p-3"
          >
            <option value="" disabled hidden>
              نقش
            </option>
            <option value="manager">مدیر</option>
            <option value="supervisor">سرپرست</option>
            <option value="expert">کارشناس</option>
          </select>
        </div>

        <div className="w-full flex flex-col items-center lg:gap-3 gap-2">
          <button className="w-full rounded-[30px] md:bg-[#073362] bg-[#E0EDFF] md:text-[#F1F7FF] text-[#073362] VazirmatnBold text-lg py-3">
            ورود
          </button>
          <button className="w-full rounded-[30px] md:bg-[#F1F7FF] bg-[#E0EDFF] text-[#073362] VazirmatnBold text-lg py-3">
            رمز عبور خود را فراموش کرده‌اید؟
          </button>
        </div>
      </div>
    </div>
  );
}
