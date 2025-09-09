"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function EntryExitStatisticsBox() {
  const barData = [
    { day: "0", حضور: 90, تاخیر: 100 },
    { day: "1", حضور: 50, تاخیر: 60 },
    { day: "2", حضور: 25, تاخیر: 30 },
    { day: "3", حضور: 80, تاخیر: 70 },
    { day: "4", حضور: 60, تاخیر: 90 },
    { day: "5", حضور: 35, تاخیر: 40 },
    { day: "6", حضور: 100, تاخیر: 80 },
  ];

  return (
    <div className="w-full rounded-[30px] bg-[#F1F7FF] flex flex-col items-center p-4">
      <h2 className="mb-4 font-bold text-gray-700">
        آمار ورود و خروج کارکنان در هفت روز گذشته
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="حضور" fill="#1E3A8A" />
          <Bar dataKey="تاخیر" fill="#8B5CF6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
