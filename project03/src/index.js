import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// ================[STEP 1. state]==================

// 1. useState 개념 + react Event 개념 
// import App from './example/Ex01';

// 2. useState 예제 1 : 좋아요 버튼 
// import App from './example/Ex02';

// 3. useState 예제 2 : 숫자 맞추기 
// import App from './example/Ex03';

// 4. useState 예제 3 : 주사위 게임
// import App from './example/Ex04';

// =================[STEP 2. 배열함수 map, filter]================

// 5. Map 함수 개념, Filter 함수 개념 
// import App from './example/Ex05';

// 6. Map 함수 실습, Filter 함수 실습 
// import App from './example/Ex06';

// =================[STEP 3. Context API ]===============

// 7. 양방향 데이터 전달 
// import App from './example/Ex07';

// 8. context API (useContext) 개념 
// import App from './example/Ex08';

// 9. context 실습 : 다크모드 
// import App from './example/Ex09';

// =================[Mini Game!]=================

// 10. Todo List 만들어보기 
//   - useState, Context API, props, component, map 전부 사용하는 실습 
// import App from './example/Ex10';

// ==================[STEP 4. LifeCycle]================

// 11. LifeCycle (Class Component)

// import App from './example/Ex11';

// 12. useEffect (Function Component)

// import App from './example/Ex12';

// 13. useEffect 간단한 예제 : 참참참

// import App from './example/Ex13';

// 14. useEffect 를 활용해서 데이터 가져오기
// (useEffect, API, axios)

import App from './example/Ex14';





import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
