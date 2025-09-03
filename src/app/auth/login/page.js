import React from 'react'
import LoginHeader from './_components/LoginHeader'
import LoginForm from './_components/LoginForm'

export default function page() {
  return (
    <div className="w-full h-full flex flex-col items-center relative overflow-hidden">
      <LoginHeader />
      <div className="w-[150px] h-[150px] bg-[#073362] CustomRadius rotate-45 pl-14 pb-2.5 absolute left-[-2rem] top-[-3rem] z-[4] flex items-center justify-center">
        <span className="text-2xl font-semibold text-[#F1F7FF] rotate-[-45deg]">ورود</span>
      </div>
      <div className="absolute left-0 right-0 bottom-[13rem] w-full flex flex-col items-center z-0">
        <div className="w-full h-[320px] bg-[#F1F7FF] rounded-tl-[140px_80px] rounded-tr-[140px_80px] absolute left-0 right-0 bottom-0 z-[1]"></div>
        <div className="w-full h-[260px] bg-[#E0EDFF] rounded-tl-[140px_80px] rounded-tr-[140px_80px] absolute left-0 right-0 bottom-0 z-[2]"></div>
        <div className="w-full h-[200px] bg-[#073362] rounded-tl-[140px_80px] rounded-tr-[140px_80px] absolute left-0 right-0 bottom-0 z-[3]"></div>
      </div>
      <LoginForm />
    </div>
  )
}
