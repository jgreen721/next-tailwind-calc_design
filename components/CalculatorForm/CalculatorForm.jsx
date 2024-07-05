import React, {useRef} from 'react'
import {CalculatorHeader,Button,FormDiv,SelectInput} from "./components"


const CalculatorForm = ({fields,handleSubmission,clearError}) => {
  // console.log("Fields",fields[0]);
  const formRef = useRef();


  const handleFormSubmit = (e)=>{
    e.preventDefault();
    let formData = new FormData(formRef.current);
    let formInfo={
      amount:formData.get("amount"),
      term:formData.get("term"),
      interest:formData.get("interest"),
      type:formData.get("type"),
    }
    handleSubmission(formInfo);
  }

  const clearFields =()=>{
    // let formData = new FormData(formRef.current);
    formRef.current.reset();

  }

  return (
    <div className="p-5 bg-white">
      <CalculatorHeader clearFields={clearFields}/>
      <form onSubmit={(e)=>handleFormSubmit(e)} ref={formRef}>
          <FormDiv clearError={clearError} id={fields[0].id} label={fields[0].label} placeholder={fields[0].placeholder} delay={fields[0].delay} name={fields[0].name} hasError={fields[0].hasError} inputMeta={fields[0].inputMeta} labelCard={fields[0].labelCard}/>
        <div className="flex items-center gap-5">
          <FormDiv clearError={clearError} id={fields[1].id} label={fields[1].label} placeholder={fields[1].placeholder} delay={fields[1].delay} name={fields[1].name} hasError={fields[1].hasError} inputMeta={fields[1].inputMeta} labelCard={fields[1].labelCard}/>
          <FormDiv clearError={clearError} id={fields[2].id} label={fields[2].label} placeholder={fields[2].placeholder} delay={fields[2].delay} name={fields[2].name} hasError={fields[2].hasError} inputMeta={fields[2].inputMeta} labelCard={fields[2].labelCard}/>
        </div>
        <SelectInput clearError={clearError} id={fields[3].id} label={fields[3].label} delay={fields[3].delay} name={fields[3].name} hasError={fields[3].hasError} inputMeta={fields[3].inputMeta}/>
        {/* <div className="my-5">
          <h5 className="text-medium">Mortgage Type</h5>
          <label>
            <div className="my-2 flex gap-5 border-2 border-medium p-2 rounded-md"> 
              <input type="radio" name="type" value="repayment" />
              <h5 className="font-semibold text-dark">Repayment</h5>
            </div>
            <div className="my-2 flex gap-5 border-2 border-medium p-2 rounded-md"> 
              <input type="radio" name="type" value="interest" />
              <h5 className="font-semibold text-dark">Interest Only</h5>
            </div>
          </label>
          <h5 className="text-error font-semibold">Invalid Input</h5>
        </div> */}
        <Button/>
      </form>
    
    </div>
  )
}

export default CalculatorForm