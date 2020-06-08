import React from "react";

class TodoForm extends React.Component {
  state = { todoName: "" };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.todoName);
    this.setState({ todoName: "" })
  };
  handleChange = (e) => {
    console.log(e);
    this.setState({ todoName: e.target.value });
  };
  render() {
    const { todoName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={todoName}
          name="todoName"
          onChange={this.handleChange}
          required
          placeholder="Add a Item"
        />
        <button type="submit">add</button>
      </form>
    );
  }
}
export default TodoForm;
