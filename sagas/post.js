import { fork, all, takeLatest, delay, put } from "redux-saga/effects";
import axios from "axios";
import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
} from "../type";

function addPostAPI(data) {
  return axios.post("/api/post", data);
}

function* addPost(action) {
  try {
    yield delay(1000);

    //const result = yield call(addPostAPI, action.data);
    yield put({
      //put은 dipatch
      type: ADD_POST_SUCCESS,
    });
  } catch (err) {
    yield put({
      tyep: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행
}

function addCommentAPI(data) {
  return axios.post(`/api/post/${(data, postId)}/comment`, data);
}

function* addComment(action) {
  try {
    yield delay(1000);

    //const result = yield call(addPostAPI, action.data);
    yield put({
      //put은 dipatch
      type: ADD_POST_SUCCESS,
    });
  } catch (err) {
    yield put({
      tyep: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchAddComment() {
  yield takeLatest(ADD_POST_REQUEST, addComment); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchAddComment)]);
}
