import React from 'react';
import './Todo.css';

function TodoForm(props) {
  return (
    <div>
      <form className="todo-form">
        <input
          type="text"
          value={props.value}
          className="todo-input"
          placeholder="...todo"
          onChange={props.changeHandler}
        />
        <button className="add-todo" onClick={props.addStudentHandler}>Add Todo</button>
        <button className="clear-completed">Clear Completed</button>
      </form>
    </div>
  )
};

export default TodoForm;
