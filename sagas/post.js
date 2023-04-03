import { fork, all, takeLatest, delay, put } from "redux-saga/effects";
import axios from "axios";
import shortId from "shortid";

import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_TO_ME,
  LOAD_POST_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  REMOVE_POST_FAILURE,
  REMOVE_POST_OF_ME,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
} from "../type";
import { generateDummyPost } from "../reducers/post";

function addPostAPI(data) {
  return axios.post("/api/post", data);
}

function* addPost(action) {
  try {
    yield delay(1000);

    //const result = yield call(addPostAPI, action.data);
    const id = shortId.generate();
    yield put({
      //put은 dipatch
      type: ADD_POST_SUCCESS,
      data: {
        id,
        content: action.data,
      },
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: id,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행
}

function removePostAPI(data) {
  return axios.delete("/api/post", data);
}

function* removePost(action) {
  try {
    yield delay(1000);

    //const result = yield call(addPostAPI, action.data);
    yield put({
      //put은 dipatch
      type: REMOVE_POST_SUCCESS,
      data: action.data,
    });

    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: REMOVE_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost); //마지막 것만
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
      type: ADD_COMMENT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행
}

function loadPostAPI(data) {
  return axios.get(`/api/post/${(data, postId)}/post`, data);
}

function* loadPost(action) {
  try {
    yield delay(1000);

    //const result = yield call(addPostAPI, action.data);
    yield put({
      //put은 dipatch
      type: LOAD_POST_SUCCESS,
      data: generateDummyPost(10),
    });
  } catch (err) {
    yield put({
      type: LOAD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchloadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행 REQUSET는 보내짐
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchAddComment),
    fork(watchRemovePost),
    fork(watchloadPost),
  ]);
}
