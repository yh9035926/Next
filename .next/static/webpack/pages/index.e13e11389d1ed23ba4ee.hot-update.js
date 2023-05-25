webpackHotUpdate_N_E("pages/index",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/client/link */ "./node_modules/next/dist/client/link.js");
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_link__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
  _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\components\\UserProfile.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var UserProfile = function UserProfile() {
  _s();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
      return state.user;
    }),
    me = _useSelector.me,
    logOutLoading = _useSelector.logOutLoading;
  var onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["logoutRequestAction"])());
  }, []);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    actions: [__jsx("div", {
      key: "twit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }, "\uC9F9\uCA31", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }), me.Posts.length), __jsx("div", {
      key: "followings",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, "\uD314\uB85C\uC789", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }), me.Followings.length), __jsx("div", {
      key: "followers",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, "\uD314\uB85C\uC6CC", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }), me.Followers.length)],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(next_dist_client_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/user/".concat(item.User.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    }, me.nickname[0]))),
    title: me.nickname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onLogOut,
    loading: logOutLoading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "\uB85C\uADF8\uC544\uC6C3"));
};
_s(UserProfile, "vyrowHTqhqIO66L5UXqqoOurJQ4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});
_c = UserProfile;
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);
var _c;
$RefreshReg$(_c, "UserProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsIl9zIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIl91c2VTZWxlY3RvciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJsb2dPdXRMb2FkaW5nIiwib25Mb2dPdXQiLCJ1c2VDYWxsYmFjayIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJfX2pzeCIsIkNhcmQiLCJhY3Rpb25zIiwia2V5IiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIlBvc3RzIiwibGVuZ3RoIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsIk1ldGEiLCJhdmF0YXIiLCJMaW5rIiwiaHJlZiIsImNvbmNhdCIsIml0ZW0iLCJVc2VyIiwiaWQiLCJBdmF0YXIiLCJuaWNrbmFtZSIsInRpdGxlIiwiQnV0dG9uIiwib25DbGljayIsImxvYWRpbmciLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNDO0FBQ1c7QUFDQTtBQUNkO0FBRXpDLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7RUFBQUMsRUFBQTtFQUN4QixJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQUU7RUFDOUIsSUFBQUMsWUFBQSxHQUE4QkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFLO01BQUEsT0FBS0EsS0FBSyxDQUFDQyxJQUFJO0lBQUEsRUFBQztJQUF4REMsRUFBRSxHQUFBSixZQUFBLENBQUZJLEVBQUU7SUFBRUMsYUFBYSxHQUFBTCxZQUFBLENBQWJLLGFBQWE7RUFDekIsSUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFlBQU07SUFDakNULFFBQVEsQ0FBQ1UsMEVBQW1CLEVBQUUsQ0FBQztF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O0FBQUFxQyxFQUFBLEdBRnJDMUMsV0FBVztBQTJDRkEsMEVBQVcsRUFBQztBQUFBLElBQUEwQyxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMTNlMTEzODlkMWVkMjNiYTRlZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgQ2FyZCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGxvZ291dFJlcXVlc3RBY3Rpb24gfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvbGlua1wiO1xuXG5jb25zdCBVc2VyUHJvZmlsZSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IG1lLCBsb2dPdXRMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCBvbkxvZ091dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaChsb2dvdXRSZXF1ZXN0QWN0aW9uKCkpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIGFjdGlvbnM9e1tcbiAgICAgICAgPGRpdiBrZXk9XCJ0d2l0XCI+XG4gICAgICAgICAg7Ke57KixXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAge21lLlBvc3RzLmxlbmd0aH1cbiAgICAgICAgPC9kaXY+LFxuICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2luZ3NcIj5cbiAgICAgICAgICDtjJTroZzsnolcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICB7bWUuRm9sbG93aW5ncy5sZW5ndGh9XG4gICAgICAgIDwvZGl2PixcbiAgICAgICAgPGRpdiBrZXk9XCJmb2xsb3dlcnNcIj5cbiAgICAgICAgICDtjJTroZzsm4xcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICB7bWUuRm9sbG93ZXJzLmxlbmd0aH1cbiAgICAgICAgPC9kaXY+LFxuICAgICAgXX1cbiAgICA+XG4gICAgICA8Q2FyZC5NZXRhXG4gICAgICAgIGF2YXRhcj17XG4gICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7aXRlbS5Vc2VyLmlkfWB9PlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxBdmF0YXI+e21lLm5pY2tuYW1lWzBdfTwvQXZhdGFyPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgfVxuICAgICAgICB0aXRsZT17bWUubmlja25hbWV9XG4gICAgICAvPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkxvZ091dH0gbG9hZGluZz17bG9nT3V0TG9hZGluZ30+XG4gICAgICAgIOuhnOq3uOyVhOybg1xuICAgICAgPC9CdXR0b24+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7XG4iXSwic291cmNlUm9vdCI6IiJ9