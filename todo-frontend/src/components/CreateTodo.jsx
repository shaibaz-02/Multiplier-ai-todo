import { useState } from "react";
import axios from "axios";

export function CreateTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = async () => {
    try {
      const res = await axios.post("http://localhost:4000/todos", { text });
      onAdd(res.data);
      setText("");
    } catch (error) {
      console.error("Failed to add todo");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
}
