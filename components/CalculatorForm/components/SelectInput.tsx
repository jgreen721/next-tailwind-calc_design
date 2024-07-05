"use client"
import React, {useState} from 'react'
import { ErrorCard } from '@/generics'
import "./components.css"

const RadioOption=({delay,label,value,activeSelect,setActiveSelect,clearError}:any)=>{

  // console.log(selectRef?.current)
  // console.log(selectRef?.current?.checked)



    return (
        <div onClick={(e)=>clearError("type")} style={{"--i":`${delay}`} as any} className={`drop-wrapper relative my-2 flex gap-5 border-2 p-2 rounded-md drop-wrapper ${activeSelect == value ? 'border-lime' : 'border-medium'}`}> 
            <div className={`rounded-full h-[25px] w-[25px] border-2 ${activeSelect == value ? 'border-lime' : 'border-medium'} flex items-center justify-center`}>
              {activeSelect == value && <div className="bg-lime w-[15px] h-[15px] rounded-full"></div>}
            </div>
            <input onClick={()=>setActiveSelect(value)}  type="radio" name="type" value={value} />
            <h5 className="font-semibold text-dark ml-10 relative z-20">{label}</h5>
            <div className={`bg-lime absolute h-full transition duration-1000 ${activeSelect == value ? 'w-full' : 'w-[0px]'} top-0 left-0 opacity-20`}></div>
        </div>
    )
}

const SelectInput = ({id,label,delay,name,clearError,hasError,inputMeta}:any) => {
  const [activeSelect,setActiveSelect] = useState(null)
  return (
    <div className="my-5 overflow-hidden">
    <h5 className="text-medium">{label}</h5>
    <label>
        {inputMeta.valueOptions.map((inputOption:any)=>(
<RadioOption 
  key={inputOption.id} 
  label={inputOption.label} 
  delay={delay} 
  value={inputOption.value} 
  activeSelect={activeSelect} 
  setActiveSelect={setActiveSelect} 
  hasError={hasError} 
  clearError={clearError}/>
        ))}
    </label>

    <ErrorCard hasError = {hasError}/>
    
  </div>
  )
}

export default SelectInput