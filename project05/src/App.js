
import './App.css';
import { Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import { useState } from 'react';
import Login from './components/Login';

function App() {

  //상품 리스트를 담아줄 state
  const [list, setList]=useState([])

  return (
    <div className='container'>
        <Header></Header>
        <Routes>
        

{/**페이지에 따라 다르게 보여지는 컴포턴트 ->Routes 안에 Route로 작성
 * 페이지에 관계없이 거정되어야한다면? -> Routes 바깥에 작성
 */}
          <Route path='/' element={<Main/>}></Route>
          <Route path='/list' element={<ProductList list={list} setList={setList}/>}></Route>
          <Route path='/detail/:num' element={<ProductDetail list={list}/> }></Route>
          <Route path='/Login' element={<Login/> }></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
