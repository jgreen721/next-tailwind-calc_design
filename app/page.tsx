"use client"
import {useState} from "react"
import {CalculatorForm, Results} from "@/components"

export default function Home() {
  const [fields,setFields] = useState<any>([
    {id:1,name:"amount",placeholder:"300",label:"Mortage Amount",delay:"1s",inputMeta:{type:"text"},labelCard:{onLeftSide:true,value:String.fromCharCode(163)},hasError:false},
    {id:2,name:"term",placeholder:"25", label:"Mortgage Term",delay:"1.5s",inputMeta:{type:"number",min:1,max:50,step:1},labelCard:{onLeftSide:false,value:"years"},hasError:false},
    {id:3,name:"interest",placeholder:"5.25",label:"Interest Rate",delay:"2s",inputMeta:{type:"number",min:2,max:25,step:".25"},labelCard:{onLeftSide:false,value:"%"},hasError:false},
    {id:4,name:"type",placeholder:null,label:"Mortgage Type",delay:"2s",inputMeta:{type:"radio",valueOptions:[{id:1,value:"repayment",label:"Repayment"},{id:2,value:"interest",label:"Interest Only"}],hasError:false}}  
  ])
  const [submitted,setSubmitted] = useState<any>(false);
  const [errors,setErrors] = useState<any>({});
  const [monthly,setMonthly] = useState<any>(1797.74)
  const [total,setTotal] = useState<any>(5393.94)

  const handleSubmission = (formInfo:any)=>{


    console.log("formInto",formInfo);
    let errors:any={};
    let hasError = false;
    for(let i in formInfo){
      if(formInfo[i] == "" || formInfo[i] == null){
        errors[i] = true;
        hasError = true;
      }
    }
    if(hasError){
    setErrors(errors)
    setFields((fields:any)=>fields.map((field:any)=>{
          if(errors[field.name]){
            return {...field,hasError:true}
          }
          else return field;
    }))
  }
  else{
    console.log("success submission!");
    setSubmitted(true)
    if(submitted){
      setTotal((Math.random() * 6000).toFixed(2))
      setMonthly((Math.random() * 2000).toFixed(2))
    }
  }
  }

  const clearError = (name:any)=>{
    console.log("Name",name,errors);
      if(!errors[name])return;
      setFields((fields:any)=>fields.map((f:any)=>f.name == name ? {...f,hasError:false} : f))
  }


  return (
    <main data-theme="light" className="main">
     <section id="card" className="bg-white w-full md:w-4/5 m-auto flex flex-col md:flex-row rounded-lg overflow-hidden shadow-card">
        <div className="flex-1">
          <CalculatorForm clearError={clearError} handleSubmission={handleSubmission} fields={fields}/>
        </div>
        <div className="flex-1 md:rounded-bl-[15%] overflow-hidden">
          <Results monthly={monthly} total={total} submitted={submitted}/>
        </div>
     </section>
    </main>
  );
}
