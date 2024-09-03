import React from 'react'

const MenuBox = (props) => {
    
    /* rafce + Enter = 컴포넌트의 구성 요소
    (react arrow function component)
    */
   console.log("props : ",props.name)

  return (
    <div>
        <div>
        <h3>{props.name}</h3>
        <p>{props.ice}</p>
        <p>{props.price}</p>
        
      </div>
    
    </div>
  )
}

export default MenuBox
