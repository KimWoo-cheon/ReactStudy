import React from 'react'
import { useContext } from 'react';
import { ModeContext } from '../context/ModeContext';


const Main = () => {
    const{isDark} = useContext(ModeContext)
  return (
    <div className='content'
    style={{
        background:isDark==true?"black":"white",
        color:isDark==true?"white":"black"


    }}>
        <h1>지각, 결석하지 않기~</h1>
      
    </div>
  )
}

export default Main
