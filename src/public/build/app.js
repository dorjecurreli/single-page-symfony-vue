/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/vue/api/post.js":
/*!********************************!*\
  !*** ./assets/vue/api/post.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  create: function create(message) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/posts", {
      message: message
    });
  },
  findAll: function findAll() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/posts");
  }
});

/***/ }),

/***/ "./assets/vue/api/security.js":
/*!************************************!*\
  !*** ./assets/vue/api/security.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  login: function login(_login, password) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/security/login", {
      username: _login,
      password: password
    });
  }
});

/***/ }),

/***/ "./assets/vue/index.js":
/*!*****************************!*\
  !*** ./assets/vue/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./assets/vue/App.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./assets/vue/router/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./assets/vue/store/index.js");




new vue__WEBPACK_IMPORTED_MODULE_3__["default"]({
  components: {
    App: _App__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  template: "<App/>",
  router: _router__WEBPACK_IMPORTED_MODULE_1__["default"],
  store: _store__WEBPACK_IMPORTED_MODULE_2__["default"]
}).$mount("#app");

/***/ }),

/***/ "./assets/vue/router/index.js":
/*!************************************!*\
  !*** ./assets/vue/router/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./assets/vue/store/index.js");
/* harmony import */ var _views_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/Home */ "./assets/vue/views/Home.vue");
/* harmony import */ var _views_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/Login */ "./assets/vue/views/Login.vue");
/* harmony import */ var _views_Posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/Posts */ "./assets/vue/views/Posts.vue");








vue__WEBPACK_IMPORTED_MODULE_6__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_7__["default"]);
var router = new vue_router__WEBPACK_IMPORTED_MODULE_7__["default"]({
  mode: "history",
  routes: [{
    path: "/home",
    component: _views_Home__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    path: "/login",
    component: _views_Login__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    path: "/posts",
    component: _views_Posts__WEBPACK_IMPORTED_MODULE_5__["default"],
    meta: {
      requiresAuth: true
    }
  }, {
    path: "*",
    redirect: "/home"
  }]
});
console.log(router);
router.beforeEach(function (to, from, next) {
  if (to.matched.some(function (record) {
    return record.meta.requiresAuth;
  })) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (_store__WEBPACK_IMPORTED_MODULE_2__["default"].getters["security/isAuthenticated"]) {
      next();
    } else {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next(); // make sure to always call next()!
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./assets/vue/store/index.js":
/*!***********************************!*\
  !*** ./assets/vue/store/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post */ "./assets/vue/store/post.js");
/* harmony import */ var _security__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./security */ "./assets/vue/store/security.js");




vue__WEBPACK_IMPORTED_MODULE_2__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new vuex__WEBPACK_IMPORTED_MODULE_3__["default"].Store({
  modules: {
    security: _security__WEBPACK_IMPORTED_MODULE_1__["default"],
    post: _post__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
}));

/***/ }),

/***/ "./assets/vue/store/post.js":
/*!**********************************!*\
  !*** ./assets/vue/store/post.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/post */ "./assets/vue/api/post.js");



var _mutations;



var CREATING_POST = "CREATING_POST",
    CREATING_POST_SUCCESS = "CREATING_POST_SUCCESS",
    CREATING_POST_ERROR = "CREATING_POST_ERROR",
    FETCHING_POSTS = "FETCHING_POSTS",
    FETCHING_POSTS_SUCCESS = "FETCHING_POSTS_SUCCESS",
    FETCHING_POSTS_ERROR = "FETCHING_POSTS_ERROR";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  namespaced: true,
  state: {
    isLoading: false,
    error: null,
    posts: []
  },
  getters: {
    isLoading: function isLoading(state) {
      return state.isLoading;
    },
    hasError: function hasError(state) {
      return state.error !== null;
    },
    error: function error(state) {
      return state.error;
    },
    hasPosts: function hasPosts(state) {
      return state.posts.length > 0;
    },
    posts: function posts(state) {
      return state.posts;
    }
  },
  mutations: (_mutations = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_mutations, CREATING_POST, function (state) {
    state.isLoading = true;
    state.error = null;
  }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_mutations, CREATING_POST_SUCCESS, function (state, post) {
    state.isLoading = false;
    state.error = null;
    state.posts.unshift(post);
  }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_mutations, CREATING_POST_ERROR, function (state, error) {
    state.isLoading = false;
    state.error = error;
    state.posts = [];
  }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_mutations, FETCHING_POSTS, function (state) {
    state.isLoading = true;
    state.error = null;
    state.posts = [];
  }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_mutations, FETCHING_POSTS_SUCCESS, function (state, posts) {
    state.isLoading = false;
    state.error = null;
    state.posts = posts;
  }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_mutations, FETCHING_POSTS_ERROR, function (state, error) {
    state.isLoading = false;
    state.error = error;
    state.posts = [];
  }), _mutations),
  actions: {
    create: function create(_ref, message) {
      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var commit, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                commit(CREATING_POST);
                _context.prev = 2;
                _context.next = 5;
                return _api_post__WEBPACK_IMPORTED_MODULE_3__["default"].create(message);

              case 5:
                response = _context.sent;
                commit(CREATING_POST_SUCCESS, response.data);
                return _context.abrupt("return", response.data);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                commit(CREATING_POST_ERROR, _context.t0);
                return _context.abrupt("return", null);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
      }))();
    },
    findAll: function findAll(_ref2) {
      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var commit, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref2.commit;
                commit(FETCHING_POSTS);
                _context2.prev = 2;
                _context2.next = 5;
                return _api_post__WEBPACK_IMPORTED_MODULE_3__["default"].findAll();

              case 5:
                response = _context2.sent;
                commit(FETCHING_POSTS_SUCCESS, response.data);
                return _context2.abrupt("return", response.data);

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](2);
                commit(FETCHING_POSTS_ERROR, _context2.t0);
                return _context2.abrupt("return", null);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 10]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./assets/vue/store/security.js":
/*!**************************************!*\
  !*** ./assets/vue/store/security.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_security__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/security */ "./assets/vue/api/security.js");



var _mutations;




