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
  me: null
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
        draft.loadUserError = null;
        draft.loadUserLoading = true;
        draft.loadUserDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_SUCCESS"]:
        draft.loadUserLoading = false;
        draft.userInfo = action.data;
        draft.loadUserDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_FAILURE"]:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwibG9hZEZvbGxvd2Vyc0xvYWRpbmciLCJsb2FkRm9sbG93ZXJzRG9uZSIsImxvYWRGb2xsb3dlcnNFcnJvciIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRG9uZSIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJyZW1vdmVGb2xsb3dlckxvYWRpbmciLCJyZW1vdmVGb2xsb3dlckRvbmUiLCJyZW1vdmVGb2xsb3dlckVycm9yIiwidW5Gb2xsb3dMb2FkaW5nIiwidW5Gb2xsb3dEb25lIiwidW5Gb2xsb3dFcnJvciIsIm1lIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJMT0dfSU5fUkVRVUVTVCIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJMT0dfT1VUX1JFUVVFU1QiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsImVycm9yIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsInVzZXJJbmZvIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiRm9sbG93ZXJzIiwiZmlsdGVyIiwidiIsImlkIiwiVXNlcklkIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiRm9sbG93aW5ncyIsIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsInB1c2giLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJuaWNrbmFtZSIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJQb3N0cyIsInVuc2hpZnQiLCJSRU1PVkVfUE9TVF9PRl9NRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0QjtBQXFDWDtBQUVWLElBQU1BLFlBQVksR0FBRztFQUMxQkMsaUJBQWlCLEVBQUUsS0FBSztFQUN4QkMsY0FBYyxFQUFFLEtBQUs7RUFD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MUIscUJBQXFCLEdBQUcsSUFBSTtRQUNsQzBCLEtBQUssQ0FBQ3pCLGtCQUFrQixHQUFHLEtBQUs7UUFDaEN5QixLQUFLLENBQUN4QixtQkFBbUIsR0FBRyxJQUFJO1FBQ2hDO01BQ0YsS0FBSytELDZEQUF1QjtRQUMxQnZDLEtBQUssQ0FBQ2QsRUFBRSxDQUFDc0QsUUFBUSxHQUFHMUMsTUFBTSxDQUFDVixJQUFJLENBQUNvRCxRQUFRO1FBQ3hDeEMsS0FBSyxDQUFDMUIscUJBQXFCLEdBQUcsS0FBSztRQUNuQzBCLEtBQUssQ0FBQ3pCLGtCQUFrQixHQUFHLElBQUk7UUFDL0I7TUFDRixLQUFLa0UsNkRBQXVCO1FBQzFCekMsS0FBSyxDQUFDMUIscUJBQXFCLEdBQUcsS0FBSztRQUNuQzBCLEtBQUssQ0FBQ3hCLG1CQUFtQixHQUFHc0IsTUFBTSxDQUFDSyxLQUFLO1FBQ3hDO01BQ0Y7O01BRUEsS0FBS3VDLG9EQUFjO1FBQ2pCMUMsS0FBSyxDQUFDZCxFQUFFLENBQUN5RCxLQUFLLENBQUNDLE9BQU8sQ0FBQztVQUFFNUIsRUFBRSxFQUFFbEIsTUFBTSxDQUFDVjtRQUFLLENBQUMsQ0FBQztRQUMzQztNQUNGLEtBQUt5RCx1REFBaUI7UUFDcEI3QyxLQUFLLENBQUNkLEVBQUUsQ0FBQ3lELEtBQUssR0FBRzNDLEtBQUssQ0FBQ2QsRUFBRSxDQUFDeUQsS0FBSyxDQUFDN0IsTUFBTSxDQUFDLFVBQUNDLENBQUM7VUFBQSxPQUFLQSxDQUFDLENBQUNDLEVBQUUsS0FBS2xCLE1BQU0sQ0FBQ1YsSUFBSTtRQUFBLEVBQUM7TUFDckU7UUFDRTtJQUFNO0VBRVosQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVjSywwRUFBVyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdiODIyMWJkYWJmNWZjYzA1YmJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcbmltcG9ydCB7XG4gIExPR19JTl9GQUlMVVJFLFxuICBMT0dfSU5fU1VDQ0VTUyxcbiAgTE9HX09VVF9SRVFVRVNULFxuICBMT0dfSU5fUkVRVUVTVCxcbiAgTE9HX09VVF9GQUlMVVJFLFxuICBMT0dfT1VUX1NVQ0NFU1MsXG4gIFNJR05fVVBfRkFJTFVSRSxcbiAgU0lHTl9VUF9SRVFVRVNULFxuICBTSUdOX1VQX1NVQ0NFU1MsXG4gIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxuICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcbiAgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXG4gIEFERF9QT1NUX1RPX01FLFxuICBSRU1PVkVfUE9TVF9PRl9NRSxcbiAgRk9MTE9XX1JFUVVFU1QsXG4gIEZPTExPV19TVUNDRVNTLFxuICBGT0xMT1dfRkFJTFVSRSxcbiAgVU5GT0xMT1dfUkVRVUVTVCxcbiAgVU5GT0xMT1dfU1VDQ0VTUyxcbiAgVU5GT0xMT1dfRkFJTFVSRSxcbiAgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXG4gIExPQURfTVlfSU5GT19SRVFVRVNULFxuICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcbiAgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCxcbiAgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcbiAgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcbiAgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsXG4gIExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxuICBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcbiAgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsXG4gIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxuICBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcbiAgTE9BRF9VU0VSX1JFUVVFU1QsXG4gIExPQURfVVNFUl9TVUNDRVNTLFxuICBMT0FEX1VTRVJfRkFJTFVSRSxcbn0gZnJvbSBcIi4uL3R5cGVcIjtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLFxuICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXG4gIGxvYWRNeUluZm9FcnJvcjogbnVsbCxcblxuICBsb2FkRm9sbG93ZXJzTG9hZGluZzogZmFsc2UsXG4gIGxvYWRGb2xsb3dlcnNEb25lOiBmYWxzZSxcbiAgbG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLFxuXG4gIGxvYWRGb2xsb3dpbmdzTG9hZGluZzogZmFsc2UsXG4gIGxvYWRGb2xsb3dpbmdzRG9uZTogZmFsc2UsXG4gIGxvYWRGb2xsb3dpbmdzRXJyb3I6IG51bGwsXG5cbiAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSxcbiAgbG9hZFVzZXJEb25lOiBmYWxzZSxcbiAgbG9hZFVzZXJFcnJvcjogbnVsbCxcblxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxuICBsb2dJbkRvbmU6IGZhbHNlLFxuICBsb2dJbkVycm9yOiBudWxsLFxuXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLFxuICBsb2dPdXREb25lOiBmYWxzZSxcbiAgbG9nT3V0RXJyb3I6IG51bGwsXG5cbiAgc2lnblVwTG9hZGluZzogZmFsc2UsXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxuICBzaWduVXBFcnJvcjogbnVsbCxcblxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxuICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxuXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLFxuICBmb2xsb3dEb25lOiBmYWxzZSxcbiAgZm9sbG93RXJyb3I6IG51bGwsXG5cbiAgcmVtb3ZlRm9sbG93ZXJMb2FkaW5nOiBmYWxzZSxcbiAgcmVtb3ZlRm9sbG93ZXJEb25lOiBmYWxzZSxcbiAgcmVtb3ZlRm9sbG93ZXJFcnJvcjogbnVsbCxcblxuICB1bkZvbGxvd0xvYWRpbmc6IGZhbHNlLFxuICB1bkZvbGxvd0RvbmU6IGZhbHNlLFxuICB1bkZvbGxvd0Vycm9yOiBudWxsLFxuXG4gIG1lOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XG4gIHJldHVybiB7IHR5cGU6IExPR19JTl9SRVFVRVNULCBkYXRhIH07XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdHlwZTogTE9HX09VVF9SRVFVRVNUIH07XG59O1xuXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVzZXJJbmZvID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gZHJhZnQubWUuRm9sbG93ZXJzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkXG4gICAgICAgICk7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxuICAgICAgICBkcmFmdC51bkZvbGxvd0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxuICAgICAgICBkcmFmdC51bkZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKFxuICAgICAgICAgICh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnVuRm9sbG93TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51bkZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcbiAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=