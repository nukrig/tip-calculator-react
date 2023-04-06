import styled from "styled-components";
import dollarIcon from '../assets/icon-dollar.svg'
import personIcon from '../assets/icon-person.svg'

const icon = props =>{
    if(props.iconType === 'bill'){
        return dollarIcon
    }else if(props.iconType==='person'){
        return personIcon
    } else return
}

 export const Input = styled.input`
  height: 48px;
  width: 100%;
  padding-right:17px;
  background-image: url(${icon});
  background-repeat: no-repeat;
  background-position: center left 19px;
  background-color: ${props => props.theme.inputBackground};
  text-align: right;
  font-size: 24px;
  color:${(props)=> props.theme.colors.cyan.dark};
  border: 0;
  border-radius: 5px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
  &::placeholder{
    color:${(props)=> props.theme.colors.cyan.dark};
    opacity: 35%;
  };
  &:hover{
    outline: 2px solid ${props=> props.theme.colors.cyan.strong};
  }
`