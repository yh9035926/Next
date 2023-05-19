webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type */ "./type/index.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var _marked = /*#__PURE__*/_regeneratorRuntime().mark(logIn),
  _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogin),
  _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(logOut),
  _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogout),
  _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(signUp),
  _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(watchSingUp),
  _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(follow),
  _marked8 = /*#__PURE__*/_regeneratorRuntime().mark(watchFollow),
  _marked9 = /*#__PURE__*/_regeneratorRuntime().mark(unfollow),
  _marked10 = /*#__PURE__*/_regeneratorRuntime().mark(watchUnfollow),
  _marked11 = /*#__PURE__*/_regeneratorRuntime().mark(loadMyInfo),
  _marked12 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadMyInfo),
  _marked13 = /*#__PURE__*/_regeneratorRuntime().mark(loadUser),
  _marked14 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadUser),
  _marked15 = /*#__PURE__*/_regeneratorRuntime().mark(loadFollowers),
  _marked16 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadFollowers),
  _marked17 = /*#__PURE__*/_regeneratorRuntime().mark(loadFollowings),
  _marked18 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadFollowins),
  _marked19 = /*#__PURE__*/_regeneratorRuntime().mark(changeNickname),
  _marked20 = /*#__PURE__*/_regeneratorRuntime().mark(watchChangeNickname),
  _marked21 = /*#__PURE__*/_regeneratorRuntime().mark(removeFollower),
  _marked22 = /*#__PURE__*/_regeneratorRuntime().mark(watchRemoveFollower),
  _marked23 = /*#__PURE__*/_regeneratorRuntime().mark(userSaga);



//-------------------------------------------------------------------
function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("/user/login", data);
}
function logIn(action) {
  var result;
  return _regeneratorRuntime().wrap(function logIn$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        _context.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logInAPI, action.data);
      case 3:
        result = _context.sent;
        _context.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          //put은 dipatch

          type: _type__WEBPACK_IMPORTED_MODULE_0__["LOG_IN_SUCCESS"],
          data: result.data
        });
      case 6:
        _context.next = 12;
        break;
      case 8:
        _context.prev = 8;
        _context.t0 = _context["catch"](0);
        _context.next = 12;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _type__WEBPACK_IMPORTED_MODULE_0__["LOG_IN_FAILURE"],
          error: _context.t0.response.data
        });
      case 12:
      case "end":
        return _context.stop();
    }
  }, _marked, null, [[0, 8]]);
}
function watchLogin() {
  return _regeneratorRuntime().wrap(function watchLogin$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["LOG_IN_REQUEST"], logIn);
      case 2:
      case "end":
        return _context2.stop();
    }
  }, _marked2);
}
//-------------------------------------------------------------------

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("/user/logout");
}
function logOut() {
  return _regeneratorRuntime().wrap(function logOut$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        _context3.prev = 0;
        _context3.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logOutAPI);
      case 3:
        _context3.next = 5;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          //put은 dipatch
          type: _type__WEBPACK_IMPORTED_MODULE_0__["LOG_OUT_SUCCESS"]
        });
      case 5:
        _context3.next = 11;
        break;
      case 7:
        _context3.prev = 7;
        _context3.t0 = _context3["catch"](0);
        _context3.next = 11;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _type__WEBPACK_IMPORTED_MODULE_0__["LOG_OUT_FAILURE"],
          error: _context3.t0.response.data
        });
      case 11:
      case "end":
        return _context3.stop();
    }
  }, _marked3, null, [[0, 7]]);
}
function watchLogout() {
  return _regeneratorRuntime().wrap(function watchLogout$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        _context4.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLeading"])(_type__WEBPACK_IMPORTED_MODULE_0__["LOG_OUT_REQUEST"], logOut);
      case 2:
      case "end":
        return _context4.stop();
    }
  }, _marked4);
}

