import './App.css';
import logo from './images/logo.svg'
import dollar from './images/icon-dollar.svg'
import { Values } from './components/values/Values';
import { useState } from 'react';
function App() {
  const tips=[5,10,15,25,50]
  const [bill,setBill]=useState(0)
  const [tipAmount,setTipAmount]=useState(0)
  const [people,setPeople]=useState(0)
  return (
    <div className="background">
      <img src={logo}/>
      <div className='app'>
        <div className='calculator'>
          <label >Bill</label>
          <input 
          className='fullWidthInp' 
          type='number'
          placeholder='0' 
          onChange={(e)=>{
            setBill(e.target.value)
          }}/>
            <label style={{marginTop:40}}>Select Tip %</label>
          <div className='tips'>
            {tips.map((tip,index)=>{
              return <button 
              className='tipAmount' 
              key={index}
              value={tip/100}
              onClick={(e)=>{
                setTipAmount(e.target.value)
              }}
              >{tip}%</button>
            })}
            <input 
            className='tipAmount' 
            type='number' 
            placeholder='CUSTOM' 
            onChange={(e)=>{
              setTipAmount(e.target.value/100)
            }}/>
          </div>
          <div style={{marginTop:30}}>
            <label style={{marginTop:24}}>Number of People</label>
            {people==0 ? <span className='cantBeZero'>Can’t be zero</span> : ''}
          </div>
          <input 
          className='fullWidthInp' 
          type='number' 
          placeholder='0'
          onChange={(e)=>{
            setPeople(e.target.value)
          }}/>
        </div>
        <Values 
        bill={bill}
        tipAmount={tipAmount}
        people={people}/> 
      </div>
    </div>
  );
}

export default App;
