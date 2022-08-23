import React, { useState } from "react"
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import './app.css'
import Color from './components/Color'
import Menu from './components/Menu'
import AddColor from './components/AddColor'

function App() {

  const [colorArray, setColorArray] = useState([
    {name: 'red', value: 'red'},
    {name: 'green', value: 'green'},
    {name: 'blue', value: 'blue'},
  ])

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Menu colorArray = {colorArray}/>}/>
        <Route path='/colors/:color' element={<Color/>}/>
        <Route path='/colors/new' element={<AddColor setColorArray = {setColorArray}/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
