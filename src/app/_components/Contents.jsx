import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/images/Logo-V2.png";
import BoardIcon from "../../../public/images/BoardIcon.png";
import WorkTableIcon from "../../../public/images/WorkTableIcon.png";

export default function Contents() {
  return (
    <div className="w-full flex flex-col items-center z-10 gap-16 mt-4 mb-9">
      <div className="animate-pulse">
        <Image src={Logo} alt="Logo" width={190} height={190} />
      </div>

      <div className="w-full flex flex-col items-center gap-4 px-4">
        <Image src={BoardIcon} alt="Board Icon" width={90} height={85} />
        <Image
          src={WorkTableIcon}
          alt="Work Table Icon"
          width={390}
          height={220}
        />
      </div>

      <div className="w-full flex flex-col items-center gap-3 px-11 mt-7">
        <Link
          href="auth/login"
          className="w-full bg-[#E0EDFF] rounded-full text-[#073362] text-center py-1 VazirmatnBold"
        >
          ورود
        </Link>
        <Link
          href="auth/register"
          className="w-full bg-[#A6C2FF] rounded-full text-[#073362] text-center py-1 VazirmatnBold"
        >
          ثبت نام
        </Link>
      </div>
    </div>
  );
}
