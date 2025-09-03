import Link from "next/link";
import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa6";

export default function LoginHeader() {
  return (
    <div className="w-full flex items-center justify-between p-3 z-10">
      <BsInfoCircle size={21} className="text-[#073362]" />
      <Link href="/" className="p-1.5">
        <FaArrowLeft size={21} className="text-[#F1F7FF]" />
      </Link>
    </div>
  );
}
