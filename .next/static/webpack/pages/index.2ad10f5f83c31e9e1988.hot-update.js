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
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
      return state.post;
    }),
    removerPostLoading = _useSelector.removerPostLoading,
    retweetError = _useSelector.retweetError;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
    commentFormOpened = _useState[0],
    setCommentFormOpened = _useState[1];
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });
  }, []);
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
      data: post.id
    });
  }, [id]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 34
      }
    }),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["RetweetOutlined"], {
      key: "retweet",
      onClick: onRetweet,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }
    }), liked ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartFilled"], {
      key: "heartfilled",
      onClick: onUnLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
      key: "heart",
      onClick: onLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
      key: "comment",
      onClick: onToggleComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Popover"], {
      key: "more",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"].Group, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 15
        }
      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        type: "danger",
        onClick: onRemovePost,
        loading: removerPostLoading,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 19
        }
      }, "\uC2E0\uACE0")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }
    }))],
    title: post.RetweetId ? "".concat(post.User.nickname, "\uB2D8\uC774 \uB9AC\uD2B8\uC717\uD558\uC168\uC2B5\uB2C8\uB2E4") : null,
    extra: id && __jsx(_FollowButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 22
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, post.RetweetId && post.Retweet ? __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 42
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 23
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      postData: post.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 28
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 21
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      postData: post.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 26
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  })), commentFormOpened && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
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
          lineNumber: 142,
          columnNumber: 15
        }
      }, __jsx(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
        author: item.User.nickname,
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 27
          }
        }, item.User.nickname[0]),
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 17
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  })));
};
_s(PostCard, "RpwF/KqGMhcVrITmYSNn4+hwZW4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});
_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    Images: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),
    User: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.st,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),
    Likers: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),
    RetweetId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    Retweet: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsIl9yZWYiLCJfcyIsInBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiX3N0YXRlJHVzZXIkbWUiLCJ1c2VyIiwibWUiLCJsaWtlZCIsIkxpa2VycyIsImZpbmQiLCJ2IiwiX3VzZVNlbGVjdG9yIiwicmVtb3ZlclBvc3RMb2FkaW5nIiwicmV0d2VldEVycm9yIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJjb21tZW50Rm9ybU9wZW5lZCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwib25Ub2dnbGVDb21tZW50IiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwib25MaWtlIiwiYWxlcnQiLCJ0eXBlIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJkYXRhIiwib25Vbkxpa2UiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwib25SZW1vdmVQb3N0IiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIm9uUmV0d2VldCIsIlJFVFdFRVRfUkVRVUVTVCIsIl9fanN4IiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIkNhcmQiLCJjb3ZlciIsIkltYWdlcyIsIlBvc3RJbWFnZXMiLCJpbWFnZXMiLCJhY3Rpb25zIiwiUmV0d2VldE91dGxpbmVkIiwia2V5Iiwib25DbGljayIsIkhlYXJ0RmlsbGVkIiwiSGVhcnRPdXRsaW5lZCIsIk1lc3NhZ2VPdXRsaW5lZCIsIlBvcG92ZXIiLCJjb250ZW50IiwiQnV0dG9uIiwiR3JvdXAiLCJVc2VyIiwiUmVhY3QiLCJGcmFnbWVudCIsImxvYWRpbmciLCJFbGxpcHNpc091dGxpbmVkIiwidGl0bGUiLCJSZXR3ZWV0SWQiLCJjb25jYXQiLCJuaWNrbmFtZSIsImV4dHJhIiwiRm9sbG93QnV0dG9uIiwiUmV0d2VldCIsIk1ldGEiLCJhdmF0YXIiLCJBdmF0YXIiLCJkZXNjcmlwdGlvbiIsIlBvc3RDYXJkQ29udGVudCIsInBvc3REYXRhIiwiQ29tbWVudEZvcm0iLCJMaXN0IiwiaGVhZGVyIiwiQ29tbWVudHMiLCJsZW5ndGgiLCJpdGVtTGF5b3V0IiwiZGF0YVNvdXJjZSIsInJlbmRlckl0ZW0iLCJpdGVtIiwiQ29tbWVudCIsImF1dGhvciIsIl9jIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJhcnJheU9mIiwib2JqZWN0Iiwic3RyaW5nIiwiY3JlYXRlZEF0Iiwic3QiLCJvYmplY3RPZiIsImFueSIsImlzUmVxdWlyZWQiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDVjtBQUNlO0FBT3JDO0FBQ1E7QUFDb0I7QUFDakI7QUFDRTtBQUNRO0FBTS9CO0FBQ3lCO0FBRTFDLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBQyxJQUFBLEVBQWlCO0VBQUFDLEVBQUE7RUFBQSxJQUFYQyxJQUFJLEdBQUFGLElBQUEsQ0FBSkUsSUFBSTtFQUN0QixJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQUU7RUFDOUIsSUFBTUMsRUFBRSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUs7SUFBQSxJQUFBQyxjQUFBO0lBQUEsUUFBQUEsY0FBQSxHQUFLRCxLQUFLLENBQUNFLElBQUksQ0FBQ0MsRUFBRSxjQUFBRixjQUFBLHVCQUFiQSxjQUFBLENBQWVILEVBQUU7RUFBQSxFQUFDO0VBQ3BELElBQU1NLEtBQUssR0FBR1QsSUFBSSxDQUFDVSxNQUFNLENBQUNDLElBQUksQ0FBQyxVQUFDQyxDQUFDO0lBQUEsT0FBS0EsQ0FBQyxDQUFDVCxFQUFFLEtBQUtBLEVBQUU7RUFBQSxFQUFDO0VBRWxELElBQUFVLFlBQUEsR0FBNkNULCtEQUFXLENBQ3RELFVBQUNDLEtBQUs7TUFBQSxPQUFLQSxLQUFLLENBQUNMLElBQUk7SUFBQSxFQUN0QjtJQUZPYyxrQkFBa0IsR0FBQUQsWUFBQSxDQUFsQkMsa0JBQWtCO0lBQUVDLFlBQVksR0FBQUYsWUFBQSxDQUFaRSxZQUFZO0VBR3hDLElBQUFDLFNBQUEsR0FBa0RDLHNEQUFRLENBQUMsS0FBSyxDQUFDO0lBQTFEQyxpQkFBaUIsR0FBQUYsU0FBQTtJQUFFRyxvQkFBb0IsR0FBQUgsU0FBQTtFQUM5QyxJQUFNSSxlQUFlLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUN4Q0Ysb0JBQW9CLENBQUMsVUFBQ0csSUFBSTtNQUFBLE9BQUssQ0FBQ0EsSUFBSTtJQUFBLEVBQUM7RUFDdkMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLElBQU1DLE1BQU0sR0FBR0YseURBQVcsQ0FBQyxZQUFNO0lBQy9CLElBQUksQ0FBQ2xCLEVBQUUsRUFBRTtNQUNQLE9BQU9xQixLQUFLLENBQUMsWUFBWSxDQUFDO0lBQzVCO0lBQ0EsT0FBT3ZCLFFBQVEsQ0FBQztNQUNkd0IsSUFBSSxFQUFFQyx1REFBaUI7TUFDdkJDLElBQUksRUFBRTNCLElBQUksQ0FBQ0c7SUFDYixDQUFDLENBQUM7RUFDSixDQUFDLEVBQUUsQ0FBQ0EsRUFBRSxDQUFDLENBQUM7RUFFUixJQUFNeUIsUUFBUSxHQUFHUCx5REFBVyxDQUFDLFlBQU07SUFDakMsSUFBSSxDQUFDbEIsRUFBRSxFQUFFO01BQ1AsT0FBT3FCLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDNUI7SUFDQSxPQUFPdkIsUUFBUSxDQUFDO01BQ2R3QixJQUFJLEVBQUVJLHlEQUFtQjtNQUN6QkYsSUFBSSxFQUFFM0IsSUFBSSxDQUFDRztJQUNiLENBQUMsQ0FBQztFQUNKLENBQUMsRUFBRSxDQUFDQSxFQUFFLENBQUMsQ0FBQztFQUVSLElBQU0yQixZQUFZLEdBQUdULHlEQUFXLENBQUMsWUFBTTtJQUNyQyxJQUFJLENBQUNsQixFQUFFLEVBQUU7TUFDUCxPQUFPcUIsS0FBSyxDQUFDLFlBQVksQ0FBQztJQUM1QjtJQUNBLE9BQU92QixRQUFRLENBQUM7TUFDZHdCLElBQUksRUFBRU0seURBQW1CO01BQ3pCSixJQUFJLEVBQUUzQixJQUFJLENBQUNHO0lBQ2IsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxFQUFFLENBQUNBLEVBQUUsQ0FBQyxDQUFDO0VBRVIsSUFBTTZCLFNBQVMsR0FBR1gseURBQVcsQ0FBQyxZQUFNO0lBQ2xDLElBQUksQ0FBQ2xCLEVBQUUsRUFBRTtNQUNQLE9BQU9xQixLQUFLLENBQUMsWUFBWSxDQUFDO0lBQzVCO0lBQ0EsT0FBT3ZCLFFBQVEsQ0FBQztNQUNkd0IsSUFBSSxFQUFFUSxxREFBZTtNQUNyQk4sSUFBSSxFQUFFM0IsSUFBSSxDQUFDRztJQUNiLENBQUMsQ0FBQztFQUNKLENBQUMsRUFBRSxDQUFDQSxFQUFFLENBQUMsQ0FBQztFQUVSLE9BQ0UrQixLQUFBO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ0VQLEtBQUEsQ0FBQ1EseUNBQUk7SUFDSEMsS0FBSyxFQUFFM0MsSUFBSSxDQUFDNEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJVixLQUFBLENBQUNXLG1EQUFVO01BQUNDLE1BQU0sRUFBRTlDLElBQUksQ0FBQzRDLE1BQU87TUFBQVQsTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsRUFBSTtJQUM3RE0sT0FBTyxFQUFFLENBQ1BiLEtBQUEsQ0FBQ2MsaUVBQWU7TUFBQ0MsR0FBRyxFQUFDLFNBQVM7TUFBQ0MsT0FBTyxFQUFFbEIsU0FBVTtNQUFBRyxNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxFQUFHLEVBQ3JEaEMsS0FBSyxHQUNIeUIsS0FBQSxDQUFDaUIsNkRBQVc7TUFBQ0YsR0FBRyxFQUFDLGFBQWE7TUFBQ0MsT0FBTyxFQUFFdEIsUUFBUztNQUFBTyxNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxFQUFHLEdBRXBEUCxLQUFBLENBQUNrQiwrREFBYTtNQUFDSCxHQUFHLEVBQUMsT0FBTztNQUFDQyxPQUFPLEVBQUUzQixNQUFPO01BQUFZLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEVBQzVDLEVBQ0RQLEtBQUEsQ0FBQ21CLGlFQUFlO01BQUNKLEdBQUcsRUFBQyxTQUFTO01BQUNDLE9BQU8sRUFBRTlCLGVBQWdCO01BQUFlLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEVBQUcsRUFDM0RQLEtBQUEsQ0FBQ29CLDRDQUFPO01BQ05MLEdBQUcsRUFBQyxNQUFNO01BQ1ZNLE9BQU8sRUFDTHJCLEtBQUEsQ0FBQ3NCLDJDQUFNLENBQUNDLEtBQUs7UUFBQXRCLE1BQUEsRUFBQUMsS0FBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLEdBQ1Z0QyxFQUFFLElBQUlILElBQUksQ0FBQzBELElBQUksQ0FBQ3ZELEVBQUUsS0FBS0EsRUFBRSxHQUN4QitCLEtBQUEsQ0FBQXlCLDRDQUFBLENBQUFDLFFBQUEsUUFDRTFCLEtBQUEsQ0FBQ3NCLDJDQUFNO1FBQUFyQixNQUFBLEVBQUFDLEtBQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxrQkFBWSxFQUNuQlAsS0FBQSxDQUFDc0IsMkNBQU07UUFDTC9CLElBQUksRUFBQyxRQUFRO1FBQ2J5QixPQUFPLEVBQUVwQixZQUFhO1FBQ3RCK0IsT0FBTyxFQUFFL0Msa0JBQW1CO1FBQUFxQixNQUFBLEVBQUFDLEtBQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxrQkFHckIsQ0FDUixHQUVIUCxLQUFBLENBQUNzQiwyQ0FBTTtRQUFBckIsTUFBQSxFQUFBQyxLQUFBO1FBQUFDLFFBQUE7VUFBQUMsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBO01BQUEsa0JBQ1IsQ0FFSjtNQUFBTixNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxHQUVEUCxLQUFBLENBQUM0QixrRUFBZ0I7TUFBQTNCLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEVBQUcsQ0FDWixDQUNWO0lBQ0ZzQixLQUFLLEVBQ0gvRCxJQUFJLENBQUNnRSxTQUFTLE1BQUFDLE1BQUEsQ0FBTWpFLElBQUksQ0FBQzBELElBQUksQ0FBQ1EsUUFBUSxxRUFBZ0IsSUFDdkQ7SUFDREMsS0FBSyxFQUFFaEUsRUFBRSxJQUFJK0IsS0FBQSxDQUFDa0Msc0RBQVk7TUFBQ3BFLElBQUksRUFBRUEsSUFBSztNQUFBbUMsTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsRUFBSTtJQUFBTixNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUV6Q3pDLElBQUksQ0FBQ2dFLFNBQVMsSUFBSWhFLElBQUksQ0FBQ3FFLE9BQU8sR0FDN0JuQyxLQUFBLENBQUNRLHlDQUFJO0lBQUNDLEtBQUssRUFBRTNDLElBQUksQ0FBQzRDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSVYsS0FBQSxDQUFDVyxtREFBVTtNQUFDQyxNQUFNLEVBQUU5QyxJQUFJLENBQUM0QyxNQUFPO01BQUFULE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEVBQUk7SUFBQU4sTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDakVQLEtBQUEsQ0FBQ1EseUNBQUksQ0FBQzRCLElBQUk7SUFDUkMsTUFBTSxFQUFFckMsS0FBQSxDQUFDc0MsMkNBQU07TUFBQXJDLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQUV6QyxJQUFJLENBQUMwRCxJQUFJLENBQUNRLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBVztJQUNqREgsS0FBSyxFQUFFL0QsSUFBSSxDQUFDMEQsSUFBSSxDQUFDUSxRQUFTO0lBQzFCTyxXQUFXLEVBQUV2QyxLQUFBLENBQUN3Qyx3REFBZTtNQUFDQyxRQUFRLEVBQUUzRSxJQUFJLENBQUN1RCxPQUFRO01BQUFwQixNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxFQUFJO0lBQUFOLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEVBQzlDLENBQ1IsR0FFUFAsS0FBQSxDQUFDUSx5Q0FBSSxDQUFDNEIsSUFBSTtJQUNSQyxNQUFNLEVBQUVyQyxLQUFBLENBQUNzQywyQ0FBTTtNQUFBckMsTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsR0FBRXpDLElBQUksQ0FBQzBELElBQUksQ0FBQ1EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFXO0lBQ2pESCxLQUFLLEVBQUUvRCxJQUFJLENBQUMwRCxJQUFJLENBQUNRLFFBQVM7SUFDMUJPLFdBQVcsRUFBRXZDLEtBQUEsQ0FBQ3dDLHdEQUFlO01BQUNDLFFBQVEsRUFBRTNFLElBQUksQ0FBQ3VELE9BQVE7TUFBQXBCLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEVBQUk7SUFBQU4sTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsRUFFNUQsQ0FDSSxFQUNOdkIsaUJBQWlCLElBQ2hCZ0IsS0FBQTtJQUFBQyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNFUCxLQUFBLENBQUMwQyxvREFBVztJQUFDNUUsSUFBSSxFQUFFQSxJQUFLO0lBQUFtQyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxFQUFHLEVBQzNCUCxLQUFBLENBQUMyQyx5Q0FBSTtJQUNIQyxNQUFNLEtBQUFiLE1BQUEsQ0FBS2pFLElBQUksQ0FBQytFLFFBQVEsQ0FBQ0MsTUFBTSw4QkFBUTtJQUN2Q0MsVUFBVSxFQUFDLFlBQVk7SUFDdkJDLFVBQVUsRUFBRWxGLElBQUksQ0FBQytFLFFBQVM7SUFDMUJJLFVBQVUsRUFBRSxTQUFBQSxXQUFDQyxJQUFJO01BQUEsT0FDZmxELEtBQUE7UUFBQUMsTUFBQSxFQUFBQyxLQUFBO1FBQUFDLFFBQUE7VUFBQUMsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBO01BQUEsR0FDRVAsS0FBQSxDQUFDbUQsOERBQU87UUFDTkMsTUFBTSxFQUFFRixJQUFJLENBQUMxQixJQUFJLENBQUNRLFFBQVM7UUFDM0JLLE1BQU0sRUFBRXJDLEtBQUEsQ0FBQ3NDLDJDQUFNO1VBQUFyQyxNQUFBLEVBQUFDLEtBQUE7VUFBQUMsUUFBQTtZQUFBQyxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUE7UUFBQSxHQUFFMkMsSUFBSSxDQUFDMUIsSUFBSSxDQUFDUSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQVc7UUFDakRYLE9BQU8sRUFBRTZCLElBQUksQ0FBQzdCLE9BQVE7UUFBQXBCLE1BQUEsRUFBQUMsS0FBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLEVBQ3RCLENBQ0M7SUFBQSxDQUNMO0lBQUFOLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEVBQ0YsQ0FFTCxDQUdHO0FBRVYsQ0FBQztBQUFDMUMsRUFBQSxDQXJJSUYsUUFBUTtFQUFBLFFBQ0tLLHVEQUFXLEVBQ2pCRSx1REFBVyxFQUd1QkEsdURBQVc7QUFBQTtBQUFBbUYsRUFBQSxHQUxwRDFGLFFBQVE7QUF1SWRBLFFBQVEsQ0FBQzJGLFNBQVMsR0FBRztFQUNuQnhGLElBQUksRUFBRXlGLGlEQUFTLENBQUNDLEtBQUssQ0FBQztJQUNwQnZGLEVBQUUsRUFBRXNGLGlEQUFTLENBQUNFLE1BQU07SUFDcEIvQyxNQUFNLEVBQUU2QyxpREFBUyxDQUFDRyxPQUFPLENBQUNILGlEQUFTLENBQUNJLE1BQU0sQ0FBQztJQUMzQ25DLElBQUksRUFBRStCLGlEQUFTLENBQUNJLE1BQU07SUFDdEJ0QyxPQUFPLEVBQUVrQyxpREFBUyxDQUFDSyxNQUFNO0lBQ3pCQyxTQUFTLEVBQUVOLGlEQUFTLENBQUNPLEVBQUU7SUFDdkJqQixRQUFRLEVBQUVVLGlEQUFTLENBQUNHLE9BQU8sQ0FBQ0gsaURBQVMsQ0FBQ0ksTUFBTSxDQUFDO0lBQzdDbkYsTUFBTSxFQUFFK0UsaURBQVMsQ0FBQ0csT0FBTyxDQUFDSCxpREFBUyxDQUFDSSxNQUFNLENBQUM7SUFDM0M3QixTQUFTLEVBQUV5QixpREFBUyxDQUFDRSxNQUFNO0lBQzNCdEIsT0FBTyxFQUFFb0IsaURBQVMsQ0FBQ1EsUUFBUSxDQUFDUixpREFBUyxDQUFDUyxHQUFHO0VBQzNDLENBQUMsQ0FBQyxDQUFDQztBQUNMLENBQUM7QUFFY3RHLHVFQUFRLEVBQUM7QUFBQSxJQUFBMEYsRUFBQTtBQUFBYSxZQUFBLENBQUFiLEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmFkMTBmNWY4M2MzMWU5ZTE5ODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YXRhciwgQnV0dG9uLCBDYXJkLCBMaXN0LCBQb3BvdmVyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tIFwiQGFudC1kZXNpZ24vY29tcGF0aWJsZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBFbGxpcHNpc091dGxpbmVkLFxuICBIZWFydE91dGxpbmVkLFxuICBNZXNzYWdlT3V0bGluZWQsXG4gIFJldHdlZXRPdXRsaW5lZCxcbiAgSGVhcnRGaWxsZWQsXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tIFwiLi9Qb3N0SW1hZ2VzXCI7XG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4vQ29tbWVudEZvcm1cIjtcbmltcG9ydCBQb3N0Q2FyZENvbnRlbnQgZnJvbSBcIi4vUG9zdENhcmRDb250ZW50XCI7XG5pbXBvcnQge1xuICBMSUtFX1BPU1RfUkVRVUVTVCxcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcbiAgUkVUV0VFVF9SRVFVRVNULFxuICBVTkxJS0VfUE9TVF9SRVFVRVNULFxufSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IEZvbGxvd0J1dHRvbiBmcm9tIFwiLi9Gb2xsb3dCdXR0b25cIjtcblxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xuICBjb25zdCBsaWtlZCA9IHBvc3QuTGlrZXJzLmZpbmQoKHYpID0+IHYuaWQgPT09IGlkKTtcblxuICBjb25zdCB7IHJlbW92ZXJQb3N0TG9hZGluZywgcmV0d2VldEVycm9yIH0gPSB1c2VTZWxlY3RvcihcbiAgICAoc3RhdGUpID0+IHN0YXRlLnBvc3RcbiAgKTtcbiAgY29uc3QgW2NvbW1lbnRGb3JtT3BlbmVkLCBzZXRDb21tZW50Rm9ybU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRDb21tZW50Rm9ybU9wZW5lZCgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25MaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghaWQpIHtcbiAgICAgIHJldHVybiBhbGVydChcIuuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6RcIik7XG4gICAgfVxuICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcbiAgICAgIGRhdGE6IHBvc3QuaWQsXG4gICAgfSk7XG4gIH0sIFtpZF0pO1xuXG4gIGNvbnN0IG9uVW5MaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghaWQpIHtcbiAgICAgIHJldHVybiBhbGVydChcIuuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6RcIik7XG4gICAgfVxuICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9SRVFVRVNULFxuICAgICAgZGF0YTogcG9zdC5pZCxcbiAgICB9KTtcbiAgfSwgW2lkXSk7XG5cbiAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghaWQpIHtcbiAgICAgIHJldHVybiBhbGVydChcIuuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6RcIik7XG4gICAgfVxuICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxuICAgICAgZGF0YTogcG9zdC5pZCxcbiAgICB9KTtcbiAgfSwgW2lkXSk7XG5cbiAgY29uc3Qgb25SZXR3ZWV0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghaWQpIHtcbiAgICAgIHJldHVybiBhbGVydChcIuuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6RcIik7XG4gICAgfVxuICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBSRVRXRUVUX1JFUVVFU1QsXG4gICAgICBkYXRhOiBwb3N0LmlkLFxuICAgIH0pO1xuICB9LCBbaWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q2FyZFxuICAgICAgICBjb3Zlcj17cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30gLz59XG4gICAgICAgIGFjdGlvbnM9e1tcbiAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIiBvbkNsaWNrPXtvblJldHdlZXR9IC8+LFxuICAgICAgICAgIGxpa2VkID8gKFxuICAgICAgICAgICAgPEhlYXJ0RmlsbGVkIGtleT1cImhlYXJ0ZmlsbGVkXCIgb25DbGljaz17b25Vbkxpa2V9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25MaWtlfSAvPlxuICAgICAgICAgICksXG4gICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fSAvPixcbiAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAga2V5PVwibW9yZVwiXG4gICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cbiAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/IChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7IiY7KCVPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlbW92ZVBvc3R9XG4gICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17cmVtb3ZlclBvc3RMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAg7IKt7KCcXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24+7Iug6rOgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cbiAgICAgICAgICA8L1BvcG92ZXI+LFxuICAgICAgICBdfVxuICAgICAgICB0aXRsZT17XG4gICAgICAgICAgcG9zdC5SZXR3ZWV0SWQgPyBgJHtwb3N0LlVzZXIubmlja25hbWV964uY7J20IOumrO2KuOycl+2VmOyFqOyKteuLiOuLpGAgOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgZXh0cmE9e2lkICYmIDxGb2xsb3dCdXR0b24gcG9zdD17cG9zdH0gLz59XG4gICAgICA+XG4gICAgICAgIHtwb3N0LlJldHdlZXRJZCAmJiBwb3N0LlJldHdlZXQgPyAoXG4gICAgICAgICAgPENhcmQgY292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9IC8+fT5cbiAgICAgICAgICAgIDxDYXJkLk1ldGFcbiAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxuICAgICAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5jb250ZW50fSAvPn1cbiAgICAgICAgICAgID48L0NhcmQuTWV0YT5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPENhcmQuTWV0YVxuICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxuICAgICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50IHBvc3REYXRhPXtwb3N0LmNvbnRlbnR9IC8+fVxuICAgICAgICAgID48L0NhcmQuTWV0YT5cbiAgICAgICAgKX1cbiAgICAgIDwvQ2FyZD5cbiAgICAgIHtjb21tZW50Rm9ybU9wZW5lZCAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICAgPExpc3RcbiAgICAgICAgICAgIGhlYWRlcj17YCR7cG9zdC5Db21tZW50cy5sZW5ndGh96rCc7J2YIOuMk+q4gGB9XG4gICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICBkYXRhU291cmNlPXtwb3N0LkNvbW1lbnRzfVxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxDb21tZW50XG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX1cbiAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7Lyo8Q29tbWVudEZvcm0gLz59XG4gICAgICB7PENvbW1lbnRzIC8+Ki99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XG4gIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgSW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMuc3QsXG4gICAgQ29tbWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgIExpa2VyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gICAgUmV0d2VldElkOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFJldHdlZXQ6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuYW55KSxcbiAgfSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==