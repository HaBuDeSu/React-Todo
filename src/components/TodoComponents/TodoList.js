import React from 'react';
import './Todo.css';

const TodoList = function(props) {
  return (
    <div>
      <div className="todo-list">
        {props.todoItems}
      </div>
    </div>
  )
};

export default TodoList;
