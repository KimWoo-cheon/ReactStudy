import React from 'react'
import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'

const ColorResult = () => {
    
  const {ckColor} = useContext(ColorContext)
  console.log('ck Color', ckColor)
  return (
    <div>
       <div style={{
            width : '100px',
            height : '100px',
            backgroundColor: ckColor

        }}></div>
    </div>
  )
}

export default ColorResult
