import styled from "styled-components";
import { Input } from "./Input";
import Label from "./Label";

export function Tips(props){
  const {tip,setTip,activeTip,setActiveTip}=props
  const tips=[5,10,15,25,50]
  const handleClickButton=(tip)=>{
    setActiveTip(tip)
  }
return (
  <>
  <Label>Select Tip %</Label>
    <ButtonContainer>
      {tips.map((tip,index)=>{
        return <TipButton 
          activeTip={activeTip}
          tip={tip}
          key={index}
          value={tip}
          onClick={(e)=>{
            setTip(e.target.value)
            handleClickButton(tip)
          }}
          >{tip}%</TipButton>
        })}
      <CustomInput 
        type='number' 
        placeholder='Custom'
        value={tip}
        onChange={(e)=>{
          if(e.target.value.length < 5){
            setTip(e.target.value)
          }
        }}/>
  </ButtonContainer>
  </>
)}

const ButtonContainer = styled.div`
margin-bottom:32px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap: 16px;
@media (min-width:1000px) {
    margin-bottom: 40px;
  }
`
const TipButton = styled.button`
  background-color: ${(props)=> (props.activeTip === props.tip) 
  ? props.theme.colors.cyan.strong 
  : props.theme.colors.cyan.dark};
  height:48px;
  min-width: 147px;
  width: 43%;
  border-radius: 5px;
  text-align: center;
  color: ${props => (props.activeTip === props.tip) 
  ? props.theme.colors.cyan.dark
  : props.theme.colors.white};
  font-size: 24px;
  border: 0;
  &:hover{
    background-color: #9FE8DF;
  }
  @media (max-width:373px){
    width: 100%;
  }
  @media (min-width:1000px) {
    min-width: 80px;
    width:30%;
  }
`
const CustomInput = styled(Input)`
min-width:147px;
width: 43%;
@media (max-width:373px){
    width: 100%;
  }
@media (min-width:1000px) {
  min-width: 80px;
  width:30%;
}
`