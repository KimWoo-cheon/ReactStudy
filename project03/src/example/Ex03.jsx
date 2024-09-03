import React,{useState} from 'react'
import { useEffect } from 'react'

const Ex03 = () => {

    // 1. 랜덤한 수를 뽑아서 state에 담아주자 (Math.random() 메소드 사용 ->1,2,3)
    // 2. 사용자가 버튼을 누른 숫자 또한 state에 담아주기
    // 3. 랜덤한 수와 사용자가 누른 숫자가 같다면 '정답입니다'를 띄워주고
    //    그렇지 않다면 '땡!' 을 띄워주기
    // 단, 비교는 if문 절대 사용 x 삼항연산자 사용
    // 비교하는 삼항연산자는 무조건 return문 안에 작성할것
    // 또한 문제에 사용되는 함수는 1개만 생성 (btnCk)
    // 이벤트 객체를 통해, 사용자가 누른 숫자를 가져올것(e.target)
    //
    const [num, setNum] = useState(0)
    const [clicknum, setClick] = useState(0)
    const [mynum, setMynum] = useState(0)
    
    const [msg, setMsg] = useState("")
    const btnCk =(event)=>{
        console.log(event)
        console.log(event.target.innerText)
        
        
        setClick (parseInt(event.target.innerText))
        
        setMynum(mynum*10+parseInt(event.target.innerText))
        setNum(parseInt(Math.random()*10/4)+1);

        
    }
    useEffect(()=>
      {if(clicknum ===0){
      setMsg('게임시작 전입니다.')
    } else if(clicknum === num){
      setMsg('이겼습니다.')
      
    }else{
      setMsg('땡')
    }},[clicknum])
    

  return (
    <div>
      <div>
        <button onClick={btnCk}>1 </button> &nbsp; &nbsp;
        <button onClick={btnCk}>2 </button> &nbsp; &nbsp;
        <button onClick={btnCk}>3</button>
        <br/>
        <button onClick={btnCk}>4 </button> &nbsp; &nbsp;
        <button onClick={btnCk}>5 </button> &nbsp; &nbsp;
        <button onClick={btnCk}>6 </button>
        <br/>
        <button onClick={btnCk}>7 </button> &nbsp; &nbsp;
        <button onClick={btnCk}>8 </button> &nbsp; &nbsp;
        <button onClick={btnCk}>9 </button>
        <br/>
        <button onClick={btnCk}>del</button> &nbsp;
        <button onClick={btnCk}>0</button> &nbsp;
        <button onClick={btnCk}>enter</button>
        
      </div>
      <div>
        <p>내가 선택한 숫자 : {clicknum}</p>
        <p>랜덤 숫자 : {num}</p>
        {/* useEffect를 배우기 전 코드 */}
       {/**  <h4>{clicknum===num ? "정답입니다." : "오답입니다."}</h4>
        * */} 
         <p>{msg}</p>
     </div>
    </div>
  )
}

export default Ex03
