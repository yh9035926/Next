import {
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  LOG_OUT_REQUEST,
  LOG_IN_REQUEST,
  LOG_OUT_FAILURE,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "../type";

import {
  all,
  fork,
  delay,
  put,
  takeEvery,
  takeLeading,
  takeLatest,
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

      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
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
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      data: err.response.data,
    });
  }
}

function signUpAPI() {
  return axios.post("/api/signUp");
}

function* signUp() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);

    yield put({
      //put은 dipatch
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      data: err.response.data,
    });
  }
}
function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, logIn); //반복
}

function* watchLogout() {
  yield takeLeading(LOG_OUT_REQUEST, logOut); //첫 번째 것만
}

function* watchSingUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp); //첫 번째 것만
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout), fork(watchSingUp)]);
}
