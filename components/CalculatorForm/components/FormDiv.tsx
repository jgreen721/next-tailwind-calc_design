"use client"
import { ErrorCard } from '@/generics'
import React, {useState} from 'react'
import "./components.css"

const LabelCard = ({label,hasError,delay,active}:any)=>{
// console.log("Delay - " + delay);
  return (
    <div style={{"--i":`${delay * 1.25 < 3 ? delay * 1.25 : 3}s`} as any} className={`label-card drop-wrapper ${hasError ?  'bg-error text-white' : active ? 'bg-lime text-dark' : 'bg-blue-200 text-dark'}`}>
      <h5>{label}</h5>
    </div>
  )
}

const FormDiv = ({id,name,label,delay,placeholder,hasError,inputMeta,labelCard,clearError}:any) => {
  const [active,setActive] = useState(false);
  return (
    <div className="flex-1">
      <label htmlFor={label}>
        <h5 style={{"--i":delay} as any} className="my-2 text-medium text-md scale-label">{label}</h5>
      <div>
        <div className="relative overflow-hidden">
          {/* <div className={`absolute w-full bg-lime h-full z-10 rounded-md transition duration-2 pointer-events-none ${active && !hasError ? 'opacity-35' : 'opacity-0'}`}></div> */}
          <div style={{"--i":delay} as any} className={`form-wrapper drop-wrapper border-2 ${hasError ? 'border-error' : active ? 'border-lime' : 'border-medium'}`}>
            {labelCard.onLeftSide && <LabelCard delay={id} hasError={hasError} label={labelCard.value} active={active}/>}
            {inputMeta.type == "text" ?
            <input onKeyDown={()=>clearError(name)} onMouseEnter={()=>setActive(true)} onMouseLeave={()=>setActive(false)} type="text" placeholder={placeholder} name={name} min={inputMeta.min} max={inputMeta.max} step={inputMeta.step} autoComplete="off" className="h-full px-3 w-full outline-none"/>
              :
            <input onKeyDown={()=>clearError(name)} onMouseEnter={()=>setActive(true)} onMouseLeave={()=>setActive(false)}  type="number" placeholder={placeholder} name={name} min={inputMeta.min} max={inputMeta.max} step={inputMeta.step} autoComplete="off" className="h-[40px] px-3 w-full outline-none"/>
            }
              {!labelCard.onLeftSide && <LabelCard delay={id} hasError={hasError} label={labelCard.value} active={active}/>}
        </div>
      </div>
      </div>
      </label>
      <div className="relative overflow-hidden">
          <ErrorCard hasError={hasError}/>
       </div>
  {/* <h3>SHIT</h3> */}
    </div>
  )
}

export default FormDiv