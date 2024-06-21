import React from "react";
import { connect } from "react-redux";
import { toggle_todo } from "../../redux/actions";
import { useRoutes } from "react-router-dom";
import createRoutes from "../../routes";
import MyNavLink from "../../components/MyNavLink";

function Content({ todos, toggle_todo }) {
  const handleChecked = (id) => {
    toggle_todo(id);
  };

  const present = todos.present ? todos.present : [];
  const allTodos = todos;
  const completedTodos = present.filter((todo) => todo.completed);
  const activeTodos = present.filter((todo) => !todo.completed);

  const routes = useRoutes(
    createRoutes({ allTodos, completedTodos, activeTodos, handleChecked })
  );

  return (
    <div>
      {/* todo: 这里可以用路由实现 */}
      <MyNavLink to="/all">全部</MyNavLink>
      &nbsp;
      <MyNavLink to="/completed">已完成</MyNavLink>
      &nbsp;
      <MyNavLink to="/active">进行中</MyNavLink>
      {routes}
    </div>
  );
}

export default connect(
  (state) => ({
    todos: state.todos,
  }),
  { toggle_todo }
)(Content);
