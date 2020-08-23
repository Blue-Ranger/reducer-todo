import React, { useReducer } from "react";

import TodoForm from "./Components/todoForm";
import TodoList from "./Components/todoList";
import { InitialState, TodoReducer } from "./Reducers/todoReducer";

function App() {
  const [state, dispatch] = useReducer(TodoReducer, InitialState);

  const toggleCompleted = (id) => {
    dispatch({ type: "TOGGLE", payload: id });
  };
  const addTodo = (todo) => {
    dispatch({ type: "ADD", payload: todo });
  };
  const clear = () => {
    dispatch({ type: "CLEAR" });
  };
  const handleChange = (event) => {
    dispatch({ type: "UPDATE" });
  };
  return (
    <div>
      <TodoForm addTodo={addTodo} clear={clear} handleChange={handleChange} />
      <TodoList todos={state.todos} toggleCompleted={toggleCompleted} />
    </div>
  );
}

export default App;
