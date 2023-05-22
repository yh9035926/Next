module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/user/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginForm */ "./components/LoginForm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\components\\AppLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const AppLayout = ({
  children
}) => {
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.user);
  const menuItems = [{
    label: __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 14
      }
    }, "\uB178\uB4DC\uBC84\uB4DC"),
    key: "nodebord"
  }, {
    label: __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/profile",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 14
      }
    }, "\uD504\uB85C\uD544"),
    key: "profile"
  }, {
    label: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search, {
      enterButton: "Search",
      style: {
        verticalAlign: "middle"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }),
    key: "search"
  }, {
    label: __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/signup",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 14
      }
    }, "\uD68C\uC6D0\uAC00\uC785"),
    key: "signup"
  }];
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    mode: "horizontal",
    items: menuItems,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, me ? __jsx(_UserProfile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }) : __jsx(_LoginForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 35
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://www.naver.com",
    target: "_blank",
    rel: "noreferrer noopoener",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "\uB124\uC774\uBC84 \uAC00\uAE30"))));
};
AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type */ "./type/index.js");
var _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\components\\CommentForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const CommentForm = ({
  post
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => {
    var _state$user$me;
    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const {
    addCommentDone,
    addCommentLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.post);
  const [commentText, onChangeCommentText, setCommentText] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (addCommentDone) {
      setCommentText("");
    }
  }, [addCommentDone]);
  const onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    console.log(post.id, commentText);
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_5__["ADD_COMMENT_REQUEST"],
      data: {
        content: commentText,
        postId: post.id,
        userId: id
      }
    });
  }, [commentText, id]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    onFinish: onSubmitComment,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].TextArea, {
    value: commentText,
    onChange: onChangeCommentText,
    rows: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    htmlType: "submit",
    loading: addCommentLoading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "\uC090\uC57D")));
};
CommentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

/***/ }),

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type */ "./type/index.js");
var _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\components\\FollowButton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const FollowButton = ({
  post
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    me,
    followLoading,
    unFollowLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(v => v.id === post.User.id);
  const onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (isFollowing) {
      dispatch({
        type: _type__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: post.User.id
      });
    } else {
      dispatch({
        type: _type__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: post.User.id
      });
    }
  }, [isFollowing]);
  if (post.User.id === me.id) {
    return null;
  }
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    loading: followLoading || unFollowLoading,
    onClick: onClickButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, isFollowing ? "언팔로우" : " 팔로우");
};
FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

/***/ }),

/***/ "./components/ImagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\components\\ImagesZoom\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const ImagesZoom = ({
  images,
  onClose
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  return __jsx(Overlay, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(Global, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx(Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "\uC0C1\uC138 \uC774\uBBF8\uC9C0"), __jsx("button", {
    onClick: onClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "X")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(SlickWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
    initialSlide: 0,
    beforeChange: slide => setCurrentSlide(slide),
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, images.map(v => __jsx(ImgWrapper, {
    key: v.src,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: `http://localhost:3075/${v.src}`,
    alt: v.src,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  })))), __jsx(Indicator, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, currentSlide + 1, "", "/", images.length)))));
};
ImagesZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);
const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "ImagesZoom__Overlay",
  componentId: "sc-fky4ab-0"
})(["position:fixed;z-index:5000;top:0;left:0;right:0;bottom:0;"]);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.header.withConfig({
  displayName: "ImagesZoom__Header",
  componentId: "sc-fky4ab-1"
})(["height:44px;background:white;position:relative;padding:0;text-align:center;& h1{margin:0;font-size:17px;color:#333;line-height:44px;}& button{position:absolute;right:0;top:0;padding:15px;line-height:14px;cursor:pointer;}"]);
const SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "ImagesZoom__SlickWrapper",
  componentId: "sc-fky4ab-2"
})(["height:calc() (100%-44px);background:#090909;"]);
const ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "ImagesZoom__ImgWrapper",
  componentId: "sc-fky4ab-3"
})(["padding:32px;text-align:center;& img{margin:0 auto;max-height:750px;}"]);
const Indicator = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "ImagesZoom__Indicator",
  componentId: "sc-fky4ab-4"
})(["text-align:center;& > div{width:75px;height:30px;line-height:30px;border-radius:15px;background:#313131;display:inline-block;text-align:center;color:white;font-size:15px;}"]);
const Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])([".slick-slide{display:inline-block}"]);

/***/ }),

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\components\\LoginForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const LoginForm = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const [email, onChangeEmail] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const [password, onChangePassword] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    logInLoading,
    logInError
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.user);
  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    console.log(email, password);
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_5__["loginRequestAction"])({
      email,
      password
    }));
  }, [email, password]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitForm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "user-email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "\uC774\uBA54\uC77C"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "email",
    name: "user-email",
    value: email,
    onChange: onChangeEmail,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    onChange: onChangePassword,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: logInLoading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "\uB85C\uADF8\uC778"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, "\uD68C\uC6D0\uAC00\uC785"))));
};
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/compatible */ "@ant-design/compatible");
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../type */ "./type/index.js");
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FollowButton */ "./components/FollowButton.js");
var _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\components\\PostCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











const PostCard = ({
  post
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => {
    var _state$user$me;
    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const liked = post.Likers.find(v => v.id === id);
  const {
    removerPostLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.post);
  const {
    0: commentFormOpened,
    1: setCommentFormOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    if (!id) {
      return alert("로그인이 필요합니다");
    }
    return setCommentFormOpened(prev => !prev);
  }, [id]);
  const onLike = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    if (!id) {
      return alert("로그인이 필요합니다");
    }
    return dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_9__["LIKE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  const onUnLike = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    if (!id) {
      return alert("로그인이 필요합니다");
    }
    return dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_9__["UNLIKE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  const onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    if (!id) {
      return alert("로그인이 필요합니다");
    }
    return dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_9__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  const onRetweet = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    if (!id) {
      return alert("로그인이 필요합니다");
    }
    return dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_9__["RETWEET_REQUEST"],
      data: post.id
    });
  }, [id]);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
      images: post.Images,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 34
      }
    }),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["RetweetOutlined"], {
      key: "retweet",
      onClick: onRetweet,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }
    }), liked ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartFilled"], {
      key: "heartfilled",
      onClick: onUnLike,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
      key: "heart",
      onClick: onLike,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
      key: "comment",
      onClick: onToggleComment,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Popover"], {
      key: "more",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"].Group, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 15
        }
      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        type: "danger",
        onClick: onRemovePost,
        loading: removerPostLoading,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 19
        }
      }, "\uC2E0\uACE0")),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }
    }))],
    title: post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다` : null,
    extra: id && __jsx(_FollowButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
      post: post,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 22
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, post.RetweetId && post.Retweet ? __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    cover: post.Retweet.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
      images: post.Retweet.Images,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 23
      }
    }, post.Retweet.User.nickname[0]),
    title: post.Retweet.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      postData: post.Retweet.content,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 28
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 21
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      postData: post.content,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 26
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  })), commentFormOpened && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    post: post,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["List"], {
    header: `${post.Comments.length}개의 댓글`,
    itemLayout: "horizontal",
    dataSource: post.Comments,
    renderItem: item => __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 15
      }
    }, __jsx(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
      author: item.User.nickname,
      avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 27
        }
      }, item.User.nickname[0]),
      content: item.content,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  })));
};
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

/***/ }),

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\components\\PostCardContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PostCardContent = ({
  postData
}) => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, postData.split(/(#[^\s#]+)/g).map((v, i) => {
    //해시태그 추출
    if (v.match(/(#[^\s#]+)/)) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: `/hashtag/${v.slice(1)}`,
        key: i,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 13
        }
      }, v);
    }
    return v;
  }));
};
PostCardContent.propTypes = {
  postData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCardContent);

/***/ }),

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImagesZoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImagesZoom */ "./components/ImagesZoom/index.js");
var _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\components\\PostImages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PostImages = ({
  images
}) => {
  const {
    0: showImagesZoom,
    1: setSHowImagesZoom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const onZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setSHowImagesZoom(true);
  }, []);
  const onClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setSHowImagesZoom(false);
  }, []);
  if (images.length === 1) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      role: "presentation",
      src: `http://localhost:3075/${images[0].src}`,
      alt: images[0].src,
      onClick: onZoom,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 28
      }
    }));
  }
  if (images.length === 2) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      role: "presentation",
      src: `http://localhost:3075/${images[0].src}`,
      alt: images[0].src,
      onClick: onZoom,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 28
      }
    }), __jsx("img", {
      role: "presentation",
      src: `http://localhost:3075/${images[1].src}`,
      alt: images[1].src,
      onClick: onZoom,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }));
  }
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, images[0] && images[0].src && __jsx("img", {
    role: "presentation",
    src: `http://localhost:3075/${images[0].src}`,
    alt: images[0].src,
    onClick: onZoom,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
    images: images,
    onClose: onClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 28
    }
  }), __jsx("div", {
    role: "presentation",
    style: {
      display: "inline-block",
      width: "50%",
      textAlign: "center",
      verticalAlign: "middle"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354 \uBCF4\uAE30")));
};
PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

/***/ }),

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\components\\UserProfile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const UserProfile = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    me,
    logOutLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["logoutRequestAction"])());
  }, []);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    actions: [__jsx("div", {
      key: "twit",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    }, "\uC9F9\uCA31", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }), me.Posts.length), __jsx("div", {
      key: "followings",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, "\uD314\uB85C\uC789", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }), me.Followings.length), __jsx("div", {
      key: "followers",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    }, "\uD314\uB85C\uC6CC", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }), me.Followers.length)],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, me.nickname[0]),
    title: me.nickname,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onLogOut,
    loading: logOutLoading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "\uB85C\uADF8\uC544\uC6C3"));
};
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useInput = () => {
  const {
    0: value,
    1: setvalue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setvalue(e.target.value);
  }, []);
  return [value, handler, setvalue];
};
/* harmony default export */ __webpack_exports__["default"] = (useInput);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};
function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser
  if (!IntersectionObserver) {
    return undefined;
  }
  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }
      const cb = listeners.get(entry.target);
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}
const listenToIntersections = (el, cb) => {
  const observer = getObserver();
  if (!observer) {
    return () => {};
  }
  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }
    listeners.delete(el);
  };
};
function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch
  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character
  prefetched[href + '%' + as] = true;
}
function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
  // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;
  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }
  e.preventDefault(); //  avoid scroll for urls with anchor refs
  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present
  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;
    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}
function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:
    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:
    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);
    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }
  const p = props.prefetch !== false;
  const [childElm, setChildElm] = _react.default.useState();
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';
  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);
  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];
      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);
  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag
  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error
  const child = _react.Children.only(children);
  const childProps = {
    ref: el => {
      if (el) setChildElm(el);
      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }
      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };
  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }
      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user
  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }
  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}
var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0; /**
                                             * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
                                             */
function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
} /**
  * Normalizes the trailing slash of a path according to the `trailingSlash` option
  * in `next.config.js`.
  */
const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));
exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;
var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");
var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));
exports.withRouter = _withRouter.default; /* global window */
const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready(cb) {
    if (this.router) return cb();
    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }
});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;
      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});
function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.
var _default = singletonRouter; // Reexport the withRoute HOC
exports.default = _default;
function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance
exports.createRouter = createRouter;
function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};
  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful
      continue;
    }
    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it
  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.default = withRouter;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }
  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }
  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt; /*
                        MIT License
                        Copyright (c) Jason Miller (https://jasonformat.com/)
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                        */ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file
function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");
var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");
var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));
var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");
var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");
var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} /* global __NEXT_DATA__ */ // tslint:disable:no-console
const basePath =  false || '';
function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}
function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}
function addLocale(path, locale, defaultLocale) {
  if (false) {}
  return path;
}
function delLocale(path, locale) {
  if (false) {}
  return path;
}
function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}
function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}
function delBasePath(path) {
  return path.slice(basePath.length) || '/';
} /**
  * Detects whether a given url is routable by the Next.js router (browser only).
  */
function isLocalURL(url) {
  if (url.startsWith('/')) return true;
  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches =
  // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') ||
  // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);
  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)
    let replaced = `[${repeat ? '...' : ''}${param}]`;
    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }
    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (
    // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }
  return {
    params,
    result: interpolatedRoute
  };
}
function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
} /**
  * Resolves a given hyperlink with a certain router state (basePath not included).
  * Preserves absolute urls.
  */
