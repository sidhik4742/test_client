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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/newPassword.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout/layout.js":
/*!*************************************!*\
  !*** ./components/layout/layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/media/sidhik/CodeLove/Coding/SPS/Week 22/Test_client/components/layout/layout.js\";\n\n\nfunction layout(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \" simple login form \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css\",\n        integrity: \"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l\",\n        crossorigin: \"anonymous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"script\", {\n        src: \"https://code.jquery.com/jquery-3.5.1.slim.min.js\",\n        integrity: \"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\",\n        crossorigin: \"anonymous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"script\", {\n        src: \"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js\",\n        integrity: \"sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns\",\n        crossorigin: \"anonymous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this), props.children]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuanM/ODVkNCJdLCJuYW1lcyI6WyJsYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDckIsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUNFLFdBQUcsRUFBQyxZQUROO0FBRUUsWUFBSSxFQUFDLHlFQUZQO0FBR0UsaUJBQVMsRUFBQyx5RUFIWjtBQUlFLG1CQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFTRTtBQUNFLFdBQUcsRUFBQyxrREFETjtBQUVFLGlCQUFTLEVBQUMseUVBRlo7QUFHRSxtQkFBVyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLGVBY0U7QUFDRSxXQUFHLEVBQUMsOEVBRE47QUFFRSxpQkFBUyxFQUFDLHlFQUZaO0FBR0UsbUJBQVcsRUFBQztBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQXFCR0EsS0FBSyxDQUFDQyxRQXJCVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlCRDs7QUFFY0YscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5mdW5jdGlvbiBsYXlvdXQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT4gc2ltcGxlIGxvZ2luIGZvcm0gPC90aXRsZT5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANC42LjAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1CMHZQNXhtQVR3MStLOUtSUWpRRVJKdlR1bVFXMG5QRXp2RjZML1o2bnJvbkozb1VPRlVGcENqRVVRb3VxMitsXCJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgID48L2xpbms+XG5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjUuMS5zbGltLm1pbi5qc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LURmWGR6Mmh0UEgwbHNTU3M1bkNUcHVqL3p5NEMrT0dwYW1vRlZ5MzhNVkJuRStJYmJWWVVldytPckNYYVJrZmpcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANC42LjAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LVBpdjR4Vk5SeU1HcHFrUzJieTZicjRnTko3RFhqcWswOVJtVXBKOGpnR3REN3pQOXl1ZzNnb1FmR0lJMHlBbnNcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/layout.js\n");

/***/ }),

/***/ "./constants/constants.js":
/*!********************************!*\
  !*** ./constants/constants.js ***!
  \********************************/
/*! exports provided: serverUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"serverUrl\", function() { return serverUrl; });\nconst serverUrl = \"http://localhost:3001\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvY29uc3RhbnRzLmpzP2FmMTkiXSwibmFtZXMiOlsic2VydmVyVXJsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU8sTUFBTUEsU0FBUyxHQUFHLHVCQUFsQiIsImZpbGUiOiIuL2NvbnN0YW50cy9jb25zdGFudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2VydmVyVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/constants.js\n");

/***/ }),

