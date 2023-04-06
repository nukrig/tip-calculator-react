import logo from './assets/logo.svg'
import { Values } from './components/Values';
import { useState } from 'react';
import styled,{ThemeProvider} from 'styled-components'
import GlobalStyles from './GlobalStyles';
import { defaultTheme } from './themes/defaultTheme';
import { Input } from './components/Input';
import Label from './components/Label';
import { Tips } from './components/TipButtons';

function App() {
  const [bill,setBill]=useState('')
  const [tip,setTip]=useState('')
  const [people,setPeople]=useState('')
  const [activeTip,setActiveTip]=useState('')
  
  return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles/>
        <MainContainer>
            <Image src={logo} alt="" />
          <CalculatorContainer>
            <LeftContainer>
              <Label >Bill</Label>
              <InputWithMargin 
              iconType='bill'
              type='number'
              placeholder='0'
              value={bill}
              onChange={(e)=>{
                if(e.target.value.length < 15){
                  setBill(e.target.value)
                }
              }}/>
              <Tips 
                tip={tip} 
                setTip={setTip}
                activeTip={activeTip} 
                setActiveTip={setActiveTip}
              />
              <PeopleError>
                <Label>Number of People</Label>
                {people==0 ? <span style={{color:'red'}}>Can’t be zero</span> : ''}
              </PeopleError>
              <InputWithMargin
              iconType='person'
              type='number' 
              value={people}
              placeholder='0'
              onKeyDown={(e)=>{
                if(e.key === '.') {
                  e.preventDefault()
                }
              }}
              onChange={(e)=>{
                if(e.target.value.length < 15){
                  setPeople(e.target.value)
                }
              }}/>

            </LeftContainer>

            <Values 
            bill={bill} setBill={setBill}
            tip={tip} setTip={setTip}
            people={people} setPeople={setPeople}
            setActiveTip={setActiveTip} 
            />

        </CalculatorContainer>
      </MainContainer>
      </ThemeProvider>
  );
}

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Image = styled.img`
  padding: 50px 0 40px 0;
`
const CalculatorContainer = styled.div`
  background-color: ${(props)=> props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 25px 25px 0 0;
  padding: 32px 24px;
  width: 100%;
  @media (min-width:1000px) {
    flex-direction: row;
    width: 64%;
    padding: 24px;
    margin-bottom: 240px;
  }
`
const LeftContainer = styled.div`
  padding: 0 8px;
  @media (min-width:1000px) {
    padding-right: 80px;
  }
`
const PeopleError = styled.div`
  display: flex;
  justify-content: space-between;
`
const InputWithMargin = styled(Input)`
  margin-bottom: 32px;
  @media (min-width:1000px) {
    margin-bottom: 40px;
  }
`
export default App;
