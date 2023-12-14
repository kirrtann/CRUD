import { combineReducers } from "redux";
import tasksReducer from "./reducer";
const rootreduced = combineReducers({
  tasksReducer,
});
export default rootreduced;
