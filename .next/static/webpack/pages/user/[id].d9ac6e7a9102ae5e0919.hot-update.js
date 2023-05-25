webpackHotUpdate_N_E("pages/user/[id]",{

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
    }, __jsx(next_dist_client_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/user/".concat(me.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, "\uC9F9\uCA31", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
      }
    }), me.Posts.length))), __jsx("div", {
      key: "followings",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    }, __jsx(next_dist_client_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/profile",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, "\uD314\uB85C\uC789", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 15
      }
    }), me.Followings.length))), __jsx("div", {
      key: "followers",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }, __jsx(next_dist_client_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/profile",
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
    }, "\uD314\uB85C\uC6CC", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    }), me.Followers.length)))],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(next_dist_client_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/user/".concat(me.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }
    }, me.nickname[0]))),
    title: me.nickname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onLogOut,
    loading: logOutLoading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsIl9zIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIl91c2VTZWxlY3RvciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJsb2dPdXRMb2FkaW5nIiwib25Mb2dPdXQiLCJ1c2VDYWxsYmFjayIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJfX2pzeCIsIkNhcmQiLCJhY3Rpb25zIiwia2V5IiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIkxpbmsiLCJocmVmIiwiY29uY2F0IiwiaWQiLCJQb3N0cyIsImxlbmd0aCIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJNZXRhIiwiYXZhdGFyIiwiQXZhdGFyIiwibmlja25hbWUiLCJ0aXRsZSIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJsb2FkaW5nIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDQztBQUNXO0FBQ0E7QUFDZDtBQUV6QyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0VBQUFDLEVBQUE7RUFDeEIsSUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUFFO0VBQzlCLElBQUFDLFlBQUEsR0FBOEJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBSztNQUFBLE9BQUtBLEtBQUssQ0FBQ0MsSUFBSTtJQUFBLEVBQUM7SUFBeERDLEVBQUUsR0FBQUosWUFBQSxDQUFGSSxFQUFFO0lBQUVDLGFBQWEsR0FBQUwsWUFBQSxDQUFiSyxhQUFhO0VBQ3pCLElBQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0lBQ2pDVCxRQUFRLENBQUNVLDBFQUFtQixFQUFFLENBQUM7RUFDakMsQ0FBQyxFQUFF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TUFBQVYsTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsR0FDM0JWLEtBQUE7TUFBQUksTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsR0FDRVYsS0FBQSxDQUFDcUIsMkNBQU07TUFBQWpCLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQUVmLEVBQUUsQ0FBQzJCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBVSxDQUMvQixDQUVQO0lBQ0RDLEtBQUssRUFBRTVCLEVBQUUsQ0FBQzJCLFFBQVM7SUFBQWxCLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEVBQ25CLEVBQ0ZWLEtBQUEsQ0FBQ3dCLDJDQUFNO0lBQUNDLE9BQU8sRUFBRTVCLFFBQVM7SUFBQzZCLE9BQU8sRUFBRTlCLGFBQWM7SUFBQVEsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsOEJBRXpDLENBQ0o7QUFFWCxDQUFDO0FBQUN0QixFQUFBLENBckRJRCxXQUFXO0VBQUEsUUFDRUcsdURBQVcsRUFDRUUsdURBQVc7QUFBQTtBQUFBbUMsRUFBQSxHQUZyQ3hDLFdBQVc7QUF1REZBLDBFQUFXLEVBQUM7QUFBQSxJQUFBd0MsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9baWRdLmQ5YWM2ZTdhOTEwMmFlNWUwOTE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEF2YXRhciwgQnV0dG9uLCBDYXJkIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbG9nb3V0UmVxdWVzdEFjdGlvbiB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9saW5rXCI7XG5cbmNvbnN0IFVzZXJQcm9maWxlID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgbWUsIGxvZ091dExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKGxvZ291dFJlcXVlc3RBY3Rpb24oKSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgYWN0aW9ucz17W1xuICAgICAgICA8ZGl2IGtleT1cInR3aXRcIj5cbiAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvJHttZS5pZH1gfT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICDsp7nsqLFcbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIHttZS5Qb3N0cy5sZW5ndGh9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICAgIDxkaXYga2V5PVwiZm9sbG93aW5nc1wiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZWB9PlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIO2MlOuhnOyeiVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAge21lLkZvbGxvd2luZ3MubGVuZ3RofVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+LFxuICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2Vyc1wiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZWB9PlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIO2MlOuhnOybjFxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAge21lLkZvbGxvd2Vycy5sZW5ndGh9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICBdfVxuICAgID5cbiAgICAgIDxDYXJkLk1ldGFcbiAgICAgICAgYXZhdGFyPXtcbiAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvJHttZS5pZH1gfT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8QXZhdGFyPnttZS5uaWNrbmFtZVswXX08L0F2YXRhcj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIH1cbiAgICAgICAgdGl0bGU9e21lLm5pY2tuYW1lfVxuICAgICAgLz5cbiAgICAgIDxCdXR0b24gb25DbGljaz17b25Mb2dPdXR9IGxvYWRpbmc9e2xvZ091dExvYWRpbmd9PlxuICAgICAgICDroZzqt7jslYTsm4NcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==