var AUTHENTICATING = "AUTHENTICATING",
    AUTHENTICATING_SUCCESS = "AUTHENTICATING_SUCCESS",
    AUTHENTICATING_ERROR = "AUTHENTICATING_ERROR",
    PROVIDING_DATA_ON_REFRESH_SUCCESS = "PROVIDING_DATA_ON_REFRESH_SUCCESS";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  namespaced: true,
  state: {
    isLoading: false,
    error: null,
    isAuthenticated: false,
    user: null
  },
  getters: {
    isLoading: function isLoading(state) {
      return state.isLoading;
    },
    hasError: function hasError(state) {
      return state.error !== null;
    },
    error: function error(state) {
      return state.error;
    },
    isAuthenticated: function isAuthenticated(state) {
      return state.isAuthenticated;
    },
    hasRole: function hasRole(state) {
      return function (role) {
        return state.user.roles.indexOf(role) !== -1;
      };
    }
  },
  mutations: (_mutations = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_mutations, AUTHENTICATING, function (state) {
    state.isLoading = true;
    state.error = null;
    state.isAuthenticated = false;
    state.user = null;
  }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_mutations, AUTHENTICATING_SUCCESS, function (state, user) {
    state.isLoading = false;
    state.error = null;
    state.isAuthenticated = true;
    state.user = user;
  }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_mutations, AUTHENTICATING_ERROR, function (state, error) {
    state.isLoading = false;
    state.error = error;
    state.isAuthenticated = false;
    state.user = null;
  }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_mutations, PROVIDING_DATA_ON_REFRESH_SUCCESS, function (state, payload) {
    state.isLoading = false;
    state.error = null;
    state.isAuthenticated = payload.isAuthenticated;
    state.user = payload.user;
  }), _mutations),
  actions: {
    login: function login(_ref, payload) {
      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var commit, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                commit(AUTHENTICATING);
                _context.prev = 2;
                _context.next = 5;
                return _api_security__WEBPACK_IMPORTED_MODULE_4__["default"].login(payload.login, payload.password);

              case 5:
                response = _context.sent;
                commit(AUTHENTICATING_SUCCESS, response.data);
                return _context.abrupt("return", response.data);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                commit(AUTHENTICATING_ERROR, _context.t0);
                return _context.abrupt("return", null);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
      }))();
    },
    onRefresh: function onRefresh(_ref2, payload) {
      var commit = _ref2.commit;
      commit(PROVIDING_DATA_ON_REFRESH_SUCCESS, payload);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "App",
  computed: {
    isAuthenticated: function isAuthenticated() {
      return this.$store.getters["security/isAuthenticated"];
    }
  },
  created: function created() {
    var _this = this;

    var isAuthenticated = JSON.parse(this.$parent.$el.attributes["data-is-authenticated"].value),
        user = JSON.parse(this.$parent.$el.attributes["data-user"].value);
    var payload = {
      isAuthenticated: isAuthenticated,
      user: user
    };
    this.$store.dispatch("security/onRefresh", payload);
    axios__WEBPACK_IMPORTED_MODULE_2___default().interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        if (err.response.status === 401) {
          _this.$router.push({
            path: "/login"
          });
        } else if (err.response.status === 500) {
          document.open();
          document.write(err.response.data);
          document.close();
        }

        throw err;
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/ErrorMessage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/ErrorMessage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ErrorMessage",
  props: {
    error: {
      type: Error,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/Post.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/Post.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Post",
  props: {
    message: {
      type: String,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/views/Home.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/views/Home.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Home"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/views/Login.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/views/Login.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ErrorMessage */ "./assets/vue/components/ErrorMessage.vue");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Login",
  components: {
    ErrorMessage: _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      login: "",
      password: ""
    };
  },
  computed: {
    isLoading: function isLoading() {
      return this.$store.getters["security/isLoading"];
    },
    hasError: function hasError() {
      return this.$store.getters["security/hasError"];
    },
    error: function error() {
      return this.$store.getters["security/error"];
    }
  },
  created: function created() {
    var redirect = this.$route.query.redirect;

    if (this.$store.getters["security/isAuthenticated"]) {
      if (typeof redirect !== "undefined") {
        this.$router.push({
          path: redirect
        });
      } else {
        this.$router.push({
          path: "/home"
        });
      }
    }
  },
  methods: {
    performLogin: function performLogin() {
      var _this = this;

      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var payload, redirect;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                payload = {
                  login: _this.$data.login,
                  password: _this.$data.password
                }, redirect = _this.$route.query.redirect;
                _context.next = 3;
                return _this.$store.dispatch("security/login", payload);

              case 3:
                if (!_this.$store.getters["security/hasError"]) {
                  if (typeof redirect !== "undefined") {
                    _this.$router.push({
                      path: redirect
                    });
                  } else {
                    _this.$router.push({
                      path: "/home"
                    });
                  }
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/views/Posts.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/views/Posts.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Post */ "./assets/vue/components/Post.vue");
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ErrorMessage */ "./assets/vue/components/ErrorMessage.vue");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Posts",
  components: {
    Post: _components_Post__WEBPACK_IMPORTED_MODULE_2__["default"],
    ErrorMessage: _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      message: ""
    };
  },
  computed: {
    isLoading: function isLoading() {
      return this.$store.getters["post/isLoading"];
    },
    hasError: function hasError() {
      return this.$store.getters["post/hasError"];
    },
    error: function error() {
      return this.$store.getters["post/error"];
    },
    hasPosts: function hasPosts() {
      return this.$store.getters["post/hasPosts"];
    },
    posts: function posts() {
      return this.$store.getters["post/posts"];
    },
    canCreatePost: function canCreatePost() {
      return this.$store.getters["security/hasRole"]("ROLE_FOO");
    }
  },
  created: function created() {
    this.$store.dispatch("post/posts");
  },
  methods: {
    createPost: function createPost() {
      var _this = this;

      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$store.dispatch("post/create", _this.$data.message);

              case 2:
                result = _context.sent;

                if (result !== null) {
                  _this.$data.message = "";
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./assets/vue/App.vue":
/*!****************************!*\
  !*** ./assets/vue/App.vue ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_147f6b0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=147f6b0c& */ "./assets/vue/App.vue?vue&type=template&id=147f6b0c&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./assets/vue/App.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_147f6b0c___WEBPACK_IMPORTED_MODULE_0__.render,
  _App_vue_vue_type_template_id_147f6b0c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/App.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/vue/components/ErrorMessage.vue":
/*!************************************************!*\
  !*** ./assets/vue/components/ErrorMessage.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ErrorMessage_vue_vue_type_template_id_60d3edd1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorMessage.vue?vue&type=template&id=60d3edd1& */ "./assets/vue/components/ErrorMessage.vue?vue&type=template&id=60d3edd1&");
/* harmony import */ var _ErrorMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorMessage.vue?vue&type=script&lang=js& */ "./assets/vue/components/ErrorMessage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ErrorMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ErrorMessage_vue_vue_type_template_id_60d3edd1___WEBPACK_IMPORTED_MODULE_0__.render,
  _ErrorMessage_vue_vue_type_template_id_60d3edd1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/components/ErrorMessage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/vue/components/Post.vue":
/*!****************************************!*\
  !*** ./assets/vue/components/Post.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Post_vue_vue_type_template_id_27c969dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post.vue?vue&type=template&id=27c969dc& */ "./assets/vue/components/Post.vue?vue&type=template&id=27c969dc&");
/* harmony import */ var _Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post.vue?vue&type=script&lang=js& */ "./assets/vue/components/Post.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Post_vue_vue_type_template_id_27c969dc___WEBPACK_IMPORTED_MODULE_0__.render,
  _Post_vue_vue_type_template_id_27c969dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/components/Post.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/vue/views/Home.vue":
/*!***********************************!*\
  !*** ./assets/vue/views/Home.vue ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_e8512dd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=e8512dd2& */ "./assets/vue/views/Home.vue?vue&type=template&id=e8512dd2&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./assets/vue/views/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_e8512dd2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_e8512dd2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/views/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/vue/views/Login.vue":
/*!************************************!*\
  !*** ./assets/vue/views/Login.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_0cfaa061___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=0cfaa061& */ "./assets/vue/views/Login.vue?vue&type=template&id=0cfaa061&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./assets/vue/views/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_0cfaa061___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_0cfaa061___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/views/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/vue/views/Posts.vue":
/*!************************************!*\
  !*** ./assets/vue/views/Posts.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Posts_vue_vue_type_template_id_283a306a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Posts.vue?vue&type=template&id=283a306a& */ "./assets/vue/views/Posts.vue?vue&type=template&id=283a306a&");
/* harmony import */ var _Posts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Posts.vue?vue&type=script&lang=js& */ "./assets/vue/views/Posts.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Posts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Posts_vue_vue_type_template_id_283a306a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Posts_vue_vue_type_template_id_283a306a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/views/Posts.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/vue/App.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./assets/vue/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/App.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/components/ErrorMessage.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./assets/vue/components/ErrorMessage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ErrorMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/ErrorMessage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/components/Post.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./assets/vue/components/Post.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Post.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/Post.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/views/Home.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./assets/vue/views/Home.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/views/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/views/Login.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./assets/vue/views/Login.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/views/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/views/Posts.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./assets/vue/views/Posts.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Posts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/views/Posts.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/App.vue?vue&type=template&id=147f6b0c&":
/*!***********************************************************!*\
  !*** ./assets/vue/App.vue?vue&type=template&id=147f6b0c& ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_147f6b0c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_147f6b0c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_147f6b0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=147f6b0c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/App.vue?vue&type=template&id=147f6b0c&");


/***/ }),

/***/ "./assets/vue/components/ErrorMessage.vue?vue&type=template&id=60d3edd1&":
/*!*******************************************************************************!*\
  !*** ./assets/vue/components/ErrorMessage.vue?vue&type=template&id=60d3edd1& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorMessage_vue_vue_type_template_id_60d3edd1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorMessage_vue_vue_type_template_id_60d3edd1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorMessage_vue_vue_type_template_id_60d3edd1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ErrorMessage.vue?vue&type=template&id=60d3edd1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/ErrorMessage.vue?vue&type=template&id=60d3edd1&");


/***/ }),

/***/ "./assets/vue/components/Post.vue?vue&type=template&id=27c969dc&":
/*!***********************************************************************!*\
  !*** ./assets/vue/components/Post.vue?vue&type=template&id=27c969dc& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_template_id_27c969dc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_template_id_27c969dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_template_id_27c969dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Post.vue?vue&type=template&id=27c969dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/Post.vue?vue&type=template&id=27c969dc&");


/***/ }),

