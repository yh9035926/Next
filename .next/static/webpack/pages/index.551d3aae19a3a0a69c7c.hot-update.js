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
        Posts: state.me.Posts.filter(function (v) {
          return v.id !== ac;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dpbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOSWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOSWNrbmFtZURvbmUiLCJjaGFuZ2VOSWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiZHVtbXlVc2VyIiwiZGF0YSIsIl9vYmplY3RTcHJlYWQiLCJuaWNrbmFtZSIsImlkIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwidHlwZSIsIkxPR19JTl9SRVFVRVNUIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIkxPR19PVVRfUkVRVUVTVCIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiZXJyb3IiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQUREX1BPU1RfVE9fTUUiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImZpbHRlciIsInYiLCJh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QUFPWSxLQUFLLENBQUNqQixFQUFFO1VBQ2ZRLEtBQUssR0FBRztZQUFFRCxFQUFFLEVBQUVjLE1BQU0sQ0FBQ2pCO1VBQUssQ0FBQyxFQUFBaUMsTUFBQSxDQUFBQyw0RkFBQSxDQUFLckIsS0FBSyxDQUFDakIsRUFBRSxDQUFDUSxLQUFLO1FBQUM7TUFBRTtJQUVyRCxLQUFNK0IsdURBQWlCO01BQ3ZCLE9BQUFsQyxhQUFBLENBQUFBLGFBQUEsS0FDS1ksS0FBSztRQUNSVCxLQUFLLEVBQUNTLEtBQUssQ0FBQ2pCLEVBQUUsQ0FBQ1EsS0FBSyxDQUFDZ0MsTUFBTSxDQUFDLFVBQUNDLENBQUM7VUFBQSxPQUFJQSxDQUFDLENBQUNsQyxFQUFFLEtBQUltQyxFQUFFO1FBQUE7TUFBQztJQUVqRDtNQUNFLE9BQU96QixLQUFLO0VBQUM7QUFFbkIsQ0FBQztBQUVjRCwwRUFBVyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU1MWQzYWFlMTlhM2EwYTY5YzdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIExPR19JTl9GQUlMVVJFLFxyXG4gIExPR19JTl9TVUNDRVNTLFxyXG4gIExPR19PVVRfUkVRVUVTVCxcclxuICBMT0dfSU5fUkVRVUVTVCxcclxuICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgTE9HX09VVF9TVUNDRVNTLFxyXG4gIFNJR05fVVBfRkFJTFVSRSxcclxuICBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgU0lHTl9VUF9TVUNDRVNTLFxyXG4gIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxyXG4gIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gIEFERF9QT1NUX1RPX01FLFxyXG4gIFJFTU9WRV9QT1NUX09GX01FLFxyXG59IGZyb20gXCIuLi90eXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dpbkVycm9yOiBudWxsLFxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gIGxvZ091dEVycm9yOiBudWxsLFxyXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gIGNoYW5nZU5JY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcbiAgY2hhbmdlTklja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOSWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIG1lOiBudWxsLFxyXG4gIHNpZ25VcERhdGE6IHt9LFxyXG4gIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAuLi5kYXRhLFxyXG4gIG5pY2tuYW1lOiBcInloXCIsXHJcbiAgaWQ6IDEsXHJcbiAgUG9zdHM6IFt7IGlkOiAxIH1dLFxyXG4gIEZvbGxvd2luZ3M6IFt7IG5pY2tuYW1lOiBcIuyasOyekFwiIH1dLFxyXG4gIEZvbGxvd2VyczogW3sgbmlja25hbWU6IFwi7Jqw7J6QXCIgfV0sXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBMT0dfSU5fUkVRVUVTVCwgZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogTE9HX09VVF9SRVFVRVNUIH07XHJcbn07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2dpbkVycm9yOiBudWxsLFxyXG4gICAgICAgIGxvZ0luTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGxvZ0luRG9uZTogdHJ1ZSxcclxuICAgICAgICBtZTogZHVtbXlVc2VyKGFjdGlvbi5kYXRhKSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBsb2dpbkVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9nT3V0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgICAgICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGxvZ091dERvbmU6IHRydWUsXHJcbiAgICAgICAgbWU6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2dPdXRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBsb2dPdXRFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNpZ25VcExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICAgICAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBzaWduVXBEb25lOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2lnblVwTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgc2lnblVwRXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gICAgICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgY2hhbmdlTmlja25hbWVEb25lOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWU6IHsgLi4uc3RhdGUubWUsIFxyXG4gICAgICAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10gfSxcclxuICAgICAgfTtcclxuICAgICAgY2FzZSAgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgUG9zdHM6c3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KT0+IHYuaWQgIT09YWMpXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==