//-------------------------------------------------------------------

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("/user", data);
}
function signUp(action) {
  var result;
  return _regeneratorRuntime().wrap(function signUp$(_context5) {
    while (1) switch (_context5.prev = _context5.next) {
      case 0:
        _context5.prev = 0;
        _context5.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpAPI, action.data);
      case 3:
        result = _context5.sent;
        console.log(result);
        _context5.next = 7;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          //put은 dipatch
          type: _type__WEBPACK_IMPORTED_MODULE_0__["SIGN_UP_SUCCESS"]
        });
      case 7:
        _context5.next = 13;
        break;
      case 9:
        _context5.prev = 9;
        _context5.t0 = _context5["catch"](0);
        _context5.next = 13;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _type__WEBPACK_IMPORTED_MODULE_0__["SIGN_UP_FAILURE"],
          error: _context5.t0.response.data
        });
      case 13:
      case "end":
        return _context5.stop();
    }
  }, _marked5, null, [[0, 9]]);
}
function watchSingUp() {
  return _regeneratorRuntime().wrap(function watchSingUp$(_context6) {
    while (1) switch (_context6.prev = _context6.next) {
      case 0:
        _context6.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_0__["SIGN_UP_REQUEST"], signUp);
      case 2:
      case "end":
        return _context6.stop();
    }
  }, _marked6);
}

//-------------------------------------------------------------------

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].patch("/user/".concat(data, "/follow"));
}
function follow(action) {
  var result;
  return _regeneratorRuntime().wrap(function follow$(_context7) {
    while (1) switch (_context7.prev = _context7.next) {
      case 0:
        _context7.prev = 0;
        _context7.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(followAPI, action.data);
      case 3:
        result = _context7.sent;
        _context7.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          //put은 dipatch

          type: _type__WEBPACK_IMPORTED_MODULE_0__["FOLLOW_SUCCESS"],
          data: result.data
        });
      case 6:
        _context7.next = 12;
        break;
      case 8:
        _context7.prev = 8;
        _context7.t0 = _context7["catch"](0);
        _context7.next = 12;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _type__WEBPACK_IMPORTED_MODULE_0__["FOLLOW_FAILURE"],
          error: _context7.t0.response.data
        });
      case 12:
      case "end":
        return _context7.stop();
    }
  }, _marked7, null, [[0, 8]]);
}
function watchFollow() {
  return _regeneratorRuntime().wrap(function watchFollow$(_context8) {
    while (1) switch (_context8.prev = _context8.next) {
      case 0:
        _context8.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["FOLLOW_REQUEST"], follow);
      case 2:
      case "end":
        return _context8.stop();
    }
  }, _marked8);
}

//-----------------------------------------------------------------------
function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"]("/user/".concat(data, "/follow"));
}
function unfollow(action) {
  var result;
  return _regeneratorRuntime().wrap(function unfollow$(_context9) {
    while (1) switch (_context9.prev = _context9.next) {
      case 0:
        _context9.prev = 0;
        _context9.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unfollowAPI, action.data);
      case 3:
        result = _context9.sent;
        _context9.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          //put은 dipatch

          type: _type__WEBPACK_IMPORTED_MODULE_0__["UNFOLLOW_SUCCESS"],
          data: result.data
        });
      case 6:
        _context9.next = 12;
        break;
      case 8:
        _context9.prev = 8;
        _context9.t0 = _context9["catch"](0);
        _context9.next = 12;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _type__WEBPACK_IMPORTED_MODULE_0__["UNFOLLOW_FAILURE"],
          error: _context9.t0.response.data
        });
      case 12:
      case "end":
        return _context9.stop();
    }
  }, _marked9, null, [[0, 8]]);
}
function watchUnfollow() {
  return _regeneratorRuntime().wrap(function watchUnfollow$(_context10) {
    while (1) switch (_context10.prev = _context10.next) {
      case 0:
        _context10.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["UNFOLLOW_REQUEST"], unfollow);
      case 2:
      case "end":
        return _context10.stop();
    }
  }, _marked10);
}

