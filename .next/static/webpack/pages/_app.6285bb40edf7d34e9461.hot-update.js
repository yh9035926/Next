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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type */ "./type/index.js");


var initialState = {
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  loadFollowersLoading: false,
  loadFollowersDone: false,
  loadFollowersError: null,
  loadFollowingsLoading: false,
  loadFollowingsDone: false,
  loadFollowingsError: null,
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  followLoading: false,
  followDone: false,
  followError: null,
  removeFollowerLoading: false,
  removeFollowerDone: false,
  removeFollowerError: null,
  unFollowLoading: false,
  unFollowDone: false,
  unFollowError: null,
  me: null,
  signUpData: {},
  loginData: {}
};
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_REQUEST"],
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_REQUEST"]
  };
};
var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_REQUEST"]:
        draft.logInError = null;
        draft.logInLoading = true;
        draft.logInDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_SUCCESS"]:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_FAILURE"]:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_MY_INFO_REQUEST"]:
        draft.loadMyInfoError = null;
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_MY_INFO_SUCCESS"]:
        draft.loadMyInfoLoading = false;
        draft.me = action.data;
        draft.loadMyInfoDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_MY_INFO_FAILURE"]:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_REQUEST"]:
        draft.loadMyInfoError = null;
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_SUCCESS"]:
        draft.loadMyInfoLoading = false;
        draft.me = action.data;
        draft.loadMyInfoDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_FAILURE"]:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FOLLOWER_REQUEST"]:
        draft.removeFollowerError = null;
        draft.removeFollowerLoading = true;
        draft.removeFollowerDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FOLLOWER_SUCCESS"]:
        draft.removeFollowerLoading = false;
        draft.me.Followers = draft.me.Followers.filter(function (v) {
          return v.id !== action.data.UserId;
        });
        draft.removeFollowerDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FOLLOWER_FAILURE"]:
        draft.removeFollowerLoading = false;
        draft.removeFollowerError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWERS_REQUEST"]:
        draft.loadFollowersError = null;
        draft.loadFollowersLoading = true;
        draft.loadFollowersDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWERS_SUCCESS"]:
        draft.loadFollowersLoading = false;
        draft.me.Followers = action.data;
        draft.loadFollowersDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWERS_FAILURE"]:
        draft.loadFollowersLoading = false;
        draft.loadFollowersError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWINGS_REQUEST"]:
        draft.loadFollowingsError = null;
        draft.loadFollowingsLoading = true;
        draft.loadFollowingsDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWINGS_SUCCESS"]:
        draft.loadFollowingsLoading = false;
        draft.me.Followings = action.data;
        draft.loadFollowingsDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWINGS_FAILURE"]:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_REQUEST"]:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_SUCCESS"]:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_FAILURE"]:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_REQUEST"]:
        draft.followError = null;
        draft.followLoading = true;
        draft.followDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_SUCCESS"]:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me.Followings.push({
          id: action.data.UserId
        });
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_FAILURE"]:
        draft.followLoading = false;
        draft.followError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_REQUEST"]:
        draft.unFollowError = null;
        draft.unFollowLoading = true;
        draft.unFollowDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_SUCCESS"]:
        draft.unFollowLoading = false;
        draft.unFollowDone = true;
        draft.me.Followings = draft.me.Followings.filter(function (v) {
          return v.id !== action.data.UserId;
        });
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_FAILURE"]:
        draft.unFollowLoading = false;
        draft.unFollowError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_REQUEST"]:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_SUCCESS"]:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_FAILURE"]:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_REQUEST"]:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_SUCCESS"]:
        draft.me.nickname = action.data.nickname;
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_FAILURE"]:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_TO_ME"]:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_OF_ME"]:
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return v.id !== action.data;
        });
      default:
        break;
    }
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwibG9hZEZvbGxvd2Vyc0xvYWRpbmciLCJsb2FkRm9sbG93ZXJzRG9uZSIsImxvYWRGb2xsb3dlcnNFcnJvciIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRG9uZSIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJyZW1vdmVGb2xsb3dlckxvYWRpbmciLCJyZW1vdmVGb2xsb3dlckRvbmUiLCJyZW1vdmVGb2xsb3dlckVycm9yIiwidW5Gb2xsb3dMb2FkaW5nIiwidW5Gb2xsb3dEb25lIiwidW5Gb2xsb3dFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwiTE9HX0lOX1JFUVVFU1QiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiTE9HX09VVF9SRVFVRVNUIiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJlcnJvciIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJGb2xsb3dlcnMiLCJmaWx0ZXIiLCJ2IiwiaWQiLCJVc2VySWQiLCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MiLCJGb2xsb3dpbmdzIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwicHVzaCIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIm5pY2tuYW1lIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlBvc3RzIiwidW5zaGlmdCIsIlJFTU9WRV9QT1NUX09GX01FIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRCO0FBcUNYO0FBRVYsSUFBTUEsWUFBWSxHQUFHO0VBQzFCQyxpQkFBaUIsRUFBRSxLQUFLO0VBQ3hCQyxjQUFj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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XG5pbXBvcnQge1xuICBMT0dfSU5fRkFJTFVSRSxcbiAgTE9HX0lOX1NVQ0NFU1MsXG4gIExPR19PVVRfUkVRVUVTVCxcbiAgTE9HX0lOX1JFUVVFU1QsXG4gIExPR19PVVRfRkFJTFVSRSxcbiAgTE9HX09VVF9TVUNDRVNTLFxuICBTSUdOX1VQX0ZBSUxVUkUsXG4gIFNJR05fVVBfUkVRVUVTVCxcbiAgU0lHTl9VUF9TVUNDRVNTLFxuICBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcbiAgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXG4gIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxuICBBRERfUE9TVF9UT19NRSxcbiAgUkVNT1ZFX1BPU1RfT0ZfTUUsXG4gIEZPTExPV19SRVFVRVNULFxuICBGT0xMT1dfU1VDQ0VTUyxcbiAgRk9MTE9XX0ZBSUxVUkUsXG4gIFVORk9MTE9XX1JFUVVFU1QsXG4gIFVORk9MTE9XX1NVQ0NFU1MsXG4gIFVORk9MTE9XX0ZBSUxVUkUsXG4gIExPQURfTVlfSU5GT19GQUlMVVJFLFxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcbiAgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXG4gIExPQURfRk9MTE9XRVJTX1JFUVVFU1QsXG4gIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXG4gIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXG4gIExPQURfRk9MTE9XSU5HU19SRVFVRVNULFxuICBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcbiAgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXG4gIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULFxuICBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcbiAgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsXG4gIExPQURfVVNFUl9SRVFVRVNULFxuICBMT0FEX1VTRVJfU1VDQ0VTUyxcbiAgTE9BRF9VU0VSX0ZBSUxVUkUsXG59IGZyb20gXCIuLi90eXBlXCI7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSxcbiAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxuICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXG5cbiAgbG9hZEZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLFxuICBsb2FkRm9sbG93ZXJzRG9uZTogZmFsc2UsXG4gIGxvYWRGb2xsb3dlcnNFcnJvcjogbnVsbCxcblxuICBsb2FkRm9sbG93aW5nc0xvYWRpbmc6IGZhbHNlLFxuICBsb2FkRm9sbG93aW5nc0RvbmU6IGZhbHNlLFxuICBsb2FkRm9sbG93aW5nc0Vycm9yOiBudWxsLFxuXG4gIGxvYWRVc2VyTG9hZGluZzogZmFsc2UsXG4gIGxvYWRVc2VyRG9uZTogZmFsc2UsXG4gIGxvYWRVc2VyRXJyb3I6IG51bGwsXG5cbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcbiAgbG9nSW5Eb25lOiBmYWxzZSxcbiAgbG9nSW5FcnJvcjogbnVsbCxcblxuICBsb2dPdXRMb2FkaW5nOiBmYWxzZSxcbiAgbG9nT3V0RG9uZTogZmFsc2UsXG4gIGxvZ091dEVycm9yOiBudWxsLFxuXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxuICBzaWduVXBEb25lOiBmYWxzZSxcbiAgc2lnblVwRXJyb3I6IG51bGwsXG5cbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcblxuICBmb2xsb3dMb2FkaW5nOiBmYWxzZSxcbiAgZm9sbG93RG9uZTogZmFsc2UsXG4gIGZvbGxvd0Vycm9yOiBudWxsLFxuXG4gIHJlbW92ZUZvbGxvd2VyTG9hZGluZzogZmFsc2UsXG4gIHJlbW92ZUZvbGxvd2VyRG9uZTogZmFsc2UsXG4gIHJlbW92ZUZvbGxvd2VyRXJyb3I6IG51bGwsXG5cbiAgdW5Gb2xsb3dMb2FkaW5nOiBmYWxzZSxcbiAgdW5Gb2xsb3dEb25lOiBmYWxzZSxcbiAgdW5Gb2xsb3dFcnJvcjogbnVsbCxcblxuICBtZTogbnVsbCxcbiAgc2lnblVwRGF0YToge30sXG4gIGxvZ2luRGF0YToge30sXG59O1xuXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIHsgdHlwZTogTE9HX0lOX1JFUVVFU1QsIGRhdGEgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0eXBlOiBMT0dfT1VUX1JFUVVFU1QgfTtcbn07XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGRyYWZ0Lm1lLkZvbGxvd2Vycy5maWx0ZXIoXG4gICAgICAgICAgKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZFxuICAgICAgICApO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZSA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LnVuRm9sbG93TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnVuRm9sbG93RG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVuRm9sbG93RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxuICAgICAgICBkcmFmdC51bkZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxuICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9