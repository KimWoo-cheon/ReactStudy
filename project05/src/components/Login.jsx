import React from 'react'
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const Login = () => {
       /* 로그인을 위해 사용자가 작성한 내용을 받아와보자
    1. 사용자가 'Submit' 을 누를 시, handleLogin 이라는 함수를 호출 
    2. handleLogin 함수
        - 사용자가 input에 아이디를 입력하면 그 즉시, id라는 state에 값이 세팅 
        - 사용자가 input에 비밀번호를 입력하면 그 즉시, pw 라는 state에 값이 세팅 
        - 사용자가 Submit 버튼을 눌렀을 때 id와 pw값을 콘솔창에 출력     
    */
   const [id, setId]=useState()
   const [pw, setPw]=useState()

   const nav = useNavigate()

   
   const handleLogin = (e)=>{
    e.preventDefault();
    console.log('handleLogin Func')
    console.log(id, pw)
               /* 원래대로라면 우리는 이 id와 pw값을 
                axios를 통해 서버 주소로 전달 해주고, 
                서버에서 DB를 연동하여 DB안에서 적절한 회원을 찾아야한다.

                axios.post(서버주소, { user : {id : id, pw : pw}})
                .then(res => {
                    if(res===200){
                    //로그인성공 }}
                )
            */
           if(id==="admin"&&pw==="1234"){

            // front 에서 이용하는 sessionStorage
            //sessionStorage.setItem('키','값')

            //1. 단순 텍스트 저장
            //sessionStorage.setItem('user','id')

            //2. 객체 저장
            sessionStorage.setItem('user',JSON.stringify({id:id,step:'admin'}))
        
            alert('환영합니다!')
            // nav('/',{replace:true})
            window.location.href="/"
           }
           else{
            alert('아이디 혹은 비밀번호를 다시 확인해주세요.')
            nav('/login',{replace:true})
            window.location.href="/"
        }
           

   }
  return (
    <div className="list-container">
    {" "}
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" placeholder="Enter ID" onChange={(e)=>{setId(e.target.value)}}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPw(e.target.value)}}/>
      </Form.Group>     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
  )
}

export default Login
