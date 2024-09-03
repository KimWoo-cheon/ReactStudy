import React from 'react'
import {useNavigate} from 'react-router-dom'
const PropductItem = ({item}) => {
  // console.log(item)
  
  const nav = useNavigate()
  
  return (
    <div className='product-container' onClick={()=>{nav(`/detail/${item.no}`)}}>
       <img width="100px" src={item.imgSrc}></img>
       <p>이름 {item.name}</p>
       <p>가격 {item.price}</p>
       <p>포지션 {item.position}</p>
       <p>나라  <img src={item.country}></img>{"  "}소속 <img src={item.club}></img></p>
       <p></p>
    </div>
  )
}

export default PropductItem
