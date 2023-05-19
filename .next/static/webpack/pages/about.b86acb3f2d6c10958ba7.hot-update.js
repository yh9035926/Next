webpackHotUpdate_N_E("pages/about",{

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

      case LOAD:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwibG9hZEZvbGxvd2Vyc0xvYWRpbmciLCJsb2FkRm9sbG93ZXJzRG9uZSIsImxvYWRGb2xsb3dlcnNFcnJvciIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRG9uZSIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInJlbW92ZUZvbGxvd2VyTG9hZGluZyIsInJlbW92ZUZvbGxvd2VyRG9uZSIsInJlbW92ZUZvbGxvd2VyRXJyb3IiLCJ1bkZvbGxvd0xvYWRpbmciLCJ1bkZvbGxvd0RvbmUiLCJ1bkZvbGxvd0Vycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJMT0dfSU5fUkVRVUVTVCIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJMT0dfT1VUX1JFUVVFU1QiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsImVycm9yIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiTE9BRCIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJGb2xsb3dlcnMiLCJmaWx0ZXIiLCJ2IiwiaWQiLCJVc2VySWQiLCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MiLCJGb2xsb3dpbmdzIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwicHVzaCIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIm5pY2tuYW1lIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlBvc3RzIiwidW5zaGlmdCIsIlJFTU9WRV9QT1NUX09GX01FIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRCO0FBa0NYO0FBRVYsSUFBTUEsWUFBWSxHQUFHO0VBQzFCQyxpQkFBaUIsRUFBRSxLQUFLO0VBQ3hCQyxjQUFjLEVBQUUsS0FBSztFQUNyQkMsZUFBZSxFQUFFLElBQUk7RUFFckJDLG9CQUFvQixFQUFFLEtBQUs7RUFDM0JDLGlCQUFpQixFQUFFLEtBQUs7RUFDeEJDLGtCQUFrQixFQUFFLElB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QUk7UUFDaEM7TUFDRixLQUFLOEQsNkRBQXVCO1FBQzFCcEMsS0FBSyxDQUFDaEIsRUFBRSxDQUFDcUQsUUFBUSxHQUFHdkMsTUFBTSxDQUFDVixJQUFJLENBQUNpRCxRQUFRO1FBQ3hDckMsS0FBSyxDQUFDNUIscUJBQXFCLEdBQUcsS0FBSztRQUNuQzRCLEtBQUssQ0FBQzNCLGtCQUFrQixHQUFHLElBQUk7UUFDL0I7TUFDRixLQUFLaUUsNkRBQXVCO1FBQzFCdEMsS0FBSyxDQUFDNUIscUJBQXFCLEdBQUcsS0FBSztRQUNuQzRCLEtBQUssQ0FBQzFCLG1CQUFtQixHQUFHd0IsTUFBTSxDQUFDSyxLQUFLO1FBQ3hDO01BQ0Y7O01BRUEsS0FBS29DLG9EQUFjO1FBQ2pCdkMsS0FBSyxDQUFDaEIsRUFBRSxDQUFDd0QsS0FBSyxDQUFDQyxPQUFPLENBQUM7VUFBRTVCLEVBQUUsRUFBRWYsTUFBTSxDQUFDVjtRQUFLLENBQUMsQ0FBQztRQUMzQztNQUNGLEtBQUtzRCx1REFBaUI7UUFDcEIxQyxLQUFLLENBQUNoQixFQUFFLENBQUN3RCxLQUFLLEdBQUd4QyxLQUFLLENBQUNoQixFQUFFLENBQUN3RCxLQUFLLENBQUM3QixNQUFNLENBQUMsVUFBQ0MsQ0FBQztVQUFBLE9BQUtBLENBQUMsQ0FBQ0MsRUFBRSxLQUFLZixNQUFNLENBQUNWLElBQUk7UUFBQSxFQUFDO01BQ3JFO1FBQ0U7SUFBTTtFQUVaLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFY0ssMEVBQVcsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC5iODZhY2IzZjJkNmMxMDk1OGJhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XG5pbXBvcnQge1xuICBMT0dfSU5fRkFJTFVSRSxcbiAgTE9HX0lOX1NVQ0NFU1MsXG4gIExPR19PVVRfUkVRVUVTVCxcbiAgTE9HX0lOX1JFUVVFU1QsXG4gIExPR19PVVRfRkFJTFVSRSxcbiAgTE9HX09VVF9TVUNDRVNTLFxuICBTSUdOX1VQX0ZBSUxVUkUsXG4gIFNJR05fVVBfUkVRVUVTVCxcbiAgU0lHTl9VUF9TVUNDRVNTLFxuICBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcbiAgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXG4gIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxuICBBRERfUE9TVF9UT19NRSxcbiAgUkVNT1ZFX1BPU1RfT0ZfTUUsXG4gIEZPTExPV19SRVFVRVNULFxuICBGT0xMT1dfU1VDQ0VTUyxcbiAgRk9MTE9XX0ZBSUxVUkUsXG4gIFVORk9MTE9XX1JFUVVFU1QsXG4gIFVORk9MTE9XX1NVQ0NFU1MsXG4gIFVORk9MTE9XX0ZBSUxVUkUsXG4gIExPQURfTVlfSU5GT19GQUlMVVJFLFxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcbiAgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXG4gIExPQURfRk9MTE9XRVJTX1JFUVVFU1QsXG4gIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXG4gIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXG4gIExPQURfRk9MTE9XSU5HU19SRVFVRVNULFxuICBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcbiAgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXG4gIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULFxuICBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcbiAgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsXG59IGZyb20gXCIuLi90eXBlXCI7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSxcbiAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxuICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXG5cbiAgbG9hZEZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLFxuICBsb2FkRm9sbG93ZXJzRG9uZTogZmFsc2UsXG4gIGxvYWRGb2xsb3dlcnNFcnJvcjogbnVsbCxcblxuICBsb2FkRm9sbG93aW5nc0xvYWRpbmc6IGZhbHNlLFxuICBsb2FkRm9sbG93aW5nc0RvbmU6IGZhbHNlLFxuICBsb2FkRm9sbG93aW5nc0Vycm9yOiBudWxsLFxuXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsXG4gIGxvZ0luRG9uZTogZmFsc2UsXG4gIGxvZ0luRXJyb3I6IG51bGwsXG5cbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsXG4gIGxvZ091dERvbmU6IGZhbHNlLFxuICBsb2dPdXRFcnJvcjogbnVsbCxcblxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSxcbiAgc2lnblVwRG9uZTogZmFsc2UsXG4gIHNpZ25VcEVycm9yOiBudWxsLFxuXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXG4gIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXG5cbiAgZm9sbG93TG9hZGluZzogZmFsc2UsXG4gIGZvbGxvd0RvbmU6IGZhbHNlLFxuICBmb2xsb3dFcnJvcjogbnVsbCxcblxuICByZW1vdmVGb2xsb3dlckxvYWRpbmc6IGZhbHNlLFxuICByZW1vdmVGb2xsb3dlckRvbmU6IGZhbHNlLFxuICByZW1vdmVGb2xsb3dlckVycm9yOiBudWxsLFxuXG4gIHVuRm9sbG93TG9hZGluZzogZmFsc2UsXG4gIHVuRm9sbG93RG9uZTogZmFsc2UsXG4gIHVuRm9sbG93RXJyb3I6IG51bGwsXG5cbiAgbWU6IG51bGwsXG4gIHNpZ25VcERhdGE6IHt9LFxuICBsb2dpbkRhdGE6IHt9LFxufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XG4gIHJldHVybiB7IHR5cGU6IExPR19JTl9SRVFVRVNULCBkYXRhIH07XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdHlwZTogTE9HX09VVF9SRVFVRVNUIH07XG59O1xuXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIExPQUQ6XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGRyYWZ0Lm1lLkZvbGxvd2Vycy5maWx0ZXIoXG4gICAgICAgICAgKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZFxuICAgICAgICApO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZSA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LnVuRm9sbG93TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnVuRm9sbG93RG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVuRm9sbG93RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxuICAgICAgICBkcmFmdC51bkZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxuICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9