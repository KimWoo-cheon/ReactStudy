import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const AddItem = () => {
  const { handleNewTodo, newTodo, setNewTodo } = useContext(TodoContext);

  return (
    <div>
      <input
        type='text'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleNewTodo}>Add</button>
    </div>
  );
}

export default AddItem;
