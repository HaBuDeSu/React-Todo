import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: [],
      input: ""
    };
  }

  changeHandler = event => {
    this.setState({input: event.target.value});
  };

  addTodoHandler = event => {
    event.preventDefault();
    let newTodo = {
      name: this.state.input,
      id: this.state.todoItems.length,
      completed: false
    };
    console.log(newTodo.id)

    this.setState({
      todoItems: [... this.state.todoItems, newTodo],
      input: ""
    });

  }

  toggleTodo = todoId => {
    console.log("todoId: ", todoId)
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoForm
          addTodoHandler={this.addTodoHandler}
          changeHandler={this.changeHandler}
          value={this.state.input}
        />
        <TodoList
          todoItems={this.state.todoItems.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              onClick={this.toggleTodo}
            />
          ))}
        />
      </div>
    );
  }
}

export default App;
