"use client";

import React, { useEffect, useState } from "react";
import LoginImage from "../../../../../public/images/LoginImage.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function BanerBox() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { href: "/auth/login", label: "ورود" },
    { href: "/auth/register", label: "ثبت نام" },
  ];

  const activeIndex = links.findIndex((l) => l.href === pathname);

  return (
    <div className="w-1/2 h-full md:flex hidden flex-row items-center justify-end bg-[#073362]">
      <div className="animate-pulse 2xl:w-[85%] xl:w-[80%] w-[73%] flex items-center justify-center">
        <Image src={LoginImage} alt="Login Image" width={300} height={300} />
      </div>

      <div className="2xl:w-[15%] xl:w-[20%] w-[27%] flex flex-col items-start bg-[#F1F7FF] relative">
        <div
          className={`w-full h-[30px] bg-[#073362] ${
            activeIndex === 0 ? "rounded-bl-[30px]" : "rounded-bl-0px"
          }`}
        ></div>
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          const isPrev = index === activeIndex - 1;
          const isNext = index === activeIndex + 1;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`w-full z-10 flex items-center text-center gap-2 px-7 py-5 ${
                isActive
                  ? "text-[#073362] bg-[#F1F7FF] rounded-r-[30px]"
                  : "text-white bg-[#073362] rounded-r-0px"
              }
              ${isPrev ? "rounded-bl-[30px]" : ""}
              ${isNext ? "rounded-tl-[30px]" : ""}
              `}
            >
              <span className="text-[15px] font-bold">{link.label}</span>
            </Link>
          );
        })}
        <div className="absolute top-0 right-0 bottom-0 bg-[#073362] w-7 z-0"></div>
        <div
          className={`w-full h-[30px] bg-[#073362] ${
            activeIndex === links.length - 1
              ? "rounded-tl-[30px]"
              : "rounded-tl-0px"
          }`}
        ></div>
      </div>
    </div>
  );
}
