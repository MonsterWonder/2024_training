import React from "react";
import Count from "./containers/Count";
import store from "./redux/store";

export default function App() {
  // 给容器组件传递store
  // return <Count store={store} />;
  return <Count />;
}
