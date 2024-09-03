import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/ex04.css';
import {Button}from 'react-bootstrap';
import DiceBox from '../components/DiceBox';

const Ex04 = () => {
    /*
     React Bootstrap을 통해 화면 구성을 간단하게 해보자
    - 리액트와 관련된 개념 x
    - 남들이 만든 리액트 라이브러리를 가져다가 사용하는 방법
    */

    /* 1. 유저는 '던지기' 버튼을 클릭하면 'throwDice'라는 함수가 호출된다.
     2. throwDice 함수
     - 주사위의 눈이 1~6까지 중 랜덤하게 표시된다.
     - 유저의 주사위와 컴퓨터의 주사위 모두 랜덤이다.
     3. 왼쪽에는 나의 점수, 오른쪽에는 컴퓨터의 점수가 기록될 수 잇도록
      DiceBox를 적적하게 세팅한다. (props)
      4. 내점수가 높으면 나의 승리, 점수가 더 낮으면 나의 패배, 동점일 때 나의 패배
      - 점수는 반드시 return 문 안에서 삼항연산자로
      5. RESET 버튼 클릭시, 전부 1로 돌아가게 만들어 줄것 (resetDice 함수)
    */
      const [mynum, setMy] = useState("")
      const [yournum, setYour] = useState("")
      const [message, setMessage] = useState("")
      const throwDice =()=>{
        const diceElements = document.querySelectorAll(".rotation");
        diceElements.forEach((diceElement,index) => {
          if(index===0){diceElement.animate(
            // keyframes
            [
              { transform: 'rotate(0deg)' },
              { transform: 'rotate(360deg)' }
            ],
            // options
            {
              duration: 300,
              easing: "linear",
              iterations: 1,
            }
          );}
          else{{diceElement.animate(
            // keyframes
            [
              { transform: 'rotate(0deg)' },
              { transform: 'rotate(-360deg)' }
            ],
            // options
            {
              duration: 300,
              easing: "linear",
              iterations: 1,
            }
          );}}
        });
          setMessage("무승부")
          setMy(parseInt(Math.random()*6)+1);
          setYour(parseInt(Math.random()*6)+1);
          
      }

      const resetDice =()=>{
        const diceElements = document.querySelectorAll(".rotation");
        diceElements.forEach((diceElement,index) => {
          if(index===0){diceElement.animate(
            // keyframes
            [
              { transform: 'rotate(0deg)' },
              { transform: 'rotate(360deg)' }
            ],
            // options
            {
              duration: 300,
              easing: "linear",
              iterations: 1,
            }
          );}
          else{{diceElement.animate(
            // keyframes
            [
              { transform: 'rotate(0deg)' },
              { transform: 'rotate(-360deg)' }
            ],
            // options
            {
              duration: 300,
              easing: "linear",
              iterations: 1,
            }
          );}}
        });
       
          
        
        setMessage("주사위를 던지시오")
        setMy(1);
        setYour(1);

    }
  return (
    <>
    
    <div className='box'>
            <h1>주사위 게임</h1>
            <div>
            <Button variant="success" onClick={throwDice} className='btn'>던지기</Button>{' '}
            <Button variant="danger" onClick={resetDice} className='btn'>리 셋</Button>{' '}
        </div>
        
        
        <div className='board-container'>
            
           
            
        <DiceBox user="나" num={mynum}></DiceBox>
        <DiceBox user="컴퓨터" num={yournum}></DiceBox>
        </div><br/>
        <h2>{(mynum===yournum?message:(mynum>yournum?"승리":"패배"))}</h2>

    </div>
    
    </>
    
  )
}

export default Ex04
