webpackHotUpdate_N_E("pages/index",{

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
        draft["break"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3QiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJpZCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsIlVzZXIiLCJuaWNrbmFtZSIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwiY29udGVudCIsImxvcmVtIiwicGFyYWdyYXBoIiwiSW1hZ2UiLCJzcmMiLCJpbWFnZSIsIkNvbW1lbnRzIiwic2VudGVuY2UiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJBRERfUE9TVF9SRVFVRVNUIiwiYWRkQ29tbWVudCIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJkdW1teVBvc3QiLCJJbWFnZXMiLCJkdW1teUNvbW1lbnQiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiQUREX1BPU1RfU1VDQ0VTUyIsInVuc2hpZnQiLCJBRERfUE9TVF9GQUlMVVJFIiwiZXJyb3IiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiY29uY2F0IiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsImZpbHRlciIsInYiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsInBvc3QiLCJmaW5kIiwicG9zdElkIiwiQUREX0NPTU1FTlRfRkFJTFVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEI7QUFDRjtBQWNYO0FBQ1M7QUFFbkIsSUFBTUEsWUFBWSxHQUFHO0VBQzFCQyxTQUFTLEVBQUUsRUFBRTtFQUNiQyxVQUFVLEVBQUUsRUFBRTtFQUNkQyxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsY0FBYyxFQUFFLEtBQUs7RUFDckJDLFdBQVcsRUFBRSxLQUFLO0VBQ2xCQyxZQUFZLEVBQUUsSUFBSTtFQUVsQkMsaUJBQWlCLEVBQUUsS0FBSztFQUN4QkMsY0FBYyxFQUFFLEtBQUs7RUFDckJDLGVBQWUsRUFBRSxJQUFJO0VBRXJCQyxpQkFBaUIsRUFBRSxLQUFLO0VBQ3hCQyxjQUFjLEVBQUUsS0FBSztFQUNyQkMsZUFBZSxFQUFFLElBQUk7RUFFckJDLGVBQWUsRUFBRSxLQUFLO0VBQ3RCQyxZQUFZLEVBQUUsS0FBSztFQUNuQkMsYUFBYSxFQUFFO0FBQ2pCLENBQUM7QUFDTSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCQSxDQUFJQyxNQUFNO0VBQUEsT0FDdENDLEtBQUssQ0FBQ0QsTUFBTSxDQUFDLENBQ1ZFLElBQUksRUFBRSxDQUNOQyxHQUFHLENBQUM7SUFBQSxPQUFPO01BQ1ZDLEVBQUUsRUFBRUMsOENBQU8sQ0FBQ0MsUUFBUSxFQUFFO01BQ3RCQyxJQUFJLEVBQUU7UUFDSkgsRUFBRSxFQUFFQyw4Q0FBTyxDQUFDQyxRQUFRLEVBQUU7UUFDdEJFLFFBQVEsRUFBRUMsNENBQUssQ0FBQ0MsSUFBSSxDQUFDQyxRQUFRO01BQy9CLENBQUM7TUFDREMsT0FBTyxFQUFFSCw0Q0FBSyxDQUFDSSxLQUFLLENBQUNDLFNBQVMsRUFBRTtNQUNoQ0MsS0FBSyxFQUFFLENBQ0w7UUFD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SyxDQUFDNUMsZUFBZSxHQUFHLElBQUk7UUFDNUI7TUFDRixLQUFLMEQseURBQW1CO1FBQ3RCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBLElBQU1DLElBQUksR0FBR2YsS0FBSyxDQUFDcEQsU0FBUyxDQUFDb0UsSUFBSSxDQUFDLFVBQUNKLENBQUM7VUFBQSxPQUFLQSxDQUFDLENBQUM1QyxFQUFFLEtBQUs4QixNQUFNLENBQUNiLElBQUksQ0FBQ2dDLE1BQU07UUFBQSxFQUFDO1FBQ3JFRixJQUFJLENBQUNqQyxRQUFRLENBQUNvQixPQUFPLENBQUNWLFlBQVksQ0FBQ00sTUFBTSxDQUFDYixJQUFJLENBQUNULE9BQU8sQ0FBQyxDQUFDO1FBQ3hEd0IsS0FBSyxDQUFDOUMsaUJBQWlCLEdBQUcsS0FBSztRQUMvQjhDLEtBQUssQ0FBQzdDLGNBQWMsR0FBRyxJQUFJO1FBQzNCO01BQ0YsS0FBSytELHlEQUFtQjtRQUN0QmxCLEtBQUssQ0FBQzlDLGlCQUFpQixHQUFHLEtBQUs7UUFDL0I4QyxLQUFLLENBQUM1QyxlQUFlLEdBQUcwQyxNQUFNLENBQUNNLEtBQUs7TUFFdEM7UUFDRTtJQUFNO0VBRVosQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUNEOztBQUVlWCwwRUFBVyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJhYWVjYTExMzc2NmM1MjEzYjBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuaW1wb3J0IHtcclxuICBBRERfUE9TVF9GQUlMVVJFLFxyXG4gIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICBMT0FEX1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX1BPU1RfU1VDQ0VTUyxcclxufSBmcm9tIFwiLi4vdHlwZVwiO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSBcImZha2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW10sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgaGFzTW9yZVBvc3Q6IHRydWUsXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG5cclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdCA9IChudW1iZXIpID0+XHJcbiAgQXJyYXkobnVtYmVyKVxyXG4gICAgLmZpbGwoKVxyXG4gICAgLm1hcCgoKSA9PiAoe1xyXG4gICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICAgICAgSW1hZ2U6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgQ29tbWVudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IGRhdGEuaWQsXHJcbiAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6IFwi7KCc66Gc7IaMXCIsXHJcbiAgfSxcclxuICBJbWFnZXM6IFtdLFxyXG4gIENvbW1lbnRzOiBbXSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIGNvbnRlbnQ6IGRhdGEsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogXCLsoJzroZzshoxcIixcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3QgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICAgIC8vY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleChcclxuICAgICAgICAvLyAgICh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWRcclxuICAgICAgICAvLyApO1xyXG4gICAgICAgIC8vIGNvbnN0IHBvc3QgPSB7IC4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdIH07XHJcbiAgICAgICAgLy9wb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgLy8gbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xyXG5cclxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSk7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcbi8vaW1tZXIg7JOw66m0IC4uLnN0YXRlIOyViCDsjajrj4Qg65CoIHN0YXRlIOuMgOyLoCBkcmFmdFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=