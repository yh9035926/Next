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
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(Head, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "\uB0B4 \uC815\uBCF4")), userInfo ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    actions: [__jsx("div", {
      key: "twit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, "\uC9F9\uCA31", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }
    }), userInfo.Posts.lengh), __jsx("div", {
      key: "followings",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, "\uD314\uB85C\uC789", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 15
      }
    }), userInfo.Followings), __jsx("div", {
      key: "followers",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, "\uD314\uB85C\uC6CC", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 15
      }
    }), userInfo.Followers)],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }, userInfo.nickname[0]),
    title: userInfo.nickname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  })) : null);
};
_s(About, "WqKc7F2tYtC5KC6C5AkD+RLoWFg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOlsiQWJvdXQiLCJfcyIsIl91c2VTZWxlY3RvciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwidXNlckluZm8iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiX19qc3giLCJBcHBMYXlvdXQiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiSGVhZCIsIkNhcmQiLCJhY3Rpb25zIiwia2V5IiwiUG9zdHMiLCJsZW5naCIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJNZXRhIiwiYXZhdGFyIiwiQXZhdGFyIiwibmlja25hbWUiLCJ0aXRsZSIsIl9jIiwiX19OX1NTRyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0M7QUFDVztBQUNQO0FBSWhELElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFLQSxDQUFBLEVBQVM7RUFBQUMsRUFBQTtFQUNsQixJQUFBQyxZQUFBLEdBQXFCQywrREFBVyxDQUFDLFVBQUNDLEtBQUs7TUFBQSxPQUFLQSxLQUFLLENBQUNDLElBQUk7SUFBQSxFQUFDO0lBQS9DQyxRQUFRLEdBQUFKLFlBQUEsQ0FBUkksUUFBUTtFQUNoQixJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQUU7RUFDOUIsT0FDRUMsS0FBQSxDQUFDQyw2REFBUztJQUFBQyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNSUixLQUFBLENBQUNTLElBQUk7SUFBQVAsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDSFIsS0FBQTtJQUFBRSxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSx5QkFBbUIsQ0FDZCxFQUNOWCxRQUFRLEdBQ1BHLEtBQUEsQ0FBQ1UseUNBQUk7SUFDSEMsT0FBTyxFQUFFLENBQ1BYLEtBQUE7TUFBS1ksR0FBRyxFQUFDLE1BQU07TUFBQVYsTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsbUJBRWJSLEtBQUE7TUFBQUUsTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsRUFBTSxFQUNMWCxRQUFRLENBQUNnQixLQUFLLENBQUNDLEtBQUssQ0FDakIsRUFDTmQsS0FBQTtNQUFLWSxHQUFHLEVBQUMsWUFBWTtNQUFBVixNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSx5QkFFbkJSLEtBQUE7TUFBQUUsTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsRUFBTSxFQUNMWCxRQUFRLENBQUNrQixVQUFVLENBQ2hCLEVBQ05mLEtBQUE7TUFBS1ksR0FBRyxFQUFDLFdBQVc7TUFBQVYsTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEseUJBRWxCUixLQUFBO01BQUFFLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEVBQU0sRUFDTFgsUUFBUSxDQUFDbUIsU0FBUyxDQUNmLENBQ047SUFBQWQsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FFRlIsS0FBQSxDQUFDVSx5Q0FBSSxDQUFDTyxJQUFJO0lBQ1JDLE1BQU0sRUFBRWxCLEtBQUEsQ0FBQ21CLDJDQUFNO01BQUFqQixNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxHQUFFWCxRQUFRLENBQUN1QixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQVc7SUFDaERDLEtBQUssRUFBRXhCLFFBQVEsQ0FBQ3VCLFFBQVM7SUFBQWxCLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEVBQ3pCLENBQ0csR0FDTCxJQUFJLENBQ0U7QUFFaEIsQ0FBQztBQUFDaEIsRUFBQSxDQXBDSUQsS0FBSztFQUFBLFFBQ1lHLHVEQUFXLEVBQ2ZLLHVEQUFXO0FBQUE7QUFBQXVCLEVBQUEsR0FGeEIvQixLQUFLO0FBQUEsSUFBQWdDLE9BQUE7QUE4Q0loQyxvRUFBSyxFQUFDO0FBQUEsSUFBQStCLEVBQUE7QUFBQUUsWUFBQSxDQUFBRixFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjNlOWFkMTlmNWM5NzI4M2EzNGU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIENhcmQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IHsgTE9BRF9VU0VSX1JFUVVFU1QgfSBmcm9tIFwiLi4vdHlwZVwiO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyB1c2VySW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT7rgrQg7KCV67O0PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7dXNlckluZm8gPyAoXHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgPGRpdiBrZXk9XCJ0d2l0XCI+XHJcbiAgICAgICAgICAgICAg7Ke57KixXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAge3VzZXJJbmZvLlBvc3RzLmxlbmdofVxyXG4gICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgIDxkaXYga2V5PVwiZm9sbG93aW5nc1wiPlxyXG4gICAgICAgICAgICAgIO2MlOuhnOyeiVxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIHt1c2VySW5mby5Gb2xsb3dpbmdzfVxyXG4gICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgIDxkaXYga2V5PVwiZm9sbG93ZXJzXCI+XHJcbiAgICAgICAgICAgICAg7YyU66Gc7JuMXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAge3VzZXJJbmZvLkZvbGxvd2Vyc31cclxuICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57dXNlckluZm8ubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICB0aXRsZT17dXNlckluZm8ubmlja25hbWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8L0FwcExheW91dD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSB3cmFwcGVyLmdldFN0YXRpY1Byb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAgIGRhdGE6IDEsXHJcbiAgfSk7XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=