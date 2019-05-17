import React from 'react';
import './Todo.css';

function TodoForm(props) {
  return (
    <div>
      <form className="todo-form" onSubmit={props.addTodoHandler}>
        <input
          type="text"
          value={props.value}
          className="todo-input"
          placeholder="What do you need to get done?"
          onChange={props.changeHandler}
        />
        <button className="add-todo" onClick={props.addTodoHandler}>Add Todo</button>
        <button className="clear-completed" onClick={props.clearCompleted}>Clear Completed</button>
      </form>
    </div>
  )
};

export default TodoForm;
