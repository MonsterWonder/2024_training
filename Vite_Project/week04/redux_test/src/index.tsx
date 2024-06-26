import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  /** 此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store */
  <Provider store={store}>
    <App />
  </Provider>
);

// 监测redux中状态的改变，如redux的状态发生了改变，那么重新渲染App组件
// react-redux不需要监测，直接渲染
// store.subscribe(() => {
//   root.render(<App />);
// });
