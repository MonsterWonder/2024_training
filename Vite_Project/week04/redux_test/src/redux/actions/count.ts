// Action Creators 创建 action 对象
import { INCREMENT, DECREMENT } from "../constants";

export const increment = (data) => ({ type: INCREMENT, data });
export const decrement = (data) => ({ type: DECREMENT, data });

// 异步action，就是指action的值为函数，异步action中一般都会调用同步action，异步action不是必须要用的
export const incrementAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data));
    }, time);
  };
};
