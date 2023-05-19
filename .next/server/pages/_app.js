module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NodeBrid = ({
  Component
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
};
NodeBrid.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_2__["default"].withRedux(NodeBrid));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);




const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      //console.log("HYDRATE", action);
      return action.payload;
    default:
      {
        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_2__["default"]
        });
        return combinedReducer(state, action);
      }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type */ "./type/index.js");


const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePost: true,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null
};
const addPost = data => ({
  type: _type__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_REQUEST"],
  data
});
const addComment = data => ({
  type: _type__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_REQUEST"],
  data
});
const rootReducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case _type__WEBPACK_IMPORTED_MODULE_1__["REMOVE_IMAGE"]:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;

      //-------------------------------------------------------------------
      case _type__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_REQUEST"]:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_SUCCESS"]:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(action.data);
        draft.imagePaths = [];
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_FAILURE"]:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["LIKE_POST_REQUEST"]:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LIKE_POST_SUCCESS"]:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers.push({
            id: action.data.UserId
          });
          draft.likePostLoading = false;
          draft.likePostDone = true;
          break;
        }
      case _type__WEBPACK_IMPORTED_MODULE_1__["LIKE_POST_FAILURE"]:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_REQUEST"]:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_SUCCESS"]:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data); // action.data를 concat해서 기존 데이터에 추가
        draft.hasMorePost = action.data.length === 10;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_FAILURE"]:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      //-------------------------------------------------------------------
      case _type__WEBPACK_IMPORTED_MODULE_1__["RETWEET_REQUEST"]:
        draft.retweetLoading = true;
        draft.retweetDone = false;
        draft.retweetError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["RETWEET_SUCCESS"]:
        draft.retweetLoading = false;
        draft.retweetDone = true;
        draft.mainPosts.unshift(action.data);
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["RETWEET_FAILURE"]:
        draft.retweetLoading = false;
        draft.retweetError = action.error;
        break;
      //-------------------------------------------------------------------
      case _type__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_REQUEST"]:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_SUCCESS"]:
        draft.imagePaths = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_FAILURE"]:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_POST_REQUEST"]:
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_POST_SUCCESS"]:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
          draft.unlikePostLoading = false;
          draft.unlikePostDone = true;
          break;
        }
      case _type__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_POST_FAILURE"]:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_REQUEST"]:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_SUCCESS"]:
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_FAILURE"]:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_REQUEST"]:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_SUCCESS"]:
        //const postIndex = state.mainPosts.findIndex(
        //   (v) => v.id === action.data.postId
        // );
        // const post = { ...state.mainPosts[postIndex] };
        //post.Comments = [dummyComment(action.data.content), ...post.Comments];
        // const mainPosts = [...state.mainPosts];
        // mainPosts[postIndex] = post;

        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_FAILURE"]:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
      //-------------------------------------------------------------------

      default:
        break;
    }
  });
};
//immer 쓰면 ...state 안 써도 됨 state 대신 draft

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type */ "./type/index.js");


const initialState = {
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  loadFollowersLoading: false,
  loadFollowersDone: false,
  loadFollowersError: null,
  loadFollowingsLoading: false,
  loadFollowingsDone: false,
  loadFollowingsError: null,
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  followLoading: false,
  followDone: false,
  followError: null,
  removeFollowerLoading: false,
  removeFollowerDone: false,
  removeFollowerError: null,
  unFollowLoading: false,
  unFollowDone: false,
  unFollowError: null,
  userInfo: null,
  me: null
};
const loginRequestAction = data => {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_REQUEST"],
    data
  };
};
const logoutRequestAction = () => {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_REQUEST"]
  };
};
const rootReducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_REQUEST"]:
        draft.logInError = null;
        draft.logInLoading = true;
        draft.logInDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_SUCCESS"]:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_FAILURE"]:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_MY_INFO_REQUEST"]:
        draft.loadMyInfoError = null;
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_MY_INFO_SUCCESS"]:
        draft.loadMyInfoLoading = false;
        draft.me = action.data;
        draft.loadMyInfoDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_MY_INFO_FAILURE"]:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_REQUEST"]:
        draft.loadUserError = null;
        draft.loadUserLoading = true;
        draft.loadUserDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_SUCCESS"]:
        draft.loadUserLoading = false;
        draft.userInfo = action.data;
        draft.loadUserDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_FAILURE"]:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FOLLOWER_REQUEST"]:
        draft.removeFollowerError = null;
        draft.removeFollowerLoading = true;
        draft.removeFollowerDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FOLLOWER_SUCCESS"]:
        draft.removeFollowerLoading = false;
        draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
        draft.removeFollowerDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FOLLOWER_FAILURE"]:
        draft.removeFollowerLoading = false;
        draft.removeFollowerError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWERS_REQUEST"]:
        draft.loadFollowersError = null;
        draft.loadFollowersLoading = true;
        draft.loadFollowersDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWERS_SUCCESS"]:
        draft.loadFollowersLoading = false;
        draft.me.Followers = action.data;
        draft.loadFollowersDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWERS_FAILURE"]:
        draft.loadFollowersLoading = false;
        draft.loadFollowersError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWINGS_REQUEST"]:
        draft.loadFollowingsError = null;
        draft.loadFollowingsLoading = true;
        draft.loadFollowingsDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWINGS_SUCCESS"]:
        draft.loadFollowingsLoading = false;
        draft.me.Followings = action.data;
        draft.loadFollowingsDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWINGS_FAILURE"]:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_REQUEST"]:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_SUCCESS"]:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_FAILURE"]:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_REQUEST"]:
        draft.followError = null;
        draft.followLoading = true;
        draft.followDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_SUCCESS"]:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me.Followings.push({
          id: action.data.UserId
        });
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_FAILURE"]:
        draft.followLoading = false;
        draft.followError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_REQUEST"]:
        draft.unFollowError = null;
        draft.unFollowLoading = true;
        draft.unFollowDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_SUCCESS"]:
        draft.unFollowLoading = false;
        draft.unFollowDone = true;
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_FAILURE"]:
        draft.unFollowLoading = false;
        draft.unFollowError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_REQUEST"]:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_SUCCESS"]:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_FAILURE"]:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_REQUEST"]:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_SUCCESS"]:
        draft.me.nickname = action.data.nickname;
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_FAILURE"]:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_TO_ME"]:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_OF_ME"]:
        draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
      default:
        break;
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = "http://localhost:3075";
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true; //쿠키 전달

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type */ "./type/index.js");




