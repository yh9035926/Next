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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");

var _this = undefined,
  _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\pages\\signup.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Signup = function Signup() {
  _s();
  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(),
    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
    id = _useInput2[0],
    onChangeId = _useInput2[1];
  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(),
    _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
    password = _useInput4[0],
    onChangePassword = _useInput4[1];
  var _useInput5 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(),
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
    console.log(id, password);
    alert("회원가입이 완료되었습니다");
  }, [id, password]);
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "\uD68C\uC6D0\uAC00\uC785")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onFinish: onSubmitSignup,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    value: id,
    onChange: onChangeId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "\uB2C9\uB124\uC784"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    value: nickname,
    onChange: onChangenickname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "\uBE44\uBBFC\uBC88\uD638"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "password",
    value: password,
    onChange: onChangePassword,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "\uBE44\uBBFC\uBC88\uD638 \uCCB4\uD06C"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "password",
    value: passwordCheck,
    onChange: onChangePasswordCheck,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }), passwordError && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    checked: term,
    onChange: onChangeTerm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, "\uB3D9\uC758\uD569\uB2C8\uAE4C?"), termError && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, "\uD68C\uC6D0\uAC00\uC785")));
};
_s(Signup, "pA/UscSyzAVwpmMD9wVrJ+m8sTQ=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ251cCIsIl9zIiwiX3VzZUlucHV0IiwidXNlSW5wdXQiLCJfdXNlSW5wdXQyIiwiX3NsaWNlZFRvQXJyYXkiLCJpZCIsIm9uQ2hhbmdlSWQiLCJfdXNlSW5wdXQzIiwiX3VzZUlucHV0NCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsIl91c2VJbnB1dDUiLCJfdXNlSW5wdXQ2Iiwibmlja25hbWUiLCJvbkNoYW5nZW5pY2tuYW1lIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJ0ZXJtIiwic2V0VGVybSIsIl91c2VTdGF0ZTIiLCJ0ZXJtRXJyb3IiLCJzZXRUZXJtRXJyb3IiLCJvbkNoYW5nZVRlcm0iLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJjaGVja2VkIiwiX3VzZVN0YXRlMyIsInBhc3N3b3JkQ2hlY2siLCJzZXRQYXNzd29yZENoZWNrIiwiX3VzZVN0YXRlNCIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwib25DaGFuZ2VQYXNzd29yZENoZWNrIiwidmFsdWUiLCJvblN1Ym1pdFNpZ251cCIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsIl9fanN4IiwiQXBwTGF5b3V0IiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIkhlYWQiLCJGb3JtIiwib25GaW5pc2giLCJJbnB1dCIsIm9uQ2hhbmdlIiwidHlwZSIsIkNoZWNrYm94IiwiQnV0dG9uIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNRO0FBQ25CO0FBQ3dCO0FBQ2pCO0FBQ0s7QUFDekMsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUEsRUFBUztFQUFBQyxFQUFBO0VBQ25CLElBQUFDLFNB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QUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSx3QkFBa0IsRUFDbEJSLEtBQUE7SUFBQUUsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsRUFBTSxFQUNOUixLQUFBLENBQUNZLDBDQUFLO0lBQUNqQixLQUFLLEVBQUU3QixFQUFHO0lBQUMrQyxRQUFRLEVBQUU5QyxVQUFXO0lBQUFtQyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxFQUFHLENBQ3RDLEVBQ05SLEtBQUE7SUFBQUUsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDRVIsS0FBQTtJQUFBRSxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSx3QkFBa0IsRUFDbEJSLEtBQUE7SUFBQUUsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsRUFBTSxFQUNOUixLQUFBLENBQUNZLDBDQUFLO0lBQUNqQixLQUFLLEVBQUVyQixRQUFTO0lBQUN1QyxRQUFRLEVBQUV0QyxnQkFBaUI7SUFBQTJCLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEVBQUcsQ0FDbEQsRUFDTlIsS0FBQTtJQUFBRSxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNFUixLQUFBO0lBQUFFLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLDhCQUFtQixFQUNuQlIsS0FBQTtJQUFBRSxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxFQUFNLEVBQ05SLEtBQUEsQ0FBQ1ksMENBQUs7SUFBQ0UsSUFBSSxFQUFDLFVBQVU7SUFBQ25CLEtBQUssRUFBRXpCLFFBQVM7SUFBQzJDLFFBQVEsRUFBRTFDLGdCQUFpQjtJQUFBK0IsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsRUFBRyxDQUNsRSxFQUNOUixLQUFBO0lBQUFFLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ0VSLEtBQUE7SUFBQUUsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsMkNBQXNCLEVBQ3RCUixLQUFBO0lBQUFFLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEVBQU0sRUFDTlIsS0FBQSxDQUFDWSwwQ0FBSztJQUNKRSxJQUFJLEVBQUMsVUFBVTtJQUNmbkIsS0FBSyxFQUFFTixhQUFjO0lBQ3JCd0IsUUFBUSxFQUFFbkIscUJBQXNCO0lBQUFRLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEVBQ2hDLEVBQ0RoQixhQUFhLElBQUlRLEtBQUE7SUFBQUUsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsdUZBQTJCLENBQ3pDLEVBQ05SLEtBQUE7SUFBQUUsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDRVIsS0FBQSxDQUFDZSw2Q0FBUTtJQUFDNUIsT0FBTyxFQUFFVCxJQUFLO0lBQUNtQyxRQUFRLEVBQUU5QixZQUFhO0lBQUFtQixNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxxQ0FFckMsRUFDVjNCLFNBQVMsSUFBSW1CLEtBQUE7SUFBQUUsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsMEVBQXdCLENBQ2xDLEVBQ05SLEtBQUEsQ0FBQ2dCLDJDQUFNO0lBQUNGLElBQUksRUFBQyxTQUFTO0lBQUFaLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLDhCQUFjLENBQy9CLENBQ0c7QUFFaEIsQ0FBQztBQUFDL0MsRUFBQSxDQW5FSUQsTUFBTTtFQUFBLFFBQ2VHLHVEQUFRLEVBQ0lBLHVEQUFRLEVBQ1JBLHVEQUFRO0FBQUE7QUFBQXNELEVBQUEsR0FIekN6RCxNQUFNO0FBcUVHQSxxRUFBTSxFQUFDO0FBQUEsSUFBQXlELEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC44OGE2ZTc0ZmRiM2VlMjRkNDAyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XHJcbmNvbnN0IFNpZ251cCA9ICgpID0+IHtcclxuICBjb25zdCBbaWQsIG9uQ2hhbmdlSWRdID0gdXNlSW5wdXQoKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoKTtcclxuICBjb25zdCBbbmlja25hbWUsIG9uQ2hhbmdlbmlja25hbWVdID0gdXNlSW5wdXQoKTtcclxuXHJcbiAgY29uc3QgW3Rlcm0sIHNldFRlcm1dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdGVybUVycm9yLCBzZXRUZXJtRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlVGVybSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRUZXJtKGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbcGFzc3dvcmRDaGVjaywgc2V0UGFzc3dvcmRDaGVja10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtwYXNzd29yZEVycm9yLCBzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkQ2hlY2sgPSB1c2VDYWxsYmFjayhcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIHNldFBhc3N3b3JkQ2hlY2soZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICBzZXRQYXNzd29yZEVycm9yKGUudGFyZ2V0LnZhbHVlICE9PSBwYXNzd29yZCk7XHJcbiAgICB9LFxyXG4gICAgW3Bhc3N3b3JkXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0U2lnbnVwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaWQsIHBhc3N3b3JkKTtcclxuICAgIGFsZXJ0KFwi7ZqM7JuQ6rCA7J6F7J20IOyZhOujjOuQmOyXiOyKteuLiOuLpFwiKTtcclxuICB9LCBbaWQsIHBhc3N3b3JkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+7ZqM7JuQ6rCA7J6FPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRTaWdudXB9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWw+7JWE7J2065SUPC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPElucHV0IHZhbHVlPXtpZH0gb25DaGFuZ2U9e29uQ2hhbmdlSWR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbD7ri4nrhKTsnoQ8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8SW5wdXQgdmFsdWU9e25pY2tuYW1lfSBvbkNoYW5nZT17b25DaGFuZ2VuaWNrbmFtZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsPuu5hOuvvOuyiO2YuDwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWw+67mE66+867KI7Zi4IOyytO2BrDwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmRDaGVja31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmRDaGVja31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7cGFzc3dvcmRFcnJvciAmJiA8ZGl2Puu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukLjwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPENoZWNrYm94IGNoZWNrZWQ9e3Rlcm19IG9uQ2hhbmdlPXtvbkNoYW5nZVRlcm19PlxyXG4gICAgICAgICAgICDrj5nsnZjtlanri4jquYw/XHJcbiAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAge3Rlcm1FcnJvciAmJiA8ZGl2PuyVveq0gOyXkCDrj5nsnZjtlZjshZTslbwg7ZWp64uI64ukPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIj7tmozsm5DqsIDsnoU8L0J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9BcHBMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==