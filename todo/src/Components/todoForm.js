import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      item: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Todo List</h1>
        <input
          type="text"
          name="item"
          value={this.item}
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.addTodo(this.state.item)}>
          Add Todo
        </button>
        <button onClick={this.props.clear}>Clear completed</button>
      </form>
    );
  }
}

export default TodoForm;
