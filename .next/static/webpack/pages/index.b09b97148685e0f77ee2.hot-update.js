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
/* harmony import */ var _ImagesZoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImagesZoom */ "./components/ImagesZoom/index.js");
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
    setSHowImagesZoom(false);
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
        lineNumber: 18,
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
        lineNumber: 30,
        columnNumber: 9
      }
    }), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 28
      }
    }), __jsx("img", {
      role: "presentation",
      src: images[1].src,
      alt: images[1].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }));
  }
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
      lineNumber: 48,
      columnNumber: 7
    }
  }), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
    images: images,
    onClose: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 26
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
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIl0sIm5hbWVzIjpbIlBvc3RJbWFnZXMiLCJfcmVmIiwiX3MiLCJpbWFnZXMiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInNob3dJbWFnZXNab29tIiwic2V0U0hvd0ltYWdlc1pvb20iLCJvblpvb20iLCJ1c2VDYWxsYmFjayIsIm9uQ2xvc2UiLCJsZW5ndGgiLCJfX2pzeCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJyb2xlIiwic3JjIiwiYWx0Iiwib25DbGljayIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJJbWFnZXNab29tIiwic3R5bGUiLCJkaXNwbGF5Iiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwiUGx1c091dGxpbmVkIiwiX2MiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0IiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDbEI7QUFDYztBQUNYO0FBQ3RDLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBQyxJQUFBLEVBQW1CO0VBQUFDLEVBQUE7RUFBQSxJQUFiQyxNQUFNLEdBQUFGLElBQUEsQ0FBTkUsTUFBTTtFQUMxQixJQUFBQyxTQUFBLEdBQTRDQyxzREFBUSxDQUFDLEtBQUssQ0FBQztJQUFwREMsY0FBYyxHQUFBRixTQUFBO0lBQUVHLGlCQUFpQixHQUFBSCxTQUFBO0VBRXhDLElBQU1JLE1BQU0sR0FBR0MseURBQVcsQ0FBQyxZQUFNO0lBQy9CRixpQkFBaUIsQ0FBQyxJQUFJLENBQUM7RUFDekIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOLElBQU1HLE9BQU8sR0FBR0QseURBQVcsQ0FBQyxZQUFNO0lBQ2hDRixpQkFBaUIsQ0FBQyxLQUFL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QSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FFRmIsS0FBQSxDQUFDb0IsOERBQVk7SUFBQWIsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsRUFBRyxFQUNoQmIsS0FBQTtJQUFBTyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxFQUFNLEVBQ0x0QixNQUFNLENBQUNRLE1BQU0sR0FBRyxDQUFDLGtEQUVkLENBQ0Y7QUFFVixDQUFDO0FBQUNULEVBQUEsQ0FsRUlGLFVBQVU7QUFBQWlDLEVBQUEsR0FBVmpDLFVBQVU7QUFvRWhCQSxVQUFVLENBQUNrQyxTQUFTLEdBQUc7RUFDckIvQixNQUFNLEVBQUVnQyxpREFBUyxDQUFDQyxPQUFPLENBQUNELGlEQUFTLENBQUNFLE1BQU07QUFDNUMsQ0FBQztBQUVjckMseUVBQVUsRUFBQztBQUFBLElBQUFpQyxFQUFBO0FBQUFLLFlBQUEsQ0FBQUwsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMDliOTcxNDg2ODVlMGY3N2VlMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgSW1hZ2VzWm9vbSBmcm9tIFwiLi9JbWFnZXNab29tXCI7XHJcbmNvbnN0IFBvc3RJbWFnZXMgPSAoeyBpbWFnZXMgfSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93SW1hZ2VzWm9vbSwgc2V0U0hvd0ltYWdlc1pvb21dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvblpvb20gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRTSG93SW1hZ2VzWm9vbSh0cnVlKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFNIb3dJbWFnZXNab29tKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmIChpbWFnZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgc3JjPXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgICAgYWx0PXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbiAgaWYgKGltYWdlcy5sZW5ndGggPT09IDIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICBzcmM9e2ltYWdlc1swXS5zcmN9XHJcbiAgICAgICAgICBhbHQ9e2ltYWdlc1swXS5zcmN9XHJcbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7c2hvd0ltYWdlc1pvb20gJiYgPEltYWdlc1pvb20gaW1hZ2VzPXtpbWFnZXN9IG9uQ2xvc2U9e29uQ2xvc2V9IC8+fVxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgc3JjPXtpbWFnZXNbMV0uc3JjfVxyXG4gICAgICAgICAgYWx0PXtpbWFnZXNbMV0uc3JjfVxyXG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICBzcmM9e2ltYWdlc1swXS5zcmN9XHJcbiAgICAgICAgYWx0PXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgLz5cclxuICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgd2lkdGg6IFwiNTAlXCIsXHJcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8UGx1c091dGxpbmVkIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAge2ltYWdlcy5sZW5ndGggLSAxfVxyXG4gICAgICAgIOqwnOydmCDsgqzsp4Qg642UIOuztOq4sFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Qb3N0SW1hZ2VzLnByb3BUeXBlcyA9IHtcclxuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEltYWdlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==