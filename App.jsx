import { useState } from 'react'
import './App.css'


function App() {
  const [color1, setColor1] = useState('#000000');
  const [color2, setColor2] = useState('#000000');
  const [color3, setColor3] = useState('#000000');
  const [deg, setDeg] = useState(0)

  const changeColor = () => {
    // document.body.style.background = color1
    document.body.style.background = `linear-gradient(${deg}deg,${color1},${color2},${color3})`
  }

  return (
    <>
      <h1>COLOR PICKER</h1>
~

      <div className='input'>
        <input type="range" value={deg} min={0} max={360} onChange={(text) => { setDeg(text.target.value); changeColor() }} />
        <input type="color" name="" id="" value={color1} onChange={(text) => { setColor1(text.target.value); changeColor() }} />
        <input type="color" name="" id="" value={color2} onChange={(text) => { setColor2(text.target.value); changeColor() }} />
        <input type="color" name="" id="" value={color3} onChange={(text) => { setColor3(text.target.value); changeColor() }} />
        <button onClick={changeColor}>Click</button>
      </div>
    </>

  )
}

export default App
