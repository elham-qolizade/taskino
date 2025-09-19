import DelayIcon from "@/components/elements/DelayIcon";
import OverTimeIcon from "@/components/elements/OverTimeIcon";
import RequestIcon from "@/components/elements/RequestIcon";
import UsersIcon from "@/components/elements/UsersIcon";
import React from "react";

export default function StatisticsBox() {
  const statistics = [
    {
      title: "درخواست‌های انتطار",
      value: 345,
      icon: <RequestIcon />,
      iconBg: "bg-gradient-to-l from-[#8EDDFA] to-[#C0DBFF]",
      bg: "bg-[#E6F1FD]",
    },
    {
      title: "تعداد کارکنان واحد",
      value: 220,
      icon: <UsersIcon />,
      iconBg: "bg-gradient-to-l from-[#FFA3CF] to-[#FFD4F3]",
      bg: "bg-[#E4E6FF]",
    },
    {
      title: "اضافه کاری تایید شده",
      value: 100,
      icon: <OverTimeIcon />,
      iconBg: "bg-gradient-to-l from-[#8593ED] to-[#B0B8EC]",
      bg: "bg-[#E6F1FD]",
    },
    {
      title: "تعداد تاخیر امروز",
      value: 4,
      icon: <DelayIcon />,
      iconBg: "bg-gradient-to-l from-[#FD9898] to-[#FFBCAE]",
      bg: "bg-[#E4E6FF]",
    },
  ];

  return (
    <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-3">
      {statistics.map((item, index) => (
        <div
          key={index}
          className={`w-full flex items-start sm:gap-2.5 gap-1.5 ${item.bg} rounded-[30px] sm:p-4 p-3`}
        >
          <div className={`${item.iconBg} sm:p-3.5 p-1.5 rounded-full`}>
            {item.icon}
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <h3 className="text-sm font-medium text-[#073362] VazirmatnBold">
              {item.title}
            </h3>
            <span className="text-[16px] font-bold text-[#073362]">
              {item.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
