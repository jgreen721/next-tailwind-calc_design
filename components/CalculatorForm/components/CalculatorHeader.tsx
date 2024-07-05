import React from 'react'

const CalculatorHeader = ({clearFields}:any) => {
  return (
    <div className="flex justify-between items-center mb-10">
      <h3 className="text-2xl font-bold text-dark">Mortage Calculator</h3>
      <button onClick={clearFields} className="underline cursor-pointer text-dark hover:opacity-70">
        <h5 className="relative z-10">Clear All</h5>
      </button>
    </div>
  )
}

export default CalculatorHeader