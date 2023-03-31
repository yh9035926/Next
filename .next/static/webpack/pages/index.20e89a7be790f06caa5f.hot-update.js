webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type */ "./type/index.js");

var _this = undefined,
  _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\components\\CommentForm.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var CommentForm = function CommentForm(_ref) {
  _s();
  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    var _state$user$me;
    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
      return state.post;
    }),
    addCommentDone = _useSelector.addCommentDone,
    addCommentLoading = _useSelector.addCommentLoading;
  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
    commentText = _useInput2[0],
    onChangeCommentText = _useInput2[1],
    setCommentText = _useInput2[2];
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (addCommentDone) {
      setCommentText("");
    }
  }, [addCommentDone]);
  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    console.log(post.id, commentText);
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_6__["ADD_COMMENT_REQUEST"],
      data: {
        content: commentText,
        postId: post.id,
        userId: id
      }
    });
  }, [commentText, id]);
  console.log(_type__WEBPACK_IMPORTED_MODULE_6__["ADD_COMMENT_REQUEST"]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitComment,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    value: commentText,
    onChange: onChangeCommentText,
    rows: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    htmlType: "submit",
    loading: addCommentLoading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "\uC090\uC57D")));
};
_s(CommentForm, "TkQ1pkz5HHxeoLHkjeNQHPXXfhA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"]];
});
_c = CommentForm;
CommentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);
var _c;
$RefreshReg$(_c, "CommentForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb21tZW50Rm9ybSIsIl9yZWYiLCJfcyIsInBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiX3N0YXRlJHVzZXIkbWUiLCJ1c2VyIiwibWUiLCJfdXNlU2VsZWN0b3IiLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRMb2FkaW5nIiwiX3VzZUlucHV0IiwidXNlSW5wdXQiLCJfdXNlSW5wdXQyIiwiX3NsaWNlZFRvQXJyYXkiLCJjb21tZW50VGV4dCIsIm9uQ2hhbmdlQ29tbWVudFRleHQiLCJzZXRDb21tZW50VGV4dCIsInVzZUVmZmVjdCIsIm9uU3VibWl0Q29tbWVudCIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiZGF0YSIsImNvbnRlbnQiLCJwb3N0SWQiLCJ1c2VySWQiLCJfX2pzeCIsIkZvcm0iLCJvbkZpbmlzaCIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJJdGVtIiwiSW5wdXQiLCJUZXh0QXJlYSIsInZhbHVlIiwib25DaGFuZ2UiLCJyb3dzIiwiQnV0dG9uIiwiaHRtbFR5cGUiLCJsb2FkaW5nIiwiX2MiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1c7QUFDYjtBQUNOO0FBQ29CO0FBQ1Q7QUFFOUMsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUFDLElBQUEsRUFBaUI7RUFBQUMsRUFBQTtFQUFBLElBQVhDLElBQUksR0FBQUYsSUFBQSxDQUFKRSxJQUFJ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QSxJQUFBb0QsRUFBQTtBQUFBSyxZQUFBLENBQUFMLEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjBlODlhN2JlNzkwZjA2Y2FhNWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEFERF9DT01NRU5UX1JFUVVFU1QgfSBmcm9tIFwiLi4vdHlwZVwiO1xyXG5cclxuY29uc3QgQ29tbWVudEZvcm0gPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuICBjb25zdCB7IGFkZENvbW1lbnREb25lLCBhZGRDb21tZW50TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLnBvc3RcclxuICApO1xyXG4gIGNvbnN0IFtjb21tZW50VGV4dCwgb25DaGFuZ2VDb21tZW50VGV4dCwgc2V0Q29tbWVudFRleHRdID0gdXNlSW5wdXQoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhZGRDb21tZW50RG9uZSkge1xyXG4gICAgICBzZXRDb21tZW50VGV4dChcIlwiKTtcclxuICAgIH1cclxuICB9LCBbYWRkQ29tbWVudERvbmVdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocG9zdC5pZCwgY29tbWVudFRleHQpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IGNvbnRlbnQ6IGNvbW1lbnRUZXh0LCBwb3N0SWQ6IHBvc3QuaWQsIHVzZXJJZDogaWQgfSxcclxuICAgIH0pO1xyXG4gIH0sIFtjb21tZW50VGV4dCwgaWRdKTtcclxuICBjb25zb2xlLmxvZyhBRERfQ09NTUVOVF9SRVFVRVNUKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdENvbW1lbnR9PlxyXG4gICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgdmFsdWU9e2NvbW1lbnRUZXh0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudFRleHR9XHJcbiAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2FkZENvbW1lbnRMb2FkaW5nfT5cclxuICAgICAgICAgIOyCkOyVvVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuQ29tbWVudEZvcm0ucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=