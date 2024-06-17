import { ADD_PERSON } from "../constants";

export const addPerson = (PersonObj) => ({ type: ADD_PERSON, data: PersonObj });
