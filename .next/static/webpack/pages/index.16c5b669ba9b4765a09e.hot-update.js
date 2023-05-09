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
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]);
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
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 34
      }
    }),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["RetweetOutlined"], {
      key: "retweet",
      onClick: onRetweet,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }
    }), liked ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartFilled"], {
      key: "heartfilled",
      onClick: onUnLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
      key: "heart",
      onClick: onLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
      key: "comment",
      onClick: onToggleComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Popover"], {
      key: "more",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"].Group, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 15
        }
      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        type: "danger",
        onClick: onRemovePost,
        loading: removerPostLoading,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 19
        }
      }, "\uC2E0\uACE0")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 13
      }
    }))],
    title: post.Re,
    extra: id && __jsx(_FollowButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 22
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, post.RetweetId && post.Retweet, "? (", __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    cover: post.Retweet.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 44
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 19
      }
    }, post.Retweet.User.nickname[0]),
    title: post.Retweet.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      postData: post.Retweet.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 24
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }), ") :", __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 19
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      postData: post.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 24
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  })), commentFormOpened && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
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
          lineNumber: 146,
          columnNumber: 15
        }
      }, __jsx(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
        author: item.User.nickname,
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 27
          }
        }, item.User.nickname[0]),
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 17
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  })));
};
_s(PostCard, "CXaxTpoEbwRDaYiQLphAhyjeDeU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsIl9yZWYiLCJfcyIsInBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiX3N0YXRlJHVzZXIkbWUiLCJ1c2VyIiwibWUiLCJsaWtlZCIsIkxpa2VycyIsImZpbmQiLCJ2IiwiX3VzZVNlbGVjdG9yIiwicmVtb3ZlclBvc3RMb2FkaW5nIiwicmV0d2VldEVycm9yIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJjb21tZW50Rm9ybU9wZW5lZCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwib25Ub2dnbGVDb21tZW50IiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwib25MaWtlIiwiYWxlcnQiLCJ0eXBlIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJkYXRhIiwidXNlRWZmZWN0Iiwib25Vbkxpa2UiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwib25SZW1vdmVQb3N0IiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIm9uUmV0d2VldCIsIlJFVFdFRVRfUkVRVUVTVCIsIl9fanN4IiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIkNhcmQiLCJjb3ZlciIsIkltYWdlcyIsIlBvc3RJbWFnZXMiLCJpbWFnZXMiLCJhY3Rpb25zIiwiUmV0d2VldE91dGxpbmVkIiwia2V5Iiwib25DbGljayIsIkhlYXJ0RmlsbGVkIiwiSGVhcnRPdXRsaW5lZCIsIk1lc3NhZ2VPdXRsaW5lZCIsIlBvcG92ZXIiLCJjb250ZW50IiwiQnV0dG9uIiwiR3JvdXAiLCJVc2VyIiwiUmVhY3QiLCJGcmFnbWVudCIsImxvYWRpbmciLCJFbGxpcHNpc091dGxpbmVkIiwidGl0bGUiLCJSZSIsImV4dHJhIiwiRm9sbG93QnV0dG9uIiwiUmV0d2VldElkIiwiUmV0d2VldCIsIk1ldGEiLCJhdmF0YXIiLCJBdmF0YXIiLCJuaWNrbmFtZSIsImRlc2NyaXB0aW9uIiwiUG9zdENhcmRDb250ZW50IiwicG9zdERhdGEiLCJDb21tZW50Rm9ybSIsIkxpc3QiLCJoZWFkZXIiLCJjb25jYXQiLCJDb21tZW50cyIsImxlbmd0aCIsIml0ZW1MYXlvdXQiLCJkYXRhU291cmNlIiwicmVuZGVySXRlbSIsIml0ZW0iLCJDb21tZW50IiwiYXV0aG9yIiwiX2MiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsImFycmF5T2YiLCJvYmplY3QiLCJzdHJpbmciLCJjcmVhdGVkQXQiLCJvYmplY3RPZiIsImFueSIsImlzUmVxdWlyZWQiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDVjtBQUNlO0FBT3JDO0FBQ1E7QUFDb0I7QUFDakI7QUFDRTtBQUNRO0FBTS9CO0FBQ3lCO0FBRTFDLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBQyxJQUFBLEVBQWlCO0VBQUFDLEVBQUE7RUFBQSxJQUFYQyxJQUFJLEdBQUFGLElBQUEsQ0FBSkUsSUFBSTtFQUN0QixJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQUU7RUFDOUIsSUFBTUMsRUFBRSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUs7SUFBQSxJQUFBQyxjQUFBO0lBQUEsUUFBQUEsY0FBQSxHQUFLRCxLQUFLLENBQUNFLElBQUksQ0FBQ0MsRUFBRSxjQUFBRixjQUFBLHVCQUFiQSxjQUFBLENBQWVILEVBQUU7RUFBQSxFQUFDO0VBQ3BELElBQU1NLEtBQUssR0FBR1QsSUFBSSxDQUFDVSxNQUFNLENBQUNDLElBQUksQ0FBQyxVQUFDQyxDQUFDO0lBQUEsT0FBS0EsQ0FBQyxDQUFDVCxFQUFFLEtBQUtBLEVBQUU7RUFBQSxFQUFDO0VBRWxELElBQUFVLFlBQUEsR0FBNkNULCtEQUFXLENBQ3RELFVBQUNDLEtBQUs7TUFB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RCxNQUFNLEVBQUU4QyxpREFBUyxDQUFDRyxPQUFPLENBQUNILGlEQUFTLENBQUNJLE1BQU0sQ0FBQztJQUMzQ3BDLElBQUksRUFBRWdDLGlEQUFTLENBQUNJLE1BQU07SUFDdEJ2QyxPQUFPLEVBQUVtQyxpREFBUyxDQUFDSyxNQUFNO0lBQ3pCQyxTQUFTLEVBQUVOLGlEQUFTLENBQUNLLE1BQU07SUFDM0JmLFFBQVEsRUFBRVUsaURBQVMsQ0FBQ0csT0FBTyxDQUFDSCxpREFBUyxDQUFDSSxNQUFNLENBQUM7SUFDN0NyRixNQUFNLEVBQUVpRixpREFBUyxDQUFDRyxPQUFPLENBQUNILGlEQUFTLENBQUNJLE1BQU0sQ0FBQztJQUMzQzNCLFNBQVMsRUFBRXVCLGlEQUFTLENBQUNFLE1BQU07SUFDM0J4QixPQUFPLEVBQUVzQixpREFBUyxDQUFDTyxRQUFRLENBQUNQLGlEQUFTLENBQUNRLEdBQUc7RUFDM0MsQ0FBQyxDQUFDLENBQUNDO0FBQ0wsQ0FBQztBQUVjdkcsdUVBQVEsRUFBQztBQUFBLElBQUE0RixFQUFBO0FBQUFZLFlBQUEsQ0FBQVosRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNmM1YjY2OWJhOWI0NzY1YTA5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIENhcmQsIExpc3QsIFBvcG92ZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSBcIkBhbnQtZGVzaWduL2NvbXBhdGlibGVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRWxsaXBzaXNPdXRsaW5lZCxcclxuICBIZWFydE91dGxpbmVkLFxyXG4gIE1lc3NhZ2VPdXRsaW5lZCxcclxuICBSZXR3ZWV0T3V0bGluZWQsXHJcbiAgSGVhcnRGaWxsZWQsXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuL1Bvc3RJbWFnZXNcIjtcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gXCIuL0NvbW1lbnRGb3JtXCI7XHJcbmltcG9ydCBQb3N0Q2FyZENvbnRlbnQgZnJvbSBcIi4vUG9zdENhcmRDb250ZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxufSBmcm9tIFwiLi4vdHlwZVwiO1xyXG5pbXBvcnQgRm9sbG93QnV0dG9uIGZyb20gXCIuL0ZvbGxvd0J1dHRvblwiO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuICBjb25zdCBsaWtlZCA9IHBvc3QuTGlrZXJzLmZpbmQoKHYpID0+IHYuaWQgPT09IGlkKTtcclxuXHJcbiAgY29uc3QgeyByZW1vdmVyUG9zdExvYWRpbmcsIHJldHdlZXRFcnJvciB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLnBvc3RcclxuICApO1xyXG4gIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5lZCwgc2V0Q29tbWVudEZvcm1PcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldENvbW1lbnRGb3JtT3BlbmVkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHJldHVybiBhbGVydChcIuuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6RcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgIH0pO1xyXG4gIH0sIFtpZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJldHdlZXRFcnJvcikge1xyXG4gICAgICBhbGVydChyZXR3ZWV0RXJyb3IpO1xyXG4gICAgfVxyXG4gIH0sIFtyZXR3ZWV0RXJyb3JdKTtcclxuXHJcbiAgY29uc3Qgb25Vbkxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHJldHVybiBhbGVydChcIuuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6RcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgfSk7XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIGNvbnN0IG9uUmVtb3ZlUG9zdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KFwi66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICB9KTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgY29uc3Qgb25SZXR3ZWV0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCFpZCkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoXCLroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUkVUV0VFVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgfSk7XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIiBvbkNsaWNrPXtvblJldHdlZXR9IC8+LFxyXG4gICAgICAgICAgbGlrZWQgPyAoXHJcbiAgICAgICAgICAgIDxIZWFydEZpbGxlZCBrZXk9XCJoZWFydGZpbGxlZFwiIG9uQ2xpY2s9e29uVW5MaWtlfSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvbkxpa2V9IC8+XHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fSAvPixcclxuICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgIGtleT1cIm1vcmVcIlxyXG4gICAgICAgICAgICBjb250ZW50PXtcclxuICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7siJjsoJU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH1cclxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3JlbW92ZXJQb3N0TG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICDsgq3soJxcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgPC9Qb3BvdmVyPixcclxuICAgICAgICBdfVxyXG4gICAgICAgIHRpdGxlPXtwb3N0LlJlfVxyXG4gICAgICAgIGV4dHJhPXtpZCAmJiA8Rm9sbG93QnV0dG9uIHBvc3Q9e3Bvc3R9IC8+fVxyXG4gICAgICA+XHJcbiAgICAgICAge3Bvc3QuUmV0d2VldElkICYmIHBvc3QuUmV0d2VldH0/IChcclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgY292ZXI9e3Bvc3QuUmV0d2VldC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30gLz59XHJcbiAgICAgICAgPjwvQ2FyZD5cclxuICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e3Bvc3QuUmV0d2VldC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgIHRpdGxlPXtwb3N0LlJldHdlZXQuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgIGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50IHBvc3REYXRhPXtwb3N0LlJldHdlZXQuY29udGVudH0gLz59XHJcbiAgICAgICAgPjwvQ2FyZC5NZXRhPlxyXG4gICAgICAgICkgOlxyXG4gICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgIHRpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5jb250ZW50fSAvPn1cclxuICAgICAgICA+PC9DYXJkLk1ldGE+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAge2NvbW1lbnRGb3JtT3BlbmVkICYmIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICBoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMubGVuZ3RofeqwnOydmCDrjJPquIBgfVxyXG4gICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Bvc3QuQ29tbWVudHN9XHJcbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgey8qPENvbW1lbnRGb3JtIC8+fVxyXG4gICAgICB7PENvbW1lbnRzIC8+Ki99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIExpa2VyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBSZXR3ZWV0SWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBSZXR3ZWV0OiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9