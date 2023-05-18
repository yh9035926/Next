webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type */ "./type/index.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var _marked = /*#__PURE__*/_regeneratorRuntime().mark(addPost),
  _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(watchAddPost),
  _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(uploadImages),
  _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(watchuploadImages),
  _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(loadPosts),
  _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadPost),
  _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(retweet),
  _marked8 = /*#__PURE__*/_regeneratorRuntime().mark(watchRetweet),
  _marked9 = /*#__PURE__*/_regeneratorRuntime().mark(removePost),
  _marked10 = /*#__PURE__*/_regeneratorRuntime().mark(watchRemovePost),
  _marked11 = /*#__PURE__*/_regeneratorRuntime().mark(addComment),
  _marked12 = /*#__PURE__*/_regeneratorRuntime().mark(watchAddComment),
  _marked13 = /*#__PURE__*/_regeneratorRuntime().mark(likePost),
  _marked14 = /*#__PURE__*/_regeneratorRuntime().mark(watchLikePost),
  _marked15 = /*#__PURE__*/_regeneratorRuntime().mark(unlikePost),
  _marked16 = /*#__PURE__*/_regeneratorRuntime().mark(watchUnlikePost),
  _marked17 = /*#__PURE__*/_regeneratorRuntime().mark(postSaga);




//-------------------------------------------------------------
function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/post", data);
}
function addPost(action) {
  var result;
  return _regeneratorRuntime().wrap(function addPost$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        _context.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);
      case 3:
        result = _context.sent;
        _context.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          //put은 dipatch
          type: _type__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
          data: result.data
        });
      case 6:
        _context.next = 8;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          type: _type__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_TO_ME"],
          data: result.data.id
        });
      case 8:
        _context.next = 14;
        break;
      case 10:
        _context.prev = 10;
        _context.t0 = _context["catch"](0);
        _context.next = 14;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          type: _type__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
          error: _context.t0.response.data
        });
      case 14:
      case "end":
        return _context.stop();
    }
  }, _marked, null, [[0, 10]]);
}
function watchAddPost() {
  return _regeneratorRuntime().wrap(function watchAddPost$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
      case 2:
      case "end":
        return _context2.stop();
    }
  }, _marked2);
}
//-------------------------------------------------------------
function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/post/images", data);
}
function uploadImages(action) {
  var result;
  return _regeneratorRuntime().wrap(function uploadImages$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        _context3.prev = 0;
        _context3.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(uploadImagesAPI, action.data);
      case 3:
        result = _context3.sent;
        _context3.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          //put은 dipatch
          type: _type__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
          data: result.data
        });
      case 6:
        _context3.next = 12;
        break;
      case 8:
        _context3.prev = 8;
        _context3.t0 = _context3["catch"](0);
        _context3.next = 12;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          type: _type__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
          error: _context3.t0.response.data
        });
      case 12:
      case "end":
        return _context3.stop();
    }
  }, _marked3, null, [[0, 8]]);
}
function watchuploadImages() {
  return _regeneratorRuntime().wrap(function watchuploadImages$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        _context4.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
      case 2:
      case "end":
        return _context4.stop();
    }
  }, _marked4);
}
//-------------------------------------------------------------

function loadPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/posts?lastId=".concat(lastId || 0)); //get에서 데이터 넣기 ? 
}

