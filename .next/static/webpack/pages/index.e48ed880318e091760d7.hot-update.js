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
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
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
        lineNumber: 14,
        columnNumber: 9
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
        lineNumber: 26,
        columnNumber: 9
      }
    }), __jsx("img", {
      role: "presentation",
      src: images[1].src,
      alt: images[1].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }));
  }
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx("img", {
    role: "presentation",
    src: images[0].src,
    alt: images[0].src,
    onClick: onZoom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx("div", {
    role: "presentation",
    style: {
      display: "inline-block",
      width: "50%",
      textAlign: "center",
      verticalAlign: "middle"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354 \uBCF4\uAE30"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIl0sIm5hbWVzIjpbIlBvc3RJbWFnZXMiLCJfcmVmIiwiX3MiLCJpbWFnZXMiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInNob3dJbWFnZXNab29tIiwic2V0U0hvd0ltYWdlc1pvb20iLCJvblpvb20iLCJ1c2VDYWxsYmFjayIsImxlbmd0aCIsIl9fanN4IiwiUmVhY3QiLCJGcmFnbWVudCIsInJvbGUiLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInN0eWxlIiwiZGlzcGxheSIsIndpZHRoIiwidGV4dEFsaWduIiwidmVydGljYWxBbGlnbiIsIl9jIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDbEI7QUFDYztBQUNqRCxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQUMsSUFBQSxFQUFtQjtFQUFBQyxFQUFBO0VBQUEsSUFBYkMsTUFBTSxHQUFBRixJQUFBLENBQU5FLE1BQU07RUFDMUIsSUFBQUMsU0FBQSxHQUE0Q0Msc0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBcERDLGNBQWMsR0FBQUYsU0FBQTtJQUFFRyxpQkFBaUIsR0FBQUgsU0FBQTtFQUV4QyxJQUFNSSxNQUFNLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUMvQkYsaUJBQWlCLENBQUMsSUFBSSxDQUFDO0VBQ3pCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFJSixNQUFNLENBQUNPLE1BQU0sS0FBSyxDQUFDLEVBQUU7SUFDdkIsT0FDRUMsS0FBQSxDQUFBQyw0Q0FBQSxDQUFBQyxRQUFBLFFBQ0VGLEtBQUE7TUFDRUcsSUFBSSxFQUFDLGNBQWM7TUFDbkJDLEdBQUcsRUFBRVosTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDWSxHQUFJO01BQ25CQyxHQUFHLEVBQUViLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ1ksR0FBSTtNQUNuQkUsT0FBTyxFQUFFVCxNQUFPO01BQUFVLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEVBQ2hCLENBQ0Q7RUFFUDtFQUNBLElBQUlyQixNQUFNLENBQUNPLE1BQU0sS0FBSyxDQUFDLEVBQUU7SUFDdkIsT0FDRUMsS0FBQSxDQUFBQyw0Q0FBQSxDQUFBQyxRQUFBLFFBQ0VGLEtBQUE7TUFDRUcsSUFBSSxFQUFDLGNBQWM7TUFDbkJDLEdBQUcsRUFBRVosTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDWSxHQUFJO01BQ25CQyxHQUFHLEVBQUViLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ1ksR0FBSTtNQUNuQkUsT0FBTyxFQUFFVCxNQUFPO01BQUFVLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEVBQ2hCLEVBQ0ZiLEtBQUE7TUFDRUcsSUFBSSxFQUFDLGNBQWM7TUFDbkJDLEdBQUcsRUFBRVosTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDWSxHQUFJO01BQ25CQyxHQUFHLEVBQUViLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ1ksR0FBSTtNQUNuQkUsT0FBTyxFQUFFVCxNQUFPO01BQUFVLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEVBQ2hCLENBQ0Q7RUFFUDtFQUNBLE9BQ0ViLEtBQUE7SUFBQU8sTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDRWIsS0FBQTtJQUNFRyxJQUFJLEVBQUMsY0FBYztJQUNuQkMsR0FBRyxFQUFFWixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNZLEdBQUk7SUFDbkJDLEdBQUcsRUFBRWIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDWSxHQUFJO0lBQ25CRSxPQUFPLEVBQUVULE1BQU87SUFBQVUsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsRUFDaEIsRUFDRmIsS0FBQTtJQUNFRyxJQUFJLEVBQUMsY0FBYztJQUNuQlcsS0FBSyxFQUFFO01BQ0xDLE9BQU8sRUFBRSxjQUFjO01BQ3ZCQyxLQUFLLEVBQUUsS0FBSztNQUNaQyxTQUFTLEVBQUUsUUFBUTtNQUNuQkMsYUFBYSxFQUFFO0lBQ2pCLENBQUU7SUFBQVgsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FHRmIsS0FBQTtJQUFBTyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxFQUFNLEVBQ0xyQixNQUFNLENBQUNPLE1BQU0sR0FBRyxDQUFDLGtEQUVkLENBQ0Y7QUFFVixDQUFDO0FBQUNSLEVBQUEsQ0E3RElGLFVBQVU7QUFBQThCLEVBQUEsR0FBVjlCLFVBQVU7QUErRGhCQSxVQUFVLENBQUMrQixTQUFTLEdBQUc7RUFDckI1QixNQUFNLEVBQUU2QixpREFBUyxDQUFDQyxPQUFPLENBQUNELGlEQUFTLENBQUNFLE1BQU07QUFDNUMsQ0FBQztBQUVjbEMseUVBQVUsRUFBQztBQUFBLElBQUE4QixFQUFBO0FBQUFLLFlBQUEsQ0FBQUwsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNDhlZDg4MDMxOGUwOTE3NjBkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5jb25zdCBQb3N0SW1hZ2VzID0gKHsgaW1hZ2VzIH0pID0+IHtcclxuICBjb25zdCBbc2hvd0ltYWdlc1pvb20sIHNldFNIb3dJbWFnZXNab29tXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgb25ab29tID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0U0hvd0ltYWdlc1pvb20odHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgIHNyYz17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgIGFsdD17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgICAvPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChpbWFnZXMubGVuZ3RoID09PSAyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgc3JjPXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgICAgYWx0PXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICBzcmM9e2ltYWdlc1sxXS5zcmN9XHJcbiAgICAgICAgICBhbHQ9e2ltYWdlc1sxXS5zcmN9XHJcbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XHJcbiAgICAgICAgLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgIHNyYz17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICBhbHQ9e2ltYWdlc1swXS5zcmN9XHJcbiAgICAgICAgb25DbGljaz17b25ab29tfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICB3aWR0aDogXCI1MCVcIixcclxuICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICBcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICB7aW1hZ2VzLmxlbmd0aCAtIDF9XHJcbiAgICAgICAg6rCc7J2YIOyCrOynhCDrjZQg67O06riwXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblBvc3RJbWFnZXMucHJvcFR5cGVzID0ge1xyXG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0SW1hZ2VzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9