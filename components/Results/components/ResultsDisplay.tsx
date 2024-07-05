import React from 'react'
import Image from "next/image"


const ResultsDisplay = ({submitted}:any) => {
  return (
    <div className={`h-full flex items-center justify-center flex-col ${submitted ? 'fade-away' : ''}`}>
      <Image src="/images/illustration-empty.svg" height={200} width={200} alt="img"/>
      <h3 className="text-white text-2xl my-5 font-semibold">Results shown here</h3>
      <p className="text-center px-5 text-light mx-10">Complete the form and click &quot;calculate repayments&quot; to see what your monthly repayments would be.</p>
    </div>
  )
}

export default ResultsDisplay