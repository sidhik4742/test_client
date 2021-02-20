webpackHotUpdate_N_E("pages/newPassword",{

/***/ "./pages/newPassword.js":
/*!******************************!*\
  !*** ./pages/newPassword.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _media_sidhik_CodeLove_Coding_SPS_Week_22_Test_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../router/router */ \"./router/router.js\");\n\n\n\nvar _jsxFileName = \"/media/sidhik/CodeLove/Coding/SPS/Week 22/Test_client/pages/newPassword.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_media_sidhik_CodeLove_Coding_SPS_Week_22_Test_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction newPassword() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var statusRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    password: '',\n    c_password: ''\n  }),\n      newPassword = _useState[0],\n      setNewPassword = _useState[1];\n\n  var inputHandler = function inputHandler(event) {\n    setNewPassword(_objectSpread(_objectSpread({}, newPassword), {}, Object(_media_sidhik_CodeLove_Coding_SPS_Week_22_Test_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, event.target.name, event.target.value)));\n  };\n\n  var newPasswordHandler = function newPasswordHandler() {\n    var mailId = router.query ? router.query.email : null;\n\n    if (mailId) {\n      if (newPassword.password === newPassword.c_password && newPassword.password !== '') {\n        var data = {\n          password: newPassword.password,\n          email: mailId\n        };\n        Object(_router_router__WEBPACK_IMPORTED_MODULE_5__[\"newPasswordRoute\"])(data).then(function (result) {\n          console.log(result);\n        });\n      } else {\n        console.log('password does not match');\n        statusRef.current.style.color = 'red';\n        statusRef.current.innerHTML = 'password does not match';\n      }\n    }\n  };\n\n  console.log(router.query.email);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_layout_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"row\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"col-12 container mx-auto d-block \",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n          className: \"text-center mb-2 \",\n          children: \"New password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n          className: \"w-25\",\n          type: \"password\",\n          name: \"password\",\n          placeholder: \"Enter password\",\n          onChange: inputHandler\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"col-12 mt-3 mb-2 \",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n          className: \"w-25\",\n          type: \"password\",\n          name: \"c_password\",\n          placeholder: \"Re-enter password\",\n          onChange: inputHandler\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n          ref: statusRef\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"col-12 mt-3 \",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n          className: \"btn btn-success\",\n          type: \"button\",\n          onClick: newPasswordHandler,\n          children: [' ', \"send\", ' ']\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, this);\n}\n\n_s(newPassword, \"DcLF3IjZuB9/pAxQP9N/9f4KCcA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newPassword);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3UGFzc3dvcmQuanM/YmI3NCJdLCJuYW1lcyI6WyJuZXdQYXNzd29yZCIsInJvdXRlciIsInVzZVJvdXRlciIsInN0YXR1c1JlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwicGFzc3dvcmQiLCJjX3Bhc3N3b3JkIiwic2V0TmV3UGFzc3dvcmQiLCJpbnB1dEhhbmRsZXIiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIm5ld1Bhc3N3b3JkSGFuZGxlciIsIm1haWxJZCIsInF1ZXJ5IiwiZW1haWwiLCJkYXRhIiwibmV3UGFzc3dvcmRSb3V0ZSIsInRoZW4iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsInN0eWxlIiwiY29sb3IiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUNyQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxFQUF4Qjs7QUFIcUIsa0JBS2lCQyxzREFBUSxDQUFDO0FBQzdDQyxZQUFRLEVBQUUsRUFEbUM7QUFFN0NDLGNBQVUsRUFBRTtBQUZpQyxHQUFELENBTHpCO0FBQUEsTUFLZFAsV0FMYztBQUFBLE1BS0RRLGNBTEM7O0FBVXJCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM5QkYsa0JBQWMsaUNBQUtSLFdBQUwsdUtBQW1CVSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFBaEMsRUFBdUNGLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxLQUFwRCxHQUFkO0FBQ0QsR0FGRDs7QUFHQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0IsUUFBSUMsTUFBTSxHQUFHZCxNQUFNLENBQUNlLEtBQVAsR0FBZWYsTUFBTSxDQUFDZSxLQUFQLENBQWFDLEtBQTVCLEdBQW9DLElBQWpEOztBQUNBLFFBQUlGLE1BQUosRUFBWTtBQUNWLFVBQ0VmLFdBQVcsQ0FBQ00sUUFBWixLQUF5Qk4sV0FBVyxDQUFDTyxVQUFyQyxJQUNBUCxXQUFXLENBQUNNLFFBQVosS0FBeUIsRUFGM0IsRUFHRTtBQUNBLFlBQUlZLElBQUksR0FBRztBQUNUWixrQkFBUSxFQUFFTixXQUFXLENBQUNNLFFBRGI7QUFFVFcsZUFBSyxFQUFFRjtBQUZFLFNBQVg7QUFJQUksK0VBQWdCLENBQUNELElBQUQsQ0FBaEIsQ0FBdUJFLElBQXZCLENBQTRCLFVBQUNDLE1BQUQsRUFBWTtBQUN0Q0MsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0QsU0FGRDtBQUdELE9BWEQsTUFXTztBQUNMQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWjtBQUNBcEIsaUJBQVMsQ0FBQ3FCLE9BQVYsQ0FBa0JDLEtBQWxCLENBQXdCQyxLQUF4QixHQUFnQyxLQUFoQztBQUNBdkIsaUJBQVMsQ0FBQ3FCLE9BQVYsQ0FBa0JHLFNBQWxCLEdBQThCLHlCQUE5QjtBQUNEO0FBQ0Y7QUFDRixHQXBCRDs7QUFzQkFMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZdEIsTUFBTSxDQUFDZSxLQUFQLENBQWFDLEtBQXpCO0FBRUEsc0JBQ0UscUVBQUMsaUVBQUQ7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLG1DQUFmO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLG1CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFDRSxtQkFBUyxFQUFDLE1BRFo7QUFFRSxjQUFJLEVBQUMsVUFGUDtBQUdFLGNBQUksRUFBQyxVQUhQO0FBSUUscUJBQVcsRUFBQyxnQkFKZDtBQUtFLGtCQUFRLEVBQUVSO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVdFO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLGdDQUNFO0FBQ0UsbUJBQVMsRUFBQyxNQURaO0FBRUUsY0FBSSxFQUFDLFVBRlA7QUFHRSxjQUFJLEVBQUMsWUFIUDtBQUlFLHFCQUFXLEVBQUMsbUJBSmQ7QUFLRSxrQkFBUSxFQUFFQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFRRTtBQUFHLGFBQUcsRUFBRU47QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLGVBcUJFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsK0JBQ0U7QUFDRSxtQkFBUyxFQUFDLGlCQURaO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSxpQkFBTyxFQUFFVyxrQkFIWDtBQUFBLHFCQUtHLEdBTEgsVUFNTyxHQU5QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0NEOztHQXpFUWQsVztVQUNRRSxxRDs7O0FBMEVGRiwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL25ld1Bhc3N3b3JkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7dXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQnO1xuXG5pbXBvcnQge25ld1Bhc3N3b3JkUm91dGV9IGZyb20gJy4uL3JvdXRlci9yb3V0ZXInO1xuXG5mdW5jdGlvbiBuZXdQYXNzd29yZCgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgc3RhdHVzUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgW25ld1Bhc3N3b3JkLCBzZXROZXdQYXNzd29yZF0gPSB1c2VTdGF0ZSh7XG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIGNfcGFzc3dvcmQ6ICcnLFxuICB9KTtcblxuICBjb25zdCBpbnB1dEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBzZXROZXdQYXNzd29yZCh7Li4ubmV3UGFzc3dvcmQsIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9O1xuICBjb25zdCBuZXdQYXNzd29yZEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgbGV0IG1haWxJZCA9IHJvdXRlci5xdWVyeSA/IHJvdXRlci5xdWVyeS5lbWFpbCA6IG51bGw7XG4gICAgaWYgKG1haWxJZCkge1xuICAgICAgaWYgKFxuICAgICAgICBuZXdQYXNzd29yZC5wYXNzd29yZCA9PT0gbmV3UGFzc3dvcmQuY19wYXNzd29yZCAmJlxuICAgICAgICBuZXdQYXNzd29yZC5wYXNzd29yZCAhPT0gJydcbiAgICAgICkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICBwYXNzd29yZDogbmV3UGFzc3dvcmQucGFzc3dvcmQsXG4gICAgICAgICAgZW1haWw6IG1haWxJZCxcbiAgICAgICAgfTtcbiAgICAgICAgbmV3UGFzc3dvcmRSb3V0ZShkYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXNzd29yZCBkb2VzIG5vdCBtYXRjaCcpO1xuICAgICAgICBzdGF0dXNSZWYuY3VycmVudC5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgICAgICBzdGF0dXNSZWYuY3VycmVudC5pbm5lckhUTUwgPSAncGFzc3dvcmQgZG9lcyBub3QgbWF0Y2gnO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkuZW1haWwpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbnRhaW5lciBteC1hdXRvIGQtYmxvY2sgXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTIgXCI+TmV3IHBhc3N3b3JkPC9oMj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjVcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtpbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG10LTMgbWItMiBcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjVcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIG5hbWU9XCJjX3Bhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmUtZW50ZXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2lucHV0SGFuZGxlcn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwIHJlZj17c3RhdHVzUmVmfT48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtdC0zIFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e25ld1Bhc3N3b3JkSGFuZGxlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgc2VuZHsnICd9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ld1Bhc3N3b3JkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/newPassword.js\n");

/***/ })

})