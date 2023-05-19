webpackHotUpdate_N_E("pages/about",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
  _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\pages\\about.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var About = function About() {
  _s();
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
      return state.user;
    }),
    userInfo = _useSelector.userInfo;
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "\uB0B4 \uC815\uBCF4")), userInfo ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    actions: [__jsx("div", {
      key: "twit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, "\uC9F9\uCA31", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 15
      }
    }), userInfo.Posts.length), __jsx("div", {
      key: "followings",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, "\uD314\uB85C\uC789", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 15
      }
    }), userInfo.Followings.length), __jsx("div", {
      key: "followers",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, "\uD314\uB85C\uC6CC", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }
    }), userInfo.Followers.length)],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }, userInfo.nickname[0]),
    title: userInfo.nickname,
    description: "\uC6B0\uC790",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  })) : null);
};
_s(About, "tm9u9ATcYNEYVCp8P5F3TqiqzZ4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});
_c = About;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (About);
var _c;
$RefreshReg$(_c, "About");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOlsiQWJvdXQiLCJfcyIsIl91c2VTZWxlY3RvciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwidXNlckluZm8iLCJfX2pzeCIsIkFwcExheW91dCIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJIZWFkIiwiQ2FyZCIsImFjdGlvbnMiLCJrZXkiLCJQb3N0cyIsImxlbmd0aCIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJNZXRhIiwiYXZhdGFyIiwiQXZhdGFyIiwibmlja25hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiX2MiLCJfX05fU1NHIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNDO0FBQ1c7QUFDUDtBQUluQjtBQUM3QixJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBQSxFQUFTO0VBQUFDLEVBQUE7RUFDbEIsSUFBQUMsWUFBQSxHQUFxQkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFLO01BQUEsT0FBS0EsS0FBSyxDQUFDQyxJQUFJO0lBQUEsRUFBQztJQUEvQ0MsUUFBUSxHQUFBSixZQUFBLENBQVJJLFFBQVE7RUFFaEIsT0FDRUMsS0FBQSxDQUFDQyw2REFBUztJQUFBQyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNSUixLQUFBLENBQUNTLGdEQUFJO0lBQUFQLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ0hSLEtBQUE7SUFBQUUsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEseUJBQW1CLENBQ2QsRUFDTlQsUUFBUSxHQUNQQyxLQUFBLENBQUNVLHlDQUFJO0lBQ0hDLE9BQU8sRUFBRSxDQUNQWCxLQUFBO01BQUtZLEdBQUcsRUFBQyxNQUFNO01BQUFWLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLG1CQUViUixLQUFBO01BQUFFLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEVBQU0sRUFDTFQsUUFBUSxDQUFDYyxLQUFLLENBQUNDLE1BQU0sQ0FDbEIsRUFDTmQsS0FBQTtNQUFLWSxHQUFHLEVBQUMsWUFBWTtNQUFBVixNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSx5QkFFbkJSLEtBQUE7TUFBQUUsTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsRUFBTSxFQUNMVCxRQUFRLENBQUNnQixVQUFVLENBQUNELE1BQU0sQ0FDdkIsRUFDTmQsS0FBQTtNQUFLWSxHQUFHLEVBQUMsV0FBVztNQUFBVixNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSx5QkFFbEJSLEtBQUE7TUFBQUUsTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsRUFBTSxFQUNMVCxRQUFRLENBQUNpQixTQUFTLENBQUNGLE1BQU0sQ0FDdEIsQ0FDTjtJQUFBWixNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUVGUixLQUFBLENBQUNVLHlDQUFJLENBQUNPLElBQUk7SUFDUkMsTUFBTSxFQUFFbEIsS0FBQSxDQUFDbUIsMkNBQU07TUFBQWpCLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQUVULFFBQVEsQ0FBQ3FCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBVztJQUNoREMsS0FBSyxFQUFFdEIsUUFBUSxDQUFDcUIsUUFBUztJQUN6QkUsV0FBVyxFQUFDLGNBQUk7SUFBQXBCLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEVBQ2hCLENBQ0csR0FDTCxJQUFJLENBQ0U7QUFFaEIsQ0FBQztBQUFDZCxFQUFBLENBckNJRCxLQUFLO0VBQUEsUUFDWUcsdURBQVc7QUFBQTtBQUFBMkIsRUFBQSxHQUQ1QjlCLEtBQUs7QUFBQSxJQUFBK0IsT0FBQTtBQStDSS9CLG9FQUFLLEVBQUM7QUFBQSxJQUFBOEIsRUFBQTtBQUFBRSxZQUFBLENBQUFGLEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuZTVhYjllYWQ2YzQyMzllNjM4YTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgQ2FyZCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xyXG5pbXBvcnQgeyBMT0FEX1VTRVJfUkVRVUVTVCB9IGZyb20gXCIuLi90eXBlXCI7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdXNlckluZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+64K0IOygleuztDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAge3VzZXJJbmZvID8gKFxyXG4gICAgICAgIDxDYXJkXHJcbiAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgIDxkaXYga2V5PVwidHdpdFwiPlxyXG4gICAgICAgICAgICAgIOynueyosVxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIHt1c2VySW5mby5Qb3N0cy5sZW5ndGh9XHJcbiAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgPGRpdiBrZXk9XCJmb2xsb3dpbmdzXCI+XHJcbiAgICAgICAgICAgICAg7YyU66Gc7J6JXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAge3VzZXJJbmZvLkZvbGxvd2luZ3MubGVuZ3RofVxyXG4gICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgIDxkaXYga2V5PVwiZm9sbG93ZXJzXCI+XHJcbiAgICAgICAgICAgICAg7YyU66Gc7JuMXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAge3VzZXJJbmZvLkZvbGxvd2Vycy5sZW5ndGh9XHJcbiAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e3VzZXJJbmZvLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgdGl0bGU9e3VzZXJJbmZvLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIuyasOyekFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8L0FwcExheW91dD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSB3cmFwcGVyLmdldFN0YXRpY1Byb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAgIGRhdGE6IDEsXHJcbiAgfSk7XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=