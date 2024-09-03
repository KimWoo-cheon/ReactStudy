import React,{useState} from 'react'
import '../style/ex04.css';



const DiceBox = ({user, num}) => {
  return (
    
    <div className='board-area'>
        <br/>
        <h4 >{user}</h4><br/>
       <img src={`http://localhost:3000/img/dice${num}.png`}  className="rotation" alt=''></img>
      
    </div>
  )
}

export default DiceBox
