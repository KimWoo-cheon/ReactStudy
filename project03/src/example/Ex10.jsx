import React, {useState} from 'react'
import '../style/ex10.css'
import List from '../components/List'
import { TodoContext } from '../context/TodoContext'
const Ex10 = () => {
    const[todos, setTodos]=useState([
        {text : '물마시기', completed:false, num: 1},
     
    ])
    // 새로운 할일 텍스트를 담아줄 state 
    const [newTodo, setNewTodo]=useState('')
    /** 새로운 todo 데이터를 todos 배열에 추가하는 함수 */
    const handleNewTodo = () => {
        // console.log('handleNewTodo', newTodo)
        // newTodo에 담겨있는 할일을 todo 배열에 추가하겠다.
        setTodos([
            
            ...todos,
            {
            text: newTodo,
            completed : false,
            num : todos.length
        }])
        setNewTodo("")

       
    }

     /** 선택한 todo 데이터를 todos 배열에서 삭제하는 함수 */
    const handleNewTodoDelete=(delNum) => {

        // console.log('handleTodoDelete',delNum)
        //todos 배열 안에서 본인의 num가 delNum와 같다면 삭제
        // == 본인의 num가 delNum와 같지 않은 애들만 남겨두겠다.(filter)
        const filterTodo=todos.filter(item=>item.num !== delNum)
        // console.log(todos.find(item=>item.num == delNum)['text'])
        alert(todos.find(item=>item.num == delNum)['text']+"를 통제하겠습니다.")
        setTodos(filterTodo)
        
    }

    /** 선택한 todo데이터의 completed 여부를 토글 하는 함수 */
    const handleTodoToggle = (togNum) =>{
        console.log('handleTodoToggle',togNum)
      
  
  // 1. todos 배열에서 본인의 num 가 togNum 인 객체를 찾을것
   const target =  todos.find(item => item.num === togNum)
  //  console.log('target',target)
  //  2. 만약 1번 조건에 부합하는 객체가 있다면 , 그객체의 completed 상태와
   //  반대되는 상태로 만들어 주겠다.
   if(target){
    target.completed = !(target.completed)
    setTodos([...todos])
   }
  //  3. 바뀐 상태를 todos에 적용
  
  }
  return (
    <TodoContext.Provider value={{todos, setTodos, handleNewTodo, newTodo,setNewTodo,
        handleNewTodoDelete, handleTodoToggle}}>
    <div className='todo-container'>
      <h1>상원이 통제리스트</h1>
      <List/>
      
    </div>
    </TodoContext.Provider>
  )
}

export default Ex10
