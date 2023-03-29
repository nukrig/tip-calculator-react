import './Values.css'
import { useRef } from 'react'

export function Values(props){
  const {bill,tipAmount,people}=props
  const tipPerson = useRef(0)
  const totalPerson = useRef(0)
  parseFloat(bill,tipAmount,people)
    return (
<div className='values'>
<div className='valuesAmount' >
  <div >
  <h6>Tip Amount</h6>
  <span>/person</span>
  <h6>Total</h6>
  <span>/person</span>
  </div>
  <div>
    <h2 ref={tipPerson}>{people ? '$'+(bill*tipAmount/people).toFixed(2) : '$0.00'}</h2>
    <h2 ref={totalPerson}>{people ? '$'+((bill*tipAmount/people)+(bill/people)).toFixed(2): '$0.00'}</h2>
  </div>
</div>
<button onClick={()=>{
  tipPerson.current.textContent='$0.00'
  totalPerson.current.textContent='$0.00'
}}>RESET</button>
</div> 
    )
}