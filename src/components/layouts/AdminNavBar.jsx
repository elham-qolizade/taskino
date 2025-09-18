import Image from "next/image";
import React from "react";
import Profile from "../../../public/images/Ellipse333333333.png";
import Logo from "../../../public/images/Logo-V2.png";
import NotificationIcon from "../elements/NotificationIcon";
import InboxIcon from "../elements/InboxIcon";
import { IoMenu } from "react-icons/io5";

export default function AdminNavBar({ setIsOpen }) {
  return (
    <div className="w-full fixed top-0 md:bg-[#073362] bg-[#E0EDFF] flex md:flex-row flex-row-reverse items-center md:justify-start justify-between gap-2.5 px-5 py-3.5 z-10">
      <div className="flex md:flex-row flex-row-reverse items-center gap-2.5">
        <Image
          src={Profile}
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
        <NotificationIcon className={"md:text-white text-[#073362]"} />
        <InboxIcon className={"md:text-white text-[#073362]"} />
      </div>
      <div className="animate-pulse md:hidden block">
        <Image src={Logo} alt="Logo" width={100} height={100} />
      </div>
      <button
        className="text-[#073362] md:hidden block"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <IoMenu size={28} />
      </button>
    </div>
  );
}
