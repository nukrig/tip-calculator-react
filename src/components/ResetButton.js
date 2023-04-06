import styled from "styled-components";

const ResetButton = styled.button`
  all:unset;
  height: 48px;
  width: 100%;
  background-color: ${props=> props.theme.colors.cyan.strong};
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  color: ${props => props.theme.colors.cyan.dark};
  margin-top: 35px;
  &:hover{
    background-color: #9FE8DF;
  }
`
export default ResetButton