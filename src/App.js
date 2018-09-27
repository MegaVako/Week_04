import React, { Component } from "react";

import ToDoListItem from "./components/toDoListItem";

class App extends Component {
  state = {
    todoListTitle: "My Todo List",
    todos: ["Walk to latea", "Get boba"]
  };

  adParameter = () => {
    console.log("hi again");
    this.setState({
      todos: [...this.state.todos, "Get more boba"]
    })
  };
  deleteParameter = () => {
    console.log("hi");
    this.setState({
      todos: []
    })
  };
  render() {
    return (
      <div>
        <h1>{this.state.todoListTitle} </h1>
        {this.state.todos.map(x => (
          <div>
            <button onClick={this.deleteParameter}> Remove element</button>
          <ToDoListItem todo={x} />
          </div>
        ))}
        <button onClick={this.adParameter}> Add todo</button>

      </div>
    );
  }
}

export default App;
