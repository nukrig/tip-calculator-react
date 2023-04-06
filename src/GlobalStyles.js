import { createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Mono', monospace;
}
body{
background-color: ${props => props.theme.background};
}
`

export default GlobalStyles