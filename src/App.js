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

  addStudentHandler = event => {
    event.preventDefault();
    let newTodo = this.state.input;
    this.setState({
      todoItems: [... this.state.todoItems, newTodo],
      input: ""
    });
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoForm
          addStudentHandler={this.addStudentHandler}
          changeHandler={this.changeHandler}
          value={this.state.input}
        />
        <TodoList
          todoItems={this.state.todoItems.map(todo => (
            <Todo name={todo} />
          ))}
        />
      </div>
    );
  }
}

export default App;
