
import './App.css';

function App() {
  
  // 주석 사용 
  /* 장문주석사용 가능 */

  /* JSX : 하나의 파일 안에 HTML과 JS를 동시에 작성할 수 있는 확장자
    - 가독성이 좋고 작성이 쉽다.
    - HTML에서 JS를 관리하려면 document객체를 통해 접근해야 했던
      순수 JS와 달리, 바로 HTML 요소들에 접근이 가능하다.

      ** JSX의 특징
      1. 여러 요소가 있다면 반드시 부모요소르 감싸져 잇어야 한다.
      - ERROR Case : JSX elements must be wrapped in an enclosing tag.
      - 위와 같은 오류가 난다면 여러 요소들이 하나의 요소로 감싸져있는지 확인할 것 
      - 꼭 HTML 태그가 아니더라도 <></> 사용 가능 (공간분할 x)

      2. 표현식 사용가능
      - return 문 안에는 보통 HTML 요소를 작성하는데, 거기에 JS문법을 사용하고 싶다면?
      - {}(중괄호) 안에 JS문법을 넣어서 사용
      - 보통 삼항연산자를 많이 활용( 조건문 ? true일때 실행문 : false일때 실행문)
      - 단, return({}) 안에 if문 사용불가
      - if문을 사용하고 싶다면 if문 자체는 위쪽에서 쓰고, 결과만 return문에 작성
      - 실행문 1=> &&연산자

      3. 리액트는 끝태그를 생략할 수 없다.
      - HTML에서는 홀태그의 끝태그를 생략했으나, 리액트는 무조건 적어줘야함!
      - <홀태그/>이런식으로 사용함!
      
      4. class 대신 className을 사용한다. 
      5. HTML 태그를 작성할 때, "무조건 소문자"로 작성한다.
      - <DIV></DIV> -----> x 절대 안됨 x

      6. 스타일링 적용하는 방법
       6-1) css에 작성해서 import 하는 방법
       6-2) 객체 형태로 스타일링 삽입
        - 이 경우에는 꼭! className를 사용할 것
              ( camelCase / kebab-case / snake_case)
      */
      let adminStyle ={
        color : "blue",
        backgroundColor : "whitesmoke"
      }

      let month = 7;
      // if문 사용
      let state = "admin";
      let msg = "";

      if(state=== "admin"){
        msg="관리자입니다."

      }
      else if(state==="user"){
        msg="유저입니다."
      }
      else{
        msg="로그인 해주세요."
      }
  return (
  <>
  {/* 2-1. 조건이 t/f 일 때 -> 실행문 2개 */}
    {month === 6 
    ?<h1 className='pinkTxt'>리액트 - 선영표</h1> 
  
    :<h1 style={adminStyle}>머신러닝 - 정봉균</h1>  
  }
  <hr/>
  {/* 2-2. 조건이 3개 이상일 때 -> if문은 위에서 작성 */}
  {msg}
  
  <hr/>
  {/* 2-3. 조건이 t/f일 때 -> 실행문 1개 */}
  {state === "admin" && <button>관리자모드</button>}
  
    
  </>
  
  
  );
}

export default App;
