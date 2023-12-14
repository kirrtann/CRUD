import {
  apicall,
  deleteapidata,
  postdaata,
  updateda,
} from "../Apiservic/servic";
import {
  ADD_API,
  ADD_TASK,
  DELETE_TASK,
  SET_TASK,
  UPDATE_TASK,
} from "./Action";
import { call, put, takeEvery } from "redux-saga/effects";
//call the api and get data 
function* getdata() {
  console.log("saga");
  try {
    const getapi = yield call(apicall);
    console.log(getapi);
//put the data in reduser
    yield put({ type: SET_TASK, getapi });
  } catch (error) {
    console.log(error);
  }
}
//call the post api and post data
function* postdata(task) {
  console.log(task.payload);
  const adddata = task.payload;
  try {
    const postdata = yield call(postdaata, adddata);
    yield call(getdata);
    return postdata;
  } catch (error) {
    console.log(error);
  }
}
//call the delete api and delete the data
function* deletedata(taskId) {
  console.log(taskId.payload);
  const id = taskId?.payload;
  try {
    const deleteaa = yield call(deleteapidata, id);
    yield call(getdata);
    return deleteaa;
  } catch (error) {
    console.log(error);
  }
}
//call the put api and update the data
function* updatedata(tasksdata) {
  console.log(tasksdata?.updatedTask);
  const dataupdataa = tasksdata?.updatedTask;
  try {
    const updateapidata = yield call(updateda, dataupdataa);
    yield call(getdata);
    return updateapidata;
  } catch (error) {
    console.log(error);
  }
}

function* taskssaga() {
  yield takeEvery(ADD_API, getdata);
  yield takeEvery(ADD_TASK, postdata);
  yield takeEvery(DELETE_TASK, deletedata);
  yield takeEvery(UPDATE_TASK, updatedata);
}
export default taskssaga;
