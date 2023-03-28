webpackHotUpdate_N_E("pages/_app",{

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
  logInLoading: false,
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
var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: "yh",
    id: 1,
    Posts: [],
    Followings: [],
    Followers: []
  });
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
        logInLoading: true,
        loginError: null,
        logInDone: false
      });
    case _components_type__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: false,
        logInDone: true,
        me: dummyUser(action.data)
      });
    case _components_type__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: false,
        loginError: action.error
      });
    case _components_type__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: t
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dpbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJkdW1teVVzZXIiLCJkYXRhIiwiX29iamVjdFNwcmVhZCIsIm5pY2tuYW1lIiwiaWQiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwiTE9HX0lOX1JFUVVFU1QiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiTE9HX09VVF9SRVFVRVNUIiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJlcnJvciIsInQiLCJMT0dfT1VUX1NVQ0NFU1MiLCJpc0xvZ2dpbmdPdXQiLCJpc0xvZ2dlZEluIiwiTE9HX09VVF9GQUlMVVJFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzRCO0FBRXJCLElBQU1BLFlBQVksR0FBRztFQUMxQkMsWUFBWSxFQUFFLEtBQUs7RUFDbkJDLFNBQVMsRUFBRSxLQUFLO0VBQ2hCQyxVQUFVLEVBQUUsSUFBSTtFQUNoQkMsYUFBYSxFQUFFLEtBQUs7RUFDcEJDLFVBQVUsRUFBRSxLQUFLO0VBQ2pCQyxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsYUFBYSxFQUFFLEtBQUs7RUFDcEJDLFVBQVUsRUFBRSxLQUFLO0VBQ2pCQyxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsRUFBRSxFQUFFLElBQUk7RUFDUkMsVUFBVSxFQUFFLENBQUMsQ0FBQztFQUNkQyxTQUFTLEVBQUUsQ0FBQztBQUNkLENBQUM7QUFFRCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSUMsSUFBSTtFQUFBLE9BQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNsQkQsSUFBSTtJQUNQRSxRQUFRLEVBQUUsSUFBSTtJQUNkQyxFQUFFLEVBQUUsQ0FBQztJQUNMQyxLQUFLLEVBQUUsRUFBRTtJQUNUQyxVQUFVLEVBQUUsRUFBRTtJQUNkQyxTQUFTLEVBQUU7RUFBRTtBQUFBLENBQ2I7QUFDSyxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFJUCxJQUFJLEVBQUs7RUFDMUMsT0FBTztJQUFFUSxJQUFJLEVBQUVDLCtEQUFjO0lBQUVULElBQUksRUFBSkE7RUFBSyxDQUFDO0FBQ3ZDLENBQUM7QUFFTSxJQUFNVSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFBLEVBQVM7RUFDdkMsT0FBTztJQUFFRixJQUFJLEVBQUVHLGdFQUFlQTtFQUFDLENBQUM7QUFDbEMsQ0FBQztBQUVELElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQXFDO0VBQUEsSUFBakNDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUc1QixZQUFZO0VBQUEsSUFBRStCLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUMvQyxRQUFRQyxNQUFNLENBQUNULElBQUk7SUFDakIsS0FBS0MsK0RBQWM7TUFDakIsT0FBQVIsYUFBQSxDQUFBQSxhQUFBLEtBQ0tZLEtBQUs7UUFDUjFCLFlBQVksRUFBRSxJQUFJO1FBQ2xCRSxVQUFVLEVBQUUsSUFBSTtRQUNoQkQsU0FBUyxFQUFFO01BQUs7SUFFcEIsS0FBSzhCLCtEQUFjO01BQ2pCLE9BQUFqQixhQUFBLENBQUFBLGFBQUEsS0FDS1ksS0FBSztRQUNSMUIsWUFBWSxFQUFFLEtBQUs7UUFDbkJDLFNBQVMsRUFBRSxJQUFJO1FBQ2ZRLEVBQUUsRUFBRUcsU0FBUyxDQUFDa0IsTUFBTSxDQUFDakIsSUFBSTtNQUFDO0lBRTlCLEtBQUttQiwrREFBYztNQUNqQixPQUFBbEIsYUFBQSxDQUFBQSxhQUFBLEtBQ0tZLEtBQUs7UUFDUjFCLFlBQVksRUFBRSxLQUFLO1FBQ25CRSxVQUFVLEVBQUU0QixNQUFNLENBQUNHO01BQUs7SUFHNUIsS0FBS1QsZ0VBQWU7TUFDbEIsT0FBQVYsYUFBQSxDQUFBQSxhQUFBLEtBQ0tZLEtBQUs7UUFDUnZCLGFBQWEsRUFBRStCO01BQUM7SUFFcEIsS0FBS0MsZ0VBQWU7TUFDbEIsT0FBQXJCLGFBQUEsQ0FBQUEsYUFBQSxLQUNLWSxLQUFLO1FBQ1JVLFlBQVksRUFBRSxLQUFLO1FBQ25CQyxVQUFVLEVBQUUsS0FBSztRQUNqQjVCLEVBQUUsRUFBRTtNQUFJO0lBRVosS0FBSzZCLGdFQUFlO01BQ2xCLE9BQUF4QixhQUFBLENBQUFBLGFBQUEsS0FDS1ksS0FBSztRQUNSVSxZQUFZLEVBQUU7TUFBSztJQUV2QjtNQUNFLE9BQU9WLEtBQUs7RUFBQztBQUVuQixDQUFDO0FBRWNELDBFQUFXLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wNjRjNzliNzdjNDg5M2JlOTRkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBMT0dfSU5fRkFJTFVSRSxcclxuICBMT0dfSU5fU1VDQ0VTUyxcclxuICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgTE9HX09VVF9GQUlMVVJFLFxyXG4gIExPR19PVVRfU1VDQ0VTUyxcclxufSBmcm9tIFwiLi4vY29tcG9uZW50cy90eXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dpbkVycm9yOiBudWxsLFxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gIGxvZ091dEVycm9yOiBudWxsLFxyXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gIG1lOiBudWxsLFxyXG4gIHNpZ25VcERhdGE6IHt9LFxyXG4gIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAuLi5kYXRhLFxyXG4gIG5pY2tuYW1lOiBcInloXCIsXHJcbiAgaWQ6IDEsXHJcbiAgUG9zdHM6IFtdLFxyXG4gIEZvbGxvd2luZ3M6IFtdLFxyXG4gIEZvbGxvd2VyczogW10sXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBMT0dfSU5fUkVRVUVTVCwgZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogTE9HX09VVF9SRVFVRVNUIH07XHJcbn07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2dJbkxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgbG9naW5FcnJvcjogbnVsbCxcclxuICAgICAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGxvZ0luRG9uZTogdHJ1ZSxcclxuICAgICAgICBtZTogZHVtbXlVc2VyKGFjdGlvbi5kYXRhKSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBsb2dpbkVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9nT3V0TG9hZGluZzogdCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2luZ091dDogZmFsc2UsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgbWU6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9