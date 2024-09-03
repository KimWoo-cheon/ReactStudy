
import pic from '../img/pic.jpg'
import React,{useState} from 'react'

const Ex02 = () => {
    /* React에서 이미지 경로를 설정하는 방법!
        1. src폴더에 이미지가 있는 경우
            -import 이미지변수 from '이미지경로'
            -<img src={이미지변수}/>
            배포를 위해 사용
        2. public 폴더에 이미지가 있는 경우
            - public 이라는 폴더는 그 자체로 서버와 통신을 하는 폴더다.
            >>>> 자신의 주소를 가지고 있다.
            - url에 서버주소/폴더이름/사진이름.확장자라고 입력하면 마치 외부주소글 입력한 것처럼 사용이 됨
            - 보통 static파일들은 대부분 public에 보관

    */
   /* 예제
    1. 사용자가 하트를 눌렀을 때
        - 하얀하트 -> 빨간하트
        - 좋아요 -> 좋아요 취소
        - 0개 -> 1개
    2. 사용자가 빨간하트를 눌렀을 때
        - 빨간 하트 -> 하얀하트
        - 1개 -> 0개
    - 이때 , 모든 요소들은 화면에 즉시 반응해야한다.
    - 사용되는 state는 2개
    - 사용되는 함수는 1개

    
   */
    
    const [heart1, setHeart1] = useState("")
    const [num, setNum] = useState(0)
    /** 숫자를 증가시키는 함수 */
    
     const like =()=>{
       
        if(num===0){
            setHeart1("❤️")
            setNum(num+1)

        }
        else{

            setHeart1("♡")
            setNum(0)
        }
     }
 
  return (
    <div>
      
      <img width='300px' src={pic} alt=''></img>
      <span onClick={like}>
        <img width='300px' src="http://localhost:3000/img/pic.jpg" alt=''></img>
        </span>
        <p>
            <span>{heart1}</span>
            <span>좋아요 {num}개</span>
        </p>
    
    </div>
  )
}

export default Ex02

