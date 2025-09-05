import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { BsInfoCircle } from "react-icons/bs";
import Link from "next/link";

export default function LoginRegisterNavbar() {
  return (
    <div className="w-full md:hidden flex items-center justify-between p-3.5 z-[1]">
      <BsInfoCircle size={21} className="text-[#073362]" />
      <Link href="/" className="text-[#F1F7FF] p-1.5">
        <FaArrowLeft size={21} />
      </Link>
    </div>
  );
}
