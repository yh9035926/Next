webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/type */ "./components/type/index.js");

var _initialState;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var initialState = (_initialState = {
  logInLOAding: false,
  logInDone: false,
  loginError: null,
  logOutLOAding: false,
  logOutDone: false,
  logOutError: null
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "logInLOAding", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "logInDone", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "loginError", null), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "me", null), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "signUpData", {}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "loginData", {}), _initialState);
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: _components_type__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_REQUEST"],
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: _components_type__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_REQUEST"]
  };
};
var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _components_type__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingIn: true
      });
    case _components_type__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingIn: false,
        isLoggedIn: true,
        me: _objectSpread(_objectSpread({}, action.data), {}, {
          nickname: "yh"
        })
      });
    case _components_type__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingIn: true,
        isLoggedIn: false
      });
    case _components_type__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingOut: false
      });
    case _components_type__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingOut: false,
        isLoggedIn: false,
        me: null
      });
    case _components_type__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingOut: false
      });
    default:
      return state;
  }
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJfaW5pdGlhbFN0YXRlIiwibG9nSW5MT0FkaW5nIiwibG9nSW5Eb25lIiwibG9naW5FcnJvciIsImxvZ091dExPQWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJfZGVmaW5lUHJvcGVydHkiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsIkxPR19JTl9SRVFVRVNUIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIkxPR19PVVRfUkVRVUVTVCIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJfb2JqZWN0U3ByZWFkIiwiaXNMb2dnaW5nSW4iLCJMT0dfSU5fU1VDQ0VTUyIsImlzTG9nZ2VkSW4iLCJtZSIsIm5pY2tuYW1lIiwiTE9HX0lOX0ZBSUxVUkUiLCJpc0xvZ2dpbmdPdXQiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzRCO0FBRXJCLElBQU1BLFlBQVksSUFBQUMsYUFBQTtFQUN2QkMsWUFBWSxFQUFFLEtBQUs7RUFDbkJDLFNBQVMsRUFBRSxLQUFLO0VBQ2hCQyxVQUFVLEVBQUUsSUFBSTtFQUNoQkMsYUFBYSxFQUFFLEtBQUs7RUFDcEJDLFVBQVUsRUFBRSxLQUFLO0VBQ2pCQyxXQUFXLEVBQUU7QUFBSSxHQUFBQyx5RkFBQSxDQUFBUCxhQUFBLGtCQUNILEtBQUssR0FBQU8seUZBQUEsQ0FBQVAsYUFBQSxlQUNSLEtBQUssR0FBQU8seUZBQUEsQ0FBQVAsYUFBQSxnQkFDSixJQUFJLEdBQUFPLHlGQUFBLENBQUFQLGFBQUEsUUFDWixJQUFJLEdBQUFPLHlGQUFBLENBQUFQLGFBQUEsZ0JBQ0ksQ0FBQyxDQUFDLEdBQUFPLHlGQUFBLENBQUFQLGFBQUEsZUFDSCxDQUFDLENBQUMsR0FBQUEsYUFBQSxDQUNkO0FBQ00sSUFBTVEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBSUMsSUFBSSxFQUFLO0VBQzFDLE9BQU87SUFBRUMsSUFBSSxFQUFFQywrREFBYztJQUFFRixJQUFJLEVBQUpBO0VBQUssQ0FBQztBQUN2QyxDQUFDO0FBRU0sSUFBTUcsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQkEsQ0FBQSxFQUFTO0VBQ3ZDLE9BQU87SUFBRUYsSUFBSSxFQUFFRyxnRUFBZUE7RUFBQyxDQUFDO0FBQ2xDLENBQUM7QUFFRCxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFxQztFQUFBLElBQWpDQyxLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHakIsWUFBWTtFQUFBLElBQUVvQixNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDL0MsUUFBUUMsTUFBTSxDQUFDVCxJQUFJO0lBQ2pCLEtBQUtDLCtEQUFjO01BQ2pCLE9BQUFTLGFBQUEsQ0FBQUEsYUFBQSxLQUNLTCxLQUFLO1FBQ1JNLFdBQVcsRUFBRTtNQUFJO0lBRXJCLEtBQUtDLCtEQUFjO01BQ2pCLE9BQUFGLGFBQUEsQ0FBQUEsYUFBQSxLQUNLTCxLQUFLO1FBQ1JNLFdBQVcsRUFBRSxLQUFLO1FBQ2xCRSxVQUFVLEVBQUUsSUFBSTtRQUNoQkMsRUFBRSxFQUFBSixhQUFBLENBQUFBLGFBQUEsS0FBT0QsTUFBTSxDQUFDVixJQUFJO1VBQUVnQixRQUFRLEVBQUU7UUFBSTtNQUFFO0lBRTFDLEtBQUtDLCtEQUFjO01BQ2pCLE9BQUFOLGFBQUEsQ0FBQUEsYUFBQSxLQUNLTCxLQUFLO1FBQ1JNLFdBQVcsRUFBRSxJQUFJO1FBQ2pCRSxVQUFVLEVBQUU7TUFBSztJQUdyQixLQUFLVixnRUFBZTtNQUNsQixPQUFBTyxhQUFBLENBQUFBLGFBQUEsS0FDS0wsS0FBSztRQUNSWSxZQUFZLEVBQUU7TUFBSztJQUV2QixLQUFLQyxnRUFBZTtNQUNsQixPQUFBUixhQUFBLENBQUFBLGFBQUEsS0FDS0wsS0FBSztRQUNSWSxZQUFZLEVBQUUsS0FBSztRQUNuQkosVUFBVSxFQUFFLEtBQUs7UUFDakJDLEVBQUUsRUFBRTtNQUFJO0lBRVosS0FBS0ssZ0VBQWU7TUFDbEIsT0FBQVQsYUFBQSxDQUFBQSxhQUFBLEtBQ0tMLEtBQUs7UUFDUlksWUFBWSxFQUFFO01BQUs7SUFFdkI7TUFDRSxPQUFPWixLQUFLO0VBQUM7QUFFbkIsQ0FBQztBQUVjRCwwRUFBVyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYxMDMwNjdlMmI3ZDg4OTRkMmNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIExPR19JTl9GQUlMVVJFLFxyXG4gIExPR19JTl9TVUNDRVNTLFxyXG4gIExPR19PVVRfUkVRVUVTVCxcclxuICBMT0dfSU5fUkVRVUVTVCxcclxuICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgTE9HX09VVF9TVUNDRVNTLFxyXG59IGZyb20gXCIuLi9jb21wb25lbnRzL3R5cGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9nSW5MT0FkaW5nOiBmYWxzZSxcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ2luRXJyb3I6IG51bGwsXHJcbiAgbG9nT3V0TE9BZGluZzogZmFsc2UsXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgbG9nSW5MT0FkaW5nOiBmYWxzZSxcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ2luRXJyb3I6IG51bGwsXHJcbiAgbWU6IG51bGwsXHJcbiAgc2lnblVwRGF0YToge30sXHJcbiAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogTE9HX0lOX1JFUVVFU1QsIGRhdGEgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IExPR19PVVRfUkVRVUVTVCB9O1xyXG59O1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnaW5nSW46IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2luZ0luOiBmYWxzZSxcclxuICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4gICAgICAgIG1lOiB7IC4uLmFjdGlvbi5kYXRhLCBuaWNrbmFtZTogXCJ5aFwiIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2luZ0luOiB0cnVlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2luZ091dDogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgIG1lOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnaW5nT3V0OiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==