import React from 'react'
import BanerBox from './_components/BanerBox'
import RegisterForm from './_components/RegisterForm'

export default function page() {
  return (
    <div className="w-full h-screen flex flex-row items-center overflow-hidden">
      <BanerBox />
      <RegisterForm />
    </div>
  )
}