function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';
    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href
    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}
const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');
function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}
function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}
const manualScrollRestoration =  false && false;
function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }
      throw new Error(`Failed to load static props`);
    }
    return res.json();
  });
}
function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }
    throw err;
  });
}
class Router {
  /**
  * Map of all components loaded in `Router`
  */ // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.onPopState = e => {
      const state = e.state;
      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }
      if (!state.__N) {
        return;
      }
      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site
      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.
      if (this._bps && !this._bps(state)) {
        return;
      }
      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key
    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)
    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.
    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }
    this.components['/_app'] = {
      Component: App,
      styleSheets: [/* /_app does not need its stylesheets managed */]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch
    this.asPath =
    // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site
    this.isSsr = true;
    this.isFallback = isFallback;
    if (false) {}
    if (false) {}
  }
  reload() {
    window.location.reload();
  } /**
    * Go back in history
    */
  back() {
    window.history.back();
  } /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  } /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }
  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry
    if (_utils.ST) {
      performance.mark('routeChange');
    }
    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }
    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.
    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to
    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1
    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url
    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }
    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly
    let resolvedAs = as;
    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded
        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }
    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);
    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);
        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }
          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }
    Router.events.emit('routeChangeStart', as);
    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition
      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not
        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
          this._resolveHref(parsedHref, pages);
          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }
        window.location.href = destination;
        return new Promise(() => {});
      }
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);
      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }
      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });
      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }
      if (false) {}
      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }
      throw err;
    }
  }
  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }
      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }
    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      },
      // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }
  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }
    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.
      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.
      throw buildCancellationError();
    }
    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };
      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }
      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }
  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];
      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;
      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");
        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }
      let dataHref;
      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }
      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component,
      // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }
  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  } /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */
  beforePopState(cb) {
    this._bps = cb;
  }
  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same
    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change
    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.
    return oldHash !== newHash;
  }
  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value
    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found
    const idEl = document.getElementById(hash);
    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers
    const nameEl = document.getElementsByName(hash)[0];
    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }
  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));
    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }
    return parsedHref;
  } /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */
  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries
    if (true) {
      return;
    }
    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }
  async fetchComponent(route) {
    let cancelled = false;
    const cancel = this.clc = () => {
      cancelled = true;
    };
    const componentResult = await this.pageLoader.loadPage(route);
    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }
    if (cancel === this.clc) {
      this.clc = null;
    }
    return componentResult;
  }
  _getData(fn) {
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };
    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }
      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }
      return data;
    });
  }
  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);
    if (false) {}
    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }
  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }
  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];
    const AppTree = this._wrapApp(App);
    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }
  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }
  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }
}
exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp
function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;
var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }
  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }
  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }
  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
const DUMMY_BASE = new URL(true ? 'http://n' : undefined); /**
                                                                                 * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
                                                                                 * (e.g. `./hello`) then at least base must be.
                                                                                 * Absolute urls are rejected with one exception, in the browser, absolute urls that are on
                                                                                 * the current origin will be parsed as relative
                                                                                 */
function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);
  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }
  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
exports.pathToRegexp = pathToRegexp;
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;
const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});
exports.customRouteMatcherOptions = customRouteMatcherOptions;
var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);
      if (!res) {
        return false;
      }
      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }
      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
exports.__esModule = true;
exports.default = prepareDestination;
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};
  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath,
  // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values
  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;
    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }
    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path
  const paramKeys = Object.keys(params);
  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }
  const shouldAddBasePath = destination.startsWith('/') && basePath;
  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }
    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values
  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;
function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}
function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}
function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}
function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;
var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));
var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
const customRouteMatcher = (0, _pathMatch.default)(true);
function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);
      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }
        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain
        const resolvedHref = resolveHref(asPath);
        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }
  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;
function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);
    if (!routeMatch) {
      return false;
    }
    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];
      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes
function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}
function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');
  if (optional) {
    param = param.slice(1, -1);
  }
  const repeat = param.startsWith('...');
  if (repeat) {
    param = param.slice(3);
  }
  return {
    key: param,
    repeat,
    optional
  };
}
function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest
  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters
    const getSafeRouteKey = () => {
      let routeKey = '';
      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;
        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }
      return routeKey;
    };
    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex
        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key
        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }
        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }
        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }
        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }
  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;
var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js"); /**
                                                       * Utils
                                                       */
function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }
    return result;
  };
}
function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}
function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
  return res.finished || res.headersSent;
}
async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;
    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`
  const res = ctx.res || ctx.ctx && ctx.ctx.res;
  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }
    return {};
  }
  const props = await App.getInitialProps(ctx);
  if (res && isResSent(res)) {
    return props;
  }
  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }
  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }
  return props;
}
const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;
function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }
  return (0, _formatUrl.formatUrl)(url);
}
const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/user/[id].js":
/*!****************************!*\
  !*** ./pages/user/[id].js ***!
  \****************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../type */ "./type/index.js");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.js");
var _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\pages\\user\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const User = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  const {
    id
  } = router.query;
  const {
    mainPosts,
    hasMorePost,
    loadPostsLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  const {
    userInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function onScroll() {
      console.log(window.screenY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) if (hasMorePost && !loadPostsLoading) {
        dispatch({
          type: _type__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_POSTS_REQUEST"],
          lastId: mainPosts[mainPosts.length - 1] && mainPosts[mainPosts.length - 1].id,
          data: id
        });
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [mainPosts.length, hasMorePost, id]);
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, userInfo.nickname, "\uB2D8\uC758 \uAE00"), __jsx("meta", {
    name: "description",
    content: `${userInfo.nickname}님의 게시글`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:title",
    content: `${userInfo.nickname}님의 게시금`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:description",
    content: `${userInfo.nickname}님의 게시글`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "https://nodebird.com/favicon.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:url",
    content: `https://nodebird.com/post/${id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  })), userInfo ? __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Card"], {
    actions: [__jsx("div", {
      key: "twit",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    }, "\uC9F9\uCA31", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }
    }), userInfo.Posts), __jsx("div", {
      key: "followings",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    }, "\uD314\uB85C\uC789", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 15
      }
    }), userInfo.Followings), __jsx("div", {
      key: "followers",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }
    }, "\uD314\uB85C\uC6CC", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 15
      }
    }), userInfo.Followers)],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Avatar"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 21
      }
    }, userInfo.nickname[0]),
    title: userInfo.nickname,
    description: "\uC6B0\uC790",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  })) : null, mainPosts.map(c => __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: c.id,
    post: c,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  })));
};
const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : "";
  axios__WEBPACK_IMPORTED_MODULE_6___default.a.defaults.headers.Cookie = "";
  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.defaults.headers.Cookie = cookie;
  } //Cookie 넣어줘야 로그인 새로고침 가능
  context.store.dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_POSTS_REQUEST"],
    data: context.params.id
  });
  context.store.dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_REQUEST"],
    data: context.params.id
  });
  context.store.dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_REQUEST"]
  });
  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_5__["END"]);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);




const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      //console.log("HYDRATE", action);
      return action.payload;
    default:
      {
        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_2__["default"]
        });
        return combinedReducer(state, action);
      }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type */ "./type/index.js");


const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePost: true,
  singlePost: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null
};
const addPost = data => ({
  type: _type__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_REQUEST"],
  data
});
const addComment = data => ({
  type: _type__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_REQUEST"],
  data
});
const rootReducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case _type__WEBPACK_IMPORTED_MODULE_1__["REMOVE_IMAGE"]:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;

      //-------------------------------------------------------------------
      case _type__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_REQUEST"]:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_SUCCESS"]:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(action.data);
        draft.imagePaths = [];
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_FAILURE"]:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["LIKE_POST_REQUEST"]:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LIKE_POST_SUCCESS"]:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers.push({
            id: action.data.UserId
          });
          draft.likePostLoading = false;
          draft.likePostDone = true;
          break;
        }
      case _type__WEBPACK_IMPORTED_MODULE_1__["LIKE_POST_FAILURE"]:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_REQUEST"]:
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_POSTS_REQUEST"]:
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_HASHTAG_POSTS_REQUEST"]:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_POSTS_SUCCESS"]:
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_HASHTAG_POSTS_SUCCESS"]:
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_SUCCESS"]:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data); // action.data를 concat해서 기존 데이터에 추가
        draft.hasMorePost = action.data.length === 10;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_FAILURE"]:
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_POSTS_FAILURE"]:
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_HASHTAG_POSTS_FAILURE"]:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_REQUEST"]:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_SUCCESS"]:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.singlePost = action.data;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_FAILURE"]:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;

      //-------------------------------------------------------------------
      case _type__WEBPACK_IMPORTED_MODULE_1__["RETWEET_REQUEST"]:
        draft.retweetLoading = true;
        draft.retweetDone = false;
        draft.retweetError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["RETWEET_SUCCESS"]:
        draft.retweetLoading = false;
        draft.retweetDone = true;
        draft.mainPosts.unshift(action.data);
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["RETWEET_FAILURE"]:
        draft.retweetLoading = false;
        draft.retweetError = action.error;
        break;
      //-------------------------------------------------------------------
      case _type__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_REQUEST"]:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_SUCCESS"]:
        draft.imagePaths = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_FAILURE"]:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_POST_REQUEST"]:
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_POST_SUCCESS"]:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
          draft.unlikePostLoading = false;
          draft.unlikePostDone = true;
          break;
        }
      case _type__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_POST_FAILURE"]:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_REQUEST"]:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_SUCCESS"]:
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_FAILURE"]:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_REQUEST"]:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_SUCCESS"]:
        //const postIndex = state.mainPosts.findIndex(
        //   (v) => v.id === action.data.postId
        // );
        // const post = { ...state.mainPosts[postIndex] };
        //post.Comments = [dummyComment(action.data.content), ...post.Comments];
        // const mainPosts = [...state.mainPosts];
        // mainPosts[postIndex] = post;

        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_FAILURE"]:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
      //-------------------------------------------------------------------

      default:
        break;
    }
  });
};
//immer 쓰면 ...state 안 써도 됨 state 대신 draft

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type */ "./type/index.js");


const initialState = {
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  loadFollowersLoading: false,
  loadFollowersDone: false,
  loadFollowersError: null,
  loadFollowingsLoading: false,
  loadFollowingsDone: false,
  loadFollowingsError: null,
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  followLoading: false,
  followDone: false,
  followError: null,
  removeFollowerLoading: false,
  removeFollowerDone: false,
  removeFollowerError: null,
  unFollowLoading: false,
  unFollowDone: false,
  unFollowError: null,
  userInfo: null,
  me: null
};
const loginRequestAction = data => {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_REQUEST"],
    data
  };
};
const logoutRequestAction = () => {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_REQUEST"]
  };
};
const rootReducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_REQUEST"]:
        draft.logInError = null;
        draft.logInLoading = true;
        draft.logInDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_SUCCESS"]:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_FAILURE"]:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_MY_INFO_REQUEST"]:
        draft.loadMyInfoError = null;
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_MY_INFO_SUCCESS"]:
        draft.loadMyInfoLoading = false;
        draft.me = action.data;
        draft.loadMyInfoDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_MY_INFO_FAILURE"]:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_REQUEST"]:
        draft.loadUserError = null;
        draft.loadUserLoading = true;
        draft.loadUserDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_SUCCESS"]:
        draft.loadUserLoading = false;
        draft.userInfo = action.data;
        draft.loadUserDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_FAILURE"]:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FOLLOWER_REQUEST"]:
        draft.removeFollowerError = null;
        draft.removeFollowerLoading = true;
        draft.removeFollowerDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FOLLOWER_SUCCESS"]:
        draft.removeFollowerLoading = false;
        draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
        draft.removeFollowerDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FOLLOWER_FAILURE"]:
        draft.removeFollowerLoading = false;
        draft.removeFollowerError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWERS_REQUEST"]:
        draft.loadFollowersError = null;
        draft.loadFollowersLoading = true;
        draft.loadFollowersDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWERS_SUCCESS"]:
        draft.loadFollowersLoading = false;
        draft.me.Followers = action.data;
        draft.loadFollowersDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWERS_FAILURE"]:
        draft.loadFollowersLoading = false;
        draft.loadFollowersError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWINGS_REQUEST"]:
        draft.loadFollowingsError = null;
        draft.loadFollowingsLoading = true;
        draft.loadFollowingsDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWINGS_SUCCESS"]:
        draft.loadFollowingsLoading = false;
        draft.me.Followings = action.data;
        draft.loadFollowingsDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWINGS_FAILURE"]:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_REQUEST"]:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_SUCCESS"]:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_FAILURE"]:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_REQUEST"]:
        draft.followError = null;
        draft.followLoading = true;
        draft.followDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_SUCCESS"]:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me.Followings.push({
          id: action.data.UserId
        });
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_FAILURE"]:
        draft.followLoading = false;
        draft.followError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_REQUEST"]:
        draft.unFollowError = null;
        draft.unFollowLoading = true;
        draft.unFollowDone = false;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_SUCCESS"]:
        draft.unFollowLoading = false;
        draft.unFollowDone = true;
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_FAILURE"]:
        draft.unFollowLoading = false;
        draft.unFollowError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_REQUEST"]:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_SUCCESS"]:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_FAILURE"]:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_REQUEST"]:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_SUCCESS"]:
        draft.me.nickname = action.data.nickname;
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_FAILURE"]:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;
      //-------------------------------------------------------------------

      case _type__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_TO_ME"]:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;
      case _type__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_OF_ME"]:
        draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
      default:
        break;
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = "http://localhost:3075";
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true; //쿠키 전달

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type */ "./type/index.js");




