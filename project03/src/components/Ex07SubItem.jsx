import React from 'react'

const Ex07SubItem = ({text, Func}) => {
  return (
    <div>
        {text&&
        <p>1-2. 하위컴포넌트가 받은 값은{" "}  
        {text}입니다.</p> }
<hr/>

        <p>2-1. 하위컴포넌트에서 데이터 입력{" "}
            <input type='text' onChange={Func} />

        </p>
            
    </div>
  )
}

export default Ex07SubItem
