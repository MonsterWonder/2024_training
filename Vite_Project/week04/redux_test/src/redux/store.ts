// 创建store
import { createStore } from "redux";
import countReducer from "./count_reducers";
// 传入 reducer 参数
export default createStore(countReducer);