function loadPosts(action) {
  var result;
  return _regeneratorRuntime().wrap(function loadPosts$(_context5) {
    while (1) switch (_context5.prev = _context5.next) {
      case 0:
        _context5.prev = 0;
        _context5.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostsAPI, action.data);
      case 3:
        result = _context5.sent;
        _context5.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          //put은 dipatch
          type: _type__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
          data: result.data
        });
      case 6:
        _context5.next = 12;
        break;
      case 8:
        _context5.prev = 8;
        _context5.t0 = _context5["catch"](0);
        _context5.next = 12;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          type: _type__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
          error: _context5.t0.response.data
        });
      case 12:
      case "end":
        return _context5.stop();
    }
  }, _marked5, null, [[0, 8]]);
}
function watchLoadPost() {
  return _regeneratorRuntime().wrap(function watchLoadPost$(_context6) {
    while (1) switch (_context6.prev = _context6.next) {
      case 0:
        _context6.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
      case 2:
      case "end":
        return _context6.stop();
    }
  }, _marked6);
}
//-------------------------------------------------------------
function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/post/".concat(data, "/retweet"));
}
function retweet(action) {
  var result;
  return _regeneratorRuntime().wrap(function retweet$(_context7) {
    while (1) switch (_context7.prev = _context7.next) {
      case 0:
        _context7.prev = 0;
        _context7.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(retweetAPI, action.data);
      case 3:
        result = _context7.sent;
        _context7.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          //put은 dipatch
          type: _type__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
          data: result.data
        });
      case 6:
        _context7.next = 13;
        break;
      case 8:
        _context7.prev = 8;
        _context7.t0 = _context7["catch"](0);
        console.error(_context7.t0);
        _context7.next = 13;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          type: _type__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
          error: _context7.t0.response.data
        });
      case 13:
      case "end":
        return _context7.stop();
    }
  }, _marked7, null, [[0, 8]]);
}
function watchRetweet() {
  return _regeneratorRuntime().wrap(function watchRetweet$(_context8) {
    while (1) switch (_context8.prev = _context8.next) {
      case 0:
        _context8.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet);
      case 2:
      case "end":
        return _context8.stop();
    }
  }, _marked8);
}
//-------------------------------------------------------------

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"]("/post/".concat(data));
}
function removePost(action) {
  var result;
  return _regeneratorRuntime().wrap(function removePost$(_context9) {
    while (1) switch (_context9.prev = _context9.next) {
      case 0:
        _context9.prev = 0;
        _context9.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data);
      case 3:
        result = _context9.sent;
        _context9.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          //put은 dipatch
          type: _type__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
          data: result.data
        });
      case 6:
        _context9.next = 8;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          type: _type__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_OF_ME"],
          data: action.data
        });
      case 8:
        _context9.next = 14;
        break;
      case 10:
        _context9.prev = 10;
        _context9.t0 = _context9["catch"](0);
        _context9.next = 14;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          type: _type__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
          error: _context9.t0.response.data
        });
      case 14:
      case "end":
        return _context9.stop();
    }
  }, _marked9, null, [[0, 10]]);
}
function watchRemovePost() {
  return _regeneratorRuntime().wrap(function watchRemovePost$(_context10) {
    while (1) switch (_context10.prev = _context10.next) {
      case 0:
        _context10.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
      case 2:
      case "end":
        return _context10.stop();
    }
  }, _marked10);
}
//-------------------------------------------------------------

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/post/".concat(data.postId, "/comment"), data);
}
function addComment(action) {
  var result;
  return _regeneratorRuntime().wrap(function addComment$(_context11) {
    while (1) switch (_context11.prev = _context11.next) {
      case 0:
        _context11.prev = 0;
        _context11.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
      case 3:
        result = _context11.sent;
        _context11.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          //put은 dipatch
          type: _type__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
          data: result.data
        });
      case 6:
        _context11.next = 13;
        break;
      case 8:
        _context11.prev = 8;
        _context11.t0 = _context11["catch"](0);
        console.error(_context11.t0);
        _context11.next = 13;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          type: _type__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
          error: _context11.t0.response.data
        });
      case 13:
      case "end":
        return _context11.stop();
    }
  }, _marked11, null, [[0, 8]]);
}
function watchAddComment() {
  return _regeneratorRuntime().wrap(function watchAddComment$(_context12) {
    while (1) switch (_context12.prev = _context12.next) {
      case 0:
        _context12.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
      case 2:
      case "end":
        return _context12.stop();
    }
  }, _marked12);
}
//-------------------------------------------------------------

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].patch("/post/".concat(data, "/like")); //patch 일부분 수정
}

