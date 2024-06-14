import React, { useRef } from "react";

export default function Count(props) {
  const selectRef = useRef<HTMLSelectElement>(null);

  const increment = () => {
    const { value } = selectRef.current as HTMLSelectElement;
    // store.dispatch({ type: "increment", data: parseInt(value) });
    props.increment(parseInt(value));
  };

  const decrement = () => {
    const { value } = selectRef.current as HTMLSelectElement;
    // store.dispatch({ type: "decrement", data: parseInt(value) });
    props.decrement(parseInt(value));
  };

  const incrementIfOdd = () => {
    const { value } = selectRef.current as HTMLSelectElement;
    // let prevState = store.getState();
    // if (prevState % 2 !== 0) {
    //   store.dispatch({ type: "increment", data: parseInt(value) });
    // }
    if (props.count % 2 !== 0) {
      props.increment(parseInt(value));
    }
  };

  const incrementAsync = () => {
    const { value } = selectRef.current as HTMLSelectElement;
    // setTimeout(() => {
    //   store.dispatch({ type: "increment", data: parseInt(value) });
    // }, 500);

    setTimeout(() => {
      props.increment(parseInt(value));
    }, 500);
  };

  return (
    <div>
      {/* <h1>当前求和为：{store.getState()}</h1> */}
      <h1>当前求和为：{props.count}</h1>
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
