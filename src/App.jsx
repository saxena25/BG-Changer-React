import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('brown')
  const [orange, setOrange] = useState(false);
  const [green, setGreen] = useState(false);
  const [purple, setPurple] = useState(false);
  const [gray, setGray] = useState(false);
  const[allReset, setAllReset] = useState(false);

  const handleOrange=()=>{
    setColor('orange');
    setOrange(true);
    setGreen(false)
    setPurple(false)
    setGray(false)
    setAllReset(false)
  }
  const handleGreen=()=>{
    setColor('green');
    setGreen(true);
    setOrange(false)
    setPurple(false)
    setGray(false)
    setAllReset(false)
  }
  const handlePurple=()=>{
    setColor('purple');
    setPurple(true)
    setGreen(false);
    setOrange(false)
    setGray(false)
    setAllReset(false)
  }
  const handleGray=()=>{
    setColor('gray');
    setGray(true);
    setGreen(false);
    setOrange(false);
    setPurple(false)
    setAllReset(false)
  }
  const reset=()=>{
    setColor('brown');
    setAllReset(true)
    setGreen(false);
    setOrange(false)
    setPurple(false)
    setGray(false)
  }

  return (
    <>
      <div id="main-container" style={{backgroundColor: color}}>
            <div id="navbar">
              <button onClick={handleOrange}>Orange</button>
              <button onClick={handleGreen}>Green</button>
              <button onClick={handlePurple}>Purple</button>
              <button onClick={handleGray}>Gray</button>
              <button onClick={reset}>Reset</button>
            </div>
            <div id="text">
                <h1 style={{display: orange ? 'block' : 'none'}}>ORANGE COLOR</h1>
                <h1 style={{display: green ? 'block' : 'none'}}>GREEN COLOR</h1>
                <h1 style={{display: purple ? 'block' : 'none'}}>PURPLE COLOR</h1>
                <h1 style={{display: gray ? 'block' : 'none'}}>GRAY COLOR</h1>
                <h1 style={{display: allReset ? 'block' : 'none'}}>All Colors Are Reset</h1>
            </div>
      </div>
    </>
  )
}

export default App
