import { useState } from "react";
import AppName from "./components/AppName";
import "./App.css";
import AppTodo from "./components/AppTodo";
import TodoList from "./components/TodoList";

function App () {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos,newTodo]);
  };

  const handleDeleteTodo = (indexToDelete) => {
    const newTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(newTodos);
  };

  return (
    <div className="container mt-5">
      <AppName/>
      <AppTodo onAdd={handleAddTodo}/>
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App ;