import React from 'react'

const Ex05 = () => {
    /* Map 함수 (JS)
    - map 함수란 함수를 통해 실행한 결과를 가지고 새로운 배열을 만들어주는 배열함수
    - 기존 배열을 변경하지 않고 새로운 배열을 생성한다는 특징
    - 사용 방법
    원본 : 기존배열.map((매개변수)==>{return 변경규칙})
    생략1 : 기존배열.map((매개변수)=>(변경규칙))
    생략2 : 기존배열.map(매개변수 => 변경규칙)

    -map을 통해 화면에 렌더링한 요소에는 반드시 key값이 포함되어 있어야함
    - 이 때, key값은 중복되어서는 안된다.
    */
   let arr = [1,2,3,4,5]
   let newArr = arr.map(item=>item*10)

   console.log(arr)
   console.log(newArr)

   //값 추출
   let user = [
    { name : "홍길동", age : 30},
    { name : "고길동", age : 50},
    { name : "둘리", age : 5},
    
   ]
   // 배열 내 객체들의 이름만 가져오고 싶다면?
   let userName = user.map(item=>item.name)
   console.log(user)
   console.log(userName)

   let userAge = user.map(item=>item.age)
   console.log(userAge)

   // 예제 ===========================
   let lunchList = ['삼겹살','목살','갈비','등심']

   // filter 함수
   let num = [1,2,3,4,5,6,7,8,9,10]
   let evenNum = num.filter(item => item%2 === 0)
   console.log(evenNum)

   // user 라는 배열에서 나이가 30 이상인 사람들의 이름을 p태그로 입력해달라. 
    //                  ---------------------       -----------
    //                          filter                  map 

    let mem = user.filter(item=>item.age>=30 )
   return (
    <div>
      {user.map(item=>(
        <> <h3>{item.name}</h3>
        <span>{item.age}세</span>
        </>
       
      ))}<hr/><br/>
      오늘의 고기메뉴
      {lunchList.map(item=><li>{item}</li>)}
    
    <hr/>
    {mem.map(item=> <p>{item.name}</p>)}
    </div>
    
  )
}

export default Ex05
