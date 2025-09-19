"use client";

import React from "react";

export default function LatestActivitiesBox() {
  const activities = Array(10).fill({
    time: "10:45 صبح",
    date: "1404/6/5",
    user: "مدیر واحد فروش",
    action: "تایید درخواست مرخصی",
  });

  return (
    <div className="w-full rounded-[30px] bg-[#F1F7FF] flex flex-col items-center p-4">
      <h2 className="mb-4 font-bold text-gray-700">آخرین فعالیت‌ها</h2>
      <div className="w-full lg:overflow-x-hidden overflow-x-auto">
        <table className="w-full text-sm text-gray-600 min-w-[600px] border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-2">زمان</th>
              <th className="p-2">تاریخ</th>
              <th className="p-2">واحد/کاربر</th>
              <th className="p-2">فعالیت</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((a, i) => (
              <tr key={i} className="border-b">
                <td className="p-2">{a.time}</td>
                <td className="p-2">{a.date}</td>
                <td className="p-2">{a.user}</td>
                <td className="p-2">{a.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
