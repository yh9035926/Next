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
  var onClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    set;
  });
  if (images.length === 1) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      role: "presentation",
      src: images[0].src,
      alt: images[0].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    }), showImagesZoom && __jsx(ImageZoom, {
      image: images,
      onClose: onClose,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 28
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
        lineNumber: 30,
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
        lineNumber: 36,
        columnNumber: 9
      }
    }));
  }
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
      lineNumber: 47,
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
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354 \uBCF4\uAE30"));
};
_s(PostImages, "aDsyqqWv/0qD/+mBHrak0ynn2z8=");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIl0sIm5hbWVzIjpbIlBvc3RJbWFnZXMiLCJfcmVmIiwiX3MiLCJpbWFnZXMiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInNob3dJbWFnZXNab29tIiwic2V0U0hvd0ltYWdlc1pvb20iLCJvblpvb20iLCJ1c2VDYWxsYmFjayIsIm9uQ2xvc2UiLCJzZXQiLCJsZW5ndGgiLCJfX2pzeCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJyb2xlIiwic3JjIiwiYWx0Iiwib25DbGljayIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJJbWFnZVpvb20iLCJpbWFnZSIsInN0eWxlIiwiZGlzcGxheSIsIndpZHRoIiwidGV4dEFsaWduIiwidmVydGljYWxBbGlnbiIsIlBsdXNPdXRsaW5lZCIsIl9jIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDbEI7QUFDYztBQUNqRCxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQUMsSUFBQSxFQUFtQjtFQUFBQyxFQUFBO0VBQUEsSUFBYkMsTUFBTSxHQUFBRixJQUFBLENBQU5FLE1BQU07RUFDMUIsSUFBQUMsU0FBQSxHQUE0Q0Msc0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBcERDLGNBQWMsR0FBQUYsU0FBQTtJQUFFRyxpQkFBaUIsR0FBQUgsU0FBQTtFQUV4QyxJQUFNSSxNQUFNLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUMvQkYsaUJBQWlCLENBQUMsSUFBSSxDQUFDO0VBQ3pCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDUixJQUFNRyxPQUFPLEdBQUNELHlEQUFXLENBQUMsWUFBSTtJQUMxQkUsR0FBRztFQUNQ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QUNoQmIsS0FBQTtJQUFBTyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxFQUFNLEVBQ0x2QixNQUFNLENBQUNTLE1BQU0sR0FBRyxDQUFDLGtEQUVkLENBQ0Y7QUFFVixDQUFDO0FBQUNWLEVBQUEsQ0FqRUlGLFVBQVU7QUFBQW1DLEVBQUEsR0FBVm5DLFVBQVU7QUFtRWhCQSxVQUFVLENBQUNvQyxTQUFTLEdBQUc7RUFDckJqQyxNQUFNLEVBQUVrQyxpREFBUyxDQUFDQyxPQUFPLENBQUNELGlEQUFTLENBQUNFLE1BQU07QUFDNUMsQ0FBQztBQUVjdkMseUVBQVUsRUFBQztBQUFBLElBQUFtQyxFQUFBO0FBQUFLLFlBQUEsQ0FBQUwsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZmExNjc0MjFmNDA1NTU4MWMzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5jb25zdCBQb3N0SW1hZ2VzID0gKHsgaW1hZ2VzIH0pID0+IHtcclxuICBjb25zdCBbc2hvd0ltYWdlc1pvb20sIHNldFNIb3dJbWFnZXNab29tXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgb25ab29tID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0U0hvd0ltYWdlc1pvb20odHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG5jb25zdCBvbkNsb3NlPXVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICBzZXRcclxufSlcclxuXHJcbiAgaWYgKGltYWdlcy5sZW5ndGggPT09IDEpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICBzcmM9e2ltYWdlc1swXS5zcmN9XHJcbiAgICAgICAgICBhbHQ9e2ltYWdlc1swXS5zcmN9XHJcbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7c2hvd0ltYWdlc1pvb20gJiYgPEltYWdlWm9vbSBpbWFnZT17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgIHNyYz17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgIGFsdD17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgc3JjPXtpbWFnZXNbMV0uc3JjfVxyXG4gICAgICAgICAgYWx0PXtpbWFnZXNbMV0uc3JjfVxyXG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICBzcmM9e2ltYWdlc1swXS5zcmN9XHJcbiAgICAgICAgYWx0PXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgd2lkdGg6IFwiNTAlXCIsXHJcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8UGx1c091dGxpbmVkIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAge2ltYWdlcy5sZW5ndGggLSAxfVxyXG4gICAgICAgIOqwnOydmCDsgqzsp4Qg642UIOuztOq4sFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Qb3N0SW1hZ2VzLnByb3BUeXBlcyA9IHtcclxuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEltYWdlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==