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
        logOutLoading: true,
        logOutDone: false,
        logOutError: n
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dpbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJkdW1teVVzZXIiLCJkYXRhIiwiX29iamVjdFNwcmVhZCIsIm5pY2tuYW1lIiwiaWQiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwiTE9HX0lOX1JFUVVFU1QiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiTE9HX09VVF9SRVFVRVNUIiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJlcnJvciIsIm4iLCJMT0dfT1VUX1NVQ0NFU1MiLCJpc0xvZ2dpbmdPdXQiLCJpc0xvZ2dlZEluIiwiTE9HX09VVF9GQUlMVVJFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzRCO0FBRXJCLElBQU1BLFlBQVksR0FBRztFQUMxQkMsWUFBWSxFQUFFLEtBQUs7RUFDbkJDLFNBQVMsRUFBRSxLQUFLO0VBQ2hCQyxVQUFVLEVBQUUsSUFBSTtFQUNoQkMsYUFBYSxFQUFFLEtBQUs7RUFDcEJDLFVBQVUsRUFBRSxLQUFLO0VBQ2pCQyxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsYUFBYSxFQUFFLEtBQUs7RUFDcEJDLFVBQVUsRUFBRSxLQUFLO0VBQ2pCQyxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsRUFBRSxFQUFFLElBQUk7RUFDUkMsVUFBVSxFQUFFLENBQUMsQ0FBQztFQUNkQyxTQUFTLEVBQUUsQ0FBQztBQUNkLENBQUM7QUFFRCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSUMsSUFBSTtFQUFBLE9BQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNsQkQsSUFBSTtJQUNQRSxRQUFRLEVBQUUsSUFBSTtJQUNkQyxFQUFFLEVBQUUsQ0FBQztJQUNMQyxLQUFLLEVBQUUsRUFBRTtJQUNUQyxVQUFVLEVBQUUsRUFBRTtJQUNkQyxTQUFTLEVBQUU7RUFBRTtBQUFBLENBQ2I7QUFDSyxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFJUCxJQUFJLEVBQUs7RUFDMUMsT0FBTztJQUFFUSxJQUFJLEVBQUVDLCtEQUFjO0lBQUVULElBQUksRUFBSkE7RUFBSyxDQUFDO0FBQ3ZDLENBQUM7QUFFTSxJQUFNVSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFBLEVBQVM7RUFDdkMsT0FBTztJQUFFRixJQUFJLEVBQUVHLGdFQUFlQTtFQUFDLENBQUM7QUFDbEMsQ0FBQztBQUVELElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQXFDO0VBQUEsSUFBakNDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUc1QixZQUFZO0VBQUEsSUFBRStCLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUMvQyxRQUFRQyxNQUFNLENBQUNULElBQUk7SUFDakIsS0FBS0MsK0RBQWM7TUFDakIsT0FBQVIsYUFBQSxDQUFBQSxhQUFBLEtBQ0tZLEtBQUs7UUFDUjFCLFlBQVksRUFBRSxJQUFJO1FBQ2xCRSxVQUFVLEVBQUUsSUFBSTtRQUNoQkQsU0FBUyxFQUFFO01BQUs7SUFFcEIsS0FBSzhCLCtEQUFjO01BQ2pCLE9BQUFqQixhQUFBLENBQUFBLGFBQUEsS0FDS1ksS0FBSztRQUNSMUIsWUFBWSxFQUFFLEtBQUs7UUFDbkJDLFNBQVMsRUFBRSxJQUFJO1FBQ2ZRLEVBQUUsRUFBRUcsU0FBUyxDQUFDa0IsTUFBTSxDQUFDakIsSUFBSTtNQUFDO0lBRTlCLEtBQUttQiwrREFBYztNQUNqQixPQUFBbEIsYUFBQSxDQUFBQSxhQUFBLEtBQ0tZLEtBQUs7UUFDUjFCLFlBQVksRUFBRSxLQUFLO1FBQ25CRSxVQUFVLEVBQUU0QixNQUFNLENBQUNHO01BQUs7SUFHNUIsS0FBS1QsZ0VBQWU7TUFDbEIsT0FBQVYsYUFBQSxDQUFBQSxhQUFBLEtBQ0tZLEtBQUs7UUFDUnZCLGFBQWEsRUFBRSxJQUFJO1FBQ25CQyxVQUFVLEVBQUUsS0FBSztRQUNqQkMsV0FBVyxFQUFDNkI7TUFBQztJQUVqQixLQUFLQyxnRUFBZTtNQUNsQixPQUFBckIsYUFBQSxDQUFBQSxhQUFBLEtBQ0tZLEtBQUs7UUFDUlUsWUFBWSxFQUFFLEtBQUs7UUFDbkJDLFVBQVUsRUFBRSxLQUFLO1FBQ2pCNUIsRUFBRSxFQUFFO01BQUk7SUFFWixLQUFLNkIsZ0VBQWU7TUFDbEIsT0FBQXhCLGFBQUEsQ0FBQUEsYUFBQSxLQUNLWSxLQUFLO1FBQ1JVLFlBQVksRUFBRTtNQUFLO0lBRXZCO01BQ0UsT0FBT1YsS0FBSztFQUFDO0FBRW5CLENBQUM7QUFFY0QsMEVBQVcsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmY3Zjk0ZjM5ZTdjNTQ2NDdiNTVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIExPR19JTl9GQUlMVVJFLFxyXG4gIExPR19JTl9TVUNDRVNTLFxyXG4gIExPR19PVVRfUkVRVUVTVCxcclxuICBMT0dfSU5fUkVRVUVTVCxcclxuICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgTE9HX09VVF9TVUNDRVNTLFxyXG59IGZyb20gXCIuLi9jb21wb25lbnRzL3R5cGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ2luRXJyb3I6IG51bGwsXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsXHJcbiAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgbWU6IG51bGwsXHJcbiAgc2lnblVwRGF0YToge30sXHJcbiAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4gIC4uLmRhdGEsXHJcbiAgbmlja25hbWU6IFwieWhcIixcclxuICBpZDogMSxcclxuICBQb3N0czogW10sXHJcbiAgRm9sbG93aW5nczogW10sXHJcbiAgRm9sbG93ZXJzOiBbXSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IExPR19JTl9SRVFVRVNULCBkYXRhIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBMT0dfT1VUX1JFUVVFU1QgfTtcclxufTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvZ0luTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBsb2dpbkVycm9yOiBudWxsLFxyXG4gICAgICAgIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvZ0luTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgbG9nSW5Eb25lOiB0cnVlLFxyXG4gICAgICAgIG1lOiBkdW1teVVzZXIoYWN0aW9uLmRhdGEpLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGxvZ2luRXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2dPdXRMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gICAgICAgIGxvZ091dEVycm9yOm5cclxuICAgICAgfTtcclxuICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2luZ091dDogZmFsc2UsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgbWU6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9