//-------------------------------------------------------------------
function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("/user");
}
function loadMyInfo(action) {
  var result;
  return _regeneratorRuntime().wrap(function loadMyInfo$(_context11) {
    while (1) switch (_context11.prev = _context11.next) {
      case 0:
        _context11.prev = 0;
        _context11.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMyInfoAPI, action.data);
      case 3:
        result = _context11.sent;
        _context11.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          //put은 dipatch

          type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_MY_INFO_SUCCESS"],
          data: result.data
        });
      case 6:
        _context11.next = 12;
        break;
      case 8:
        _context11.prev = 8;
        _context11.t0 = _context11["catch"](0);
        _context11.next = 12;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_MY_INFO_FAILURE"],
          error: _context11.t0.response.data
        });
      case 12:
      case "end":
        return _context11.stop();
    }
  }, _marked11, null, [[0, 8]]);
}
function watchLoadMyInfo() {
  return _regeneratorRuntime().wrap(function watchLoadMyInfo$(_context12) {
    while (1) switch (_context12.prev = _context12.next) {
      case 0:
        _context12.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
      case 2:
      case "end":
        return _context12.stop();
    }
  }, _marked12);
}

//-------------------------------------------------------------------
function loadUserAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("user/".concat(data));
}
function loadUser(action) {
  var result;
  return _regeneratorRuntime().wrap(function loadUser$(_context13) {
    while (1) switch (_context13.prev = _context13.next) {
      case 0:
        _context13.prev = 0;
        _context13.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserAPI, action.data);
      case 3:
        result = _context13.sent;
        _context13.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          //put은 dipatch

          type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_USER_SUCCESS"],
          data: result.data
        });
      case 6:
        _context13.next = 12;
        break;
      case 8:
        _context13.prev = 8;
        _context13.t0 = _context13["catch"](0);
        _context13.next = 12;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_USER_FAILURE"],
          error: _context13.t0.response.data
        });
      case 12:
      case "end":
        return _context13.stop();
    }
  }, _marked13, null, [[0, 8]]);
}
function watchLoadUser() {
  return _regeneratorRuntime().wrap(function watchLoadUser$(_context14) {
    while (1) switch (_context14.prev = _context14.next) {
      case 0:
        _context14.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["LOAD_USER_REQUEST"], loadUser);
      case 2:
      case "end":
        return _context14.stop();
    }
  }, _marked14);
}
//-------------------------------------------------------------------
function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("/user/followers", data);
}
function loadFollowers(action) {
  var result;
  return _regeneratorRuntime().wrap(function loadFollowers$(_context15) {
    while (1) switch (_context15.prev = _context15.next) {
      case 0:
        _context15.prev = 0;
        _context15.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowersAPI, action.data);
      case 3:
        result = _context15.sent;
        _context15.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          //put은 dipatch

          type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_FOLLOWERS_SUCCESS"],
          data: result.data
        });
      case 6:
        _context15.next = 12;
        break;
      case 8:
        _context15.prev = 8;
        _context15.t0 = _context15["catch"](0);
        _context15.next = 12;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_FOLLOWERS_FAILURE"],
          error: _context15.t0.response.data
        });
      case 12:
      case "end":
        return _context15.stop();
    }
  }, _marked15, null, [[0, 8]]);
}
function watchLoadFollowers() {
  return _regeneratorRuntime().wrap(function watchLoadFollowers$(_context16) {
    while (1) switch (_context16.prev = _context16.next) {
      case 0:
        _context16.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);
      case 2:
      case "end":
        return _context16.stop();
    }
  }, _marked16);
}
//-------------------------------------------------------------------
function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("/user/followings", data);
}
function loadFollowings(action) {
  var result;
  return _regeneratorRuntime().wrap(function loadFollowings$(_context17) {
    while (1) switch (_context17.prev = _context17.next) {
      case 0:
        _context17.prev = 0;
        _context17.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowingsAPI, action.data);
      case 3:
        result = _context17.sent;
        _context17.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          //put은 dipatch

          type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_FOLLOWINGS_SUCCESS"],
          data: result.data
        });
      case 6:
        _context17.next = 12;
        break;
      case 8:
        _context17.prev = 8;
        _context17.t0 = _context17["catch"](0);
        _context17.next = 12;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _type__WEBPACK_IMPORTED_MODULE_0__["LOAD_FOLLOWINGS_FAILURE"],
          error: _context17.t0.response.data
        });
      case 12:
      case "end":
        return _context17.stop();
    }
  }, _marked17, null, [[0, 8]]);
}
function watchLoadFollowins() {
  return _regeneratorRuntime().wrap(function watchLoadFollowins$(_context18) {
    while (1) switch (_context18.prev = _context18.next) {
      case 0:
        _context18.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);
      case 2:
      case "end":
        return _context18.stop();
    }
  }, _marked18);
}

