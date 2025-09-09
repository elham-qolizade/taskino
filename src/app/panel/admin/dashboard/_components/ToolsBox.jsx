import React from "react";

export default function ToolsBox() {
  return (
    <div className="w-full grid grid-cols-2 gap-6">
      <div className="rounded-[30px] bg-[#F1F7FF] p-6 text-center">
        <div className="text-2xl mb-2">➕</div>
        ثبت درخواست
      </div>
      <div className="rounded-[30px] bg-[#F1F7FF] p-6 text-center">
        <div className="text-2xl mb-2">👤</div>
        افزودن کاربر
      </div>
      <div className="rounded-[30px] bg-[#F1F7FF] p-6 text-center">
        <div className="text-2xl mb-2">📂</div>
        مدیریت فایل
      </div>
      <div className="rounded-[30px] bg-[#F1F7FF] p-6 text-center">
        <div className="text-2xl mb-2">📊</div>
        گزارش سریع
      </div>
    </div>
  );
}
