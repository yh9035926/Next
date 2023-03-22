webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
  _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\components\\PostImages.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var PostImages = function PostImages(_ref) {
  _s();
  var images = _ref.images;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    showImagesZoom = _useState[0],
    setSHowImagesZoom = _useState[1];
  {
    var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
      setSHowImagesZoom(true);
    }, []);
    if (images.length === 1) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
        role: "presentation",
        src: images[0].src,
        alt: images[0].src,
        onClick: onZoom,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }
      }));
    }
    if (images.length === 2) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
        role: "presentation",
        src: images[0].src,
        alt: images[0].src,
        onClick: onZoom,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }
      }), __jsx("img", {
        role: "presentation",
        src: images[1].src,
        alt: images[1].src,
        onClick: onZoom,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }
      }));
    }
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }
    }, __jsx("img", {
      role: "presentation",
      src: images[0].src,
      alt: images[0].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }
    }), __jsx("div", {
      role: "presentation",
      style: {
        display: "inline-block",
        width: "50%",
        textAlign: textAlign
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }));
  }
};
_s(PostImages, "4N7Jso6HgXxUdi+Yk93xCbkMD7E=");
_c = PostImages;
PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);
var _c;
$RefreshReg$(_c, "PostImages");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIl0sIm5hbWVzIjpbIlBvc3RJbWFnZXMiLCJfcmVmIiwiX3MiLCJpbWFnZXMiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInNob3dJbWFnZXNab29tIiwic2V0U0hvd0ltYWdlc1pvb20iLCJvblpvb20iLCJ1c2VDYWxsYmFjayIsImxlbmd0aCIsIl9fanN4IiwiUmVhY3QiLCJGcmFnbWVudCIsInJvbGUiLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInN0eWxlIiwiZGlzcGxheSIsIndpZHRoIiwidGV4dEFsaWduIiwiX2MiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0IiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ2xCO0FBQ25DLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBQyxJQUFBLEVBQW1CO0VBQUFDLEVBQUE7RUFBQSxJQUFiQyxNQUFNLEdBQUFGLElBQUEsQ0FBTkUsTUFBTTtFQUMxQixJQUFBQyxTQUFBLEdBQTRDQyxzREFBUSxDQUFDLEtBQUssQ0FBQztJQUFwREMsY0FBYyxHQUFBRixTQUFBO0lBQUVHLGlCQUFpQixHQUFBSCxTQUFBO0VBQ3hDO0lBQ0UsSUFBTUksTUFBTSxHQUFHQyx5REFBVyxDQUFDLFlBQU07TUFDL0JGLGlCQUFpQixDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRU4sSUFBSUosTUFBTSxDQUFDTyxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQ3ZCLE9BQ0VDLEtBQUEsQ0FBQUMsNENBQUEsQ0FBQUMsUUFBQSxRQUNFRixLQUFBO1FBQ0VHLElBQUksRUFBQyxjQUFjO1FBQ25CQyxHQUFHLEVBQUVaLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ1ksR0FBSTtRQUNuQkMsR0FBRyxFQUFFYixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNZLEdBQUk7UUFDbkJFLE9BQU8sRUFBRVQsTUFBTztRQUFBVSxNQUFBLEVBQUFDLEtBQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxFQUNoQixDQUNEO0lBRVA7SUFDQSxJQUFJckIsTUFBTSxDQUFDTyxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQ3ZCLE9BQ0VDLEtBQUEsQ0FBQUMsNENBQUEsQ0FBQUMsUUFBQSxRQUNFRixLQUFBO1FBQ0VHLElBQUksRUFBQyxjQUFjO1FBQ25CQyxHQUFHLEVBQUVaLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ1ksR0FBSTtRQUNuQkMsR0FBRyxFQUFFYixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNZLEdBQUk7UUFDbkJFLE9BQU8sRUFBRVQsTUFBTztRQUFBVSxNQUFBLEVBQUFDLEtBQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxFQUNoQixFQUNGYixLQUFBO1FBQ0VHLElBQUksRUFBQyxjQUFjO1FBQ25CQyxHQUFHLEVBQUVaLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ1ksR0FBSTtRQUNuQkMsR0FBRyxFQUFFYixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNZLEdBQUk7UUFDbkJFLE9BQU8sRUFBRVQsTUFBTztRQUFBVSxNQUFBLEVBQUFDLEtBQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxFQUNoQixDQUNEO0lBRVA7SUFDQSxPQUNFYixLQUFBO01BQUFPLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQ0ViLEtBQUE7TUFDRUcsSUFBSSxFQUFDLGNBQWM7TUFDbkJDLEdBQUcsRUFBRVosTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDWSxHQUFJO01BQ25CQyxHQUFHLEVBQUViLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ1ksR0FBSTtNQUNuQkUsT0FBTyxFQUFFVCxNQUFPO01BQUFVLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEVBQ2hCLEVBQ0ZiLEtBQUE7TUFBS0csSUFBSSxFQUFDLGNBQWM7TUFBQ1csS0FBSyxFQUFFO1FBQUNDLE9BQU8sRUFBQyxjQUFjO1FBQUVDLEtBQUssRUFBQyxLQUFLO1FBQUVDLFNBQVMsRUFBVEE7TUFBUyxDQUFFO01BQUFWLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEVBQVEsQ0FDckY7RUFFVjtBQUNGLENBQUM7QUFBQ3RCLEVBQUEsQ0FqRElGLFVBQVU7QUFBQTZCLEVBQUEsR0FBVjdCLFVBQVU7QUFtRGhCQSxVQUFVLENBQUM4QixTQUFTLEdBQUc7RUFDckIzQixNQUFNLEVBQUU0QixpREFBUyxDQUFDQyxPQUFPLENBQUNELGlEQUFTLENBQUNFLE1BQU07QUFDNUMsQ0FBQztBQUVjakMseUVBQVUsRUFBQztBQUFBLElBQUE2QixFQUFBO0FBQUFLLFlBQUEsQ0FBQUwsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41M2FkMWNhNmZhNmFjNmY4YzMwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmNvbnN0IFBvc3RJbWFnZXMgPSAoeyBpbWFnZXMgfSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93SW1hZ2VzWm9vbSwgc2V0U0hvd0ltYWdlc1pvb21dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHtcclxuICAgIGNvbnN0IG9uWm9vbSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgc2V0U0hvd0ltYWdlc1pvb20odHJ1ZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgaWYgKGltYWdlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgICAgc3JjPXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgICAgICBhbHQ9e2ltYWdlc1swXS5zcmN9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgICBzcmM9e2ltYWdlc1swXS5zcmN9XHJcbiAgICAgICAgICAgIGFsdD17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgICAgb25DbGljaz17b25ab29tfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICAgIHNyYz17aW1hZ2VzWzFdLnNyY31cclxuICAgICAgICAgICAgYWx0PXtpbWFnZXNbMV0uc3JjfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvblpvb219XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgIHNyYz17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgIGFsdD17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgcm9sZT1cInByZXNlbnRhdGlvblwiIHN0eWxlPXt7ZGlzcGxheTpcImlubGluZS1ibG9ja1wiLCB3aWR0aDpcIjUwJVwiLCB0ZXh0QWxpZ259fSA+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5Qb3N0SW1hZ2VzLnByb3BUeXBlcyA9IHtcclxuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEltYWdlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==