import React from 'react';

function Todo(props) {
  return (
    <div className="todo-item">
      <p className="todo-name">
        {props.name}
      </p>
    </div>
  );
}

export default Todo;
