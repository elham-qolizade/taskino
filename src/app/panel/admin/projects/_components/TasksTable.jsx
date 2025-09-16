"use client";

import ProjectTaskModal from "@/components/partials/ProjectTaskModal";
import React, { useState } from "react";
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

  const [open, setOpen] = useState(false);
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Deadline:", deadline);
    setOpen(false);
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-[20px] font-semibold text-[#073362] VazirmatnBold">
          تسک ها :
        </h2>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-14 rounded-lg text-[#073362] cursor-pointer border-solid border-b-2 border-[#073362] p-2"
        >
          <span className="text-sm font-semibold VazirmatnBold">
            افزودن تسک جدید
          </span>
          <MdAddAlarm size={18} />
        </button>
        <ProjectTaskModal isOpen={open} onClose={() => setOpen(false)}>
          <span className="text-[16px] font-semibold VazirmatnBold text-[#073362] pb-4">
            افزودن تسک جدید
          </span>
          <label className="w-full flex flex-col items-start gap-1 text-[#073362]">
            عنوان :
            <input
              type="text"
              placeholder="عنوان"
              className="w-full bg-[#A6C2FF] rounded-[10px] px-4 py-2.5 outline-0"
            />
          </label>
          <label className="w-full flex flex-col items-start gap-1 text-[#073362]">
            مسئول :
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
            اولویت :
            <select
              name=""
              id=""
              defaultValue={""}
              className="w-full bg-[#A6C2FF] rounded-[10px] px-4 py-2.5 outline-0 appearance-none"
            >
              <option disabled value="">
                اولویت بندی
              </option>
              <option value="high">بالا</option>
              <option value="medium">متوسط</option>
              <option value="low">پایین</option>
            </select>
          </label>
          <label className="w-full flex flex-col items-start gap-1 text-[#073362]">
            مهلت :
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
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
      {tasks.length <= 0 ? (
        <div className="w-full flex items-center justify-center p-4">
          <span className="VazirmatnBold text-red-600">تسکی ایجاد نشده</span>
        </div>
      ) : (
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
      )}
    </div>
  );
}
