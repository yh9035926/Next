module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/profile.js");
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

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type */ "./type/index.js");
var _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\components\\FollowList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const FollowList = ({
  header,
  data
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const onCancel = id => () => {
    if (header === "팔로잉") {
      dispatch({
        type: _type__WEBPACK_IMPORTED_MODULE_5__["UNFOLLOW_REQUEST"],
        data: id
      });
    }
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_5__["REMOVE_FOLLOWER_REQUEST"],
      data: id
    });
  };
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    header: __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 15
      }
    }, header),
    size: "small",
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    },
    loadMore: __jsx("div", {
      style: {
        textAlign: "center",
        margin: "10px 0"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }, "\uB354 \uBCF4\uAE30")),
    bordered: true,
    dataSource: data,
    renderItem: item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      style: {
        marginTop: 20
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["StopOutlined"], {
        key: "stop",
        onClick: onCancel(item.id),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 23
        }
      })],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      description: item.nickname,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  });
};
FollowList.propTypes = {
  header: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowList);

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

/***/ "./components/NicknameEditForm.js":
/*!****************************************!*\
  !*** ./components/NicknameEditForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type */ "./type/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
var _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\components\\NicknameEditForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const NicknameEditForm = () => {
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const [nickname, onChangeNickname] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])((me === null || me === void 0 ? void 0 : me.nickname) || "");
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"],
      data: nickname
    });
  }, [nickname]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search, {
    value: nickname,
    onChange: onChangeNickname,
    addonBefore: "\uB2C9\uB124\uC784",
    enterButton: "\uC218\uC815",
    onSearch: onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (NicknameEditForm);

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

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NicknameEditForm */ "./components/NicknameEditForm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FollowList */ "./components/FollowList.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../type */ "./type/index.js");
var _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\pages\\profile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Profile = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.user);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_7__["LOAD_FOLLOWERS_REQUEST"]
    });
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_7__["LOAD_FOLLOWINGS_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!(me && me.id)) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
    }
  }, [me && me.id]);
  if (!me) {
    return null;
  }
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "\uB0B4 \uD504\uB85C\uD544")), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx(_components_FollowList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    header: "\uD314\uB85C\uC789",
    data: me.Followings,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx(_components_FollowList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    header: "\uD314\uB85C\uC6CC",
    data: me.Followers,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Profile);

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
  me: null,
  signUpData: {},
  loginData: {}
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

/***/ "./type/index.js":
/*!***********************!*\
  !*** ./type/index.js ***!
  \***********************/
/*! exports provided: LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, FOLLOW_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, RETWEET_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, UPLOAD_IMAGES_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, REMOVE_IMAGE, UNFOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, ADD_POST_SUCCESS, ADD_POST_REQUEST, ADD_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, REMOVE_POST_SUCCESS, REMOVE_POST_REQUEST, REMOVE_POST_FAILURE, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_FAILURE, ADD_COMMENT_SUCCESS, ADD_COMMENT_REQUEST, ADD_COMMENT_FAILURE, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_FAILURE, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, ADD_POST_TO_ME, REMOVE_POST_OF_ME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
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

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9sbG93TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05pY2tuYW1lRWRpdEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIl0sIm5hbWVzIjpbIkFwcExheW91dCIsImNoaWxkcmVuIiwibWUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lbnVJdGVtcyIsImxhYmVsIiwiX19qc3giLCJMaW5rIiwiaHJlZiIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwia2V5IiwiSW5wdXQiLCJTZWFyY2giLCJlbnRlckJ1dHRvbiIsInN0eWxlIiwidmVydGljYWxBbGlnbiIsIk1lbnUiLCJtb2RlIiwiaXRlbXMiLCJSb3ciLCJndXR0ZXIiLCJDb2wiLCJ4cyIsIm1kIiwiVXNlclByb2ZpbGUiLCJMb2dpbkZvcm0iLCJ0YXJnZXQiLCJyZWwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsIkZvbGxvd0xpc3QiLCJoZWFkZXIiLCJkYXRhIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uQ2FuY2VsIiwiaWQiLCJ0eXBlIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiTGlzdCIsInNpemUiLCJncmlkIiwibG9hZE1vcmUiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJCdXR0b24iLCJib3JkZXJlZCIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwiaXRlbSIsIkl0ZW0iLCJtYXJnaW5Ub3AiLCJDYXJkIiwiYWN0aW9ucyIsIlN0b3BPdXRsaW5lZCIsIm9uQ2xpY2siLCJNZXRhIiwiZGVzY3JpcHRpb24iLCJuaWNrbmFtZSIsInN0cmluZyIsImFycmF5IiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwidXNlSW5wdXQiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkVycm9yIiwib25TdWJtaXRGb3JtIiwidXNlQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwidXNlRWZmZWN0IiwiYWxlcnQiLCJGb3JtIiwib25GaW5pc2giLCJodG1sRm9yIiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImh0bWxUeXBlIiwibG9hZGluZyIsIk5pY2tuYW1lRWRpdEZvcm0iLCJvbkNoYW5nZU5pY2tuYW1lIiwib25TdWJtaXQiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsImFkZG9uQmVmb3JlIiwib25TZWFyY2giLCJsb2dPdXRMb2FkaW5nIiwib25Mb2dPdXQiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiUG9zdHMiLCJsZW5ndGgiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwiYXZhdGFyIiwiQXZhdGFyIiwidGl0bGUiLCJzZXR2YWx1ZSIsInVzZVN0YXRlIiwiaGFuZGxlciIsImUiLCJjYWNoZWRPYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwidW5kZWZpbmVkIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsImNiIiwiZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJlbCIsIm9ic2VydmVyIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImVycm9yIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJhcyIsIm9wdGlvbnMiLCJjYXRjaCIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJrZXlzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwidXNlUmVmIiwiY3VycmVudCIsIndhcm4iLCJwIiwiY2hpbGRFbG0iLCJzZXRDaGlsZEVsbSIsInBhdGhuYW1lIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFByb3BzIiwicmVmIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwibG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZGVmaW5lUHJvcGVydHkiLCJSb3V0ZXIiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJBcnJheSIsImlzQXJyYXkiLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJwdXNoIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJtYXAiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJjYW5jZWxsZWQiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsImFkZExvY2FsZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiYWRkQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImlzTG9jYWxVUkwiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiaW50ZXJwb2xhdGVBcyIsInJvdXRlIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwiam9pbiIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVIcmVmIiwiY3VycmVudFBhdGgiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwic2VhcmNoUGFyYW1zIiwiaGFzaCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsIm1hcmtMb2FkaW5nRXJyb3IiLCJwcmVwYXJlVXJsQXMiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiaW5pdGlhbFN0eWxlU2hlZXRzIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImxvY2FsZXMiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiX19OIiwiY2hhbmdlIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwicmVsb2FkIiwibG9jYXRpb24iLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsIl9oIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYWdlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInJld3JpdGVzIiwicHJvbWlzZWRCdWlsZE1hbmlmZXN0IiwicGFyc2VkIiwiX3Jlc29sdmVIcmVmIiwidXJsSXNOZXciLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsImZpbHRlciIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJwYWdlIiwiZmV0Y2hDb21wb25lbnQiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJyZXF1aXJlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzcGxpdCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJzb21lIiwicmUiLCJ0ZXN0IiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImNhY2hlS2V5IiwiY3R4IiwiQXBwVHJlZSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsImZvcm1hdFVybCIsInVybE9iaiIsImF1dGgiLCJob3N0bmFtZSIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImlzRHluYW1pY1JvdXRlIiwiRFVNTVlfQkFTRSIsInBhcnNlUmVsYXRpdmVVcmwiLCJyZXNvbHZlZEJhc2UiLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJyZWdleHBUb0Z1bmN0aW9uIiwicHJlcGFyZURlc3RpbmF0aW9uIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsImNvbXBpbGUiLCJ2YWxpZGF0ZSIsIm5ld1VybCIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJtYXRjaCIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmVzb2x2ZVJld3JpdGVzIiwicmV3cml0ZSIsInNvdXJjZSIsImRlc3RSZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29kZSIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwiZ2V0Um91dGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJ1c2VkIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJnZXRVUkwiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwicHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiU1AiLCJtZWFzdXJlIiwiUHJvZmlsZSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkZyYWdtZW50IiwiSGVhZCIsImluaXRpYWxTdGF0ZSIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNEb25lIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwibG9hZEZvbGxvd2luZ3NMb2FkaW5nIiwibG9hZEZvbGxvd2luZ3NEb25lIiwibG9hZEZvbGxvd2luZ3NFcnJvciIsImxvZ0luRG9uZSIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInJlbW92ZUZvbGxvd2VyTG9hZGluZyIsInJlbW92ZUZvbGxvd2VyRG9uZSIsInJlbW92ZUZvbGxvd2VyRXJyb3IiLCJ1bkZvbGxvd0xvYWRpbmciLCJ1bkZvbGxvd0RvbmUiLCJ1bkZvbGxvd0Vycm9yIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX09VVF9SRVFVRVNUIiwicm9vdFJlZHVjZXIiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJ2IiwiVXNlcklkIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsInVuc2hpZnQiLCJSRU1PVkVfUE9TVF9PRl9NRSIsIlJFVFdFRVRfRkFJTFVSRSIsIlJFVFdFRVRfUkVRVUVTVCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlJFTU9WRV9JTUFHRSIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxn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TUMsbUJBQW1CLEdBQUcscUJBQXFCO0FBRWpELE1BQU0zQixjQUFjLEdBQUcsZ0JBQWdCO0FBQ3ZDLE1BQU1FLGlCQUFpQixHQUFHLG1CQUFtQixDOzs7Ozs7Ozs7OztBQzNFcEQsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvcHJvZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcHJvZmlsZS5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgTWVudSwgSW5wdXQsIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tIFwiLi9Vc2VyUHJvZmlsZVwiO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi9Mb2dpbkZvcm1cIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcblxuICBjb25zdCBtZW51SXRlbXMgPSBbXG4gICAge1xuICAgICAgbGFiZWw6IDxMaW5rIGhyZWY9XCIvXCI+64W465Oc67KE65OcPC9MaW5rPixcbiAgICAgIGtleTogXCJub2RlYm9yZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPu2UhOuhnO2VhDwvTGluaz4sXG4gICAgICBrZXk6IFwicHJvZmlsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IChcbiAgICAgICAgPElucHV0LlNlYXJjaFxuICAgICAgICAgIGVudGVyQnV0dG9uPVwiU2VhcmNoXCJcbiAgICAgICAgICBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiIH19XG4gICAgICAgIC8+XG4gICAgICApLFxuICAgICAga2V5OiBcInNlYXJjaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+7ZqM7JuQ6rCA7J6FPC9MaW5rPixcbiAgICAgIGtleTogXCJzaWdudXBcIixcbiAgICB9LFxuICBdO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiIGl0ZW1zPXttZW51SXRlbXN9PjwvTWVudT5cbiAgICAgIDxSb3cgZ3V0dGVyPXs4fT5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cbiAgICAgICAgICB7bWUgPyA8VXNlclByb2ZpbGUgLz4gOiA8TG9naW5Gb3JtIC8+fVxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lm5hdmVyLmNvbVwiXG4gICAgICAgICAgICB0YXJnZXQ9e1wiX2JsYW5rXCJ9XG4gICAgICAgICAgICByZWw9XCJub3JlZmVycmVyIG5vb3BvZW5lclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAg64Sk7J2067KEIOqwgOq4sFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgTGlzdCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBTdG9wT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgVU5GT0xMT1dfUkVRVUVTVCB9IGZyb20gXCIuLi90eXBlXCI7XG5jb25zdCBGb2xsb3dMaXN0ID0gKHsgaGVhZGVyLCBkYXRhIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IG9uQ2FuY2VsID0gKGlkKSA9PiAoKSA9PiB7XG4gICAgaWYgKGhlYWRlciA9PT0gXCLtjJTroZzsnolcIikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxuICAgICAgICBkYXRhOiBpZCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCxcbiAgICAgIGRhdGE6IGlkLFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExpc3RcbiAgICAgIGhlYWRlcj17PGRpdj57aGVhZGVyfTwvZGl2Pn1cbiAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICBncmlkPXt7IGd1dHRlcjogNCwgeHM6IDIsIG1kOiAzIH19XG4gICAgICBsb2FkTW9yZT17XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW46IFwiMTBweCAwXCIgfX0+XG4gICAgICAgICAgPEJ1dHRvbj7rjZQg67O06riwPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgICAgYm9yZGVyZWRcbiAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XG4gICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxuICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIGFjdGlvbnM9e1s8U3RvcE91dGxpbmVkIGtleT1cInN0b3BcIiBvbkNsaWNrPXtvbkNhbmNlbChpdGVtLmlkKX0gLz5dfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJkLk1ldGEgZGVzY3JpcHRpb249e2l0ZW0ubmlja25hbWV9IC8+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICl9XG4gICAgPjwvTGlzdD5cbiAgKTtcbn07XG5cbkZvbGxvd0xpc3QucHJvcFR5cGVzID0ge1xuICBoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG59O1xuZXhwb3J0IGRlZmF1bHQgRm9sbG93TGlzdDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbG9naW5SZXF1ZXN0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KCk7XG4gIGNvbnN0IHsgbG9nSW5Mb2FkaW5nLCBsb2dJbkVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xuICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbih7IGVtYWlsLCBwYXNzd29yZCB9KSk7XG4gIH0sIFtlbWFpbCwgcGFzc3dvcmRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2dJbkVycm9yKSB7XG4gICAgICBhbGVydChsb2dJbkVycm9yKTtcbiAgICB9XG4gIH0sIFtsb2dJbkVycm9yXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1lbWFpbFwiPuydtOuplOydvDwvbGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgIG5hbWU9XCJ1c2VyLWVtYWlsXCJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+67mE67CA67KI7Zi4PC9sYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtsb2dJbkxvYWRpbmd9PlxuICAgICAgICAgIOuhnOq3uOyduFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cbiAgICAgICAgICA8QnV0dG9uPu2ajOybkOqwgOyehTwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xuXG5jb25zdCBOaWNrbmFtZUVkaXRGb3JtID0gKCkgPT4ge1xuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCBbbmlja25hbWUsIG9uQ2hhbmdlTmlja25hbWVdID0gdXNlSW5wdXQobWU/Lm5pY2tuYW1lIHx8IFwiXCIpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXG4gICAgICBkYXRhOiBuaWNrbmFtZSxcbiAgICB9KTtcbiAgfSwgW25pY2tuYW1lXSk7XG4gIHJldHVybiAoXG4gICAgPEZvcm0+XG4gICAgICA8SW5wdXQuU2VhcmNoXG4gICAgICAgIHZhbHVlPXtuaWNrbmFtZX1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9XG4gICAgICAgIGFkZG9uQmVmb3JlPVwi64uJ64Sk7J6EXCJcbiAgICAgICAgZW50ZXJCdXR0b249XCLsiJjsoJVcIlxuICAgICAgICBvblNlYXJjaD17b25TdWJtaXR9XG4gICAgICAvPlxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5pY2tuYW1lRWRpdEZvcm07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEF2YXRhciwgQnV0dG9uLCBDYXJkIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgbG9nb3V0UmVxdWVzdEFjdGlvbiB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XG5cbmNvbnN0IFVzZXJQcm9maWxlID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgbWUsIGxvZ091dExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKGxvZ291dFJlcXVlc3RBY3Rpb24oKSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgYWN0aW9ucz17W1xuICAgICAgICA8ZGl2IGtleT1cInR3aXRcIj5cbiAgICAgICAgICDsp7nsqLFcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICB7bWUuUG9zdHMubGVuZ3RofVxuICAgICAgICA8L2Rpdj4sXG4gICAgICAgIDxkaXYga2V5PVwiZm9sbG93aW5nc1wiPlxuICAgICAgICAgIO2MlOuhnOyeiVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIHttZS5Gb2xsb3dpbmdzLmxlbmd0aH1cbiAgICAgICAgPC9kaXY+LFxuICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2Vyc1wiPlxuICAgICAgICAgIO2MlOuhnOybjFxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIHttZS5Gb2xsb3dlcnMubGVuZ3RofVxuICAgICAgICA8L2Rpdj4sXG4gICAgICBdfVxuICAgID5cbiAgICAgIDxDYXJkLk1ldGFcbiAgICAgICAgYXZhdGFyPXs8QXZhdGFyPnttZS5uaWNrbmFtZVswXX08L0F2YXRhcj59XG4gICAgICAgIHRpdGxlPXttZS5uaWNrbmFtZX1cbiAgICAgIC8+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uTG9nT3V0fSBsb2FkaW5nPXtsb2dPdXRMb2FkaW5nfT5cbiAgICAgICAg66Gc6re47JWE7JuDXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgdXNlSW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0dmFsdWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgaGFuZGxlciA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgc2V0dmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlciwgc2V0dmFsdWVdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlSW5wdXQ7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBOaWNrbmFtZUVkaXRGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL05pY2tuYW1lRWRpdEZvcm1cIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgRm9sbG93TGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb2xsb3dMaXN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIExPQURfRk9MTE9XSU5HU19SRVFVRVNUIH0gZnJvbSBcIi4uL3R5cGVcIjtcblxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCxcbiAgICB9KTtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCxcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCEobWUgJiYgbWUuaWQpKSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9LCBbbWUgJiYgbWUuaWRdKTtcbiAgaWYgKCFtZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT7rgrQg7ZSE66Gc7ZWEPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgIDxOaWNrbmFtZUVkaXRGb3JtIC8+XG4gICAgICAgIDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOyeiVwiIGRhdGE9e21lLkZvbGxvd2luZ3N9IC8+XG4gICAgICAgIDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOybjFwiIGRhdGE9e21lLkZvbGxvd2Vyc30gLz5cbiAgICAgIDwvQXBwTGF5b3V0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xuaW1wb3J0IHtcbiAgTE9HX0lOX0ZBSUxVUkUsXG4gIExPR19JTl9TVUNDRVNTLFxuICBMT0dfT1VUX1JFUVVFU1QsXG4gIExPR19JTl9SRVFVRVNULFxuICBMT0dfT1VUX0ZBSUxVUkUsXG4gIExPR19PVVRfU1VDQ0VTUyxcbiAgU0lHTl9VUF9GQUlMVVJFLFxuICBTSUdOX1VQX1JFUVVFU1QsXG4gIFNJR05fVVBfU1VDQ0VTUyxcbiAgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXG4gIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxuICBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcbiAgQUREX1BPU1RfVE9fTUUsXG4gIFJFTU9WRV9QT1NUX09GX01FLFxuICBGT0xMT1dfUkVRVUVTVCxcbiAgRk9MTE9XX1NVQ0NFU1MsXG4gIEZPTExPV19GQUlMVVJFLFxuICBVTkZPTExPV19SRVFVRVNULFxuICBVTkZPTExPV19TVUNDRVNTLFxuICBVTkZPTExPV19GQUlMVVJFLFxuICBMT0FEX01ZX0lORk9fRkFJTFVSRSxcbiAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsXG4gIExPQURfTVlfSU5GT19TVUNDRVNTLFxuICBMT0FEX0ZPTExPV0VSU19SRVFVRVNULFxuICBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxuICBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxuICBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCxcbiAgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXG4gIExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxuICBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCxcbiAgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXG4gIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxufSBmcm9tIFwiLi4vdHlwZVwiO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsXG4gIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcbiAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxuXG4gIGxvYWRGb2xsb3dlcnNMb2FkaW5nOiBmYWxzZSxcbiAgbG9hZEZvbGxvd2Vyc0RvbmU6IGZhbHNlLFxuICBsb2FkRm9sbG93ZXJzRXJyb3I6IG51bGwsXG5cbiAgbG9hZEZvbGxvd2luZ3NMb2FkaW5nOiBmYWxzZSxcbiAgbG9hZEZvbGxvd2luZ3NEb25lOiBmYWxzZSxcbiAgbG9hZEZvbGxvd2luZ3NFcnJvcjogbnVsbCxcblxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxuICBsb2dJbkRvbmU6IGZhbHNlLFxuICBsb2dJbkVycm9yOiBudWxsLFxuXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLFxuICBsb2dPdXREb25lOiBmYWxzZSxcbiAgbG9nT3V0RXJyb3I6IG51bGwsXG5cbiAgc2lnblVwTG9hZGluZzogZmFsc2UsXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxuICBzaWduVXBFcnJvcjogbnVsbCxcblxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxuICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxuXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLFxuICBmb2xsb3dEb25lOiBmYWxzZSxcbiAgZm9sbG93RXJyb3I6IG51bGwsXG5cbiAgcmVtb3ZlRm9sbG93ZXJMb2FkaW5nOiBmYWxzZSxcbiAgcmVtb3ZlRm9sbG93ZXJEb25lOiBmYWxzZSxcbiAgcmVtb3ZlRm9sbG93ZXJFcnJvcjogbnVsbCxcblxuICB1bkZvbGxvd0xvYWRpbmc6IGZhbHNlLFxuICB1bkZvbGxvd0RvbmU6IGZhbHNlLFxuICB1bkZvbGxvd0Vycm9yOiBudWxsLFxuXG4gIG1lOiBudWxsLFxuICBzaWduVXBEYXRhOiB7fSxcbiAgbG9naW5EYXRhOiB7fSxcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xuICByZXR1cm4geyB0eXBlOiBMT0dfSU5fUkVRVUVTVCwgZGF0YSB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHR5cGU6IExPR19PVVRfUkVRVUVTVCB9O1xufTtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGRyYWZ0Lm1lLkZvbGxvd2Vycy5maWx0ZXIoXG4gICAgICAgICAgKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZFxuICAgICAgICApO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZSA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LnVuRm9sbG93TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnVuRm9sbG93RG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVuRm9sbG93RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxuICAgICAgICBkcmFmdC51bkZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxuICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iLCJleHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcIkxPR19JTl9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9IFwiTE9BRF9NWV9JTkZPX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9IFwiTE9BRF9NWV9JTkZPX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9IFwiTE9BRF9NWV9JTkZPX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9VUF9GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJTSUdOX1VQX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcIlNJR05fVVBfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSBcIkZPTExPV19GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSBcIkZPTExPV19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSBcIkZPTExPV19TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSBcIlJFVFdFRVRfRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9IFwiUkVUV0VFVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gXCJSRVRXRUVUX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9IFwiVVBMT0FEX0lNQUdFU19GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gXCJVUExPQURfSU1BR0VTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSBcIlVQTE9BRF9JTUFHRVNfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gXCJSRU1PVkVfSU1BR0VcIjtcblxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSBcIlVORk9MTE9XX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gXCJVTkZPTExPV19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9IFwiVU5GT0xMT1dfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gXCJMT0dfT1VUX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcIkxPR19PVVRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwiTE9HX09VVF9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9QT1NUU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1BPU1RTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUE9TVFNfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSA9IFwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1JFUVVFU1QgPSBcIkxPQURfRk9MTE9XRVJTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTID0gXCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSA9IFwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCA9IFwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyA9IFwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSBcIlJFTU9WRV9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSBcIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgPSBcIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUgPSBcIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfQ09NTUVOVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gXCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gXCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gXCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSBcIkxJS0VfUE9TVF9GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSBcIkxJS0VfUE9TVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSBcIkxJS0VfUE9TVF9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gXCJVTkxJS0VfUE9TVF9GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9IFwiVU5MSUtFX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSBcIlVOTElLRV9QT1NUX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gXCJBRERfUE9TVF9UT19NRVwiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gXCJSRU1PVkVfUE9TVF9PRl9NRVwiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9