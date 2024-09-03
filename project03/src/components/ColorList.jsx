import React from 'react'
import { useContext } from 'react';
import { ColorContext } from '../context/ColorContext';

const ColorList = () => {

    const{setCkColor} = useContext(ColorContext)
    const colorList = ['red','orange','yellow','green','blue'];

  return (
        
    <div style={{display:'flex'}}>
        {colorList.map(item=>
             <div  onClick={()=>{setCkColor(item)}}
            //  onClick={(event)=>{setCkColor(event.target.style.backgroundColor)}}

            
             
                style={{
                width : '100px',
                height : '100px',
                backgroundColor:item
    
            }}></div>
        )}
     
    </div>
  )
}

export default ColorList
