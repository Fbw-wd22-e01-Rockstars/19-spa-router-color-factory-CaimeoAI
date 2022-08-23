import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddColor({setColorArray}) {

    const [colorName, setColorName] = useState('')
    const [colorValue, setColorValue] = useState('')

    const navigate = useNavigate()

    const addColorFunction = () => {
        console.log(colorName,colorValue);
        setColorArray(x=>[...x, {name: colorName, value: colorValue}])
        navigate('/')
    }

    const abc = (hex, alpha = 1) => { const [r, g, b] = hex. match(/\w\w/g). map((x) => parseInt(x, 16)); return `rgba(${r},${g},${b},${alpha})`; };

  return (
    <div className="color-adder-container">
        <div className='color-adder'>
            
            <div className="input-container">
                <label for="name">Color Name</label> 
                <input onChange={e => setColorName(e.target.value)} name='name' type="text" />
            </div>

            <div className="input-container">
                <label for="value">Color Value</label> 
                <input onChange={e => setColorValue(abc(e.target.value))} name='value' type="color" />
            </div>

            <button onClick = {addColorFunction} >Add Color</button>
        </div>
    </div>
  )
}
