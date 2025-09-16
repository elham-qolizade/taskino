"use client";

import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

export default function ProjectTaskModal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-[#E6F1FD] rounded-2xl shadow-xl w-[90%] max-w-md flex flex-col items-center gap-2.5 p-6 z-10">
        <div className="w-full flex flex-col items-end">
          <button onClick={onClose} className="cursor-pointer text-red-600 p-2">
            <IoClose size={24} />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
