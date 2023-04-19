webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../type */ "./type/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _this = undefined,
  _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\pages\\signup.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Signup = function Signup() {
  _s();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
      return state.user;
    }),
    signUpLoading = _useSelector.signUpLoading,
    signUpDone = _useSelector.signUpDone,
    signUpError = _useSelector.signUpError;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (signUpDone) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
    }
  }, [signUpDone]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (signUpError) {
      alert(signUpError);
    }
  }, signUpError);
  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(),
    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
    email = _useInput2[0],
    onChangeEmail = _useInput2[1];
  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(),
    _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
    password = _useInput4[0],
    onChangePassword = _useInput4[1];
  var _useInput5 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(),
    _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
    nickname = _useInput6[0],
    onChangenickname = _useInput6[1];
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
    term = _useState[0],
    setTerm = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
    termError = _useState2[0],
    setTermError = _useState2[1];
  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setTerm(e.target.checked);
    setTermError(false);
  });
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
    passwordCheck = _useState3[0],
    setPasswordCheck = _useState3[1];
  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
    passwordError = _useState4[0],
    setPasswordError = _useState4[1];
  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);
  var onSubmitSignup = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_7__["SIGN_UP_REQUEST"],
      data: {
        email: email,
        password: password,
        nickname: nickname
      }
    });
  }, [email, password, passwordCheck, term]);
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "\uD68C\uC6D0\uAC00\uC785")), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    onFinish: onSubmitSignup,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, "\uC774\uBA54\uC77C"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    value: email,
    onChange: onChangeEmail,
    type: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, "\uB2C9\uB124\uC784"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    value: nickname,
    onChange: onChangenickname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, "\uBE44\uBBFC\uBC88\uD638"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    type: "password",
    value: password,
    onChange: onChangePassword,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, "\uBE44\uBBFC\uBC88\uD638 \uCCB4\uD06C"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    type: "password",
    value: passwordCheck,
    onChange: onChangePasswordCheck,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }), passwordError && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 29
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
    checked: term,
    onChange: onChangeTerm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, "\uB3D9\uC758\uD569\uB2C8\uAE4C?"), termError && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: signUpLoading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, "\uD68C\uC6D0\uAC00\uC785"))));
};
_s(Signup, "qcc7J38JAn7UKZZDP/Bt3k/1k5o=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"]];
});
_c = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);
var _c;
$RefreshReg$(_c, "Signup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ251cCIsIl9zIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIl91c2VTZWxlY3RvciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsInVzZUVmZmVjdCIsIlJvdXRlciIsInB1c2giLCJhbGVydCIsIl91c2VJbnB1dCIsInVzZUlucHV0IiwiX3VzZUlucHV0MiIsIl9zbGljZWRUb0FycmF5IiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwiX3VzZUlucHV0MyIsIl91c2VJbnB1dDQiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJfdXNlSW5wdXQ1IiwiX3VzZUlucHV0NiIsIm5pY2tuYW1lIiwib25DaGFuZ2VuaWNrbmFtZSIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwidGVybSIsInNldFRlcm0iLCJfdXNlU3RhdGUyIiwidGVybUVycm9yIiwic2V0VGVybUVycm9yIiwib25DaGFuZ2VUZXJtIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwiY2hlY2tlZCIsIl91c2VTdGF0ZTMiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsIl91c2VTdGF0ZTQiLCJwYXNzd29yZEVycm9yIiwic2V0UGFzc3dvcmRFcnJvciIsIm9uQ2hhbmdlUGFzc3dvcmRDaGVjayIsInZhbHVlIiwib25TdWJtaXRTaWdudXAiLCJ0eXBlIiwiU0lHTl9VUF9SRVFVRVNUIiwiZGF0YSIsIl9fanN4IiwiQXBwTGF5b3V0IiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIkhlYWQiLCJGb3JtIiwib25GaW5pc2giLCJJbnB1dCIsIm9uQ2hhbmdlIiwiQ2hlY2tib3giLCJCdXR0b24iLCJodG1s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QUFBO0FBQUF1RCxFQUFBLEdBcEJ6Q3ZFLE1BQU07QUFtR0dBLHFFQUFNLEVBQUM7QUFBQSxJQUFBdUUsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjY4YTc4Y2Q5NTAxODZhYmNjZGEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIENoZWNrYm94IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG5pbXBvcnQgeyBTSUdOX1VQX1JFUVVFU1QgfSBmcm9tIFwiLi4vdHlwZVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IHNpZ25VcExvYWRpbmcsIHNpZ25VcERvbmUsIHNpZ25VcEVycm9yIH0gPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUudXNlclxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2lnblVwRG9uZSkge1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9XHJcbiAgfSwgW3NpZ25VcERvbmVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzaWduVXBFcnJvcikge1xyXG4gICAgICBhbGVydChzaWduVXBFcnJvcik7XHJcbiAgICB9XHJcbiAgfSwgc2lnblVwRXJyb3IpO1xyXG5cclxuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoKTtcclxuICBjb25zdCBbbmlja25hbWUsIG9uQ2hhbmdlbmlja25hbWVdID0gdXNlSW5wdXQoKTtcclxuXHJcbiAgY29uc3QgW3Rlcm0sIHNldFRlcm1dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdGVybUVycm9yLCBzZXRUZXJtRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlVGVybSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRUZXJtKGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgc2V0VGVybUVycm9yKGZhbHNlKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW3Bhc3N3b3JkQ2hlY2ssIHNldFBhc3N3b3JkQ2hlY2tdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbcGFzc3dvcmRFcnJvciwgc2V0UGFzc3dvcmRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZENoZWNrID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBzZXRQYXNzd29yZENoZWNrKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgc2V0UGFzc3dvcmRFcnJvcihlLnRhcmdldC52YWx1ZSAhPT0gcGFzc3dvcmQpO1xyXG4gICAgfSxcclxuICAgIFtwYXNzd29yZF1cclxuICApO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdFNpZ251cCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChwYXNzd29yZCAhPT0gcGFzc3dvcmRDaGVjaykge1xyXG4gICAgICByZXR1cm4gc2V0UGFzc3dvcmRFcnJvcih0cnVlKTtcclxuICAgIH1cclxuICAgIGlmICghdGVybSkge1xyXG4gICAgICByZXR1cm4gc2V0VGVybUVycm9yKHRydWUpO1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsgZW1haWwsIHBhc3N3b3JkLCBuaWNrbmFtZSB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW2VtYWlsLCBwYXNzd29yZCwgcGFzc3dvcmRDaGVjaywgdGVybV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcExheW91dD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPu2ajOybkOqwgOyehTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0U2lnbnVwfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsPuydtOuplOydvDwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxJbnB1dCB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfSB0eXBlPVwiZW1haWxcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWw+64uJ64Sk7J6EPC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPElucHV0IHZhbHVlPXtuaWNrbmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdlbmlja25hbWV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbD7ruYTrr7zrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsPuu5hOuvvOuyiO2YuCDssrTtgaw8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkQ2hlY2t9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkQ2hlY2t9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge3Bhc3N3b3JkRXJyb3IgJiYgPGRpdj7ruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC48L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxDaGVja2JveCBjaGVja2VkPXt0ZXJtfSBvbkNoYW5nZT17b25DaGFuZ2VUZXJtfT5cclxuICAgICAgICAgICAg64+Z7J2Y7ZWp64uI6rmMP1xyXG4gICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgIHt0ZXJtRXJyb3IgJiYgPGRpdj7slb3qtIDsl5Ag64+Z7J2Y7ZWY7IWU7JW8IO2VqeuLiOuLpDwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17c2lnblVwTG9hZGluZ30+XHJcbiAgICAgICAgICAgIO2ajOybkOqwgOyehVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvQXBwTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=