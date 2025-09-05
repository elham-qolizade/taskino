import React from "react";

export default function LoginRegisterNavTitle({ title }) {
  return (
    <div className="w-[140px] md:hidden h-[170px] bg-[#073362] CustomRadius flex items-center pl-14 justify-center rotate-45 absolute top-[-3rem] left-[-2rem]">
      <span className="text-xl text-[#F1F7FF] rotate-[-45deg]">{title}</span>
    </div>
  );
}
