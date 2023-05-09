webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/compatible */ "./node_modules/@ant-design/compatible/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../type */ "./type/index.js");
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FollowButton */ "./components/FollowButton.js");
var _this = undefined,
  _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\components\\PostCard.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











var PostCard = function PostCard(_ref) {
  _s();
  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    var _state$user$me;
    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  var liked = post.Likers.find(function (v) {
    return v.id === id;
  });
  var onLike = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!id) {
      return alert("로그인이 필요합니다");
    }
    return dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_9__["LIKE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  var onUnLike = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!id) {
      return alert("로그인이 필요합니다");
    }
    return dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_9__["UNLIKE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
      return state.post;
    }),
    removerPostLoading = _useSelector.removerPostLoading;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
    commentFormOpened = _useState[0],
    setCommentFormOpened = _useState[1];
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });
  }, []);
  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!id) {
      return alert("로그인이 필요합니다");
    }
    return dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_9__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  var onRetweet = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!id) {
      return alert("로그인이 필요합니다");
    }
    return dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_9__["RETWEET_REQUEST"],
      datd: post.id
    });
  }, [id]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 34
      }
    }),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["RetweetOutlined"], {
      key: "retweet",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }
    }), liked ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartFilled"], {
      key: "heartfilled",
      onClick: onUnLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
      key: "heart",
      onClick: onLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
      key: "comment",
      onClick: onToggleComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Popover"], {
      key: "more",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"].Group, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 15
        }
      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        type: "danger",
        onClick: onRemovePost,
        loading: removerPostLoading,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 19
        }
      }, "\uC2E0\uACE0")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }
    }))],
    extra: id && __jsx(_FollowButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 22
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 19
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      postData: post.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 24
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  })), commentFormOpened && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["List"], {
    header: "".concat(post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"),
    itemLayout: "horizontal",
    dataSource: post.Comments,
    renderItem: function renderItem(item) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 15
        }
      }, __jsx(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
        author: item.User.nickname,
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 27
          }
        }, item.User.nickname[0]),
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 17
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  })));
};
_s(PostCard, "tWbhcbO/nP9GI9C9D5YsD/uyK+Y=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});
_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    Images: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),
    User: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),
    Likers: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);
