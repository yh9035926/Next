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
var SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3 || (_templateObject3 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: calc() (100%-44px);\n  background: #090909;\n"])));
_c3 = SlickWrapper;
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
  }, __jsx(SlickWrapper, {
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
    return __jsx(Img, {
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
_c4 = ImagesZoom;
ImagesZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);
var _c, _c2, _c3, _c4;
$RefreshReg$(_c, "Overlay");
$RefreshReg$(_c2, "Header");
$RefreshReg$(_c3, "SlickWrapper");
$RefreshReg$(_c4, "ImagesZoom");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIl0sIm5hbWVzIjpbIk92ZXJsYXkiLCJzdHlsZWQiLCJkaXYiLCJfdGVtcGxhdGVPYmplY3QiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwiX2MiLCJIZWFkZXIiLCJoZWFkZXIiLCJfdGVtcGxhdGVPYmplY3QyIiwiX2MyIiwiU2xpY2tXcmFwcGVyIiwiX3RlbXBsYXRlT2JqZWN0MyIsIl9jMyIsIkltYWdlc1pvb20iLCJfcmVmIiwiX3MiLCJpbWFnZXMiLCJvbkNsb3NlIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJfX2pzeCIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJvbkNsaWNrIiwiU2xpY2siLCJpbml0aWFsU2xpZGUiLCJhZnRlckNoYW5nZSIsInNsaWRlIiwiaW5maW5pdGUiLCJhcnJvd3MiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsIm1hcCIsInYiLCJJbWciLCJrZXkiLCJzcmMiLCJhbHQiLCJfYzQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNLO0FBQ1I7QUFDTztBQUV2QyxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQUcsQ0FBQUMsZUFBQSxLQUFBQSxlQUFBLEdBQUFDLGdHQUFBLGtHQU96QjtBQUFDQyxFQUFBLEdBUElMLE9BQU87QUFTYixJQUFNTSxNQUFNLEdBQUdMLHlEQUFNLENBQUNNLE1BQU0sQ0FBQUMsZ0JBQUEsS0FBQUEsZ0JBQUEsR0FBQUosZ0dBQUEsMlZBc0Iz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QjlCLE1BQU0sRUFBRStCLGlEQUFTLENBQUNDLE9BQU8sQ0FBQ0QsaURBQVMsQ0FBQ0UsTUFBTSxDQUFDLENBQUNDLFVBQVU7RUFDdERqQyxPQUFPLEVBQUU4QixpREFBUyxDQUFDSSxJQUFJLENBQUNEO0FBQzFCLENBQUM7QUFFY3JDLHlFQUFVLEVBQUM7QUFBQSxJQUFBUixFQUFBLEVBQUFJLEdBQUEsRUFBQUcsR0FBQSxFQUFBaUMsR0FBQTtBQUFBTyxZQUFBLENBQUEvQyxFQUFBO0FBQUErQyxZQUFBLENBQUEzQyxHQUFBO0FBQUEyQyxZQUFBLENBQUF4QyxHQUFBO0FBQUF3QyxZQUFBLENBQUFQLEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWU3N2ZiZmM4ZWUwNzI2YjIwOGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTbGljayBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA1MDAwO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgJiBoMSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gIH1cclxuXHJcbiAgJiBib3R0b20ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2xpY2tXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IGNhbGMoKSAoMTAwJS00NHB4KTtcclxuICBiYWNrZ3JvdW5kOiAjMDkwOTA5O1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VzWm9vbSA9ICh7IGltYWdlcywgb25DbG9zZSB9KSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8T3ZlcmxheT5cclxuICAgICAgPEhlYWRlcj5cclxuICAgICAgICA8aDE+7IOB7IS4IOydtOuvuOyngDwvaDE+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfT5YPC9idXR0b24+XHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxTbGlja1dyYXBwZXI+XHJcbiAgICAgICAgICA8U2xpY2tcclxuICAgICAgICAgICAgaW5pdGlhbFNsaWRlPXswfVxyXG4gICAgICAgICAgICBhZnRlckNoYW5nZT17KHNsaWRlKSA9PiBzZXRDdXJyZW50U2xpZGUoc2xpZGUpfVxyXG4gICAgICAgICAgICBpbmZpbml0ZVxyXG4gICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c9ezF9XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsPXsxfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aW1hZ2VzLm1hcCgodikgPT4gKFxyXG4gICAgICAgICAgICAgIDxJbWcga2V5PXt2LnNyY30+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17di5zcmN9IGFsdD17di5zcmN9IC8+XHJcbiAgICAgICAgICAgICAgPC9JbWc+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TbGljaz5cclxuICAgICAgICA8L1NsaWNrV3JhcHBlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L092ZXJsYXk+XHJcbiAgKTtcclxufTtcclxuXHJcbkltYWdlc1pvb20ucHJvcFR5cGVzID0ge1xyXG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VzWm9vbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==