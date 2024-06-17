import React, { useRef } from "react";
import { addPerson } from "../../redux/actions/person";
import { connect } from "react-redux";
import { nanoid } from "nanoid";

function Person(props) {
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const addPerson = () => {
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const personObj = { id: nanoid(), name, age: parseInt(age) };
    props.addPerson(personObj);
  };

  return (
    <div>
      <h1>这是Person组件，Count组件的求和为：{props.count}</h1>
      <input ref={nameRef} type="text" placeholder="请输入姓名" />
      &nbsp;
      <input ref={ageRef} type="text" placeholder="请输入年龄" />
      &nbsp;
      <button onClick={addPerson}>点击展示</button>
      <ul>
        {props.persons.map((personObj) => {
          return (
            <li key={personObj.id}>
              {personObj.name}---{personObj.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default connect(
  (state) => ({
    count: state.count,
    persons: state.persons,
  }),
  { addPerson }
)(Person);
