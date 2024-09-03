// import React,{useState} from 'react'
// import { useEffect } from 'react'

// const Ex13 = () => {
//     // 1. 참참참 게임은  상, 하, 좌, 우를 선택할 수 있다.
//     // 2. 컴퓨터는 랜덤으로 상, 하, 좌, 우가 결정된다.
//     // 3. 유저가 버튼을 선택하면 게임이 시작된다.
//     // 4. 유저와 컴퓨터의 선택이 같은 경우 유저가 승리한다.

//     // a. 상,하,좌,우가 포함되어 있는 배열 생성
//     // b. 0~3까지의 랜덤한 숫자를 뽑아 a배열에서 적절한 값을 도출한다.
//     // c. b에서 낸 값을 comPick이라는 state에 세팅
//     // d. 사용자가 누른 버튼의 값을 myPick 이라는 state에 세팅
//     // e. 게임 시작 전에는 "게임 시작 전.." /
//     //    같으면 "승리" 다르면 "패배"

//     const [yournum, setYournum] = useState()
//     const [mynum, setMynum] = useState()
//     const [msg, setMsg] = useState()
   


//     const btn = ['상','하','좌','우']
//     const btnCk =(event)=>{
        
//         console.log(event.target.innerText)
        
        
//         setMynum((event.target.innerText))    
        
//         setYournum(btn[parseInt(Math.random()*10/3)]);
        
        
//     }
//     useEffect(()=>
//         {
            
            
//         console.log(yournum,mynum)
//             if(!mynum){
//         setMsg('시작대기')
//       } else if(mynum==yournum){
//         setMsg('승리')
        
//       }else{
//         setMsg('패배')
//       }},[mynum, yournum])

//   return (
//     <div>
//       <h1> 참참참! </h1>
//       <div>
//         <button onClick={btnCk}>상</button>
//         <button onClick={btnCk}>하 </button> 
//         <button onClick={btnCk}>좌</button>
//         <button onClick={btnCk}>우 </button>
//         <br/>
        
//       </div>
//       <div>
//         나의 선택 : {mynum}
//         <br/>
//         컴퓨터의 선택 : {yournum}
//         <br/>
//         <strong>{msg}</strong>
//       </div>
//     </div>
//   )
// }

// export default Ex13


// --------------------------------------------------------------------------------------------------
/*  */

// import React, { useState } from 'react'

// const Ex13 = () => {

//     // 1. 참참참 게임은 유저가 상, 하, 좌, 우를 선택할 수 있다. 
//     // 2. 컴퓨터는 랜덤으로 상, 하, 좌, 우가 결정된다.
//     // 3. 유저가 버튼을 선택하면 게임이 시작된다
//     // 4. 유저와 컴퓨터의 선택이 같은 경우 유저가 승리한다.    

//     // a. 상, 하, 좌, 우가 포함되어있는 배열 생성 
//     // b. 0~3까지의 랜덤한 숫자를 뽑아 a 배열에서 적절한 값을 도출한다 
//     // c. b에서 낸 값을 comPick 이라는 state에 세팅 
//     // d. 사용자가 누른 버튼의 값을 myPick 이라는 state에 세팅 
//     // e. 게임 시작 전에는 "게임 시작 전.." /
//     //    같으면 "승리" 다르면 "패배" 

//     const arr = ['상', '하', '좌', '우']
//     const [myPick, setMyPick] = useState()
//     const [comPick, setComPick] = useState()

//     const makeRandom = ()=>{
//         return parseInt(Math.random()*4)
//     }

//     const ckBtn = (e)=>{
//         console.log('ckBtn', e.target.innerText)
//         setMyPick(e.target.innerText)

//         console.log('ran', arr[makeRandom()])
//         setComPick(arr[makeRandom()])

//         console.log('현재 상황', myPick, comPick)
//     }

//   return (
//     <div>
//         <h1>참참참!</h1>   
//         <div>
//             {arr.map(item => <button key={item} onClick={ckBtn}>{item}</button>)}
//         </div>   
//         <div>
//             나의 선택 : {myPick}
//             <br/>
//             컴퓨터의 선택 : {comPick}
//             <br/>
//             <strong>승리!</strong>
//         </div>

//     </div>
//   )
// }

// export default Ex13



import React, { useState, useEffect } from 'react';

const Ex13 = () => {
  const [yournum, setYournum] = useState(null);
  const [mynum, setMynum] = useState(null);
  const [msg, setMsg] = useState("게임 시작 전...");
  const [count, setCount] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const btn = ['상', '하', '좌', '우'];

  const btnCk = (event) => {
    setMynum(event.target.innerText);
  };

  const startGame = () => {
    if (mynum) {
      setIsGameRunning(true);
      setCount(0);
      setCorrectCount(0);
      setMsg("게임 진행 중...");
    } else {
      alert('방향을 선택하세요!');
    }
  };

  useEffect(() => {
    let interval;

    if (isGameRunning) {
      interval = setInterval(() => {
        const randomPick = btn[Math.floor(Math.random() * 4)];
        setYournum(randomPick);
        setCount((prevCount) => {
          const newCount = prevCount + 1;

          // 게임 종료 조건 체크
          if (newCount >= 20) {
            clearInterval(interval);
            setIsGameRunning(false);
            setMsg(`게임 종료! 맞춘 개수: ${correctCount}`);
          }

          return newCount;
        });

        // 매번 컴퓨터 선택이 변경될 때마다 맞춘 개수를 즉시 반영
        if (randomPick === mynum) {
          setCorrectCount((prevCount) => prevCount + 1);
        }
      }, 500);
    }

    return () => clearInterval(interval);
  }, [isGameRunning, mynum, correctCount]);

  useEffect(() => {
    if (!mynum) {
      setMsg('게임 시작 전...');
    }
  }, [mynum]);

  return (
    <div>
      <h1> 참참참! </h1>
      <div>
        <button onClick={btnCk}>상</button>
        <button onClick={btnCk}>하 </button>
        <button onClick={btnCk}>좌</button>
        <button onClick={btnCk}>우 </button>
        <br />
        <button onClick={startGame} disabled={isGameRunning}>게임 시작</button>
      </div>
      <div>
        <br></br>
       <h1> {yournum}</h1>
      <br />
        나의 입력 : {mynum}
        <br />
       
        <strong>{msg}</strong>
        <br />
        <strong>맞춘 개수: {correctCount}</strong>
      </div>
    </div>
  );
};

export default Ex13;
