webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type */ "./type/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_3__);




var initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePost: true,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null
};
var generateDummyPost = function generateDummyPost(number) {
  return Array(number).fill().map(function () {
    return {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: faker__WEBPACK_IMPORTED_MODULE_3___default.a.name.findName()
      },
      content: faker__WEBPACK_IMPORTED_MODULE_3___default.a.lorem.paragraph(),
      Image: [{
        src: faker__WEBPACK_IMPORTED_MODULE_3___default.a.image.image()
      }],
      Comments: [{
        User: {
          id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
          nickname: faker__WEBPACK_IMPORTED_MODULE_3___default.a.name.findName()
        },
        content: faker__WEBPACK_IMPORTED_MODULE_3___default.a.lorem.sentence()
      }]
    };
  });
};
var addPost = function addPost(data) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"],
    data: data
  };
};
var addComment = function addComment(data) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"],
    data: data
  };
};
var dummyPost = function dummyPost(data) {
  return {
    id: data.id,
    content: data.content,
    User: {
      id: 1,
      nickname: "제로소"
    },
    Images: [],
    Comments: []
  };
};
var dummyComment = function dummyComment(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    content: data,
    User: {
      id: 1,
      nickname: "제로소"
    }
  };
};
var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case _type__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"]:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"]:
        draft.mainPosts.unshift(dummyPost(action.data));
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.hasMorePost = draft.mainPosts.length < 50;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"]:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"]:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"]:
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.hasMorePost = draft.ac;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"]:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"]:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"]:
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data;
        });
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"]:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"]:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"]:
        //const postIndex = state.mainPosts.findIndex(
        //   (v) => v.id === action.data.postId
        // );
        // const post = { ...state.mainPosts[postIndex] };
        //post.Comments = [dummyComment(action.data.content), ...post.Comments];
        // const mainPosts = [...state.mainPosts];
        // mainPosts[postIndex] = post;

        var post = draft.mainPosts.find(function (v) {
          return v.id === action.data.postId;
        });
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"]:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3QiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJpZCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsIlVzZXIiLCJuaWNrbmFtZSIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwiY29udGVudCIsImxvcmVtIiwicGFyYWdyYXBoIiwiSW1hZ2UiLCJzcmMiLCJpbWFnZSIsIkNvbW1lbnRzIiwic2VudGVuY2UiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJBRERfUE9TVF9SRVFVRVNUIiwiYWRkQ29tbWVudCIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJkdW1teVBvc3QiLCJJbWFnZXMiLCJkdW1teUNvbW1lbnQiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiQUREX1BPU1RfU1VDQ0VTUyIsInVuc2hpZnQiLCJBRERfUE9TVF9GQUlMVVJFIiwiZXJyb3IiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiY29uY2F0IiwiYWMiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiZmlsdGVyIiwidiIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwicG9zdCIsImZpbmQiLCJwb3N0SWQiLCJBRERfQ09NTUVOVF9GQUlMVVJFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4QjtBQUNGO0FBY1g7QUFDUztBQUVuQixJQUFNQSxZQUFZLEdBQUc7RUFDMUJDLFNBQVMsRUFBRSxFQUFFO0VBQ2JDLFVBQVUsRUFBRSxFQUFFO0VBQ2RDLFdBQVcsRUFBRSxJQUFJO0VBQ2pCQyxjQUFjLEVBQUUsS0FBSztFQUNyQkMsV0FBVyxFQUFFLEtBQUs7RUFDbEJDLFlBQVksRUFBRSxJQUFJO0VBRWxCQyxpQkFBaUIsRUFBRSxLQUFLO0VBQ3hCQyxjQUFjLEVBQUUsS0FBSztFQUNyQkMsZUFBZSxFQUFFLElBQUk7RUFFckJDLGlCQUFpQixFQUFFLEtBQUs7RUFDeEJDLGNBQWMsRUFBRSxLQUFLO0VBQ3JCQyxlQUFlLEVBQUUsSUFBSTtFQUVyQkMsZUFBZSxFQUFFLEtBQUs7RUFDdEJDLFlBQVksRUFBRSxLQUFLO0VBQ25CQyxhQUFhLEVBQUU7QUFDakIsQ0FBQztBQUNNLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUlDLE1BQU07RUFBQSxPQUN0Q0MsS0FBSyxDQUFDRCxNQUFNLENBQUMsQ0FDVkUsSUFBSSxFQUFFLENBQ05DLEdBQUcsQ0FBQztJQUFBLE9BQU87TUFDVkMsRUFBRSxFQUFFQyw4Q0FBTyxDQUFDQyxRQUFRLEVBQUU7TUFDdEJDLElBQUksRUFBRTtRQUNKSCxFQUFFLEVBQUVDLDhDQUFPLENBQUNDLFFBQVEsRUFBRTtRQUN0QkUsUUFBUSxFQUFFQyw0Q0FBSyxDQUFDQyxJQUFJLENBQUNDLFFBQVE7TUFDL0IsQ0FBQztNQUNEQyxPQUFPLEVBQUVILDRDQUFLLENBQUNJLEtBQUssQ0FBQ0MsU0FBUyxFQUFFO01BQ2hDQyxLQUFLLEVBQUUsQ0FD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OEMsS0FBSyxDQUFDN0MsY0FBYyxHQUFHLEtBQUs7UUFDNUI2QyxLQUFLLENBQUM1QyxlQUFlLEdBQUcsSUFBSTtRQUM1QjtNQUNGLEtBQUsyRCx5REFBbUI7UUFDdEI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUEsSUFBTUMsSUFBSSxHQUFHaEIsS0FBSyxDQUFDcEQsU0FBUyxDQUFDcUUsSUFBSSxDQUFDLFVBQUNKLENBQUM7VUFBQSxPQUFLQSxDQUFDLENBQUM3QyxFQUFFLEtBQUs4QixNQUFNLENBQUNiLElBQUksQ0FBQ2lDLE1BQU07UUFBQSxFQUFDO1FBQ3JFRixJQUFJLENBQUNsQyxRQUFRLENBQUNvQixPQUFPLENBQUNWLFlBQVksQ0FBQ00sTUFBTSxDQUFDYixJQUFJLENBQUNULE9BQU8sQ0FBQyxDQUFDO1FBQ3hEd0IsS0FBSyxDQUFDOUMsaUJBQWlCLEdBQUcsS0FBSztRQUMvQjhDLEtBQUssQ0FBQzdDLGNBQWMsR0FBRyxJQUFJO1FBQzNCO01BQ0YsS0FBS2dFLHlEQUFtQjtRQUN0Qm5CLEtBQUssQ0FBQzlDLGlCQUFpQixHQUFHLEtBQUs7UUFDL0I4QyxLQUFLLENBQUM1QyxlQUFlLEdBQUcwQyxNQUFNLENBQUNNLEtBQUs7TUFFdEM7UUFDRTtJQUFNO0VBRVosQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUNEOztBQUVlWCwwRUFBVyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjU3MzU1OTUwMzdkZTAzNzQwMTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCI7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5pbXBvcnQge1xyXG4gIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfUE9TVF9SRVFVRVNULFxyXG4gIExPQURfUE9TVF9TVUNDRVNTLFxyXG59IGZyb20gXCIuLi90eXBlXCI7XHJcbmltcG9ydCBmYWtlciBmcm9tIFwiZmFrZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBoYXNNb3JlUG9zdDogdHJ1ZSxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcblxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxufTtcclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT5cclxuICBBcnJheShudW1iZXIpXHJcbiAgICAuZmlsbCgpXHJcbiAgICAubWFwKCgpID0+ICh7XHJcbiAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gICAgICBJbWFnZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBDb21tZW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogZGF0YS5pZCxcclxuICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogXCLsoJzroZzshoxcIixcclxuICB9LFxyXG4gIEltYWdlczogW10sXHJcbiAgQ29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgY29udGVudDogZGF0YSxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiBcIuygnOuhnOyGjFwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3Q9ZHJhZnQuYWNcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAvL2NvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoXHJcbiAgICAgICAgLy8gICAodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkXHJcbiAgICAgICAgLy8gKTtcclxuICAgICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAgIC8vcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG4gICAgICAgIC8vIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG4vL2ltbWVyIOyTsOuptCAuLi5zdGF0ZSDslYgg7I2o64+EIOuQqCBzdGF0ZSDrjIDsi6AgZHJhZnRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9