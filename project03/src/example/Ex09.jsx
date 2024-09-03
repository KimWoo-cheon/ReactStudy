import React, {useState} from 'react'
import '../style/ex09.css';
import { ModeContext } from '../context/ModeContext';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Ex09 = () => {




    const[isDark, setIsDark]=useState(false)
  return (
    <ModeContext.Provider value={{isDark,setIsDark}}>
    <div className='page'> 
       <Header/>
       <Main/>
       <Footer/>
    </div>
    </ModeContext.Provider>
  )
}

export default Ex09