/***/ "./assets/vue/views/Home.vue?vue&type=template&id=e8512dd2&":
/*!******************************************************************!*\
  !*** ./assets/vue/views/Home.vue?vue&type=template&id=e8512dd2& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e8512dd2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e8512dd2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e8512dd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=e8512dd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/views/Home.vue?vue&type=template&id=e8512dd2&");


/***/ }),

/***/ "./assets/vue/views/Login.vue?vue&type=template&id=0cfaa061&":
/*!*******************************************************************!*\
  !*** ./assets/vue/views/Login.vue?vue&type=template&id=0cfaa061& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0cfaa061___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0cfaa061___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0cfaa061___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=0cfaa061& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/views/Login.vue?vue&type=template&id=0cfaa061&");


/***/ }),

/***/ "./assets/vue/views/Posts.vue?vue&type=template&id=283a306a&":
/*!*******************************************************************!*\
  !*** ./assets/vue/views/Posts.vue?vue&type=template&id=283a306a& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_template_id_283a306a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_template_id_283a306a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_template_id_283a306a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Posts.vue?vue&type=template&id=283a306a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/views/Posts.vue?vue&type=template&id=283a306a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/App.vue?vue&type=template&id=147f6b0c&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/App.vue?vue&type=template&id=147f6b0c& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { className: "container" } },
    [
      _c(
        "nav",
        {
          attrs: { className: "navbar navbar-expand-lg navbar-light bg-light" },
        },
        [
          _c(
            "router-link",
            { attrs: { className: "navbar-brand", to: "/home" } },
            [_vm._v("\n      App\n    ")]
          ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            {
              attrs: { id: "navbarNav", className: "collapse navbar-collapse" },
            },
            [
              _c(
                "ul",
                { attrs: { className: "navbar-nav" } },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        className: "nav-item",
                        tag: "li",
                        to: "/home",
                        "active-class": "active",
                      },
                    },
                    [
                      _c("a", { attrs: { className: "nav-link" } }, [
                        _vm._v("Home"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      attrs: {
                        className: "nav-item",
                        tag: "li",
                        to: "/posts",
                        "active-class": "active",
                      },
                    },
                    [
                      _c("a", { attrs: { className: "nav-link" } }, [
                        _vm._v("Posts"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _vm.isAuthenticated
                    ? _c("li", { attrs: { className: "nav-item" } }, [
                        _c(
                          "a",
                          {
                            attrs: {
                              className: "nav-link",
                              href: "/api/security/logout",
                            },
                          },
                          [_vm._v("Logout")]
                        ),
                      ])
                    : _vm._e(),
                ],
                1
              ),
            ]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("router-view"),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        attrs: {
          className: "navbar-toggler",
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarNav",
          "aria-controls": "navbarNav",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
        },
      },
      [_c("span", { attrs: { className: "navbar-toggler-icon" } })]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/ErrorMessage.vue?vue&type=template&id=60d3edd1&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/ErrorMessage.vue?vue&type=template&id=60d3edd1& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "alert alert-danger", attrs: { role: "alert" } },
    [_vm._v("\n  " + _vm._s(_vm.error.response.data.error) + "\n")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/Post.vue?vue&type=template&id=27c969dc&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/Post.vue?vue&type=template&id=27c969dc& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card w-100 mt-2" }, [
    _c("div", { staticClass: "card-body" }, [
      _vm._v("\n    " + _vm._s(_vm.message) + "\n  "),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/views/Home.vue?vue&type=template&id=e8512dd2&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/views/Home.vue?vue&type=template&id=e8512dd2& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "row col" }, [_c("h1", [_vm._v("Homepage")])]),
      _vm._v(" "),
      _c("div", { staticClass: "row col" }, [
        _c("p", [_vm._v("This is the homepage of our Vue.js application.")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/views/Login.vue?vue&type=template&id=0cfaa061&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/views/Login.vue?vue&type=template&id=0cfaa061& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row col" }, [
      _c("form", [
        _c("div", { staticClass: "form-row" }, [
          _c("div", { staticClass: "col-4" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.login,
                  expression: "login",
                },
              ],
              staticClass: "form-control",
              attrs: { type: "text" },
              domProps: { value: _vm.login },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.login = $event.target.value
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-4" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.password,
                  expression: "password",
                },
              ],
              staticClass: "form-control",
              attrs: { type: "password" },
              domProps: { value: _vm.password },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.password = $event.target.value
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-4" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: {
                  disabled:
                    _vm.login.length === 0 ||
                    _vm.password.length === 0 ||
                    _vm.isLoading,
                  type: "button",
                },
                on: {
                  click: function ($event) {
                    return _vm.performLogin()
                  },
                },
              },
              [_vm._v("\n            Login\n          ")]
            ),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _vm.isLoading
      ? _c("div", { staticClass: "row col" }, [_c("p", [_vm._v("Loading...")])])
      : _vm.hasError
      ? _c(
          "div",
          { staticClass: "row col" },
          [_c("error-message", { attrs: { error: _vm.error } })],
          1
        )
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row col" }, [_c("h1", [_vm._v("Login")])])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/views/Posts.vue?vue&type=template&id=283a306a&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/views/Posts.vue?vue&type=template&id=283a306a& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _vm.canCreatePost
        ? _c("div", { staticClass: "row col" }, [
            _c("form", [
              _c("div", { staticClass: "form-row" }, [
                _c("div", { staticClass: "col-8" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.message,
                        expression: "message",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.message },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.message = $event.target.value
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-4" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: {
                        disabled: _vm.message.length === 0 || _vm.isLoading,
                        type: "button",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.createPost()
                        },
                      },
                    },
                    [_vm._v("\n            Create\n          ")]
                  ),
                ]),
              ]),
            ]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.isLoading
        ? _c("div", { staticClass: "row col" }, [
            _c("p", [_vm._v("Loading...")]),
          ])
        : _vm.hasError
        ? _c(
            "div",
            { staticClass: "row col" },
            [_c("error-message", { attrs: { error: _vm.error } })],
            1
          )
        : !_vm.hasPosts
        ? _c("div", { staticClass: "row col" }, [_vm._v("\n    No posts!\n  ")])
        : _vm._l(_vm.posts, function (post) {
            return _c(
              "div",
              { key: post.id, staticClass: "row col" },
              [_c("post", { attrs: { message: post.message } })],
              1
            )
          }),
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row col" }, [_c("h1", [_vm._v("Posts")])])
  },
]
render._withStripped = true



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksingle_page"] = self["webpackChunksingle_page"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_runtime_regenerator_index_js-node_modules_axios_index_js-node_modu-7d7b37"], () => (__webpack_require__("./assets/vue/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2luZ2xlLXBhZ2UvLi9hc3NldHMvdnVlL2FwaS9wb3N0LmpzIiwid2VicGFjazovL3NpbmdsZS1wYWdlLy4vYXNzZXRzL3Z1ZS9hcGkvc2VjdXJpdHkuanMiLCJ3ZWJwYWNrOi8vc2luZ2xlLXBhZ2UvLi9hc3NldHMvdnVlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmdsZS1wYWdlLy4vYXNzZXRzL3Z1ZS9yb3V0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZ2xlLXBhZ2UvLi9hc3NldHMvdnVlL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmdsZS1wYWdlLy4vYXNzZXRzL3Z1ZS9zdG9yZS9wb3N0LmpzIiwid2VicGFjazovL3NpbmdsZS1wYWdlLy4vYXNzZXRzL3Z1ZS9zdG9yZS9zZWN1cml0eS5qcyIsIndlYnBhY2s6Ly9zaW5nbGUtcGFnZS9hc3NldHMvdnVlL0FwcC52dWUiLCJ3ZWJwYWNrOi8vc2luZ2xlLXBhZ2UvYXNzZXRzL3Z1ZS9jb21wb25lbnRzL0Vycm9yTWVzc2FnZS52dWUiLCJ3ZWJwYWNrOi8vc2luZ2xlLXBhZ2UvYXNzZXRzL3Z1ZS9jb21wb25lbnRzL1Bvc3QudnVlIiwid2VicGFjazovL3NpbmdsZS1wYWdlL2Fzc2V0cy92dWUvdmlld3MvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vc2luZ2xlLXBhZ2UvYXNzZXRzL3Z1ZS92aWV3cy9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vc2luZ2xlLXBhZ2UvYXNzZXRzL3Z1ZS92aWV3cy9Qb3N0cy52dWUiLCJ3ZWJwYWNrOi8vc2luZ2xlLXBhZ2UvLi9hc3NldHMvdnVlL0FwcC52dWUiLCJ3ZWJwYWNrOi8vc2luZ2xlLXBhZ2UvLi9hc3NldHMvdnVlL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlLnZ1ZSIsIndlYnBhY2s6Ly9zaW5nbGUtcGFnZS8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9Qb3N0LnZ1ZSIsIndlYnBhY2s6Ly9zaW5nbGUtcGFnZS8uL2Fzc2V0cy92dWUvdmlld3MvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vc2luZ2xlLXBhZ2UvLi9hc3NldHMvdnVlL3ZpZXdzL0xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly9zaW5nbGUtcGFnZS8uL2Fzc2V0cy92dWUvdmlld3MvUG9zdHMudnVlIiwid2VicGFjazovL3NpbmdsZS1wYWdlLy4vYXNzZXRzL3Z1ZS9BcHAudnVlP2FiOTkiLCJ3ZWJwYWNrOi8vc2luZ2xlLXBhZ2UvLi9hc3NldHMvdnVlL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlLnZ1ZT9kNDM3Iiwid2VicGFjazovL3NpbmdsZS1wYWdlLy4vYXNzZXRzL3Z1ZS9jb21wb25lbnRzL1Bvc3QudnVlPzdhZWIiLCJ3ZWJwYWNrOi8vc2luZ2xlLXBhZ2UvLi9hc3NldHMvdnVlL3ZpZXdzL0hvbWUudnVlPzcxMzIiLCJ3ZWJwYWNrOi8vc2luZ2xlLXBhZ2UvLi9hc3NldHMvdnVlL3ZpZXdzL0xvZ2luLnZ1ZT83OTg2Iiwid2VicGFjazovL3NpbmdsZS1wYWdlLy4vYXNzZXRzL3Z1ZS92aWV3cy9Qb3N0cy52dWU/NTlmZSIsIndlYnBhY2s6Ly9zaW5nbGUtcGFnZS8uL2Fzc2V0cy92dWUvQXBwLnZ1ZT9lMzcxIiwid2VicGFjazovL3NpbmdsZS1wYWdlLy4vYXNzZXRzL3Z1ZS9jb21wb25lbnRzL0Vycm9yTWVzc2FnZS52dWU/NjcxYSIsIndlYnBhY2s6Ly9zaW5nbGUtcGFnZS8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9Qb3N0LnZ1ZT8xNmE4Iiwid2VicGFjazovL3NpbmdsZS1wYWdlLy4vYXNzZXRzL3Z1ZS92aWV3cy9Ib21lLnZ1ZT81NzUzIiwid2VicGFjazovL3NpbmdsZS1wYWdlLy4vYXNzZXRzL3Z1ZS92aWV3cy9Mb2dpbi52dWU/MmIyOSIsIndlYnBhY2s6Ly9zaW5nbGUtcGFnZS8uL2Fzc2V0cy92dWUvdmlld3MvUG9zdHMudnVlPzM3ZDUiLCJ3ZWJwYWNrOi8vc2luZ2xlLXBhZ2UvLi9hc3NldHMvdnVlL0FwcC52dWU/MjM1MSIsIndlYnBhY2s6Ly9zaW5nbGUtcGFnZS8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9FcnJvck1lc3NhZ2UudnVlP2JmMjQiLCJ3ZWJwYWNrOi8vc2luZ2xlLXBhZ2UvLi9hc3NldHMvdnVlL2NvbXBvbmVudHMvUG9zdC52dWU/NTlmZSIsIndlYnBhY2s6Ly9zaW5nbGUtcGFnZS8uL2Fzc2V0cy92dWUvdmlld3MvSG9tZS52dWU/OGVhZCIsIndlYnBhY2s6Ly9zaW5nbGUtcGFnZS8uL2Fzc2V0cy92dWUvdmlld3MvTG9naW4udnVlPzQwNTQiLCJ3ZWJwYWNrOi8vc2luZ2xlLXBhZ2UvLi9hc3NldHMvdnVlL3ZpZXdzL1Bvc3RzLnZ1ZT82YzZjIiwid2VicGFjazovL3NpbmdsZS1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbmdsZS1wYWdlL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vc2luZ2xlLXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2luZ2xlLXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NpbmdsZS1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc2luZ2xlLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaW5nbGUtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NpbmdsZS1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3NpbmdsZS1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc2luZ2xlLXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3NpbmdsZS1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjcmVhdGUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvcG9zdHNcIiwge1xuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGZpbmRBbGwoKSB7XG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoXCIvYXBpL3Bvc3RzXCIpO1xuICAgIH1cbn07IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbG9naW4obG9naW4sIHBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9zZWN1cml0eS9sb2dpblwiLCB7XG4gICAgICAgICAgICB1c2VybmFtZTogbG9naW4sXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcbmltcG9ydCByb3V0ZXIgZnJvbSBcIi4vcm91dGVyXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vc3RvcmVcIjtcblxubmV3IFZ1ZSh7XG4gICAgY29tcG9uZW50czogeyBBcHAgfSxcbiAgICB0ZW1wbGF0ZTogXCI8QXBwLz5cIixcbiAgICByb3V0ZXIsXG4gICAgc3RvcmVcbn0pLiRtb3VudChcIiNhcHBcIik7IiwiaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgVnVlUm91dGVyIGZyb20gXCJ2dWUtcm91dGVyXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3N0b3JlXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vdmlld3MvSG9tZVwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCIuLi92aWV3cy9Mb2dpblwiO1xuaW1wb3J0IFBvc3RzIGZyb20gXCIuLi92aWV3cy9Qb3N0c1wiO1xuXG5WdWUudXNlKFZ1ZVJvdXRlcik7XG5cbmxldCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcbiAgICBtb2RlOiBcImhpc3RvcnlcIixcbiAgICByb3V0ZXM6IFtcbiAgICAgICAgeyBwYXRoOiBcIi9ob21lXCIsIGNvbXBvbmVudDogSG9tZSB9LFxuICAgICAgICB7IHBhdGg6IFwiL2xvZ2luXCIsIGNvbXBvbmVudDogTG9naW4gfSxcbiAgICAgICAgeyBwYXRoOiBcIi9wb3N0c1wiLCBjb21wb25lbnQ6IFBvc3RzLCBtZXRhOiB7IHJlcXVpcmVzQXV0aDogdHJ1ZSB9IH0sXG4gICAgICAgIHsgcGF0aDogXCIqXCIsIHJlZGlyZWN0OiBcIi9ob21lXCIgfVxuICAgIF0sXG59KTtcblxuY29uc29sZS5sb2cocm91dGVyKVxuXG5yb3V0ZXIuYmVmb3JlRWFjaCgodG8sIGZyb20sIG5leHQpID0+IHtcbiAgICBpZiAodG8ubWF0Y2hlZC5zb21lKHJlY29yZCA9PiByZWNvcmQubWV0YS5yZXF1aXJlc0F1dGgpKSB7XG4gICAgICAgIC8vIHRoaXMgcm91dGUgcmVxdWlyZXMgYXV0aCwgY2hlY2sgaWYgbG9nZ2VkIGluXG4gICAgICAgIC8vIGlmIG5vdCwgcmVkaXJlY3QgdG8gbG9naW4gcGFnZS5cbiAgICAgICAgaWYgKHN0b3JlLmdldHRlcnNbXCJzZWN1cml0eS9pc0F1dGhlbnRpY2F0ZWRcIl0pIHtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHQoe1xuICAgICAgICAgICAgICAgIHBhdGg6IFwiL2xvZ2luXCIsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHsgcmVkaXJlY3Q6IHRvLmZ1bGxQYXRoIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dCgpOyAvLyBtYWtlIHN1cmUgdG8gYWx3YXlzIGNhbGwgbmV4dCgpIVxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7IiwiaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgVnVleCBmcm9tIFwidnVleFwiO1xuaW1wb3J0IFBvc3RNb2R1bGUgZnJvbSBcIi4vcG9zdFwiO1xuaW1wb3J0IFNlY3VyaXR5TW9kdWxlIGZyb20gXCIuL3NlY3VyaXR5XCI7XG5cblZ1ZS51c2UoVnVleCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcbiAgICBtb2R1bGVzOiB7XG4gICAgICAgIHNlY3VyaXR5OiBTZWN1cml0eU1vZHVsZSxcbiAgICAgICAgcG9zdDogUG9zdE1vZHVsZVxuICAgIH1cbn0pOyIsImltcG9ydCBQb3N0QVBJIGZyb20gXCIuLi9hcGkvcG9zdFwiO1xuXG5jb25zdCBDUkVBVElOR19QT1NUID0gXCJDUkVBVElOR19QT1NUXCIsXG4gICAgQ1JFQVRJTkdfUE9TVF9TVUNDRVNTID0gXCJDUkVBVElOR19QT1NUX1NVQ0NFU1NcIixcbiAgICBDUkVBVElOR19QT1NUX0VSUk9SID0gXCJDUkVBVElOR19QT1NUX0VSUk9SXCIsXG4gICAgRkVUQ0hJTkdfUE9TVFMgPSBcIkZFVENISU5HX1BPU1RTXCIsXG4gICAgRkVUQ0hJTkdfUE9TVFNfU1VDQ0VTUyA9IFwiRkVUQ0hJTkdfUE9TVFNfU1VDQ0VTU1wiLFxuICAgIEZFVENISU5HX1BPU1RTX0VSUk9SID0gXCJGRVRDSElOR19QT1NUU19FUlJPUlwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcbiAgICBzdGF0ZToge1xuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgcG9zdHM6IFtdXG4gICAgfSxcbiAgICBnZXR0ZXJzOiB7XG4gICAgICAgIGlzTG9hZGluZyhzdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmlzTG9hZGluZztcbiAgICAgICAgfSxcbiAgICAgICAgaGFzRXJyb3Ioc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5lcnJvciAhPT0gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3Ioc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5lcnJvcjtcbiAgICAgICAgfSxcbiAgICAgICAgaGFzUG9zdHMoc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5wb3N0cy5sZW5ndGggPiAwO1xuICAgICAgICB9LFxuICAgICAgICBwb3N0cyhzdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLnBvc3RzO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgW0NSRUFUSU5HX1BPU1RdKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBbQ1JFQVRJTkdfUE9TVF9TVUNDRVNTXShzdGF0ZSwgcG9zdCkge1xuICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICAgICAgICBzdGF0ZS5wb3N0cy51bnNoaWZ0KHBvc3QpO1xuICAgICAgICB9LFxuICAgICAgICBbQ1JFQVRJTkdfUE9TVF9FUlJPUl0oc3RhdGUsIGVycm9yKSB7XG4gICAgICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHN0YXRlLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICBzdGF0ZS5wb3N0cyA9IFtdO1xuICAgICAgICB9LFxuICAgICAgICBbRkVUQ0hJTkdfUE9TVFNdKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgc3RhdGUucG9zdHMgPSBbXTtcbiAgICAgICAgfSxcbiAgICAgICAgW0ZFVENISU5HX1BPU1RTX1NVQ0NFU1NdKHN0YXRlLCBwb3N0cykge1xuICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICAgICAgICBzdGF0ZS5wb3N0cyA9IHBvc3RzO1xuICAgICAgICB9LFxuICAgICAgICBbRkVUQ0hJTkdfUE9TVFNfRVJST1JdKHN0YXRlLCBlcnJvcikge1xuICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgc3RhdGUucG9zdHMgPSBbXTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYWN0aW9uczoge1xuICAgICAgICBhc3luYyBjcmVhdGUoeyBjb21taXQgfSwgbWVzc2FnZSkge1xuICAgICAgICAgICAgY29tbWl0KENSRUFUSU5HX1BPU1QpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBQb3N0QVBJLmNyZWF0ZShtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBjb21taXQoQ1JFQVRJTkdfUE9TVF9TVUNDRVNTLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29tbWl0KENSRUFUSU5HX1BPU1RfRVJST1IsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgZmluZEFsbCh7IGNvbW1pdCB9KSB7XG4gICAgICAgICAgICBjb21taXQoRkVUQ0hJTkdfUE9TVFMpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBQb3N0QVBJLmZpbmRBbGwoKTtcbiAgICAgICAgICAgICAgICBjb21taXQoRkVUQ0hJTkdfUE9TVFNfU1VDQ0VTUywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbW1pdChGRVRDSElOR19QT1NUU19FUlJPUiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTsiLCJpbXBvcnQgU2VjdXJpdHlBUEkgZnJvbSBcIi4uL2FwaS9zZWN1cml0eVwiO1xuXG5jb25zdCBBVVRIRU5USUNBVElORyA9IFwiQVVUSEVOVElDQVRJTkdcIixcbiAgICBBVVRIRU5USUNBVElOR19TVUNDRVNTID0gXCJBVVRIRU5USUNBVElOR19TVUNDRVNTXCIsXG4gICAgQVVUSEVOVElDQVRJTkdfRVJST1IgPSBcIkFVVEhFTlRJQ0FUSU5HX0VSUk9SXCIsXG4gICAgUFJPVklESU5HX0RBVEFfT05fUkVGUkVTSF9TVUNDRVNTID0gXCJQUk9WSURJTkdfREFUQV9PTl9SRUZSRVNIX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG4gICAgc3RhdGU6IHtcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXG4gICAgICAgIHVzZXI6IG51bGxcbiAgICB9LFxuICAgIGdldHRlcnM6IHtcbiAgICAgICAgaXNMb2FkaW5nKHN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuaXNMb2FkaW5nO1xuICAgICAgICB9LFxuICAgICAgICBoYXNFcnJvcihzdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmVycm9yICE9PSBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcihzdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmVycm9yO1xuICAgICAgICB9LFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQoc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGhhc1JvbGUoc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiByb2xlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUudXNlci5yb2xlcy5pbmRleE9mKHJvbGUpICE9PSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICAgIFtBVVRIRU5USUNBVElOR10oc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICAgICAgICBzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHN0YXRlLnVzZXIgPSBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBbQVVUSEVOVElDQVRJTkdfU1VDQ0VTU10oc3RhdGUsIHVzZXIpIHtcbiAgICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgc3RhdGUuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHN0YXRlLnVzZXIgPSB1c2VyO1xuICAgICAgICB9LFxuICAgICAgICBbQVVUSEVOVElDQVRJTkdfRVJST1JdKHN0YXRlLCBlcnJvcikge1xuICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgc3RhdGUuaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBzdGF0ZS51c2VyID0gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgW1BST1ZJRElOR19EQVRBX09OX1JFRlJFU0hfU1VDQ0VTU10oc3RhdGUsIHBheWxvYWQpIHtcbiAgICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgc3RhdGUuaXNBdXRoZW50aWNhdGVkID0gcGF5bG9hZC5pc0F1dGhlbnRpY2F0ZWQ7XG4gICAgICAgICAgICBzdGF0ZS51c2VyID0gcGF5bG9hZC51c2VyO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGFzeW5jIGxvZ2luKHtjb21taXR9LCBwYXlsb2FkKSB7XG4gICAgICAgICAgICBjb21taXQoQVVUSEVOVElDQVRJTkcpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBTZWN1cml0eUFQSS5sb2dpbihwYXlsb2FkLmxvZ2luLCBwYXlsb2FkLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICBjb21taXQoQVVUSEVOVElDQVRJTkdfU1VDQ0VTUywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbW1pdChBVVRIRU5USUNBVElOR19FUlJPUiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblJlZnJlc2goe2NvbW1pdH0sIHBheWxvYWQpIHtcbiAgICAgICAgICAgIGNvbW1pdChQUk9WSURJTkdfREFUQV9PTl9SRUZSRVNIX1NVQ0NFU1MsIHBheWxvYWQpO1xuICAgICAgICB9XG4gICAgfVxufSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBiZy1saWdodFwiPlxuICAgICAgPHJvdXRlci1saW5rXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCJcbiAgICAgICAgICB0bz1cIi9ob21lXCJcbiAgICAgID5cbiAgICAgICAgQXBwXG4gICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICBkYXRhLXRhcmdldD1cIiNuYXZiYXJOYXZcIlxuICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZcIlxuICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdlxuICAgICAgICAgIGlkPVwibmF2YmFyTmF2XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIlxuICAgICAgPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxuICAgICAgICAgIDxyb3V0ZXItbGlua1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbVwiXG4gICAgICAgICAgICAgIHRhZz1cImxpXCJcbiAgICAgICAgICAgICAgdG89XCIvaG9tZVwiXG4gICAgICAgICAgICAgIGFjdGl2ZS1jbGFzcz1cImFjdGl2ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Ib21lPC9hPlxuICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgPHJvdXRlci1saW5rXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCJcbiAgICAgICAgICAgICAgdGFnPVwibGlcIlxuICAgICAgICAgICAgICB0bz1cIi9wb3N0c1wiXG4gICAgICAgICAgICAgIGFjdGl2ZS1jbGFzcz1cImFjdGl2ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Qb3N0czwvYT5cbiAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICB2LWlmPVwiaXNBdXRoZW50aWNhdGVkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIvYXBpL3NlY3VyaXR5L2xvZ291dFwiXG4gICAgICAgICAgICA+TG9nb3V0PC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cblxuICAgIDxyb3V0ZXItdmlldy8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkFwcFwiLFxuICBjb21wdXRlZDoge1xuICAgIGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzW1wic2VjdXJpdHkvaXNBdXRoZW50aWNhdGVkXCJdXG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICBsZXQgaXNBdXRoZW50aWNhdGVkID0gSlNPTi5wYXJzZSh0aGlzLiRwYXJlbnQuJGVsLmF0dHJpYnV0ZXNbXCJkYXRhLWlzLWF1dGhlbnRpY2F0ZWRcIl0udmFsdWUpLFxuICAgICAgICB1c2VyID0gSlNPTi5wYXJzZSh0aGlzLiRwYXJlbnQuJGVsLmF0dHJpYnV0ZXNbXCJkYXRhLXVzZXJcIl0udmFsdWUpO1xuICAgIGxldCBwYXlsb2FkID0ge2lzQXV0aGVudGljYXRlZDogaXNBdXRoZW50aWNhdGVkLCB1c2VyOiB1c2VyfTtcbiAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcInNlY3VyaXR5L29uUmVmcmVzaFwiLCBwYXlsb2FkKTtcbiAgICBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHVuZGVmaW5lZCwgKGVycikgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHtcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtwYXRoOiBcIi9sb2dpblwifSlcbiAgICAgICAgfSBlbHNlIGlmIChlcnIucmVzcG9uc2Uuc3RhdHVzID09PSA1MDApIHtcbiAgICAgICAgICBkb2N1bWVudC5vcGVuKCk7XG4gICAgICAgICAgZG9jdW1lbnQud3JpdGUoZXJyLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgIGRvY3VtZW50LmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG59XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICAgIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcbiAgICAgIHJvbGU9XCJhbGVydFwiXG4gID5cbiAgICB7eyBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yIH19XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJFcnJvck1lc3NhZ2VcIixcbiAgcHJvcHM6IHtcbiAgICBlcnJvcjoge1xuICAgICAgdHlwZTogRXJyb3IsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcbn1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNhcmQgdy0xMDAgbXQtMlwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgIHt7IG1lc3NhZ2UgfX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlBvc3RcIixcbiAgcHJvcHM6IHtcbiAgICBtZXNzYWdlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGNvbFwiPlxuICAgICAgPGgxPkhvbWVwYWdlPC9oMT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3cgY29sXCI+XG4gICAgICA8cD5UaGlzIGlzIHRoZSBob21lcGFnZSBvZiBvdXIgVnVlLmpzIGFwcGxpY2F0aW9uLjwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkhvbWVcIlxufTtcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGNvbFwiPlxuICAgICAgPGgxPkxvZ2luPC9oMT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3cgY29sXCI+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwibG9naW5cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImxvZ2luLmxlbmd0aCA9PT0gMCB8fCBwYXNzd29yZC5sZW5ndGggPT09IDAgfHwgaXNMb2FkaW5nXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwicGVyZm9ybUxvZ2luKClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdlxuICAgICAgICB2LWlmPVwiaXNMb2FkaW5nXCJcbiAgICAgICAgY2xhc3M9XCJyb3cgY29sXCJcbiAgICA+XG4gICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdlxuICAgICAgICB2LWVsc2UtaWY9XCJoYXNFcnJvclwiXG4gICAgICAgIGNsYXNzPVwicm93IGNvbFwiXG4gICAgPlxuICAgICAgPGVycm9yLW1lc3NhZ2UgOmVycm9yPVwiZXJyb3JcIiAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiTG9naW5cIixcbiAgY29tcG9uZW50czoge1xuICAgIEVycm9yTWVzc2FnZSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9naW46IFwiXCIsXG4gICAgICBwYXNzd29yZDogXCJcIlxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaXNMb2FkaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnNbXCJzZWN1cml0eS9pc0xvYWRpbmdcIl07XG4gICAgfSxcbiAgICBoYXNFcnJvcigpIHtcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzW1wic2VjdXJpdHkvaGFzRXJyb3JcIl07XG4gICAgfSxcbiAgICBlcnJvcigpIHtcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzW1wic2VjdXJpdHkvZXJyb3JcIl07XG4gICAgfVxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIGxldCByZWRpcmVjdCA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnJlZGlyZWN0O1xuXG4gICAgaWYgKHRoaXMuJHN0b3JlLmdldHRlcnNbXCJzZWN1cml0eS9pc0F1dGhlbnRpY2F0ZWRcIl0pIHtcbiAgICAgIGlmICh0eXBlb2YgcmVkaXJlY3QgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe3BhdGg6IHJlZGlyZWN0fSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7cGF0aDogXCIvaG9tZVwifSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgcGVyZm9ybUxvZ2luKCkge1xuICAgICAgbGV0IHBheWxvYWQgPSB7bG9naW46IHRoaXMuJGRhdGEubG9naW4sIHBhc3N3b3JkOiB0aGlzLiRkYXRhLnBhc3N3b3JkfSxcbiAgICAgICAgICByZWRpcmVjdCA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnJlZGlyZWN0O1xuXG4gICAgICBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaChcInNlY3VyaXR5L2xvZ2luXCIsIHBheWxvYWQpO1xuICAgICAgaWYgKCF0aGlzLiRzdG9yZS5nZXR0ZXJzW1wic2VjdXJpdHkvaGFzRXJyb3JcIl0pIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZWRpcmVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtwYXRoOiByZWRpcmVjdH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtwYXRoOiBcIi9ob21lXCJ9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgY29sXCI+XG4gICAgICA8aDE+UG9zdHM8L2gxPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdlxuICAgICAgICB2LWlmPVwiY2FuQ3JlYXRlUG9zdFwiXG4gICAgICAgIGNsYXNzPVwicm93IGNvbFwiXG4gICAgPlxuICAgICAgPGZvcm0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwibWVzc2FnZS5sZW5ndGggPT09IDAgfHwgaXNMb2FkaW5nXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiY3JlYXRlUG9zdCgpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2XG4gICAgICAgIHYtaWY9XCJpc0xvYWRpbmdcIlxuICAgICAgICBjbGFzcz1cInJvdyBjb2xcIlxuICAgID5cbiAgICAgIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2XG4gICAgICAgIHYtZWxzZS1pZj1cImhhc0Vycm9yXCJcbiAgICAgICAgY2xhc3M9XCJyb3cgY29sXCJcbiAgICA+XG4gICAgICA8ZXJyb3ItbWVzc2FnZSA6ZXJyb3I9XCJlcnJvclwiIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2XG4gICAgICAgIHYtZWxzZS1pZj1cIiFoYXNQb3N0c1wiXG4gICAgICAgIGNsYXNzPVwicm93IGNvbFwiXG4gICAgPlxuICAgICAgTm8gcG9zdHMhXG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2XG4gICAgICAgIHYtZm9yPVwicG9zdCBpbiBwb3N0c1wiXG4gICAgICAgIHYtZWxzZVxuICAgICAgICA6a2V5PVwicG9zdC5pZFwiXG4gICAgICAgIGNsYXNzPVwicm93IGNvbFwiXG4gICAgPlxuICAgICAgPHBvc3QgOm1lc3NhZ2U9XCJwb3N0Lm1lc3NhZ2VcIiAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0XCI7XG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiUG9zdHNcIixcbiAgY29tcG9uZW50czoge1xuICAgIFBvc3QsXG4gICAgRXJyb3JNZXNzYWdlXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IFwiXCJcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGlzTG9hZGluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzW1wicG9zdC9pc0xvYWRpbmdcIl07XG4gICAgfSxcbiAgICBoYXNFcnJvcigpIHtcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzW1wicG9zdC9oYXNFcnJvclwiXTtcbiAgICB9LFxuICAgIGVycm9yKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnNbXCJwb3N0L2Vycm9yXCJdO1xuICAgIH0sXG4gICAgaGFzUG9zdHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1tcInBvc3QvaGFzUG9zdHNcIl07XG4gICAgfSxcbiAgICBwb3N0cygpIHtcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzW1wicG9zdC9wb3N0c1wiXTtcbiAgICB9LFxuICAgIGNhbkNyZWF0ZVBvc3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1tcInNlY3VyaXR5L2hhc1JvbGVcIl0oXCJST0xFX0ZPT1wiKTtcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJwb3N0L3Bvc3RzXCIpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgY3JlYXRlUG9zdCgpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwicG9zdC9jcmVhdGVcIiwgdGhpcy4kZGF0YS5tZXNzYWdlKTtcbiAgICAgIGlmIChyZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy4kZGF0YS5tZXNzYWdlID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTQ3ZjZiMGMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvYXBwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE0N2Y2YjBjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE0N2Y2YjBjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE0N2Y2YjBjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0N2Y2YjBjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE0N2Y2YjBjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvdnVlL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Vycm9yTWVzc2FnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjBkM2VkZDEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRXJyb3JNZXNzYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRXJyb3JNZXNzYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvYXBwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzYwZDNlZGQxJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzYwZDNlZGQxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzYwZDNlZGQxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FcnJvck1lc3NhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYwZDNlZGQxJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzYwZDNlZGQxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvdnVlL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUG9zdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjdjOTY5ZGMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUG9zdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Bvc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9hcHAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjdjOTY5ZGMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjdjOTY5ZGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjdjOTY5ZGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Bvc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI3Yzk2OWRjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI3Yzk2OWRjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvdnVlL2NvbXBvbmVudHMvUG9zdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU4NTEyZGQyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvYXBwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2U4NTEyZGQyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2U4NTEyZGQyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2U4NTEyZGQyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lODUxMmRkMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlODUxMmRkMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS92aWV3cy9Ib21lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBjZmFhMDYxJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9hcHAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGNmYWEwNjEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGNmYWEwNjEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGNmYWEwNjEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wY2ZhYTA2MSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwY2ZhYTA2MScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS92aWV3cy9Mb2dpbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Bvc3RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yODNhMzA2YSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Qb3N0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Bvc3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvYXBwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI4M2EzMDZhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI4M2EzMDZhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI4M2EzMDZhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Qb3N0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjgzYTMwNmEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjgzYTMwNmEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92dWUvdmlld3MvUG9zdHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Vycm9yTWVzc2FnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FcnJvck1lc3NhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bvc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTQ3ZjZiMGMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXJyb3JNZXNzYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MGQzZWRkMSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yN2M5NjlkYyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lODUxMmRkMiZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGNmYWEwNjEmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9zdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI4M2EzMDZhJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGF0dHJzOiB7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwibmF2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBjbGFzc05hbWU6IFwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCIgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBjbGFzc05hbWU6IFwibmF2YmFyLWJyYW5kXCIsIHRvOiBcIi9ob21lXCIgfSB9LFxuICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIEFwcFxcbiAgICBcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibmF2YmFyTmF2XCIsIGNsYXNzTmFtZTogXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY2xhc3NOYW1lOiBcIm5hdmJhci1uYXZcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwibmF2LWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG86IFwiL2hvbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNsYXNzXCI6IFwiYWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGNsYXNzTmFtZTogXCJuYXYtbGlua1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiSG9tZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJuYXYtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogXCIvcG9zdHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNsYXNzXCI6IFwiYWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGNsYXNzTmFtZTogXCJuYXYtbGlua1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUG9zdHNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmlzQXV0aGVudGljYXRlZFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgeyBhdHRyczogeyBjbGFzc05hbWU6IFwibmF2LWl0ZW1cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwibmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL2FwaS9zZWN1cml0eS9sb2dvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTG9nb3V0XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJyb3V0ZXItdmlld1wiKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwibmF2YmFyLXRvZ2dsZXJcIixcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJjb2xsYXBzZVwiLFxuICAgICAgICAgIFwiZGF0YS10YXJnZXRcIjogXCIjbmF2YmFyTmF2XCIsXG4gICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IFwibmF2YmFyTmF2XCIsXG4gICAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IFwiZmFsc2VcIixcbiAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJUb2dnbGUgbmF2aWdhdGlvblwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFtfYyhcInNwYW5cIiwgeyBhdHRyczogeyBjbGFzc05hbWU6IFwibmF2YmFyLXRvZ2dsZXItaWNvblwiIH0gfSldXG4gICAgKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIsIGF0dHJzOiB7IHJvbGU6IFwiYWxlcnRcIiB9IH0sXG4gICAgW192bS5fdihcIlxcbiAgXCIgKyBfdm0uX3MoX3ZtLmVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IpICsgXCJcXG5cIildXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgdy0xMDAgbXQtMlwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgIF92bS5fdihcIlxcbiAgICBcIiArIF92bS5fcyhfdm0ubWVzc2FnZSkgKyBcIlxcbiAgXCIpLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5fbSgwKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGNvbFwiIH0sIFtfYyhcImgxXCIsIFtfdm0uX3YoXCJIb21lcGFnZVwiKV0pXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgY29sXCIgfSwgW1xuICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIlRoaXMgaXMgdGhlIGhvbWVwYWdlIG9mIG91ciBWdWUuanMgYXBwbGljYXRpb24uXCIpXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgY29sXCIgfSwgW1xuICAgICAgX2MoXCJmb3JtXCIsIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLXJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubG9naW4sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImxvZ2luXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubG9naW4gfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLmxvZ2luID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFzc3dvcmQgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLnBhc3N3b3JkID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmxvZ2luLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmQubGVuZ3RoID09PSAwIHx8XG4gICAgICAgICAgICAgICAgICAgIF92bS5pc0xvYWRpbmcsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucGVyZm9ybUxvZ2luKClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIExvZ2luXFxuICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uaXNMb2FkaW5nXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGNvbFwiIH0sIFtfYyhcInBcIiwgW192bS5fdihcIkxvYWRpbmcuLi5cIildKV0pXG4gICAgICA6IF92bS5oYXNFcnJvclxuICAgICAgPyBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93IGNvbFwiIH0sXG4gICAgICAgICAgW19jKFwiZXJyb3ItbWVzc2FnZVwiLCB7IGF0dHJzOiB7IGVycm9yOiBfdm0uZXJyb3IgfSB9KV0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGNvbFwiIH0sIFtfYyhcImgxXCIsIFtfdm0uX3YoXCJMb2dpblwiKV0pXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmNhbkNyZWF0ZVBvc3RcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBjb2xcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImZvcm1cIiwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLThcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubWVzc2FnZSB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWVzc2FnZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5tZXNzYWdlLmxlbmd0aCA9PT0gMCB8fCBfdm0uaXNMb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNyZWF0ZVBvc3QoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgQ3JlYXRlXFxuICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uaXNMb2FkaW5nXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgY29sXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJMb2FkaW5nLi4uXCIpXSksXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uaGFzRXJyb3JcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyBjb2xcIiB9LFxuICAgICAgICAgICAgW19jKFwiZXJyb3ItbWVzc2FnZVwiLCB7IGF0dHJzOiB7IGVycm9yOiBfdm0uZXJyb3IgfSB9KV0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6ICFfdm0uaGFzUG9zdHNcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBjb2xcIiB9LCBbX3ZtLl92KFwiXFxuICAgIE5vIHBvc3RzIVxcbiAgXCIpXSlcbiAgICAgICAgOiBfdm0uX2woX3ZtLnBvc3RzLCBmdW5jdGlvbiAocG9zdCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IGtleTogcG9zdC5pZCwgc3RhdGljQ2xhc3M6IFwicm93IGNvbFwiIH0sXG4gICAgICAgICAgICAgIFtfYyhcInBvc3RcIiwgeyBhdHRyczogeyBtZXNzYWdlOiBwb3N0Lm1lc3NhZ2UgfSB9KV0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGNvbFwiIH0sIFtfYyhcImgxXCIsIFtfdm0uX3YoXCJQb3N0c1wiKV0pXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFwcFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzaW5nbGVfcGFnZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzaW5nbGVfcGFnZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYmFiZWxfcnVudGltZV9yZWdlbmVyYXRvcl9pbmRleF9qcy1ub2RlX21vZHVsZXNfYXhpb3NfaW5kZXhfanMtbm9kZV9tb2R1LTdkN2IzN1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy92dWUvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJheGlvcyIsImNyZWF0ZSIsIm1lc3NhZ2UiLCJwb3N0IiwiZmluZEFsbCIsImdldCIsImxvZ2luIiwicGFzc3dvcmQiLCJ1c2VybmFtZSIsIlZ1ZSIsIkFwcCIsInJvdXRlciIsInN0b3JlIiwiY29tcG9uZW50cyIsInRlbXBsYXRlIiwiJG1vdW50IiwiVnVlUm91dGVyIiwiSG9tZSIsIkxvZ2luIiwiUG9zdHMiLCJ1c2UiLCJtb2RlIiwicm91dGVzIiwicGF0aCIsImNvbXBvbmVudCIsIm1ldGEiLCJyZXF1aXJlc0F1dGgiLCJyZWRpcmVjdCIsImNvbnNvbGUiLCJsb2ciLCJiZWZvcmVFYWNoIiwidG8iLCJmcm9tIiwibmV4dCIsIm1hdGNoZWQiLCJzb21lIiwicmVjb3JkIiwiZ2V0dGVycyIsInF1ZXJ5IiwiZnVsbFBhdGgiLCJWdWV4IiwiUG9zdE1vZHVsZSIsIlNlY3VyaXR5TW9kdWxlIiwiU3RvcmUiLCJtb2R1bGVzIiwic2VjdXJpdHkiLCJQb3N0QVBJIiwiQ1JFQVRJTkdfUE9TVCIsIkNSRUFUSU5HX1BPU1RfU1VDQ0VTUyIsIkNSRUFUSU5HX1BPU1RfRVJST1IiLCJGRVRDSElOR19QT1NUUyIsIkZFVENISU5HX1BPU1RTX1NVQ0NFU1MiLCJGRVRDSElOR19QT1NUU19FUlJPUiIsIm5hbWVzcGFjZWQiLCJzdGF0ZSIsImlzTG9hZGluZyIsImVycm9yIiwicG9zdHMiLCJoYXNFcnJvciIsImhhc1Bvc3RzIiwibGVuZ3RoIiwibXV0YXRpb25zIiwidW5zaGlmdCIsImFjdGlvbnMiLCJjb21taXQiLCJyZXNwb25zZSIsImRhdGEiLCJTZWN1cml0eUFQSSIsIkFVVEhFTlRJQ0FUSU5HIiwiQVVUSEVOVElDQVRJTkdfU1VDQ0VTUyIsIkFVVEhFTlRJQ0FUSU5HX0VSUk9SIiwiUFJPVklESU5HX0RBVEFfT05fUkVGUkVTSF9TVUNDRVNTIiwiaXNBdXRoZW50aWNhdGVkIiwidXNlciIsImhhc1JvbGUiLCJyb2xlIiwicm9sZXMiLCJpbmRleE9mIiwicGF5bG9hZCIsIm9uUmVmcmVzaCIsIm5hbWUiLCJjb21wdXRlZCIsImNyZWF0ZWQiLCJkb2N1bWVudCIsInByb3BzIiwidHlwZSIsInJlcXVpcmVkIiwiRXJyb3JNZXNzYWdlIiwibWV0aG9kcyIsInBlcmZvcm1Mb2dpbiIsIlBvc3QiLCJjYW5DcmVhdGVQb3N0IiwiY3JlYXRlUG9zdCIsInJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=