import React, { Component } from "react";
import List from "./List";
import TodoForm from "./TodoForm";
import "./App.css";
class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Learn React", complete: false },
      { id: 2, name: "Learn JS", complete: true },
      { id: 3, name: "Learn JSX", complete: false },
    ],
    filter: "All",
  };
  
  addItem = (todoName) => {
    console.log()
    // step 1 create the new object(todo)
    const newTodo = {id: `${Math.random()}`, name: todoName, complete:false}
    // step 2 create a new todos array with new object in it
    const newTodos = [newTodo, ...this.state.todos]
    // step 3 setState
    this.setState({
      todos: newTodos
    })
  }

  filterTodos = () => {
    const { todos, filter} = this.state
    switch(filter) {
      case "Active":
        return todos.filter( t => !t.complete)
        case "Complete":
          return todos.filter( t=> t.complete)
          default:
          return todos
    }
  }

  handleClick = (id) => {
    console.log("click")
    console.log(id)
    // i have an id and need to find the matching id and toggle the complete in that object
    // editing my state map
    const { todos } = this.state
    const newTodos = todos.map(todo => {
      if(todo.id !== id) return todo
      return { ...todo, complete: !todo.complete}
    }) 
    this.setState({
      todos: newTodos,
    })
  }

  render() {
    return (
      <div>
        <h1>todolist</h1>
        <TodoForm addItem={this.addItem} />
        <List 
        todoClick={this.handleClick}
         name={"Todo List"} 
         items={this.filterTodos()} />
      </div>
    );
  }
}
export default App;
