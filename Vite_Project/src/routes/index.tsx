import React from "react";
import TodoList from "../components/TodoList";
import { Navigate } from "react-router-dom";

const createRoutes = ({
  allTodos,
  completedTodos,
  activeTodos,
  handleChecked,
}) => [
  {
    path: "/all",
    element: <TodoList todos={allTodos} handleChecked={handleChecked} />,
  },
  {
    path: "/completed",
    element: <TodoList todos={completedTodos} handleChecked={handleChecked} />,
  },
  {
    path: "/active",
    element: <TodoList todos={activeTodos} handleChecked={handleChecked} />,
  },
  {
    path: "/",
    element: <Navigate to="/all" />,
  },
];

export default createRoutes;
