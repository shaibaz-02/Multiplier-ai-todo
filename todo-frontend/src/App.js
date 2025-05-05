// src/App.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { CreateTodo } from "./components/CreateTodo";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/todos").then((res) => {
      setTodos(res.data);
    });
  }, []);

  return (
    <div>
      <h1>My To-Do List</h1>
      <CreateTodo onAdd={(todo) => setTodos([...todos, todo])} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