var _c;
$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsIl9yZWYiLCJfcyIsInBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiX3N0YXRlJHVzZXIkbWUiLCJ1c2VyIiwibWUiLCJsaWtlZCIsIkxpa2VycyIsImZpbmQiLCJ2Iiwib25MaWtlIiwidXNlQ2FsbGJhY2siLCJhbGVydCIsInR5cGUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJvblVuTGlrZSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJfdXNlU2VsZWN0b3IiLCJyZW1vdmVyUG9zdExvYWRpbmciLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJvblRvZ2dsZUNvbW1lbnQiLCJwcmV2Iiwib25SZW1vdmVQb3N0IiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIm9uUmV0d2VldCIsIlJFVFdFRVRfUkVRVUVTVCIsImRhdGQiLCJfX2pzeCIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJDYXJkIiwiY292ZXIiLCJJbWFnZXMiLCJQb3N0SW1hZ2VzIiwiaW1hZ2VzIiwiYWN0aW9ucyIsIlJldHdlZXRPdXRsaW5lZCIsImtleSIsIkhlYXJ0RmlsbGVkIiwib25DbGljayIsIkhlYXJ0T3V0bGluZWQiLCJNZXNzYWdlT3V0bGluZWQiLCJQb3BvdmVyIiwiY29udGVudCIsIkJ1dHRvbiIsIkdyb3VwIiwiVXNlciIsIlJlYWN0IiwiRnJhZ21lbnQiLCJsb2FkaW5nIiwiRWxsaXBzaXNPdXRsaW5lZCIsImV4dHJhIiwiRm9sbG93QnV0dG9uIiwiTWV0YSIsImF2YXRhciIsIkF2YXRhciIsIm5pY2tuYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIlBvc3RDYXJkQ29udGVudCIsInBvc3REYXRhIiwiQ29tbWVudEZvcm0iLCJMaXN0IiwiaGVhZGVyIiwiY29uY2F0IiwiQ29tbWVudHMiLCJsZW5ndGgiLCJpdGVtTGF5b3V0IiwiZGF0YVNvdXJjZSIsInJlbmRlckl0ZW0iLCJpdGVtIiwiQ29tbWVudCIsImF1dGhvciIsIl9jIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJhcnJheU9mIiwib2JqZWN0Iiwic3RyaW5nIiwiY3JlYXRlZEF0IiwiaXNSZXF1aXJlZCIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyRDtBQUNWO0FBQ0k7QUFPMUI7QUFDUTtBQUNvQjtBQUNqQjtBQUNFO0FBQ1E7QUFNL0I7QUFDeUI7QUFFMUMsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUFDLElBQUEsRUFBaUI7RUFBQUMsRUFBQTtFQUFBLElBQVhDLElBQUksR0FBQUYsSUFBQSxDQUFKRSxJQUFJO0VBQ3RCLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBRTtFQUM5QixJQUFNQyxFQUFFLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBSztJQUFBLElBQUFDLGNBQUE7SUFBQSxRQUFBQSxjQUFBLEdBQUtELEtBQUssQ0FBQ0UsSUFBSSxDQUFDQyxFQUFFLGNBQUFGLGNBQUEsdUJBQWJBLGNBQUEsQ0FBZUgsRUFBRTtFQUFBLEVBQUM7RUFDcEQsSUFBTU0sS0FBSyxHQUFHVCxJQUFJLENBQUNVLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLFVBQUNDLENBQUM7SUFBQSxPQUFLQSxDQUFDLENBQUNULEVBQUUsS0FBS0EsRUFBRTtFQUFBLEVBQUM7RUFDbEQsSUFBTVUsTUFBTSxHQUFHQyx5REFBVyxDQUFDLFlBQU07SUFDL0IsSUFBSSxDQUFDWCxFQUFFLEVBQUU7TUFDUCxPQUFPWSxLQUFLLENBQUMsWUFBWSxDQUFDO0lBQzVCO0lBQ0EsT0FBT2Qs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QUFDTCxDQUFDO0FBRWNqRyx1RUFBUSxFQUFDO0FBQUEsSUFBQXdGLEVBQUE7QUFBQVUsWUFBQSxDQUFBVixFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZmMzYwYmI0MDIwNjFlNzI3NDVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgQ2FyZCwgTGlzdCwgUG9wb3ZlciB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tIFwiQGFudC1kZXNpZ24vY29tcGF0aWJsZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRWxsaXBzaXNPdXRsaW5lZCxcclxuICBIZWFydE91dGxpbmVkLFxyXG4gIE1lc3NhZ2VPdXRsaW5lZCxcclxuICBSZXR3ZWV0T3V0bGluZWQsXHJcbiAgSGVhcnRGaWxsZWQsXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuL1Bvc3RJbWFnZXNcIjtcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gXCIuL0NvbW1lbnRGb3JtXCI7XHJcbmltcG9ydCBQb3N0Q2FyZENvbnRlbnQgZnJvbSBcIi4vUG9zdENhcmRDb250ZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxufSBmcm9tIFwiLi4vdHlwZVwiO1xyXG5pbXBvcnQgRm9sbG93QnV0dG9uIGZyb20gXCIuL0ZvbGxvd0J1dHRvblwiO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuICBjb25zdCBsaWtlZCA9IHBvc3QuTGlrZXJzLmZpbmQoKHYpID0+IHYuaWQgPT09IGlkKTtcclxuICBjb25zdCBvbkxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHJldHVybiBhbGVydChcIuuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6RcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgIH0pO1xyXG4gIH0sIFtpZF0pO1xyXG5cclxuICBjb25zdCBvblVuTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KFwi66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICB9KTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgY29uc3QgeyByZW1vdmVyUG9zdExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3QgW2NvbW1lbnRGb3JtT3BlbmVkLCBzZXRDb21tZW50Rm9ybU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpID0+ICFwcmV2KTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCFpZCkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoXCLroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgIH0pO1xyXG4gIH0sIFtpZF0pO1xyXG5cclxuICBjb25zdCBvblJldHdlZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHJldHVybiBhbGVydChcIuuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6RcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGQ6IHBvc3QuaWQsXHJcbiAgICB9KTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgY292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9IC8+fVxyXG4gICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiIC8+LFxyXG4gICAgICAgICAgbGlrZWQgPyAoXHJcbiAgICAgICAgICAgIDxIZWFydEZpbGxlZCBrZXk9XCJoZWFydGZpbGxlZFwiIG9uQ2xpY2s9e29uVW5MaWtlfSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvbkxpa2V9IC8+XHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fSAvPixcclxuICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgIGtleT1cIm1vcmVcIlxyXG4gICAgICAgICAgICBjb250ZW50PXtcclxuICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7siJjsoJU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH1cclxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3JlbW92ZXJQb3N0TG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICDsgq3soJxcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgPC9Qb3BvdmVyPixcclxuICAgICAgICBdfVxyXG4gICAgICAgIGV4dHJhPXtpZCAmJiA8Rm9sbG93QnV0dG9uIHBvc3Q9e3Bvc3R9IC8+fVxyXG4gICAgICA+XHJcbiAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgIGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50IHBvc3REYXRhPXtwb3N0LmNvbnRlbnR9IC8+fVxyXG4gICAgICAgID48L0NhcmQuTWV0YT5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICB7Y29tbWVudEZvcm1PcGVuZWQgJiYgKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Q29tbWVudEZvcm0gcG9zdD17cG9zdH0gLz5cclxuICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgIGhlYWRlcj17YCR7cG9zdC5Db21tZW50cy5sZW5ndGh96rCc7J2YIOuMk+q4gGB9XHJcbiAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5Db21tZW50c31cclxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntpdGVtLlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7Lyo8Q29tbWVudEZvcm0gLz59XHJcbiAgICAgIHs8Q29tbWVudHMgLz4qL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgSW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgQ29tbWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgTGlrZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=