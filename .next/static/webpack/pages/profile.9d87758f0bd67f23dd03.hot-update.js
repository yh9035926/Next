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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIlByb2ZpbGUiLCJfcyIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiZm9sbG93ZXJzTGltaXQiLCJzZXRGb2xsb3dlcnNMaW1pdCIsIl91c2VTdGF0ZTIiLCJmb2xsb3dpbmdzTGltaXQiLCJzZXRGb2xsb3dpbmdzTGltaXQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiX3VzZVNlbGVjdG9yIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsIl91c2VTV1IiLCJ1c2VTV1IiLCJjb25jYXQiLCJmb2xsb3dlcnNEYXRhIiwiZm9sbG93ZXJFcnJvciIsIl91c2VTV1IyIiwiZm9sbG93aW5nc0RhdGEiLCJmb2xsb3dpbmdFcnJvciIsInVzZUVmZmVjdCIsImlkIiwiUm91dGVyIiwicHVzaCIsImxvYWRNb3JlRm9sbG93aW5ncyIsInVzZUNhbGxiYWNrIiwicHJldiIsImxvYWRNb3JlRm9sbG93ZXJzIiwiY29uc29sZSIsImVycm9yIiwiX19qc3giLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiUmVhY3QiLCJGcmFnbWVudCIsIkhlYWQiLCJBcHBMYXlvdXQiLCJOaWNrbmFtZUVkaXRGb3JtIiwiRm9sbG93TGlzdCIsImhlYWRlciIsIm9uQ2xpY2tNb3JlIiwibG9hZGluZyIsIl9jIiwiX19OX1NTUCIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0U7QUFDaEI7QUFDbkI7QUFDaUM7QUFDN0I7QUFDaUI7QUFDSztBQU10QztBQUdTO0FBQ0s7QUFFL0IsSUFBTUEsT0FBTyxH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QUM7QUFBQSxJQUFBbUQsRUFBQTtBQUFBRSxZQUFBLENBQUFGLEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS45ZDg3NzU4ZjBiZDY3ZjIzZGQwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IE5pY2tuYW1lRWRpdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmlja25hbWVFZGl0Rm9ybVwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBGb2xsb3dMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0ZvbGxvd0xpc3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcbiAgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCxcbiAgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsXG4gIExPQURfTVlfSU5GT19SRVFVRVNULFxuICBMT0FEX1BPU1RTX1JFUVVFU1QsXG59IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcbmltcG9ydCB7IEVORCB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgdXNlU1dSLHt1c2V9IGZyb20gXCJzd3JcIjtcblxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+XG4gIGF4aW9zLmdldCh1cmwsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0LmRhdGEpO1xuXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xuICBjb25zdCBbZm9sbG93ZXJzTGltaXQsIHNldEZvbGxvd2Vyc0xpbWl0XSA9IHVzZVN0YXRlKDMpO1xuICBjb25zdCBbZm9sbG93aW5nc0xpbWl0LCBzZXRGb2xsb3dpbmdzTGltaXRdID0gdXNlU3RhdGUoMyk7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCB7IGRhdGE6IGZvbGxvd2Vyc0RhdGEsIGZvbGxvd2VyRXJyb3IgfSA9IHVzZVNXUihcbiAgICBgaHR0cDovL2xvY2FsaG9zdDozMDc1L3VzZXIvZm9sbG93ZXJzP2xpbWl0PSR7Zm9sbG93ZXJzTGltaXR9YCxcbiAgICBmZXRjaGVyXG4gICk7XG4gIGNvbnN0IHsgZGF0YTogZm9sbG93aW5nc0RhdGEsIGZvbGxvd2luZ0Vycm9yIH0gPSB1c2VTV1IoXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzA3NS91c2VyL2ZvbGxvd2luZ3M/bGltaXQ9JHtmb2xsb3dpbmdzTGltaXR9YCxcbiAgICBmZXRjaGVyXG4gICk7XG5cbiAgLyogdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19SRVFVRVNULFxuICAgIH0pO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19SRVFVRVNULFxuICAgIH0pO1xuICB9LCBbXSk7XG4gICovXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIShtZSAmJiBtZS5pZCkpIHtcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH0sIFttZSAmJiBtZS5pZF0pO1xuXG4gIGNvbnN0IGxvYWRNb3JlRm9sbG93aW5ncyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRGb2xsb3dpbmdzTGltaXQoKHByZXYpID0+IHByZXYgKyAzKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGxvYWRNb3JlRm9sbG93ZXJzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEZvbGxvd2Vyc0xpbWl0KChwcmV2KSA9PiBwcmV2ICsgMyk7XG4gIH0sIFtdKTtcblxuICBpZiAoIW1lKSB7XG4gICAgcmV0dXJuIFwi64K0IOygleuztCDroZzrlKkg7KSRXCI7XG4gIH1cblxuICBpZiAoZm9sbG93ZXJFcnJvciB8fCBmb2xsb3dpbmdFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZm9sbG93ZXJFcnJvciB8fCBmb2xsb3dpbmdFcnJvcik7XG4gICAgcmV0dXJuIDxkaXY+7YyU66Gc7J6JL+2MlOuhnOybjCDroZzrlKkg7KSRIOyXkOufrOqwgCDrsJzsg53tlanri4jri6QuPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT7rgrQg7ZSE66Gc7ZWEPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgIDxOaWNrbmFtZUVkaXRGb3JtIC8+XG4gICAgICAgIDxGb2xsb3dMaXN0XG4gICAgICAgICAgaGVhZGVyPVwi7YyU66Gc7J6JXCJcbiAgICAgICAgICBkYXRhPXtmb2xsb3dpbmdzRGF0YX1cbiAgICAgICAgICBvbkNsaWNrTW9yZT17bG9hZE1vcmVGb2xsb3dpbmdzfVxuICAgICAgICAgIGxvYWRpbmc9eyFmb2xsb3dpbmdzRGF0YSAmJiAhZm9sbG93aW5nRXJyb3J9XG4gICAgICAgIC8+XG4gICAgICAgIDxGb2xsb3dMaXN0XG4gICAgICAgICAgaGVhZGVyPVwi7YyU66Gc7JuMXCJcbiAgICAgICAgICBkYXRhPXtmb2xsb3dlcnNEYXRhfVxuICAgICAgICAgIG9uQ2xpY2tNb3JlPXtsb2FkTW9yZUZvbGxvd2Vyc31cbiAgICAgICAgICBsb2FkaW5nPXshZm9sbG93ZXJzRGF0YSAmJiAhZm9sbG93ZXJFcnJvcn1cbiAgICAgICAgLz5cbiAgICAgIDwvQXBwTGF5b3V0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKFxuICBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiBcIlwiO1xuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gXCJcIjtcbiAgICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XG4gICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcbiAgICB9IC8vQ29va2llIOuEo+yWtOykmOyVvCDroZzqt7jsnbgg7IOI66Gc6rOg7LmoIOqwgOuKpVxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXG4gICAgfSk7XG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXG4gICAgfSk7XG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xuICAgIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG4iXSwic291cmNlUm9vdCI6IiJ9