//-------------------------------------------------------------
function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/post", data);
}
function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행
}
//-------------------------------------------------------------
function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/post/images", data);
}
function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchuploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행
}
//-------------------------------------------------------------

function loadPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts?lastId=${lastId || 0}`); //get에서 데이터 넣기 ? a=b 이런 식으로
}

function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostsAPI, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행 REQUSET는 보내짐
}
//-------------------------------------------------------------

function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/post/${data}`); //get에서 데이터 넣기 ? a=b 이런 식으로
}

function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행 REQUSET는 보내짐
}

//-------------------------------------------------------------

function loadUserPostAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`); //get에서 데이터 넣기 ? a=b 이런 식으로
}

function* loadUserPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserPostAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLoadUserPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_REQUEST"], loadUserPost); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행 REQUSET는 보내짐
}
//-------------------------------------------------------------

function loadHashtagPostAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`); //get에서 데이터 넣기 ? a=b 이런 식으로
  //encodeURIComponent  한글을 영문자로 바꿈
}

function* loadHashtagPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadHashtagPostAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLoadHashtagPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPost); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행 REQUSET는 보내짐
}

//-------------------------------------------------------------
function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data}/retweet`);
}
function* retweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(retweetAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행
}
//-------------------------------------------------------------

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}`);
}
function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행
}
//-------------------------------------------------------------

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data.postId}/comment`, data);
}
function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행
}
//-------------------------------------------------------------

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/post/${data}/like`); //patch 일부분 수정
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행
}
//-------------------------------------------------------------

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}/like`);
}
function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost); //마지막 것만
  //throttle("ADD_POST_REQUEST", addPost,2000) 2초 동안 1번 실행
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchuploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUserPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadHashtagPost)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type */ "./type/index.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



//-------------------------------------------------------------------
function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/user/login", data);
}
function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logInAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 dipatch

      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLogin() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["LOG_IN_REQUEST"], logIn); //반복
}
//-------------------------------------------------------------------

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/user/logout");
}
function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLogout() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLeading"])(_type__WEBPACK_IMPORTED_MODULE_0__["LOG_OUT_REQUEST"], logOut); //첫 번째 것만
}

//-------------------------------------------------------------------

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/user", data);
}
function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 dipatch
      type: _type__WEBPACK_IMPORTED_MODULE_0__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchSingUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_0__["SIGN_UP_REQUEST"], signUp); //첫 번째 것만
}

//-------------------------------------------------------------------

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch(`/user/${data}/follow`);
}
function* follow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(followAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 dipatch

      type: _type__WEBPACK_IMPORTED_MODULE_0__["FOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["FOLLOW_REQUEST"], follow); //반복
}

//-----------------------------------------------------------------------
function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`/user/${data}/follow`);
}
function* unfollow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unfollowAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 dipatch

      type: _type__WEBPACK_IMPORTED_MODULE_0__["UNFOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["UNFOLLOW_REQUEST"], unfollow); //반복
}

//-------------------------------------------------------------------
function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/user");
}
function* loadMyInfo(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMyInfoAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 dipatch

      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["LOAD_MY_INFO_REQUEST"], loadMyInfo); //반복
}

//-------------------------------------------------------------------
function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`user/${data}`);
}
function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 dipatch

      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_USER_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["LOAD_USER_REQUEST"], loadUser); //반복
}
//-------------------------------------------------------------------
function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/user/followers", data);
}
function* loadFollowers(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowersAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 dipatch

      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_FOLLOWERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_FOLLOWERS_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["LOAD_FOLLOWERS_REQUEST"], loadFollowers); //반복
}
//-------------------------------------------------------------------
function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/user/followings", data);
}
function* loadFollowings(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowingsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 dipatch

      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_FOLLOWINGS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_FOLLOWINGS_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchLoadFollowins() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings); //반복
}

//-------------------------------------------------------------------

function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch("/user/nickname", {
    nickname: data
  });
}
function* changeNickname(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(changeNicknameAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 dipatch

      type: _type__WEBPACK_IMPORTED_MODULE_0__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["CHANGE_NICKNAME_REQUEST"], changeNickname); //반복
}
//-------------------------------------------------------------------

function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`/user/follower/${data}`);
}
function* removeFollower(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removeFollowerAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      //put은 dipatch

      type: _type__WEBPACK_IMPORTED_MODULE_0__["REMOVE_FOLLOWER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["REMOVE_FOLLOWER_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["REMOVE_FOLLOWER_REQUEST"], removeFollower); //반복
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogout), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSingUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowins), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUser)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");






const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_4___default()();
  const middlewares = [sagaMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]); //sagaTask 서버사이드랜더링용
  return store;
};
const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "./type/index.js":
/*!***********************!*\
  !*** ./type/index.js ***!
  \***********************/
/*! exports provided: LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_USER_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, FOLLOW_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, RETWEET_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, UPLOAD_IMAGES_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, REMOVE_IMAGE, UNFOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, ADD_POST_SUCCESS, ADD_POST_REQUEST, ADD_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, REMOVE_POST_SUCCESS, REMOVE_POST_REQUEST, REMOVE_POST_FAILURE, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_FAILURE, ADD_COMMENT_SUCCESS, ADD_COMMENT_REQUEST, ADD_COMMENT_FAILURE, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_FAILURE, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, ADD_POST_TO_ME, REMOVE_POST_OF_ME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOAD_MY_INFO_FAILURE = "LOAD_MY_INFO_FAILURE";
const LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST";
const LOAD_MY_INFO_SUCCESS = "LOAD_MY_INFO_SUCCESS";
const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";
const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
const LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE";
const LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST";
const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";
const LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAG_POSTS_FAILURE";
const LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAG_POSTS_REQUEST";
const LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAG_POSTS_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const FOLLOW_FAILURE = "FOLLOW_FAILURE";
const FOLLOW_REQUEST = "FOLLOW_REQUEST";
const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const RETWEET_FAILURE = "RETWEET_FAILURE";
const RETWEET_REQUEST = "RETWEET_REQUEST";
const RETWEET_SUCCESS = "RETWEET_SUCCESS";
const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";
const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
const REMOVE_IMAGE = "REMOVE_IMAGE";
const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";
const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";
const LOAD_FOLLOWERS_FAILURE = "LOAD_FOLLOWERS_FAILURE";
const LOAD_FOLLOWERS_REQUEST = "LOAD_FOLLOWERS_REQUEST";
const LOAD_FOLLOWERS_SUCCESS = "LOAD_FOLLOWERS_SUCCESS";
const LOAD_FOLLOWINGS_FAILURE = "LOAD_FOLLOWINGS_FAILURE";
const LOAD_FOLLOWINGS_REQUEST = "LOAD_FOLLOWINGS_REQUEST";
const LOAD_FOLLOWINGS_SUCCESS = "LOAD_FOLLOWINGS_SUCCESS";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const REMOVE_FOLLOWER_SUCCESS = "REMOVE_FOLLOWER_SUCCESS";
const REMOVE_FOLLOWER_REQUEST = "REMOVE_FOLLOWER_REQUEST";
const REMOVE_FOLLOWER_FAILURE = "REMOVE_FOLLOWER_FAILURE";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";
const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";
const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
const ADD_POST_TO_ME = "ADD_POST_TO_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

/***/ }),

/***/ "@ant-design/compatible":
/*!*****************************************!*\
  !*** external "@ant-design/compatible" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/compatible");

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbWVudEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW5Gb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0Q2FyZENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlci8uanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi90eXBlL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2NvbXBhdGlibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2xpY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkFwcExheW91dCIsImNoaWxkcmVuIiwibWUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lbnVJdGVtcyIsImxhYmVsIiwiX19qc3giLCJMaW5rIiwiaHJlZiIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwia2V5IiwiSW5wdXQiLCJTZWFyY2giLCJlbnRlckJ1dHRvbiIsInN0eWxlIiwidmVydGljYWxBbGlnbiIsIk1lbnUiLCJtb2RlIiwiaXRlbXMiLCJSb3ciLCJndXR0ZXIiLCJDb2wiLCJ4cyIsIm1kIiwiVXNlclByb2ZpbGUiLCJMb2dpbkZvcm0iLCJ0YXJnZXQiLCJyZWwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsIkNvbW1lbnRGb3JtIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpZCIsIl9zdGF0ZSR1c2VyJG1lIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50TG9hZGluZyIsImNvbW1lbnRUZXh0Iiwib25DaGFuZ2VDb21tZW50VGV4dCIsInNldENvbW1lbnRUZXh0IiwidXNlSW5wdXQiLCJ1c2VFZmZlY3QiLCJvblN1Ym1pdENvbW1lbnQiLCJ1c2VDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsImRhdGEiLCJjb250ZW50IiwicG9zdElkIiwidXNlcklkIiwiRm9ybSIsIm9uRmluaXNoIiwiSXRlbSIsIlRleHRBcmVhIiwidmFsdWUiLCJvbkNoYW5nZSIsInJvd3MiLCJCdXR0b24iLCJodG1sVHlwZSIsImxvYWRpbmciLCJvYmplY3QiLCJGb2xsb3dCdXR0b24iLCJmb2xsb3dMb2FkaW5nIiwidW5Gb2xsb3dMb2FkaW5nIiwiaXNGb2xsb3dpbmciLCJGb2xsb3dpbmdzIiwiZmluZCIsInYiLCJVc2VyIiwib25DbGlja0J1dHRvbiIsIlVORk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfUkVRVUVTVCIsIm9uQ2xpY2siLCJJbWFnZXNab29tIiwiaW1hZ2VzIiwib25DbG9zZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInVzZVN0YXRlIiwiT3ZlcmxheSIsIkdsb2JhbCIsIkhlYWRlciIsIlNsaWNrV3JhcHBlciIsIlNsaWNrIiwiaW5pdGlhbFNsaWRlIiwiYmVmb3JlQ2hhbmdlIiwic2xpZGUiLCJpbmZpbml0ZSIsImFycm93cyIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwibWFwIiwiSW1nV3JhcHBlciIsInNyYyIsImFsdCIsIkluZGljYXRvciIsImxlbmd0aCIsImFycmF5T2YiLCJmdW5jIiwic3R5bGVkIiwiZGl2Iiwid2l0aENvbmZpZyIsImRpc3BsYXlOYW1lIiwiY29tcG9uZW50SWQiLCJoZWFkZXIiLCJjcmVhdGVHbG9iYWxTdHlsZSIsImVtYWlsIiwib25DaGFuZ2VFbWFpbCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsImxvZ0luTG9hZGluZyIsImxvZ0luRXJyb3IiLCJvblN1Ym1pdEZvcm0iLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJhbGVydCIsImh0bWxGb3IiLCJuYW1lIiwicmVxdWlyZWQiLCJQb3N0Q2FyZCIsImxpa2VkIiwiTGlrZXJzIiwicmVtb3ZlclBvc3RMb2FkaW5nIiwiY29tbWVudEZvcm1PcGVuZWQiLCJzZXRDb21tZW50Rm9ybU9wZW5lZCIsIm9uVG9nZ2xlQ29tbWVudCIsInByZXYiLCJvbkxpa2UiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIm9uVW5MaWtlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIm9uUmVtb3ZlUG9zdCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJvblJldHdlZXQiLCJSRVRXRUVUX1JFUVVFU1QiLCJDYXJkIiwiY292ZXIiLCJJbWFnZXMiLCJQb3N0SW1hZ2VzIiwiYWN0aW9ucyIsIlJldHdlZXRPdXRsaW5lZCIsIkhlYXJ0RmlsbGVkIiwiSGVhcnRPdXRsaW5lZCIsIk1lc3NhZ2VPdXRsaW5lZCIsIlBvcG92ZXIiLCJHcm91cCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJFbGxpcHNpc091dGxpbmVkIiwidGl0bGUiLCJSZXR3ZWV0SWQiLCJuaWNrbmFtZSIsImV4dHJhIiwiUmV0d2VldCIsIk1ldGEiLCJhdmF0YXIiLCJBdmF0YXIiLCJkZXNjcmlwdGlvbiIsIlBvc3RDYXJkQ29udGVudCIsInBvc3REYXRhIiwiTGlzdCIsIkNvbW1lbnRzIiwiaXRlbUxheW91dCIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwiaXRlbSIsIkNvbW1lbnQiLCJhdXRob3IiLCJzaGFwZSIsIm51bWJlciIsInN0cmluZyIsImNyZWF0ZWRBdCIsIm9iamVjdE9mIiwiYW55Iiwic3BsaXQiLCJpIiwibWF0Y2giLCJzbGljZSIsInNob3dJbWFnZXNab29tIiwic2V0U0hvd0ltYWdlc1pvb20iLCJvblpvb20iLCJyb2xlIiwiZGlzcGxheSIsIndpZHRoIiwidGV4dEFsaWduIiwiUGx1c091dGxpbmVkIiwibG9nT3V0TG9hZGluZyIsIm9uTG9nT3V0IiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIlBvc3RzIiwiRm9sbG93ZXJzIiwic2V0dmFsdWUiLCJoYW5kbGVyIiwiZSIsImNhY2hlZE9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZXIiLCJvYnNlcnZlIiwic2V0IiwiZXJyIiwiZXJyb3IiLCJwcmVmZXRjaCIsInJvdXRlciIsImFzIiwib3B0aW9ucyIsImNhdGNoIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJ0aGVuIiwic3VjY2VzcyIsInNjcm9sbFRvIiwiZG9jdW1lbnQiLCJib2R5IiwiZm9jdXMiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsIndhcm4iLCJwIiwiY2hpbGRFbG0iLCJzZXRDaGlsZEVsbSIsInBhdGhuYW1lIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFByb3BzIiwicmVmIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwibG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImRlZmluZVByb3BlcnR5IiwiUm91dGVyIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQXJyYXkiLCJpc0FycmF5Iiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsInB1c2giLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImNhbmNlbGxlZCIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwiYWRkTG9jYWxlIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJhZGRCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaXNMb2NhbFVSTCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJpbnRlcnBvbGF0ZUFzIiwicm91dGUiLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJqb2luIiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUhyZWYiLCJjdXJyZW50UGF0aCIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJzZWFyY2hQYXJhbXMiLCJoYXNoIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwibWFya0xvYWRpbmdFcnJvciIsInByZXBhcmVVcmxBcyIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJpbml0aWFsU3R5bGVTaGVldHMiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwibG9jYWxlcyIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJvblBvcFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJjaGFuZ2UiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJyZWxvYWQiLCJsb2NhdGlvbiIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhZ2VzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwicmV3cml0ZXMiLCJwcm9taXNlZEJ1aWxkTWFuaWZlc3QiLCJwYXJzZWQiLCJfcmVzb2x2ZUhyZWYiLCJ1cmxJc05ldyIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiZmlsdGVyIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiUHJvbWlzZSIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsInBhZ2UiLCJmZXRjaENvbXBvbmVudCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsInJlcXVpcmUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJzb21lIiwicmUiLCJ0ZXN0IiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImNhY2hlS2V5IiwiY3R4IiwiQXBwVHJlZSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsImZvcm1hdFVybCIsInVybE9iaiIsImF1dGgiLCJob3N0bmFtZSIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImlzRHluYW1pY1JvdXRlIiwiRFVNTVlfQkFTRSIsInBhcnNlUmVsYXRpdmVVcmwiLCJyZXNvbHZlZEJhc2UiLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJyZWdleHBUb0Z1bmN0aW9uIiwicHJlcGFyZURlc3RpbmF0aW9uIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsImNvbXBpbGUiLCJ2YWxpZGF0ZSIsIm5ld1VybCIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5Iiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJlc29sdmVSZXdyaXRlcyIsInJld3JpdGUiLCJzb3VyY2UiLCJkZXN0UmVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsImdldFJvdXRlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJ1c2VkIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJnZXRVUkwiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwicHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiU1AiLCJtZWFzdXJlIiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3QiLCJsb2FkUG9zdHNMb2FkaW5nIiwidXNlckluZm8iLCJvblNjcm9sbCIsInNjcmVlblkiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJzY3JvbGxZIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJsYXN0SWQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkhlYWQiLCJjIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwid3JhcHBlciIsImNvbnRleHQiLCJjb29raWUiLCJyZXEiLCJoZWFkZXJzIiwiYXhpb3MiLCJkZWZhdWx0cyIsIkNvb2tpZSIsInN0b3JlIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkVORCIsInNhZ2FUYXNrIiwidG9Qcm9taXNlIiwicm9vdFJlZHVjZXIiLCJhY3Rpb24iLCJIWURSQVRFIiwicGF5bG9hZCIsImNvbWJpbmVkUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluaXRpYWxTdGF0ZSIsImltYWdlUGF0aHMiLCJzaW5nbGVQb3N0IiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJyZXR3ZWV0TG9hZGluZyIsInJldHdlZXREb25lIiwicmV0d2VldEVycm9yIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJhZGRQb3N0IiwiQUREX1BPU1RfUkVRVUVTVCIsImFkZENvbW1lbnQiLCJwcm9kdWNlIiwiZHJhZnQiLCJSRU1PVkVfSU1BR0UiLCJBRERfUE9TVF9TVUNDRVNTIiwidW5zaGlmdCIsIkFERF9QT1NUX0ZBSUxVUkUiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIlBvc3RJZCIsIlVzZXJJZCIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiY29uY2F0IiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRkFJTFVSRSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNEb25lIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwibG9hZEZvbGxvd2luZ3NMb2FkaW5nIiwibG9hZEZvbGxvd2luZ3NEb25lIiwibG9hZEZvbGxvd2luZ3NFcnJvciIsImxvYWRVc2VyTG9hZGluZyIsImxvYWRVc2VyRG9uZSIsImxvYWRVc2VyRXJyb3IiLCJsb2dJbkRvbmUiLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJEb25lIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsInVuRm9sbG93RG9uZSIsInVuRm9sbG93RXJyb3IiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImFkZFBvc3RBUEkiLCJjYWxsIiwicHV0IiwicmVzcG9uc2UiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGF0ZXN0IiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwid2F0Y2h1cGxvYWRJbWFnZXMiLCJsb2FkUG9zdHNBUEkiLCJsb2FkUG9zdHMiLCJ3YXRjaExvYWRQb3N0cyIsImxvYWRQb3N0QVBJIiwibG9hZFBvc3QiLCJ3YXRjaExvYWRQb3N0IiwibG9hZFVzZXJQb3N0QVBJIiwibG9hZFVzZXJQb3N0Iiwid2F0Y2hMb2FkVXNlclBvc3QiLCJsb2FkSGFzaHRhZ1Bvc3RBUEkiLCJsb2FkSGFzaHRhZ1Bvc3QiLCJ3YXRjaExvYWRIYXNodGFnUG9zdCIsInJldHdlZXRBUEkiLCJyZXR3ZWV0Iiwid2F0Y2hSZXR3ZWV0IiwicmVtb3ZlUG9zdEFQSSIsInJlbW92ZVBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJhZGRDb21tZW50QVBJIiwid2F0Y2hBZGRDb21tZW50IiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsImxpa2VQb3N0Iiwid2F0Y2hMaWtlUG9zdCIsInVubGlrZVBvc3RBUEkiLCJ1bmxpa2VQb3N0Iiwid2F0Y2hVbmxpa2VQb3N0IiwibG9nSW5BUEkiLCJsb2dJbiIsIndhdGNoTG9naW4iLCJ0YWtlRXZlcnkiLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJ3YXRjaExvZ291dCIsInRha2VMZWFkaW5nIiwic2lnblVwQVBJIiwic2lnblVwIiwid2F0Y2hTaW5nVXAiLCJmb2xsb3dBUEkiLCJmb2xsb3ciLCJ3YXRjaEZvbGxvdyIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJ3YXRjaFVuZm9sbG93IiwibG9hZE15SW5mb0FQSSIsImxvYWRNeUluZm8iLCJ3YXRjaExvYWRNeUluZm8iLCJsb2FkVXNlckFQSSIsImxvYWRVc2VyIiwid2F0Y2hMb2FkVXNlciIsImxvYWRGb2xsb3dlcnNBUEkiLCJsb2FkRm9sbG93ZXJzIiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwibG9hZEZvbGxvd2luZ3NBUEkiLCJsb2FkRm9sbG93aW5ncyIsIndhdGNoTG9hZEZvbGxvd2lucyIsImNoYW5nZU5pY2tuYW1lQVBJIiwiY2hhbmdlTmlja25hbWUiLCJ3YXRjaENoYW5nZU5pY2tuYW1lIiwicmVtb3ZlRm9sbG93ZXJBUEkiLCJyZW1vdmVGb2xsb3dlciIsIndhdGNoUmVtb3ZlRm9sbG93ZXIiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMEI7QUFDUztBQUNOO0FBQ2dCO0FBQ0w7QUFDSjtBQUNNO0FBRTFDLE1BQU1BLFNBQVMsR0FBR0EsQ0FBQztFQUFFQztBQUFTLENBQUMsS0FBSztFQUNsQyxNQUFNO0lBQUVDO0VBQUcsQ0FBQyxHQUFHQywrREFBVyxDQUFFQyxLQUFLLElBQUtBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDO0VBRWpELE1BQU1DLFNBQVMsR0FB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LHlCQUF5QjtBQUV6RCxNQUFNckMsbUJBQW1CLEdBQUcscUJBQXFCO0FBQ2pELE1BQU1scEIsbUJBQW1CLEdBQUcscUJBQXFCO0FBQ2pELE1BQU1tcEIsbUJBQW1CLEdBQUcscUJBQXFCO0FBRWpELE1BQU1xRCx1QkFBdUIsR0FBRyx5QkFBeUI7QUFDekQsTUFBTUQsdUJBQXVCLEdBQUcseUJBQXlCO0FBQ3pELE1BQU1FLHVCQUF1QixHQUFHLHlCQUF5QjtBQUV6RCxNQUFNN0UsaUJBQWlCLEdBQUcsbUJBQW1CO0FBQzdDLE1BQU0xaUIsaUJBQWlCLEdBQUcsbUJBQW1CO0FBQzdDLE1BQU11aUIsaUJBQWlCLEdBQUcsbUJBQW1CO0FBRTdDLE1BQU1zQixtQkFBbUIsR0FBRyxxQkFBcUI7QUFDakQsTUFBTTNqQixtQkFBbUIsR0FBRyxxQkFBcUI7QUFDakQsTUFBTTBqQixtQkFBbUIsR0FBRyxxQkFBcUI7QUFFakQsTUFBTTRELGNBQWMsR0FBRyxnQkFBZ0I7QUFDdkMsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQW1CLEM7Ozs7Ozs7Ozs7O0FDM0ZwRCxtRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy91c2VyL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3VzZXIvW2lkXS5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgTWVudSwgSW5wdXQsIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tIFwiLi9Vc2VyUHJvZmlsZVwiO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi9Mb2dpbkZvcm1cIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcblxuICBjb25zdCBtZW51SXRlbXMgPSBbXG4gICAge1xuICAgICAgbGFiZWw6IDxMaW5rIGhyZWY9XCIvXCI+64W465Oc67KE65OcPC9MaW5rPixcbiAgICAgIGtleTogXCJub2RlYm9yZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPu2UhOuhnO2VhDwvTGluaz4sXG4gICAgICBrZXk6IFwicHJvZmlsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IChcbiAgICAgICAgPElucHV0LlNlYXJjaFxuICAgICAgICAgIGVudGVyQnV0dG9uPVwiU2VhcmNoXCJcbiAgICAgICAgICBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiIH19XG4gICAgICAgIC8+XG4gICAgICApLFxuICAgICAga2V5OiBcInNlYXJjaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+7ZqM7JuQ6rCA7J6FPC9MaW5rPixcbiAgICAgIGtleTogXCJzaWdudXBcIixcbiAgICB9LFxuICBdO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiIGl0ZW1zPXttZW51SXRlbXN9PjwvTWVudT5cbiAgICAgIDxSb3cgZ3V0dGVyPXs4fT5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cbiAgICAgICAgICB7bWUgPyA8VXNlclByb2ZpbGUgLz4gOiA8TG9naW5Gb3JtIC8+fVxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lm5hdmVyLmNvbVwiXG4gICAgICAgICAgICB0YXJnZXQ9e1wiX2JsYW5rXCJ9XG4gICAgICAgICAgICByZWw9XCJub3JlZmVycmVyIG5vb3BvZW5lclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAg64Sk7J2067KEIOqwgOq4sFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcbiIsImltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQUREX0NPTU1FTlRfUkVRVUVTVCB9IGZyb20gXCIuLi90eXBlXCI7XG5cbmNvbnN0IENvbW1lbnRGb3JtID0gKHsgcG9zdCB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcbiAgY29uc3QgeyBhZGRDb21tZW50RG9uZSwgYWRkQ29tbWVudExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKFxuICAgIChzdGF0ZSkgPT4gc3RhdGUucG9zdFxuICApO1xuICBjb25zdCBbY29tbWVudFRleHQsIG9uQ2hhbmdlQ29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZUlucHV0KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWRkQ29tbWVudERvbmUpIHtcbiAgICAgIHNldENvbW1lbnRUZXh0KFwiXCIpO1xuICAgIH1cbiAgfSwgW2FkZENvbW1lbnREb25lXSk7XG5cbiAgY29uc3Qgb25TdWJtaXRDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHBvc3QuaWQsIGNvbW1lbnRUZXh0KTtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxuICAgICAgZGF0YTogeyBjb250ZW50OiBjb21tZW50VGV4dCwgcG9zdElkOiBwb3N0LmlkLCB1c2VySWQ6IGlkIH0sXG4gICAgfSk7XG4gIH0sIFtjb21tZW50VGV4dCwgaWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdENvbW1lbnR9PlxuICAgICAgPEZvcm0uSXRlbT5cbiAgICAgICAgPElucHV0LlRleHRBcmVhXG4gICAgICAgICAgdmFsdWU9e2NvbW1lbnRUZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbW1lbnRUZXh0fVxuICAgICAgICAgIHJvd3M9ezR9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXthZGRDb21tZW50TG9hZGluZ30+XG4gICAgICAgICAg7IKQ7JW9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgPC9Gb3JtPlxuICApO1xufTtcblxuQ29tbWVudEZvcm0ucHJvcFR5cGVzID0ge1xuICBwb3N0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IEZPTExPV19SRVFVRVNULCBVTkZPTExPV19SRVFVRVNUIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmNvbnN0IEZvbGxvd0J1dHRvbiA9ICh7IHBvc3QgfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgbWUsIGZvbGxvd0xvYWRpbmcsIHVuRm9sbG93TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS51c2VyXG4gICk7XG4gIGNvbnN0IGlzRm9sbG93aW5nID0gbWU/LkZvbGxvd2luZ3MuZmluZCgodikgPT4gdi5pZCA9PT0gcG9zdC5Vc2VyLmlkKTtcbiAgY29uc3Qgb25DbGlja0J1dHRvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoaXNGb2xsb3dpbmcpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcbiAgICAgICAgZGF0YTogcG9zdC5Vc2VyLmlkLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogRk9MTE9XX1JFUVVFU1QsXG4gICAgICAgIGRhdGE6IHBvc3QuVXNlci5pZCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2lzRm9sbG93aW5nXSk7XG5cbiAgaWYgKHBvc3QuVXNlci5pZCA9PT0gbWUuaWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxCdXR0b24gbG9hZGluZz17Zm9sbG93TG9hZGluZyB8fCB1bkZvbGxvd0xvYWRpbmd9IG9uQ2xpY2s9e29uQ2xpY2tCdXR0b259PlxuICAgICAge2lzRm9sbG93aW5nID8gXCLslrjtjJTroZzsmrBcIiA6IFwiIO2MlOuhnOyasFwifVxuICAgIDwvQnV0dG9uPlxuICApO1xufTtcbkZvbGxvd0J1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5leHBvcnQgZGVmYXVsdCBGb2xsb3dCdXR0b247XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTbGljayBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgSW1hZ2VzWm9vbSA9ICh7IGltYWdlcywgb25DbG9zZSB9KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcbiAgcmV0dXJuIChcbiAgICA8T3ZlcmxheT5cbiAgICAgIDxHbG9iYWwgLz5cbiAgICAgIDxIZWFkZXI+XG4gICAgICAgIDxoMT7sg4HshLgg7J2066+47KeAPC9oMT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfT5YPC9idXR0b24+XG4gICAgICA8L0hlYWRlcj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTbGlja1dyYXBwZXI+XG4gICAgICAgICAgPFNsaWNrXG4gICAgICAgICAgICBpbml0aWFsU2xpZGU9ezB9XG4gICAgICAgICAgICBiZWZvcmVDaGFuZ2U9eyhzbGlkZSkgPT4gc2V0Q3VycmVudFNsaWRlKHNsaWRlKX1cbiAgICAgICAgICAgIGluZmluaXRlXG4gICAgICAgICAgICBhcnJvd3M9e3RydWV9XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c9ezF9XG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbD17MX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aW1hZ2VzLm1hcCgodikgPT4gKFxuICAgICAgICAgICAgICA8SW1nV3JhcHBlciBrZXk9e3Yuc3JjfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA3NS8ke3Yuc3JjfWB9IGFsdD17di5zcmN9IC8+XG4gICAgICAgICAgICAgIDwvSW1nV3JhcHBlcj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU2xpY2s+XG4gICAgICAgICAgPEluZGljYXRvcj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHtjdXJyZW50U2xpZGUgKyAxfVxuICAgICAgICAgICAgICB7XCJcIn0ve2ltYWdlcy5sZW5ndGh9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0luZGljYXRvcj5cbiAgICAgICAgPC9TbGlja1dyYXBwZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L092ZXJsYXk+XG4gICk7XG59O1xuXG5JbWFnZXNab29tLnByb3BUeXBlcyA9IHtcbiAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VzWm9vbTtcblxuY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogNTAwMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgaGVpZ2h0OiA0NHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgJiBoMSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgfVxuXG4gICYgYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5jb25zdCBTbGlja1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IGNhbGMoKSAoMTAwJS00NHB4KTtcbiAgYmFja2dyb3VuZDogIzA5MDkwOTtcbmA7XG5cbmNvbnN0IEltZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgJiBpbWcge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDc1MHB4O1xuICB9XG5gO1xuXG5jb25zdCBJbmRpY2F0b3IgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgJiA+IGRpdiB7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogIzMxMzEzMTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbmA7XG5cbmNvbnN0IEdsb2JhbCA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuLnNsaWNrLXNsaWRle1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrXG59YDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbG9naW5SZXF1ZXN0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KCk7XG4gIGNvbnN0IHsgbG9nSW5Mb2FkaW5nLCBsb2dJbkVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xuICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbih7IGVtYWlsLCBwYXNzd29yZCB9KSk7XG4gIH0sIFtlbWFpbCwgcGFzc3dvcmRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2dJbkVycm9yKSB7XG4gICAgICBhbGVydChsb2dJbkVycm9yKTtcbiAgICB9XG4gIH0sIFtsb2dJbkVycm9yXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1lbWFpbFwiPuydtOuplOydvDwvbGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgIG5hbWU9XCJ1c2VyLWVtYWlsXCJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+67mE67CA67KI7Zi4PC9sYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtsb2dJbkxvYWRpbmd9PlxuICAgICAgICAgIOuhnOq3uOyduFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cbiAgICAgICAgICA8QnV0dG9uPu2ajOybkOqwgOyehTwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XG4iLCJpbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgQ2FyZCwgTGlzdCwgUG9wb3ZlciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSBcIkBhbnQtZGVzaWduL2NvbXBhdGlibGVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEVsbGlwc2lzT3V0bGluZWQsXG4gIEhlYXJ0T3V0bGluZWQsXG4gIE1lc3NhZ2VPdXRsaW5lZCxcbiAgUmV0d2VldE91dGxpbmVkLFxuICBIZWFydEZpbGxlZCxcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuL1Bvc3RJbWFnZXNcIjtcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tIFwiLi9Db21tZW50Rm9ybVwiO1xuaW1wb3J0IFBvc3RDYXJkQ29udGVudCBmcm9tIFwiLi9Qb3N0Q2FyZENvbnRlbnRcIjtcbmltcG9ydCB7XG4gIExJS0VfUE9TVF9SRVFVRVNULFxuICBSRU1PVkVfUE9TVF9SRVFVRVNULFxuICBSRVRXRUVUX1JFUVVFU1QsXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXG59IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgRm9sbG93QnV0dG9uIGZyb20gXCIuL0ZvbGxvd0J1dHRvblwiO1xuXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XG4gIGNvbnN0IGxpa2VkID0gcG9zdC5MaWtlcnMuZmluZCgodikgPT4gdi5pZCA9PT0gaWQpO1xuXG4gIGNvbnN0IHsgcmVtb3ZlclBvc3RMb2FkaW5nIH0gPSB1c2VTZWxlY3RvcihcbiAgICAoc3RhdGUpID0+IHN0YXRlLnBvc3RcbiAgKTtcbiAgY29uc3QgW2NvbW1lbnRGb3JtT3BlbmVkLCBzZXRDb21tZW50Rm9ybU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIWlkKSB7XG4gICAgICByZXR1cm4gYWxlcnQoXCLroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukXCIpO1xuICAgIH1cbiAgICByZXR1cm4gc2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW2lkXSk7XG5cbiAgY29uc3Qgb25MaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghaWQpIHtcbiAgICAgIHJldHVybiBhbGVydChcIuuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6RcIik7XG4gICAgfVxuICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcbiAgICAgIGRhdGE6IHBvc3QuaWQsXG4gICAgfSk7XG4gIH0sIFtpZF0pO1xuXG4gIGNvbnN0IG9uVW5MaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghaWQpIHtcbiAgICAgIHJldHVybiBhbGVydChcIuuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6RcIik7XG4gICAgfVxuICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9SRVFVRVNULFxuICAgICAgZGF0YTogcG9zdC5pZCxcbiAgICB9KTtcbiAgfSwgW2lkXSk7XG5cbiAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghaWQpIHtcbiAgICAgIHJldHVybiBhbGVydChcIuuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6RcIik7XG4gICAgfVxuICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxuICAgICAgZGF0YTogcG9zdC5pZCxcbiAgICB9KTtcbiAgfSwgW2lkXSk7XG5cbiAgY29uc3Qgb25SZXR3ZWV0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghaWQpIHtcbiAgICAgIHJldHVybiBhbGVydChcIuuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6RcIik7XG4gICAgfVxuICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBSRVRXRUVUX1JFUVVFU1QsXG4gICAgICBkYXRhOiBwb3N0LmlkLFxuICAgIH0pO1xuICB9LCBbaWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q2FyZFxuICAgICAgICBjb3Zlcj17cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30gLz59XG4gICAgICAgIGFjdGlvbnM9e1tcbiAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIiBvbkNsaWNrPXtvblJldHdlZXR9IC8+LFxuICAgICAgICAgIGxpa2VkID8gKFxuICAgICAgICAgICAgPEhlYXJ0RmlsbGVkIGtleT1cImhlYXJ0ZmlsbGVkXCIgb25DbGljaz17b25Vbkxpa2V9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25MaWtlfSAvPlxuICAgICAgICAgICksXG4gICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fSAvPixcbiAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAga2V5PVwibW9yZVwiXG4gICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cbiAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/IChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7IiY7KCVPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlbW92ZVBvc3R9XG4gICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17cmVtb3ZlclBvc3RMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAg7IKt7KCcXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24+7Iug6rOgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cbiAgICAgICAgICA8L1BvcG92ZXI+LFxuICAgICAgICBdfVxuICAgICAgICB0aXRsZT17XG4gICAgICAgICAgcG9zdC5SZXR3ZWV0SWQgPyBgJHtwb3N0LlVzZXIubmlja25hbWV964uY7J20IOumrO2KuOycl+2VmOyFqOyKteuLiOuLpGAgOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgZXh0cmE9e2lkICYmIDxGb2xsb3dCdXR0b24gcG9zdD17cG9zdH0gLz59XG4gICAgICA+XG4gICAgICAgIHtwb3N0LlJldHdlZXRJZCAmJiBwb3N0LlJldHdlZXQgPyAoXG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIGNvdmVyPXtcbiAgICAgICAgICAgICAgcG9zdC5SZXR3ZWV0LkltYWdlc1swXSAmJiAoXG4gICAgICAgICAgICAgICAgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LlJldHdlZXQuSW1hZ2VzfSAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhcmQuTWV0YVxuICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e3Bvc3QuUmV0d2VldC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cbiAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuUmV0d2VldC5Vc2VyLm5pY2tuYW1lfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5SZXR3ZWV0LmNvbnRlbnR9IC8+fVxuICAgICAgICAgICAgPjwvQ2FyZC5NZXRhPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Q2FyZC5NZXRhXG4gICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e3Bvc3QuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XG4gICAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuY29udGVudH0gLz59XG4gICAgICAgICAgPjwvQ2FyZC5NZXRhPlxuICAgICAgICApfVxuICAgICAgPC9DYXJkPlxuICAgICAge2NvbW1lbnRGb3JtT3BlbmVkICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q29tbWVudEZvcm0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICA8TGlzdFxuICAgICAgICAgICAgaGVhZGVyPXtgJHtwb3N0LkNvbW1lbnRzLmxlbmd0aH3qsJzsnZgg64yT6riAYH1cbiAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Bvc3QuQ29tbWVudHN9XG4gICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPENvbW1lbnRcbiAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5Vc2VyLm5pY2tuYW1lfVxuICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntpdGVtLlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxuICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHsvKjxDb21tZW50Rm9ybSAvPn1cbiAgICAgIHs8Q29tbWVudHMgLz4qL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcbiAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgIFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgQ29tbWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgIExpa2VyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gICAgUmV0d2VldElkOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFJldHdlZXQ6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuYW55KSxcbiAgfSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5jb25zdCBQb3N0Q2FyZENvbnRlbnQgPSAoeyBwb3N0RGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtwb3N0RGF0YS5zcGxpdCgvKCNbXlxccyNdKykvZykubWFwKCh2LCBpKSA9PiB7Ly/tlbTsi5ztg5zqt7gg7LaU7LacXG4gICAgICAgIGlmICh2Lm1hdGNoKC8oI1teXFxzI10rKS8pKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvaGFzaHRhZy8ke3Yuc2xpY2UoMSl9YH0ga2V5PXtpfT5cbiAgICAgICAgICAgICAge3Z9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdjtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUG9zdENhcmRDb250ZW50LnByb3BUeXBlcyA9IHtcbiAgcG9zdERhdGE6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkQ29udGVudDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IEltYWdlc1pvb20gZnJvbSBcIi4vSW1hZ2VzWm9vbVwiO1xuY29uc3QgUG9zdEltYWdlcyA9ICh7IGltYWdlcyB9KSA9PiB7XG4gIGNvbnN0IFtzaG93SW1hZ2VzWm9vbSwgc2V0U0hvd0ltYWdlc1pvb21dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uWm9vbSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTSG93SW1hZ2VzWm9vbSh0cnVlKTtcbiAgfSwgW10pO1xuICBjb25zdCBvbkNsb3NlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNIb3dJbWFnZXNab29tKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIGlmIChpbWFnZXMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNzUvJHtpbWFnZXNbMF0uc3JjfWB9XG4gICAgICAgICAgYWx0PXtpbWFnZXNbMF0uc3JjfVxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cbiAgICAgICAgLz5cbiAgICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbiAgaWYgKGltYWdlcy5sZW5ndGggPT09IDIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA3NS8ke2ltYWdlc1swXS5zcmN9YH1cbiAgICAgICAgICBhbHQ9e2ltYWdlc1swXS5zcmN9XG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxuICAgICAgICAvPlxuICAgICAgICB7c2hvd0ltYWdlc1pvb20gJiYgPEltYWdlc1pvb20gaW1hZ2VzPXtpbWFnZXN9IG9uQ2xvc2U9e29uQ2xvc2V9IC8+fVxuICAgICAgICA8aW1nXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDc1LyR7aW1hZ2VzWzFdLnNyY31gfVxuICAgICAgICAgIGFsdD17aW1hZ2VzWzFdLnNyY31cbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XG4gICAgICAgIC8+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAge2ltYWdlc1swXSAmJiBpbWFnZXNbMF0uc3JjICYmIChcbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA3NS8ke2ltYWdlc1swXS5zcmN9YH1cbiAgICAgICAgICAgIGFsdD17aW1hZ2VzWzBdLnNyY31cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7c2hvd0ltYWdlc1pvb20gJiYgPEltYWdlc1pvb20gaW1hZ2VzPXtpbWFnZXN9IG9uQ2xvc2U9e29uQ2xvc2V9IC8+fVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICB3aWR0aDogXCI1MCVcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxQbHVzT3V0bGluZWQgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCAtIDF9XG4gICAgICAgICAg6rCc7J2YIOyCrOynhCDrjZQg67O06riwXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5Qb3N0SW1hZ2VzLnByb3BUeXBlcyA9IHtcbiAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RJbWFnZXM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEF2YXRhciwgQnV0dG9uLCBDYXJkIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbG9nb3V0UmVxdWVzdEFjdGlvbiB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XG5cbmNvbnN0IFVzZXJQcm9maWxlID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgbWUsIGxvZ091dExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKGxvZ291dFJlcXVlc3RBY3Rpb24oKSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgYWN0aW9ucz17W1xuICAgICAgICA8ZGl2IGtleT1cInR3aXRcIj5cbiAgICAgICAgICDsp7nsqLFcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICB7bWUuUG9zdHMubGVuZ3RofVxuICAgICAgICA8L2Rpdj4sXG4gICAgICAgIDxkaXYga2V5PVwiZm9sbG93aW5nc1wiPlxuICAgICAgICAgIO2MlOuhnOyeiVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIHttZS5Gb2xsb3dpbmdzLmxlbmd0aH1cbiAgICAgICAgPC9kaXY+LFxuICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2Vyc1wiPlxuICAgICAgICAgIO2MlOuhnOybjFxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIHttZS5Gb2xsb3dlcnMubGVuZ3RofVxuICAgICAgICA8L2Rpdj4sXG4gICAgICBdfVxuICAgID5cbiAgICAgIDxDYXJkLk1ldGFcbiAgICAgICAgYXZhdGFyPXs8QXZhdGFyPnttZS5uaWNrbmFtZVswXX08L0F2YXRhcj59XG4gICAgICAgIHRpdGxlPXttZS5uaWNrbmFtZX1cbiAgICAgIC8+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uTG9nT3V0fSBsb2FkaW5nPXtsb2dPdXRMb2FkaW5nfT5cbiAgICAgICAg66Gc6re47JWE7JuDXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgdXNlSW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0dmFsdWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgaGFuZGxlciA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgc2V0dmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlciwgc2V0dmFsdWVdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlSW5wdXQ7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RDYXJkXCI7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSBcIi4uLy4uL3R5cGVcIjtcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uLy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsIExPQURfVVNFUl9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uL3R5cGVcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBBdmF0YXIsIENhcmQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuXHJcbmNvbnN0IFVzZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3QsIGxvYWRQb3N0c0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5wb3N0XHJcbiAgKTtcclxuICBjb25zdCB7IHVzZXJJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIHdpbmRvdy5zY3JlZW5ZLFxyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgd2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID5cclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwXHJcbiAgICAgIClcclxuICAgICAgICBpZiAoaGFzTW9yZVBvc3QgJiYgIWxvYWRQb3N0c0xvYWRpbmcpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGxhc3RJZDpcclxuICAgICAgICAgICAgICBtYWluUG9zdHNbbWFpblBvc3RzLmxlbmd0aCAtIDFdICYmXHJcbiAgICAgICAgICAgICAgbWFpblBvc3RzW21haW5Qb3N0cy5sZW5ndGggLSAxXS5pZCxcclxuICAgICAgICAgICAgZGF0YTogaWQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFttYWluUG9zdHMubGVuZ3RoLCBoYXNNb3JlUG9zdCwgaWRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57dXNlckluZm8ubmlja25hbWV964uY7J2YIOq4gDwvdGl0bGU+XHJcblxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Ake3VzZXJJbmZvLm5pY2tuYW1lfeuLmOydmCDqsozsi5zquIBgfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgJHt1c2VySW5mby5uaWNrbmFtZX3ri5jsnZgg6rKM7Iuc6riIYH0gLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PXtgJHt1c2VySW5mby5uaWNrbmFtZX3ri5jsnZgg6rKM7Iuc6riAYH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcclxuICAgICAgICAgIGNvbnRlbnQ9e1wiaHR0cHM6Ly9ub2RlYmlyZC5jb20vZmF2aWNvbi5wbmdcIn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17YGh0dHBzOi8vbm9kZWJpcmQuY29tL3Bvc3QvJHtpZH1gfSAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHt1c2VySW5mbyA/IChcclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICA8ZGl2IGtleT1cInR3aXRcIj5cclxuICAgICAgICAgICAgICDsp7nsqLFcclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICB7dXNlckluZm8uUG9zdHN9XHJcbiAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgPGRpdiBrZXk9XCJmb2xsb3dpbmdzXCI+XHJcbiAgICAgICAgICAgICAg7YyU66Gc7J6JXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAge3VzZXJJbmZvLkZvbGxvd2luZ3N9XHJcbiAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgPGRpdiBrZXk9XCJmb2xsb3dlcnNcIj5cclxuICAgICAgICAgICAgICDtjJTroZzsm4xcclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICB7dXNlckluZm8uRm9sbG93ZXJzfVxyXG4gICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPnt1c2VySW5mby5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgIHRpdGxlPXt1c2VySW5mby5uaWNrbmFtZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCLsmrDsnpBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICB7bWFpblBvc3RzLm1hcCgoYykgPT4gKFxyXG4gICAgICAgIDxQb3N0Q2FyZCBrZXk9e2MuaWR9IHBvc3Q9e2N9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9BcHBMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhcclxuICBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6IFwiXCI7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IFwiXCI7XHJcbiAgICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gICAgfSAvL0Nvb2tpZSDrhKPslrTspJjslbwg66Gc6re47J24IOyDiOuhnOqzoOy5qCDqsIDriqVcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgZGF0YTogY29udGV4dC5wYXJhbXMuaWQsXHJcbiAgICB9KTtcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAgICAgZGF0YTogY29udGV4dC5wYXJhbXMuaWQsXHJcbiAgICB9KTtcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gICAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xuaW1wb3J0IHBvc3QgZnJvbSBcIi4vcG9zdFwiO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSFlEUkFURTpcbiAgICAgIC8vY29uc29sZS5sb2coXCJIWURSQVRFXCIsIGFjdGlvbik7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgZGVmYXVsdDoge1xuICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICAgICAgdXNlcixcbiAgICAgICAgcG9zdCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XG5pbXBvcnQge1xuICBBRERfUE9TVF9GQUlMVVJFLFxuICBBRERfUE9TVF9SRVFVRVNULFxuICBBRERfUE9TVF9TVUNDRVNTLFxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxuICBBRERfQ09NTUVOVF9SRVFVRVNULFxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxuICBSRU1PVkVfUE9TVF9GQUlMVVJFLFxuICBSRU1PVkVfUE9TVF9SRVFVRVNULFxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxuICBMT0FEX1BPU1RTX0ZBSUxVUkUsXG4gIExPQURfUE9TVFNfUkVRVUVTVCxcbiAgTE9BRF9QT1NUU19TVUNDRVNTLFxuICBMSUtFX1BPU1RfUkVRVUVTVCxcbiAgTElLRV9QT1NUX1NVQ0NFU1MsXG4gIExJS0VfUE9TVF9GQUlMVVJFLFxuICBVTkxJS0VfUE9TVF9SRVFVRVNULFxuICBVTkxJS0VfUE9TVF9TVUNDRVNTLFxuICBVTkxJS0VfUE9TVF9GQUlMVVJFLFxuICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXG4gIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcbiAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxuICBSRU1PVkVfSU1BR0UsXG4gIFJFVFdFRVRfRkFJTFVSRSxcbiAgUkVUV0VFVF9TVUNDRVNTLFxuICBSRVRXRUVUX1JFUVVFU1QsXG4gIExPQURfUE9TVF9SRVFVRVNULFxuICBMT0FEX1BPU1RfU1VDQ0VTUyxcbiAgTE9BRF9QT1NUX0ZBSUxVUkUsXG4gIExPQURfVVNFUl9QT1NUU19SRVFVRVNULFxuICBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCxcbiAgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXG4gIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxuICBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXG59IGZyb20gXCIuLi90eXBlXCI7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG1haW5Qb3N0czogW10sXG4gIGltYWdlUGF0aHM6IFtdLFxuICBoYXNNb3JlUG9zdDogdHJ1ZSxcbiAgc2luZ2xlUG9zdDogbnVsbCxcblxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxuXG4gIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXG4gIGxpa2VQb3N0RG9uZTogZmFsc2UsXG4gIGxpa2VQb3N0RXJyb3I6IG51bGwsXG5cbiAgdXBsb2FkSW1hZ2VzTG9hZGluZzogZmFsc2UsXG4gIHVwbG9hZEltYWdlc0RvbmU6IGZhbHNlLFxuICB1cGxvYWRJbWFnZXNFcnJvcjogbnVsbCxcblxuICB1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsXG4gIHVubGlrZVBvc3REb25lOiBmYWxzZSxcbiAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxuXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXG5cbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcblxuICByZXR3ZWV0TG9hZGluZzogZmFsc2UsXG4gIHJldHdlZXREb25lOiBmYWxzZSxcbiAgcmV0d2VldEVycm9yOiBudWxsLFxuXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxuICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcbiAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXG5cbiAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgbG9hZFBvc3REb25lOiBmYWxzZSxcbiAgbG9hZFBvc3RFcnJvcjogbnVsbCxcblxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxuICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcbiAgZGF0YSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxuICBkYXRhLFxufSk7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgUkVNT1ZFX0lNQUdFOlxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XG4gICAgICAgIHBvc3QuTGlrZXJzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XG4gICAgICBjYXNlIExPQURfVVNFUl9QT1NUU19SRVFVRVNUOlxuICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1M6XG4gICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTOlxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpOyAvLyBhY3Rpb24uZGF0YeulvCBjb25jYXTtlbTshJwg6riw7KG0IOuNsOydtO2EsOyXkCDstpTqsIBcbiAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3QgPSBhY3Rpb24uZGF0YS5sZW5ndGggPT09IDEwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxuICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRTpcbiAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5zaW5nbGVQb3N0ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGNhc2UgUkVUV0VFVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRVRXRUVUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVUV0VFVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XG4gICAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkXG4gICAgICAgICk7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxuICAgICAgICAvL2NvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoXG4gICAgICAgIC8vICAgKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZFxuICAgICAgICAvLyApO1xuICAgICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xuICAgICAgICAvL3Bvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcbiAgICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XG4gICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcblxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XG4gICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufTtcbi8vaW1tZXIg7JOw66m0IC4uLnN0YXRlIOyViCDsjajrj4Qg65CoIHN0YXRlIOuMgOyLoCBkcmFmdFxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xuaW1wb3J0IHtcbiAgTE9HX0lOX0ZBSUxVUkUsXG4gIExPR19JTl9TVUNDRVNTLFxuICBMT0dfT1VUX1JFUVVFU1QsXG4gIExPR19JTl9SRVFVRVNULFxuICBMT0dfT1VUX0ZBSUxVUkUsXG4gIExPR19PVVRfU1VDQ0VTUyxcbiAgU0lHTl9VUF9GQUlMVVJFLFxuICBTSUdOX1VQX1JFUVVFU1QsXG4gIFNJR05fVVBfU1VDQ0VTUyxcbiAgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXG4gIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxuICBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcbiAgQUREX1BPU1RfVE9fTUUsXG4gIFJFTU9WRV9QT1NUX09GX01FLFxuICBGT0xMT1dfUkVRVUVTVCxcbiAgRk9MTE9XX1NVQ0NFU1MsXG4gIEZPTExPV19GQUlMVVJFLFxuICBVTkZPTExPV19SRVFVRVNULFxuICBVTkZPTExPV19TVUNDRVNTLFxuICBVTkZPTExPV19GQUlMVVJFLFxuICBMT0FEX01ZX0lORk9fRkFJTFVSRSxcbiAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsXG4gIExPQURfTVlfSU5GT19TVUNDRVNTLFxuICBMT0FEX0ZPTExPV0VSU19SRVFVRVNULFxuICBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxuICBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxuICBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCxcbiAgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXG4gIExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxuICBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCxcbiAgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXG4gIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxuICBMT0FEX1VTRVJfUkVRVUVTVCxcbiAgTE9BRF9VU0VSX1NVQ0NFU1MsXG4gIExPQURfVVNFUl9GQUlMVVJFLFxufSBmcm9tIFwiLi4vdHlwZVwiO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsXG4gIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcbiAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxuXG4gIGxvYWRGb2xsb3dlcnNMb2FkaW5nOiBmYWxzZSxcbiAgbG9hZEZvbGxvd2Vyc0RvbmU6IGZhbHNlLFxuICBsb2FkRm9sbG93ZXJzRXJyb3I6IG51bGwsXG5cbiAgbG9hZEZvbGxvd2luZ3NMb2FkaW5nOiBmYWxzZSxcbiAgbG9hZEZvbGxvd2luZ3NEb25lOiBmYWxzZSxcbiAgbG9hZEZvbGxvd2luZ3NFcnJvcjogbnVsbCxcblxuICBsb2FkVXNlckxvYWRpbmc6IGZhbHNlLFxuICBsb2FkVXNlckRvbmU6IGZhbHNlLFxuICBsb2FkVXNlckVycm9yOiBudWxsLFxuXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsXG4gIGxvZ0luRG9uZTogZmFsc2UsXG4gIGxvZ0luRXJyb3I6IG51bGwsXG5cbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsXG4gIGxvZ091dERvbmU6IGZhbHNlLFxuICBsb2dPdXRFcnJvcjogbnVsbCxcblxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSxcbiAgc2lnblVwRG9uZTogZmFsc2UsXG4gIHNpZ25VcEVycm9yOiBudWxsLFxuXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXG4gIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXG5cbiAgZm9sbG93TG9hZGluZzogZmFsc2UsXG4gIGZvbGxvd0RvbmU6IGZhbHNlLFxuICBmb2xsb3dFcnJvcjogbnVsbCxcblxuICByZW1vdmVGb2xsb3dlckxvYWRpbmc6IGZhbHNlLFxuICByZW1vdmVGb2xsb3dlckRvbmU6IGZhbHNlLFxuICByZW1vdmVGb2xsb3dlckVycm9yOiBudWxsLFxuXG4gIHVuRm9sbG93TG9hZGluZzogZmFsc2UsXG4gIHVuRm9sbG93RG9uZTogZmFsc2UsXG4gIHVuRm9sbG93RXJyb3I6IG51bGwsXG5cbiAgdXNlckluZm86IG51bGwsXG4gIG1lOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XG4gIHJldHVybiB7IHR5cGU6IExPR19JTl9SRVFVRVNULCBkYXRhIH07XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdHlwZTogTE9HX09VVF9SRVFVRVNUIH07XG59O1xuXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVzZXJJbmZvID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gZHJhZnQubWUuRm9sbG93ZXJzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkXG4gICAgICAgICk7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxuICAgICAgICBkcmFmdC51bkZvbGxvd0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxuICAgICAgICBkcmFmdC51bkZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dEb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKFxuICAgICAgICAgICh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnVuRm9sbG93TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51bkZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcbiAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBwb3N0U2FnYSBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgdXNlclNhZ2EgZnJvbSBcIi4vdXNlclwiO1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjMwNzVcIjtcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7IC8v7L+g7YKkIOyghOuLrFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbZm9yayhwb3N0U2FnYSksIGZvcmsodXNlclNhZ2EpXSk7XG59XG4iLCJpbXBvcnQgeyBmb3JrLCBhbGwsIHRha2VMYXRlc3QsIHB1dCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IHtcbiAgQUREX0NPTU1FTlRfRkFJTFVSRSxcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcbiAgQUREX1BPU1RfRkFJTFVSRSxcbiAgQUREX1BPU1RfUkVRVUVTVCxcbiAgQUREX1BPU1RfU1VDQ0VTUyxcbiAgQUREX1BPU1RfVE9fTUUsXG4gIExJS0VfUE9TVF9GQUlMVVJFLFxuICBMSUtFX1BPU1RfUkVRVUVTVCxcbiAgTElLRV9QT1NUX1NVQ0NFU1MsXG4gIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxuICBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCxcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXG4gIExPQURfUE9TVFNfRkFJTFVSRSxcbiAgTE9BRF9QT1NUU19SRVFVRVNULFxuICBMT0FEX1BPU1RTX1NVQ0NFU1MsXG4gIExPQURfUE9TVF9GQUlMVVJFLFxuICBMT0FEX1BPU1RfUkVRVUVTVCxcbiAgTE9BRF9QT1NUX1NVQ0NFU1MsXG4gIExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxuICBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCxcbiAgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXG4gIFJFTU9WRV9QT1NUX09GX01FLFxuICBSRU1PVkVfUE9TVF9SRVFVRVNULFxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxuICBSRVRXRUVUX0ZBSUxVUkUsXG4gIFJFVFdFRVRfUkVRVUVTVCxcbiAgUkVUV0VFVF9TVUNDRVNTLFxuICBVTkxJS0VfUE9TVF9GQUlMVVJFLFxuICBVTkxJS0VfUE9TVF9SRVFVRVNULFxuICBVTkxJS0VfUE9TVF9TVUNDRVNTLFxuICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcbiAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxufSBmcm9tIFwiLi4vdHlwZVwiO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9wb3N0XCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpOyAvL+uniOyngOuniSDqsoPrp4xcbiAgLy90aHJvdHRsZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwyMDAwKSAy7LSIIOuPmeyViCAx67KIIOyLpO2WiVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9wb3N0L2ltYWdlc1wiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2h1cGxvYWRJbWFnZXMoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpOyAvL+uniOyngOuniSDqsoPrp4xcbiAgLy90aHJvdHRsZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwyMDAwKSAy7LSIIOuPmeyViCAx67KIIOyLpO2WiVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShsYXN0SWQpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApOyAvL2dldOyXkOyEnCDrjbDsnbTthLAg64Sj6riwID8gYT1iIOydtOufsCDsi53snLzroZxcbn1cblxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmxhc3RJZCk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7IC8v66eI7KeA66eJIOqyg+unjFxuICAvL3Rocm90dGxlKFwiQUREX1BPU1RfUkVRVUVTVFwiLCBhZGRQb3N0LDIwMDApIDLstIgg64+Z7JWIIDHrsogg7Iuk7ZaJIFJFUVVTRVTripQg67O064K07KeQXG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gbG9hZFBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdC8ke2RhdGF9YCk7IC8vZ2V07JeQ7IScIOuNsOydtO2EsCDrhKPquLAgPyBhPWIg7J2065+wIOyLneycvOuhnFxufVxuXG5mdW5jdGlvbiogbG9hZFBvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUX1JFUVVFU1QsIGxvYWRQb3N0KTsgLy/rp4jsp4Drp4kg6rKD66eMXG4gIC8vdGhyb3R0bGUoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGFkZFBvc3QsMjAwMCkgMuy0iCDrj5nslYggMeuyiCDsi6TtlokgUkVRVVNFVOuKlCDrs7TrgrTsp5Bcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGxvYWRVc2VyUG9zdEFQSShkYXRhLCBsYXN0SWQpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfS9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTsgLy9nZXTsl5DshJwg642w7J207YSwIOuEo+q4sCA/IGE9YiDsnbTrn7Ag7Iud7Jy866GcXG59XG5cbmZ1bmN0aW9uKiBsb2FkVXNlclBvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlclBvc3RBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCwgbG9hZFVzZXJQb3N0KTsgLy/rp4jsp4Drp4kg6rKD66eMXG4gIC8vdGhyb3R0bGUoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGFkZFBvc3QsMjAwMCkgMuy0iCDrj5nslYggMeuyiCDsi6TtlokgUkVRVVNFVOuKlCDrs7TrgrTsp5Bcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBsb2FkSGFzaHRhZ1Bvc3RBUEkoZGF0YSwgbGFzdElkKSB7XG4gIHJldHVybiBheGlvcy5nZXQoXG4gICAgYC9oYXNodGFnLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpfT9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gXG4gICk7IC8vZ2V07JeQ7IScIOuNsOydtO2EsCDrhKPquLAgPyBhPWIg7J2065+wIOyLneycvOuhnFxuLy9lbmNvZGVVUklDb21wb25lbnQgIO2VnOq4gOydhCDsmIHrrLjsnpDroZwg67CU6r+IXG4gIH1cbmZ1bmN0aW9uKiBsb2FkSGFzaHRhZ1Bvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkSGFzaHRhZ1Bvc3RBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvYWRIYXNodGFnUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgbG9hZEhhc2h0YWdQb3N0KTsgLy/rp4jsp4Drp4kg6rKD66eMXG4gIC8vdGhyb3R0bGUoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGFkZFBvc3QsMjAwMCkgMuy0iCDrj5nslYggMeuyiCDsi6TtlokgUkVRVVNFVOuKlCDrs7TrgrTsp5Bcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiByZXR3ZWV0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YX0vcmV0d2VldGApO1xufVxuXG5mdW5jdGlvbiogcmV0d2VldChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJldHdlZXRBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogUkVUV0VFVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogUkVUV0VFVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoUkVUV0VFVF9SRVFVRVNULCByZXR3ZWV0KTsgLy/rp4jsp4Drp4kg6rKD66eMXG4gIC8vdGhyb3R0bGUoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGFkZFBvc3QsMjAwMCkgMuy0iCDrj5nslYggMeuyiCDsi6Ttlolcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApO1xufVxuXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuXG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7IC8v66eI7KeA66eJIOqyg+unjFxuICAvL3Rocm90dGxlKFwiQUREX1BPU1RfUkVRVUVTVFwiLCBhZGRQb3N0LDIwMDApIDLstIgg64+Z7JWIIDHrsogg7Iuk7ZaJXG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpOyAvL+uniOyngOuniSDqsoPrp4xcbiAgLy90aHJvdHRsZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwyMDAwKSAy7LSIIOuPmeyViCAx67KIIOyLpO2WiVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTsgLy9wYXRjaCDsnbzrtoDrtoQg7IiY7KCVXG59XG5cbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTsgLy/rp4jsp4Drp4kg6rKD66eMXG4gIC8vdGhyb3R0bGUoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGFkZFBvc3QsMjAwMCkgMuy0iCDrj5nslYggMeuyiCDsi6Ttlolcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XG59XG5cbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hVbmxpa2VQb3N0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpOyAvL+uniOyngOuniSDqsoPrp4xcbiAgLy90aHJvdHRsZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwyMDAwKSAy7LSIIOuPmeyViCAx67KIIOyLpO2WiVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcbiAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXG4gICAgZm9yayh3YXRjaExvYWRQb3N0cyksXG4gICAgZm9yayh3YXRjaExpa2VQb3N0KSxcbiAgICBmb3JrKHdhdGNoVW5saWtlUG9zdCksXG4gICAgZm9yayh3YXRjaHVwbG9hZEltYWdlcyksXG4gICAgZm9yayh3YXRjaFJldHdlZXQpLFxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdCksXG4gICAgZm9yayh3YXRjaExvYWRVc2VyUG9zdCksXG4gICAgZm9yayh3YXRjaExvYWRIYXNodGFnUG9zdCksXG4gIF0pO1xufVxuIiwiaW1wb3J0IHtcbiAgTE9HX0lOX0ZBSUxVUkUsXG4gIExPR19JTl9TVUNDRVNTLFxuICBMT0dfT1VUX1JFUVVFU1QsXG4gIExPR19JTl9SRVFVRVNULFxuICBMT0dfT1VUX0ZBSUxVUkUsXG4gIExPR19PVVRfU1VDQ0VTUyxcbiAgU0lHTl9VUF9GQUlMVVJFLFxuICBTSUdOX1VQX1JFUVVFU1QsXG4gIFNJR05fVVBfU1VDQ0VTUyxcbiAgRk9MTE9XX1JFUVVFU1QsXG4gIFVORk9MTE9XX1JFUVVFU1QsXG4gIEZPTExPV19TVUNDRVNTLFxuICBGT0xMT1dfRkFJTFVSRSxcbiAgVU5GT0xMT1dfU1VDQ0VTUyxcbiAgVU5GT0xMT1dfRkFJTFVSRSxcbiAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsXG4gIExPQURfTVlfSU5GT19TVUNDRVNTLFxuICBMT0FEX01ZX0lORk9fRkFJTFVSRSxcbiAgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXG4gIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxuICBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcbiAgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCxcbiAgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcbiAgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcbiAgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXG4gIExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxuICBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCxcbiAgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsXG4gIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxuICBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcbiAgTE9BRF9VU0VSX1JFUVVFU1QsXG4gIExPQURfVVNFUl9TVUNDRVNTLFxuICBMT0FEX1VTRVJfRkFJTFVSRSxcbn0gZnJvbSBcIi4uL3R5cGVcIjtcblxuaW1wb3J0IHtcbiAgYWxsLFxuICBmb3JrLFxuICBwdXQsXG4gIHRha2VFdmVyeSxcbiAgdGFrZUxlYWRpbmcsXG4gIHRha2VMYXRlc3QsXG4gIGNhbGwsXG59IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi91c2VyL2xvZ2luXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xuXG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcblxuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCkge1xuICB5aWVsZCB0YWtlRXZlcnkoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTsgLy/rsJjrs7Vcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3VzZXIvbG9nb3V0XCIpO1xufVxuXG5mdW5jdGlvbiogbG9nT3V0KCkge1xuICB0cnkge1xuICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hMb2dvdXQoKSB7XG4gIHlpZWxkIHRha2VMZWFkaW5nKExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTsgLy/ssqsg67KI7Ke4IOqyg+unjFxufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvdXNlclwiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoU2luZ1VwKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTsgLy/ssqsg67KI7Ke4IOqyg+unjFxufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xufVxuXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XG5cbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuXG4gICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KEZPTExPV19SRVFVRVNULCBmb2xsb3cpOyAvL+uwmOuztVxufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyLyR7ZGF0YX0vZm9sbG93YCk7XG59XG5cbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XG5cbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuXG4gICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTsgLy/rsJjrs7Vcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBsb2FkTXlJbmZvQVBJKCkge1xuICByZXR1cm4gYXhpb3MuZ2V0KFwiL3VzZXJcIik7XG59XG5cbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG5cbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTsgLy/rsJjrs7Vcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBsb2FkVXNlckFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5nZXQoYHVzZXIvJHtkYXRhfWApO1xufVxuXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG5cbiAgICAgIHR5cGU6IExPQURfVVNFUl9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKSB7XG4gIHlpZWxkIHRha2VFdmVyeShMT0FEX1VTRVJfUkVRVUVTVCwgbG9hZFVzZXIpOyAvL+uwmOuztVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBsb2FkRm9sbG93ZXJzQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChcIi91c2VyL2ZvbGxvd2Vyc1wiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRGb2xsb3dlcnMoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93ZXJzQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcblxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2VycygpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRGb2xsb3dlcnMpOyAvL+uwmOuztVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBsb2FkRm9sbG93aW5nc0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5nZXQoXCIvdXNlci9mb2xsb3dpbmdzXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogbG9hZEZvbGxvd2luZ3MoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93aW5nc0FQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG5cbiAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2lucygpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBsb2FkRm9sbG93aW5ncyk7IC8v67CY67O1XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBjaGFuZ2VOaWNrbmFtZUFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wYXRjaChcIi91c2VyL25pY2tuYW1lXCIsIHsgbmlja25hbWU6IGRhdGEgfSk7XG59XG5cbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZU5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcblxuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hDaGFuZ2VOaWNrbmFtZSgpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBjaGFuZ2VOaWNrbmFtZSk7IC8v67CY67O1XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gcmVtb3ZlRm9sbG93ZXJBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9mb2xsb3dlci8ke2RhdGF9YCk7XG59XG5cbmZ1bmN0aW9uKiByZW1vdmVGb2xsb3dlcihhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2VyQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcblxuICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVGb2xsb3dlcigpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCByZW1vdmVGb2xsb3dlcik7IC8v67CY67O1XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBmb3JrKHdhdGNoQ2hhbmdlTmlja25hbWUpLFxuICAgIGZvcmsod2F0Y2hSZW1vdmVGb2xsb3dlciksXG4gICAgZm9yayh3YXRjaExvZ2luKSxcbiAgICBmb3JrKHdhdGNoTG9nb3V0KSxcbiAgICBmb3JrKHdhdGNoU2luZ1VwKSxcbiAgICBmb3JrKHdhdGNoRm9sbG93KSxcbiAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxuICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcbiAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2lucyksXG4gICAgZm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxuICAgIGZvcmsod2F0Y2hMb2FkVXNlciksXG4gIF0pO1xufVxuIiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi4vc2FnYXNcIjtcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTtcbiAgY29uc3QgZW5oYW5jZXIgPVxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxuICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXG4gICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGVuaGFuY2VyKTtcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpOyAvL3NhZ2FUYXNrIOyEnOuyhOyCrOydtOuTnOuenOuNlOungeyaqVxuICByZXR1cm4gc3RvcmU7XG59O1xuXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xuIiwiZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gXCJMT0dfSU5fRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gXCJMT0dfSU5fUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJMT0dfSU5fU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX0ZBSUxVUkUgPSBcIkxPQURfTVlfSU5GT19GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSBcIkxPQURfTVlfSU5GT19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1NVQ0NFU1MgPSBcIkxPQURfTVlfSU5GT19TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9IFwiTE9BRF9VU0VSX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9IFwiTE9BRF9VU0VSX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9IFwiTE9BRF9VU0VSX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19GQUlMVVJFID0gXCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gXCJMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSBcIlNJR05fVVBfRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9IFwiU0lHTl9VUF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJTSUdOX1VQX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gXCJGT0xMT1dfRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gXCJGT0xMT1dfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gXCJGT0xMT1dfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgUkVUV0VFVF9GQUlMVVJFID0gXCJSRVRXRUVUX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1JFUVVFU1QgPSBcIlJFVFdFRVRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFJFVFdFRVRfU1VDQ0VTUyA9IFwiUkVUV0VFVF9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSBcIlVQTE9BRF9JTUFHRVNfRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9IFwiVVBMT0FEX0lNQUdFU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gXCJVUExPQURfSU1BR0VTX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9IFwiUkVNT1ZFX0lNQUdFXCI7XG5cbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gXCJVTkZPTExPV19GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9IFwiVU5GT0xMT1dfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSBcIlVORk9MTE9XX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9IFwiTE9HX09VVF9GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gXCJMT0dfT1VUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSBcIkxPR19PVVRfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfUE9TVFNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUU19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gXCJMT0FEX1BPU1RTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gXCJMT0FEX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gXCJMT0FEX1BPU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gXCJMT0FEX1BPU1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSA9IFwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1JFUVVFU1QgPSBcIkxPQURfRk9MTE9XRVJTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTID0gXCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSA9IFwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCA9IFwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyA9IFwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSBcIlJFTU9WRV9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSBcIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgPSBcIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUgPSBcIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfQ09NTUVOVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gXCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gXCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gXCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSBcIkxJS0VfUE9TVF9GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSBcIkxJS0VfUE9TVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSBcIkxJS0VfUE9TVF9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gXCJVTkxJS0VfUE9TVF9GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9IFwiVU5MSUtFX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSBcIlVOTElLRV9QT1NUX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gXCJBRERfUE9TVF9UT19NRVwiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gXCJSRU1PVkVfUE9TVF9PRl9NRVwiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vY29tcGF0aWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==