import { SET_TASK } from "./Action";

const initialState = [];

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASK:
      const rs = action.getapi;
      return rs;
    default:
      return state;
  }
};

export default tasksReducer;
