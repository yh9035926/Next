webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type */ "./type/index.js");


var initialState = {
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
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null
};
var addPost = function addPost(data) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_REQUEST"],
    data: data
  };
};
var addComment = function addComment(data) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_REQUEST"],
    data: data
  };
};
var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case _type__WEBPACK_IMPORTED_MODULE_1__["REMOVE_IMAGE"]:
        draft.imagePaths = draft.imagePaths.filter(function (v, i) {
          return i !== action.data;
        });
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_REQUEST"]:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_SUCCESS"]:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data); // action.data를 concat해서 기존 데이터에 추가
        draft.hasMorePost = draft.mainPosts.length < 30;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_FAILURE"]:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
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
          var _post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });
          _post.Likers.push({
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
          var _post2 = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });
          _post2.Likers = _post2.Likers.filter(function (v) {
            return v.id !== action.data.UserId;
          });
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
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data.PostId;
        });
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

        var post = draft.mainPosts.find(function (v) {
          return v.id === action.data.PostId;
        });
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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3QiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsIkFERF9QT1NUX1JFUVVFU1QiLCJhZGRDb21tZW50IiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJSRU1PVkVfSU1BR0UiLCJmaWx0ZXIiLCJ2IiwiaSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJjb25jYXQiLCJMT0FEX1BPU1RfRkFJTFVSRSIsImVycm9yIiwiQUREX1BPU1RfU1VDQ0VTUyIsInVuc2hpZnQiLCJBRERfUE9TVF9GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsInBvc3QiLCJmaW5kIiwiaWQiLCJQb3N0SWQiLCJMaWtlcnMiLCJwdXNoIiwiVXNlcklkIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQ29tbWVudHMiLCJBRERfQ09NTUVOVF9GQUlMVVJFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRCO0FBd0JYO0FBRVYsSUFBTUEsWUFBWSxHQUFHO0VBQzFCQyxTQUFTLEVBQUUsRUFBRTtFQUNiQyxVQUFVLEVBQUUsRUFBRTtFQUNkQyxXQUFXLEVBQUUsSUFBSTtFQUVqQkMsY0FBYyxFQUFFLEtBQUs7RUFDckJDLFdBQVcsRUFBRSxLQUFLO0VBQ2xCQyxZQUFZLEVBQUUsSUFBSTtFQUVsQkMsZUFBZSxFQUFFLEtBQUs7RUFDdEJDLFlBQVksRUFBRSxLQUFLO0VBQ25CQyxhQUFhLEVBQUUsSUFBSTtFQUVuQkMsbUJBQW1CLEVBQUUsS0FBSztFQUMxQkMsZ0JBQWdCLEVBQUUsS0FBSztFQUN2QkMsaUJBQWlCLEVBQUUsSUFBSTtFQUV2QkMsaUJBQWlCLEVBQUUsS0FBSztFQUN4QkMsY0FBYyxFQUFFLEtBQUs7RUFDckJDLGVBQWUsRUFBRSxJQUFJO0VBRXJCQyxpQkFBaUIsRUFBRSxLQUFLO0VBQ3hCQyxjQUFjLEVBQUUsS0FBSztFQUNyQkMsZUFBZSxFQUFFLElBQUk7RUFFckJDLGlCQUFpQixFQUFFLEtBQUs7RUFDeEJDLGNBQWMsRUFBRSxLQUFLO0VBQ3JCQyxlQUFlLEVB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QUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZmQyMTMxY2Y5Y2Y5NGUzMzYxM2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5pbXBvcnQge1xyXG4gIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfUE9TVF9SRVFVRVNULFxyXG4gIExPQURfUE9TVF9TVUNDRVNTLFxyXG4gIExJS0VfUE9TVF9SRVFVRVNULFxyXG4gIExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gIExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gIFJFTU9WRV9JTUFHRSxcclxufSBmcm9tIFwiLi4vdHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFtdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIGhhc01vcmVQb3N0OiB0cnVlLFxyXG5cclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsaWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gIHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0RvbmU6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0Vycm9yOiBudWxsLFxyXG5cclxuICB1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcblxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIFJFTU9WRV9JTUFHRTpcclxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7IC8vIGFjdGlvbi5kYXRh66W8IGNvbmNhdO2VtOyEnCDquLDsobQg642w7J207YSw7JeQIOy2lOqwgFxyXG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0ID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA8IDMwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuTGlrZXJzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcihcclxuICAgICAgICAgICh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWRcclxuICAgICAgICApO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAvL2NvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoXHJcbiAgICAgICAgLy8gICAodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkXHJcbiAgICAgICAgLy8gKTtcclxuICAgICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAgIC8vcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG4gICAgICAgIC8vIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG4vL2ltbWVyIOyTsOuptCAuLi5zdGF0ZSDslYgg7I2o64+EIOuQqCBzdGF0ZSDrjIDsi6AgZHJhZnRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9