import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const About = () => {

  /** useNavigate : 페이지 이동을 도와주는 기능
   * 1. useNavigate를 호출해서 상수안에 담아준다.
   * 2. 페이지 이동해야할 때 상수이름("경로")
   *  ex) nav('/mypage')
   * 3. 페이지 간 데이터 전달이 가능
   *    상수이름("경로", {state:{key:value, key:value}})
   *    ex)nav('/mypage', {state:{id:'abc',pw:1234}})
   * 
   * useLocation : 현재 페이지의 정보를 담고 있는 객체를 반환
   *    - useNavigate를 통해 전달된 state는 useLocation을 통해 가져올 수 있다.
   */

  const nav = useNavigate()

  let auth = true;
  return (
    <div>
      About
      <hr/>
      
      <button onClick={()=>{  
        auth? nav('/Mypage',{state:{id:'abc'}}): nav('/')}}>마이페이지</button><br/>
      

    </div>
  )
}

export default About
