import React from 'react';

function Todo(props) {
  return (
    <div onClick={() => props.onClick(props.todo.id)} className={`${props.todo.completed ? 'completed' : 'not-completed'}`}>
      <p>
        {props.todo.name}
      </p>
    </div>
  );
}

export default Todo;
