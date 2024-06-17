// 创建store
import { applyMiddleware, createStore } from "redux";
// 引入redux-thunk，用于支持异步action
import { thunk } from "redux-thunk";
// 传入 reducer 参数
import reducers from "./reducers";
export default createStore(reducers, applyMiddleware(thunk));
