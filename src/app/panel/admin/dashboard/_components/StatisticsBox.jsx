import React from 'react'

export default function StatisticsBox() {

    const statistics = [
        { title: "Total Users", value: 1000 },
        { title: "Active Users", value: 800 },
        { title: "Pending Orders", value: 50 },
        { title: "Total Revenue", value: "$10,000" },
    ];

  return (
    <div className="w-full grid grid-cols-4 gap-4">
      {statistics.map((stat, index) => (
        <div key={index} className="p-4 border border-gray-200 rounded-[30px]">
          <h3 className="text-lg font-semibold">{stat.title}</h3>
          <p className="text-2xl">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}
