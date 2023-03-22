webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ImagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject,
  _templateObject2,
  _templateObject3,
  _this = undefined,
  _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\components\\ImagesZoom\\index.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: fixed;\n  z-index: 5000;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n"])));
_c = Overlay;
var Header = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].header(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 44px;\n  background: white;\n  position: relative;\n  padding: 0;\n  text-align: center;\n\n  & h1 {\n    margin: 0;\n    font-size: 17px;\n    color: #333;\n    line-height: 44px;\n  }\n\n  & bottom {\n    position: absolute;\n    right: 0;\n    top: 0;\n    padding: 15px;\n    line-height: 14px;\n    cursor: pointer;\n  }\n"])));
_c2 = Header;
var SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3 || (_templateObject3 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: calc() (100%-44px);\n  \n"])));
var ImagesZoom = function ImagesZoom(_ref) {
  _s();
  var images = _ref.images,
    onClose = _ref.onClose;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
    currentSlide = _useState[0],
    setCurrentSlide = _useState[1];
  return __jsx(Overlay, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "\uC0C1\uC138 \uC774\uBBF8\uC9C0"), __jsx("button", {
    onClick: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "X")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, {
    initialSlide: 0,
    afterChange: function afterChange(slide) {
      return setCurrentSlide(slide);
    },
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, images.map(function (v) {
    return __jsx("div", {
      key: v.src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: v.src,
      alt: v.src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }));
  })))));
};
_s(ImagesZoom, "VQw0KpRgltXDNPWBgmV3GhZXdQE=");
_c3 = ImagesZoom;
ImagesZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);
var _c, _c2, _c3;
$RefreshReg$(_c, "Overlay");
$RefreshReg$(_c2, "Header");
$RefreshReg$(_c3, "ImagesZoom");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIl0sIm5hbWVzIjpbIk92ZXJsYXkiLCJzdHlsZWQiLCJkaXYiLCJfdGVtcGxhdGVPYmplY3QiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwiX2MiLCJIZWFkZXIiLCJoZWFkZXIiLCJfdGVtcGxhdGVPYmplY3QyIiwiX2MyIiwiU2xpY2tXcmFwcGVyIiwiX3RlbXBsYXRlT2JqZWN0MyIsIkltYWdlc1pvb20iLCJfcmVmIiwiX3MiLCJpbWFnZXMiLCJvbkNsb3NlIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJfX2pzeCIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJvbkNsaWNrIiwiU2xpY2siLCJpbml0aWFsU2xpZGUiLCJhZnRlckNoYW5nZSIsInNsaWRlIiwiaW5maW5pdGUiLCJhcnJvd3MiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsIm1hcCIsInYiLCJrZXkiLCJzcmMiLCJhbHQiLCJfYzMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNLO0FBQ1I7QUFDTztBQUV2QyxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQUcsQ0FBQUMsZUFBQSxLQUFBQSxlQUFBLEdBQUFDLGdHQUFBLGtHQU96QjtBQUFDQyxFQUFBLEdBUElMLE9BQU87QUFTYixJQUFNTSxNQUFNLEdBQUdMLHlEQUFNLENBQUNNLE1BQU0sQ0FBQUMsZ0JBQUEsS0FBQUEsZ0JBQUEsR0FBQUosZ0dBQUEsMlZBc0IzQjtBQUFDSyxHQUFB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QUMsQ0FBQ0MsVUFBVTtFQUN0RGhDLE9BQU8sRUFBRTZCLGlEQUFTLENBQUNJLElBQUksQ0FBQ0Q7QUFDMUIsQ0FBQztBQUVjcEMseUVBQVUsRUFBQztBQUFBLElBQUFQLEVBQUEsRUFBQUksR0FBQSxFQUFBa0MsR0FBQTtBQUFBTyxZQUFBLENBQUE3QyxFQUFBO0FBQUE2QyxZQUFBLENBQUF6QyxHQUFBO0FBQUF5QyxZQUFBLENBQUFQLEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmZhZGViMmIwODExODE1ODA5Y2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTbGljayBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA1MDAwO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgJiBoMSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gIH1cclxuXHJcbiAgJiBib3R0b20ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2xpY2tXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IGNhbGMoKSAoMTAwJS00NHB4KTtcclxuICBcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlc1pvb20gPSAoeyBpbWFnZXMsIG9uQ2xvc2UgfSkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuICByZXR1cm4gKFxyXG4gICAgPE92ZXJsYXk+XHJcbiAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgPGgxPuyDgeyEuCDsnbTrr7jsp4A8L2gxPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0+WDwvYnV0dG9uPlxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFNsaWNrXHJcbiAgICAgICAgICAgIGluaXRpYWxTbGlkZT17MH1cclxuICAgICAgICAgICAgYWZ0ZXJDaGFuZ2U9eyhzbGlkZSkgPT4gc2V0Q3VycmVudFNsaWRlKHNsaWRlKX1cclxuICAgICAgICAgICAgaW5maW5pdGVcclxuICAgICAgICAgICAgYXJyb3dzPXtmYWxzZX1cclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93PXsxfVxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbD17MX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2ltYWdlcy5tYXAoKHYpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17di5zcmN9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Yuc3JjfSBhbHQ9e3Yuc3JjfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2xpY2s+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9PdmVybGF5PlxyXG4gICk7XHJcbn07XHJcblxyXG5JbWFnZXNab29tLnByb3BUeXBlcyA9IHtcclxuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlc1pvb207XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=