//-------------------------------------------------------------------

function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].patch("/user/nickname", {
    nickname: data
  });
}
function changeNickname(action) {
  var result;
  return _regeneratorRuntime().wrap(function changeNickname$(_context19) {
    while (1) switch (_context19.prev = _context19.next) {
      case 0:
        _context19.prev = 0;
        _context19.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(changeNicknameAPI, action.data);
      case 3:
        result = _context19.sent;
        _context19.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          //put은 dipatch

          type: _type__WEBPACK_IMPORTED_MODULE_0__["CHANGE_NICKNAME_SUCCESS"],
          data: result.data
        });
      case 6:
        _context19.next = 12;
        break;
      case 8:
        _context19.prev = 8;
        _context19.t0 = _context19["catch"](0);
        _context19.next = 12;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _type__WEBPACK_IMPORTED_MODULE_0__["CHANGE_NICKNAME_FAILURE"],
          error: _context19.t0.response.data
        });
      case 12:
      case "end":
        return _context19.stop();
    }
  }, _marked19, null, [[0, 8]]);
}
function watchChangeNickname() {
  return _regeneratorRuntime().wrap(function watchChangeNickname$(_context20) {
    while (1) switch (_context20.prev = _context20.next) {
      case 0:
        _context20.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["CHANGE_NICKNAME_REQUEST"], changeNickname);
      case 2:
      case "end":
        return _context20.stop();
    }
  }, _marked20);
}
//-------------------------------------------------------------------

