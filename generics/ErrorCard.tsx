import React from 'react'

const ErrorCard = ({hasError}:any) => {
  console.log("hasError",hasError);
  return (
    <div className="relative mb-4  h-[20px]">
      <h5 className={`text-error font-semibold my-2 text-sm transition absolute duration-2 ${hasError ? '-translate-y-2' : '-translate-y-[200px]'}`}>This field is required</h5>
    </div>
  )
}

export default ErrorCard