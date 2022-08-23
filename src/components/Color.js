import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './color.css'

export default function Color() {
    const params = useParams()
  return (
    <div className='color-container' style={{backgroundColor: params.color}}>
        <p>This is {params.color}</p>
        <p>Isn't it beautiful?</p>
        <Link to='/'>GO BACK</Link>
    </div>
  )
}
