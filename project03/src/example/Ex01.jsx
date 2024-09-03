import React,{useState} from 'react'


const Ex01 = () => {
    /* React Event
    
        1. 요소 안에 onClick  속성 작성 : camelCase로 작성
        2. {합수이름} : ""대신 JSX 문법인 중괄호 사용
        3. HTML 요소에만 이벤트를 설정할 수 있다.
            - 내가 만든 컴포넌트는 불가능
        4. 이벤트 안에는 함수 형태의 값을 전달
            - Case 1 : {함수이름}
            - Case 2 : {{}=>{}}
    
    
    */ 
   /* State
    - state란 컴포넌트 내부에서 관리되는 변경이 가능한 데이터
    - 일반 변수와 달리 값이 변하면 화면에 즉시 렌더링 된다.
    1) useState를 import 해온다. ★
    2) state 선언문 작성
        const [state이름, setState이름] = useState(초기값)
        (a) state이름은 변수 이름과 같은 역할을 한다. (ex.num)
        (b) setState이름은 state를 변경시켜주는 함수 (ex. setNum)
        (c) 초기값에는 문자, 숫자, null, undefined, 배열, 객체 등 모두 가능

    3) setState(변경할값)
    */

                //변수를 통한 이벤트
    let num = 0

    // state를 통한 이벤트
    const [num2, setNum2] = useState(0)
   /** 숫자를 증가시키는 함수 */
   
    const increase =()=>{
        console.log('incerease 함수 호출')
        num=num+1
        console.log(num)

        // state로 처리할 경우
        setNum2(num2+1)
    }

    const decrease =()=>{
        console.log('decrease 함수 호출')
        
       if(num2>0){
        setNum2(num2-1)
       }        
    }
    const square =()=>{
        console.log('square 함수 호출')
        
       
        setNum2(num2*num2)
               
    }
    const zero =()=>{
        console.log('zero 함수 호출')
        
       
        setNum2(num2*0)

        
               
    }
  return (
    <div>
      <h1>{num2}</h1>

      <button onClick={zero}>zero</button>
      <button onClick={increase}>+1</button>
        
      <button onClick={decrease}>-1</button>
      <button onClick={square}>^2</button>
    </div>
  )
}

export default Ex01
