import React from "react";

export default function LoginForm() {
  return (
    <div className="w-full flex flex-col items-center bg-[#073362] gap-8 px-5 pb-12 mt-[18rem] z-10">
      <div className="w-full flex flex-col items-center gap-1.5">
        <input
          type="text"
          name=""
          id="text"
          placeholder="ایمیل یا شماره تلفن"
          className="w-full bg-[#F1F7FF] text-sm p-2 rounded-lg border-none outline-0 text-[#979797]"
        />
        <input
          type="password"
          name=""
          id="password"
          placeholder="رمز عبور"
          className="w-full bg-[#F1F7FF] text-sm p-2 rounded-lg border-none outline-0 text-[#979797]"
        />
        <select
          name=""
          id=""
          defaultValue=""
          className="w-full bg-[#F1F7FF] text-sm p-2 rounded-lg border-none outline-0 text-[#979797]"
        >
          <option value="" disabled hidden>
            نقش
          </option>
          <option value="manager">مدیر</option>
          <option value="supervisor">سرپرست</option>
          <option value="expert">کارشناس</option>
        </select>
      </div>

      <div className="w-full flex flex-col items-center gap-2.5">
        <button className="w-full text-center bg-[#E0EDFF] py-2 rounded-full text-[#073362] text-sm font-semibold">
          ورود
        </button>
        <button className="w-full text-center bg-[#E0EDFF] py-2 rounded-full text-[#073362] text-sm font-semibold">
          رمز عبور خود را فراموش کرده‌اید؟
        </button>
      </div>
    </div>
  );
}
