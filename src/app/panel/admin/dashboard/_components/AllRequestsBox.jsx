"use client";

import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function AllRequestsBox() {
  const pieData = [
    { name: "تایید نشده", value: 40 },
    { name: "در انتظار", value: 32 },
    { name: "تایید شده", value: 28 },
  ];

  const COLORS = ["#A6C2FF", "#8593ED", "#E4E6FF"];

  return (
    <div className="w-full rounded-[30px] bg-[#F1F7FF] flex flex-col items-center p-4">
      <h2 className="mb-4 font-bold text-gray-700">مجموع کل درخواست‌ها</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
