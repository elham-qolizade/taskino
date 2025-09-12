"use client";

import React from "react";
import { MdAddAlarm } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import AdminProjectCard from "@/components/partials/AdminProjectCard";

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
    {
      projectName: "مدیریت پروژه",
      expertName: "علی رضایی",
      startDate: " ۱۴۰۴/۰۶/۰۱",
      endDate: " ۱۴۰۴/۰۶/۰۱",
      progress: 55,
      timeZone: "3 هفته باقی مانده",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-[20px] font-semibold text-[#073362] VazirmatnBold">
          پروژه ها :
        </h2>
        <button className="flex items-center gap-14 rounded-lg text-[#073362] border-solid border-b-2 border-[#073362] p-2">
          <span className="text-sm font-semibold VazirmatnBold">
            افزودن پروژه جدید
          </span>
          <MdAddAlarm size={18} />
        </button>
      </div>
      <div className="w-full overflow-x-hidden">
        <Swiper
          slidesPerView={Math.min(data.length, 4)}
          spaceBetween={40}
          freeMode={true}
          allowTouchMove={data.length > 4}
          modules={[FreeMode]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: Math.min(data.length, 1.5),
              spaceBetween: 10,
            },
            768: { slidesPerView: Math.min(data.length, 3), spaceBetween: 15 },
            1024: { slidesPerView: Math.min(data.length, 4), spaceBetween: 35 },
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
    </div>
  );
}
