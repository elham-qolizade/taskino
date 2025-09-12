import React from "react";
import { MdAddAlarm } from "react-icons/md";

export default function TasksTable() {
  const tasks = [
    {
      title: "طراحی وایرفریم اپلیکیشن HR",
      expert: "علی رضایی",
      dueDate: "۱۴۰۴/۰۶/۰۱",
      status: "در حال انجام",
      priority: "بالا",
    },
    {
      title: "طراحی رابط کاربری",
      expert: "سارا رضایی",
      dueDate: "۱۴۰۴/۰۶/۰۱",
      status: "در حال انجام",
      priority: "متوسط",
    },
    {
      title: "طراحی وایرفریم اپلیکیشن HR",
      expert: "علی رضایی",
      dueDate: "۱۴۰۴/۰۶/۰۱",
      status: "در حال انجام",
      priority: "بالا",
    },
    {
      title: "طراحی رابط کاربری",
      expert: "سارا رضایی",
      dueDate: "۱۴۰۴/۰۶/۰۱",
      status: "در حال انجام",
      priority: "متوسط",
    },
    {
      title: "طراحی وایرفریم اپلیکیشن HR",
      expert: "علی رضایی",
      dueDate: "۱۴۰۴/۰۶/۰۱",
      status: "در حال انجام",
      priority: "بالا",
    },
    {
      title: "طراحی رابط کاربری",
      expert: "سارا رضایی",
      dueDate: "۱۴۰۴/۰۶/۰۱",
      status: "در حال انجام",
      priority: "متوسط",
    },
    {
      title: "طراحی وایرفریم اپلیکیشن HR",
      expert: "علی رضایی",
      dueDate: "۱۴۰۴/۰۶/۰۱",
      status: "در حال انجام",
      priority: "بالا",
    },
    {
      title: "طراحی رابط کاربری",
      expert: "سارا رضایی",
      dueDate: "۱۴۰۴/۰۶/۰۱",
      status: "در حال انجام",
      priority: "متوسط",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-[20px] font-semibold text-[#073362] VazirmatnBold">
          تسک ها :
        </h2>
        <button className="flex items-center gap-14 rounded-lg text-[#073362] border-solid border-b-2 border-[#073362] p-2">
          <span className="text-sm font-semibold VazirmatnBold">
            افزودن تسک جدید
          </span>
          <MdAddAlarm size={18} />
        </button>
      </div>
      <div className="w-full overflow-x-hidden bg-[#F1F7FF] border-2 border-[#E0EDFF] !rounded-[20px] mb-7">
        <table className="w-full border-collapse">
          <thead className="w-full p-3">
            <tr className="">
              <th className="border border-[#E0EDFF] p-3 text-[20px] font-semibold text-[#073362] VazirmatnBold">
                عنوان
              </th>
              <th className="border border-[#E0EDFF] p-3 text-[20px] font-semibold text-[#073362] VazirmatnBold">
                مسئول
              </th>
              <th className="border border-[#E0EDFF] p-3 text-[20px] font-semibold text-[#073362] VazirmatnBold">
                وضعیت
              </th>
              <th className="border border-[#E0EDFF] p-3 text-[20px] font-semibold text-[#073362] VazirmatnBold">
                اولویت
              </th>
              <th className="border border-[#E0EDFF] p-3 text-[20px] font-semibold text-[#073362] VazirmatnBold">
                مهلت
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {tasks.map((task, index) => (
              <tr key={index} className="text-center">
                <td className="border border-[#E0EDFF] border-y-0 p-2 text-sm font-normal text-[#073362] VazirmatnBold text-right">
                  {task.title}
                </td>
                <td className="border border-[#E0EDFF] border-y-0 p-2 text-sm font-normal text-[#073362] VazirmatnBold">
                  {task.expert}
                </td>
                <td className="border border-[#E0EDFF] border-y-0 p-2 text-sm font-normal text-[#073362] VazirmatnBold">
                  {task.status}
                </td>
                <td className="border border-[#E0EDFF] border-y-0 p-2 text-sm font-normal text-[#073362] VazirmatnBold">
                  {task.priority}
                </td>
                <td className="border border-[#E0EDFF] border-y-0 p-2 text-sm font-normal text-[#073362] VazirmatnBold">
                  {task.dueDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
