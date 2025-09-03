import React from 'react'
import RegisterHeader from './_components/RegisterHeader'
import RegisterForm from './_components/RegisterForm'
import RegisterMotion from './_components/RegisterMotion'

export default function page() {
  return (
    <div className="w-full h-full flex flex-col items-center relative overflow-hidden">
      <RegisterHeader />
      <div className="w-[150px] h-[150px] bg-[#073362] CustomRadius rotate-45 pl-14 pb-2.5 absolute left-[-2rem] top-[-3rem] z-[4] flex items-center justify-center">
        <span className="text-2xl font-semibold text-[#F1F7FF] rotate-[-45deg]">ثبت نام</span>
      </div>
      <RegisterMotion />
      <RegisterForm />
    </div>
  )
}
