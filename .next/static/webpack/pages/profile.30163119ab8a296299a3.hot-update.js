webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NicknameEditForm */ "./components/NicknameEditForm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FollowList */ "./components/FollowList.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../type */ "./type/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swr */ "./node_modules/swr/core/dist/index.esm.js");
var _this = undefined,
  _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\pages\\profile.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var fetcher = function fetcher(url) {
  return axios__WEBPACK_IMPORTED_MODULE_8__["default"].get(url, {
    withCredentials: true
  }).then(function (result) {
    return result.data;
  });
};
var Profile = function Profile() {
  _s();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(3),
    followersLimit = _useState[0],
    setFollowersLimit = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(3),
    followingsLimit = _useState2[0],
    setFollowingsLimit = _useState2[1];
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
      return state.user;
    }),
    me = _useSelector.me;
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_9__["default"])("http://localhost:3075/user/followers?limit=".concat(followersLimit), fetcher),
    followersData = _useSWR.data,
    followerError = _useSWR.followerError;
  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_9__["default"])("http://localhost:3075/user/followings?limit=".concat(followingsLimit), fetcher),
    followingsData = _useSWR2.data,
    followingError = _useSWR2.followingError;

  /* useEffect(() => {
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST,
    });
    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
    });
  }, []);
  */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!(me && me.id)) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
    }
  }, [me && me.id]);
  var loadMoreFollowings = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setFollowingsLimit(function (prev) {
      return prev + 3;
    });
  }, []);
  var loadMoreFollowers = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setFollowersLimit(function (prev) {
      return prev + 3;
    });
  }, []);
  if (!me) {
    return "내 정보 로딩 중";
  }
  if (followerError || followingError) {
    console.error(followerError || followingError);
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 12
      }
    }, "\uD314\uB85C\uC789/\uD314\uB85C\uC6CC \uB85C\uB529 \uC911 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD569\uB2C8\uB2E4.");
  }
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, "\uB0B4 \uD504\uB85C\uD544")), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }), __jsx(_components_FollowList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    header: "\uD314\uB85C\uC789",
    data: followingsData,
    onClickMore: loadMoreFollowings,
    loading: !followingsData && !followingError,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }), __jsx(_components_FollowList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    header: "\uD314\uB85C\uC6CC",
    data: followersData,
    onClickMore: loadMoreFollowers,
    loading: !followersData && !followerError,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  })));
};
_s(Profile, "heCLaE1HcgjxDwZDgWakdiAxq74=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], swr__WEBPACK_IMPORTED_MODULE_9__["default"], swr__WEBPACK_IMPORTED_MODULE_9__["default"]];
});
_c = Profile;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Profile);
var _c;
$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIlByb2ZpbGUiLCJfcyIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiZm9sbG93ZXJzTGltaXQiLCJzZXRGb2xsb3dlcnNMaW1pdCIsIl91c2VTdGF0ZTIiLCJmb2xsb3dpbmdzTGltaXQiLCJzZXRGb2xsb3dpbmdzTGltaXQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiX3VzZVNlbGVjdG9yIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsIl91c2VTV1IiLCJ1c2VTV1IiLCJjb25jYXQiLCJmb2xsb3dlcnNEYXRhIiwiZm9sbG93ZXJFcnJvciIsIl91c2VTV1IyIiwiZm9sbG93aW5nc0RhdGEiLCJmb2xsb3dpbmdFcnJvciIsInVzZUVmZmVjdCIsImlkIiwiUm91dGVyIiwicHVzaCIsImxvYWRNb3JlRm9sbG93aW5ncyIsInVzZUNhbGxiYWNrIiwicHJldiIsImxvYWRNb3JlRm9sbG93ZXJzIiwiY29uc29sZSIsImVycm9yIiwiX19qc3giLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiUmVhY3QiLCJGcmFnbWVudCIsIkhlYWQiLCJBcHBMYXlvdXQiLCJOaWNrbmFtZUVkaXRGb3JtIiwiRm9sbG93TGlzdCIsImhlYWRlciIsIm9uQ2xpY2tNb3JlIiwibG9hZGluZyIsIl9jIiwiX19OX1NTUCIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0U7QUFDaEI7QUFDbkI7QUFDaUM7QUFDN0I7QUFDaUI7QUFDSztBQU10QztBQUdTO0FBQ007QUFFaEMsSUFBTUEsT0FBTyxH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QUM7QUFBQSxJQUFBbUQsRUFBQTtBQUFBRSxZQUFBLENBQUFGLEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS4zMDE2MzExOWFiOGEyOTYyOTlhMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IE5pY2tuYW1lRWRpdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmlja25hbWVFZGl0Rm9ybVwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBGb2xsb3dMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0ZvbGxvd0xpc3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcbiAgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCxcbiAgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsXG4gIExPQURfTVlfSU5GT19SRVFVRVNULFxuICBMT0FEX1BPU1RTX1JFUVVFU1QsXG59IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcbmltcG9ydCB7IEVORCB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgdXNlU1dSLHt1c2VTfSBmcm9tIFwic3dyXCI7XG5cbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PlxuICBheGlvcy5nZXQodXJsLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5kYXRhKTtcblxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcbiAgY29uc3QgW2ZvbGxvd2Vyc0xpbWl0LCBzZXRGb2xsb3dlcnNMaW1pdF0gPSB1c2VTdGF0ZSgzKTtcbiAgY29uc3QgW2ZvbGxvd2luZ3NMaW1pdCwgc2V0Rm9sbG93aW5nc0xpbWl0XSA9IHVzZVN0YXRlKDMpO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgeyBkYXRhOiBmb2xsb3dlcnNEYXRhLCBmb2xsb3dlckVycm9yIH0gPSB1c2VTV1IoXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzA3NS91c2VyL2ZvbGxvd2Vycz9saW1pdD0ke2ZvbGxvd2Vyc0xpbWl0fWAsXG4gICAgZmV0Y2hlclxuICApO1xuICBjb25zdCB7IGRhdGE6IGZvbGxvd2luZ3NEYXRhLCBmb2xsb3dpbmdFcnJvciB9ID0gdXNlU1dSKFxuICAgIGBodHRwOi8vbG9jYWxob3N0OjMwNzUvdXNlci9mb2xsb3dpbmdzP2xpbWl0PSR7Zm9sbG93aW5nc0xpbWl0fWAsXG4gICAgZmV0Y2hlclxuICApO1xuXG4gIC8qIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCxcbiAgICB9KTtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCxcbiAgICB9KTtcbiAgfSwgW10pO1xuICAqL1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCEobWUgJiYgbWUuaWQpKSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9LCBbbWUgJiYgbWUuaWRdKTtcblxuICBjb25zdCBsb2FkTW9yZUZvbGxvd2luZ3MgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0Rm9sbG93aW5nc0xpbWl0KChwcmV2KSA9PiBwcmV2ICsgMyk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBsb2FkTW9yZUZvbGxvd2VycyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRGb2xsb3dlcnNMaW1pdCgocHJldikgPT4gcHJldiArIDMpO1xuICB9LCBbXSk7XG5cbiAgaWYgKCFtZSkge1xuICAgIHJldHVybiBcIuuCtCDsoJXrs7Qg66Gc65SpIOykkVwiO1xuICB9XG5cbiAgaWYgKGZvbGxvd2VyRXJyb3IgfHwgZm9sbG93aW5nRXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGZvbGxvd2VyRXJyb3IgfHwgZm9sbG93aW5nRXJyb3IpO1xuICAgIHJldHVybiA8ZGl2Pu2MlOuhnOyeiS/tjJTroZzsm4wg66Gc65SpIOykkSDsl5Drn6zqsIAg67Cc7IOd7ZWp64uI64ukLjwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+64K0IO2UhOuhnO2VhDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8QXBwTGF5b3V0PlxuICAgICAgICA8Tmlja25hbWVFZGl0Rm9ybSAvPlxuICAgICAgICA8Rm9sbG93TGlzdFxuICAgICAgICAgIGhlYWRlcj1cIu2MlOuhnOyeiVwiXG4gICAgICAgICAgZGF0YT17Zm9sbG93aW5nc0RhdGF9XG4gICAgICAgICAgb25DbGlja01vcmU9e2xvYWRNb3JlRm9sbG93aW5nc31cbiAgICAgICAgICBsb2FkaW5nPXshZm9sbG93aW5nc0RhdGEgJiYgIWZvbGxvd2luZ0Vycm9yfVxuICAgICAgICAvPlxuICAgICAgICA8Rm9sbG93TGlzdFxuICAgICAgICAgIGhlYWRlcj1cIu2MlOuhnOybjFwiXG4gICAgICAgICAgZGF0YT17Zm9sbG93ZXJzRGF0YX1cbiAgICAgICAgICBvbkNsaWNrTW9yZT17bG9hZE1vcmVGb2xsb3dlcnN9XG4gICAgICAgICAgbG9hZGluZz17IWZvbGxvd2Vyc0RhdGEgJiYgIWZvbGxvd2VyRXJyb3J9XG4gICAgICAgIC8+XG4gICAgICA8L0FwcExheW91dD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhcbiAgYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogXCJcIjtcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IFwiXCI7XG4gICAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xuICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XG4gICAgfSAvL0Nvb2tpZSDrhKPslrTspJjslbwg66Gc6re47J24IOyDiOuhnOqzoOy5qCDqsIDriqVcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxuICAgIH0pO1xuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxuICAgIH0pO1xuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcbiAgICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==