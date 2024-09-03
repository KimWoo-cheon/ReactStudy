import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const ListItem = ({item}) => {

   const{handleNewTodoDelete, handleTodoToggle}= useContext(TodoContext)
  return (
    <div className='list-item'>
        <li>
            <input type='checkbox'
            checked = {item.completed}
            onChange={()=>{handleTodoToggle(item.num)}}/>
            <label style={{
                textDecoration : item.completed?"Line-thorough":"none"
            }}>
                <span className='todo-text'>{item.text}</span>
            </label>
            <button onClick={()=>{handleNewTodoDelete(item.num)}}>통제</button>
        </li>
    </div>
  )
}

export default ListItem