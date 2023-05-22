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
  }, "NodeBird")), __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
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
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
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
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_POSTS_REQUEST"]:
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_HASHTAG_POSTS_REQUEST"]:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_POSTS_SUCCESS"]:
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_HASHTAG_POSTS_SUCCESS"]:
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_SUCCESS"]:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data); // action.data를 concat해서 기존 데이터에 추가
        draft.hasMorePost = action.data.length === 10;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_FAILURE"]:
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_POSTS_FAILURE"]:
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_HASHTAG_POSTS_FAILURE"]:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_REQUEST"]:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_SUCCESS"]:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.singlePost = action.data;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_FAILURE"]:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
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

function loadUserPostAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`); //get에서 데이터 넣기 ? a=b 이런 식으로
}

function* loadUserPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserPostAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLoadUserPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_REQUEST"], loadUserPost); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행 REQUSET는 보내짐
}
//-------------------------------------------------------------

function loadHashtagPostAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`); //get에서 데이터 넣기 ? a=b 이런 식으로
  //encodeURIComponent  한글을 영문자로 바꿈
}

function* loadHashtagPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadHashtagPostAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLoadHashtagPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPost); //마지막 것만
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchuploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUserPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadHashtagPost)]);
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
/*! exports provided: LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_USER_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, FOLLOW_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, RETWEET_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, UPLOAD_IMAGES_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, REMOVE_IMAGE, UNFOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, ADD_POST_SUCCESS, ADD_POST_REQUEST, ADD_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, REMOVE_POST_SUCCESS, REMOVE_POST_REQUEST, REMOVE_POST_FAILURE, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_FAILURE, ADD_COMMENT_SUCCESS, ADD_COMMENT_REQUEST, ADD_COMMENT_FAILURE, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_FAILURE, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, ADD_POST_TO_ME, REMOVE_POST_OF_ME */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
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
const LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE";
const LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST";
const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";
const LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAG_POSTS_FAILURE";
const LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAG_POSTS_REQUEST";
const LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAG_POSTS_SUCCESS";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy8uL3R5cGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIk5vZGVCcmlkIiwiQ29tcG9uZW50IiwiX19qc3giLCJSZWFjdCIsIkZyYWdtZW50IiwiSGVhZCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiY2hhclNldCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJwYXlsb2FkIiwiY29tYmluZWRSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidXNlciIsInBvc3QiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3QiLCJzaW5nbGVQb3N0IiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwicmV0d2VldExvYWRpbmciLCJyZXR3ZWV0RG9uZSIsInJldHdlZXRFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsImFkZFBvc3QiLCJkYXRhIiwiQUREX1BPU1RfUkVRVUVTVCIsImFkZENvbW1lbnQiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwicHJvZHVjZSIsImRyYWZ0IiwiUkVNT1ZFX0lNQUdFIiwiZmlsdGVyIiwidiIsImkiLCJBRERfUE9TVF9TVUNDRVNTIiwidW5zaGlmdCIsIkFERF9QT1NUX0ZBSUxVUkUiLCJlcnJvciIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJmaW5kIiwiaWQiLCJQb3N0SWQiLCJMaWtlcnMiLCJwdXNoIiwiVXNlcklkIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCIsIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIiwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsImNvbmNhdCIsImxlbmd0aCIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJSRVRXRUVUX1JFUVVFU1QiLCJSRVRXRUVUX1NVQ0NFU1MiLCJSRVRXRUVUX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQ29tbWVudHMiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkRm9sbG93aW5nc0xvYWRpbmciLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJsb2FkRm9sbG93aW5nc0Vycm9yIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJyZW1vdmVGb2xsb3dlckxvYWRpbmciLCJyZW1vdmVGb2xsb3dlckRvbmUiLCJyZW1vdmVGb2xsb3dlckVycm9yIiwidW5Gb2xsb3dMb2FkaW5nIiwidW5Gb2xsb3dEb25lIiwidW5Gb2xsb3dFcnJvciIsInVzZXJJbmZvIiwibWUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJMT0dfSU5fUkVRVUVTVCIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIkZvbGxvd2VycyIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFIiwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyIsIkZvbGxvd2luZ3MiLCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJuaWNrbmFtZSIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJQb3N0cyIsIlJFTU9WRV9QT1NUX09GX01FIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwiYWRkUG9zdEFQSSIsInJlc3VsdCIsImNhbGwiLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsIndhdGNoQWRkUG9zdCIsInRha2VMYXRlc3QiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJ3YXRjaHVwbG9hZEltYWdlcyIsImxvYWRQb3N0c0FQSSIsImxhc3RJZCIsImdldCIsImxvYWRQb3N0cyIsIndhdGNoTG9hZFBvc3RzIiwibG9hZFBvc3RBUEkiLCJsb2FkUG9zdCIsIndhdGNoTG9hZFBvc3QiLCJsb2FkVXNlclBvc3RBUEkiLCJsb2FkVXNlclBvc3QiLCJ3YXRjaExvYWRVc2VyUG9zdCIsImxvYWRIYXNodGFnUG9zdEFQSSIsImVuY29kZVVSSUNvbXBvbmVudCIsImxvYWRIYXNodGFnUG9zdCIsIndhdGNoTG9hZEhhc2h0YWdQb3N0IiwicmV0d2VldEFQSSIsInJldHdlZXQiLCJjb25zb2xlIiwid2F0Y2hSZXR3ZWV0IiwicmVtb3ZlUG9zdEFQSSIsImRlbGV0ZSIsInJlbW92ZVBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwid2F0Y2hBZGRDb21tZW50IiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsImxpa2VQb3N0Iiwid2F0Y2hMaWtlUG9zdCIsInVubGlrZVBvc3RBUEkiLCJ1bmxpa2VQb3N0Iiwid2F0Y2hVbmxpa2VQb3N0IiwibG9nSW5BUEkiLCJsb2dJbiIsIndhdGNoTG9naW4iLCJ0YWtlRXZlcnkiLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJ3YXRjaExvZ291dCIsInRha2VMZWFkaW5nIiwic2lnblVwQVBJIiwic2lnblVwIiwibG9nIiwid2F0Y2hTaW5nVXAiLCJmb2xsb3dBUEkiLCJmb2xsb3ciLCJ3YXRjaEZvbGxvdyIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJ3YXRjaFVuZm9sbG93IiwibG9hZE15SW5mb0FQSSIsImxvYWRNeUluZm8iLCJ3YXRjaExvYWRNeUluZm8iLCJsb2FkVXNlckFQSSIsImxvYWRVc2VyIiwid2F0Y2hMb2FkVXNlciIsImxvYWRGb2xsb3dlcnNBUEkiLCJsb2FkRm9sbG93ZXJzIiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwibG9hZEZvbGxvd2luZ3NBUEkiLCJsb2FkRm9sbG93aW5ncyIsIndhdGNoTG9hZEZvbGxvd2lucyIsImNoYW5nZU5pY2tuYW1lQVBJIiwiY2hhbmdlTmlja25hbWUiLCJ3YXRjaENoYW5nZU5pY2tuYW1lIiwicmVtb3ZlRm9sbG93ZXJBUEkiLCJyZW1vdmVGb2xsb3dlciIsIndhdGNoUmVtb3ZlRm9sbG93ZXIiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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QUF5QjtBQUN6RCxNQUFNRCx1QkFBdUIsR0FBRyx5QkFBeUI7QUFDekQsTUFBTUcsdUJBQXVCLEdBQUcseUJBQXlCO0FBRXpELE1BQU1uRyxpQkFBaUIsR0FBRyxtQkFBbUI7QUFDN0MsTUFBTVIsaUJBQWlCLEdBQUcsbUJBQW1CO0FBQzdDLE1BQU1DLGlCQUFpQixHQUFHLG1CQUFtQjtBQUU3QyxNQUFNOEIsbUJBQW1CLEdBQUcscUJBQXFCO0FBQ2pELE1BQU1GLG1CQUFtQixHQUFHLHFCQUFxQjtBQUNqRCxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBcUI7QUFFakQsTUFBTThFLGNBQWMsR0FBRyxnQkFBZ0I7QUFDdkMsTUFBTUUsaUJBQWlCLEdBQUcsbUJBQW1CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZwRCxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XG5cbmNvbnN0IE5vZGVCcmlkID0gKHsgQ29tcG9uZW50IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDx0aXRsZT5Ob2RlQmlyZDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29tcG9uZW50IC8+XG4gICAgPC8+XG4gICk7XG59O1xuTm9kZUJyaWQucHJvcFR5cGVzID0ge1xuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxufTtcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE5vZGVCcmlkKTtcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XG5pbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQgcG9zdCBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBIWURSQVRFOlxuICAgICAgLy9jb25zb2xlLmxvZyhcIkhZRFJBVEVcIiwgYWN0aW9uKTtcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgICAgICB1c2VyLFxuICAgICAgICBwb3N0LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcbmltcG9ydCB7XG4gIEFERF9QT1NUX0ZBSUxVUkUsXG4gIEFERF9QT1NUX1JFUVVFU1QsXG4gIEFERF9QT1NUX1NVQ0NFU1MsXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXG4gIEFERF9DT01NRU5UX1NVQ0NFU1MsXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXG4gIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXG4gIExPQURfUE9TVFNfRkFJTFVSRSxcbiAgTE9BRF9QT1NUU19SRVFVRVNULFxuICBMT0FEX1BPU1RTX1NVQ0NFU1MsXG4gIExJS0VfUE9TVF9SRVFVRVNULFxuICBMSUtFX1BPU1RfU1VDQ0VTUyxcbiAgTElLRV9QT1NUX0ZBSUxVUkUsXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXG4gIFVOTElLRV9QT1NUX1NVQ0NFU1MsXG4gIFVOTElLRV9QT1NUX0ZBSUxVUkUsXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcbiAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxuICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXG4gIFJFTU9WRV9JTUFHRSxcbiAgUkVUV0VFVF9GQUlMVVJFLFxuICBSRVRXRUVUX1NVQ0NFU1MsXG4gIFJFVFdFRVRfUkVRVUVTVCxcbiAgTE9BRF9QT1NUX1JFUVVFU1QsXG4gIExPQURfUE9TVF9TVUNDRVNTLFxuICBMT0FEX1BPU1RfRkFJTFVSRSxcbiAgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsXG4gIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULFxuICBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXG4gIExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxuICBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcbn0gZnJvbSBcIi4uL3R5cGVcIjtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbWFpblBvc3RzOiBbXSxcbiAgaW1hZ2VQYXRoczogW10sXG4gIGhhc01vcmVQb3N0OiB0cnVlLFxuICBzaW5nbGVQb3N0OiBudWxsLFxuXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxuICBhZGRQb3N0RXJyb3I6IG51bGwsXG5cbiAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgbGlrZVBvc3REb25lOiBmYWxzZSxcbiAgbGlrZVBvc3RFcnJvcjogbnVsbCxcblxuICB1cGxvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSxcbiAgdXBsb2FkSW1hZ2VzRG9uZTogZmFsc2UsXG4gIHVwbG9hZEltYWdlc0Vycm9yOiBudWxsLFxuXG4gIHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxuICB1bmxpa2VQb3N0RXJyb3I6IG51bGwsXG5cbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcblxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxuXG4gIHJldHdlZXRMb2FkaW5nOiBmYWxzZSxcbiAgcmV0d2VldERvbmU6IGZhbHNlLFxuICByZXR3ZWV0RXJyb3I6IG51bGwsXG5cbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcblxuICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxuICBsb2FkUG9zdERvbmU6IGZhbHNlLFxuICBsb2FkUG9zdEVycm9yOiBudWxsLFxuXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXG4gIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxuICBkYXRhLFxufSk7XG5cbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXG4gIGRhdGEsXG59KTtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBSRU1PVkVfSU1BR0U6XG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcbiAgICAgICAgcG9zdC5MaWtlcnMucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1Q6XG4gICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUzpcbiAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XG4gICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7IC8vIGFjdGlvbi5kYXRh66W8IGNvbmNhdO2VtOyEnCDquLDsobQg642w7J207YSw7JeQIOy2lOqwgFxuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XG4gICAgICBjYXNlIExPQURfVVNFUl9QT1NUU19GQUlMVVJFOlxuICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1BPU1RfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgY2FzZSBSRVRXRUVUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFVFdFRVRfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRVRXRUVUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcbiAgICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKFxuICAgICAgICAgICh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWRcbiAgICAgICAgKTtcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XG4gICAgICAgIC8vY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleChcbiAgICAgICAgLy8gICAodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkXG4gICAgICAgIC8vICk7XG4gICAgICAgIC8vIGNvbnN0IHBvc3QgPSB7IC4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdIH07XG4gICAgICAgIC8vcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xuICAgICAgICAvLyBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcbiAgICAgICAgLy8gbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xuXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcbiAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG59O1xuLy9pbW1lciDsk7DrqbQgLi4uc3RhdGUg7JWIIOyNqOuPhCDrkKggc3RhdGUg64yA7IugIGRyYWZ0XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XG5pbXBvcnQge1xuICBMT0dfSU5fRkFJTFVSRSxcbiAgTE9HX0lOX1NVQ0NFU1MsXG4gIExPR19PVVRfUkVRVUVTVCxcbiAgTE9HX0lOX1JFUVVFU1QsXG4gIExPR19PVVRfRkFJTFVSRSxcbiAgTE9HX09VVF9TVUNDRVNTLFxuICBTSUdOX1VQX0ZBSUxVUkUsXG4gIFNJR05fVVBfUkVRVUVTVCxcbiAgU0lHTl9VUF9TVUNDRVNTLFxuICBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcbiAgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXG4gIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxuICBBRERfUE9TVF9UT19NRSxcbiAgUkVNT1ZFX1BPU1RfT0ZfTUUsXG4gIEZPTExPV19SRVFVRVNULFxuICBGT0xMT1dfU1VDQ0VTUyxcbiAgRk9MTE9XX0ZBSUxVUkUsXG4gIFVORk9MTE9XX1JFUVVFU1QsXG4gIFVORk9MTE9XX1NVQ0NFU1MsXG4gIFVORk9MTE9XX0ZBSUxVUkUsXG4gIExPQURfTVlfSU5GT19GQUlMVVJFLFxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcbiAgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXG4gIExPQURfRk9MTE9XRVJTX1JFUVVFU1QsXG4gIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXG4gIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXG4gIExPQURfRk9MTE9XSU5HU19SRVFVRVNULFxuICBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcbiAgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXG4gIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULFxuICBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcbiAgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsXG4gIExPQURfVVNFUl9SRVFVRVNULFxuICBMT0FEX1VTRVJfU1VDQ0VTUyxcbiAgTE9BRF9VU0VSX0ZBSUxVUkUsXG59IGZyb20gXCIuLi90eXBlXCI7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSxcbiAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxuICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXG5cbiAgbG9hZEZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLFxuICBsb2FkRm9sbG93ZXJzRG9uZTogZmFsc2UsXG4gIGxvYWRGb2xsb3dlcnNFcnJvcjogbnVsbCxcblxuICBsb2FkRm9sbG93aW5nc0xvYWRpbmc6IGZhbHNlLFxuICBsb2FkRm9sbG93aW5nc0RvbmU6IGZhbHNlLFxuICBsb2FkRm9sbG93aW5nc0Vycm9yOiBudWxsLFxuXG4gIGxvYWRVc2VyTG9hZGluZzogZmFsc2UsXG4gIGxvYWRVc2VyRG9uZTogZmFsc2UsXG4gIGxvYWRVc2VyRXJyb3I6IG51bGwsXG5cbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcbiAgbG9nSW5Eb25lOiBmYWxzZSxcbiAgbG9nSW5FcnJvcjogbnVsbCxcblxuICBsb2dPdXRMb2FkaW5nOiBmYWxzZSxcbiAgbG9nT3V0RG9uZTogZmFsc2UsXG4gIGxvZ091dEVycm9yOiBudWxsLFxuXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxuICBzaWduVXBEb25lOiBmYWxzZSxcbiAgc2lnblVwRXJyb3I6IG51bGwsXG5cbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcblxuICBmb2xsb3dMb2FkaW5nOiBmYWxzZSxcbiAgZm9sbG93RG9uZTogZmFsc2UsXG4gIGZvbGxvd0Vycm9yOiBudWxsLFxuXG4gIHJlbW92ZUZvbGxvd2VyTG9hZGluZzogZmFsc2UsXG4gIHJlbW92ZUZvbGxvd2VyRG9uZTogZmFsc2UsXG4gIHJlbW92ZUZvbGxvd2VyRXJyb3I6IG51bGwsXG5cbiAgdW5Gb2xsb3dMb2FkaW5nOiBmYWxzZSxcbiAgdW5Gb2xsb3dEb25lOiBmYWxzZSxcbiAgdW5Gb2xsb3dFcnJvcjogbnVsbCxcblxuICB1c2VySW5mbzogbnVsbCxcbiAgbWU6IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIHsgdHlwZTogTE9HX0lOX1JFUVVFU1QsIGRhdGEgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0eXBlOiBMT0dfT1VUX1JFUVVFU1QgfTtcbn07XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBkcmFmdC5tZS5Gb2xsb3dlcnMuZmlsdGVyKFxuICAgICAgICAgICh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWRcbiAgICAgICAgKTtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnVuRm9sbG93RXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC51bkZvbGxvd0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC51bkZvbGxvd0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnVuRm9sbG93TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51bkZvbGxvd0RvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoXG4gICAgICAgICAgKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVuRm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcbiAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxuICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHBvc3RTYWdhIGZyb20gXCIuL3Bvc3RcIjtcbmltcG9ydCB1c2VyU2FnYSBmcm9tIFwiLi91c2VyXCI7XG5cbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzA3NVwiO1xuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTsgLy/sv6DtgqQg7KCE64usXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgeWllbGQgYWxsKFtmb3JrKHBvc3RTYWdhKSwgZm9yayh1c2VyU2FnYSldKTtcbn1cbiIsImltcG9ydCB7IGZvcmssIGFsbCwgdGFrZUxhdGVzdCwgcHV0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQge1xuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxuICBBRERfQ09NTUVOVF9SRVFVRVNULFxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxuICBBRERfUE9TVF9GQUlMVVJFLFxuICBBRERfUE9TVF9SRVFVRVNULFxuICBBRERfUE9TVF9TVUNDRVNTLFxuICBBRERfUE9TVF9UT19NRSxcbiAgTElLRV9QT1NUX0ZBSUxVUkUsXG4gIExJS0VfUE9TVF9SRVFVRVNULFxuICBMSUtFX1BPU1RfU1VDQ0VTUyxcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXG4gIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULFxuICBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcbiAgTE9BRF9QT1NUU19GQUlMVVJFLFxuICBMT0FEX1BPU1RTX1JFUVVFU1QsXG4gIExPQURfUE9TVFNfU1VDQ0VTUyxcbiAgTE9BRF9QT1NUX0ZBSUxVUkUsXG4gIExPQURfUE9TVF9SRVFVRVNULFxuICBMT0FEX1BPU1RfU1VDQ0VTUyxcbiAgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXG4gIExPQURfVVNFUl9QT1NUU19SRVFVRVNULFxuICBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcbiAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcbiAgUkVNT1ZFX1BPU1RfT0ZfTUUsXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXG4gIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXG4gIFJFVFdFRVRfRkFJTFVSRSxcbiAgUkVUV0VFVF9SRVFVRVNULFxuICBSRVRXRUVUX1NVQ0NFU1MsXG4gIFVOTElLRV9QT1NUX0ZBSUxVUkUsXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXG4gIFVOTElLRV9QT1NUX1NVQ0NFU1MsXG4gIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcbiAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxuICBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXG59IGZyb20gXCIuLi90eXBlXCI7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Bvc3RcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7IC8v66eI7KeA66eJIOqyg+unjFxuICAvL3Rocm90dGxlKFwiQUREX1BPU1RfUkVRVUVTVFwiLCBhZGRQb3N0LDIwMDApIDLstIgg64+Z7JWIIDHrsogg7Iuk7ZaJXG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Bvc3QvaW1hZ2VzXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaHVwbG9hZEltYWdlcygpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7IC8v66eI7KeA66eJIOqyg+unjFxuICAvL3Rocm90dGxlKFwiQUREX1BPU1RfUkVRVUVTVFwiLCBhZGRQb3N0LDIwMDApIDLstIgg64+Z7JWIIDHrsogg7Iuk7ZaJXG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGxhc3RJZCkge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7IC8vZ2V07JeQ7IScIOuNsOydtO2EsCDrhKPquLAgPyBhPWIg7J2065+wIOyLneycvOuhnFxufVxuXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24ubGFzdElkKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTsgLy/rp4jsp4Drp4kg6rKD66eMXG4gIC8vdGhyb3R0bGUoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGFkZFBvc3QsMjAwMCkgMuy0iCDrj5nslYggMeuyiCDsi6TtlokgUkVRVVNFVOuKlCDrs7TrgrTsp5Bcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBsb2FkUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0LyR7ZGF0YX1gKTsgLy9nZXTsl5DshJwg642w7J207YSwIOuEo+q4sCA/IGE9YiDsnbTrn7Ag7Iud7Jy866GcXG59XG5cbmZ1bmN0aW9uKiBsb2FkUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpOyAvL+uniOyngOuniSDqsoPrp4xcbiAgLy90aHJvdHRsZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwyMDAwKSAy7LSIIOuPmeyViCAx67KIIOyLpO2WiSBSRVFVU0VU64qUIOuztOuCtOynkFxufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gbG9hZFVzZXJQb3N0QVBJKGRhdGEsIGxhc3RJZCkge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9L3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApOyAvL2dldOyXkOyEnCDrjbDsnbTthLAg64Sj6riwID8gYT1iIOydtOufsCDsi53snLzroZxcbn1cblxuZnVuY3Rpb24qIGxvYWRVc2VyUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyUG9zdEFQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXJQb3N0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9QT1NUU19SRVFVRVNULCBsb2FkVXNlclBvc3QpOyAvL+uniOyngOuniSDqsoPrp4xcbiAgLy90aHJvdHRsZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwyMDAwKSAy7LSIIOuPmeyViCAx67KIIOyLpO2WiSBSRVFVU0VU64qUIOuztOuCtOynkFxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGxvYWRIYXNodGFnUG9zdEFQSShkYXRhLCBsYXN0SWQpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChcbiAgICBgL2hhc2h0YWcvJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YSl9P2xhc3RJZD0ke2xhc3RJZCB8fCAwfWBcbiAgKTsgLy9nZXTsl5DshJwg642w7J207YSwIOuEo+q4sCA/IGE9YiDsnbTrn7Ag7Iud7Jy866GcXG4vL2VuY29kZVVSSUNvbXBvbmVudCAg7ZWc6riA7J2EIOyYgeusuOyekOuhnCDrsJTqv4hcbiAgfVxuZnVuY3Rpb24qIGxvYWRIYXNodGFnUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRIYXNodGFnUG9zdEFQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG4gICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9hZEhhc2h0YWdQb3N0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULCBsb2FkSGFzaHRhZ1Bvc3QpOyAvL+uniOyngOuniSDqsoPrp4xcbiAgLy90aHJvdHRsZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwyMDAwKSAy7LSIIOuPmeyViCAx67KIIOyLpO2WiSBSRVFVU0VU64qUIOuztOuCtOynkFxufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIHJldHdlZXRBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhfS9yZXR3ZWV0YCk7XG59XG5cbmZ1bmN0aW9uKiByZXR3ZWV0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmV0d2VldEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG4gICAgICB0eXBlOiBSRVRXRUVUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBSRVRXRUVUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoUmV0d2VldCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChSRVRXRUVUX1JFUVVFU1QsIHJldHdlZXQpOyAvL+uniOyngOuniSDqsoPrp4xcbiAgLy90aHJvdHRsZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwyMDAwKSAy7LSIIOuPmeyViCAx67KIIOyLpO2WiVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9YCk7XG59XG5cbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG5cbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTsgLy/rp4jsp4Drp4kg6rKD66eMXG4gIC8vdGhyb3R0bGUoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGFkZFBvc3QsMjAwMCkgMuy0iCDrj5nslYggMeuyiCDsi6Ttlolcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7IC8v66eI7KeA66eJIOqyg+unjFxuICAvL3Rocm90dGxlKFwiQUREX1BPU1RfUkVRVUVTVFwiLCBhZGRQb3N0LDIwMDApIDLstIgg64+Z7JWIIDHrsogg7Iuk7ZaJXG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApOyAvL3BhdGNoIOydvOu2gOu2hCDsiJjsoJVcbn1cblxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpOyAvL+uniOyngOuniSDqsoPrp4xcbiAgLy90aHJvdHRsZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwyMDAwKSAy7LSIIOuPmeyViCAx67KIIOyLpO2WiVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcbn1cblxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7IC8v66eI7KeA66eJIOqyg+unjFxuICAvL3Rocm90dGxlKFwiQUREX1BPU1RfUkVRVUVTVFwiLCBhZGRQb3N0LDIwMDApIDLstIgg64+Z7JWIIDHrsogg7Iuk7ZaJXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBmb3JrKHdhdGNoQWRkUG9zdCksXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcbiAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxuICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcbiAgICBmb3JrKHdhdGNodXBsb2FkSW1hZ2VzKSxcbiAgICBmb3JrKHdhdGNoUmV0d2VldCksXG4gICAgZm9yayh3YXRjaExvYWRQb3N0KSxcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXJQb3N0KSxcbiAgICBmb3JrKHdhdGNoTG9hZEhhc2h0YWdQb3N0KSxcbiAgXSk7XG59XG4iLCJpbXBvcnQge1xuICBMT0dfSU5fRkFJTFVSRSxcbiAgTE9HX0lOX1NVQ0NFU1MsXG4gIExPR19PVVRfUkVRVUVTVCxcbiAgTE9HX0lOX1JFUVVFU1QsXG4gIExPR19PVVRfRkFJTFVSRSxcbiAgTE9HX09VVF9TVUNDRVNTLFxuICBTSUdOX1VQX0ZBSUxVUkUsXG4gIFNJR05fVVBfUkVRVUVTVCxcbiAgU0lHTl9VUF9TVUNDRVNTLFxuICBGT0xMT1dfUkVRVUVTVCxcbiAgVU5GT0xMT1dfUkVRVUVTVCxcbiAgRk9MTE9XX1NVQ0NFU1MsXG4gIEZPTExPV19GQUlMVVJFLFxuICBVTkZPTExPV19TVUNDRVNTLFxuICBVTkZPTExPV19GQUlMVVJFLFxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcbiAgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXG4gIExPQURfTVlfSU5GT19GQUlMVVJFLFxuICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcbiAgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXG4gIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxuICBMT0FEX0ZPTExPV0VSU19SRVFVRVNULFxuICBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxuICBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxuICBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcbiAgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXG4gIExPQURfRk9MTE9XSU5HU19SRVFVRVNULFxuICBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCxcbiAgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsXG4gIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxuICBMT0FEX1VTRVJfUkVRVUVTVCxcbiAgTE9BRF9VU0VSX1NVQ0NFU1MsXG4gIExPQURfVVNFUl9GQUlMVVJFLFxufSBmcm9tIFwiLi4vdHlwZVwiO1xuXG5pbXBvcnQge1xuICBhbGwsXG4gIGZvcmssXG4gIHB1dCxcbiAgdGFrZUV2ZXJ5LFxuICB0YWtlTGVhZGluZyxcbiAgdGFrZUxhdGVzdCxcbiAgY2FsbCxcbn0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3VzZXIvbG9naW5cIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XG5cbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuXG4gICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XG4gIHlpZWxkIHRha2VFdmVyeShMT0dfSU5fUkVRVUVTVCwgbG9nSW4pOyAvL+uwmOuztVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvdXNlci9sb2dvdXRcIik7XG59XG5cbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XG4gIHRyeSB7XG4gICAgeWllbGQgY2FsbChsb2dPdXRBUEkpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG4gICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiB3YXRjaExvZ291dCgpIHtcbiAgeWllbGQgdGFrZUxlYWRpbmcoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpOyAvL+yyqyDrsojsp7gg6rKD66eMXG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi91c2VyXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hTaW5nVXAoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApOyAvL+yyqyDrsojsp7gg6rKD66eMXG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vZm9sbG93YCk7XG59XG5cbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcblxuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG5cbiAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xuICB5aWVsZCB0YWtlRXZlcnkoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7IC8v67CY67O1XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIHVuZm9sbG93QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKTtcbn1cblxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5mb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcblxuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG5cbiAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCkge1xuICB5aWVsZCB0YWtlRXZlcnkoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpOyAvL+uwmOuztVxufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoKSB7XG4gIHJldHVybiBheGlvcy5nZXQoXCIvdXNlclwiKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRNeUluZm8oYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcblxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCkge1xuICB5aWVsZCB0YWtlRXZlcnkoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pOyAvL+uwmOuztVxufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChgdXNlci8ke2RhdGF9YCk7XG59XG5cbmZ1bmN0aW9uKiBsb2FkVXNlcihhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcblxuICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfVVNFUl9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KExPQURfVVNFUl9SRVFVRVNULCBsb2FkVXNlcik7IC8v67CY67O1XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIGxvYWRGb2xsb3dlcnNBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KFwiL3VzZXIvZm9sbG93ZXJzXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogbG9hZEZvbGxvd2VycyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dlcnNBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuXG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93ZXJzKCkge1xuICB5aWVsZCB0YWtlRXZlcnkoTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgbG9hZEZvbGxvd2Vycyk7IC8v67CY67O1XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIGxvYWRGb2xsb3dpbmdzQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChcIi91c2VyL2ZvbGxvd2luZ3NcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBsb2FkRm9sbG93aW5ncyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dpbmdzQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcblxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5zKCkge1xuICB5aWVsZCB0YWtlRXZlcnkoTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIGxvYWRGb2xsb3dpbmdzKTsgLy/rsJjrs7Vcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGNoYW5nZU5pY2tuYW1lQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKFwiL3VzZXIvbmlja25hbWVcIiwgeyBuaWNrbmFtZTogZGF0YSB9KTtcbn1cblxuZnVuY3Rpb24qIGNoYW5nZU5pY2tuYW1lKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY2hhbmdlTmlja25hbWVBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkge1xuICB5aWVsZCB0YWtlRXZlcnkoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tuYW1lKTsgLy/rsJjrs7Vcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiByZW1vdmVGb2xsb3dlckFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyL2ZvbGxvd2VyLyR7ZGF0YX1gKTtcbn1cblxuZnVuY3Rpb24qIHJlbW92ZUZvbGxvd2VyKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlRm9sbG93ZXJBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuXG4gICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUZvbGxvd2VyKCkge1xuICB5aWVsZCB0YWtlRXZlcnkoUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIHJlbW92ZUZvbGxvd2VyKTsgLy/rsJjrs7Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsod2F0Y2hDaGFuZ2VOaWNrbmFtZSksXG4gICAgZm9yayh3YXRjaFJlbW92ZUZvbGxvd2VyKSxcbiAgICBmb3JrKHdhdGNoTG9naW4pLFxuICAgIGZvcmsod2F0Y2hMb2dvdXQpLFxuICAgIGZvcmsod2F0Y2hTaW5nVXApLFxuICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxuICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXG4gICAgZm9yayh3YXRjaExvYWRNeUluZm8pLFxuICAgIGZvcmsod2F0Y2hMb2FkRm9sbG93aW5zKSxcbiAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2VycyksXG4gICAgZm9yayh3YXRjaExvYWRVc2VyKSxcbiAgXSk7XG59XG4iLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuLi9zYWdhc1wiO1xuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xuICBjb25zdCBlbmhhbmNlciA9XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXG4gICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcbiAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgZW5oYW5jZXIpO1xuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7IC8vc2FnYVRhc2sg7ISc67KE7IKs7J2065Oc656c642U66eB7JqpXG4gIHJldHVybiBzdG9yZTtcbn07XG5cbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XG4iLCJleHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcIkxPR19JTl9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9IFwiTE9BRF9NWV9JTkZPX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9IFwiTE9BRF9NWV9JTkZPX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9IFwiTE9BRF9NWV9JTkZPX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gXCJMT0FEX1VTRVJfRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gXCJMT0FEX1VTRVJfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gXCJMT0FEX1VTRVJfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfVVNFUl9QT1NUU19TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9VUF9GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJTSUdOX1VQX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcIlNJR05fVVBfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSBcIkZPTExPV19GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSBcIkZPTExPV19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSBcIkZPTExPV19TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSBcIlJFVFdFRVRfRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9IFwiUkVUV0VFVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gXCJSRVRXRUVUX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9IFwiVVBMT0FEX0lNQUdFU19GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gXCJVUExPQURfSU1BR0VTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSBcIlVQTE9BRF9JTUFHRVNfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gXCJSRU1PVkVfSU1BR0VcIjtcblxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSBcIlVORk9MTE9XX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gXCJVTkZPTExPV19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9IFwiVU5GT0xMT1dfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gXCJMT0dfT1VUX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcIkxPR19PVVRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwiTE9HX09VVF9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9QT1NUU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1BPU1RTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUE9TVFNfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSBcIkxPQURfUE9TVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSBcIkxPQURfUE9TVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSBcIkxPQURfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFID0gXCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9IFwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSBcIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gXCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gXCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gXCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSBcIlJFTU9WRV9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9IFwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCA9IFwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9IFwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gXCJBRERfQ09NTUVOVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSBcIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSBcIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSBcIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9IFwiTElLRV9QT1NUX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9IFwiTElLRV9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9IFwiTElLRV9QT1NUX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSBcIlVOTElLRV9QT1NUX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gXCJVTkxJS0VfUE9TVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9IFwiVU5MSUtFX1BPU1RfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSBcIkFERF9QT1NUX1RPX01FXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSBcIlJFTU9WRV9QT1NUX09GX01FXCI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=