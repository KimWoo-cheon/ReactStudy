import React,{useState} from 'react'
import Ex07SubItem from '../components/Ex07SubItem.jsx';

const Ex07 = () => {
    // 컴포넌트끼리 값을 전달해보자.
    // 부모 => 자식 : props
    // 자식 -> 부모 : 직접x ,  부모가 함수를 생성해서 자식에게 전달
    //               자식은 부모 함수의 매개변수를 통해 데이터를 전달
    // 부모 == Ex07.jsx
    // 자식 == Ex07SubItem.jsx

    // 1. a) input창에서 사용자가 입력한 데이터를 state에 세팅한다
    //    b) 해당 state를 SubItem에게 props로 보내준다
    //    c) SubItem 에서는 props의 값을 입력받아 xxx를 대신해서 채워준다.
    
    const [text, setText] = useState("");
    
    // 2번
    //  하위 > 상위 데이터를 전달하는 것은 불가
    // 상위에서 function을 생성하고, 그 function의 매개변수를 통해 데이터 전달

    const [childText, setChildText] = useState("");
    
    const Func =(e) => {
        console.log('function', e.target.value)
        setChildText(e.target.value)

    }


  return (
    <div>
      <h1>컴포넌트끼리 값 전달</h1>
      <p>1-1. 상위 컴포넌트에서 데이터 입력{" "}
        <input onChange={(event)=>{setText(event.target.value)}}/></p>
        <Ex07SubItem  text={text} Func={Func}>
            
        </Ex07SubItem>
        {childText&&
        <p>2-2 상위 컴포넌트가 받은 값은 {childText}입니다.</p>}
    </div>
  )
}

export default Ex07
