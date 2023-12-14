// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./rootreducer";
import taskssaga from "./tasksssaga";
import createSagaMiddleware from "redux-saga";
// import store from './store';
import rootreduced from "./rootreducer";
// const sagamiddleware = createSagaMiddleware();
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: () => [sagamiddleware],
// });
// sagamiddleware.run(taskssaga);
// export default store;

const sagamiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootreduced,
  middleware: () => [sagamiddleware],
});

sagamiddleware.run(taskssaga);
export default store;
