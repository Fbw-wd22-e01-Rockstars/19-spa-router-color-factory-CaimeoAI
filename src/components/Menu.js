import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu({colorArray}) {


  return (
    <div className="Menu">
        <div className="container">
          <h1>Welcome to the color factory.</h1>
          <NavLink id='addColor' to='/colors/new'>Add a color</NavLink>
        </div>
      

      <p>Please select a color.</p>
      <ul>
        {colorArray.map(color => <li><NavLink to={`colors/${color.value}`}>{color.name}</NavLink></li>)}
      </ul>
    </div>
  )
}
