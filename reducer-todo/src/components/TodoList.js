import React from 'react';
import Todo from './Todo';


const TodoList = ({ state, dispatch }) => {
  return (
    <div className='todo-list'>
      {state.map(item => (
        <Todo {...item} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default TodoList;