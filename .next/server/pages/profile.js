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
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\components\\AppLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const AppLayout = ({
  children
}) => {
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.user);
  const [searchInput, onChangeSearchInput] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])("");
  const onSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push(`/hashtag/${searchInput}`);
  }, [searchInput]);
  const menuItems = [{
    label: __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
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
        lineNumber: 25,
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
      value: searchInput,
      onChange: onChangeSearchInput,
      onSearch: onSearch //antd 전용
      ,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
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
        lineNumber: 41,
        columnNumber: 14
      }
    }, "\uD68C\uC6D0\uAC00\uC785"),
    key: "signup"
  }];
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    mode: "horizontal",
    items: menuItems,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, me ? __jsx(_UserProfile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }) : __jsx(_LoginForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 35
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://www.naver.com",
    target: "_blank",
    rel: "noreferrer noopoener",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
  data,
  loading,
  onClickMore
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
      onClick: onClickMore,
      loading: loading,
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
        lineNumber: 38,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["StopOutlined"], {
        key: "stop",
        onClick: onCancel(item.id),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 23
        }
      })],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      description: item.nickname,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
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
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  onClickMore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired
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
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/client/link */ "./node_modules/next/dist/client/link.js");
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_link__WEBPACK_IMPORTED_MODULE_4__);
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
        lineNumber: 16,
        columnNumber: 9
      }
    }, __jsx(next_dist_client_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: `/user/${me.id}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, "\uC9F9\uCA31", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
      }
    }), me.Posts.length))), __jsx("div", {
      key: "followings",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    }, __jsx(next_dist_client_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: `/profile`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, "\uD314\uB85C\uC789", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 15
      }
    }), me.Followings.length))), __jsx("div", {
      key: "followers",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }, __jsx(next_dist_client_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: `/profile`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, "\uD314\uB85C\uC6CC", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    }), me.Followers.length)))],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(next_dist_client_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: `/user/${me.id}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }
    }, me.nickname[0]))),
    title: me.nickname,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onLogOut,
    loading: logOutLoading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
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
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\com\\Desktop\\YH\\next\\pages\\profile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const fetcher = url => axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(url, {
  withCredentials: true
}).then(result => result.data);
const Profile = () => {
  const {
    0: followersLimit,
    1: setFollowersLimit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(3);
  const {
    0: followingsLimit,
    1: setFollowingsLimit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(3);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.user);
  const {
    data: followersData,
    followerError
  } = swr__WEBPACK_IMPORTED_MODULE_11___default()(`http://localhost:3075/user/followers?limit=${followersLimit}`, fetcher);
  const {
    data: followingsData,
    followingError
  } = swr__WEBPACK_IMPORTED_MODULE_11___default()(`http://localhost:3075/user/followings?limit=${followingsLimit}`, fetcher);

  /* useEffect(() => {
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST,
    });
    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
    });
  }, []);
  */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!(me && me.id)) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
    }
  }, [me && me.id]);
  const loadMoreFollowings = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setFollowingsLimit(prev => prev + 3);
  }, []);
  const loadMoreFollowers = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setFollowersLimit(prev => prev + 3);
  }, []);
  if (!me) {
    return "내 정보 로딩 중";
  }
  if (followerError || followingError) {
    console.error(followerError || followingError);
    return __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 12
      }
    }, "\uD314\uB85C\uC789/\uD314\uB85C\uC6CC \uB85C\uB529 \uC911 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD569\uB2C8\uB2E4.");
  }
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, "\uB0B4 \uD504\uB85C\uD544")), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }), __jsx(_components_FollowList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    header: "\uD314\uB85C\uC789",
    data: followingsData,
    onClickMore: loadMoreFollowings,
    loading: !followingsData && !followingError,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }), __jsx(_components_FollowList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    header: "\uD314\uB85C\uC6CC",
    data: followersData,
    onClickMore: loadMoreFollowers,
    loading: !followersData && !followerError,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  })));
};
const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_8__["default"].getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : "";
  axios__WEBPACK_IMPORTED_MODULE_10___default.a.defaults.headers.Cookie = "";
  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_10___default.a.defaults.headers.Cookie = cookie;
  } //Cookie 넣어줘야 로그인 새로고침 가능
  context.store.dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_7__["LOAD_MY_INFO_REQUEST"]
  });
  context.store.dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_7__["LOAD_POSTS_REQUEST"]
  });
  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_9__["END"]);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (Profile);

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
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");
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
  return Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
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
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");
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
  return Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
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
    console.error(err);
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
    console.error(err);
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
    console.error(err);
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
    console.error(err);
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
    console.error(err);
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
    console.error(err);
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
    console.error(err);
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
    console.error(err);
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
    console.error(err);
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
    console.error(err);
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
    console.error(err);
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
    console.error(err);
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
    console.error(err);
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
    console.error(err);
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
    console.error(err);
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
    console.error(err);
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
    console.error(err);
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
    console.error(err);
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

