import React from 'react'
import LoginForm from './_components/LoginForm'
import BanerBox from './_components/BanerBox'

export default function page() {
  return (
    <div className="w-full h-screen flex flex-row items-center overflow-hidden">
      <BanerBox />
      <LoginForm />
    </div>
  )
}
