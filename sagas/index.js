import {
  all,
  fork,
  takeLatest,
  call,
  put,
  takeEvery,
  takeLeading,
  delay,
} from "redux-saga/effects";
import axios from "axios";
function logInAPI(data) {
  return axios.post("/api/login", data);
}

function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data);
    yield delay(1000);
    yield put({
      //put은 dipatch

      type: "LOG_IN_SUCCESS",
    });
  } catch (err) {
    yield put({
      tyep: "LOG_IN_FAILURE",
      data: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post("/api/logout");
}

function* logOut() {
  try {
    yield delay(1000);

    // const result = yield call(logOutAPI);
    yield put({
      //put은 dipatch
      type: "LOG_OUT_SUCCESS",
    });
  } catch (err) {
    yield put({
      tyep: "LOG_OUT_FAILURE",
      data: err.response.data,
    });
  }
}

function addPostAPI(data) {
  return axios.post("/api/post", data);
}

function* addPost(action) {
  try {
    yield delay(1000);

    //const result = yield call(addPostAPI, action.data);
    yield put({
      //put은 dipatch
      type: "ADD_POST_SUCCESS",
    });
  } catch (err) {
    yield put({
      tyep: "ADD_POST_FAILURE",
      data: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeEvery("LOG_IN_REQUEST", logIn); //반복
}

function* watchLogout() {
  yield takeLeading("LOG_OUT_REQUEST", logOut); //첫 번째 것만
}

function* watchAddPost() {
  yield takeLatest("ADD_POST_REQUEST", addPost); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행
}

export default function* rootSaga() {
  yield all([fork(watchLogin), fork(watchLogout), fork(watchAddPost)]);
}