//-------------------------------------------------------------
function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/post", data);
}
function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행
}
//-------------------------------------------------------------
function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/post/images", data);
}
function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchuploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행
}
//-------------------------------------------------------------

function loadPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts?lastId=${lastId || 0}`); //get에서 데이터 넣기 ? a=b 이런 식으로
}

function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostsAPI, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행 REQUSET는 보내짐
}
//-------------------------------------------------------------
function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data}/retweet`);
}
function* retweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(retweetAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행
}
//-------------------------------------------------------------

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}`);
}
function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행
}
//-------------------------------------------------------------

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data.postId}/comment`, data);
}
function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행
}
//-------------------------------------------------------------

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/post/${data}/like`); //patch 일부분 수정
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행
}
//-------------------------------------------------------------

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}/like`);
}
function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchuploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRetweet)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type */ "./type/index.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



//-------------------------------------------------------------------
function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/user/login", data);
}
function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logInAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 dipatch

      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLogin() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["LOG_IN_REQUEST"], logIn); //반복
}
//-------------------------------------------------------------------

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/user/logout");
}
function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLogout() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLeading"])(_type__WEBPACK_IMPORTED_MODULE_0__["LOG_OUT_REQUEST"], logOut); //첫 번째 것만
}

//-------------------------------------------------------------------

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/user", data);
}
function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_0__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchSingUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_0__["SIGN_UP_REQUEST"], signUp); //첫 번째 것만
}

//-------------------------------------------------------------------

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch(`/user/${data}/follow`);
}
function* follow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(followAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 dipatch

      type: _type__WEBPACK_IMPORTED_MODULE_0__["FOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["FOLLOW_REQUEST"], follow); //반복
}

//-----------------------------------------------------------------------
function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`/user/${data}/follow`);
}
function* unfollow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unfollowAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 dipatch

      type: _type__WEBPACK_IMPORTED_MODULE_0__["UNFOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["UNFOLLOW_REQUEST"], unfollow); //반복
}

//-------------------------------------------------------------------
function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/user");
}
function* loadMyInfo(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMyInfoAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 dipatch

      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["LOAD_MY_INFO_REQUEST"], loadMyInfo); //반복
}

//-------------------------------------------------------------------
function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`user/${data}`);
}
function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 dipatch

      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_USER_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["LOAD_USER_REQUEST"], loadUser); //반복
}
//-------------------------------------------------------------------
function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/user/followers", data);
}
function* loadFollowers(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowersAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 dipatch

      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_FOLLOWERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_FOLLOWERS_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["LOAD_FOLLOWERS_REQUEST"], loadFollowers); //반복
}
//-------------------------------------------------------------------
function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/user/followings", data);
}
function* loadFollowings(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowingsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 dipatch

      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_FOLLOWINGS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_FOLLOWINGS_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLoadFollowins() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings); //반복
}

//-------------------------------------------------------------------

function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch("/user/nickname", {
    nickname: data
  });
}
function* changeNickname(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(changeNicknameAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 dipatch

      type: _type__WEBPACK_IMPORTED_MODULE_0__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["CHANGE_NICKNAME_REQUEST"], changeNickname); //반복
}
//-------------------------------------------------------------------

function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`/user/follower/${data}`);
}
function* removeFollower(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removeFollowerAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 dipatch

      type: _type__WEBPACK_IMPORTED_MODULE_0__["REMOVE_FOLLOWER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["REMOVE_FOLLOWER_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["REMOVE_FOLLOWER_REQUEST"], removeFollower); //반복
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogout), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSingUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowins), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUser)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");






