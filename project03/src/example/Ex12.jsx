import React,{useState, useEffect} from 'react'

const Ex12 = () => {

    /** useEffect
     : 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 잇도록 하는  React Hook
     기존에는 class 형 컴포넌트 사용 -> Function 형 컴포넌트
     class 에서만 사용할 수 있었던 여러 기능들을 function 에서도 쓸 수 있도록
     도입한 기능 == React Hooks

     우리가 그동안 써왔던 use~~ 는 리액트 훅 

     */

     //1. constructor 대체 : 변수, state, 함수 등 초기화, 선언
     console.log('1.constructor를 대체하는 함수내부')
    const[num, setNum]=useState(0)

    // 3. componentDidMount 대체 : useEffect 기본 구성
    // useEffect(함수, 배열)
    useEffect(()=>{
        console.log('3. componentDidMount를 대체하는 useEffect')
    },[])
    
    const increment = ()=>{
        setNum(num+1)
    }

    //4. componentDidUpdate 대체 : useEffect의 대상 작성
    // useEffect(함수, [변화를 감지할 대상])
    useEffect(()=>{
        console.log('4. update!')},[num])

    // Ex03 숫자 맞추기의 예제를 useEffect를 활용해서 변경해 볼것
    

  return (
    <div>
        {/** 2. render 대체 : 화면을 구성 */}
        {console.log('2. render 대체')}
      <p>{num}</p>
      <button onClick={increment}>+1</button>
    </div>
  )
}

export default Ex12
