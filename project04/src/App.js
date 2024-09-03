
import './App.css';
import { Routes, Route, Link} from 'react-router-dom'
import Main from './pages/Main'
import About from './pages/About'
import Mypage from './pages/Mypage'
import Product from './pages/Product'
import NotFound from './pages/NotFound'

function App() {
  /** React Router 활용하기
   * 1. 설치 npm install react-router-dom
   * 2. BrowserRouter 를 사용
   * - index.js 로 가서 BroswerRouter로 App을 감싸주기
   * 3. Routes, Route
   * - Routes : 여러 Route를 감싸서 그 중 사용자의 요청에 맞는 라우트 하나만 렌더링해준다. (과거에는 Switch라는 문법을 사용햇음)
   * - Route : 여러경로(필수속성 : path, element)
   * a) path (경로) : 사용자가 이러한 요청을 했을 때!
   * b) element(컴포넌트) : 어떤 컴포넌트를 보여줄 것인가?
   
  
  */


  
  return (
    <div className="App">
      {/*경로에 따라 변화하는 것은 Routes 안에 있는 요소들
      그렇기 때문에 내가 경로에 무관하게 사용하고 싶다면 Routes 바깥에 작성
      (상단바, header, navbar....) */}
      <h1>
        <Link to='/'> 
          React Router
          
        </Link>
     

        </h1>
     
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/Mypage' element={<Mypage/>}></Route>
        <Route path='/Product/:num' element={<Product/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
