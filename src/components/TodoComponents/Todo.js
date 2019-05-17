import React from 'react';

function Todo(props) {
  return (
    <div
    onClick={() => props.toggleTodo(props.todo.id)}
    className={`${props.todo.completed}`}>
      <p>
        {props.todo.name}
      </p>
    </div>
  );
}

export default Todo;
