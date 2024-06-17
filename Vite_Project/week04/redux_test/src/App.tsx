import React from "react";
import Count from "./containers/Count"; // 引入容器组件
import Person from "./containers/Person";

export default function App() {
  // 给容器组件传递store
  // return <Count store={store} />;
  return (
    <>
      <Count />
      <hr />
      <Person />
    </>
  );
}
