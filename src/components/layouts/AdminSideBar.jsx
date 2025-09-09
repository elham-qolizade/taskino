"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Logo from "../../../public/images/Logo-V2.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ExitIcon from "../elements/ExitIcon";
import DashboardIcon from "../elements/DashboardIcon";
import ProjectsIcon from "../elements/ProjectsIcon";
import HumanResourcesIcon from "../elements/HumanResourcesIcon";
import PaymentsIcon from "../elements/PaymentsIcon";
import PresenceAbsenceIcon from "../elements/PresenceAbsenceIcon";
import { FaChevronDown } from "react-icons/fa6";
import DropdownMenu from "../elements/DropdownMenu";

export default function AdminSideBar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);

  const links = [
    {
      href: "/panel/admin/dashboard",
      label: "داشبورد",
      icon: <DashboardIcon />,
    },
    {
      href: "/panel/admin/projects",
      label: "پروژه‌ها",
      icon: <ProjectsIcon />,
    },
    {
      href: "/panel/admin/human-resources",
      label: "منابع انسانی",
      icon: <HumanResourcesIcon />,
      submenu: ["شیفت‌ها و برنامه‌ریزی", "مدیریت کارشناسان"],
    },
    {
      href: "/panel/admin/payments",
      label: "پرداختی‌ها",
      icon: <PaymentsIcon />,
      submenu: ["حقوق و دستمزد"],
    },
    {
      href: "/panel/admin/presence-absence",
      label: "حضور و غیاب",
      icon: <PresenceAbsenceIcon />,
      submenu: ["ترددها"],
    },
  ];

  useEffect(() => {
    const activeParent = links.find((link) => pathname.startsWith(link.href));
    if (activeParent) setOpenMenu(activeParent.href);
  }, [pathname]);

  return (
    <div className="w-[350px] h-screen sticky top-0 right-0 bg-[#F1F7FF] flex flex-col items-center justify-between p-5 gap-9">
      <div className="animate-pulse">
        <Image src={Logo} alt="Logo" width={150} height={150} />
      </div>

      <DropdownMenu />

      <ul className="w-full h-full flex flex-col items-start justify-start">
        {links.map((link) => {
          const isActive = pathname === link.href;
          const isOpen = openMenu === link.href;
          return (
            <li key={link.href} className="mb-2 w-full">
              <Link
                href={link.href}
                className={`flex items-center justify-between border-solid border-r-4 gap-1.5 py-2 px-4 rounded w-full text-right ${
                  isActive ? "border-[#073362]" : "border-[#F1F7FF]"
                }`}
                onClick={() => {
                  if (link.submenu) {
                    setOpenMenu(isOpen ? null : link.href);
                  }
                }}
              >
                <div className="flex items-center gap-1.5">
                  {link.icon}
                  <span className="text-[16px] font-semibold VazirmatnBold text-[#073362]">
                    {link.label}
                  </span>
                </div>
                <FaChevronDown
                  className={`transition-transform duration-300 text-[#073362] ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>
              {link.submenu && (
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out`}
                  style={{
                    maxHeight: isOpen ? `${link.submenu.length * 40}px` : "0px",
                  }}
                >
                  <ul className="w-full flex flex-col items-start pr-14 mt-0.5">
                    {link.submenu.map((sub, index) => (
                      <li key={index} className="w-full">
                        <button
                          className="w-full text-right text-xs text-[#626063] font-normal cursor-pointer"
                          onClick={() => {
                            alert(`باز کردن مودال: ${sub}`);
                          }}
                        >
                          {sub}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <Link href="/" className="flex items-center gap-2">
        <ExitIcon />
        <span className="text-[16px] font-semibold VazirmatnBold text-[#073362]">
          خروج
        </span>
      </Link>
    </div>
  );
}
