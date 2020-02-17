import React, { useState } from 'react'
import { Button, Form } from 'reactstrap';

const TodoForm = ({ dispatch }) => {
  const [newItemText, setNewItemText] = useState('');

  const handleChanges = e => {
    setNewItemText(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: newItemText});
    setNewItemText('');
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <div className="todo-form">
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="Type in a Task"
          value={newItemText}
          onChange={handleChanges}
        />
        
        <div className="buttons">
          <br></br>
          <Button color="primary" className="submit-btn" type="submit">
            Add To Do
          </Button><span>  </span>
          <Button color="primary" className="clear-btn" onClick={handleClear}>
            Clear Completed
          </Button>
        </div>
        <br></br>
      </Form>
    </div>
  );
};

export default TodoForm;