/***/ "./util/produce.js":
/*!*************************!*\
  !*** ./util/produce.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((...args) => {
  Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(...args);
});

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

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9sbG93TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05pY2tuYW1lRWRpdEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL3Byb2R1Y2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3clwiIl0sIm5hbWVzIjpbIkFwcExheW91dCIsImNoaWxkcmVuIiwibWUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInNlYXJjaElucHV0Iiwib25DaGFuZ2VTZWFyY2hJbnB1dCIsInVzZUlucHV0Iiwib25TZWFyY2giLCJ1c2VDYWxsYmFjayIsIlJvdXRlciIsInB1c2giLCJtZW51SXRlbXMiLCJsYWJlbCIsIl9fanN4IiwiTGluayIsImhyZWYiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImtleSIsIklucHV0IiwiU2VhcmNoIiwiZW50ZXJCdXR0b24iLCJzdHlsZSIsInZlcnRpY2FsQWxpZ24iLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiTWVudSIsIm1vZGUiLCJpdGVtcyIsIlJvdyIsImd1dHRlciIsIkNvbCIsInhzIiwibWQiLCJVc2VyUHJvZmlsZSIsIkxvZ2luRm9ybSIsInRhcmdldCIsInJlbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwiRm9sbG93TGlzdCIsImhlYWRlciIsImRhdGEiLCJsb2FkaW5nIiwib25DbGlja01vcmUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DYW5jZWwiLCJpZCIsInR5cGUiLCJVTkZPTExPV19SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJMaXN0Iiwic2l6ZSIsImdyaWQiLCJsb2FkTW9yZSIsInRleHRBbGlnbiIsIm1hcmdpbiIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJib3JkZXJlZCIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwiaXRlbSIsIkl0ZW0iLCJtYXJnaW5Ub3AiLCJDYXJkIiwiYWN0aW9ucyIsIlN0b3BPdXRsaW5lZCIsIk1ldGEiLCJkZXNjcmlwdGlvbiIsIm5pY2tuYW1lIiwic3RyaW5nIiwiYXJyYXkiLCJmdW5jIiwiYm9vbCIsImVtYWlsIiwib25DaGFuZ2VFbWFpbCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsImxvZ0luTG9hZGluZyIsImxvZ0luRXJyb3IiLCJvblN1Ym1pdEZvcm0iLCJjb25zb2xlIiwibG9nIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwidXNlRWZmZWN0IiwiYWxlcnQiLCJGb3JtIiwib25GaW5pc2giLCJodG1sRm9yIiwibmFtZSIsInJlcXVpcmVkIiwiaHRtbFR5cGUiLCJOaWNrbmFtZUVkaXRGb3JtIiwib25DaGFuZ2VOaWNrbmFtZSIsIm9uU3VibWl0IiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJhZGRvbkJlZm9yZSIsImxvZ091dExvYWRpbmciLCJvbkxvZ091dCIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJQb3N0cyIsImxlbmd0aCIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJhdmF0YXIiLCJBdmF0YXIiLCJ0aXRsZSIsInNldHZhbHVlIiwidXNlU3RhdGUiLCJoYW5kbGVyIiwiZSIsImNhY2hlZE9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZXIiLCJvYnNlcnZlIiwic2V0IiwiZXJyIiwiZXJyb3IiLCJwcmVmZXRjaCIsInJvdXRlciIsImFzIiwib3B0aW9ucyIsImNhdGNoIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJ0aGVuIiwic3VjY2VzcyIsInNjcm9sbFRvIiwiZG9jdW1lbnQiLCJib2R5IiwiZm9jdXMiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJ1c2VSZWYiLCJjdXJyZW50Iiwid2FybiIsInAiLCJjaGlsZEVsbSIsInNldENoaWxkRWxtIiwicGF0aG5hbWUiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUHJvcHMiLCJyZWYiLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJsb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJkZWZpbmVQcm9wZXJ0eSIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlUm91dGVyIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImFzc2lnbiIsIkFycmF5IiwiaXNBcnJheSIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsIm9mZiIsInNwbGljZSIsImVtaXQiLCJldnRzIiwibWFwIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiY2FuY2VsbGVkIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJhZGRMb2NhbGUiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImFkZEJhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpc0xvY2FsVVJMIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImludGVycG9sYXRlQXMiLCJyb3V0ZSIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlSHJlZiIsImN1cnJlbnRQYXRoIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsInNlYXJjaFBhcmFtcyIsImhhc2giLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJtYXJrTG9hZGluZ0Vycm9yIiwicHJlcGFyZVVybEFzIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsImluaXRpYWxTdHlsZVNoZWV0cyIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJsb2NhbGVzIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsIm9uUG9wU3RhdGUiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImNoYW5nZSIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInJlbG9hZCIsImxvY2F0aW9uIiwiYmFjayIsImhpc3RvcnkiLCJtZXRob2QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFnZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJyZXdyaXRlcyIsInByb21pc2VkQnVpbGRNYW5pZmVzdCIsInBhcnNlZCIsIl9yZXNvbHZlSHJlZiIsInVybElzTmV3IiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJmaWx0ZXIiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJQcm9taXNlIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwicGFnZSIsImZldGNoQ29tcG9uZW50IiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwicmVxdWlyZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwic29tZSIsInJlIiwidGVzdCIsInByZWZldGNoRGF0YSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJjYWNoZUtleSIsImN0eCIsIkFwcFRyZWUiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJmb3JtYXRVcmwiLCJ1cmxPYmoiLCJhdXRoIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJpc0R5bmFtaWNSb3V0ZSIsIkRVTU1ZX0JBU0UiLCJwYXJzZVJlbGF0aXZlVXJsIiwicmVzb2x2ZWRCYXNlIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicmVnZXhwVG9GdW5jdGlvbiIsInByZXBhcmVEZXN0aW5hdGlvbiIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJjb21waWxlIiwidmFsaWRhdGUiLCJuZXdVcmwiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsInNob3VsZEFkZEJhc2VQYXRoIiwibWF0Y2giLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5Iiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJlc29sdmVSZXdyaXRlcyIsInJld3JpdGUiLCJzb3VyY2UiLCJkZXN0UmVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsImdldFJvdXRlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwidXNlZCIsImdldExvY2F0aW9uT3JpZ2luIiwiZ2V0VVJMIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwibG9hZEdldEluaXRpYWxQcm9wcyIsInByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIlNQIiwibWVhc3VyZSIsImZldGNoZXIiLCJheGlvcyIsIndpdGhDcmVkZW50aWFscyIsIlByb2ZpbGUiLCJmb2xsb3dlcnNMaW1pdCIsInNldEZvbGxvd2Vyc0xpbWl0IiwiZm9sbG93aW5nc0xpbWl0Iiwic2V0Rm9sbG93aW5nc0xpbWl0IiwiZm9sbG93ZXJzRGF0YSIsImZvbGxvd2VyRXJyb3IiLCJ1c2VTV1IiLCJmb2xsb3dpbmdzRGF0YSIsImZvbGxvd2luZ0Vycm9yIiwibG9hZE1vcmVGb2xsb3dpbmdzIiwicHJldiIsImxvYWRNb3JlRm9sbG93ZXJzIiwiRnJhZ21lbnQiLCJIZWFkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwid3JhcHBlciIsImNvbnRleHQiLCJjb29raWUiLCJyZXEiLCJoZWFkZXJzIiwiZGVmYXVsdHMiLCJDb29raWUiLCJzdG9yZSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiRU5EIiwic2FnYVRhc2siLCJ0b1Byb21pc2UiLCJyb290UmVkdWNlciIsImFjdGlvbiIsIkhZRFJBVEUiLCJwYXlsb2FkIiwiY29tYmluZWRSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJoYXNNb3JlUG9zdCIsInNpbmdsZVBvc3QiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJyZXR3ZWV0TG9hZGluZyIsInJldHdlZXREb25lIiwicmV0d2VldEVycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwiYWRkUG9zdCIsIkFERF9QT1NUX1JFUVVFU1QiLCJhZGRDb21tZW50IiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsInByb2R1Y2UiLCJkcmFmdCIsIlJFTU9WRV9JTUFHRSIsInYiLCJBRERfUE9TVF9TVUNDRVNTIiwidW5zaGlmdCIsIkFERF9QT1NUX0ZBSUxVUkUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiZmluZCIsIlBvc3RJZCIsIkxpa2VycyIsIlVzZXJJZCIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCIsIkxPQURfVVNFUl9QT1NUU19TVUNDRVNTIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJjb25jYXQiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiUkVUV0VFVF9SRVFVRVNUIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkNvbW1lbnRzIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNEb25lIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwibG9hZEZvbGxvd2luZ3NMb2FkaW5nIiwibG9hZEZvbGxvd2luZ3NEb25lIiwibG9hZEZvbGxvd2luZ3NFcnJvciIsImxvYWRVc2VyTG9hZGluZyIsImxvYWRVc2VyRG9uZSIsImxvYWRVc2VyRXJyb3IiLCJsb2dJbkRvbmUiLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInJlbW92ZUZvbGxvd2VyTG9hZGluZyIsInJlbW92ZUZvbGxvd2VyRG9uZSIsInJlbW92ZUZvbGxvd2VyRXJyb3IiLCJ1bkZvbGxvd0xvYWRpbmciLCJ1bkZvbGxvd0RvbmUiLCJ1bkZvbGxvd0Vycm9yIiwidXNlckluZm8iLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJiYXNlVVJMIiwicm9vdFNhZ2EiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImFkZFBvc3RBUEkiLCJjYWxsIiwicHV0IiwicmVzcG9uc2UiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGF0ZXN0IiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwid2F0Y2h1cGxvYWRJbWFnZXMiLCJsb2FkUG9zdHNBUEkiLCJsYXN0SWQiLCJsb2FkUG9zdHMiLCJ3YXRjaExvYWRQb3N0cyIsImxvYWRQb3N0QVBJIiwibG9hZFBvc3QiLCJ3YXRjaExvYWRQb3N0IiwibG9hZFVzZXJQb3N0QVBJIiwibG9hZFVzZXJQb3N0Iiwid2F0Y2hMb2FkVXNlclBvc3QiLCJsb2FkSGFzaHRhZ1Bvc3RBUEkiLCJsb2FkSGFzaHRhZ1Bvc3QiLCJ3YXRjaExvYWRIYXNodGFnUG9zdCIsInJldHdlZXRBUEkiLCJyZXR3ZWV0Iiwid2F0Y2hSZXR3ZWV0IiwicmVtb3ZlUG9zdEFQSSIsInJlbW92ZVBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwid2F0Y2hBZGRDb21tZW50IiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsImxpa2VQb3N0Iiwid2F0Y2hMaWtlUG9zdCIsInVubGlrZVBvc3RBUEkiLCJ1bmxpa2VQb3N0Iiwid2F0Y2hVbmxpa2VQb3N0IiwibG9nSW5BUEkiLCJsb2dJbiIsIndhdGNoTG9naW4iLCJ0YWtlRXZlcnkiLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJ3YXRjaExvZ291dCIsInRha2VMZWFkaW5nIiwic2lnblVwQVBJIiwic2lnblVwIiwid2F0Y2hTaW5nVXAiLCJmb2xsb3dBUEkiLCJmb2xsb3ciLCJ3YXRjaEZvbGxvdyIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJ3YXRjaFVuZm9sbG93IiwibG9hZE15SW5mb0FQSSIsImxvYWRNeUluZm8iLCJ3YXRjaExvYWRNeUluZm8iLCJsb2FkVXNlckFQSSIsImxvYWRVc2VyIiwid2F0Y2hMb2FkVXNlciIsImxvYWRGb2xsb3dlcnNBUEkiLCJsb2FkRm9sbG93ZXJzIiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwibG9hZEZvbGxvd2luZ3NBUEkiLCJsb2FkRm9sbG93aW5ncyIsIndhdGNoTG9hZEZvbGxvd2lucyIsImNoYW5nZU5pY2tuYW1lQVBJIiwiY2hhbmdlTmlja25hbWUiLCJ3YXRjaENoYW5nZU5pY2tuYW1lIiwicmVtb3ZlRm9sbG93ZXJBUEkiLCJyZW1vdmVGb2xsb3dlciIsIndhdGNoUmVtb3ZlRm9sbG93ZXIiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsImVuYWJsZUVTNSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMkM7QUFDUjtBQUNOO0FBQ2dCO0FBQ0w7QUFDSjtBQUNNO0FBQ0Q7QUFDUjtBQUVqQyxNQUFNQSxTQUFTLEdBQUdBLENBQUM7RUFBRUM7QUFBUyxDQUFDLEtBQUs7RUFDbEMsTUFBTTtJQUFFQztFQUFHLENBQUMsR0FBR0MsK0RBQVcsQ0FBRUMsS0FBSyxJQUFLQSxLQUFLLENBQUNDLElBQUksQ0FBQztFQUNqRCxNQUFNLENBQUNDLFdBQVcsRUFB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QyxFOzs7Ozs7Ozs7OztBQ0xELDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InBhZ2VzL3Byb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Byb2ZpbGUuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgTWVudSwgSW5wdXQsIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tIFwiLi9Vc2VyUHJvZmlsZVwiO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi9Mb2dpbkZvcm1cIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBBcHBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgb25DaGFuZ2VTZWFyY2hJbnB1dF0gPSB1c2VJbnB1dChcIlwiKTtcblxuICBjb25zdCBvblNlYXJjaCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBSb3V0ZXIucHVzaChgL2hhc2h0YWcvJHtzZWFyY2hJbnB1dH1gKTtcbiAgfSwgW3NlYXJjaElucHV0XSk7XG5cbiAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiA8TGluayBocmVmPVwiL1wiPuuFuOuTnOuyhOuTnDwvTGluaz4sXG4gICAgICBrZXk6IFwibm9kZWJvcmRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj7tlITroZztlYQ8L0xpbms+LFxuICAgICAga2V5OiBcInByb2ZpbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAoXG4gICAgICAgIDxJbnB1dC5TZWFyY2hcbiAgICAgICAgICBlbnRlckJ1dHRvbj1cIlNlYXJjaFwiXG4gICAgICAgICAgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIiB9fVxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dH1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VTZWFyY2hJbnB1dH1cbiAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9IC8vYW50ZCDsoITsmqlcbiAgICAgICAgLz5cbiAgICAgICksXG4gICAgICBrZXk6IFwic2VhcmNoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogPExpbmsgaHJlZj1cIi9zaWdudXBcIj7tmozsm5DqsIDsnoU8L0xpbms+LFxuICAgICAga2V5OiBcInNpZ251cFwiLFxuICAgIH0sXG4gIF07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxNZW51IG1vZGU9XCJob3Jpem9udGFsXCIgaXRlbXM9e21lbnVJdGVtc30+PC9NZW51PlxuICAgICAgPFJvdyBndXR0ZXI9ezh9PlxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxuICAgICAgICAgIHttZSA/IDxVc2VyUHJvZmlsZSAvPiA6IDxMb2dpbkZvcm0gLz59XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezEyfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubmF2ZXIuY29tXCJcbiAgICAgICAgICAgIHRhcmdldD17XCJfYmxhbmtcIn1cbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcG9lbmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICDrhKTsnbTrsoQg6rCA6riwXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvZGl2PlxuICApO1xufTtcbkFwcExheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBMaXN0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IFN0b3BPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCBVTkZPTExPV19SRVFVRVNUIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmNvbnN0IEZvbGxvd0xpc3QgPSAoeyBoZWFkZXIsIGRhdGEsIGxvYWRpbmcsIG9uQ2xpY2tNb3JlIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IG9uQ2FuY2VsID0gKGlkKSA9PiAoKSA9PiB7XG4gICAgaWYgKGhlYWRlciA9PT0gXCLtjJTroZzsnolcIikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxuICAgICAgICBkYXRhOiBpZCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCxcbiAgICAgIGRhdGE6IGlkLFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExpc3RcbiAgICAgIGhlYWRlcj17PGRpdj57aGVhZGVyfTwvZGl2Pn1cbiAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICBncmlkPXt7IGd1dHRlcjogNCwgeHM6IDIsIG1kOiAzIH19XG4gICAgICBsb2FkTW9yZT17XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW46IFwiMTBweCAwXCIgfX0+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrTW9yZX0gbG9hZGluZz17bG9hZGluZ30+XG4gICAgICAgICAgICDrjZQg67O06riwXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgICAgYm9yZGVyZWRcbiAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XG4gICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxuICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIGFjdGlvbnM9e1s8U3RvcE91dGxpbmVkIGtleT1cInN0b3BcIiBvbkNsaWNrPXtvbkNhbmNlbChpdGVtLmlkKX0gLz5dfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJkLk1ldGEgZGVzY3JpcHRpb249e2l0ZW0ubmlja25hbWV9IC8+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICl9XG4gICAgPjwvTGlzdD5cbiAgKTtcbn07XG5cbkZvbGxvd0xpc3QucHJvcFR5cGVzID0ge1xuICBoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2tNb3JlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxufTtcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0xpc3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGxvZ2luUmVxdWVzdEFjdGlvbiB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KCk7XG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dCgpO1xuICBjb25zdCB7IGxvZ0luTG9hZGluZywgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcblxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKTtcbiAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oeyBlbWFpbCwgcGFzc3dvcmQgfSkpO1xuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9nSW5FcnJvcikge1xuICAgICAgYWxlcnQobG9nSW5FcnJvcik7XG4gICAgfVxuICB9LCBbbG9nSW5FcnJvcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItZW1haWxcIj7snbTrqZTsnbw8L2xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICBuYW1lPVwidXNlci1lbWFpbFwiXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvbGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17bG9nSW5Mb2FkaW5nfT5cbiAgICAgICAgICDroZzqt7jsnbhcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gICAgICAgICAgPEJ1dHRvbj7tmozsm5DqsIDsnoU8L0J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9Gb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcblxuY29uc3QgTmlja25hbWVFZGl0Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgW25pY2tuYW1lLCBvbkNoYW5nZU5pY2tuYW1lXSA9IHVzZUlucHV0KG1lPy5uaWNrbmFtZSB8fCBcIlwiKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxuICAgICAgZGF0YTogbmlja25hbWUsXG4gICAgfSk7XG4gIH0sIFtuaWNrbmFtZV0pO1xuICByZXR1cm4gKFxuICAgIDxGb3JtPlxuICAgICAgPElucHV0LlNlYXJjaFxuICAgICAgICB2YWx1ZT17bmlja25hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZU5pY2tuYW1lfVxuICAgICAgICBhZGRvbkJlZm9yZT1cIuuLieuEpOyehFwiXG4gICAgICAgIGVudGVyQnV0dG9uPVwi7IiY7KCVXCJcbiAgICAgICAgb25TZWFyY2g9e29uU3VibWl0fVxuICAgICAgLz5cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOaWNrbmFtZUVkaXRGb3JtO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgQ2FyZCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGxvZ291dFJlcXVlc3RBY3Rpb24gfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvbGlua1wiO1xuXG5jb25zdCBVc2VyUHJvZmlsZSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IG1lLCBsb2dPdXRMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCBvbkxvZ091dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaChsb2dvdXRSZXF1ZXN0QWN0aW9uKCkpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIGFjdGlvbnM9e1tcbiAgICAgICAgPGRpdiBrZXk9XCJ0d2l0XCI+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7bWUuaWR9YH0+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAg7Ke57KixXG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICB7bWUuUG9zdHMubGVuZ3RofVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+LFxuICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2luZ3NcIj5cbiAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGVgfT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICDtjJTroZzsnolcbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIHttZS5Gb2xsb3dpbmdzLmxlbmd0aH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PixcbiAgICAgICAgPGRpdiBrZXk9XCJmb2xsb3dlcnNcIj5cbiAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGVgfT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICDtjJTroZzsm4xcbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIHttZS5Gb2xsb3dlcnMubGVuZ3RofVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+LFxuICAgICAgXX1cbiAgICA+XG4gICAgICA8Q2FyZC5NZXRhXG4gICAgICAgIGF2YXRhcj17XG4gICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7bWUuaWR9YH0+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPEF2YXRhcj57bWUubmlja25hbWVbMF19PC9BdmF0YXI+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICB9XG4gICAgICAgIHRpdGxlPXttZS5uaWNrbmFtZX1cbiAgICAgIC8+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uTG9nT3V0fSBsb2FkaW5nPXtsb2dPdXRMb2FkaW5nfT5cbiAgICAgICAg66Gc6re47JWE7JuDXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgdXNlSW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0dmFsdWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgaGFuZGxlciA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgc2V0dmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlciwgc2V0dmFsdWVdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlSW5wdXQ7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IE5pY2tuYW1lRWRpdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmlja25hbWVFZGl0Rm9ybVwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBGb2xsb3dMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0ZvbGxvd0xpc3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcbiAgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCxcbiAgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsXG4gIExPQURfTVlfSU5GT19SRVFVRVNULFxuICBMT0FEX1BPU1RTX1JFUVVFU1QsXG59IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcbmltcG9ydCB7IEVORCB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+XG4gIGF4aW9zLmdldCh1cmwsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0LmRhdGEpO1xuXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xuICBjb25zdCBbZm9sbG93ZXJzTGltaXQsIHNldEZvbGxvd2Vyc0xpbWl0XSA9IHVzZVN0YXRlKDMpO1xuICBjb25zdCBbZm9sbG93aW5nc0xpbWl0LCBzZXRGb2xsb3dpbmdzTGltaXRdID0gdXNlU3RhdGUoMyk7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCB7IGRhdGE6IGZvbGxvd2Vyc0RhdGEsIGZvbGxvd2VyRXJyb3IgfSA9IHVzZVNXUihcbiAgICBgaHR0cDovL2xvY2FsaG9zdDozMDc1L3VzZXIvZm9sbG93ZXJzP2xpbWl0PSR7Zm9sbG93ZXJzTGltaXR9YCxcbiAgICBmZXRjaGVyXG4gICk7XG4gIGNvbnN0IHsgZGF0YTogZm9sbG93aW5nc0RhdGEsIGZvbGxvd2luZ0Vycm9yIH0gPSB1c2VTV1IoXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzA3NS91c2VyL2ZvbGxvd2luZ3M/bGltaXQ9JHtmb2xsb3dpbmdzTGltaXR9YCxcbiAgICBmZXRjaGVyXG4gICk7XG5cbiAgLyogdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19SRVFVRVNULFxuICAgIH0pO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19SRVFVRVNULFxuICAgIH0pO1xuICB9LCBbXSk7XG4gICovXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIShtZSAmJiBtZS5pZCkpIHtcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH0sIFttZSAmJiBtZS5pZF0pO1xuXG4gIGNvbnN0IGxvYWRNb3JlRm9sbG93aW5ncyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRGb2xsb3dpbmdzTGltaXQoKHByZXYpID0+IHByZXYgKyAzKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGxvYWRNb3JlRm9sbG93ZXJzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEZvbGxvd2Vyc0xpbWl0KChwcmV2KSA9PiBwcmV2ICsgMyk7XG4gIH0sIFtdKTtcblxuICBpZiAoIW1lKSB7XG4gICAgcmV0dXJuIFwi64K0IOygleuztCDroZzrlKkg7KSRXCI7XG4gIH1cblxuICBpZiAoZm9sbG93ZXJFcnJvciB8fCBmb2xsb3dpbmdFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZm9sbG93ZXJFcnJvciB8fCBmb2xsb3dpbmdFcnJvcik7XG4gICAgcmV0dXJuIDxkaXY+7YyU66Gc7J6JL+2MlOuhnOybjCDroZzrlKkg7KSRIOyXkOufrOqwgCDrsJzsg53tlanri4jri6QuPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT7rgrQg7ZSE66Gc7ZWEPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgIDxOaWNrbmFtZUVkaXRGb3JtIC8+XG4gICAgICAgIDxGb2xsb3dMaXN0XG4gICAgICAgICAgaGVhZGVyPVwi7YyU66Gc7J6JXCJcbiAgICAgICAgICBkYXRhPXtmb2xsb3dpbmdzRGF0YX1cbiAgICAgICAgICBvbkNsaWNrTW9yZT17bG9hZE1vcmVGb2xsb3dpbmdzfVxuICAgICAgICAgIGxvYWRpbmc9eyFmb2xsb3dpbmdzRGF0YSAmJiAhZm9sbG93aW5nRXJyb3J9XG4gICAgICAgIC8+XG4gICAgICAgIDxGb2xsb3dMaXN0XG4gICAgICAgICAgaGVhZGVyPVwi7YyU66Gc7JuMXCJcbiAgICAgICAgICBkYXRhPXtmb2xsb3dlcnNEYXRhfVxuICAgICAgICAgIG9uQ2xpY2tNb3JlPXtsb2FkTW9yZUZvbGxvd2Vyc31cbiAgICAgICAgICBsb2FkaW5nPXshZm9sbG93ZXJzRGF0YSAmJiAhZm9sbG93ZXJFcnJvcn1cbiAgICAgICAgLz5cbiAgICAgIDwvQXBwTGF5b3V0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKFxuICBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiBcIlwiO1xuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gXCJcIjtcbiAgICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XG4gICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcbiAgICB9IC8vQ29va2llIOuEo+yWtOykmOyVvCDroZzqt7jsnbgg7IOI66Gc6rOg7LmoIOqwgOuKpVxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXG4gICAgfSk7XG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXG4gICAgfSk7XG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xuICAgIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xuaW1wb3J0IHBvc3QgZnJvbSBcIi4vcG9zdFwiO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSFlEUkFURTpcbiAgICAgIC8vY29uc29sZS5sb2coXCJIWURSQVRFXCIsIGFjdGlvbik7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgZGVmYXVsdDoge1xuICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICAgICAgdXNlcixcbiAgICAgICAgcG9zdCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcIi4uL3V0aWwvcHJvZHVjZVwiO1xuaW1wb3J0IHtcbiAgQUREX1BPU1RfRkFJTFVSRSxcbiAgQUREX1BPU1RfUkVRVUVTVCxcbiAgQUREX1BPU1RfU1VDQ0VTUyxcbiAgQUREX0NPTU1FTlRfRkFJTFVSRSxcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcbiAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcbiAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcbiAgTE9BRF9QT1NUU19GQUlMVVJFLFxuICBMT0FEX1BPU1RTX1JFUVVFU1QsXG4gIExPQURfUE9TVFNfU1VDQ0VTUyxcbiAgTElLRV9QT1NUX1JFUVVFU1QsXG4gIExJS0VfUE9TVF9TVUNDRVNTLFxuICBMSUtFX1BPU1RfRkFJTFVSRSxcbiAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcbiAgVU5MSUtFX1BPU1RfU1VDQ0VTUyxcbiAgVU5MSUtFX1BPU1RfRkFJTFVSRSxcbiAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxuICBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXG4gIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcbiAgUkVNT1ZFX0lNQUdFLFxuICBSRVRXRUVUX0ZBSUxVUkUsXG4gIFJFVFdFRVRfU1VDQ0VTUyxcbiAgUkVUV0VFVF9SRVFVRVNULFxuICBMT0FEX1BPU1RfUkVRVUVTVCxcbiAgTE9BRF9QT1NUX1NVQ0NFU1MsXG4gIExPQURfUE9TVF9GQUlMVVJFLFxuICBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCxcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsXG4gIExPQURfVVNFUl9QT1NUU19TVUNDRVNTLFxuICBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcbiAgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXG4gIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxufSBmcm9tIFwiLi4vdHlwZVwiO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBtYWluUG9zdHM6IFtdLFxuICBpbWFnZVBhdGhzOiBbXSxcbiAgaGFzTW9yZVBvc3Q6IHRydWUsXG4gIHNpbmdsZVBvc3Q6IG51bGwsXG5cbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxuICBhZGRQb3N0RG9uZTogZmFsc2UsXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcblxuICBsaWtlUG9zdExvYWRpbmc6IGZhbHNlLFxuICBsaWtlUG9zdERvbmU6IGZhbHNlLFxuICBsaWtlUG9zdEVycm9yOiBudWxsLFxuXG4gIHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLFxuICB1cGxvYWRJbWFnZXNEb25lOiBmYWxzZSxcbiAgdXBsb2FkSW1hZ2VzRXJyb3I6IG51bGwsXG5cbiAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxuICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXG4gIHVubGlrZVBvc3RFcnJvcjogbnVsbCxcblxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxuXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXG5cbiAgcmV0d2VldExvYWRpbmc6IGZhbHNlLFxuICByZXR3ZWV0RG9uZTogZmFsc2UsXG4gIHJldHdlZXRFcnJvcjogbnVsbCxcblxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcbiAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxuXG4gIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsXG4gIGxvYWRQb3N0RG9uZTogZmFsc2UsXG4gIGxvYWRQb3N0RXJyb3I6IG51bGwsXG5cbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXG4gIGRhdGEsXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcbiAgZGF0YSxcbn0pO1xuXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIFJFTU9WRV9JTUFHRTpcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuZmlsdGVyKCh2LCBpKSA9PiBpICE9PSBhY3Rpb24uZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBbXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xuICAgICAgICBwb3N0Lkxpa2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XG4gICAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxuICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVDpcbiAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfVVNFUl9QT1NUU19TVUNDRVNTOlxuICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUzpcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTsgLy8gYWN0aW9uLmRhdGHrpbwgY29uY2F07ZW07IScIOq4sOyhtCDrjbDsnbTthLDsl5Ag7LaU6rCAXG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0ID0gYWN0aW9uLmRhdGEubGVuZ3RoID09PSAxMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkU6XG4gICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuc2luZ2xlUG9zdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBjYXNlIFJFVFdFRVRfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVUV0VFVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFVFdFRVRfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkXG4gICAgICAgICk7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxuICAgICAgICAvL2NvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoXG4gICAgICAgIC8vICAgKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZFxuICAgICAgICAvLyApO1xuICAgICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xuICAgICAgICAvL3Bvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcbiAgICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XG4gICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcblxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XG4gICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufTtcbi8vaW1tZXIg7JOw66m0IC4uLnN0YXRlIOyViCDsjajrj4Qg65CoIHN0YXRlIOuMgOyLoCBkcmFmdFxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCIuLi91dGlsL3Byb2R1Y2VcIjtcbmltcG9ydCB7XG4gIExPR19JTl9GQUlMVVJFLFxuICBMT0dfSU5fU1VDQ0VTUyxcbiAgTE9HX09VVF9SRVFVRVNULFxuICBMT0dfSU5fUkVRVUVTVCxcbiAgTE9HX09VVF9GQUlMVVJFLFxuICBMT0dfT1VUX1NVQ0NFU1MsXG4gIFNJR05fVVBfRkFJTFVSRSxcbiAgU0lHTl9VUF9SRVFVRVNULFxuICBTSUdOX1VQX1NVQ0NFU1MsXG4gIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxuICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcbiAgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXG4gIEFERF9QT1NUX1RPX01FLFxuICBSRU1PVkVfUE9TVF9PRl9NRSxcbiAgRk9MTE9XX1JFUVVFU1QsXG4gIEZPTExPV19TVUNDRVNTLFxuICBGT0xMT1dfRkFJTFVSRSxcbiAgVU5GT0xMT1dfUkVRVUVTVCxcbiAgVU5GT0xMT1dfU1VDQ0VTUyxcbiAgVU5GT0xMT1dfRkFJTFVSRSxcbiAgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXG4gIExPQURfTVlfSU5GT19SRVFVRVNULFxuICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcbiAgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCxcbiAgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcbiAgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcbiAgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsXG4gIExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxuICBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcbiAgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsXG4gIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxuICBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcbiAgTE9BRF9VU0VSX1JFUVVFU1QsXG4gIExPQURfVVNFUl9TVUNDRVNTLFxuICBMT0FEX1VTRVJfRkFJTFVSRSxcbn0gZnJvbSBcIi4uL3R5cGVcIjtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLFxuICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXG4gIGxvYWRNeUluZm9FcnJvcjogbnVsbCxcblxuICBsb2FkRm9sbG93ZXJzTG9hZGluZzogZmFsc2UsXG4gIGxvYWRGb2xsb3dlcnNEb25lOiBmYWxzZSxcbiAgbG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLFxuXG4gIGxvYWRGb2xsb3dpbmdzTG9hZGluZzogZmFsc2UsXG4gIGxvYWRGb2xsb3dpbmdzRG9uZTogZmFsc2UsXG4gIGxvYWRGb2xsb3dpbmdzRXJyb3I6IG51bGwsXG5cbiAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSxcbiAgbG9hZFVzZXJEb25lOiBmYWxzZSxcbiAgbG9hZFVzZXJFcnJvcjogbnVsbCxcblxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxuICBsb2dJbkRvbmU6IGZhbHNlLFxuICBsb2dJbkVycm9yOiBudWxsLFxuXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLFxuICBsb2dPdXREb25lOiBmYWxzZSxcbiAgbG9nT3V0RXJyb3I6IG51bGwsXG5cbiAgc2lnblVwTG9hZGluZzogZmFsc2UsXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxuICBzaWduVXBFcnJvcjogbnVsbCxcblxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxuICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxuXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLFxuICBmb2xsb3dEb25lOiBmYWxzZSxcbiAgZm9sbG93RXJyb3I6IG51bGwsXG5cbiAgcmVtb3ZlRm9sbG93ZXJMb2FkaW5nOiBmYWxzZSxcbiAgcmVtb3ZlRm9sbG93ZXJEb25lOiBmYWxzZSxcbiAgcmVtb3ZlRm9sbG93ZXJFcnJvcjogbnVsbCxcblxuICB1bkZvbGxvd0xvYWRpbmc6IGZhbHNlLFxuICB1bkZvbGxvd0RvbmU6IGZhbHNlLFxuICB1bkZvbGxvd0Vycm9yOiBudWxsLFxuXG4gIHVzZXJJbmZvOiBudWxsLFxuICBtZTogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xuICByZXR1cm4geyB0eXBlOiBMT0dfSU5fUkVRVUVTVCwgZGF0YSB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHR5cGU6IExPR19PVVRfUkVRVUVTVCB9O1xufTtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51c2VySW5mbyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGRyYWZ0Lm1lLkZvbGxvd2Vycy5maWx0ZXIoXG4gICAgICAgICAgKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZFxuICAgICAgICApO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZSA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dFcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LnVuRm9sbG93TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnVuRm9sbG93RG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVuRm9sbG93RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxuICAgICAgICBkcmFmdC51bkZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudW5Gb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxuICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSBcIi4vcG9zdFwiO1xuaW1wb3J0IHVzZXJTYWdhIGZyb20gXCIuL3VzZXJcIjtcblxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDc1XCI7XG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlOyAvL+y/oO2CpCDsoITri6xcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICB5aWVsZCBhbGwoW2ZvcmsocG9zdFNhZ2EpLCBmb3JrKHVzZXJTYWdhKV0pO1xufVxuIiwiaW1wb3J0IHsgZm9yaywgYWxsLCB0YWtlTGF0ZXN0LCBwdXQsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCB7XG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXG4gIEFERF9DT01NRU5UX1NVQ0NFU1MsXG4gIEFERF9QT1NUX0ZBSUxVUkUsXG4gIEFERF9QT1NUX1JFUVVFU1QsXG4gIEFERF9QT1NUX1NVQ0NFU1MsXG4gIEFERF9QT1NUX1RPX01FLFxuICBMSUtFX1BPU1RfRkFJTFVSRSxcbiAgTElLRV9QT1NUX1JFUVVFU1QsXG4gIExJS0VfUE9TVF9TVUNDRVNTLFxuICBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsXG4gIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxuICBMT0FEX1BPU1RTX0ZBSUxVUkUsXG4gIExPQURfUE9TVFNfUkVRVUVTVCxcbiAgTE9BRF9QT1NUU19TVUNDRVNTLFxuICBMT0FEX1BPU1RfRkFJTFVSRSxcbiAgTE9BRF9QT1NUX1JFUVVFU1QsXG4gIExPQURfUE9TVF9TVUNDRVNTLFxuICBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcbiAgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsXG4gIExPQURfVVNFUl9QT1NUU19TVUNDRVNTLFxuICBSRU1PVkVfUE9TVF9GQUlMVVJFLFxuICBSRU1PVkVfUE9TVF9PRl9NRSxcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcbiAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcbiAgUkVUV0VFVF9GQUlMVVJFLFxuICBSRVRXRUVUX1JFUVVFU1QsXG4gIFJFVFdFRVRfU1VDQ0VTUyxcbiAgVU5MSUtFX1BPU1RfRkFJTFVSRSxcbiAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcbiAgVU5MSUtFX1BPU1RfU1VDQ0VTUyxcbiAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxuICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXG4gIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcbn0gZnJvbSBcIi4uL3R5cGVcIjtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvcG9zdFwiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7IC8v66eI7KeA66eJIOqyg+unjFxuICAvL3Rocm90dGxlKFwiQUREX1BPU1RfUkVRVUVTVFwiLCBhZGRQb3N0LDIwMDApIDLstIgg64+Z7JWIIDHrsogg7Iuk7ZaJXG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Bvc3QvaW1hZ2VzXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2h1cGxvYWRJbWFnZXMoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpOyAvL+uniOyngOuniSDqsoPrp4xcbiAgLy90aHJvdHRsZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwyMDAwKSAy7LSIIOuPmeyViCAx67KIIOyLpO2WiVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShsYXN0SWQpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApOyAvL2dldOyXkOyEnCDrjbDsnbTthLAg64Sj6riwID8gYT1iIOydtOufsCDsi53snLzroZxcbn1cblxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmxhc3RJZCk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpOyAvL+uniOyngOuniSDqsoPrp4xcbiAgLy90aHJvdHRsZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwyMDAwKSAy7LSIIOuPmeyViCAx67KIIOyLpO2WiSBSRVFVU0VU64qUIOuztOuCtOynkFxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGxvYWRQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3QvJHtkYXRhfWApOyAvL2dldOyXkOyEnCDrjbDsnbTthLAg64Sj6riwID8gYT1iIOydtOufsCDsi53snLzroZxcbn1cblxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpOyAvL+uniOyngOuniSDqsoPrp4xcbiAgLy90aHJvdHRsZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwyMDAwKSAy7LSIIOuPmeyViCAx67KIIOyLpO2WiSBSRVFVU0VU64qUIOuztOuCtOynkFxufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gbG9hZFVzZXJQb3N0QVBJKGRhdGEsIGxhc3RJZCkge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9L3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApOyAvL2dldOyXkOyEnCDrjbDsnbTthLAg64Sj6riwID8gYT1iIOydtOufsCDsi53snLzroZxcbn1cblxuZnVuY3Rpb24qIGxvYWRVc2VyUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyUG9zdEFQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCwgbG9hZFVzZXJQb3N0KTsgLy/rp4jsp4Drp4kg6rKD66eMXG4gIC8vdGhyb3R0bGUoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGFkZFBvc3QsMjAwMCkgMuy0iCDrj5nslYggMeuyiCDsi6TtlokgUkVRVVNFVOuKlCDrs7TrgrTsp5Bcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBsb2FkSGFzaHRhZ1Bvc3RBUEkoZGF0YSwgbGFzdElkKSB7XG4gIHJldHVybiBheGlvcy5nZXQoXG4gICAgYC9oYXNodGFnLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpfT9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gXG4gICk7IC8vZ2V07JeQ7IScIOuNsOydtO2EsCDrhKPquLAgPyBhPWIg7J2065+wIOyLneycvOuhnFxuICAvL2VuY29kZVVSSUNvbXBvbmVudCAg7ZWc6riA7J2EIOyYgeusuOyekOuhnCDrsJTqv4hcbn1cbmZ1bmN0aW9uKiBsb2FkSGFzaHRhZ1Bvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkSGFzaHRhZ1Bvc3RBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkSGFzaHRhZ1Bvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsIGxvYWRIYXNodGFnUG9zdCk7IC8v66eI7KeA66eJIOqyg+unjFxuICAvL3Rocm90dGxlKFwiQUREX1BPU1RfUkVRVUVTVFwiLCBhZGRQb3N0LDIwMDApIDLstIgg64+Z7JWIIDHrsogg7Iuk7ZaJIFJFUVVTRVTripQg67O064K07KeQXG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gcmV0d2VldEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGF9L3JldHdlZXRgKTtcbn1cblxuZnVuY3Rpb24qIHJldHdlZXQoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZXR3ZWV0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IFJFVFdFRVRfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hSZXR3ZWV0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmV0d2VldCk7IC8v66eI7KeA66eJIOqyg+unjFxuICAvL3Rocm90dGxlKFwiQUREX1BPU1RfUkVRVUVTVFwiLCBhZGRQb3N0LDIwMDApIDLstIgg64+Z7JWIIDHrsogg7Iuk7ZaJXG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX1gKTtcbn1cblxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcblxuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTsgLy/rp4jsp4Drp4kg6rKD66eMXG4gIC8vdGhyb3R0bGUoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGFkZFBvc3QsMjAwMCkgMuy0iCDrj5nslYggMeuyiCDsi6Ttlolcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7IC8v66eI7KeA66eJIOqyg+unjFxuICAvL3Rocm90dGxlKFwiQUREX1BPU1RfUkVRVUVTVFwiLCBhZGRQb3N0LDIwMDApIDLstIgg64+Z7JWIIDHrsogg7Iuk7ZaJXG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApOyAvL3BhdGNoIOydvOu2gOu2hCDsiJjsoJVcbn1cblxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpOyAvL+uniOyngOuniSDqsoPrp4xcbiAgLy90aHJvdHRsZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwyMDAwKSAy7LSIIOuPmeyViCAx67KIIOyLpO2WiVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcbn1cblxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7IC8v66eI7KeA66eJIOqyg+unjFxuICAvL3Rocm90dGxlKFwiQUREX1BPU1RfUkVRVUVTVFwiLCBhZGRQb3N0LDIwMDApIDLstIgg64+Z7JWIIDHrsogg7Iuk7ZaJXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBmb3JrKHdhdGNoQWRkUG9zdCksXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcbiAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxuICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcbiAgICBmb3JrKHdhdGNodXBsb2FkSW1hZ2VzKSxcbiAgICBmb3JrKHdhdGNoUmV0d2VldCksXG4gICAgZm9yayh3YXRjaExvYWRQb3N0KSxcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXJQb3N0KSxcbiAgICBmb3JrKHdhdGNoTG9hZEhhc2h0YWdQb3N0KSxcbiAgXSk7XG59XG4iLCJpbXBvcnQge1xuICBMT0dfSU5fRkFJTFVSRSxcbiAgTE9HX0lOX1NVQ0NFU1MsXG4gIExPR19PVVRfUkVRVUVTVCxcbiAgTE9HX0lOX1JFUVVFU1QsXG4gIExPR19PVVRfRkFJTFVSRSxcbiAgTE9HX09VVF9TVUNDRVNTLFxuICBTSUdOX1VQX0ZBSUxVUkUsXG4gIFNJR05fVVBfUkVRVUVTVCxcbiAgU0lHTl9VUF9TVUNDRVNTLFxuICBGT0xMT1dfUkVRVUVTVCxcbiAgVU5GT0xMT1dfUkVRVUVTVCxcbiAgRk9MTE9XX1NVQ0NFU1MsXG4gIEZPTExPV19GQUlMVVJFLFxuICBVTkZPTExPV19TVUNDRVNTLFxuICBVTkZPTExPV19GQUlMVVJFLFxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcbiAgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXG4gIExPQURfTVlfSU5GT19GQUlMVVJFLFxuICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcbiAgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXG4gIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxuICBMT0FEX0ZPTExPV0VSU19SRVFVRVNULFxuICBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxuICBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxuICBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcbiAgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXG4gIExPQURfRk9MTE9XSU5HU19SRVFVRVNULFxuICBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCxcbiAgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsXG4gIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxuICBMT0FEX1VTRVJfUkVRVUVTVCxcbiAgTE9BRF9VU0VSX1NVQ0NFU1MsXG4gIExPQURfVVNFUl9GQUlMVVJFLFxufSBmcm9tIFwiLi4vdHlwZVwiO1xuXG5pbXBvcnQge1xuICBhbGwsXG4gIGZvcmssXG4gIHB1dCxcbiAgdGFrZUV2ZXJ5LFxuICB0YWtlTGVhZGluZyxcbiAgdGFrZUxhdGVzdCxcbiAgY2FsbCxcbn0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3VzZXIvbG9naW5cIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XG5cbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuXG4gICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCkge1xuICB5aWVsZCB0YWtlRXZlcnkoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTsgLy/rsJjrs7Vcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3VzZXIvbG9nb3V0XCIpO1xufVxuXG5mdW5jdGlvbiogbG9nT3V0KCkge1xuICB0cnkge1xuICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoTG9nb3V0KCkge1xuICB5aWVsZCB0YWtlTGVhZGluZyhMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7IC8v7LKrIOuyiOynuCDqsoPrp4xcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3VzZXJcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hTaW5nVXAoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApOyAvL+yyqyDrsojsp7gg6rKD66eMXG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vZm9sbG93YCk7XG59XG5cbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcblxuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG5cbiAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KEZPTExPV19SRVFVRVNULCBmb2xsb3cpOyAvL+uwmOuztVxufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyLyR7ZGF0YX0vZm9sbG93YCk7XG59XG5cbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XG5cbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuXG4gICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XG4gIHlpZWxkIHRha2VFdmVyeShVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7IC8v67CY67O1XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSSgpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChcIi91c2VyXCIpO1xufVxuXG5mdW5jdGlvbiogbG9hZE15SW5mbyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCkge1xuICB5aWVsZCB0YWtlRXZlcnkoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pOyAvL+uwmOuztVxufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChgdXNlci8ke2RhdGF9YCk7XG59XG5cbmZ1bmN0aW9uKiBsb2FkVXNlcihhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcblxuICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKSB7XG4gIHlpZWxkIHRha2VFdmVyeShMT0FEX1VTRVJfUkVRVUVTVCwgbG9hZFVzZXIpOyAvL+uwmOuztVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBsb2FkRm9sbG93ZXJzQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChcIi91c2VyL2ZvbGxvd2Vyc1wiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRGb2xsb3dlcnMoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93ZXJzQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcblxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dlcnMoKSB7XG4gIHlpZWxkIHRha2VFdmVyeShMT0FEX0ZPTExPV0VSU19SRVFVRVNULCBsb2FkRm9sbG93ZXJzKTsgLy/rsJjrs7Vcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gbG9hZEZvbGxvd2luZ3NBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KFwiL3VzZXIvZm9sbG93aW5nc1wiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRGb2xsb3dpbmdzKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2luZ3NBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuXG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5zKCkge1xuICB5aWVsZCB0YWtlRXZlcnkoTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIGxvYWRGb2xsb3dpbmdzKTsgLy/rsJjrs7Vcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGNoYW5nZU5pY2tuYW1lQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKFwiL3VzZXIvbmlja25hbWVcIiwgeyBuaWNrbmFtZTogZGF0YSB9KTtcbn1cblxuZnVuY3Rpb24qIGNoYW5nZU5pY2tuYW1lKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY2hhbmdlTmlja25hbWVBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hDaGFuZ2VOaWNrbmFtZSgpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBjaGFuZ2VOaWNrbmFtZSk7IC8v67CY67O1XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gcmVtb3ZlRm9sbG93ZXJBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9mb2xsb3dlci8ke2RhdGF9YCk7XG59XG5cbmZ1bmN0aW9uKiByZW1vdmVGb2xsb3dlcihhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2VyQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcblxuICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlRm9sbG93ZXIoKSB7XG4gIHlpZWxkIHRha2VFdmVyeShSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgcmVtb3ZlRm9sbG93ZXIpOyAvL+uwmOuztVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgZm9yayh3YXRjaENoYW5nZU5pY2tuYW1lKSxcbiAgICBmb3JrKHdhdGNoUmVtb3ZlRm9sbG93ZXIpLFxuICAgIGZvcmsod2F0Y2hMb2dpbiksXG4gICAgZm9yayh3YXRjaExvZ291dCksXG4gICAgZm9yayh3YXRjaFNpbmdVcCksXG4gICAgZm9yayh3YXRjaEZvbGxvdyksXG4gICAgZm9yayh3YXRjaFVuZm9sbG93KSxcbiAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXG4gICAgZm9yayh3YXRjaExvYWRGb2xsb3dpbnMpLFxuICAgIGZvcmsod2F0Y2hMb2FkRm9sbG93ZXJzKSxcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXIpLFxuICBdKTtcbn1cbiIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4uL3NhZ2FzXCI7XG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XG4gIGNvbnN0IGVuaGFuY2VyID1cbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcbiAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxuICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBlbmhhbmNlcik7XG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTsgLy9zYWdhVGFzayDshJzrsoTsgqzsnbTrk5zrnpzrjZTrp4HsmqlcbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcbiIsImV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gXCJMT0FEX01ZX0lORk9fRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gXCJMT0FEX01ZX0lORk9fUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gXCJMT0FEX01ZX0lORk9fU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSBcIkxPQURfVVNFUl9GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSBcIkxPQURfVVNFUl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSBcIkxPQURfVVNFUl9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFID0gXCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUID0gXCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTID0gXCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gXCJTSUdOX1VQX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcIlNJR05fVVBfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9IFwiU0lHTl9VUF9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9IFwiRk9MTE9XX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9IFwiRk9MTE9XX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9IFwiRk9MTE9XX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfRkFJTFVSRSA9IFwiUkVUV0VFVF9GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gXCJSRVRXRUVUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSBcIlJFVFdFRVRfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gXCJVUExPQURfSU1BR0VTX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSBcIlVQTE9BRF9JTUFHRVNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9IFwiVVBMT0FEX0lNQUdFU19TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSBcIlJFTU9WRV9JTUFHRVwiO1xuXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9IFwiVU5GT0xMT1dfRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSBcIlVORk9MTE9XX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gXCJVTkZPTExPV19TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSBcIkxPR19PVVRfRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9IFwiTE9HX09VVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJMT0dfT1VUX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9IFwiQUREX1BPU1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gXCJMT0FEX1BPU1RTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfUE9TVFNfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9QT1NUU19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9IFwiTE9BRF9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9IFwiTE9BRF9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSBcIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gXCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9IFwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUgPSBcIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFXCI7XG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgPSBcIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSBcIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gXCJSRU1PVkVfUE9TVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSBcIlJFTU9WRV9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTID0gXCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gXCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gXCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gXCJBRERfQ09NTUVOVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9IFwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9IFwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9IFwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gXCJMSUtFX1BPU1RfRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gXCJMSUtFX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gXCJMSUtFX1BPU1RfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9IFwiVU5MSUtFX1BPU1RfRkFJTFVSRVwiO1xuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSBcIlVOTElLRV9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gXCJVTkxJS0VfUE9TVF9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9IFwiQUREX1BPU1RfVE9fTUVcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9IFwiUkVNT1ZFX1BPU1RfT0ZfTUVcIjtcbiIsImltcG9ydCBwcm9kdWNlLCB7IGVuYWJsZUVTNSB9IGZyb20gXCJpbW1lclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKC4uLmFyZ3MpID0+IHtcclxuICBlbmFibGVFUzUoKTtcclxuICByZXR1cm4gcHJvZHVjZSguLi5hcmdzKTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9