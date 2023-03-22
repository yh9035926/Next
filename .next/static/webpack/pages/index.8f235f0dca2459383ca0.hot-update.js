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
var Indicator = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject5 || (_templateObject5 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: center;\n\n  & > div {\n    width: 75px;\n    height: 30px;\n    line-height: 30px;\n    background: #313131;\n    display: inline-block;\n    text-align: center;\n    color: white;\n    font-size: 15px;\n  }\n"])));
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
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx(Global, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }), __jsx(Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, "\uC0C1\uC138 \uC774\uBBF8\uC9C0"), __jsx("button", {
    onClick: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, "X")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(SlickWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 84,
      columnNumber: 11
    }
  }, images.map(function (v) {
    return __jsx(ImgWrapper, {
      key: v.src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: v.src,
      alt: v.src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }));
  })), __jsx(Indicator, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, cu))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIl0sIm5hbWVzIjpbIk92ZXJsYXkiLCJzdHlsZWQiLCJkaXYiLCJfdGVtcGxhdGVPYmplY3QiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwiX2MiLCJIZWFkZXIiLCJoZWFkZXIiLCJfdGVtcGxhdGVPYmplY3QyIiwiX2MyIiwiU2xpY2tXcmFwcGVyIiwiX3RlbXBsYXRlT2JqZWN0MyIsIl9jMyIsIkltZ1dyYXBwZXIiLCJfdGVtcGxhdGVPYmplY3Q0IiwiX2M0IiwiSW5kaWNhdG9yIiwiX3RlbXBsYXRlT2JqZWN0NSIsIl9jNSIsIkdsb2JhbCIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiX3RlbXBsYXRlT2JqZWN0NiIsIl9jNiIsIkltYWdlc1pvb20iLCJfcmVmIiwiX3MiLCJpbWFnZXMiLCJvbkNsb3NlIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJfX2pzeCIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJvbkNsaWNrIiwiU2xpY2siLCJpbml0aWFsU2xpZGUiLCJhZnRlckNoYW5nZSIsInNsaWRlIiwiaW5maW5pdGUiLCJhcnJvd3MiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsIm1hcCIsInYiLCJrZXkiLCJzcmMiLCJhbHQiLCJjdSIsIl9jNyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ0s7QUFDUjtBQUM4QjtBQUU5RCxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQUcsQ0FBQUMsZUFBQSxL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QUFBaUMsR0FBQTtBQUFBTyxZQUFBLENBQUF6RCxFQUFBO0FBQUF5RCxZQUFBLENBQUFyRCxHQUFBO0FBQUFxRCxZQUFBLENBQUFsRCxHQUFBO0FBQUFrRCxZQUFBLENBQUEvQyxHQUFBO0FBQUErQyxZQUFBLENBQUE1QyxHQUFBO0FBQUE0QyxZQUFBLENBQUF4QyxHQUFBO0FBQUF3QyxZQUFBLENBQUFQLEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGYyMzVmMGRjYTI0NTkzODNjYTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTbGljayBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDUwMDA7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAmIGgxIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgfVxyXG5cclxuICAmIGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTbGlja1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogY2FsYygpICgxMDAlLTQ0cHgpO1xyXG4gIGJhY2tncm91bmQ6ICMwOTA5MDk7XHJcbmA7XHJcblxyXG5jb25zdCBJbWdXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgJiBpbWcge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA3NTBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbmRpY2F0b3IgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgJiA+IGRpdiB7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzMxMzEzMTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuLnNsaWNrLXNsaWRle1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2tcclxufWA7XHJcbmNvbnN0IEltYWdlc1pvb20gPSAoeyBpbWFnZXMsIG9uQ2xvc2UgfSkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuICByZXR1cm4gKFxyXG4gICAgPE92ZXJsYXk+XHJcbiAgICAgIDxHbG9iYWwgLz5cclxuICAgICAgPEhlYWRlcj5cclxuICAgICAgICA8aDE+7IOB7IS4IOydtOuvuOyngDwvaDE+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfT5YPC9idXR0b24+XHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxTbGlja1dyYXBwZXI+XHJcbiAgICAgICAgICA8U2xpY2tcclxuICAgICAgICAgICAgaW5pdGlhbFNsaWRlPXswfVxyXG4gICAgICAgICAgICBhZnRlckNoYW5nZT17KHNsaWRlKSA9PiBzZXRDdXJyZW50U2xpZGUoc2xpZGUpfVxyXG4gICAgICAgICAgICBpbmZpbml0ZVxyXG4gICAgICAgICAgICBhcnJvd3M9e3RydWV9XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdz17MX1cclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw9ezF9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpbWFnZXMubWFwKCh2KSA9PiAoXHJcbiAgICAgICAgICAgICAgPEltZ1dyYXBwZXIga2V5PXt2LnNyY30+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17di5zcmN9IGFsdD17di5zcmN9IC8+XHJcbiAgICAgICAgICAgICAgPC9JbWdXcmFwcGVyPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2xpY2s+XHJcbiAgICAgICAgICA8SW5kaWNhdG9yPlxyXG4gICAgICAgICAgICB7Y3V9XHJcbiAgICAgICAgICA8L0luZGljYXRvcj5cclxuICAgICAgICA8L1NsaWNrV3JhcHBlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L092ZXJsYXk+XHJcbiAgKTtcclxufTtcclxuXHJcbkltYWdlc1pvb20ucHJvcFR5cGVzID0ge1xyXG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VzWm9vbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==