/***/ "./pages/newPassword.js":
/*!******************************!*\
  !*** ./pages/newPassword.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../router/router */ \"./router/router.js\");\n\nvar _jsxFileName = \"/media/sidhik/CodeLove/Coding/SPS/Week 22/Test_client/pages/newPassword.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nfunction newPassword() {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const statusRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n  const {\n    0: newPassword,\n    1: setNewPassword\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    password: '',\n    c_password: ''\n  });\n\n  const inputHandler = event => {\n    setNewPassword(_objectSpread(_objectSpread({}, newPassword), {}, {\n      [event.target.name]: event.target.value\n    }));\n  };\n\n  const newPasswordHandler = () => {\n    let mailId = router.query ? router.query.email : null;\n\n    if (mailId) {\n      if (newPassword.password !== '' && newPassword.password === newPassword.c_password) {\n        statusRef.current.innerHTML = '';\n        let data = {\n          password: newPassword.password,\n          email: mailId\n        };\n        Object(_router_router__WEBPACK_IMPORTED_MODULE_4__[\"newPasswordRoute\"])(data).then(result => {\n          console.log(result);\n\n          if (result.status === 200) {\n            router.push('/');\n          } else {\n            statusRef.current.style.color = 'red';\n            statusRef.current.innerHTML = result.msg;\n          }\n        });\n      } else {\n        console.log('password does not match');\n        statusRef.current.style.color = 'red';\n        statusRef.current.innerHTML = 'password does not match';\n      }\n    }\n  };\n\n  console.log(router.query.email);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"row\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"col-12 container mx-auto d-block \",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          className: \"text-center mb-2 \",\n          children: \"New password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          className: \"w-25\",\n          type: \"password\",\n          name: \"password\",\n          placeholder: \"Enter password\",\n          onChange: inputHandler\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"col-12 mt-3 mb-2 \",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          className: \"w-25\",\n          type: \"password\",\n          name: \"c_password\",\n          placeholder: \"Re-enter password\",\n          onChange: inputHandler\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          ref: statusRef\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"col-12 mt-3 \",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"btn btn-success\",\n          type: \"button\",\n          onClick: newPasswordHandler,\n          children: [' ', \"send\", ' ']\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newPassword);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9uZXdQYXNzd29yZC5qcz9iYjc0Il0sIm5hbWVzIjpbIm5ld1Bhc3N3b3JkIiwicm91dGVyIiwidXNlUm91dGVyIiwic3RhdHVzUmVmIiwidXNlUmVmIiwic2V0TmV3UGFzc3dvcmQiLCJ1c2VTdGF0ZSIsInBhc3N3b3JkIiwiY19wYXNzd29yZCIsImlucHV0SGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwibmV3UGFzc3dvcmRIYW5kbGVyIiwibWFpbElkIiwicXVlcnkiLCJlbWFpbCIsImN1cnJlbnQiLCJpbm5lckhUTUwiLCJkYXRhIiwibmV3UGFzc3dvcmRSb3V0ZSIsInRoZW4iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwicHVzaCIsInN0eWxlIiwiY29sb3IiLCJtc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFdBQVQsR0FBdUI7QUFDckIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLFFBQU1DLFNBQVMsR0FBR0Msb0RBQU0sRUFBeEI7QUFFQSxRQUFNO0FBQUEsT0FBQ0osV0FBRDtBQUFBLE9BQWNLO0FBQWQsTUFBZ0NDLHNEQUFRLENBQUM7QUFDN0NDLFlBQVEsRUFBRSxFQURtQztBQUU3Q0MsY0FBVSxFQUFFO0FBRmlDLEdBQUQsQ0FBOUM7O0FBS0EsUUFBTUMsWUFBWSxHQUFJQyxLQUFELElBQVc7QUFDOUJMLGtCQUFjLGlDQUFLTCxXQUFMO0FBQWtCLE9BQUNVLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxJQUFkLEdBQXFCRixLQUFLLENBQUNDLE1BQU4sQ0FBYUU7QUFBcEQsT0FBZDtBQUNELEdBRkQ7O0FBR0EsUUFBTUMsa0JBQWtCLEdBQUcsTUFBTTtBQUMvQixRQUFJQyxNQUFNLEdBQUdkLE1BQU0sQ0FBQ2UsS0FBUCxHQUFlZixNQUFNLENBQUNlLEtBQVAsQ0FBYUMsS0FBNUIsR0FBb0MsSUFBakQ7O0FBQ0EsUUFBSUYsTUFBSixFQUFZO0FBQ1YsVUFDRWYsV0FBVyxDQUFDTyxRQUFaLEtBQXlCLEVBQXpCLElBQ0FQLFdBQVcsQ0FBQ08sUUFBWixLQUF5QlAsV0FBVyxDQUFDUSxVQUZ2QyxFQUdFO0FBQ0FMLGlCQUFTLENBQUNlLE9BQVYsQ0FBa0JDLFNBQWxCLEdBQThCLEVBQTlCO0FBQ0EsWUFBSUMsSUFBSSxHQUFHO0FBQ1RiLGtCQUFRLEVBQUVQLFdBQVcsQ0FBQ08sUUFEYjtBQUVUVSxlQUFLLEVBQUVGO0FBRkUsU0FBWDtBQUlBTSwrRUFBZ0IsQ0FBQ0QsSUFBRCxDQUFoQixDQUF1QkUsSUFBdkIsQ0FBNkJDLE1BQUQsSUFBWTtBQUN0Q0MsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaOztBQUNBLGNBQUlBLE1BQU0sQ0FBQ0csTUFBUCxLQUFrQixHQUF0QixFQUEyQjtBQUN6QnpCLGtCQUFNLENBQUMwQixJQUFQLENBQVksR0FBWjtBQUNELFdBRkQsTUFFTztBQUNMeEIscUJBQVMsQ0FBQ2UsT0FBVixDQUFrQlUsS0FBbEIsQ0FBd0JDLEtBQXhCLEdBQWdDLEtBQWhDO0FBQ0ExQixxQkFBUyxDQUFDZSxPQUFWLENBQWtCQyxTQUFsQixHQUE4QkksTUFBTSxDQUFDTyxHQUFyQztBQUNEO0FBQ0YsU0FSRDtBQVNELE9BbEJELE1Ba0JPO0FBQ0xOLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaO0FBQ0F0QixpQkFBUyxDQUFDZSxPQUFWLENBQWtCVSxLQUFsQixDQUF3QkMsS0FBeEIsR0FBZ0MsS0FBaEM7QUFDQTFCLGlCQUFTLENBQUNlLE9BQVYsQ0FBa0JDLFNBQWxCLEdBQThCLHlCQUE5QjtBQUNEO0FBQ0Y7QUFDRixHQTNCRDs7QUE2QkFLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZeEIsTUFBTSxDQUFDZSxLQUFQLENBQWFDLEtBQXpCO0FBRUEsc0JBQ0UscUVBQUMsaUVBQUQ7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLG1DQUFmO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLG1CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFDRSxtQkFBUyxFQUFDLE1BRFo7QUFFRSxjQUFJLEVBQUMsVUFGUDtBQUdFLGNBQUksRUFBQyxVQUhQO0FBSUUscUJBQVcsRUFBQyxnQkFKZDtBQUtFLGtCQUFRLEVBQUVSO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVdFO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLGdDQUNFO0FBQ0UsbUJBQVMsRUFBQyxNQURaO0FBRUUsY0FBSSxFQUFDLFVBRlA7QUFHRSxjQUFJLEVBQUMsWUFIUDtBQUlFLHFCQUFXLEVBQUMsbUJBSmQ7QUFLRSxrQkFBUSxFQUFFQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFRRTtBQUFHLGFBQUcsRUFBRU47QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLGVBcUJFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsK0JBQ0U7QUFDRSxtQkFBUyxFQUFDLGlCQURaO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSxpQkFBTyxFQUFFVyxrQkFIWDtBQUFBLHFCQUtHLEdBTEgsVUFNTyxHQU5QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0NEOztBQUVjZCwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL25ld1Bhc3N3b3JkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7dXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQnO1xuXG5pbXBvcnQge25ld1Bhc3N3b3JkUm91dGV9IGZyb20gJy4uL3JvdXRlci9yb3V0ZXInO1xuXG5mdW5jdGlvbiBuZXdQYXNzd29yZCgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgc3RhdHVzUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgW25ld1Bhc3N3b3JkLCBzZXROZXdQYXNzd29yZF0gPSB1c2VTdGF0ZSh7XG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIGNfcGFzc3dvcmQ6ICcnLFxuICB9KTtcblxuICBjb25zdCBpbnB1dEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBzZXROZXdQYXNzd29yZCh7Li4ubmV3UGFzc3dvcmQsIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9O1xuICBjb25zdCBuZXdQYXNzd29yZEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgbGV0IG1haWxJZCA9IHJvdXRlci5xdWVyeSA/IHJvdXRlci5xdWVyeS5lbWFpbCA6IG51bGw7XG4gICAgaWYgKG1haWxJZCkge1xuICAgICAgaWYgKFxuICAgICAgICBuZXdQYXNzd29yZC5wYXNzd29yZCAhPT0gJycgJiZcbiAgICAgICAgbmV3UGFzc3dvcmQucGFzc3dvcmQgPT09IG5ld1Bhc3N3b3JkLmNfcGFzc3dvcmRcbiAgICAgICkge1xuICAgICAgICBzdGF0dXNSZWYuY3VycmVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgcGFzc3dvcmQ6IG5ld1Bhc3N3b3JkLnBhc3N3b3JkLFxuICAgICAgICAgIGVtYWlsOiBtYWlsSWQsXG4gICAgICAgIH07XG4gICAgICAgIG5ld1Bhc3N3b3JkUm91dGUoZGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0dXNSZWYuY3VycmVudC5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgc3RhdHVzUmVmLmN1cnJlbnQuaW5uZXJIVE1MID0gcmVzdWx0Lm1zZztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Bhc3N3b3JkIGRvZXMgbm90IG1hdGNoJyk7XG4gICAgICAgIHN0YXR1c1JlZi5jdXJyZW50LnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgICAgIHN0YXR1c1JlZi5jdXJyZW50LmlubmVySFRNTCA9ICdwYXNzd29yZCBkb2VzIG5vdCBtYXRjaCc7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeS5lbWFpbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29udGFpbmVyIG14LWF1dG8gZC1ibG9jayBcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMiBcIj5OZXcgcGFzc3dvcmQ8L2gyPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yNVwiXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2lucHV0SGFuZGxlcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbXQtMyBtYi0yIFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yNVwiXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cImNfcGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZS1lbnRlciBwYXNzd29yZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aW5wdXRIYW5kbGVyfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHAgcmVmPXtzdGF0dXNSZWZ9PjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG10LTMgXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17bmV3UGFzc3dvcmRIYW5kbGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICBzZW5keycgJ31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3UGFzc3dvcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/newPassword.js\n");