function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"]("/user/follower/".concat(data));
}
function removeFollower(action) {
  var result;
  return _regeneratorRuntime().wrap(function removeFollower$(_context21) {
    while (1) switch (_context21.prev = _context21.next) {
      case 0:
        _context21.prev = 0;
        _context21.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removeFollowerAPI, action.data);
      case 3:
        result = _context21.sent;
        _context21.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          //put은 dipatch

          type: _type__WEBPACK_IMPORTED_MODULE_0__["REMOVE_FOLLOWER_SUCCESS"],
          data: result.data
        });
      case 6:
        _context21.next = 12;
        break;
      case 8:
        _context21.prev = 8;
        _context21.t0 = _context21["catch"](0);
        _context21.next = 12;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _type__WEBPACK_IMPORTED_MODULE_0__["REMOVE_FOLLOWER_FAILURE"],
          error: _context21.t0.response.data
        });
      case 12:
      case "end":
        return _context21.stop();
    }
  }, _marked21, null, [[0, 8]]);
}
function watchRemoveFollower() {
  return _regeneratorRuntime().wrap(function watchRemoveFollower$(_context22) {
    while (1) switch (_context22.prev = _context22.next) {
      case 0:
        _context22.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_type__WEBPACK_IMPORTED_MODULE_0__["REMOVE_FOLLOWER_REQUEST"], removeFollower);
      case 2:
      case "end":
        return _context22.stop();
    }
  }, _marked22);
}
function userSaga() {
  return _regeneratorRuntime().wrap(function userSaga$(_context23) {
    while (1) switch (_context23.prev = _context23.next) {
      case 0:
        _context23.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogout), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSingUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowins), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowers), forkwatchLoadUser]);
      case 2:
      case "end":
        return _context23.stop();
    }
  }, _marked23);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiX21hcmtlZCIsImxvZ0luIiwiX21hcmtlZDIiLCJ3YXRjaExvZ2luIiwiX21hcmtlZDMiLCJsb2dPdXQiLCJfbWFya2VkNCIsIndhdGNoTG9nb3V0IiwiX21hcmtlZDUiLCJzaWduVXAiLCJfbWFya2VkNiIsIndhdGNoU2luZ1VwIiwiX21hcmtlZDciLCJmb2xsb3ciLCJfbWFya2VkOCIsIndhdGNoRm9sbG93IiwiX21hcmtlZDkiLCJ1bmZvbGxvdyIsIl9tYXJrZWQxMCIsIndhdGNoVW5mb2xsb3ciLCJfbWFya2VkMTEiLCJsb2FkTXlJbmZvIiwiX21hcmtlZDEyIiwid2F0Y2hMb2FkTXlJbmZvIiwiX21hcmtlZDEzIiwibG9hZFVzZXIiLCJfbWFya2VkMTQiLCJ3YXRjaExvYWRVc2VyIiwiX21hcmtlZDE1IiwibG9hZEZvbGxvd2VycyIsIl9tYXJrZWQxNiIsIndhdGNoTG9hZEZvbGxvd2VycyIsIl9tYXJrZWQxNyIsImxvYWRGb2xsb3dpbmdzIiwiX21hcmtlZDE4Iiwid2F0Y2hMb2FkRm9sbG93aW5zIiwiX21hcmtlZDE5IiwiY2hhbmdlTmlja25hbWUiLCJfbWFya2VkMjAiLCJ3YXRjaENoYW5nZU5pY2tuYW1lIiwiX21hcmtlZDIxIiwicmVtb3ZlRm9sbG93ZXIiLCJfbWFya2VkMjIiLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwiX21hcmtlZDIzIiwidXNlclNhZ2EiLCJsb2dJbkFQSSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJhY3Rpb24iLCJsb2dJbiQiLCJfY29udGV4dCIsInB1dCIsIkxPR19JTl9TVUNDRVNTIiwidDAiLCJMT0dfSU5fRkFJTFVSRSIsInJlc3BvbnNlIiwid2F0Y2hMb2dpbiQiLCJfY29udGV4dDIiLCJ0YWtlRXZlcnkiLCJMT0dfSU5fUkVRVUVTVCIsImxvZ091dEFQSSIsImxvZ091dCQiLCJfY29udGV4dDMiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJ3YXRjaExvZ291dCQiLCJfY29udGV4dDQiLCJ0YWtlTGVhZGluZyIsIkxPR19PVVRfUkVRVUVTVCIsInNpZ25VcEFQSSIsInNpZ25VcCQiLCJfY29udGV4dDUiLCJjb25zb2xlIiwibG9nIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwid2F0Y2hTaW5nVXAkIiwiX2NvbnRleHQ2IiwidGFrZUxhdGVzdCIsIlNJR05fVVBfUkVRVUVTVCIsImZvbGxvd0FQSSIsInBhdGNoIiwiY29uY2F0IiwiZm9sbG93JCIsIl9jb250ZXh0NyIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJ3YXRjaEZvbGxvdyQiLCJfY29udGV4dDgiLCJGT0xMT1dfUkVRVUVTVCIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ckIiwiX2NvbnRleHQ5IiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJ3YXRjaFVuZm9sbG93JCIsIl9jb250ZXh0MTAiLCJVTkZPTExPV19SRVFVRVNUIiwibG9hZE15SW5mb0FQSSIsImdldCIsImxvYWRNeUluZm8kIiwiX2NvbnRleHQxMSIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJ3YXRjaExvYWRNeUluZm8kIiwiX2NvbnRleHQxMiIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlciQiLCJfY29udGV4dDEzIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIndhdGNoTG9hZFVzZXIkIiwiX2NvbnRleHQxNCIsIkxPQURfVVNFUl9SRVFVRVNUIiwibG9hZEZvbGxvd2Vyc0FQSSIsImxvYWRGb2xsb3dlcnMkIiwiX2NvbnRleHQxNSIsIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFIiwid2F0Y2hMb2FkRm9sbG93ZXJzJCIsIl9jb250ZXh0MTYiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwibG9hZEZvbGxvd2luZ3NBUEkiLCJsb2FkRm9sbG93aW5ncyQiLCJfY29udGV4dDE3IiwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSIsIndhdGNoTG9hZEZvbGxvd2lucyQiLCJfY29udGV4dDE4IiwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QiLCJjaGFuZ2VOaWNrbmFtZUFQSSIsIm5pY2tuYW1lIiwiY2hhbmdlTmlja25hbWUkIiwiX2NvbnRleHQxOSIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJ3YXRjaENoYW5nZU5pY2tuYW1lJCIsIl9jb250ZXh0MjAiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsInJlbW92ZUZvbGxvd2VyQVBJIiwicmVtb3ZlRm9sbG93ZXIkIiwiX2NvbnRleHQyMSIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJ3YXRjaFJlbW92ZUZvbGxvd2VyJCIsIl9jb250ZXh0MjIiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsInVzZXJTYWdhJCIsIl9jb250ZXh0MjMiLCJhbGwiLCJmb3JrIiwiZm9ya3dhdGNoTG9hZFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxTQUFBQSxPQUFBLE9BQUFDLEVBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLE1BQUEsR0FBQUgsRUFBQSxDQUFBSSxjQUFBLEVBQUFDLGNBQUEsR0FBQUosTUFBQSxDQUFBSSxjQUFBLGNBQUFDLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxJQUFBLElBQUFGLEdBQUEsQ0FBQUMsR0FBQSxJQUFBQyxJQUFBLENBQUFDLEtBQUEsS0FBQUMsT0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLGNBQUEsR0FBQUYsT0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxtQkFBQSxHQUFBSixPQUFBLENBQUFLLGFBQUEsdUJBQUFDLGlCQUFBLEdBQUFOLE9BQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQVosR0FBQSxFQUFBQyxHQUFBLEVBQUFFLEtBQUEsV0FBQVIsTUFBQSxDQUFBSSxjQUFBLENBQUFDLEdBQUEsRUFBQUMsR0FBQSxJQUFBRSxLQUFBLEVBQUFBLEtBQUEsRUFBQVUsVUFBQSxNQUFBQyxZQUFBLE1B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LCtEQUFJLENBQUM5SSxXQUFXLENBQUMsRUFDakI4SSwrREFBSSxDQUFDMUksV0FBVyxDQUFDLEVBQ2pCMEksK0RBQUksQ0FBQ3RJLGFBQWEsQ0FBQyxFQUNuQnNJLCtEQUFJLENBQUNsSSxlQUFlLENBQUMsRUFDckJrSSwrREFBSSxDQUFDdEgsa0JBQWtCLENBQUMsRUFDeEJzSCwrREFBSSxDQUFDMUgsa0JBQWtCLENBQUMsRUFDeEIySCxpQkFBaUIsQ0FDbEIsQ0FBQztNQUFBO01BQUE7UUFBQSxPQUFBSCxVQUFBLENBQUF0SyxJQUFBO0lBQUE7RUFBQSxHQUFBMkQsU0FBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMWViNGUwMmJkNzI2ZmU3ODk5NmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIExPR19JTl9GQUlMVVJFLFxuICBMT0dfSU5fU1VDQ0VTUyxcbiAgTE9HX09VVF9SRVFVRVNULFxuICBMT0dfSU5fUkVRVUVTVCxcbiAgTE9HX09VVF9GQUlMVVJFLFxuICBMT0dfT1VUX1NVQ0NFU1MsXG4gIFNJR05fVVBfRkFJTFVSRSxcbiAgU0lHTl9VUF9SRVFVRVNULFxuICBTSUdOX1VQX1NVQ0NFU1MsXG4gIEZPTExPV19SRVFVRVNULFxuICBVTkZPTExPV19SRVFVRVNULFxuICBGT0xMT1dfU1VDQ0VTUyxcbiAgRk9MTE9XX0ZBSUxVUkUsXG4gIFVORk9MTE9XX1NVQ0NFU1MsXG4gIFVORk9MTE9XX0ZBSUxVUkUsXG4gIExPQURfTVlfSU5GT19SRVFVRVNULFxuICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcbiAgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXG4gIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxuICBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcbiAgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXG4gIExPQURfRk9MTE9XRVJTX1JFUVVFU1QsXG4gIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXG4gIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXG4gIExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxuICBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcbiAgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsXG4gIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULFxuICBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcbiAgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXG4gIExPQURfVVNFUl9SRVFVRVNULFxuICBMT0FEX1VTRVJfU1VDQ0VTUyxcbiAgTE9BRF9VU0VSX0ZBSUxVUkUsXG59IGZyb20gXCIuLi90eXBlXCI7XG5cbmltcG9ydCB7XG4gIGFsbCxcbiAgZm9yayxcbiAgcHV0LFxuICB0YWtlRXZlcnksXG4gIHRha2VMZWFkaW5nLFxuICB0YWtlTGF0ZXN0LFxuICBjYWxsLFxufSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvdXNlci9sb2dpblwiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcblxuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG5cbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KExPR19JTl9SRVFVRVNULCBsb2dJbik7IC8v67CY67O1XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi91c2VyL2xvZ291dFwiKTtcbn1cblxuZnVuY3Rpb24qIGxvZ091dCgpIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoTG9nb3V0KCkge1xuICB5aWVsZCB0YWtlTGVhZGluZyhMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7IC8v7LKrIOuyiOynuCDqsoPrp4xcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3VzZXJcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiB3YXRjaFNpbmdVcCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7IC8v7LKrIOuyiOynuCDqsoPrp4xcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wYXRjaChgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKTtcbn1cblxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xuXG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcblxuICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XG4gIHlpZWxkIHRha2VFdmVyeShGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTsgLy/rsJjrs7Vcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gdW5mb2xsb3dBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xufVxuXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xuXG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcblxuICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XG4gIHlpZWxkIHRha2VFdmVyeShVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7IC8v67CY67O1XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSSgpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChcIi91c2VyXCIpO1xufVxuXG5mdW5jdGlvbiogbG9hZE15SW5mbyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKSB7XG4gIHlpZWxkIHRha2VFdmVyeShMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbyk7IC8v67CY67O1XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gbG9hZFVzZXJBUEkoKSB7XG4gIHJldHVybiBheGlvcy5nZXQoYHVzZXIvJHtkYXRhfWApO1xufVxuXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG5cbiAgICAgIHR5cGU6IExPQURfVVNFUl9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKSB7XG4gIHlpZWxkIHRha2VFdmVyeShMT0FEX1VTRVJfUkVRVUVTVCwgbG9hZFVzZXIpOyAvL+uwmOuztVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBsb2FkRm9sbG93ZXJzQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChcIi91c2VyL2ZvbGxvd2Vyc1wiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRGb2xsb3dlcnMoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93ZXJzQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcblxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2VycygpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRGb2xsb3dlcnMpOyAvL+uwmOuztVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBsb2FkRm9sbG93aW5nc0FQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5nZXQoXCIvdXNlci9mb2xsb3dpbmdzXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogbG9hZEZvbGxvd2luZ3MoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93aW5nc0FQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG5cbiAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2lucygpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBsb2FkRm9sbG93aW5ncyk7IC8v67CY67O1XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBjaGFuZ2VOaWNrbmFtZUFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wYXRjaChcIi91c2VyL25pY2tuYW1lXCIsIHsgbmlja25hbWU6IGRhdGEgfSk7XG59XG5cbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZU5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcblxuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hDaGFuZ2VOaWNrbmFtZSgpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBjaGFuZ2VOaWNrbmFtZSk7IC8v67CY67O1XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gcmVtb3ZlRm9sbG93ZXJBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9mb2xsb3dlci8ke2RhdGF9YCk7XG59XG5cbmZ1bmN0aW9uKiByZW1vdmVGb2xsb3dlcihhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2VyQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcblxuICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVGb2xsb3dlcigpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCByZW1vdmVGb2xsb3dlcik7IC8v67CY67O1XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBmb3JrKHdhdGNoQ2hhbmdlTmlja25hbWUpLFxuICAgIGZvcmsod2F0Y2hSZW1vdmVGb2xsb3dlciksXG4gICAgZm9yayh3YXRjaExvZ2luKSxcbiAgICBmb3JrKHdhdGNoTG9nb3V0KSxcbiAgICBmb3JrKHdhdGNoU2luZ1VwKSxcbiAgICBmb3JrKHdhdGNoRm9sbG93KSxcbiAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxuICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcbiAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2lucyksXG4gICAgZm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxuICAgIGZvcmt3YXRjaExvYWRVc2VyXG4gIF0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==