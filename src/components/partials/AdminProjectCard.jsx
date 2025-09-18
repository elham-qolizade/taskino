import React from "react";
import { FaUserTie } from "react-icons/fa";
import LinearProgress from "../elements/LinearProgress";

export default function AdminProjectCard({
  project,
  expert,
  start,
  end,
  progress,
  timeZone,
}) {
  return (
    <div className="w-full bg-[#E6F1FD] rounded-[20px] flex flex-col items-start border-solid border-t-4 border-[#A6C2FF] gap-2 py-5">
      <div className="w-full flex flex-col items-start gap-5 px-5">
        <h3 className="sm:text-[16px] font-medium text-[#073362] VazirmatnBold">
          {project}
        </h3>
        <div className="flex items-center gap-1.5 text-[#073362]">
          <FaUserTie size={22} />
          <span className="text-sm font-medium text-[#073362] VazirmatnBold">
            {expert}
          </span>
        </div>
        <div className="w-full grid sm:grid-cols-2 grid-cols-1 sm:gap-0 gap-2">
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium text-[#073362] VazirmatnBold">
              شروع :
            </span>
            <span className="text-xs font-normal text-[#8593ED]">{start}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium text-[#073362] VazirmatnBold">
              پایان :
            </span>
            <span className="text-xs font-normal text-[#8593ED]">{end}</span>
          </div>
        </div>
        <div className="w-full flex flex-col items-start gap-3">
          <span className="text-xs font-medium text-[#073362] VazirmatnBold">
            درصد پیشرفت :
          </span>
          <LinearProgress percent={progress} />
          <span className="w-full text-end text-xs font-medium text-[#073362] VazirmatnBold">
            {progress}%
          </span>
        </div>
      </div>
      <div className="w-full flex items-center justify-center pt-5 border-solid border-t-[1px] border-white">
        <span className="bg-white rounded-2xl py-1 px-2.5 text-[#A6C2FF]">
          {timeZone}
        </span>
      </div>
    </div>
  );
}
