import React from 'react'
import Image from "next/image"
const Button = () => {
  return (
    <button className="bg-lime w-full flex items-center justify-center max-w-[300px] rounded-full py-3 shadow-md hover:opacity-75 hover:shadow-lg">
      <Image src="/images/icon-calculator.svg" width={20} height={20} alt="icon"/>
      <h5 className="font-semibold">Calculate Payments</h5>
    </button>
  )
}

export default Button