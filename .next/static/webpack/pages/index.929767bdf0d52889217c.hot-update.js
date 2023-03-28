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
  isLoggedIn: false,
  isLoggingOut: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkxPQWRpbmciLCJpc0xvZ2dlZEluIiwiaXNMb2dnaW5nT3V0IiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJMT0dfSU5fUkVRVUVTVCIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJMT0dfT1VUX1JFUVVFU1QiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwiX29iamVjdFNwcmVhZCIsImlzTG9nZ2luZ0luIiwiTE9HX0lOX1NVQ0NFU1MiLCJuaWNrbmFtZSIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzRCO0FBRXJCLElBQU1BLFlBQVksR0FBRztFQUMxQkMsWUFBWSxFQUFFLEtBQUs7RUFDbkJDLFVBQVUsRUFBRSxLQUFLO0VBQ2pCQyxZQUFZLEVBQUUsS0FBSztFQUNuQkMsRUFBRSxFQUFFLElBQUk7RUFDUkMsVUFBVSxFQUFFLENBQUMsQ0FBQztFQUNkQyxTQUFTLEVBQUUsQ0FBQztBQUNkLENBQUM7QUFDTSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFJQyxJQUFJLEVBQUs7RUFDMUMsT0FBTztJQUFFQyxJQUFJLEVBQUVDLCtEQUFjO0lBQUVGLElBQUksRUFBSkE7RUFBSyxDQUFDO0FBQ3ZDLENBQUM7QUFFTSxJQUFNRyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFBLEVBQVM7RUFDdkMsT0FBTztJQUFFRixJQUFJLEVBQUVHLGdFQUFlQTtFQUFDLENBQUM7QUFDbEMsQ0FBQztBQUVELElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQXFDO0VBQUEsSUFBakNDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUdmLFlBQVk7RUFBQSxJQUFFa0IsTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQy9DLFFBQVFDLE1BQU0sQ0FBQ1QsSUFBSTtJQUNqQixLQUFLQywrREFBYztNQUNqQixPQUFBUyxhQUFBLENBQUFBLGFBQUEsS0FDS0wsS0FBSztRQUNSTSxXQUFXLEVBQUU7TUFBSTtJQUVyQixLQUFLQywrREFBYztNQUNqQixPQUFBRixhQUFBLENBQUFBLGFBQUEsS0FDS0wsS0FBSztRQUNSTSxXQUFXLEVBQUUsS0FBSztRQUNsQmxCLFVBQVUsRUFBRSxJQUFJO1FBQ2hCRSxFQUFFLEVBQUFlLGFBQUEsQ0FBQUEsYUFBQSxLQUFPRCxNQUFNLENBQUNWLElBQUk7VUFBRWMsUUFBUSxFQUFFO1FBQUk7TUFBRTtJQUUxQyxLQUFLQywrREFBYztNQUNqQixPQUFBSixhQUFBLENBQUFBLGFBQUEsS0FDS0wsS0FBSztRQUNSTSxXQUFXLEVBQUUsSUFBSTtRQUNqQmxCLFVBQVUsRUFBRTtNQUFLO0lBR3JCLEtBQUtVLGdFQUFlO01BQ2xCLE9BQUFPLGFBQUEsQ0FBQUEsYUFBQSxLQUNLTCxLQUFLO1FBQ1JYLFlBQVksRUFBRTtNQUFLO0lBRXZCLEtBQUtxQixnRUFBZTtNQUNsQixPQUFBTCxhQUFBLENBQUFBLGFBQUEsS0FDS0wsS0FBSztRQUNSWCxZQUFZLEVBQUUsS0FBSztRQUNuQkQsVUFBVSxFQUFFLEtBQUs7UUFDakJFLEVBQUUsRUFBRTtNQUFJO0lBRVosS0FBS3FCLGdFQUFlO01BQ2xCLE9BQUFOLGFBQUEsQ0FBQUEsYUFBQSxLQUNLTCxLQUFLO1FBQ1JYLFlBQVksRUFBRTtNQUFLO0lBRXZCO01BQ0UsT0FBT1csS0FBSztFQUFDO0FBRW5CLENBQUM7QUFFY0QsMEVBQVcsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45Mjk3NjdiZGYwZDUyODg5MjE3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBMT0dfSU5fRkFJTFVSRSxcclxuICBMT0dfSU5fU1VDQ0VTUyxcclxuICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgTE9HX09VVF9GQUlMVVJFLFxyXG4gIExPR19PVVRfU1VDQ0VTUyxcclxufSBmcm9tIFwiLi4vY29tcG9uZW50cy90eXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvZ0luTE9BZGluZzogZmFsc2UsXHJcbiAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgaXNMb2dnaW5nT3V0OiBmYWxzZSxcclxuICBtZTogbnVsbCxcclxuICBzaWduVXBEYXRhOiB7fSxcclxuICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBMT0dfSU5fUkVRVUVTVCwgZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogTE9HX09VVF9SRVFVRVNUIH07XHJcbn07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdJbjogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnaW5nSW46IGZhbHNlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgbWU6IHsgLi4uYWN0aW9uLmRhdGEsIG5pY2tuYW1lOiBcInloXCIgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnaW5nSW46IHRydWUsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnaW5nT3V0OiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2luZ091dDogZmFsc2UsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgbWU6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9