/***/ }),

/***/ "./router/router.js":
/*!**************************!*\
  !*** ./router/router.js ***!
  \**************************/
/*! exports provided: loginRoute, signupRoute, forgetPasswordRoute, newPasswordRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRoute\", function() { return loginRoute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signupRoute\", function() { return signupRoute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"forgetPasswordRoute\", function() { return forgetPasswordRoute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newPasswordRoute\", function() { return newPasswordRoute; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ \"./constants/constants.js\");\n\n\naxios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = _constants_constants__WEBPACK_IMPORTED_MODULE_1__[\"serverUrl\"];\nconst loginRoute = credentials => {\n  try {\n    return new Promise((resolve, reject) => {\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/users/login', credentials).then(response => {\n        resolve(response.data);\n      });\n    });\n  } catch (error) {}\n};\nconst signupRoute = formData => {\n  try {\n    return new Promise((resolve, reject) => {\n      const config = {\n        headers: {\n          'content-type': 'multipart/form-data'\n        }\n      };\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/users/signup', formData, config).then(function (response) {\n        console.log(response.data);\n        resolve(response.data);\n      });\n    });\n  } catch (error) {}\n};\nconst forgetPasswordRoute = data => {\n  try {\n    return new Promise((resolve, reject) => {\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/users/forget_password', data).then(function (response) {\n        console.log(response.data);\n        resolve(response.data);\n      });\n    });\n  } catch (error) {}\n};\nconst newPasswordRoute = data => {\n  try {\n    return new Promise((resolve, reject) => {\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/users/change_password', data).then(function (response) {\n        // console.log(response.data);\n        resolve(response.data);\n      });\n    });\n  } catch (error) {}\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yb3V0ZXIvcm91dGVyLmpzP2EwOGMiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJzZXJ2ZXJVcmwiLCJsb2dpblJvdXRlIiwiY3JlZGVudGlhbHMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJzaWdudXBSb3V0ZSIsImZvcm1EYXRhIiwiY29uZmlnIiwiaGVhZGVycyIsImNvbnNvbGUiLCJsb2ciLCJmb3JnZXRQYXNzd29yZFJvdXRlIiwibmV3UGFzc3dvcmRSb3V0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQUEsNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLEdBQXlCQyw4REFBekI7QUFFTyxNQUFNQyxVQUFVLEdBQUlDLFdBQUQsSUFBaUI7QUFDekMsTUFBSTtBQUNGLFdBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUN0Q1Isa0RBQUssQ0FBQ1MsSUFBTixDQUFXLGNBQVgsRUFBMkJKLFdBQTNCLEVBQXdDSyxJQUF4QyxDQUE4Q0MsUUFBRCxJQUFjO0FBQ3pESixlQUFPLENBQUNJLFFBQVEsQ0FBQ0MsSUFBVixDQUFQO0FBQ0QsT0FGRDtBQUdELEtBSk0sQ0FBUDtBQUtELEdBTkQsQ0FNRSxPQUFPQyxLQUFQLEVBQWMsQ0FBRTtBQUNuQixDQVJNO0FBVUEsTUFBTUMsV0FBVyxHQUFJQyxRQUFELElBQWM7QUFDdkMsTUFBSTtBQUNGLFdBQU8sSUFBSVQsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUN0QyxZQUFNUSxNQUFNLEdBQUc7QUFDYkMsZUFBTyxFQUFFO0FBQUMsMEJBQWdCO0FBQWpCO0FBREksT0FBZjtBQUdBakIsa0RBQUssQ0FBQ1MsSUFBTixDQUFXLGVBQVgsRUFBNEJNLFFBQTVCLEVBQXNDQyxNQUF0QyxFQUE4Q04sSUFBOUMsQ0FBbUQsVUFBVUMsUUFBVixFQUFvQjtBQUNyRU8sZUFBTyxDQUFDQyxHQUFSLENBQVlSLFFBQVEsQ0FBQ0MsSUFBckI7QUFDQUwsZUFBTyxDQUFDSSxRQUFRLENBQUNDLElBQVYsQ0FBUDtBQUNELE9BSEQ7QUFJRCxLQVJNLENBQVA7QUFTRCxHQVZELENBVUUsT0FBT0MsS0FBUCxFQUFjLENBQUU7QUFDbkIsQ0FaTTtBQWNBLE1BQU1PLG1CQUFtQixHQUFJUixJQUFELElBQVU7QUFDM0MsTUFBSTtBQUNGLFdBQU8sSUFBSU4sT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUN0Q1Isa0RBQUssQ0FBQ1MsSUFBTixDQUFXLHdCQUFYLEVBQXFDRyxJQUFyQyxFQUEyQ0YsSUFBM0MsQ0FBZ0QsVUFBVUMsUUFBVixFQUFvQjtBQUNsRU8sZUFBTyxDQUFDQyxHQUFSLENBQVlSLFFBQVEsQ0FBQ0MsSUFBckI7QUFDQUwsZUFBTyxDQUFDSSxRQUFRLENBQUNDLElBQVYsQ0FBUDtBQUNELE9BSEQ7QUFJRCxLQUxNLENBQVA7QUFNRCxHQVBELENBT0UsT0FBT0MsS0FBUCxFQUFjLENBQUU7QUFDbkIsQ0FUTTtBQVdBLE1BQU1RLGdCQUFnQixHQUFJVCxJQUFELElBQVU7QUFDeEMsTUFBSTtBQUNGLFdBQU8sSUFBSU4sT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUN0Q1Isa0RBQUssQ0FBQ1MsSUFBTixDQUFXLHdCQUFYLEVBQXFDRyxJQUFyQyxFQUEyQ0YsSUFBM0MsQ0FBZ0QsVUFBVUMsUUFBVixFQUFvQjtBQUNsRTtBQUNBSixlQUFPLENBQUNJLFFBQVEsQ0FBQ0MsSUFBVixDQUFQO0FBQ0QsT0FIRDtBQUlELEtBTE0sQ0FBUDtBQU1ELEdBUEQsQ0FPRSxPQUFPQyxLQUFQLEVBQWMsQ0FBRTtBQUNuQixDQVRNIiwiZmlsZSI6Ii4vcm91dGVyL3JvdXRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7c2VydmVyVXJsfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzJztcblxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IHNlcnZlclVybDtcblxuZXhwb3J0IGNvbnN0IGxvZ2luUm91dGUgPSAoY3JlZGVudGlhbHMpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3MucG9zdCgnL3VzZXJzL2xvZ2luJywgY3JlZGVudGlhbHMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHt9XG59O1xuXG5leHBvcnQgY29uc3Qgc2lnbnVwUm91dGUgPSAoZm9ybURhdGEpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICBoZWFkZXJzOiB7J2NvbnRlbnQtdHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ30sXG4gICAgICB9O1xuICAgICAgYXhpb3MucG9zdCgnL3VzZXJzL3NpZ251cCcsIGZvcm1EYXRhLCBjb25maWcpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7fVxufTtcblxuZXhwb3J0IGNvbnN0IGZvcmdldFBhc3N3b3JkUm91dGUgPSAoZGF0YSkgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvcy5wb3N0KCcvdXNlcnMvZm9yZ2V0X3Bhc3N3b3JkJywgZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHt9XG59O1xuXG5leHBvcnQgY29uc3QgbmV3UGFzc3dvcmRSb3V0ZSA9IChkYXRhKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zLnBvc3QoJy91c2Vycy9jaGFuZ2VfcGFzc3dvcmQnLCBkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge31cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./router/router.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });