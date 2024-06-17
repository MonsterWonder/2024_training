import React, { useRef } from "react";
import {
  increment,
  decrement,
  incrementAsync,
} from "../../redux/actions/count";
// 引入 connect 用于连接UI组件与redux
import { connect } from "react-redux";

// 定义UI组件

function Count(props) {
  const selectRef = useRef<HTMLSelectElement>(null);

  const increment = () => {
    const { value } = selectRef.current as HTMLSelectElement;
    props.increment(parseInt(value));
  };

  const decrement = () => {
    const { value } = selectRef.current as HTMLSelectElement;
    props.decrement(parseInt(value));
  };

  const incrementIfOdd = () => {
    const { value } = selectRef.current as HTMLSelectElement;
    if (props.count % 2 !== 0) {
      props.increment(parseInt(value));
    }
  };

  const incrementAsync = () => {
    const { value } = selectRef.current as HTMLSelectElement;
    props.incrementAsync(parseInt(value), 500);
  };

  return (
    <div>
      <h1>
        当前求和为：{props.count}, Person组件的人数为：{props.persons.length}
      </h1>
      <select ref={selectRef}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      &nbsp;
      <button onClick={increment}>+</button>&nbsp;
      <button onClick={decrement}>-</button>&nbsp;
      <button onClick={incrementIfOdd}>求和为奇数时加</button>&nbsp;
      <button onClick={incrementAsync}>异步加</button>
    </div>
  );
}

// mapStateToProps函数返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value——状态
// const mapStateToProps = (state) => ({ count: state });

// mapDispatchToProps函数返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value——操作状态的方法
// const mapDispatchToProps = (dispatch) => ({
//   increment: (number) => dispatch(incrementAction(number)),
//   decrement: (number) => dispatch(decrementAction(number)),
// });
// 使用connect()()创建并暴露一个Count的容器组件
// export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
export default connect(
  (state) => ({
    count: state.count,
    persons: state.persons,
  }),
  { increment, decrement, incrementAsync }
)(Count);
