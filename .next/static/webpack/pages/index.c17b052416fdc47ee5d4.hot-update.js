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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var initialState = {
  logInLOAding: false,
  logInDone: false,
  loginError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  me: null,
  signUpData: {},
  loginData: {}
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkxPQWRpbmciLCJsb2dJbkRvbmUiLCJsb2dpbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsIkxPR19JTl9SRVFVRVNUIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIkxPR19PVVRfUkVRVUVTVCIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJfb2JqZWN0U3ByZWFkIiwiaXNMb2dnaW5nSW4iLCJMT0dfSU5fU1VDQ0VTUyIsImlzTG9nZ2VkSW4iLCJuaWNrbmFtZSIsIkxPR19JTl9GQUlMVVJFIiwiaXNMb2dnaW5nT3V0IiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzRCO0FBRXJCLElBQU1BLFlBQVksR0FBRztFQUMxQkMsWUFBWSxFQUFFLEtBQUs7RUFDbkJDLFNBQVMsRUFBRSxLQUFLO0VBQ2hCQyxVQUFVLEVBQUUsSUFBSTtFQUNoQkMsYUFBYSxFQUFFLEtBQUs7RUFDcEJDLFVBQVUsRUFBRSxLQUFLO0VBQ2pCQyxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsYUFBYSxFQUFFLEtBQUs7RUFDcEJDLFVBQVUsRUFBRSxLQUFLO0VBQ2pCQyxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsRUFBRSxFQUFFLElBQUk7RUFDUkMsVUFBVSxFQUFFLENBQUMsQ0FBQztFQUNkQyxTQUFTLEVBQUUsQ0FBQztBQUNkLENBQUM7QUFDTSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFJQyxJQUFJLEVBQUs7RUFDMUMsT0FBTztJQUFFQyxJQUFJLEVBQUVDLCtEQUFjO0lBQUVGLElBQUksRUFBSkE7RUFBSyxDQUFDO0FBQ3ZDLENBQUM7QUFFTSxJQUFNRyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFBLEVBQVM7RUFDdkMsT0FBTztJQUFFRixJQUFJLEVBQUVHLGdFQUFlQTtFQUFDLENBQUM7QUFDbEMsQ0FBQztBQUVELElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQXFDO0VBQUEsSUFBakNDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUdyQixZQUFZO0VBQUEsSUFBRXdCLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUMvQyxRQUFRQyxNQUFNLENBQUNULElBQUk7SUFDakIsS0FBS0MsK0RBQWM7TUFDakIsT0FBQVMsYUFBQSxDQUFBQSxhQUFBLEtBQ0tMLEtBQUs7UUFDUk0sV0FBVyxFQUFFO01BQUk7SUFFckIsS0FBS0MsK0RBQWM7TUFDakIsT0FBQUYsYUFBQSxDQUFBQSxhQUFBLEtBQ0tMLEtBQUs7UUFDUk0sV0FBVyxFQUFFLEtBQUs7UUFDbEJFLFVBQVUsRUFBRSxJQUFJO1FBQ2hCbEIsRUFBRSxFQUFBZSxhQUFBLENBQUFBLGFBQUEsS0FBT0QsTUFBTSxDQUFDVixJQUFJO1VBQUVlLFFBQVEsRUFBRTtRQUFJO01BQUU7SUFFMUMsS0FBS0MsK0RBQWM7TUFDakIsT0FBQUwsYUFBQSxDQUFBQSxhQUFBLEtBQ0tMLEtBQUs7UUFDUk0sV0FBVyxFQUFFLElBQUk7UUFDakJFLFVBQVUsRUFBRTtNQUFLO0lBR3JCLEtBQUtWLGdFQUFlO01BQ2xCLE9BQUFPLGFBQUEsQ0FBQUEsYUFBQSxLQUNLTCxLQUFLO1FBQ1JXLFlBQVksRUFBRTtNQUFLO0lBRXZCLEtBQUtDLGdFQUFlO01BQ2xCLE9BQUFQLGFBQUEsQ0FBQUEsYUFBQSxLQUNLTCxLQUFLO1FBQ1JXLFlBQVksRUFBRSxLQUFLO1FBQ25CSCxVQUFVLEVBQUUsS0FBSztRQUNqQmxCLEVBQUUsRUFBRTtNQUFJO0lBRVosS0FBS3VCLGdFQUFlO01BQ2xCLE9BQUFSLGFBQUEsQ0FBQUEsYUFBQSxLQUNLTCxLQUFLO1FBQ1JXLFlBQVksRUFBRTtNQUFLO0lBRXZCO01BQ0UsT0FBT1gsS0FBSztFQUFDO0FBRW5CLENBQUM7QUFFY0QsMEVBQVcsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMTdiMDUyNDE2ZmRjNDdlZTVkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBMT0dfSU5fRkFJTFVSRSxcclxuICBMT0dfSU5fU1VDQ0VTUyxcclxuICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgTE9HX09VVF9GQUlMVVJFLFxyXG4gIExPR19PVVRfU1VDQ0VTUyxcclxufSBmcm9tIFwiLi4vY29tcG9uZW50cy90eXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvZ0luTE9BZGluZzogZmFsc2UsXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dpbkVycm9yOiBudWxsLFxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gIGxvZ091dEVycm9yOiBudWxsLFxyXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gIG1lOiBudWxsLFxyXG4gIHNpZ25VcERhdGE6IHt9LFxyXG4gIGxvZ2luRGF0YToge30sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IExPR19JTl9SRVFVRVNULCBkYXRhIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBMT0dfT1VUX1JFUVVFU1QgfTtcclxufTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2luZ0luOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdJbjogZmFsc2UsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgICBtZTogeyAuLi5hY3Rpb24uZGF0YSwgbmlja25hbWU6IFwieWhcIiB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdJbjogdHJ1ZSxcclxuICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnaW5nT3V0OiBmYWxzZSxcclxuICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgICBtZTogbnVsbCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2luZ091dDogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=