function likePost(action) {
  var result;
  return _regeneratorRuntime().wrap(function likePost$(_context13) {
    while (1) switch (_context13.prev = _context13.next) {
      case 0:
        _context13.prev = 0;
        _context13.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);
      case 3:
        result = _context13.sent;
        _context13.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          //put은 dipatch
          type: _type__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
          data: result.data
        });
      case 6:
        _context13.next = 13;
        break;
      case 8:
        _context13.prev = 8;
        _context13.t0 = _context13["catch"](0);
        console.error(_context13.t0);
        _context13.next = 13;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          type: _type__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
          error: _context13.t0.response.data
        });
      case 13:
      case "end":
        return _context13.stop();
    }
  }, _marked13, null, [[0, 8]]);
}
function watchLikePost() {
  return _regeneratorRuntime().wrap(function watchLikePost$(_context14) {
    while (1) switch (_context14.prev = _context14.next) {
      case 0:
        _context14.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
      case 2:
      case "end":
        return _context14.stop();
    }
  }, _marked14);
}
//-------------------------------------------------------------

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"]("/post/".concat(data, "/like"));
}
function unlikePost(action) {
  var result;
  return _regeneratorRuntime().wrap(function unlikePost$(_context15) {
    while (1) switch (_context15.prev = _context15.next) {
      case 0:
        _context15.prev = 0;
        _context15.next = 3;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);
      case 3:
        result = _context15.sent;
        _context15.next = 6;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          //put은 dipatch
          type: _type__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
          data: result.data
        });
      case 6:
        _context15.next = 13;
        break;
      case 8:
        _context15.prev = 8;
        _context15.t0 = _context15["catch"](0);
        console.error(_context15.t0);
        _context15.next = 13;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          type: _type__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
          error: _context15.t0.response.data
        });
      case 13:
      case "end":
        return _context15.stop();
    }
  }, _marked15, null, [[0, 8]]);
}
function watchUnlikePost() {
  return _regeneratorRuntime().wrap(function watchUnlikePost$(_context16) {
    while (1) switch (_context16.prev = _context16.next) {
      case 0:
        _context16.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_type__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
      case 2:
      case "end":
        return _context16.stop();
    }
  }, _marked16);
}
function postSaga() {
  return _regeneratorRuntime().wrap(function postSaga$(_context17) {
    while (1) switch (_context17.prev = _context17.next) {
      case 0:
        _context17.next = 2;
        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchuploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRetweet)]);
      case 2:
      case "end":
        return _context17.stop();
    }
  }, _marked17);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiX21hcmtlZCIsImFkZFBvc3QiLCJfbWFya2VkMiIsIndhdGNoQWRkUG9zdCIsIl9tYXJrZWQzIiwidXBsb2FkSW1hZ2VzIiwiX21hcmtlZDQiLCJ3YXRjaHVwbG9hZEltYWdlcyIsIl9tYXJrZWQ1IiwibG9hZFBvc3RzIiwiX21hcmtlZDYiLCJ3YXRjaExvYWRQb3N0IiwiX21hcmtlZDciLCJyZXR3ZWV0IiwiX21hcmtlZDgiLCJ3YXRjaFJldHdlZXQiLCJfbWFya2VkOSIsInJlbW92ZVBvc3QiLCJfbWFya2VkMTAiLCJ3YXRjaFJlbW92ZVBvc3QiLCJfbWFya2VkMTEiLCJhZGRDb21tZW50IiwiX21hcmtlZDEyIiwid2F0Y2hBZGRDb21tZW50IiwiX21hcmtlZDEzIiwibGlrZVBvc3QiLCJfbWFya2VkMTQiLCJ3YXRjaExpa2VQb3N0IiwiX21hcmtlZDE1IiwidW5saWtlUG9zdCIsIl9tYXJrZWQxNiIsIndhdGNoVW5saWtlUG9zdCIsIl9tYXJrZWQxNyIsInBvc3RTYWdhIiwiYWRkUG9zdEFQSSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJhY3Rpb24iLCJhZGRQb3N0JCIsIl9jb250ZXh0IiwicHV0IiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX1RPX01FIiwiaWQiLCJ0MCIsIkFERF9QT1NUX0ZBSUxVUkUiLCJyZXNwb25zZSIsIndhdGNoQWRkUG9zdCQiLCJfY29udGV4dDIiLCJ0YWtlTGF0ZXN0IiwiQUREX1BPU1RfUkVRVUVTVCIsInVwbG9hZEltYWdlc0FQSSIsInVwbG9hZEltYWdlcyQiLCJfY29udGV4dDMiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJ3YXRjaHVwbG9hZEltYWdlcyQiLCJfY29udGV4dDQiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJsb2FkUG9zdHNBUEkiLCJsYXN0SWQiLCJnZXQiLCJjb25jYXQiLCJsb2FkUG9zdHMkIiwiX2NvbnRleHQ1IiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwid2F0Y2hMb2FkUG9zdCQiLCJfY29udGV4dDYiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJyZXR3ZWV0QVBJIiwicmV0d2VldCQiLCJfY29udGV4dDciLCJSRVRXRUVUX1NVQ0NFU1MiLCJjb25zb2xlIiwiUkVUV0VFVF9GQUlMVVJFIiwid2F0Y2hSZXR3ZWV0JCIsIl9jb250ZXh0OCIsIlJFVFdFRVRfUkVRVUVTVCIsInJlbW92ZVBvc3RBUEkiLCJyZW1vdmVQb3N0JCIsIl9jb250ZXh0OSIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9PRl9NRSIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJ3YXRjaFJlbW92ZVBvc3QkIiwiX2NvbnRleHQxMCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwiYWRkQ29tbWVudCQiLCJfY29udGV4dDExIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJ3YXRjaEFkZENvbW1lbnQkIiwiX2NvbnRleHQxMiIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwibGlrZVBvc3QkIiwiX2NvbnRleHQxMyIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJ3YXRjaExpa2VQb3N0JCIsIl9jb250ZXh0MTQiLCJMSUtFX1BPU1RfUkVRVUVTVCIsInVubGlrZVBvc3RBUEkiLCJ1bmxpa2VQb3N0JCIsIl9jb250ZXh0MTUiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIndhdGNoVW5saWtlUG9zdCQiLCJfY29udGV4dDE2IiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsInBvc3RTYWdhJCIsIl9jb250ZXh0MTciLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7K0NBQ0EscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLE9BQUEsU0FBQUEsT0FBQSxPQUFBQyxFQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxNQUFBLEdBQUFILEVBQUEsQ0FBQUksY0FBQSxFQUFBQyxjQUFBLEdBQUFKLE1BQUEsQ0FBQUksY0FBQSxjQUFBQyxHQUFBLEVBQUFDLEdBQUEsRUFBQUMsSUFBQSxJQUFBRixHQUFB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K0RBQUksQ0FBQzNGLGFBQWEsQ0FBQyxFQUNuQjJGLCtEQUFJLENBQUN2RixlQUFlLENBQUMsRUFDckJ1RiwrREFBSSxDQUFDL0csaUJBQWlCLENBQUMsRUFDdkIrRywrREFBSSxDQUFDdkcsWUFBWSxDQUFDLENBQ25CLENBQUM7TUFBQTtNQUFBO1FBQUEsT0FBQXFHLFVBQUEsQ0FBQW5JLElBQUE7SUFBQTtFQUFBLEdBQUErQyxTQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lNTg5MjBlMmY4NDExNjk2OTA5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9yaywgYWxsLCB0YWtlTGF0ZXN0LCBwdXQsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCB7XG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXG4gIEFERF9DT01NRU5UX1NVQ0NFU1MsXG4gIEFERF9QT1NUX0ZBSUxVUkUsXG4gIEFERF9QT1NUX1JFUVVFU1QsXG4gIEFERF9QT1NUX1NVQ0NFU1MsXG4gIEFERF9QT1NUX1RPX01FLFxuICBMSUtFX1BPU1RfRkFJTFVSRSxcbiAgTElLRV9QT1NUX1JFUVVFU1QsXG4gIExJS0VfUE9TVF9TVUNDRVNTLFxuICBMT0FEX1BPU1RTX0ZBSUxVUkUsXG4gIExPQURfUE9TVFNfUkVRVUVTVCxcbiAgTE9BRF9QT1NUU19TVUNDRVNTLFxuICBSRU1PVkVfUE9TVF9GQUlMVVJFLFxuICBSRU1PVkVfUE9TVF9PRl9NRSxcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcbiAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcbiAgUkVUV0VFVF9GQUlMVVJFLFxuICBSRVRXRUVUX1JFUVVFU1QsXG4gIFJFVFdFRVRfU1VDQ0VTUyxcbiAgVU5MSUtFX1BPU1RfRkFJTFVSRSxcbiAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcbiAgVU5MSUtFX1BPU1RfU1VDQ0VTUyxcbiAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxuICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXG4gIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcbn0gZnJvbSBcIi4uL3R5cGVcIjtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvcG9zdFwiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTsgLy/rp4jsp4Drp4kg6rKD66eMXG4gIC8vdGhyb3R0bGUoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGFkZFBvc3QsMjAwMCkgMuy0iCDrj5nslYggMeuyiCDsi6Ttlolcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvcG9zdC9pbWFnZXNcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNodXBsb2FkSW1hZ2VzKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTsgLy/rp4jsp4Drp4kg6rKD66eMXG4gIC8vdGhyb3R0bGUoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGFkZFBvc3QsMjAwMCkgMuy0iCDrj5nslYggMeuyiCDsi6Ttlolcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkobGFzdElkKSB7XG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTsvL2dldOyXkOyEnCDrjbDsnbTthLAg64Sj6riwID8gXG59XG5cbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpOyAvL+uniOyngOuniSDqsoPrp4xcbiAgLy90aHJvdHRsZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwyMDAwKSAy7LSIIOuPmeyViCAx67KIIOyLpO2WiSBSRVFVU0VU64qUIOuztOuCtOynkFxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiByZXR3ZWV0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YX0vcmV0d2VldGApO1xufVxuXG5mdW5jdGlvbiogcmV0d2VldChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJldHdlZXRBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogUkVUV0VFVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogUkVUV0VFVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoUkVUV0VFVF9SRVFVRVNULCByZXR3ZWV0KTsgLy/rp4jsp4Drp4kg6rKD66eMXG4gIC8vdGhyb3R0bGUoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGFkZFBvc3QsMjAwMCkgMuy0iCDrj5nslYggMeuyiCDsi6Ttlolcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApO1xufVxuXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgLy9wdXTsnYAgZGlwYXRjaFxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuXG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7IC8v66eI7KeA66eJIOqyg+unjFxuICAvL3Rocm90dGxlKFwiQUREX1BPU1RfUkVRVUVTVFwiLCBhZGRQb3N0LDIwMDApIDLstIgg64+Z7JWIIDHrsogg7Iuk7ZaJXG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpOyAvL+uniOyngOuniSDqsoPrp4xcbiAgLy90aHJvdHRsZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwyMDAwKSAy7LSIIOuPmeyViCAx67KIIOyLpO2WiVxufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTsgLy9wYXRjaCDsnbzrtoDrtoQg7IiY7KCVXG59XG5cbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIC8vcHV07J2AIGRpcGF0Y2hcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTsgLy/rp4jsp4Drp4kg6rKD66eMXG4gIC8vdGhyb3R0bGUoXCJBRERfUE9TVF9SRVFVRVNUXCIsIGFkZFBvc3QsMjAwMCkgMuy0iCDrj5nslYggMeuyiCDsi6Ttlolcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XG59XG5cbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAvL3B1dOydgCBkaXBhdGNoXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hVbmxpa2VQb3N0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpOyAvL+uniOyngOuniSDqsoPrp4xcbiAgLy90aHJvdHRsZShcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwyMDAwKSAy7LSIIOuPmeyViCAx67KIIOyLpO2WiVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcbiAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXG4gICAgZm9yayh3YXRjaExvYWRQb3N0KSxcbiAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxuICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcbiAgICBmb3JrKHdhdGNodXBsb2FkSW1hZ2VzKSxcbiAgICBmb3JrKHdhdGNoUmV0d2VldCksXG4gIF0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==