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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const NodeBrid = ({
  Component
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "NodeBird"), __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  })));
};
NodeBrid.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"].withRedux(NodeBrid));

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
  singlePost: null,
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

      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_REQUEST"]:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_SUCCESS"]:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.singlePost = action.data;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_FAILURE"]:
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
function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행 REQUSET는 보내짐
}
//-------------------------------------------------------------

function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/post/${data}`); //get에서 데이터 넣기 ? a=b 이런 식으로
}

function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost); //마지막 것만
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchuploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost)]);
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
/*! exports provided: LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_USER_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, FOLLOW_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, RETWEET_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, UPLOAD_IMAGES_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, REMOVE_IMAGE, UNFOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, ADD_POST_SUCCESS, ADD_POST_REQUEST, ADD_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, REMOVE_POST_SUCCESS, REMOVE_POST_REQUEST, REMOVE_POST_FAILURE, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_FAILURE, ADD_COMMENT_SUCCESS, ADD_COMMENT_REQUEST, ADD_COMMENT_FAILURE, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_FAILURE, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, ADD_POST_TO_ME, REMOVE_POST_OF_ME */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
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
const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";
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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy8uL3R5cGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIk5vZGVCcmlkIiwiQ29tcG9uZW50IiwiX19qc3giLCJSZWFjdCIsIkZyYWdtZW50IiwiSGVhZCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiY2hhclNldCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJwYXlsb2FkIiwiY29tYmluZWRSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidXNlciIsInBvc3QiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3QiLCJzaW5nbGVQb3N0IiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwicmV0d2VldExvYWRpbmciLCJyZXR3ZWV0RG9uZSIsInJldHdlZXRFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwiYWRkUG9zdCIsImRhdGEiLCJBRERfUE9TVF9SRVFVRVNUIiwiYWRkQ29tbWVudCIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJwcm9kdWNlIiwiZHJhZnQiLCJSRU1PVkVfSU1BR0UiLCJmaWx0ZXIiLCJ2IiwiaSIsIkFERF9QT1NUX1NVQ0NFU1MiLCJ1bnNoaWZ0IiwiQUREX1BPU1RfRkFJTFVSRSIsImVycm9yIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsImZpbmQiLCJpZCIsIlBvc3RJZCIsIkxpa2VycyIsInB1c2giLCJVc2VySWQiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsImNvbmNhdCIsImxlbmd0aCIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIlJFVFdFRVRfUkVRVUVTVCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRkFJTFVSRSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJDb21tZW50cyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwibG9hZEZvbGxvd2Vyc0xvYWRpbmciLCJsb2FkRm9sbG93ZXJzRG9uZSIsImxvYWRGb2xsb3dlcnNFcnJvciIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRG9uZSIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInJlbW92ZUZvbGxvd2VyTG9hZGluZyIsInJlbW92ZUZvbGxvd2VyRG9uZSIsInJlbW92ZUZvbGxvd2VyRXJyb3IiLCJ1bkZvbGxvd0xvYWRpbmciLCJ1bkZvbGxvd0RvbmUiLCJ1bkZvbGxvd0Vycm9yIiwidXNlckluZm8iLCJtZSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsIkxPR19JTl9SRVFVRVNUIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiRm9sbG93ZXJzIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiRm9sbG93aW5ncyIsIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIm5pY2tuYW1lIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlBvc3RzIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJhZGRQb3N0QVBJIiwicmVzdWx0IiwiY2FsbCIsInB1dCIsImVyciIsInJlc3BvbnNlIiwid2F0Y2hBZGRQb3N0IiwidGFrZUxhdGVzdCIsInVwbG9hZEltYWdlc0FQSSIsInVwbG9hZEltYWdlcyIsIndhdGNodXBsb2FkSW1hZ2VzIiwibG9hZFBvc3RzQVBJIiwibGFzdElkIiwiZ2V0IiwibG9hZFBvc3RzIiwid2F0Y2hMb2FkUG9zdHMiLCJsb2FkUG9zdEFQSSIsImxvYWRQb3N0Iiwid2F0Y2hMb2FkUG9zdCIsInJldHdlZXRBUEkiLCJyZXR3ZWV0IiwiY29uc29sZSIsIndhdGNoUmV0d2VldCIsInJlbW92ZVBvc3RBUEkiLCJkZWxldGUiLCJyZW1vdmVQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsIndhdGNoQWRkQ29tbWVudCIsImxpa2VQb3N0QVBJIiwicGF0Y2giLCJsaWtlUG9zdCIsIndhdGNoTGlrZVBvc3QiLCJ1bmxpa2VQb3N0QVBJIiwidW5saWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsImxvZ0luQVBJIiwibG9nSW4iLCJ3YXRjaExvZ2luIiwidGFrZUV2ZXJ5IiwibG9nT3V0QVBJIiwibG9nT3V0Iiwid2F0Y2hMb2dvdXQiLCJ0YWtlTGVhZGluZyIsInNpZ25VcEFQSSIsInNpZ25VcCIsImxvZyIsIndhdGNoU2luZ1VwIiwiZm9sbG93QVBJIiwiZm9sbG93Iiwid2F0Y2hGb2xsb3ciLCJ1bmZvbGxvd0FQSSIsInVuZm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsImxvYWRNeUluZm9BUEkiLCJsb2FkTXlJbmZvIiwid2F0Y2hMb2FkTXlJbmZvIiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlciIsIndhdGNoTG9hZFVzZXIiLCJsb2FkRm9sbG93ZXJzQVBJIiwibG9hZEZvbGxvd2VycyIsIndhdGNoTG9hZEZvbGxvd2VycyIsImxvYWRGb2xsb3dpbmdzQVBJIiwibG9hZEZvbGxvd2luZ3MiLCJ3YXRjaExvYWRGb2xsb3dpbnMiLCJjaGFuZ2VOaWNrbmFtZUFQSSIsImNoYW5nZU5pY2tuYW1lIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsInJlbW92ZUZvbGxvd2VyQVBJIiwicmVtb3ZlRm9sbG93ZXIiLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNB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QUNuRnBELGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcblxuY29uc3QgTm9kZUJyaWQgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPHRpdGxlPk5vZGVCaXJkPC90aXRsZT5cbiAgICAgICAgPENvbXBvbmVudCAvPlxuICAgICAgPC9IZWFkPlxuICAgIDwvPlxuICApO1xufTtcbk5vZGVCcmlkLnByb3BUeXBlcyA9IHtcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcbn07XG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChOb2RlQnJpZCk7XG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xuaW1wb3J0IHBvc3QgZnJvbSBcIi4vcG9zdFwiO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSFlEUkFURTpcbiAgICAgIC8vY29uc29sZS5sb2coXCJIWURSQVRFXCIsIGFjdGlvbik7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgZGVmYXVsdDoge1xuICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICAgICAgdXNlcixcbiAgICAgICAgcG9zdCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XG5pbXBvcnQge1xuICBBRERfUE9TVF9GQUlMVVJFLFxuICBBRERfUE9TVF9SRVFVRVNULFxuICBBRERfUE9TVF9TVUNDRVNTLFxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxuICBBRERfQ09NTUVOVF9SRVFVRVNULFxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxuICBSRU1PVkVfUE9TVF9GQUlMVVJFLFxuICBSRU1PVkVfUE9TVF9SRVFVRVNULFxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxuICBMT0FEX1BPU1RTX0ZBSUxVUkUsXG4gIExPQURfUE9TVFNfUkVRVUVTVCxcbiAgTE9BRF9QT1NUU19TVUNDRVNTLFxuICBMSUtFX1BPU1RfUkVRVUVTVCxcbiAgTElLRV9QT1NUX1NVQ0NFU1MsXG4gIExJS0VfUE9TVF9GQUlMVVJFLFxuICBVTkxJS0VfUE9TVF9SRVFVRVNULFxuICBVTkxJS0VfUE9TVF9TVUNDRVNTLFxuICBVTkxJS0VfUE9TVF9GQUlMVVJFLFxuICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXG4gIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcbiAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxuICBSRU1PVkVfSU1BR0UsXG4gIFJFVFdFRVRfRkFJTFVSRSxcbiAgUkVUV0VFVF9TVUNDRVNTLFxuICBSRVRXRUVUX1JFUVVFU1QsXG4gIExPQURfUE9TVF9SRVFVRVNULFxuICBMT0FEX1BPU1RfU1VDQ0VTUyxcbiAgTE9BRF9QT1NUX0ZBSUxVUkUsXG59IGZyb20gXCIuLi90eXBlXCI7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG1haW5Qb3N0czogW10sXG4gIGltYWdlUGF0aHM6IFtdLFxuICBoYXNNb3JlUG9zdDogdHJ1ZSxcbiAgc2luZ2xlUG9zdDogbnVsbCxcblxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxuXG4gIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXG4gIGxpa2VQb3N0RG9uZTogZmFsc2UsXG4gIGxpa2VQb3N0RXJyb3I6IG51bGwsXG5cbiAgdXBsb2FkSW1hZ2VzTG9hZGluZzogZmFsc2UsXG4gIHVwbG9hZEltYWdlc0RvbmU6IGZhbHNlLFxuICB1cGxvYWRJbWFnZXNFcnJvcjogbnVsbCxcblxuICB1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsXG4gIHVubGlrZVBvc3REb25lOiBmYWxzZSxcbiAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxuXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXG5cbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcblxuICByZXR3ZWV0TG9hZGluZzogZmFsc2UsXG4gIHJldHdlZXREb25lOiBmYWxzZSxcbiAgcmV0d2VldEVycm9yOiBudWxsLFxuXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxuICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcbiAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXG5cbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXG4gIGRhdGEsXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcbiAgZGF0YSxcbn0pO1xuXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIFJFTU9WRV9JTUFHRTpcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuZmlsdGVyKCh2LCBpKSA9PiBpICE9PSBhY3Rpb24uZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBbXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xuICAgICAgICBwb3N0Lkxpa2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpOyAvLyBhY3Rpb24uZGF0YeulvCBjb25jYXTtlbTshJwg6riw7KG0IOuNsOydtO2EsOyXkCDstpTqsIBcbiAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3QgPSBhY3Rpb24uZGF0YS5sZW5ndGggPT09IDEwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5zaW5nbGVQb3N0ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgY2FzZSBSRVRXRUVUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFVFdFRVRfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRVRXRUVUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcbiAgICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKFxuICAgICAgICAgICh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWRcbiAgICAgICAgKTtcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XG4gICAgICAgIC8vY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleChcbiAgICAgICAgLy8gICAodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkXG4gICAgICAgIC8vICk7XG4gICAgICAgIC8vIGNvbnN0IHBvc3QgPSB7IC4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdIH07XG4gICAgICAgIC8vcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xuICAgICAgICAvLyBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcbiAgICAgICAgLy8gbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xuXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcbiAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG59O1xuLy9pbW1lciDsk7DrqbQgLi4uc3RhdGUg7JWIIOyNqOuPhCDrkKggc3RhdGUg64yA7IugIGRyYWZ0XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XG5pbXBvcnQge1xuICBMT0dfSU5fRkFJTFVSRSxcbiAgTE9HX0lOX1NVQ0NFU1MsXG4gIExPR19PVVRfUkVRVUVTVCxcbiAgTE9HX0lOX1JFUVVFU1QsXG4gIExPR19PVVRfRkFJTFVSRSxcbiAgTE9HX09VVF9TVUNDRVNTLFxuICBTSUdOX1VQX0ZBSUxVUkUsXG4gIFNJR05fVVBfUkVRVUVTVCxcbiAgU0lHTl9VUF9TVUNDRVNTLFxuICBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcbiAgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXG4gIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxuICBBRERfUE9TVF9UT19NRSxcbiAgUkVNT1ZFX1BPU1RfT0ZfTUUsXG4gIEZPTExPV19SRVFVRVNULFxuICBGT0xMT1dfU1VDQ0VTUyxcbiAgRk9MTE9XX0ZBSUxVUkUsXG4gIFVORk9MTE9XX1JFUVVFU1QsXG4gIFVORk9MTE9XX1NVQ0NFU1MsXG4gIFVORk9MTE9XX0ZBSUxVUkUsXG4gIExPQURfTVlfSU5GT19GQUlMVVJFLFxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcbiAgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXG4gIExPQURfRk9MTE9XRVJTX1JFUVVFU1QsXG4gIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXG4gIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXG4gIExPQURfRk9MTE9XSU5HU19SRVFVRVNULFxuICBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcbiAgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXG4gIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULFxuICBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcbiAgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsXG4gIExPQURfVVNFUl9SRVFVRVNULFxuICBMT0FEX1VTRVJfU1VDQ0VTUyxcbiAgTE9BRF9VU0VSX0ZBSUxVUkUsXG59IGZyb20gXCIuLi90eXBlXCI7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSxcbiAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxuICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXG5cbiAgbG9hZEZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLFxuICBsb2FkRm9sbG93ZXJzRG9uZTogZmFsc2UsXG4gIGxvYWRGb2xsb3dlcnNFcnJvcjogbnVsbCxcblxuICBsb2FkRm9sbG93aW5nc0xvYWRpbmc6IGZhbHNlLFxuICBsb2FkRm9sbG93aW5nc0RvbmU6IGZhbHNlLFxuICBsb2FkRm9sbG93aW5nc0Vycm9yOiBudWxsLFxuXG4gIGxvYWRVc2VyTG9hZGluZzogZmFsc2UsXG4gIGxvYWRVc2VyRG9uZTogZmFsc2UsXG4gIGxvYWRVc2VyRXJyb3I6IG51bGwsXG5cbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcbiAgbG9nSW5Eb25lOiBmYWxzZSxcbiAgbG9nSW5FcnJvcjogbnVsbCxcblxuICBsb2dPdXRMb2FkaW5nOiBmYWxzZSxcbiAgbG9nT3V0RG9uZTogZmFsc2UsXG4gIGxvZ091dEVycm9yOiBudWxsLFxuXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxuICBzaWduVXBEb25lOiBmYWxzZSxcbiAgc2lnblVwRXJyb3I6IG51bGwsXG5cbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcblxuICBmb2xsb3dMb2FkaW5nOiBmYWxzZSxcbiAgZm9sbG93RG9uZTogZmFsc2UsXG4gIGZvbGxvd0Vycm9yOiBudWxsLFxuXG4gIHJlbW92ZUZvbGxvd2VyTG9hZGluZzogZmFsc2UsXG4gIHJlbW92ZUZvbGxvd2VyRG9uZTogZmFsc2UsXG4gIHJlbW92ZUZvbGxvd2VyRXJyb3I6IG51bGwsXG5cbiAgdW5Gb2xsb3dMb2FkaW5nOiBmYWxzZSxcbiAgdW5Gb2xsb3dEb25lOiBmYWxzZSxcbiAgdW5Gb2xsb3dFcnJvcjogbnVsbCxcblxuICB1c2VySW5mbzogbnVsbCxcbiAgbWU6IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIHsgdHlwZTogTE9HX0lOX1JFUVVFU1QsIGRhdGEgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0eXBlOiBMT0dfT1VUX1JFUVVFU1QgfTtcbn07XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBkcmFmdC5tZS5Gb2xsb3dlcnMuZmlsdGVyKFxuICAgICAgICAgICh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWRcbiAgICAgICAgKTtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnVuRm9sbG93RXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC51bkZvbGxvd0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC51bkZvbGxvd0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnVuRm9sbG93TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51bkZvbGxvd0RvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoXG4gICAgICAgICAgKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVuRm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcbiAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxuICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHBvc3RTYWdhIGZyb20gXCIuL3Bvc3RcIjtcbmltcG9ydCB1c2VyU2FnYSBmcm9tIFwiLi91c2VyXCI7XG5cbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzA3NVwiO1xuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTsgLy/sv6DtgqQg7KCE64usXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgeWllbGQgYWxsKFtmb3JrKHBvc3RTYWdhKSwgZm9yayh1c2VyU2FnYSldKTtcbn1cbiIsImltcG9ydCB7IGZvcmssIGFsbCwgdGFrZUxhdGVzdCwgcHV0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQge1xuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxuICBBRERfQ09NTUVOVF9SRVFVRVNULFxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxuICBBRERfUE9TVF9GQUlMVVJFLFxuICBBRERfUE9TVF9SRVFVRVNULFxuICBBRERfUE9TVF9TVUNDRVNTLFxuICBBRERfUE9TVF9UT19NRSxcbiAgTElLRV9QT1NUX0ZBSUxVUkUsXG4gIExJS0VfUE9TVF9SRVFVRVNULFxuICBMSUtFX1BPU1RfU1VDQ0VTUyxcbiAgTE9BRF9QT1NUU19GQUlMVVJFLFxuICBMT0FEX1BPU1RTX1JFUVVFU1QsXG4gIExPQURfUE9TVFNfU1VDQ0VTUyxcbiAgTE9BRF9QT1NUX0ZBSUxVUkUsXG4gIExPQURfUE9TVF9SRVFVRVNULFxuICBMT0FEX1BPU1RfU1VDQ0VTUyxcbiAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcbiAgUkVNT1ZFX1BPU1RfT0ZfTUUsXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXG4gIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXG4gIFJFVFdFRVRfRkFJTFVSRSxcbiAgUkVUV0VFVF9SRVFVRVNULFxuICBSRVRXRUVUX1NVQ0NFU1MsXG4gIFVOTElLRV9QT1NUX0ZBSUxVUkUsXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXG4gIFVOTElLRV9QT1NUX1NVQ0NFU1MsXG4gIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcbiAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxuICBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXG59IGZyb20gXCIuLi90eXBlXCI7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Bvc3RcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7IC8v66eI7KeA66eJIOqyg+unjFxuICAvL3Rocm90dGxlKFwiQUREX1BPU1RfUkVRVUVTVFwiLCBhZGRQb3N0LDIwMDApIDLstIgg64+Z7JWIIDHrsogg7Iuk7ZaJXG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Bvc3QvaW1hZ2VzXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaHVwbG9hZEltYWdlcygpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7IC8v66eI7KeA66eJIOqyg+unjFxuICAvL3Rocm90dGxlKFwiQUREX1BPU1RfUkVRVUVTVFwiLCBhZGRQb3N0LDIwMDApIDLstIgg64+Z7JWIIDHrsogg7Iuk7ZaJXG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGxhc3RJZCkge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7IC8vZ2V07JeQ7IScIOuNsOydtO2EsCDrhKPquLAgPyBhPWIg7J2065+wIOyLneycvOuhnFxufVxuXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24ubGFzdElkKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTsgLy/rp4jsp4Drp4kg6rKD66eMXG4gIC8vdGhyb3R0bGUoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGFkZFBvc3QsMjAwMCkgMuy0iCDrj5nslYggMeuyiCDsi6TtlokgUkVRVVNFVOuKlCDrs7TrgrTsp5Bcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBsb2FkUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0LyR7ZGF0YX1gKTsgLy9nZXTsl5DshJwg642w7J207YSwIOuEo+q4sCA/IGE9YiDsnbTrn7Ag7Iud7Jy866GcXG59XG5cbmZ1bmN0aW9uKiBsb2FkUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpOyAvL+uniOyngOuniSDqsoPrp4xcbiAgLy90aHJvdHRsZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwyMDAwKSAy7LSIIOuPmeyViCAx67KIIOyLpO2WiSBSRVFVU0VU64qUIOuztOuCtOynkFxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiByZXR3ZWV0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YX0vcmV0d2VldGApO1xufVxuXG5mdW5jdGlvbiogcmV0d2VldChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJldHdlZXRBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogUkVUV0VFVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogUkVUV0VFVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoUkVUV0VFVF9SRVFVRVNULCByZXR3ZWV0KTsgLy/rp4jsp4Drp4kg6rKD66eMXG4gIC8vdGhyb3R0bGUoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGFkZFBvc3QsMjAwMCkgMuy0iCDrj5nslYggMeuyiCDsi6Ttlolcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApO1xufVxuXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuXG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7IC8v66eI7KeA66eJIOqyg+unjFxuICAvL3Rocm90dGxlKFwiQUREX1BPU1RfUkVRVUVTVFwiLCBhZGRQb3N0LDIwMDApIDLstIgg64+Z7JWIIDHrsogg7Iuk7ZaJXG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpOyAvL+uniOyngOuniSDqsoPrp4xcbiAgLy90aHJvdHRsZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwyMDAwKSAy7LSIIOuPmeyViCAx67KIIOyLpO2WiVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTsgLy9wYXRjaCDsnbzrtoDrtoQg7IiY7KCVXG59XG5cbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTsgLy/rp4jsp4Drp4kg6rKD66eMXG4gIC8vdGhyb3R0bGUoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGFkZFBvc3QsMjAwMCkgMuy0iCDrj5nslYggMeuyiCDsi6Ttlolcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XG59XG5cbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hVbmxpa2VQb3N0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpOyAvL+uniOyngOuniSDqsoPrp4xcbiAgLy90aHJvdHRsZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwyMDAwKSAy7LSIIOuPmeyViCAx67KIIOyLpO2WiVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcbiAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXG4gICAgZm9yayh3YXRjaExvYWRQb3N0cyksXG4gICAgZm9yayh3YXRjaExpa2VQb3N0KSxcbiAgICBmb3JrKHdhdGNoVW5saWtlUG9zdCksXG4gICAgZm9yayh3YXRjaHVwbG9hZEltYWdlcyksXG4gICAgZm9yayh3YXRjaFJldHdlZXQpLFxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdCksXG4gIF0pO1xufVxuIiwiaW1wb3J0IHtcbiAgTE9HX0lOX0ZBSUxVUkUsXG4gIExPR19JTl9TVUNDRVNTLFxuICBMT0dfT1VUX1JFUVVFU1QsXG4gIExPR19JTl9SRVFVRVNULFxuICBMT0dfT1VUX0ZBSUxVUkUsXG4gIExPR19PVVRfU1VDQ0VTUyxcbiAgU0lHTl9VUF9GQUlMVVJFLFxuICBTSUdOX1VQX1JFUVVFU1QsXG4gIFNJR05fVVBfU1VDQ0VTUyxcbiAgRk9MTE9XX1JFUVVFU1QsXG4gIFVORk9MTE9XX1JFUVVFU1QsXG4gIEZPTExPV19TVUNDRVNTLFxuICBGT0xMT1dfRkFJTFVSRSxcbiAgVU5GT0xMT1dfU1VDQ0VTUyxcbiAgVU5GT0xMT1dfRkFJTFVSRSxcbiAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsXG4gIExPQURfTVlfSU5GT19TVUNDRVNTLFxuICBMT0FEX01ZX0lORk9fRkFJTFVSRSxcbiAgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXG4gIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxuICBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcbiAgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCxcbiAgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcbiAgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcbiAgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXG4gIExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxuICBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCxcbiAgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsXG4gIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxuICBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcbiAgTE9BRF9VU0VSX1JFUVVFU1QsXG4gIExPQURfVVNFUl9TVUNDRVNTLFxuICBMT0FEX1VTRVJfRkFJTFVSRSxcbn0gZnJvbSBcIi4uL3R5cGVcIjtcblxuaW1wb3J0IHtcbiAgYWxsLFxuICBmb3JrLFxuICBwdXQsXG4gIHRha2VFdmVyeSxcbiAgdGFrZUxlYWRpbmcsXG4gIHRha2VMYXRlc3QsXG4gIGNhbGwsXG59IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi91c2VyL2xvZ2luXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xuXG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcblxuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCkge1xuICB5aWVsZCB0YWtlRXZlcnkoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTsgLy/rsJjrs7Vcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3VzZXIvbG9nb3V0XCIpO1xufVxuXG5mdW5jdGlvbiogbG9nT3V0KCkge1xuICB0cnkge1xuICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hMb2dvdXQoKSB7XG4gIHlpZWxkIHRha2VMZWFkaW5nKExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTsgLy/ssqsg67KI7Ke4IOqyg+unjFxufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvdXNlclwiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoU2luZ1VwKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTsgLy/ssqsg67KI7Ke4IOqyg+unjFxufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xufVxuXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XG5cbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuXG4gICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KEZPTExPV19SRVFVRVNULCBmb2xsb3cpOyAvL+uwmOuztVxufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyLyR7ZGF0YX0vZm9sbG93YCk7XG59XG5cbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XG5cbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuXG4gICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTsgLy/rsJjrs7Vcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBsb2FkTXlJbmZvQVBJKCkge1xuICByZXR1cm4gYXhpb3MuZ2V0KFwiL3VzZXJcIik7XG59XG5cbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG5cbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTsgLy/rsJjrs7Vcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBsb2FkVXNlckFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5nZXQoYHVzZXIvJHtkYXRhfWApO1xufVxuXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG5cbiAgICAgIHR5cGU6IExPQURfVVNFUl9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKSB7XG4gIHlpZWxkIHRha2VFdmVyeShMT0FEX1VTRVJfUkVRVUVTVCwgbG9hZFVzZXIpOyAvL+uwmOuztVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBsb2FkRm9sbG93ZXJzQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChcIi91c2VyL2ZvbGxvd2Vyc1wiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRGb2xsb3dlcnMoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93ZXJzQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcblxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2VycygpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRGb2xsb3dlcnMpOyAvL+uwmOuztVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBsb2FkRm9sbG93aW5nc0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5nZXQoXCIvdXNlci9mb2xsb3dpbmdzXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogbG9hZEZvbGxvd2luZ3MoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93aW5nc0FQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG5cbiAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2lucygpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBsb2FkRm9sbG93aW5ncyk7IC8v67CY67O1XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBjaGFuZ2VOaWNrbmFtZUFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wYXRjaChcIi91c2VyL25pY2tuYW1lXCIsIHsgbmlja25hbWU6IGRhdGEgfSk7XG59XG5cbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZU5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcblxuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hDaGFuZ2VOaWNrbmFtZSgpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBjaGFuZ2VOaWNrbmFtZSk7IC8v67CY67O1XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gcmVtb3ZlRm9sbG93ZXJBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9mb2xsb3dlci8ke2RhdGF9YCk7XG59XG5cbmZ1bmN0aW9uKiByZW1vdmVGb2xsb3dlcihhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2VyQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcblxuICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVGb2xsb3dlcigpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCByZW1vdmVGb2xsb3dlcik7IC8v67CY67O1XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBmb3JrKHdhdGNoQ2hhbmdlTmlja25hbWUpLFxuICAgIGZvcmsod2F0Y2hSZW1vdmVGb2xsb3dlciksXG4gICAgZm9yayh3YXRjaExvZ2luKSxcbiAgICBmb3JrKHdhdGNoTG9nb3V0KSxcbiAgICBmb3JrKHdhdGNoU2luZ1VwKSxcbiAgICBmb3JrKHdhdGNoRm9sbG93KSxcbiAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxuICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcbiAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2lucyksXG4gICAgZm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxuICAgIGZvcmsod2F0Y2hMb2FkVXNlciksXG4gIF0pO1xufVxuIiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi4vc2FnYXNcIjtcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTtcbiAgY29uc3QgZW5oYW5jZXIgPVxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxuICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXG4gICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGVuaGFuY2VyKTtcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpOyAvL3NhZ2FUYXNrIOyEnOuyhOyCrOydtOuTnOuenOuNlOungeyaqVxuICByZXR1cm4gc3RvcmU7XG59O1xuXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xuIiwiZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gXCJMT0dfSU5fRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gXCJMT0dfSU5fUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJMT0dfSU5fU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX0ZBSUxVUkUgPSBcIkxPQURfTVlfSU5GT19GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSBcIkxPQURfTVlfSU5GT19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1NVQ0NFU1MgPSBcIkxPQURfTVlfSU5GT19TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9IFwiTE9BRF9VU0VSX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9IFwiTE9BRF9VU0VSX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9IFwiTE9BRF9VU0VSX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9VUF9GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJTSUdOX1VQX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcIlNJR05fVVBfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSBcIkZPTExPV19GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSBcIkZPTExPV19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSBcIkZPTExPV19TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSBcIlJFVFdFRVRfRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9IFwiUkVUV0VFVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gXCJSRVRXRUVUX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9IFwiVVBMT0FEX0lNQUdFU19GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gXCJVUExPQURfSU1BR0VTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSBcIlVQTE9BRF9JTUFHRVNfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gXCJSRU1PVkVfSU1BR0VcIjtcblxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSBcIlVORk9MTE9XX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gXCJVTkZPTExPV19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9IFwiVU5GT0xMT1dfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gXCJMT0dfT1VUX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcIkxPR19PVVRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwiTE9HX09VVF9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9QT1NUU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1BPU1RTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUE9TVFNfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSBcIkxPQURfUE9TVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSBcIkxPQURfUE9TVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSBcIkxPQURfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFID0gXCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9IFwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSBcIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gXCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gXCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gXCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSBcIlJFTU9WRV9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9IFwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCA9IFwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9IFwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gXCJBRERfQ09NTUVOVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSBcIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSBcIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSBcIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9IFwiTElLRV9QT1NUX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9IFwiTElLRV9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9IFwiTElLRV9QT1NUX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSBcIlVOTElLRV9QT1NUX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gXCJVTkxJS0VfUE9TVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9IFwiVU5MSUtFX1BPU1RfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSBcIkFERF9QT1NUX1RPX01FXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSBcIlJFTU9WRV9QT1NUX09GX01FXCI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=