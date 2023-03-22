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
  _templateObject4,
  _templateObject5,
  _templateObject6,
  _this = undefined,
  _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\components\\ImagesZoom\\index.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: fixed;\n  z-index: 5000;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n"])));
_c = Overlay;
var Header = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].header(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 44px;\n  background: white;\n  position: relative;\n  padding: 0;\n  text-align: center;\n\n  & h1 {\n    margin: 0;\n    font-size: 17px;\n    color: #333;\n    line-height: 44px;\n  }\n\n  & button {\n    position: absolute;\n    right: 0;\n    top: 0;\n    padding: 15px;\n    line-height: 14px;\n    cursor: pointer;\n  }\n"])));
_c2 = Header;
var SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3 || (_templateObject3 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: calc() (100%-44px);\n  background: #090909;\n"])));
_c3 = SlickWrapper;
var ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject4 || (_templateObject4 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 32px;\n  text-align: center;\n\n  & img {\n    margin: 0 auto;\n    max-height: 750px;\n  }\n"])));
_c4 = ImgWrapper;
var Indicator = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject5 || (_templateObject5 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: center;\n\n  & > div {\n    width: 75px;\n    height: 30px;\n    line-height: 30px;\nbor\n    background: #313131;\n    display: inline-block;\n    text-align: center;\n    color: white;\n    font-size: 15px;\n  }\n"])));
_c5 = Indicator;
var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["createGlobalStyle"])(_templateObject6 || (_templateObject6 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n.slick-slide{\n    display:inline-block\n}"])));
_c6 = Global;
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
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx(Global, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }), __jsx(Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, "\uC0C1\uC138 \uC774\uBBF8\uC9C0"), __jsx("button", {
    onClick: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, "X")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx(SlickWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, {
    initialSlide: 0,
    afterChange: function afterChange(slide) {
      return setCurrentSlide(slide);
    },
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, images.map(function (v) {
    return __jsx(ImgWrapper, {
      key: v.src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: v.src,
      alt: v.src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }
    }));
  })), __jsx(Indicator, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, currentSlide + 1, "", "/", images.length))));
};
_s(ImagesZoom, "VQw0KpRgltXDNPWBgmV3GhZXdQE=");
_c7 = ImagesZoom;
ImagesZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);
var _c, _c2, _c3, _c4, _c5, _c6, _c7;
$RefreshReg$(_c, "Overlay");
$RefreshReg$(_c2, "Header");
$RefreshReg$(_c3, "SlickWrapper");
$RefreshReg$(_c4, "ImgWrapper");
$RefreshReg$(_c5, "Indicator");
$RefreshReg$(_c6, "Global");
$RefreshReg$(_c7, "ImagesZoom");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIl0sIm5hbWVzIjpbIk92ZXJsYXkiLCJzdHlsZWQiLCJkaXYiLCJfdGVtcGxhdGVPYmplY3QiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwiX2MiLCJIZWFkZXIiLCJoZWFkZXIiLCJfdGVtcGxhdGVPYmplY3QyIiwiX2MyIiwiU2xpY2tXcmFwcGVyIiwiX3RlbXBsYXRlT2JqZWN0MyIsIl9jMyIsIkltZ1dyYXBwZXIiLCJfdGVtcGxhdGVPYmplY3Q0IiwiX2M0IiwiSW5kaWNhdG9yIiwiX3RlbXBsYXRlT2JqZWN0NSIsIl9jNSIsIkdsb2JhbCIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiX3RlbXBsYXRlT2JqZWN0NiIsIl9jNiIsIkltYWdlc1pvb20iLCJfcmVmIiwiX3MiLCJpbWFnZXMiLCJvbkNsb3NlIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJfX2pzeCIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJvbkNsaWNrIiwiU2xpY2siLCJpbml0aWFsU2xpZGUiLCJhZnRlckNoYW5nZSIsInNsaWRlIiwiaW5maW5pdGUiLCJhcnJvd3MiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsIm1hcCIsInYiLCJrZXkiLCJzcmMiLCJhbHQiLCJsZW5ndGgiLCJfYzciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNLO0FBQ1I7QUFDOEI7QUFFOUQsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFHLENBQUFDLGVB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QUFBLEVBQUFHLEdBQUEsRUFBQUcsR0FBQSxFQUFBRyxHQUFBLEVBQUFJLEdBQUEsRUFBQWlDLEdBQUE7QUFBQU8sWUFBQSxDQUFBekQsRUFBQTtBQUFBeUQsWUFBQSxDQUFBckQsR0FBQTtBQUFBcUQsWUFBQSxDQUFBbEQsR0FBQTtBQUFBa0QsWUFBQSxDQUFBL0MsR0FBQTtBQUFBK0MsWUFBQSxDQUFBNUMsR0FBQTtBQUFBNEMsWUFBQSxDQUFBeEMsR0FBQTtBQUFBd0MsWUFBQSxDQUFBUCxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQwMDFiZTk5Y2JlZjM5NzJjNmI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpY2sgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA1MDAwO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgJiBoMSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gIH1cclxuXHJcbiAgJiBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2xpY2tXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IGNhbGMoKSAoMTAwJS00NHB4KTtcclxuICBiYWNrZ3JvdW5kOiAjMDkwOTA5O1xyXG5gO1xyXG5cclxuY29uc3QgSW1nV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICYgaW1nIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNzUwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW5kaWNhdG9yID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICYgPiBkaXYge1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuYm9yXHJcbiAgICBiYWNrZ3JvdW5kOiAjMzEzMTMxO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEdsb2JhbCA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4uc2xpY2stc2xpZGV7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9ja1xyXG59YDtcclxuY29uc3QgSW1hZ2VzWm9vbSA9ICh7IGltYWdlcywgb25DbG9zZSB9KSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8T3ZlcmxheT5cclxuICAgICAgPEdsb2JhbCAvPlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxoMT7sg4HshLgg7J2066+47KeAPC9oMT5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9Plg8L2J1dHRvbj5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFNsaWNrV3JhcHBlcj5cclxuICAgICAgICAgIDxTbGlja1xyXG4gICAgICAgICAgICBpbml0aWFsU2xpZGU9ezB9XHJcbiAgICAgICAgICAgIGFmdGVyQ2hhbmdlPXsoc2xpZGUpID0+IHNldEN1cnJlbnRTbGlkZShzbGlkZSl9XHJcbiAgICAgICAgICAgIGluZmluaXRlXHJcbiAgICAgICAgICAgIGFycm93cz17dHJ1ZX1cclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93PXsxfVxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbD17MX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2ltYWdlcy5tYXAoKHYpID0+IChcclxuICAgICAgICAgICAgICA8SW1nV3JhcHBlciBrZXk9e3Yuc3JjfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2LnNyY30gYWx0PXt2LnNyY30gLz5cclxuICAgICAgICAgICAgICA8L0ltZ1dyYXBwZXI+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TbGljaz5cclxuICAgICAgICAgIDxJbmRpY2F0b3I+XHJcbiAgICAgICAgICAgIHtjdXJyZW50U2xpZGUgKyAxfVxyXG4gICAgICAgICAgICB7XCJcIn0ve2ltYWdlcy5sZW5ndGh9XHJcbiAgICAgICAgICA8L0luZGljYXRvcj5cclxuICAgICAgICA8L1NsaWNrV3JhcHBlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L092ZXJsYXk+XHJcbiAgKTtcclxufTtcclxuXHJcbkltYWdlc1pvb20ucHJvcFR5cGVzID0ge1xyXG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VzWm9vbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==