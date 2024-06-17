import { ADD_PERSON } from "../constants";

const initState = [{ id: "001", name: "Tom", age: 18 }];
export default function (previousState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...previousState];
    default:
      return previousState;
  }
}
