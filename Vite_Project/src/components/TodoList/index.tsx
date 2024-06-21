import React from "react";

function TodoList({ todos, handleChecked }) {
  const present = todos.present ? todos.present : [];
  return (
    <ul style={{ listStyle: "none" }}>
      {present.map((todo) => {
        return (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleChecked(todo.id)}
              />
              <span>{todo.todo}</span>
            </label>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