const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_4___default()();
  const middlewares = [sagaMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]); //sagaTask 서버사이드랜더링용
  return store;
};
const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "./type/index.js":
/*!***********************!*\
  !*** ./type/index.js ***!
  \***********************/
/*! exports provided: LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_USER_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, FOLLOW_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, RETWEET_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, UPLOAD_IMAGES_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, REMOVE_IMAGE, UNFOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, ADD_POST_SUCCESS, ADD_POST_REQUEST, ADD_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, REMOVE_POST_SUCCESS, REMOVE_POST_REQUEST, REMOVE_POST_FAILURE, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_FAILURE, ADD_COMMENT_SUCCESS, ADD_COMMENT_REQUEST, ADD_COMMENT_FAILURE, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_FAILURE, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, ADD_POST_TO_ME, REMOVE_POST_OF_ME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOAD_MY_INFO_FAILURE = "LOAD_MY_INFO_FAILURE";
const LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST";
const LOAD_MY_INFO_SUCCESS = "LOAD_MY_INFO_SUCCESS";
const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";
const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const FOLLOW_FAILURE = "FOLLOW_FAILURE";
const FOLLOW_REQUEST = "FOLLOW_REQUEST";
const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const RETWEET_FAILURE = "RETWEET_FAILURE";
const RETWEET_REQUEST = "RETWEET_REQUEST";
const RETWEET_SUCCESS = "RETWEET_SUCCESS";
const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";
const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
const REMOVE_IMAGE = "REMOVE_IMAGE";
const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";
const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
const LOAD_FOLLOWERS_FAILURE = "LOAD_FOLLOWERS_FAILURE";
const LOAD_FOLLOWERS_REQUEST = "LOAD_FOLLOWERS_REQUEST";
const LOAD_FOLLOWERS_SUCCESS = "LOAD_FOLLOWERS_SUCCESS";
const LOAD_FOLLOWINGS_FAILURE = "LOAD_FOLLOWINGS_FAILURE";
const LOAD_FOLLOWINGS_REQUEST = "LOAD_FOLLOWINGS_REQUEST";
const LOAD_FOLLOWINGS_SUCCESS = "LOAD_FOLLOWINGS_SUCCESS";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const REMOVE_FOLLOWER_SUCCESS = "REMOVE_FOLLOWER_SUCCESS";
const REMOVE_FOLLOWER_REQUEST = "REMOVE_FOLLOWER_REQUEST";
const REMOVE_FOLLOWER_FAILURE = "REMOVE_FOLLOWER_FAILURE";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";
const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";
const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
const ADD_POST_TO_ME = "ADD_POST_TO_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy8uL3R5cGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIk5vZGVCcmlkIiwiQ29tcG9uZW50IiwiX19qc3giLCJSZWFjdCIsIkZyYWdtZW50IiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCIsImNvbWJpbmVkUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0IiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwicmV0d2VldExvYWRpbmciLCJyZXR3ZWV0RG9uZSIsInJldHdlZXRFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwiYWRkUG9zdCIsImRhdGEiLCJBRERfUE9TVF9SRVFVRVNUIiwiYWRkQ29tbWVudCIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJwcm9kdWNlIiwiZHJhZnQiLCJSRU1PVkVfSU1BR0UiLCJmaWx0ZXIiLCJ2IiwiaSIsIkFERF9QT1NUX1NVQ0NFU1MiLCJ1bnNoaWZ0IiwiQUREX1BPU1RfRkFJTFVSRSIsImVycm9yIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsImZpbmQiLCJpZCIsIlBvc3RJZCIsIkxpa2VycyIsInB1c2giLCJVc2VySWQiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsImNvbmNhdCIsImxlbmd0aCIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIlJFVFdFRVRfUkVRVUVTVCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRkFJTFVSRSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJDb21tZW50cyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwibG9hZEZvbGxvd2Vyc0xvYWRpbmciLCJsb2FkRm9sbG93ZXJzRG9uZSIsImxvYWRGb2xsb3dlcnNFcnJvciIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRG9uZSIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInJlbW92ZUZvbGxvd2VyTG9hZGluZyIsInJlbW92ZUZvbGxvd2VyRG9uZSIsInJlbW92ZUZvbGxvd2VyRXJyb3IiLCJ1bkZvbGxvd0xvYWRpbmciLCJ1bkZvbGxvd0RvbmUiLCJ1bkZvbGxvd0Vycm9yIiwidXNlckluZm8iLCJtZSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsIkxPR19JTl9SRVFVRVNUIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiRm9sbG93ZXJzIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiRm9sbG93aW5ncyIsIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIm5pY2tuYW1lIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlBvc3RzIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJhZGRQb3N0QVBJIiwicmVzdWx0IiwiY2FsbCIsInB1dCIsImVyciIsInJlc3BvbnNlIiwid2F0Y2hBZGRQb3N0IiwidGFrZUxhdGVzdCIsInVwbG9hZEltYWdlc0FQSSIsInVwbG9hZEltYWdlcyIsIndhdGNodXBsb2FkSW1hZ2VzIiwibG9hZFBvc3RzQVBJIiwibGFzdElkIiwiZ2V0IiwibG9hZFBvc3RzIiwid2F0Y2hMb2FkUG9zdCIsInJldHdlZXRBUEkiLCJyZXR3ZWV0IiwiY29uc29sZSIsIndhdGNoUmV0d2VldCIsInJlbW92ZVBvc3RBUEkiLCJkZWxldGUiLCJyZW1vdmVQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsIndhdGNoQWRkQ29tbWVudCIsImxpa2VQb3N0QVBJIiwicGF0Y2giLCJsaWtlUG9zdCIsIndhdGNoTGlrZVBvc3QiLCJ1bmxpa2VQb3N0QVBJIiwidW5saWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsImxvZ0luQVBJIiwibG9nSW4iLCJ3YXRjaExvZ2luIiwidGFrZUV2ZXJ5IiwibG9nT3V0QVBJIiwibG9nT3V0Iiwid2F0Y2hMb2dvdXQiLCJ0YWtlTGVhZGluZyIsInNpZ25VcEFQSSIsInNpZ25VcCIsImxvZyIsIndhdGNoU2luZ1VwIiwiZm9sbG93QVBJIiwiZm9sbG93Iiwid2F0Y2hGb2xsb3ciLCJ1bmZvbGxvd0FQSSIsInVuZm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsImxvYWRNeUluZm9BUEkiLCJsb2FkTXlJbmZvIiwid2F0Y2hMb2FkTXlJbmZvIiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlciIsIndhdGNoTG9hZFVzZXIiLCJsb2FkRm9sbG93ZXJzQVBJIiwibG9hZEZvbGxvd2VycyIsIndhdGNoTG9hZEZvbGxvd2VycyIsImxvYWRGb2xsb3dpbmdzQVBJIiwibG9hZEZvbGxvd2luZ3MiLCJ3YXRjaExvYWRGb2xsb3dpbnMiLCJjaGFuZ2VOaWNrbmFtZUFQSSIsImNoYW5nZU5pY2tuYW1lIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsInJlbW92ZUZvbGxvd2VyQVBJIiwicmVtb3ZlRm9sbG93ZXIiLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RjBCO0FBRVM7QUFDVztBQUU5QyxN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QUU3QyxNQUFNcUIsbUJBQW1CLEdBQUcscUJBQXFCO0FBQ2pELE1BQU1GLG1CQUFtQixHQUFHLHFCQUFxQjtBQUNqRCxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBcUI7QUFFakQsTUFBTThFLGNBQWMsR0FBRyxnQkFBZ0I7QUFDdkMsTUFBTUUsaUJBQWlCLEdBQUcsbUJBQW1CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VwRCxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcblxuY29uc3QgTm9kZUJyaWQgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29tcG9uZW50IC8+XG4gICAgPC8+XG4gICk7XG59O1xuTm9kZUJyaWQucHJvcFR5cGVzID0ge1xuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxufTtcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE5vZGVCcmlkKTtcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XG5pbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQgcG9zdCBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBIWURSQVRFOlxuICAgICAgLy9jb25zb2xlLmxvZyhcIkhZRFJBVEVcIiwgYWN0aW9uKTtcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgICAgICB1c2VyLFxuICAgICAgICBwb3N0LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcbmltcG9ydCB7XG4gIEFERF9QT1NUX0ZBSUxVUkUsXG4gIEFERF9QT1NUX1JFUVVFU1QsXG4gIEFERF9QT1NUX1NVQ0NFU1MsXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXG4gIEFERF9DT01NRU5UX1NVQ0NFU1MsXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXG4gIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXG4gIExPQURfUE9TVFNfRkFJTFVSRSxcbiAgTE9BRF9QT1NUU19SRVFVRVNULFxuICBMT0FEX1BPU1RTX1NVQ0NFU1MsXG4gIExJS0VfUE9TVF9SRVFVRVNULFxuICBMSUtFX1BPU1RfU1VDQ0VTUyxcbiAgTElLRV9QT1NUX0ZBSUxVUkUsXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXG4gIFVOTElLRV9QT1NUX1NVQ0NFU1MsXG4gIFVOTElLRV9QT1NUX0ZBSUxVUkUsXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcbiAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxuICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXG4gIFJFTU9WRV9JTUFHRSxcbiAgUkVUV0VFVF9GQUlMVVJFLFxuICBSRVRXRUVUX1NVQ0NFU1MsXG4gIFJFVFdFRVRfUkVRVUVTVCxcbn0gZnJvbSBcIi4uL3R5cGVcIjtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbWFpblBvc3RzOiBbXSxcbiAgaW1hZ2VQYXRoczogW10sXG4gIGhhc01vcmVQb3N0OiB0cnVlLFxuXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxuICBhZGRQb3N0RXJyb3I6IG51bGwsXG5cbiAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgbGlrZVBvc3REb25lOiBmYWxzZSxcbiAgbGlrZVBvc3RFcnJvcjogbnVsbCxcblxuICB1cGxvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSxcbiAgdXBsb2FkSW1hZ2VzRG9uZTogZmFsc2UsXG4gIHVwbG9hZEltYWdlc0Vycm9yOiBudWxsLFxuXG4gIHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxuICB1bmxpa2VQb3N0RXJyb3I6IG51bGwsXG5cbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcblxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxuXG4gIHJldHdlZXRMb2FkaW5nOiBmYWxzZSxcbiAgcmV0d2VldERvbmU6IGZhbHNlLFxuICByZXR3ZWV0RXJyb3I6IG51bGwsXG5cbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcblxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxuICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcbiAgZGF0YSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxuICBkYXRhLFxufSk7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgUkVNT1ZFX0lNQUdFOlxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XG4gICAgICAgIHBvc3QuTGlrZXJzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7IC8vIGFjdGlvbi5kYXRh66W8IGNvbmNhdO2VtOyEnCDquLDsobQg642w7J207YSw7JeQIOy2lOqwgFxuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGNhc2UgUkVUV0VFVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRVRXRUVUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVUV0VFVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XG4gICAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkXG4gICAgICAgICk7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxuICAgICAgICAvL2NvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoXG4gICAgICAgIC8vICAgKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZFxuICAgICAgICAvLyApO1xuICAgICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xuICAgICAgICAvL3Bvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcbiAgICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XG4gICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcblxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XG4gICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufTtcbi8vaW1tZXIg7JOw66m0IC4uLnN0YXRlIOyViCDsjajrj4Qg65CoIHN0YXRlIOuMgOyLoCBkcmFmdFxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xuaW1wb3J0IHtcbiAgTE9HX0lOX0ZBSUxVUkUsXG4gIExPR19JTl9TVUNDRVNTLFxuICBMT0dfT1VUX1JFUVVFU1QsXG4gIExPR19JTl9SRVFVRVNULFxuICBMT0dfT1VUX0ZBSUxVUkUsXG4gIExPR19PVVRfU1VDQ0VTUyxcbiAgU0lHTl9VUF9GQUlMVVJFLFxuICBTSUdOX1VQX1JFUVVFU1QsXG4gIFNJR05fVVBfU1VDQ0VTUyxcbiAgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXG4gIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxuICBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcbiAgQUREX1BPU1RfVE9fTUUsXG4gIFJFTU9WRV9QT1NUX09GX01FLFxuICBGT0xMT1dfUkVRVUVTVCxcbiAgRk9MTE9XX1NVQ0NFU1MsXG4gIEZPTExPV19GQUlMVVJFLFxuICBVTkZPTExPV19SRVFVRVNULFxuICBVTkZPTExPV19TVUNDRVNTLFxuICBVTkZPTExPV19GQUlMVVJFLFxuICBMT0FEX01ZX0lORk9fRkFJTFVSRSxcbiAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsXG4gIExPQURfTVlfSU5GT19TVUNDRVNTLFxuICBMT0FEX0ZPTExPV0VSU19SRVFVRVNULFxuICBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxuICBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxuICBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCxcbiAgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXG4gIExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxuICBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCxcbiAgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXG4gIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxuICBMT0FEX1VTRVJfUkVRVUVTVCxcbiAgTE9BRF9VU0VSX1NVQ0NFU1MsXG4gIExPQURfVVNFUl9GQUlMVVJFLFxufSBmcm9tIFwiLi4vdHlwZVwiO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsXG4gIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcbiAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxuXG4gIGxvYWRGb2xsb3dlcnNMb2FkaW5nOiBmYWxzZSxcbiAgbG9hZEZvbGxvd2Vyc0RvbmU6IGZhbHNlLFxuICBsb2FkRm9sbG93ZXJzRXJyb3I6IG51bGwsXG5cbiAgbG9hZEZvbGxvd2luZ3NMb2FkaW5nOiBmYWxzZSxcbiAgbG9hZEZvbGxvd2luZ3NEb25lOiBmYWxzZSxcbiAgbG9hZEZvbGxvd2luZ3NFcnJvcjogbnVsbCxcblxuICBsb2FkVXNlckxvYWRpbmc6IGZhbHNlLFxuICBsb2FkVXNlckRvbmU6IGZhbHNlLFxuICBsb2FkVXNlckVycm9yOiBudWxsLFxuXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsXG4gIGxvZ0luRG9uZTogZmFsc2UsXG4gIGxvZ0luRXJyb3I6IG51bGwsXG5cbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsXG4gIGxvZ091dERvbmU6IGZhbHNlLFxuICBsb2dPdXRFcnJvcjogbnVsbCxcblxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSxcbiAgc2lnblVwRG9uZTogZmFsc2UsXG4gIHNpZ25VcEVycm9yOiBudWxsLFxuXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXG4gIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXG5cbiAgZm9sbG93TG9hZGluZzogZmFsc2UsXG4gIGZvbGxvd0RvbmU6IGZhbHNlLFxuICBmb2xsb3dFcnJvcjogbnVsbCxcblxuICByZW1vdmVGb2xsb3dlckxvYWRpbmc6IGZhbHNlLFxuICByZW1vdmVGb2xsb3dlckRvbmU6IGZhbHNlLFxuICByZW1vdmVGb2xsb3dlckVycm9yOiBudWxsLFxuXG4gIHVuRm9sbG93TG9hZGluZzogZmFsc2UsXG4gIHVuRm9sbG93RG9uZTogZmFsc2UsXG4gIHVuRm9sbG93RXJyb3I6IG51bGwsXG5cbiAgdXNlckluZm86IG51bGwsXG4gIG1lOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XG4gIHJldHVybiB7IHR5cGU6IExPR19JTl9SRVFVRVNULCBkYXRhIH07XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdHlwZTogTE9HX09VVF9SRVFVRVNUIH07XG59O1xuXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVzZXJJbmZvID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gZHJhZnQubWUuRm9sbG93ZXJzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkXG4gICAgICAgICk7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxuICAgICAgICBkcmFmdC51bkZvbGxvd0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxuICAgICAgICBkcmFmdC51bkZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKFxuICAgICAgICAgICh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnVuRm9sbG93TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51bkZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcbiAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBwb3N0U2FnYSBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgdXNlclNhZ2EgZnJvbSBcIi4vdXNlclwiO1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjMwNzVcIjtcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7IC8v7L+g7YKkIOyghOuLrFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbZm9yayhwb3N0U2FnYSksIGZvcmsodXNlclNhZ2EpXSk7XG59XG4iLCJpbXBvcnQgeyBmb3JrLCBhbGwsIHRha2VMYXRlc3QsIHB1dCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IHtcbiAgQUREX0NPTU1FTlRfRkFJTFVSRSxcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcbiAgQUREX1BPU1RfRkFJTFVSRSxcbiAgQUREX1BPU1RfUkVRVUVTVCxcbiAgQUREX1BPU1RfU1VDQ0VTUyxcbiAgQUREX1BPU1RfVE9fTUUsXG4gIExJS0VfUE9TVF9GQUlMVVJFLFxuICBMSUtFX1BPU1RfUkVRVUVTVCxcbiAgTElLRV9QT1NUX1NVQ0NFU1MsXG4gIExPQURfUE9TVFNfRkFJTFVSRSxcbiAgTE9BRF9QT1NUU19SRVFVRVNULFxuICBMT0FEX1BPU1RTX1NVQ0NFU1MsXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXG4gIFJFTU9WRV9QT1NUX09GX01FLFxuICBSRU1PVkVfUE9TVF9SRVFVRVNULFxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxuICBSRVRXRUVUX0ZBSUxVUkUsXG4gIFJFVFdFRVRfUkVRVUVTVCxcbiAgUkVUV0VFVF9TVUNDRVNTLFxuICBVTkxJS0VfUE9TVF9GQUlMVVJFLFxuICBVTkxJS0VfUE9TVF9SRVFVRVNULFxuICBVTkxJS0VfUE9TVF9TVUNDRVNTLFxuICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcbiAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxufSBmcm9tIFwiLi4vdHlwZVwiO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9wb3N0XCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpOyAvL+uniOyngOuniSDqsoPrp4xcbiAgLy90aHJvdHRsZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwyMDAwKSAy7LSIIOuPmeyViCAx67KIIOyLpO2WiVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9wb3N0L2ltYWdlc1wiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2h1cGxvYWRJbWFnZXMoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpOyAvL+uniOyngOuniSDqsoPrp4xcbiAgLy90aHJvdHRsZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwyMDAwKSAy7LSIIOuPmeyViCAx67KIIOyLpO2WiVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShsYXN0SWQpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApOyAvL2dldOyXkOyEnCDrjbDsnbTthLAg64Sj6riwID8gYT1iIOydtOufsCDsi53snLzroZxcbn1cblxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmxhc3RJZCk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTsgLy/rp4jsp4Drp4kg6rKD66eMXG4gIC8vdGhyb3R0bGUoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGFkZFBvc3QsMjAwMCkgMuy0iCDrj5nslYggMeuyiCDsi6TtlokgUkVRVVNFVOuKlCDrs7TrgrTsp5Bcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gcmV0d2VldEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGF9L3JldHdlZXRgKTtcbn1cblxuZnVuY3Rpb24qIHJldHdlZXQoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZXR3ZWV0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IFJFVFdFRVRfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hSZXR3ZWV0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmV0d2VldCk7IC8v66eI7KeA66eJIOqyg+unjFxuICAvL3Rocm90dGxlKFwiQUREX1BPU1RfUkVRVUVTVFwiLCBhZGRQb3N0LDIwMDApIDLstIgg64+Z7JWIIDHrsogg7Iuk7ZaJXG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX1gKTtcbn1cblxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcblxuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpOyAvL+uniOyngOuniSDqsoPrp4xcbiAgLy90aHJvdHRsZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwyMDAwKSAy7LSIIOuPmeyViCAx67KIIOyLpO2WiVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTsgLy/rp4jsp4Drp4kg6rKD66eMXG4gIC8vdGhyb3R0bGUoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGFkZFBvc3QsMjAwMCkgMuy0iCDrj5nslYggMeuyiCDsi6Ttlolcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9saWtlYCk7IC8vcGF0Y2gg7J2867aA67aEIOyImOyglVxufVxuXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7IC8v66eI7KeA66eJIOqyg+unjFxuICAvL3Rocm90dGxlKFwiQUREX1BPU1RfUkVRVUVTVFwiLCBhZGRQb3N0LDIwMDApIDLstIgg64+Z7JWIIDHrsogg7Iuk7ZaJXG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xufVxuXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoVW5saWtlUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTsgLy/rp4jsp4Drp4kg6rKD66eMXG4gIC8vdGhyb3R0bGUoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGFkZFBvc3QsMjAwMCkgMuy0iCDrj5nslYggMeuyiCDsi6Ttlolcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcbiAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdCksXG4gICAgZm9yayh3YXRjaExpa2VQb3N0KSxcbiAgICBmb3JrKHdhdGNoVW5saWtlUG9zdCksXG4gICAgZm9yayh3YXRjaHVwbG9hZEltYWdlcyksXG4gICAgZm9yayh3YXRjaFJldHdlZXQpLFxuICBdKTtcbn1cbiIsImltcG9ydCB7XG4gIExPR19JTl9GQUlMVVJFLFxuICBMT0dfSU5fU1VDQ0VTUyxcbiAgTE9HX09VVF9SRVFVRVNULFxuICBMT0dfSU5fUkVRVUVTVCxcbiAgTE9HX09VVF9GQUlMVVJFLFxuICBMT0dfT1VUX1NVQ0NFU1MsXG4gIFNJR05fVVBfRkFJTFVSRSxcbiAgU0lHTl9VUF9SRVFVRVNULFxuICBTSUdOX1VQX1NVQ0NFU1MsXG4gIEZPTExPV19SRVFVRVNULFxuICBVTkZPTExPV19SRVFVRVNULFxuICBGT0xMT1dfU1VDQ0VTUyxcbiAgRk9MTE9XX0ZBSUxVUkUsXG4gIFVORk9MTE9XX1NVQ0NFU1MsXG4gIFVORk9MTE9XX0ZBSUxVUkUsXG4gIExPQURfTVlfSU5GT19SRVFVRVNULFxuICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcbiAgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXG4gIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxuICBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcbiAgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXG4gIExPQURfRk9MTE9XRVJTX1JFUVVFU1QsXG4gIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXG4gIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXG4gIExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxuICBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcbiAgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsXG4gIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULFxuICBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcbiAgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXG4gIExPQURfVVNFUl9SRVFVRVNULFxuICBMT0FEX1VTRVJfU1VDQ0VTUyxcbiAgTE9BRF9VU0VSX0ZBSUxVUkUsXG59IGZyb20gXCIuLi90eXBlXCI7XG5cbmltcG9ydCB7XG4gIGFsbCxcbiAgZm9yayxcbiAgcHV0LFxuICB0YWtlRXZlcnksXG4gIHRha2VMZWFkaW5nLFxuICB0YWtlTGF0ZXN0LFxuICBjYWxsLFxufSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvdXNlci9sb2dpblwiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcblxuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG5cbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KExPR19JTl9SRVFVRVNULCBsb2dJbik7IC8v67CY67O1XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi91c2VyL2xvZ291dFwiKTtcbn1cblxuZnVuY3Rpb24qIGxvZ091dCgpIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoTG9nb3V0KCkge1xuICB5aWVsZCB0YWtlTGVhZGluZyhMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7IC8v7LKrIOuyiOynuCDqsoPrp4xcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3VzZXJcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiB3YXRjaFNpbmdVcCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7IC8v7LKrIOuyiOynuCDqsoPrp4xcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wYXRjaChgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKTtcbn1cblxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xuXG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcblxuICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XG4gIHlpZWxkIHRha2VFdmVyeShGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTsgLy/rsJjrs7Vcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gdW5mb2xsb3dBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xufVxuXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xuXG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcblxuICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XG4gIHlpZWxkIHRha2VFdmVyeShVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7IC8v67CY67O1XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSSgpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChcIi91c2VyXCIpO1xufVxuXG5mdW5jdGlvbiogbG9hZE15SW5mbyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKSB7XG4gIHlpZWxkIHRha2VFdmVyeShMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbyk7IC8v67CY67O1XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gbG9hZFVzZXJBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KGB1c2VyLyR7ZGF0YX1gKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRVc2VyKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9VU0VSX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyKCkge1xuICB5aWVsZCB0YWtlRXZlcnkoTE9BRF9VU0VSX1JFUVVFU1QsIGxvYWRVc2VyKTsgLy/rsJjrs7Vcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gbG9hZEZvbGxvd2Vyc0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5nZXQoXCIvdXNlci9mb2xsb3dlcnNcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBsb2FkRm9sbG93ZXJzKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2Vyc0FQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG5cbiAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dlcnMoKSB7XG4gIHlpZWxkIHRha2VFdmVyeShMT0FEX0ZPTExPV0VSU19SRVFVRVNULCBsb2FkRm9sbG93ZXJzKTsgLy/rsJjrs7Vcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gbG9hZEZvbGxvd2luZ3NBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KFwiL3VzZXIvZm9sbG93aW5nc1wiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRGb2xsb3dpbmdzKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2luZ3NBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuXG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dpbnMoKSB7XG4gIHlpZWxkIHRha2VFdmVyeShMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCwgbG9hZEZvbGxvd2luZ3MpOyAvL+uwmOuztVxufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gY2hhbmdlTmlja25hbWVBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucGF0Y2goXCIvdXNlci9uaWNrbmFtZVwiLCB7IG5pY2tuYW1lOiBkYXRhIH0pO1xufVxuXG5mdW5jdGlvbiogY2hhbmdlTmlja25hbWUoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrbmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG5cbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlTmlja25hbWUoKSB7XG4gIHlpZWxkIHRha2VFdmVyeShDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja25hbWUpOyAvL+uwmOuztVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHJlbW92ZUZvbGxvd2VyQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvZm9sbG93ZXIvJHtkYXRhfWApO1xufVxuXG5mdW5jdGlvbiogcmVtb3ZlRm9sbG93ZXIoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVGb2xsb3dlckFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG5cbiAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlRm9sbG93ZXIoKSB7XG4gIHlpZWxkIHRha2VFdmVyeShSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgcmVtb3ZlRm9sbG93ZXIpOyAvL+uwmOuztVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgZm9yayh3YXRjaENoYW5nZU5pY2tuYW1lKSxcbiAgICBmb3JrKHdhdGNoUmVtb3ZlRm9sbG93ZXIpLFxuICAgIGZvcmsod2F0Y2hMb2dpbiksXG4gICAgZm9yayh3YXRjaExvZ291dCksXG4gICAgZm9yayh3YXRjaFNpbmdVcCksXG4gICAgZm9yayh3YXRjaEZvbGxvdyksXG4gICAgZm9yayh3YXRjaFVuZm9sbG93KSxcbiAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXG4gICAgZm9yayh3YXRjaExvYWRGb2xsb3dpbnMpLFxuICAgIGZvcmsod2F0Y2hMb2FkRm9sbG93ZXJzKSxcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXIpLFxuICBdKTtcbn1cbiIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4uL3NhZ2FzXCI7XG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XG4gIGNvbnN0IGVuaGFuY2VyID1cbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcbiAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxuICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBlbmhhbmNlcik7XG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTsgLy9zYWdhVGFzayDshJzrsoTsgqzsnbTrk5zrnpzrjZTrp4HsmqlcbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcbiIsImV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gXCJMT0FEX01ZX0lORk9fRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gXCJMT0FEX01ZX0lORk9fUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gXCJMT0FEX01ZX0lORk9fU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSBcIkxPQURfVVNFUl9GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSBcIkxPQURfVVNFUl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSBcIkxPQURfVVNFUl9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSBcIlNJR05fVVBfRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9IFwiU0lHTl9VUF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJTSUdOX1VQX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gXCJGT0xMT1dfRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gXCJGT0xMT1dfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gXCJGT0xMT1dfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgUkVUV0VFVF9GQUlMVVJFID0gXCJSRVRXRUVUX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1JFUVVFU1QgPSBcIlJFVFdFRVRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFJFVFdFRVRfU1VDQ0VTUyA9IFwiUkVUV0VFVF9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSBcIlVQTE9BRF9JTUFHRVNfRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9IFwiVVBMT0FEX0lNQUdFU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gXCJVUExPQURfSU1BR0VTX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9IFwiUkVNT1ZFX0lNQUdFXCI7XG5cbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gXCJVTkZPTExPV19GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9IFwiVU5GT0xMT1dfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSBcIlVORk9MTE9XX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9IFwiTE9HX09VVF9GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gXCJMT0dfT1VUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSBcIkxPR19PVVRfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfUE9TVFNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUU19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gXCJMT0FEX1BPU1RTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSBcIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gXCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9IFwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUgPSBcIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgPSBcIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSBcIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gXCJSRU1PVkVfUE9TVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSBcIlJFTU9WRV9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTID0gXCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gXCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gXCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gXCJBRERfQ09NTUVOVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9IFwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9IFwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9IFwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gXCJMSUtFX1BPU1RfRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gXCJMSUtFX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gXCJMSUtFX1BPU1RfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9IFwiVU5MSUtFX1BPU1RfRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSBcIlVOTElLRV9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gXCJVTkxJS0VfUE9TVF9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9IFwiQUREX1BPU1RfVE9fTUVcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9IFwiUkVNT1ZFX1BPU1RfT0ZfTUVcIjtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9