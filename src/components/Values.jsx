import { useRef } from 'react'
import ResetButton from './ResetButton'
import styled from 'styled-components'

export function Values(props){
  const {bill,setBill,tip,setTip,people,setPeople,setActiveTip}=props
  const tipPerson = useRef(0)
  const totalPerson = useRef(0)

  const alright = bill !== undefined && people !== undefined & tip !== undefined;
  const tipAmount = alright && ((bill*tip/100)/people).toFixed(2);
  const totalPerPerson= alright && ((bill * (1+tip/100))/people).toFixed(2);
  const showTip = alright && !(tipAmount === 'NaN' || tipAmount === 'Infinity');
  const showTotal= alright && !(totalPerPerson === 'NaN' || totalPerPerson === 'Infinity');
  return (
    <ValueContainer>
  <TipAmountContainer>
    <div>
      <BillName>Tip Amount</BillName>
      <PerPerson>/ person</PerPerson>
    </div>
    <ValueBill ref={tipPerson}>{showTip ? '$'+ tipAmount : '$0.00'}</ValueBill>
  </TipAmountContainer>
  <TotalContainer>
    <div>
      <BillName>Total</BillName>
      <PerPerson>/ person</PerPerson>
    </div>
    <ValueBill ref={totalPerson}>{showTotal ? '$'+ totalPerPerson : '$0.00'}</ValueBill>
  </TotalContainer>
  <ResetButton onClick={()=>{
  setBill('')
  setPeople('')
  setTip('')
  setActiveTip('')
  }}>RESET</ResetButton>
</ValueContainer>
)}


const ValueContainer = styled.div`
  background-color: ${props => props.theme.colors.cyan.dark};
  width: 100%;
  border-radius: 15px;
  padding: 39px 22px 24px 24px;
  @media (min-width:1000px) {
    padding: 40px;
  }
`
const PersAmountAndToTal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const TipAmountContainer= styled(PersAmountAndToTal)`
  margin-bottom: 25px;
  @media (min-width:1000px) {
    margin-bottom: 53px;
  }
`
const TotalContainer= styled(PersAmountAndToTal)`
  margin-bottom: 35px;
  @media (min-width:1000px) {
    margin-bottom: 134px;
  }
`
const BillName = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${props=>props.theme.colors.white};
`
const PerPerson = styled.p`
  font-size: 13px;
  color: ${props=>props.theme.colors.cyan.grayish};
`
const ValueBill = styled.p`
  font-size: 32px;
  color: ${props => props.theme.colors.cyan.strong};
  @media (min-width:1000px) {
    font-size: 40px;
  }
`