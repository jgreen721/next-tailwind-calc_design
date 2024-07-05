import React from 'react'
import CountUp from 'react-countup'
const UserResults = ({submitted,monthly,total}:any) => {
  console.log("MONTHLYTOTAL",monthly,total)

  return (
    <div className={`p-5 ${submitted ? 'fade-in-results' : 'opacity-0 absolute'}`}>
      <h3 className="text-white text-2xl font-semibold">Your Results</h3>
      <h5 className="text-light my-5 font-thin">  Your results are shown below based on the information you provided. 
  To adjust the results, edit the form and click “calculate repayments” again.</h5>

  <div className="bg-dark p-5 my-3 rounded-md border-t-4 border-lime">
    <div className="border-b-2 border-[rgba(255,255,255,.2)]">
      <h5 className="text-light">Your monthly repayments</h5>
      <h1 className="text-5xl py-4 text-lime font-semibold">
        <span>{String.fromCharCode(163)}</span>
        <CountUp end={total} duration={3} separator="," decimal="." decimals={2}/>
      </h1>
    </div>
    <div className="pt-10">
      <p className="text-sm text-light">Total you'll repay over the term</p>
    <h5 className="text-white my-4 text-2xl font-semibold">
      <span>{String.fromCharCode(163)}</span>
      <CountUp end={monthly} duration={3} separator="," decimal="." decimals={2}/>
    </h5>

    </div>
  </div>
    </div>
  )
}

export default UserResults