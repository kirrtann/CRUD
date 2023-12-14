export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const SET_TASK = "SET_TASK";
export const SET_DELETE_TASK = "SET_DELETE_TASK";
export const SET_UPDATE_TASK = "SET_UPDATE_TASK";
export const ADD_API = "ADD_API";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const updateTask = (updatedTask) => ({
  type: UPDATE_TASK,
  updatedTask,
});
export const adddata = () => ({
  type: ADD_API,
});
