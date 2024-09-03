import React from 'react'
import { Button } from 'react-bootstrap'
import { useContext } from 'react';
import { ModeContext } from '../context/ModeContext';

const Footer = () => {

    const{isDark,setIsDark} = useContext(ModeContext)
    console.log('is Dark', isDark)
  return (
    <div className='footer'
    style={{
        background:isDark==true?"black":"whitesmoke",
        color:isDark==true?"white":"black"

        



    }}>
       <button className='button' onClick={()=>{setIsDark(!isDark)}}>{isDark==1?"라이트모드":"다크모드"}</button>
      
    </div>
  )
}

export default Footer
