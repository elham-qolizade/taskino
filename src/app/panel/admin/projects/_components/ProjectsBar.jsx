"use client";

import React, { useState } from "react";
import { MdAddAlarm } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import AdminProjectCard from "@/components/partials/AdminProjectCard";
import ProjectTaskModal from "@/components/partials/ProjectTaskModal";

export default function ProjectsBar() {
  const data = [
    {
      projectName: "طراحی پروژه فروشگاهی",
      expertName: "علی رضایی",
      startDate: " ۱۴۰۴/۰۶/۰۱",
      endDate: " ۱۴۰۴/۰۶/۰۱",
      progress: 60,
      timeZone: "4 هفته باقی مانده",
    },
    {
      projectName: "مدیریت اکسل",
      expertName: "مهدی محمدی",
      startDate: " ۱۴۰۴/۰۶/۰۱",
      endDate: " ۱۴۰۴/۰۶/۰۱",
      progress: 80,
      timeZone: "2 هفته باقی مانده",
    },
    {
      projectName: "تحلیل داده ها",
      expertName: "سارا احمدی",
      startDate: " ۱۴۰۴/۰۶/۰۱",
      endDate: " ۱۴۰۴/۰۶/۰۱",
      progress: 30,
      timeZone: "1 هفته باقی مانده",
    },
    {
      projectName: "مدیریت پروژه",
      expertName: "علی رضایی",
      startDate: " ۱۴۰۴/۰۶/۰۱",
      endDate: " ۱۴۰۴/۰۶/۰۱",
      progress: 55,
      timeZone: "3 هفته باقی مانده",
    },
    {
      projectName: "تحلیل داده ها",
      expertName: "سارا احمدی",
      startDate: " ۱۴۰۴/۰۶/۰۱",
      endDate: " ۱۴۰۴/۰۶/۰۱",
      progress: 30,
      timeZone: "1 هفته باقی مانده",
    },
  ];

  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Start:", startDate, "End:", endDate);
    setOpen(false);
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="w-full flex items-center justify-between">
        <h2 className="sm:text-[20px] text-[17px] font-semibold text-[#073362] VazirmatnBold">
          پروژه ها :
        </h2>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center md:gap-14 gap-7 rounded-lg text-[#073362] cursor-pointer border-solid border-b-2 border-[#073362] p-2"
        >
          <span className="text-sm font-semibold VazirmatnBold">
            افزودن پروژه جدید
          </span>
          <MdAddAlarm size={18} />
        </button>
        <ProjectTaskModal isOpen={open} onClose={() => setOpen(false)}>
          <span className="text-[16px] font-semibold VazirmatnBold text-[#073362] pb-4">
            افزودن پروژه جدید
          </span>
          <label className="w-full flex flex-col items-start gap-1 text-[#073362]">
            عنوان پروژه :
            <input
              type="text"
              placeholder="عنوان پروژه"
              className="w-full bg-[#A6C2FF] rounded-[10px] px-4 py-2.5 outline-0"
            />
          </label>
          <label className="w-full flex flex-col items-start gap-1 text-[#073362]">
            مسئول پروژه :
            <select
              name=""
              id=""
              defaultValue={""}
              className="w-full bg-[#A6C2FF] rounded-[10px] px-4 py-2.5 outline-0 appearance-none"
            >
              <option disabled value="">
                لیست کارشناسان
              </option>
              <option value="user1">محمد ایمان</option>
              <option value="user2">محمد سامان</option>
              <option value="user3">محمد عیسی</option>
            </select>
          </label>
          <label className="w-full flex flex-col items-start gap-1 text-[#073362]">
            تاریخ شروع :
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full bg-[#A6C2FF] rounded-[10px] px-4 py-2.5 outline-0"
            />
          </label>
          <label className="w-full flex flex-col items-start gap-1 text-[#073362]">
            تاریخ پایان :
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full bg-[#A6C2FF] rounded-[10px] px-4 py-2.5 outline-0"
            />
          </label>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-[#A6C2FF] cursor-pointer rounded-[10px] VazirmatnBold text-[#073362] px-4 py-2.5 mt-4"
          >
            ثبت
          </button>
        </ProjectTaskModal>
      </div>
      {data.length <= 0 ? (
        <div className="w-full flex items-center justify-center p-4">
          <span className="VazirmatnBold text-red-600">
            پروژه‌ای ایجاد نشده
          </span>
        </div>
      ) : (
        <div className="w-full overflow-x-hidden">
          <Swiper
            slidesPerView={Math.min(data.length, 1.2)}
            spaceBetween={10}
            freeMode={true}
            allowTouchMove={data.length > 4}
            modules={[FreeMode]}
            className="mySwiper"
            breakpoints={{
              540: {
                slidesPerView: Math.min(data.length, 2.5),
                spaceBetween: 10,
              },
              760: {
                slidesPerView: Math.min(data.length, 1.75),
                spaceBetween: 10,
              },
              820: {
                slidesPerView: Math.min(data.length, 2),
                spaceBetween: 10,
              },
              950: {
                slidesPerView: Math.min(data.length, 2.5),
                spaceBetween: 10,
              },
              1165: {
                slidesPerView: Math.min(data.length, 3.3),
                spaceBetween: 15,
              },
              1400: {
                slidesPerView: Math.min(data.length, 4),
                spaceBetween: 35,
              },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} className="box-border">
                <AdminProjectCard
                  project={item.projectName}
                  expert={item.expertName}
                  start={item.startDate}
                  end={item.endDate}
                  progress={item.progress}
                  timeZone={item.timeZone}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
