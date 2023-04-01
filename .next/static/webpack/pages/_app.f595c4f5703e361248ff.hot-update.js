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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type */ "./type/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
  changeNIcknameLoading: false,
  changeNIcknameDone: false,
  changeNIcknameError: null,
  me: null,
  signUpData: {},
  loginData: {}
};
var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: "yh",
    id: 1,
    Posts: [{
      id: 1
    }],
    Followings: [{
      nickname: "우자"
    }],
    Followers: [{
      nickname: "우자"
    }]
  });
};
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"],
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"]
  };
};
var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _type__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loginError: null,
        logInLoading: true,
        logInDone: false
      });
    case _type__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: false,
        logInDone: true,
        me: dummyUser(action.data)
      });
    case _type__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: false,
        loginError: action.error
      });
    case _type__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: true,
        logOutDone: false,
        logOutError: null
      });
    case _type__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: false,
        logOutDone: true,
        me: null
      });
    case _type__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: false,
        logOutError: action.error
      });
    case _type__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: true,
        signUpDone: false,
        signUpError: null
      });
    case _type__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: false,
        signUpDone: true
      });
    case _type__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: false,
        signUpError: action.error
      });
    case _type__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: true,
        changeNicknameDone: false,
        changeNicknameError: null
      });
    case _type__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: false,
        changeNicknameDone: true
      });
    case _type__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: false,
        changeNicknameError: action.error
      });
    case _type__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_TO_ME"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        me: _objectSpread(_objectSpread({}, state.me), {}, {
          Posts: [{
            id: action.data
          }].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.me.Posts))
        })
      });
    case _type__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_OF_ME"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        me: _objectSpread(_objectSpread({}, state.me), {}, {
          Posts: state.me.Posts.filter(function (v) {
            return v.id !== action.data;
          })
        })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dpbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOSWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOSWNrbmFtZURvbmUiLCJjaGFuZ2VOSWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiZHVtbXlVc2VyIiwiZGF0YSIsIl9vYmplY3RTcHJlYWQiLCJuaWNrbmFtZSIsImlkIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwidHlwZSIsIkxPR19JTl9SRVFVRVNUIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIkxPR19PVVRfUkVRVUVTVCIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiZXJyb3IiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQUREX1BPU1RfVE9fTUUiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImZpbHRlciIsInYiXSwi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S0FBSyxDQUFDakIsRUFBRTtVQUFFUSxLQUFLLEdBQUc7WUFBRUQsRUFBRSxFQUFFYyxNQUFNLENBQUNqQjtVQUFLLENBQUMsRUFBQWlDLE1BQUEsQ0FBQUMsNEZBQUEsQ0FBS3JCLEtBQUssQ0FBQ2pCLEVBQUUsQ0FBQ1EsS0FBSztRQUFDO01BQUU7SUFFeEUsS0FBSytCLHVEQUFpQjtNQUNwQixPQUFBbEMsYUFBQSxDQUFBQSxhQUFBLEtBQ0tZLEtBQUs7UUFDUmpCLEVBQUUsRUFBQUssYUFBQSxDQUFBQSxhQUFBLEtBQ0dZLEtBQUssQ0FBQ2pCLEVBQUU7VUFDWFEsS0FBSyxFQUFFUyxLQUFLLENBQUNqQixFQUFFLENBQUNRLEtBQUssQ0FBQ2dDLE1BQU0sQ0FBQyxVQUFDQyxDQUFDO1lBQUEsT0FBS0EsQ0FBQyxDQUFDbEMsRUFBRSxLQUFLYyxNQUFNLENBQUNqQixJQUFJO1VBQUE7UUFBQztNQUMxRDtJQUVMO01BQ0UsT0FBT2EsS0FBSztFQUFDO0FBRW5CLENBQUM7QUFFY0QsMEVBQVcsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmY1OTVjNGY1NzAzZTM2MTI0OGZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIExPR19JTl9GQUlMVVJFLFxyXG4gIExPR19JTl9TVUNDRVNTLFxyXG4gIExPR19PVVRfUkVRVUVTVCxcclxuICBMT0dfSU5fUkVRVUVTVCxcclxuICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgTE9HX09VVF9TVUNDRVNTLFxyXG4gIFNJR05fVVBfRkFJTFVSRSxcclxuICBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgU0lHTl9VUF9TVUNDRVNTLFxyXG4gIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxyXG4gIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gIEFERF9QT1NUX1RPX01FLFxyXG4gIFJFTU9WRV9QT1NUX09GX01FLFxyXG59IGZyb20gXCIuLi90eXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dpbkVycm9yOiBudWxsLFxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gIGxvZ091dEVycm9yOiBudWxsLFxyXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gIGNoYW5nZU5JY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcbiAgY2hhbmdlTklja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOSWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIG1lOiBudWxsLFxyXG4gIHNpZ25VcERhdGE6IHt9LFxyXG4gIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAuLi5kYXRhLFxyXG4gIG5pY2tuYW1lOiBcInloXCIsXHJcbiAgaWQ6IDEsXHJcbiAgUG9zdHM6IFt7IGlkOiAxIH1dLFxyXG4gIEZvbGxvd2luZ3M6IFt7IG5pY2tuYW1lOiBcIuyasOyekFwiIH1dLFxyXG4gIEZvbGxvd2VyczogW3sgbmlja25hbWU6IFwi7Jqw7J6QXCIgfV0sXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBMT0dfSU5fUkVRVUVTVCwgZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogTE9HX09VVF9SRVFVRVNUIH07XHJcbn07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2dpbkVycm9yOiBudWxsLFxyXG4gICAgICAgIGxvZ0luTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGxvZ0luRG9uZTogdHJ1ZSxcclxuICAgICAgICBtZTogZHVtbXlVc2VyKGFjdGlvbi5kYXRhKSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBsb2dpbkVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9nT3V0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgICAgICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGxvZ091dERvbmU6IHRydWUsXHJcbiAgICAgICAgbWU6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2dPdXRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBsb2dPdXRFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNpZ25VcExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICAgICAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBzaWduVXBEb25lOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2lnblVwTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgc2lnblVwRXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gICAgICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgY2hhbmdlTmlja25hbWVEb25lOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWU6IHsgLi4uc3RhdGUubWUsIFBvc3RzOiBbeyBpZDogYWN0aW9uLmRhdGEgfSwgLi4uc3RhdGUubWUuUG9zdHNdIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1lOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgIFBvc3RzOiBzdGF0ZS5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9