import React from 'react'
import { Link } from 'react-router-dom'


const Main = () => {
  /**Link태그  
   * 웹 페이지에서 원래 이동할 때는 a태그를 사용한다. 
   * 하지만, a태그는 클릭시 페이지를 새로 불러오기 때문에 React에 적합x
   * Link 컴포넌트를 사용 : 생김새는 a태그와 유사하지만 브라우저 주소의 경로만 바꾸는 기능이 내장
   * -> Single Page의 특징을 유지할 수 있다
  */
  return (
    <div>
      Main
      <hr/>
      <Link to="/about">About으로 이동</Link>
      <hr/>
        
        <Link to="/product/1?best=true">
         [1] 스터디 하실분
        </Link>
        <br/>
        <Link to="/product/2">
         [2] 캠핑용품 팔아요
        </Link>
        <br/>
        <Link to="/product/3">
         [3] 스인개 다니실분 
        </Link>
        <br/>
    
    </div>
  )
}

export default Main
