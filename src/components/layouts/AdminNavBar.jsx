import Image from "next/image";
import React from "react";
import Profile from "../../../public/images/Ellipse333333333.png";
import NotificationIcon from "../elements/NotificationIcon";
import InboxIcon from "../elements/InboxIcon";

export default function AdminNavBar() {
  return (
    <div className="w-full fixed top-0 bg-[#073362] flex items-center justify-start gap-2.5 px-5 py-3.5 z-10">
      <Image
        src={Profile}
        alt="Profile"
        width={40}
        height={40}
        className="rounded-full"
      />
      <NotificationIcon />
      <InboxIcon />
    </div>
  );
}
