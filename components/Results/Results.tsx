import React from 'react'
import { UserResults,ResultsDisplay } from './components'

const Results = ({submitted,monthly,total}:any) => {
  return (
    <div className="bg-medium-dark relative h-full p-5 flex-1">
     
       <UserResults submitted={submitted} monthly={monthly} total={total}/>
      
      <ResultsDisplay submitted={submitted}/> 
    

    </div>
  )
}

export default Results