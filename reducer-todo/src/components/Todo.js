import React from 'react';
import { Table } from 'reactstrap';

import '../Todo.css';

const Todo = props => {
  return (
    <Table
      className={props.completed ? ' completed' : ''}
      onClick={() => props.dispatch({type: 'COMPLETED', payload: props.id})}
    >
      <td>{props.item}</td>
    </Table>
  );
};

export default Todo;