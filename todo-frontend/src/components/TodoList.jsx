import axios from "axios";

export function TodoList({ todos, setTodos }) {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/todos/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          {todo.text}
          <button onClick={() => handleDelete(todo._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
