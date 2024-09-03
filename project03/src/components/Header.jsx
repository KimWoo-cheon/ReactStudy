import React from 'react'
import { useContext } from 'react';
import { ModeContext } from '../context/ModeContext';


const Header = () => {
    const{isDark} = useContext(ModeContext)
  return (
    <div 
        className='header'
        style={{
            background:isDark==true?"black":"skyblue",
            color:isDark==true?"white":"black"



        }}
        >
        
        <h1>스마트인재개발원</h1>
      
    </div>
  )
}

export default Header
