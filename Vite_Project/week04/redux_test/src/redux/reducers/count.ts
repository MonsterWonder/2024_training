// 返回纯函数，接收previousState和action，返回新状态
// action:{type:string, data:any}
import { INCREMENT, DECREMENT } from "../constants";

// 初始化状态值为0
const initState = 0;
// 传入的previousState默认值为0，在初始化状态下，返回其默认值
export default function (previousState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return previousState + data;
    case DECREMENT:
      return previousState - data;
    default:
      return previousState;
  }
}
