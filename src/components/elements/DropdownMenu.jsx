"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { LuChevronsUpDown } from "react-icons/lu";
import SelectBoxIcon from "./SelectBoxIcon";

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("مدیریت");
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (role) => {
    setSelectedRole(role);
    setOpen(false);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-[#073362] text-[#D9D9D9] p-3 rounded-lg text-left flex justify-between items-center"
      >
        <div className="flex items-center gap-3.5">
          <SelectBoxIcon />
          <span className="text-[16px] VazirmatnBold font-semibold text-[#F1F7FF]">
            {selectedRole}
          </span>
        </div>
        <LuChevronsUpDown size={21} />
      </button>

      <div
        className={`absolute left-0 w-full mt-1 bg-[#073362] rounded-lg overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link
          href="/panel/admin/dashboard"
          className="block px-3 py-2 text-[#D9D9D9] hover:bg-[#0a3b70] transition"
          onClick={() => handleSelect("مدیریت")}
        >
          مدیریت
        </Link>
        <Link
          href="/panel/expert/dashboard"
          className="block px-3 py-2 text-[#D9D9D9] hover:bg-[#0a3b70] transition"
          onClick={() => handleSelect("کارشناس")}
        >
          کارشناس
        </Link>
      </div>
    </div>
  );
}
