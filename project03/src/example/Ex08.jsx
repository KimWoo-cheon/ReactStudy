import React, {useState} from 'react'
import ColorList from '../components/ColorList'
import ColorResult from '../components/ColorResult'
import { ColorContext } from '../context/ColorContext'


const Ex08 = () => {
  /* Context란? 리액트 컴포넌트 간에 값을 전역적으로 공유할 수 있게 하는 기능
   Q. props로만 데이터를 전달했을 때 발생하는 문제는?
   A. 깊숙히 위치한 컴포넌트에 데이터를 전달해야 하는 경우 props drilling 현상
      -> 불편하고 실수가 잦다.
      그래서 우리는 데이터를 전역적으로 관리할 수 잇는 context를 생성

      - 계좌를 만들 때 , 은행원을 통해 돈을 관리하듯이
      context를 만들 때, Provider를 통해 데이터를 관리한다.
      그렇기 때문에 Provider는 데이터를 관리 할 수 있는 
                  가장 상위의 컴포넌트에 존재해야 한다.

      [Context 사용 방법]
      1. context를 만들어준다
        - createContext
        - export
      
      2. context를 사용할 가장 상위 컴포넌트에 context를 import 해준다
      3. context를 Provider로 감싸준다.
      4. Provider의 value를 통해 데이터를 공유한다.
      5. 데이터를 전달받을 하위 컴포넌트에서는 useContext를 호출한다.
  */
 const[ckColor, setCkColor]=useState('grey')
  return (
    <ColorContext.Provider value={{ckColor,setCkColor}}>
    <div>
      <h1>색상 변경하기</h1>
      <ColorList/>
      <hr/>
      <h1>변경한 색상</h1>
      <ColorResult/>
    </div>
    </ColorContext.Provider>
  )
}

export default Ex08
